package org.nuzhd.currencyapplication.validation;

import org.nuzhd.currencyapplication.exception.PasswordsDoNotMatchException;
import org.nuzhd.currencyapplication.exception.UserAlreadyExistsException;
import org.nuzhd.currencyapplication.security.dto.UserRegistrationDTO;
import org.nuzhd.currencyapplication.security.user.repo.AppUserRepository;
import org.springframework.context.MessageSource;
import org.springframework.stereotype.Service;

import java.util.Locale;

@Service
public class ValidationService {

    private final MessageSource messageSource;
    private final AppUserRepository userRepository;

    public ValidationService(MessageSource messageSource, AppUserRepository userRepository) {
        this.messageSource = messageSource;
        this.userRepository = userRepository;
    }

    public void validateRegistration(UserRegistrationDTO userRegistrationDTO, Locale locale) {
        if (!userRegistrationDTO.password().equals(userRegistrationDTO.confirmPassword())) {
            throw new PasswordsDoNotMatchException(
                    this.messageSource.getMessage("currency.user.create.error.passwords_do_not_match",
                            new Object[0], locale
                    )
            );
        }

        if (userRepository.existsByEmail(userRegistrationDTO.email())) {
            throw new UserAlreadyExistsException(
                    this.messageSource.getMessage("currency.user.create.error.already_exists",
                            new Object[0], locale
                    )
            );
        }
    }

}
