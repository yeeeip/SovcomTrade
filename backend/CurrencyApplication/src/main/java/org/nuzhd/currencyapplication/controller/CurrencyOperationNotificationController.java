package org.nuzhd.currencyapplication.controller;

import org.nuzhd.currencyapplication.dto.CurrencyOperationNotificationResponseDTO;
import org.nuzhd.currencyapplication.security.user.AppUser;
import org.nuzhd.currencyapplication.service.CurrencyOperationNotificationService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("${application.base-path}/lk/notifications")
@CrossOrigin
public class CurrencyOperationNotificationController {

    private final CurrencyOperationNotificationService notificationService;

    public CurrencyOperationNotificationController(CurrencyOperationNotificationService notificationService) {
        this.notificationService = notificationService;
    }

    @GetMapping
    public ResponseEntity<List<CurrencyOperationNotificationResponseDTO>> getNotificationsForUser(Authentication authentication) {
        AppUser user = (AppUser) authentication.getPrincipal();

        List<CurrencyOperationNotificationResponseDTO> notifications = notificationService.findAllByUser(user);
        System.out.println(notifications);
        return ResponseEntity
                .ok(notifications);
    }

}
