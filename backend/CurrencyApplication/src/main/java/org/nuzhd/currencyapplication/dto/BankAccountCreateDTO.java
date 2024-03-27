package org.nuzhd.currencyapplication.dto;

import jakarta.validation.constraints.NotNull;
import org.nuzhd.currencyapplication.model.Currency;

public record BankAccountCreateDTO(
        @NotNull(message = "{currency.not_null}") Currency currency
) {
}
