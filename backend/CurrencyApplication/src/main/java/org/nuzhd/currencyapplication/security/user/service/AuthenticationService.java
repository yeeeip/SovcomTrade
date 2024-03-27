package org.nuzhd.currencyapplication.security.user.service;

import org.nuzhd.currencyapplication.security.dto.UserLoginDTO;

public interface AuthenticationService {

    void authenticateUser(UserLoginDTO userLoginDTO);

}
