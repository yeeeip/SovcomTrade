package org.nuzhd.currencyapplication.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import org.nuzhd.currencyapplication.security.user.AppUser;

import java.math.BigDecimal;
import java.time.LocalDateTime;

import static jakarta.persistence.FetchType.LAZY;

@Entity(name = "currency_operation")
public class CurrencyOperation {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @SequenceGenerator(name = "currency_operation_seq", allocationSize = 1)
    private Long id;

    @ManyToOne(fetch = LAZY)
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    @JsonIgnore
    private AppUser user;

    @Enumerated(EnumType.ORDINAL)
    private OperationCode code;

    @JsonProperty(value = "created_at")
    private LocalDateTime createdAt;

    @JsonProperty(value = "processed_at")
    private LocalDateTime processedAt;

    @ManyToOne
    @JsonProperty(value = "debit_account_id")
    private BankAccount debitAccount; // Счет списания

    @ManyToOne
    @JsonProperty(value = "credit_account_id")
    private BankAccount creditAccount; // Счет зачисления

    private LocalDateTime deadline;

    private BigDecimal course;

    @Enumerated(EnumType.STRING)
    private OperationStatus status;

    public CurrencyOperation() {
    }

    public CurrencyOperation(AppUser user, OperationCode code, BankAccount debitAccount, BankAccount creditAccount, LocalDateTime deadline, BigDecimal course) {
        this.user = user;
        this.code = code;
        this.debitAccount = debitAccount;
        this.creditAccount = creditAccount;
        this.deadline = deadline;
        this.course = course;
        this.createdAt = LocalDateTime.now();
        this.status = OperationStatus.ACTIVE;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public AppUser getUser() {
        return user;
    }

    public void setUser(AppUser userId) {
        this.user = userId;
    }

    public OperationCode getCode() {
        return code;
    }

    public void setCode(OperationCode code) {
        this.code = code;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }

    public LocalDateTime getProcessedAt() {
        return processedAt;
    }

    public void setProcessedAt(LocalDateTime processedAt) {
        this.processedAt = processedAt;
    }

    public BankAccount getDebitAccount() {
        return debitAccount;
    }

    public void setDebitAccount(BankAccount debitAccountId) {
        this.debitAccount = debitAccountId;
    }

    public BankAccount getCreditAccount() {
        return creditAccount;
    }

    public void setCreditAccount(BankAccount creditAccountId) {
        this.creditAccount = creditAccountId;
    }

    public LocalDateTime getDeadline() {
        return deadline;
    }

    public void setDeadline(LocalDateTime deadline) {
        this.deadline = deadline;
    }

    public OperationStatus getStatus() {
        return status;
    }

    public void setStatus(OperationStatus status) {
        this.status = status;
    }
}
