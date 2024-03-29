package org.nuzhd.currencyapplication.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Entity(name = "currency_exchange_rate")
public class CurrencyExchangeRate {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private LocalDateTime time;
    private Currency currency;
    @JsonProperty("cur_unit_rate")
    private BigDecimal curUnitRate;

    public CurrencyExchangeRate() {
    }

    public CurrencyExchangeRate(LocalDateTime time, Currency currency, BigDecimal curUnitRate) {
        this.time = time;
        this.currency = currency;
        this.curUnitRate = curUnitRate;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public LocalDateTime getTime() {
        return time;
    }

    public void setTime(LocalDateTime time) {
        this.time = time;
    }

    public Currency getCurrency() {
        return currency;
    }

    public void setCurrency(Currency currency) {
        this.currency = currency;
    }

    public BigDecimal getCurUnitRate() {
        return curUnitRate;
    }

    public void setCurUnitRate(BigDecimal curUnitRate) {
        this.curUnitRate = curUnitRate;
    }
}
