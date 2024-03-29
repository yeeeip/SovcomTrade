package org.nuzhd.currencyapplication.security.dto;

public record AuthenticationResponseDTO(
        String jwtToken,
        AppUserResponseDTO user
) {
}
