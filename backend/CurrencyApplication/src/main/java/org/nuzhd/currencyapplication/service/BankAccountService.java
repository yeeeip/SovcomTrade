package org.nuzhd.currencyapplication.service;

import org.nuzhd.currencyapplication.dto.BankAccountCreateDTO;
import org.nuzhd.currencyapplication.dto.BankAccountResponseDTO;
import org.nuzhd.currencyapplication.model.BankAccount;

import java.util.List;

public interface BankAccountService {

    BankAccountResponseDTO createAccount(Long owner, BankAccountCreateDTO createDTO);

    List<BankAccountResponseDTO> findAllByOwnerId(Long ownerId);

    BankAccount findById(Long accountId);
}
