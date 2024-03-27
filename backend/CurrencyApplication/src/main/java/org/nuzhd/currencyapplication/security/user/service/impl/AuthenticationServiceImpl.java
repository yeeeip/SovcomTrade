package org.nuzhd.currencyapplication.security.user.service.impl;

import org.nuzhd.currencyapplication.security.dto.UserLoginDTO;
import org.nuzhd.currencyapplication.security.user.service.AuthenticationService;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

@Service
public class AuthenticationServiceImpl implements AuthenticationService {

    private final AuthenticationManager authManager;

    public AuthenticationServiceImpl(AuthenticationManager authManager) {
        this.authManager = authManager;
    }

    @Override
    public void authenticateUser(UserLoginDTO userLoginDTO) {
        UsernamePasswordAuthenticationToken userToken = new UsernamePasswordAuthenticationToken(
                userLoginDTO.email(), userLoginDTO.password()
        );

        Authentication auth = authManager.authenticate(userToken);

        SecurityContextHolder.getContext().setAuthentication(auth);
    }
}
