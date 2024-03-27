package org.nuzhd.currencyapplication.service.impl;

import org.nuzhd.currencyapplication.dto.CurrencyOperationCreateDTO;
import org.nuzhd.currencyapplication.model.BankAccount;
import org.nuzhd.currencyapplication.model.CurrencyOperation;
import org.nuzhd.currencyapplication.repo.CurrencyOperationRepository;
import org.nuzhd.currencyapplication.security.user.AppUser;
import org.nuzhd.currencyapplication.service.BankAccountService;
import org.nuzhd.currencyapplication.service.CurrencyOperationService;
import org.nuzhd.currencyapplication.validation.ValidationService;
import org.springframework.stereotype.Service;

@Service
public class CurrencyOperationServiceImpl implements CurrencyOperationService {

    private final CurrencyOperationRepository currencyOperationRepository;

    private final BankAccountService accountService;

    private final ValidationService validationService;

    public CurrencyOperationServiceImpl(CurrencyOperationRepository currencyOperationRepository, BankAccountService accountService, ValidationService validationService) {
        this.currencyOperationRepository = currencyOperationRepository;
        this.accountService = accountService;
        this.validationService = validationService;
    }

    @Override
    public CurrencyOperation requestOperation(CurrencyOperationCreateDTO createDTO, AppUser user) {

        validationService.validateCurrencyOperation(createDTO);

        BankAccount debitAccount = accountService.findById(createDTO.debitAccountId());
        BankAccount creditAccount = accountService.findById(createDTO.creditAccountId());

        CurrencyOperation operation = currencyOperationRepository.save(
                new CurrencyOperation(user,
                        createDTO.code(),
                        debitAccount,
                        creditAccount,
                        createDTO.deadline(),
                        createDTO.course()
                )
        );

        return operation;
    }
}
