package org.nuzhd.currencyapplication.security.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.nuzhd.currencyapplication.model.BankAccount;

import java.util.List;

public record AppUserResponseDTO(String email,
                                 @JsonProperty("first_name")
                                 String firstName,
                                 @JsonProperty("last_name")
                                 String lastName,
                                 @JsonProperty("middle_name")
                                 String middleName,
                                 @JsonProperty("user_accounts")
                                 List<BankAccount> userAccounts,
                                 @JsonProperty("phone_number")
                                 String phoneNumber) {
}
