package org.nuzhd.currencyapplication;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@EnableScheduling
public class CurrencyApplication {

    public static void main(String[] args) {
        SpringApplication.run(CurrencyApplication.class, args);
    }

}
