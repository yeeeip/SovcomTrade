package org.nuzhd.currencyapplication.dto;


import org.nuzhd.currencyapplication.model.CurrencyOperation;

import java.time.LocalDateTime;

public record CurrencyOperationNotificationResponseDTO(
        Long id,
        CurrencyOperation operation,
        LocalDateTime createdAt,
        String info
) {
}
