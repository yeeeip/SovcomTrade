package org.nuzhd.currencyapplication.dto;

import org.nuzhd.currencyapplication.model.Currency;

import java.math.BigDecimal;

public record BankAccountResponseDTO(Long id, Long ownerId, Currency currency, BigDecimal bigDecimal) {
}
