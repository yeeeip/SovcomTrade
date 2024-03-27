package org.nuzhd.currencyapplication.security.user.service;

import org.nuzhd.currencyapplication.security.dto.UserRegistrationDTO;
import org.nuzhd.currencyapplication.security.user.AppUser;

import java.util.Locale;

public interface AppUserService {
    AppUser createUser(UserRegistrationDTO userRegistrationDTO, Locale locale);
    AppUser findById(Long userId);

}
