package org.nuzhd.currencyapplication.model;

import jakarta.persistence.*;

import java.math.BigDecimal;

@Entity(name = "bank_account")
public class BankAccount {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @SequenceGenerator(name = "bank_account_seq", allocationSize = 1)
    private Long id;

    private Long ownerId;

    @Enumerated(EnumType.STRING)
    private Currency currency;

    private BigDecimal balance;

    public BankAccount() {
    }

    public BankAccount(Long ownerId, Currency currency, BigDecimal balance) {
        this.ownerId = ownerId;
        this.currency = currency;
        this.balance = balance;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getOwnerId() {
        return ownerId;
    }

    public void setOwnerId(Long owner) {
        this.ownerId = owner;
    }

    public Currency getCurrency() {
        return currency;
    }

    public void setCurrency(Currency currency) {
        this.currency = currency;
    }

    public BigDecimal getBalance() {
        return balance;
    }

    public void setBalance(BigDecimal balance) {
        this.balance = balance;
    }
}
