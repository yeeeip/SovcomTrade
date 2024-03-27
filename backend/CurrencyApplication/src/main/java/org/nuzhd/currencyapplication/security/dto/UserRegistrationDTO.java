package org.nuzhd.currencyapplication.security.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

public record UserRegistrationDTO(
        @NotNull(message = "{user.email.not_null}") @Size(max = 255, message = "{user.email.size}") @Email(message = "{user.invalid_email}") String email,
        @NotNull @Size(min = 8, max = 255, message = "${user.password_size}") String password,
        @NotNull(message = "{user.first_name.not_null}") @Size(min = 2, max = 255, message = "{user.first_name.size}") String firstName,
        @NotNull(message = "{user.last_name.not_null}") @Size(max = 255, message = "{user.last_name.size}") String lastName,
        @Size(max = 255) String middleName,
        @NotNull(message = "{user.phone_number.not_null}") @Size(max = 30, message = "{user.phone_number.size}") String phoneNumber,
        @NotNull(message = "{user.confirmation_password.not_null}") String confirmPassword

) {
}