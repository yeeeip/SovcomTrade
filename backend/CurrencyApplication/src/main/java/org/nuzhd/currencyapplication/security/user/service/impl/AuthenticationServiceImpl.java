package org.nuzhd.currencyapplication.security.user.service.impl;

import org.nuzhd.currencyapplication.security.dto.AppUserResponseDTO;
import org.nuzhd.currencyapplication.security.dto.AuthenticationResponseDTO;
import org.nuzhd.currencyapplication.security.dto.UserLoginDTO;
import org.nuzhd.currencyapplication.security.jwt.JwtUtils;
import org.nuzhd.currencyapplication.security.user.AppUser;
import org.nuzhd.currencyapplication.security.user.service.AuthenticationService;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

@Service
public class AuthenticationServiceImpl implements AuthenticationService {

    private final JwtUtils jwtUtils;
    private final AuthenticationManager authManager;

    public AuthenticationServiceImpl(JwtUtils jwtUtils, AuthenticationManager authManager) {
        this.jwtUtils = jwtUtils;
        this.authManager = authManager;
    }

    @Override
    public AuthenticationResponseDTO authenticateUser(UserLoginDTO userLoginDTO) {
        UsernamePasswordAuthenticationToken userToken = new UsernamePasswordAuthenticationToken(
                userLoginDTO.email(), userLoginDTO.password()
        );

        Authentication auth = authManager.authenticate(userToken);

        AppUser authenticatedUser = (AppUser) auth.getPrincipal();

        String token = jwtUtils.generateJWT(authenticatedUser);

        AppUserResponseDTO userResponse = new AppUserResponseDTO(
                authenticatedUser.getEmail(),
                authenticatedUser.getFirstName(),
                authenticatedUser.getLastName(),
                authenticatedUser.getMiddleName(),
                authenticatedUser.getBankAccounts(),
                authenticatedUser.getPhoneNumber()
        );

        return new AuthenticationResponseDTO(token, userResponse);
    }

    public Long fetchUserIdFromAuthentication() {
        return ((AppUser) SecurityContextHolder.getContext().getAuthentication().getPrincipal())
                .getId();
    }
}
