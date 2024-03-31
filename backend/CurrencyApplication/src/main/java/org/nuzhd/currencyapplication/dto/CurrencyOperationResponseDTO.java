package org.nuzhd.currencyapplication.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.nuzhd.currencyapplication.model.BankAccount;
import org.nuzhd.currencyapplication.model.OperationCode;
import org.nuzhd.currencyapplication.model.OperationStatus;

import java.time.LocalDateTime;

public record CurrencyOperationResponseDTO(
        Long id,
        @JsonProperty(value = "debit_account_id")
        BankAccount debitAccount, // Счет списания
        @JsonProperty(value = "credit_account_id")
        BankAccount creditAccount,
        @JsonProperty(value = "created_at")
        LocalDateTime createdAt,
        OperationCode code,
        LocalDateTime processedAt,
        OperationStatus status
) {
}
