package org.nuzhd.currencyapplication.controller;

import org.apache.logging.log4j.util.Strings;
import org.nuzhd.currencyapplication.dto.BankAccountCreateDTO;
import org.nuzhd.currencyapplication.dto.BankAccountResponseDTO;
import org.nuzhd.currencyapplication.security.user.AppUser;
import org.nuzhd.currencyapplication.security.user.repo.AppUserRepository;
import org.nuzhd.currencyapplication.service.BankAccountService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("${application.base-path}/lk/{userId}/bank_accounts")
public class BankAccountController {

    private final AppUserRepository userRepository;
    private final BankAccountService bankAccountService;

    public BankAccountController(AppUserRepository userRepository, BankAccountService bankAccountService) {
        this.userRepository = userRepository;
        this.bankAccountService = bankAccountService;
    }

    @GetMapping
    public ResponseEntity<List<BankAccountResponseDTO>> findAllByUserId(@PathVariable("userId") Long userId) {

        if (!userRepository.existsById(userId)) {
            throw new UsernameNotFoundException(("User not found!"));
        }

        List<BankAccountResponseDTO> accounts = bankAccountService.findAllByOwnerId(userId);

        return ResponseEntity
                .ok()
                .body(accounts);
    }

    @PostMapping
    public ResponseEntity<BankAccountResponseDTO> createAccount(
            @PathVariable("userId") Long userId,
            @RequestBody BankAccountCreateDTO createDTO) {

        AppUser owner = userRepository.findById(userId)
                .orElseThrow(() -> new UsernameNotFoundException(Strings.EMPTY));

        BankAccountResponseDTO account = bankAccountService.createAccount(owner, createDTO);

        return ResponseEntity
                .ok()
                .body(account);
    }


}
