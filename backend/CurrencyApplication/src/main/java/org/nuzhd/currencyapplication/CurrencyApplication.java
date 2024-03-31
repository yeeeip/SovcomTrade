package org.nuzhd.currencyapplication;

import org.nuzhd.currencyapplication.model.Currency;
import org.nuzhd.currencyapplication.service.AIRecommendationService;
import org.nuzhd.currencyapplication.service.CurrencyNewsService;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@EnableScheduling
@EnableAsync
public class CurrencyApplication {

    public static void main(String[] args) {
        SpringApplication.run(CurrencyApplication.class, args);
    }

    private final CurrencyNewsService newsService;
    private final AIRecommendationService aiRecommendationService;

    public CurrencyApplication(CurrencyNewsService newsService, AIRecommendationService aiRecommendationService) {
        this.newsService = newsService;
        this.aiRecommendationService = aiRecommendationService;
    }

    @Bean
    public ApplicationRunner runner() {
        return args -> {
            if (newsService.findAll().isEmpty()) {
                newsService.parseForCurrencyAndSave(Currency.AED);
                newsService.parseForCurrencyAndSave(Currency.CNY);
            }
//            aiRecommendationService.generateRecommendationsForCurrency(Currency.AED);
//            aiRecommendationService.generateRecommendationsForCurrency(Currency.CNY);
        };
    }
}
