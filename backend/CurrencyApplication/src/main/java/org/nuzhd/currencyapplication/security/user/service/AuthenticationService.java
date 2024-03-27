package org.nuzhd.currencyapplication.security.user.service;

import org.nuzhd.currencyapplication.security.dto.AuthenticationResponseDTO;
import org.nuzhd.currencyapplication.security.dto.UserLoginDTO;

public interface AuthenticationService {

    AuthenticationResponseDTO authenticateUser(UserLoginDTO userLoginDTO);

}
