package org.nuzhd.currencyapplication.controller;

import org.nuzhd.currencyapplication.dto.BankAccountCreateDTO;
import org.nuzhd.currencyapplication.dto.BankAccountResponseDTO;
import org.nuzhd.currencyapplication.security.user.AppUser;
import org.nuzhd.currencyapplication.service.BankAccountService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("${application.base-path}/lk/bank_accounts")
@CrossOrigin
public class BankAccountController {
    private final BankAccountService bankAccountService;

    public BankAccountController(BankAccountService bankAccountService) {
        this.bankAccountService = bankAccountService;
    }

    @GetMapping
    public ResponseEntity<List<BankAccountResponseDTO>> findAllByUserId(Authentication authentication) {
        AppUser user = (AppUser) authentication.getPrincipal();

        List<BankAccountResponseDTO> accounts = bankAccountService.findAllByOwnerId(user.getId());

        return ResponseEntity
                .ok()
                .body(accounts);
    }

    @PostMapping
    public ResponseEntity<BankAccountResponseDTO> createAccount(
            @RequestBody BankAccountCreateDTO createDTO,
            Authentication authentication) {
        AppUser owner = (AppUser) authentication.getPrincipal();

        BankAccountResponseDTO account = bankAccountService.createAccount(owner, createDTO);

        return ResponseEntity
                .ok()
                .body(account);
    }


}
