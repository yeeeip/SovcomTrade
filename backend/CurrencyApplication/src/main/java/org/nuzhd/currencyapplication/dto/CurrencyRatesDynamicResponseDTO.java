package org.nuzhd.currencyapplication.dto;

import java.math.BigDecimal;
import java.util.List;

public record CurrencyRatesDynamicResponseDTO(

        BigDecimal min,
        BigDecimal max,
        List<CurrencyRateResponseDTO> rates
) {
}
