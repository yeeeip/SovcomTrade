package org.nuzhd.currencyapplication.service.impl;

import org.nuzhd.currencyapplication.dto.CurrencyOperationCreateDTO;
import org.nuzhd.currencyapplication.dto.CurrencyOperationResponseDTO;
import org.nuzhd.currencyapplication.model.BankAccount;
import org.nuzhd.currencyapplication.model.CurrencyOperation;
import org.nuzhd.currencyapplication.model.OperationCode;
import org.nuzhd.currencyapplication.repo.CurrencyOperationRepository;
import org.nuzhd.currencyapplication.security.user.AppUser;
import org.nuzhd.currencyapplication.service.BankAccountService;
import org.nuzhd.currencyapplication.service.CurrencyOperationService;
import org.nuzhd.currencyapplication.validation.ValidationService;
import org.springframework.stereotype.Service;

import java.util.List;

import static org.nuzhd.currencyapplication.model.Currency.RUB;

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
    public CurrencyOperationResponseDTO requestOperation(CurrencyOperationCreateDTO createDTO, AppUser user) {

        validationService.validateCurrencyOperation(createDTO);

        BankAccount debitAccount = accountService.findById(createDTO.debitAccountId());
        BankAccount creditAccount = accountService.findById(createDTO.creditAccountId());

        OperationCode code;

        if (debitAccount.getCurrency() == RUB && creditAccount.getCurrency() != RUB) {
            code = OperationCode.BUY_FOREIGN_RUB;
        } else if (debitAccount.getCurrency() != RUB && creditAccount.getCurrency() == RUB) {
            code = OperationCode.SELL_FOREIGN_RUB;
        } else {
            code = OperationCode.CONVERSION;
        }

        CurrencyOperation operation = currencyOperationRepository.save(
                new CurrencyOperation(user,
                        code,
                        debitAccount,
                        creditAccount,
                        createDTO.deadline(),
                        createDTO.course()
                )
        );

        CurrencyOperationResponseDTO dto = new CurrencyOperationResponseDTO(
                operation.getId(),
                operation.getDebitAccount(),
                operation.getCreditAccount(),
                operation.getCreatedAt(),
                operation.getCode(),
                operation.getProcessedAt(),
                operation.getStatus()
        );

        return dto;
    }

    @Override
    public List<CurrencyOperationResponseDTO> findAllByUser(AppUser user) {
        List<CurrencyOperation> operations = currencyOperationRepository.findAllByUser(user);

        List<CurrencyOperationResponseDTO> dtos = operations.stream()
                .map(op -> new CurrencyOperationResponseDTO(
                        op.getId(),
                        op.getDebitAccount(),
                        op.getCreditAccount(),
                        op.getCreatedAt(),
                        op.getCode(),
                        op.getProcessedAt(),
                        op.getStatus()
                )).toList();

        return dtos;
    }
}
