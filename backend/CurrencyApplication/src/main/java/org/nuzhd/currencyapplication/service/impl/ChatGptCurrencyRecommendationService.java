package org.nuzhd.currencyapplication.service.impl;

import org.nuzhd.currencyapplication.model.CurrencyAIRecommendation;
import org.nuzhd.currencyapplication.model.CurrencyNews;
import org.nuzhd.currencyapplication.repo.AiRecommendationRepository;
import org.nuzhd.currencyapplication.repo.CurrencyNewsRepository;
import org.nuzhd.currencyapplication.service.AIRecommendationService;
import org.springframework.ai.chat.Generation;
import org.springframework.ai.chat.messages.SystemMessage;
import org.springframework.ai.chat.messages.UserMessage;
import org.springframework.ai.chat.prompt.Prompt;
import org.springframework.ai.openai.OpenAiChatClient;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ChatGptCurrencyRecommendationService implements AIRecommendationService {
    private final OpenAiChatClient chatClient;
    private final AiRecommendationRepository aiRecommendationRepository;
    private final CurrencyNewsRepository newsRepository;

    public ChatGptCurrencyRecommendationService(OpenAiChatClient chatClient, AiRecommendationRepository aiRecommendationRepository, CurrencyNewsRepository newsRepository) {
        this.chatClient = chatClient;
        this.aiRecommendationRepository = aiRecommendationRepository;
        this.newsRepository = newsRepository;
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
            Prompt prompt = new Prompt(List.of(
                    new SystemMessage("""
                            "Твоя роль - финансовый аналитик, который может прогнозировать влияние новостных известий на курсы валют AED и CNY относительно RUB(российский рубль).\s
                            Твоя задача - давать советы по поводу того, стоит ли сейчас вкладываться в упомянутые валюты в соответствии с последними новостями.\s
                            Текст твоего ответа не должен превышать 500-550 символов."
                            """),
                    new UserMessage("""
                            Ознакомься с кратким содержанием следующей новости и дай свой совет: %s - %s
                            """.formatted(news.getTitle(), news.getShortDesc())
                    )
            ));

            Generation resp = chatClient.call(prompt).getResult();

            news.setAnalyzed(true);

            rec = new CurrencyAIRecommendation(
                    news,
                    resp.getOutput().getContent()
            );

            aiRecommendationRepository.save(rec);
        }

    }

    public List<CurrencyAIRecommendation> saveAll(List<CurrencyAIRecommendation> recommendations) {
        return aiRecommendationRepository.saveAll(recommendations);
    }
}
