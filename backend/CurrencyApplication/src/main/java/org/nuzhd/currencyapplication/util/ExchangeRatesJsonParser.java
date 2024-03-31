package org.nuzhd.currencyapplication.util;

import com.google.gson.JsonIOException;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import org.nuzhd.currencyapplication.dto.CurrencyRateResponseDTO;
import org.nuzhd.currencyapplication.model.Currency;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Component
public class ExchangeRatesJsonParser {

    @Value("${application.cb.json-base-url}")
    private String basePath;

    private final RestTemplate restTemplate = new RestTemplate();

    public CurrencyRateResponseDTO parseExchangeRates(Currency currency) {

        ResponseEntity<String> response
                = restTemplate.getForEntity(basePath + "/daily_json.js", String.class);

        if (response.getStatusCode() != HttpStatusCode.valueOf(200)) {
            throw new JsonIOException("Unable to fetch data");
        }

        JsonObject root = JsonParser.parseString(response.getBody()).getAsJsonObject();

        LocalDateTime time = LocalDateTime.parse(root.get("Date").getAsString().substring(0, 19));
        Currency cur = Currency.valueOf(root
                .get("Valute").getAsJsonObject()
                .get(currency.name()).getAsJsonObject()
                .get("CharCode").getAsString()
        );
        BigDecimal unitRate = BigDecimal.valueOf(
                root.get("Valute").getAsJsonObject()
                        .get(currency.name()).getAsJsonObject()
                        .get("Value").getAsDouble()
        );

        CurrencyRateResponseDTO dto = new CurrencyRateResponseDTO(time, cur, unitRate);

        return dto;
    }
}
