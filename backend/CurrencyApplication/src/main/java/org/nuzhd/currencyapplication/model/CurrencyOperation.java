package org.nuzhd.currencyapplication.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import org.nuzhd.currencyapplication.security.user.AppUser;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Entity(name = "currency_operation")
public class CurrencyOperation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    private AppUser userId;

    @Enumerated(EnumType.ORDINAL)
    private OperationCode code;

    @JsonProperty(value = "created_at")
    private LocalDateTime createdAt;

    @JsonProperty(value = "processed_at")
    private LocalDateTime processedAt;

    @ManyToOne
    @JsonProperty(value = "debit_account_id")
    private BankAccount debitAccountId; // Счет списания

    @ManyToOne
    @JsonProperty(value = "credit_account_id")
    private BankAccount creditAccountId; // Счет зачисления

    private LocalDateTime deadline;

    private BigDecimal course;

    @Enumerated(EnumType.STRING)
    private OperationStatus status;

    public CurrencyOperation() {
    }

    public CurrencyOperation(AppUser user, OperationCode code, BankAccount debitAccountId, BankAccount creditAccountId, LocalDateTime deadline, BigDecimal course) {
        this.userId = user;
        this.code = code;
        this.debitAccountId = debitAccountId;
        this.creditAccountId = creditAccountId;
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

    public AppUser getUserId() {
        return userId;
    }

    public void setUserId(AppUser userId) {
        this.userId = userId;
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

    public BankAccount getDebitAccountId() {
        return debitAccountId;
    }

    public void setDebitAccountId(BankAccount debitAccountId) {
        this.debitAccountId = debitAccountId;
    }

    public BankAccount getCreditAccountId() {
        return creditAccountId;
    }

    public void setCreditAccountId(BankAccount creditAccountId) {
        this.creditAccountId = creditAccountId;
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
