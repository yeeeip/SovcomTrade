package org.nuzhd.currencyapplication.controller;

import jakarta.validation.Valid;
import org.nuzhd.currencyapplication.dto.CurrencyOperationCreateDTO;
import org.nuzhd.currencyapplication.dto.CurrencyOperationResponseDTO;
import org.nuzhd.currencyapplication.model.CurrencyOperation;
import org.nuzhd.currencyapplication.security.user.AppUser;
import org.nuzhd.currencyapplication.service.CurrencyOperationService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("${application.base-path}/lk/operations")
@CrossOrigin
public class CurrencyOperationController {

    private final CurrencyOperationService operationService;

    public CurrencyOperationController(CurrencyOperationService operationService) {
        this.operationService = operationService;
    }

    @PostMapping
    public ResponseEntity<CurrencyOperation> createOperation(@Valid @RequestBody CurrencyOperationCreateDTO request,
                                                             Authentication authentication) {
        AppUser user = (AppUser) authentication.getPrincipal();

        CurrencyOperation operation = operationService.requestOperation(request, user);

        return ResponseEntity
                .ok(operation);
    }

    @GetMapping
    public ResponseEntity<List<CurrencyOperationResponseDTO>> getUserOperations(Authentication authentication) {
        AppUser user = (AppUser) authentication.getPrincipal();

        List<CurrencyOperationResponseDTO> operations = operationService.findAllByUser(user);

        return ResponseEntity
                .ok(operations);
    }

}
