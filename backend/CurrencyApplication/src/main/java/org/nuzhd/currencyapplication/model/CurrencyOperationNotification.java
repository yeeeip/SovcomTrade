package org.nuzhd.currencyapplication.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import org.nuzhd.currencyapplication.security.user.AppUser;

import java.time.LocalDateTime;

import static jakarta.persistence.GenerationType.AUTO;

@Entity(name = "user_cur_operation_notification")
public class CurrencyOperationNotification {

    @Id
    @GeneratedValue(strategy = AUTO)
    @SequenceGenerator(name = "user_notifications_seq")
    private Long id;
    @ManyToOne
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    private AppUser user;
    @OneToOne
    private CurrencyOperation operation;
    private LocalDateTime createdAt;
    private String info;

    public CurrencyOperationNotification() {
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

    public void setUser(AppUser user) {
        this.user = user;
    }

    public CurrencyOperation getOperation() {
        return operation;
    }

    public void setOperation(CurrencyOperation operation) {
        this.operation = operation;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }

    public String getInfo() {
        return info;
    }

    public void setInfo(String info) {
        this.info = info;
    }

    public CurrencyOperationNotification(Long id, AppUser user, CurrencyOperation operation, LocalDateTime createdAt, String info) {
        this.id = id;
        this.user = user;
        this.operation = operation;
        this.createdAt = createdAt;
        this.info = info;
    }
}
