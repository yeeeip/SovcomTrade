package org.nuzhd.currencyapplication.security.user.service.impl;

import org.nuzhd.currencyapplication.exception.TokenAlreadyConfirmedException;
import org.nuzhd.currencyapplication.exception.TokenExpiredException;
import org.nuzhd.currencyapplication.exception.TokenNotFoundException;
import org.nuzhd.currencyapplication.security.user.AppUser;
import org.nuzhd.currencyapplication.security.user.EmailConfirmationToken;
import org.nuzhd.currencyapplication.security.user.repo.ConfirmationTokenRepository;
import org.nuzhd.currencyapplication.security.user.service.EmailConfirmationTokenService;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.UUID;

@Service
public class EmailConfirmationTokenServiceImpl implements EmailConfirmationTokenService {

    private final ConfirmationTokenRepository tokenRepository;

    public EmailConfirmationTokenServiceImpl(ConfirmationTokenRepository tokenRepository) {
        this.tokenRepository = tokenRepository;
    }

    @Override
    public EmailConfirmationToken findByUser(AppUser user) {
        return tokenRepository.findByUser(user);
    }

    @Override
    public EmailConfirmationToken getToken(String token) {
        return tokenRepository.findByToken(token)
                .orElseThrow(TokenNotFoundException::new);
    }

    @Override
    public void saveToken(EmailConfirmationToken token) {
        tokenRepository.save(token);
    }

    @Override
    public void confirmToken(String token) {
        EmailConfirmationToken foundToken = getToken(token);

        if (foundToken != null) {
            if (LocalDateTime.now().isAfter(foundToken.getExpiresAt())) {
                throw new TokenExpiredException();
            }
            if (foundToken.getConfirmedAt() != null) {
                throw new TokenAlreadyConfirmedException();
            }

            foundToken.setConfirmedAt(LocalDateTime.now());
            foundToken.getUser().setActive(true);

            saveToken(foundToken);
        }
    }

    @Override
    public String generateToken() {
        return UUID.randomUUID().toString();
    }
}
