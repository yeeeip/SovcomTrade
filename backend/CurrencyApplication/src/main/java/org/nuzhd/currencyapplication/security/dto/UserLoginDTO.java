package org.nuzhd.currencyapplication.security.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

public record UserLoginDTO(
        @NotNull @Size(max = 255) @Email String email,
        @NotNull @Size(max = 255) String password
) {}
