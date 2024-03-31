package org.nuzhd.currencyapplication.controller;

import org.nuzhd.currencyapplication.dto.CurrencyRateResponseDTO;
import org.nuzhd.currencyapplication.dto.CurrencyRatesDynamicResponseDTO;
import org.nuzhd.currencyapplication.model.Currency;
import org.nuzhd.currencyapplication.util.ExchangeRatesJsonParser;
import org.nuzhd.currencyapplication.util.ExchangeRatesXMLParser;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@RestController
@RequestMapping("${application.base-path}/daily_rates")
@CrossOrigin
public class CurrencyExchangeRateController {

    private final ExchangeRatesXMLParser ratesParser;
    private final ExchangeRatesJsonParser jsonParser;

    public CurrencyExchangeRateController(ExchangeRatesXMLParser ratesParser, ExchangeRatesJsonParser jsonParser) {
        this.ratesParser = ratesParser;
        this.jsonParser = jsonParser;
    }

    @GetMapping
    public ResponseEntity<CurrencyRatesDynamicResponseDTO> fetchExchangeRatesForPeriod(
            @RequestParam("start_date") String startDate,
            @RequestParam("end_date") String endDate,
            @RequestParam("cur") Currency currency) {

        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yyyy");

        LocalDateTime from = LocalDate.parse(startDate, formatter).atStartOfDay();
        LocalDateTime to = LocalDate.parse(endDate, formatter).atStartOfDay();

        CurrencyRatesDynamicResponseDTO xChangeRates = ratesParser.parseExchangeRatesForPeriod(from, to, currency);

        return ResponseEntity
                .ok(xChangeRates);
    }

    @GetMapping("/actual_rate")
    public ResponseEntity<CurrencyRateResponseDTO> getExchangeRateForCurrency(
            @RequestParam("cur") Currency currency
    ) {

        CurrencyRateResponseDTO response = jsonParser.parseExchangeRates(currency);

        return ResponseEntity
                .ok(response);
    }

}
