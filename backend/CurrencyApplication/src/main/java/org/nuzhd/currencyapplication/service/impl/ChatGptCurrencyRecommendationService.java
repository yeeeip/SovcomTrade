package org.nuzhd.currencyapplication.service.impl;

import org.nuzhd.currencyapplication.model.Currency;
import org.nuzhd.currencyapplication.model.CurrencyAIRecommendation;
import org.nuzhd.currencyapplication.model.CurrencyNews;
import org.nuzhd.currencyapplication.service.AIRecommendationService;
import org.nuzhd.currencyapplication.service.AiRecommendationRepository;
import org.nuzhd.currencyapplication.service.CurrencyNewsService;
import org.springframework.ai.chat.ChatResponse;
import org.springframework.ai.chat.messages.SystemMessage;
import org.springframework.ai.chat.messages.UserMessage;
import org.springframework.ai.chat.prompt.Prompt;
import org.springframework.ai.openai.OpenAiChatClient;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ChatGptCurrencyRecommendationService implements AIRecommendationService {
    private final OpenAiChatClient chatClient;
    private final AiRecommendationRepository aiRecommendationRepository;
    private final CurrencyNewsService newsService;

    public ChatGptCurrencyRecommendationService(OpenAiChatClient chatClient, AiRecommendationRepository aiRecommendationRepository, CurrencyNewsService newsService) {
        this.chatClient = chatClient;
        this.aiRecommendationRepository = aiRecommendationRepository;
        this.newsService = newsService;
    }

    @Override
    public List<CurrencyAIRecommendation> findAll() {
        return aiRecommendationRepository.findAll();
    }

    @Override
    public List<CurrencyAIRecommendation> generateRecommendationsForCurrency(Currency currency) {
        List<CurrencyNews> curNews = newsService.findAllByCurrency(currency);

        List<CurrencyAIRecommendation> recommendations = new ArrayList<>();

        for (CurrencyNews news : curNews) {

            CurrencyAIRecommendation rec;
            if (!news.isAnalyzed()) {
                Prompt prompt = new Prompt(List.of(
                        new SystemMessage("""
                                Твоя роль - финансовый аналитик, который может прогнозировать влияние новостей на курсы валют AED и CNY относительно RUB(российский рубль).
                                Твоя задача сконцентрироваться именно на курсах CNY, AED и давать краткий прогноз об их поведении относительно курса рубля.
                                """),
                        new UserMessage("""
                                Проанализируй следующую новость и спрогнозируй ее влияние на курс валюты %s: %s.
                                """.formatted(news.getCurrency().name(), news.getShortDesc())
                        )
                ));

                ChatResponse resp = chatClient.call(prompt);

                news.setAnalyzed(true);
                rec = new CurrencyAIRecommendation(
                        news,
                        resp.getResult().getOutput().getContent()
                );

                aiRecommendationRepository.save(rec);
            } else {
                rec = findByNews(news);
            }
            recommendations.add(rec);
        }

        return recommendations;
    }

    @Override
    public CurrencyAIRecommendation findByNews(CurrencyNews news) {
        return aiRecommendationRepository.findByNews(news);
    }

    public List<CurrencyAIRecommendation> saveAll(List<CurrencyAIRecommendation> recommendations) {
        return aiRecommendationRepository.saveAll(recommendations);
    }
}
