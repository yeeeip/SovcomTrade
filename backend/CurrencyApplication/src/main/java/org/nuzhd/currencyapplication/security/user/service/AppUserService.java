package org.nuzhd.currencyapplication.security.user.service;

import org.nuzhd.currencyapplication.security.dto.UserRegistrationDTO;
import org.nuzhd.currencyapplication.security.user.AppUser;

public interface AppUserService {
    AppUser createUser(UserRegistrationDTO userRegistrationDTO);

    AppUser findById(Long userId);

}
