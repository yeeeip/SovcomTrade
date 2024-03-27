package org.nuzhd.currencyapplication.validation;

import org.nuzhd.currencyapplication.dto.CurrencyOperationCreateDTO;
import org.nuzhd.currencyapplication.exception.EqualAccountsException;
import org.nuzhd.currencyapplication.exception.PasswordsDoNotMatchException;
import org.nuzhd.currencyapplication.exception.PastDateException;
import org.nuzhd.currencyapplication.exception.UserAlreadyExistsException;
import org.nuzhd.currencyapplication.security.dto.UserRegistrationDTO;
import org.nuzhd.currencyapplication.security.user.repo.AppUserRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Locale;

@Service
public class ValidationService {
    private final AppUserRepository userRepository;

    public ValidationService(AppUserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public void validateRegistration(UserRegistrationDTO userRegistrationDTO) {
        if (!userRegistrationDTO.password().equals(userRegistrationDTO.confirmPassword())) {
            throw new PasswordsDoNotMatchException();
        }

        if (userRepository.existsByEmail(userRegistrationDTO.email())) {
            throw new UserAlreadyExistsException();
        }
    }

    public void validateCurrencyOperation(CurrencyOperationCreateDTO request) {
        if (request.debitAccountId().equals(request.creditAccountId())) {
            throw new EqualAccountsException();
        }

        if (LocalDateTime.now().isAfter(request.deadline())) {
            throw new PastDateException();
        }
    }

}
