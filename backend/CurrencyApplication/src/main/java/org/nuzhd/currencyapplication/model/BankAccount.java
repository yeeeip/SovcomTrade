package org.nuzhd.currencyapplication.model;

import jakarta.persistence.*;
import org.nuzhd.currencyapplication.security.user.AppUser;

import java.math.BigDecimal;

@Entity(name = "bank_account")
public class BankAccount {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    private AppUser owner;

    @Enumerated(EnumType.STRING)
    private Currency currency;

    private BigDecimal balance;

    public BankAccount() {
    }

    public BankAccount(AppUser owner, Currency currency, BigDecimal balance) {
        this.owner = owner;
        this.currency = currency;
        this.balance = balance;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public AppUser getOwner() {
        return owner;
    }

    public void setOwner(AppUser owner) {
        this.owner = owner;
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
