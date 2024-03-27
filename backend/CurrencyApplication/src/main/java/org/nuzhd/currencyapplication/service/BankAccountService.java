package org.nuzhd.currencyapplication.service;

import org.nuzhd.currencyapplication.dto.BankAccountCreateDTO;
import org.nuzhd.currencyapplication.dto.BankAccountResponseDTO;
import org.nuzhd.currencyapplication.model.BankAccount;
import org.nuzhd.currencyapplication.security.user.AppUser;

import java.util.List;

public interface BankAccountService {

    BankAccountResponseDTO createAccount(AppUser owner, BankAccountCreateDTO createDTO);

    List<BankAccountResponseDTO> findAllByOwnerId(Long ownerId);
}
