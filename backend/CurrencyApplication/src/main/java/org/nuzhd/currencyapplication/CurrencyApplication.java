package org.nuzhd.currencyapplication;

import org.nuzhd.currencyapplication.model.Currency;
import org.nuzhd.currencyapplication.service.CurrencyNewsService;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class CurrencyApplication {

    public static void main(String[] args) {
        SpringApplication.run(CurrencyApplication.class, args);
    }

    private final CurrencyNewsService newsService;

    public CurrencyApplication(CurrencyNewsService newsService) {
        this.newsService = newsService;
    }

    @Bean
    public ApplicationRunner runner() {
        return args -> {
            if (newsService.findAll().isEmpty()) {
                newsService.parseForCurrencyAndSave(Currency.AED);
                newsService.parseForCurrencyAndSave(Currency.CNY);
            }
        };
    }
}
