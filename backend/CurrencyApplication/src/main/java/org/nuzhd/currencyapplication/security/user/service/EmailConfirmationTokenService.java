package org.nuzhd.currencyapplication.security.user.service;

import org.nuzhd.currencyapplication.security.user.AppUser;
import org.nuzhd.currencyapplication.security.user.EmailConfirmationToken;

public interface EmailConfirmationTokenService {

    void saveToken(EmailConfirmationToken token);

    EmailConfirmationToken getToken(String token);

    EmailConfirmationToken findByUser(AppUser user);

    String generateToken();

    void confirmToken(String token);

}
