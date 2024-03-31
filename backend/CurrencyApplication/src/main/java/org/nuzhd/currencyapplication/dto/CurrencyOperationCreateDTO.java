package org.nuzhd.currencyapplication.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.validation.constraints.NotNull;

import java.math.BigDecimal;
import java.time.LocalDateTime;

public record CurrencyOperationCreateDTO(

        @NotNull(message = "{currency.operation.debit_account_not_null}")
        @JsonProperty(value = "debit_account_id")
        Long debitAccountId,

        @NotNull(message = "{currency.operation.credit_account_not_null}")
        @JsonProperty(value = "credit_account_id")
        Long creditAccountId,

        @NotNull(message = "{currency.operation.create.course_not_null}")
        BigDecimal course,

        @NotNull(message = "{currency.operation.price.not_null}")
        BigDecimal price,

        @NotNull(message = "{currency.deadline_not_null}")
        LocalDateTime deadline
) {
}
