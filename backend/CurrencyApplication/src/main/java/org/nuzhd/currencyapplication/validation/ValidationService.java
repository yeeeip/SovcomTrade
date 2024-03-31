package org.nuzhd.currencyapplication.validation;

import org.nuzhd.currencyapplication.dto.CurrencyOperationCreateDTO;
import org.nuzhd.currencyapplication.exception.*;
import org.nuzhd.currencyapplication.security.dto.UserRegistrationDTO;
import org.nuzhd.currencyapplication.security.user.repo.AppUserRepository;
import org.nuzhd.currencyapplication.service.BankAccountService;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Service
public class ValidationService {
    private final AppUserRepository userRepository;
    private final BankAccountService bankAccountService;

    public ValidationService(AppUserRepository userRepository, BankAccountService bankAccountService) {
        this.userRepository = userRepository;
        this.bankAccountService = bankAccountService;
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

        if (bankAccountService.findById(request.creditAccountId()).getCurrency()
                .equals(bankAccountService.findById(request.debitAccountId()).getCurrency())
        ) {
            throw new EqualCurrencyException();
        }

        if (request.course().compareTo(BigDecimal.ZERO) < 0) {
            throw new NegativeCourseException();
        }

        if (request.price().compareTo(BigDecimal.ZERO) < 0) {
            throw new NegativePriceException();
        }
    }

}
