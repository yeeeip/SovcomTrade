package org.nuzhd.currencyapplication.security.user;

import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity(name = "email_confirmation_token")
public class EmailConfirmationToken {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @SequenceGenerator(name = "email_confirmation_token_seq", allocationSize = 1)
    private Long id;
    private String token;
    private LocalDateTime confirmedAt;
    private LocalDateTime createdAt;
    private LocalDateTime expiresAt;
    @ManyToOne
    private AppUser user;

    public EmailConfirmationToken() {
    }

    public EmailConfirmationToken(String token, LocalDateTime expiresAt, AppUser user) {
        this.token = token;
        this.expiresAt = expiresAt;
        this.user = user;
        this.createdAt = LocalDateTime.now();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public LocalDateTime getConfirmedAt() {
        return confirmedAt;
    }

    public void setConfirmedAt(LocalDateTime confirmedAt) {
        this.confirmedAt = confirmedAt;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }

    public LocalDateTime getExpiresAt() {
        return expiresAt;
    }

    public void setExpiresAt(LocalDateTime expiresAt) {
        this.expiresAt = expiresAt;
    }

    public AppUser getUser() {
        return user;
    }

    public void setUser(AppUser user) {
        this.user = user;
    }
}
