package org.nuzhd.currencyapplication.controller;

import jakarta.transaction.Transactional;
import org.nuzhd.currencyapplication.dto.CurrencyOperationNotificationResponseDTO;
import org.nuzhd.currencyapplication.security.user.AppUser;
import org.nuzhd.currencyapplication.service.CurrencyOperationNotificationService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

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
        return ResponseEntity
                .ok(notifications);
    }

    @Transactional
    @DeleteMapping
    public ResponseEntity<String> deleteNotifications(Authentication authentication) {
        AppUser user = (AppUser) authentication.getPrincipal();
        notificationService.deleteAllByUserId(user.getId());

        return ResponseEntity
                .ok("Уведомления успешно удалены");
    }

}
