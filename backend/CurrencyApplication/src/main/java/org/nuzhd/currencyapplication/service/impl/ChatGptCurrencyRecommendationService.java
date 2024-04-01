package org.nuzhd.currencyapplication.service.impl;

import org.nuzhd.currencyapplication.ai.ChatRequest;
import org.nuzhd.currencyapplication.ai.ChatResponse;
import org.nuzhd.currencyapplication.ai.Message;
import org.nuzhd.currencyapplication.model.CurrencyAIRecommendation;
import org.nuzhd.currencyapplication.model.CurrencyNews;
import org.nuzhd.currencyapplication.repo.AiRecommendationRepository;
import org.nuzhd.currencyapplication.repo.CurrencyNewsRepository;
import org.nuzhd.currencyapplication.service.AIRecommendationService;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.List;

@Service
public class ChatGptCurrencyRecommendationService implements AIRecommendationService {
    private final AiRecommendationRepository aiRecommendationRepository;
    private final CurrencyNewsRepository newsRepository;

    @Value("${spring.ai.openai.chat.options.model}")
    private String model;

    @Value("${spring.ai.openai.chat.options.temperature}")
    private Double temperature;

    @Value("${spring.ai.openai.base-url}")
    private String apiUrl;

    @Qualifier("openaiRestTemplate")
    private final RestTemplate restTemplate;

    public ChatGptCurrencyRecommendationService(AiRecommendationRepository aiRecommendationRepository, CurrencyNewsRepository newsRepository, RestTemplate restTemplate) {
        this.aiRecommendationRepository = aiRecommendationRepository;
        this.newsRepository = newsRepository;
        this.restTemplate = restTemplate;
    }

    @Override
    public List<CurrencyAIRecommendation> findAll() {
        return aiRecommendationRepository.findAll();
    }

//    @Scheduled(initialDelay = 10000, fixedDelay = 60000)
    public void generateRecommendationsForCurrency() {
        List<CurrencyNews> foundNews = newsRepository.findNextThreeNotAnalyzed();

        for (CurrencyNews news : foundNews) {
            CurrencyAIRecommendation rec;

            Message systemMsg = new Message("system", """
                    "Твоя роль - финансовый аналитик, который может прогнозировать влияние новостных известий на курсы валют AED и CNY относительно RUB(российский рубль).\s
                    Твоя задача - давать советы по поводу того, стоит ли сейчас вкладываться в упомянутые валюты в соответствии с последними новостями.\s
                    Текст твоего ответа не должен превышать 500-550 символов."
                    """);

            Message userMsg = new Message("user", """
                    Ознакомься с кратким содержанием следующей новости и дай свой совет: %s - %s
                    """
                    .formatted(news.getTitle(), news.getShortDesc())
            );

            ChatRequest request = new ChatRequest(model, temperature, List.of(systemMsg, userMsg));
            ChatResponse response = restTemplate.postForObject(apiUrl, request, ChatResponse.class);

            news.setAnalyzed(true);

            if (response == null || response.getChoices() == null || response.getChoices().isEmpty()) {
                rec = new CurrencyAIRecommendation(
                        news, "Не удалось сгенерировать рекомендацию"
                );
            } else {
                rec = new CurrencyAIRecommendation(
                        news,
                        response.getChoices().get(0).getMessage().getContent()
                );
            }

            aiRecommendationRepository.save(rec);
        }

    }

    public List<CurrencyAIRecommendation> saveAll(List<CurrencyAIRecommendation> recommendations) {
        return aiRecommendationRepository.saveAll(recommendations);
    }
}
