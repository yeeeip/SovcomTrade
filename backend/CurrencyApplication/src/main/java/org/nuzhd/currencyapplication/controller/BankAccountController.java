package org.nuzhd.currencyapplication.controller;

import org.nuzhd.currencyapplication.dto.BankAccountCreateDTO;
import org.nuzhd.currencyapplication.dto.BankAccountResponseDTO;
import org.nuzhd.currencyapplication.security.user.AppUser;
import org.nuzhd.currencyapplication.security.user.repo.AppUserRepository;
import org.nuzhd.currencyapplication.security.user.service.AuthenticationService;
import org.nuzhd.currencyapplication.service.BankAccountService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("${application.base-path}/lk/bank_accounts")
@CrossOrigin("${application.frontend.base-path}")
public class BankAccountController {

    private final AppUserRepository userRepository;
    private final BankAccountService bankAccountService;

    private final AuthenticationService authenticationService;

    public BankAccountController(AppUserRepository userRepository, BankAccountService bankAccountService, AuthenticationService authenticationService) {
        this.userRepository = userRepository;
        this.bankAccountService = bankAccountService;
        this.authenticationService = authenticationService;
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
