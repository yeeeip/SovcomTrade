package org.nuzhd.currencyapplication.security.user.service.impl;

import org.apache.logging.log4j.util.Strings;
import org.nuzhd.currencyapplication.security.dto.UserRegistrationDTO;
import org.nuzhd.currencyapplication.security.user.AppUser;
import org.nuzhd.currencyapplication.security.user.repo.AppUserRepository;
import org.nuzhd.currencyapplication.security.user.service.AppUserService;
import org.nuzhd.currencyapplication.validation.ValidationService;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Locale;

@Service
public class AppUserServiceImpl implements UserDetailsService, AppUserService {

    private final AppUserRepository appUserRepository;
    private final PasswordEncoder encoder;

    private final ValidationService validationService;

    public AppUserServiceImpl(AppUserRepository appUserRepository, PasswordEncoder encoder, ValidationService validationService) {
        this.appUserRepository = appUserRepository;
        this.encoder = encoder;
        this.validationService = validationService;
    }

    @Override
    public AppUser createUser(UserRegistrationDTO userRegistrationDTO, Locale locale) {

        validationService.validateRegistration(userRegistrationDTO, locale);

        AppUser newUser = new AppUser(
                userRegistrationDTO.email(),
                encoder.encode(userRegistrationDTO.password()),
                userRegistrationDTO.firstName(),
                userRegistrationDTO.lastName(),
                userRegistrationDTO.phoneNumber()
        );

        return appUserRepository.save(newUser);
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
