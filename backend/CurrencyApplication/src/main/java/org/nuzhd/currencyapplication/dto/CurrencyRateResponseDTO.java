package org.nuzhd.currencyapplication.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.nuzhd.currencyapplication.model.Currency;

import java.math.BigDecimal;
import java.time.LocalDateTime;

public record CurrencyRateResponseDTO(
        LocalDateTime time,
        Currency currency,
        @JsonProperty("cur_unit_rate")
        BigDecimal curUnitRate
) {
}
