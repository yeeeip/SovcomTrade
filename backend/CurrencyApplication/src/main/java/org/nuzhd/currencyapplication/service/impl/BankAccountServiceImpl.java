package org.nuzhd.currencyapplication.service.impl;

import org.nuzhd.currencyapplication.dto.BankAccountCreateDTO;
import org.nuzhd.currencyapplication.dto.BankAccountResponseDTO;
import org.nuzhd.currencyapplication.exception.BankAccountNotFound;
import org.nuzhd.currencyapplication.model.BankAccount;
import org.nuzhd.currencyapplication.repo.BankAccountRepository;
import org.nuzhd.currencyapplication.service.BankAccountService;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.List;

@Service
public class BankAccountServiceImpl implements BankAccountService {

    private final BankAccountRepository bankAccountRepository;

    public BankAccountServiceImpl(BankAccountRepository bankAccountRepository) {
        this.bankAccountRepository = bankAccountRepository;
    }

    @Override
    public BankAccountResponseDTO createAccount(Long ownerId, BankAccountCreateDTO createDTO) {

        BankAccount account = new BankAccount(
                ownerId, createDTO.currency(), new BigDecimal("0.0")
        );

        BankAccount result = this.bankAccountRepository.save(account);

        return new BankAccountResponseDTO(
                result.getId(),
                ownerId,
                result.getCurrency(),
                result.getBalance()
        );
    }

    @Override
    public List<BankAccountResponseDTO> findAllByOwnerId(Long ownerId) {
        List<BankAccountResponseDTO> accounts = bankAccountRepository
                .findAllByOwnerId(ownerId)
                .stream()
                .map(acc -> new BankAccountResponseDTO(
                                acc.getId(), ownerId, acc.getCurrency(), acc.getBalance()
                        )
                )
                .toList();

        return accounts;
    }

    @Override
    public BankAccount findById(Long accountId) {
        return bankAccountRepository.findById(accountId)
                .orElseThrow(BankAccountNotFound::new);
    }
}
