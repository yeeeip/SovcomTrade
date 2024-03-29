package org.nuzhd.currencyapplication.security.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public record UserLoginDTO(
        @NotBlank(message = "{user.email.not_null}") @Size(max = 255) @Email(message = "{user.invalid_email}") String email,
        @NotBlank(message = "{user.password_not_null}") @Size(max = 255) String password
) {
}
