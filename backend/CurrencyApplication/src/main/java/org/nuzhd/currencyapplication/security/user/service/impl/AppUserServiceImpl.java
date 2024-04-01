package org.nuzhd.currencyapplication.security.user.service.impl;

import jakarta.transaction.Transactional;
import org.apache.logging.log4j.util.Strings;
import org.nuzhd.currencyapplication.email.EmailSenderService;
import org.nuzhd.currencyapplication.model.BankAccount;
import org.nuzhd.currencyapplication.model.Currency;
import org.nuzhd.currencyapplication.repo.BankAccountRepository;
import org.nuzhd.currencyapplication.security.dto.UserRegistrationDTO;
import org.nuzhd.currencyapplication.security.user.AppUser;
import org.nuzhd.currencyapplication.security.user.EmailConfirmationToken;
import org.nuzhd.currencyapplication.security.user.repo.AppUserRepository;
import org.nuzhd.currencyapplication.security.user.service.AppUserService;
import org.nuzhd.currencyapplication.security.user.service.EmailConfirmationTokenService;
import org.nuzhd.currencyapplication.validation.ValidationService;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;

@Service
public class AppUserServiceImpl implements UserDetailsService, AppUserService {

    private final AppUserRepository appUserRepository;

    private final EmailConfirmationTokenService tokenService;

    private final PasswordEncoder encoder;
    private final ValidationService validationService;

    private final EmailSenderService emailSenderService;

    private final BankAccountRepository bankAccountRepository;

    public AppUserServiceImpl(AppUserRepository appUserRepository, EmailConfirmationTokenService tokenService, PasswordEncoder encoder, ValidationService validationService, EmailSenderService emailSenderService, BankAccountRepository bankAccountRepository) {
        this.appUserRepository = appUserRepository;
        this.tokenService = tokenService;
        this.encoder = encoder;
        this.validationService = validationService;
        this.emailSenderService = emailSenderService;
        this.bankAccountRepository = bankAccountRepository;
    }

    @Transactional
    @Override
    public AppUser createUser(UserRegistrationDTO userRegistrationDTO) {

        validationService.validateRegistration(userRegistrationDTO);

        AppUser newUser = new AppUser(
                userRegistrationDTO.email(),
                encoder.encode(userRegistrationDTO.password()),
                userRegistrationDTO.firstName(),
                userRegistrationDTO.lastName(),
                userRegistrationDTO.phoneNumber()
        );
        AppUser savedUser = appUserRepository.save(newUser);

        List<BankAccount> userAccounts = List.of(
                new BankAccount(newUser.getId(), Currency.AED, BigDecimal.valueOf(10000)),
                new BankAccount(newUser.getId(), Currency.CNY, BigDecimal.valueOf(10000)),
                new BankAccount(newUser.getId(), Currency.RUB, BigDecimal.valueOf(100000))
        );
        bankAccountRepository.saveAll(userAccounts);

        EmailConfirmationToken token = new EmailConfirmationToken(
                tokenService.generateToken(),
                LocalDateTime.now().plusMinutes(30),
                savedUser
        );

        tokenService.saveToken(token);
        emailSenderService.sendTo(newUser.getEmail(), token.getToken());

        return savedUser;
    }

    @Override
    public AppUser findById(Long userId) {
        return appUserRepository.findById(userId)
                .orElseThrow(() -> new UsernameNotFoundException(Strings.EMPTY));
    }

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        return appUserRepository.findByEmail(email)
                .orElseThrow(() -> new UsernameNotFoundException(Strings.EMPTY));
    }
}
