package org.nuzhd.currencyapplication.security.user.repo;

import org.nuzhd.currencyapplication.security.user.AppUser;
import org.nuzhd.currencyapplication.security.user.EmailConfirmationToken;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ConfirmationTokenRepository extends JpaRepository<EmailConfirmationToken, Long> {

    EmailConfirmationToken findByUser(AppUser user);

    Optional<EmailConfirmationToken> findByToken(String token);

}
