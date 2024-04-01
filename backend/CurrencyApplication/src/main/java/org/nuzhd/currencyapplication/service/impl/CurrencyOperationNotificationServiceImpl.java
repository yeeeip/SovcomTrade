package org.nuzhd.currencyapplication.service.impl;

import org.nuzhd.currencyapplication.dto.CurrencyOperationNotificationResponseDTO;
import org.nuzhd.currencyapplication.model.CurrencyOperationNotification;
import org.nuzhd.currencyapplication.repo.CurrencyOperationNotificationRepository;
import org.nuzhd.currencyapplication.security.user.AppUser;
import org.nuzhd.currencyapplication.service.CurrencyOperationNotificationService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CurrencyOperationNotificationServiceImpl implements CurrencyOperationNotificationService {

    private final CurrencyOperationNotificationRepository notificationRepository;

    public CurrencyOperationNotificationServiceImpl(CurrencyOperationNotificationRepository notificationRepository) {
        this.notificationRepository = notificationRepository;
    }

    @Override
    public List<CurrencyOperationNotificationResponseDTO> findAllByUser(AppUser user) {
        List<CurrencyOperationNotification> notifications = notificationRepository.findAllByUser(user);

        List<CurrencyOperationNotificationResponseDTO> dtos = notifications
                .stream()
                .map(n -> new CurrencyOperationNotificationResponseDTO(
                        n.getId(),
                        n.getOperation(),
                        n.getCreatedAt(),
                        n.getInfo()
                )).toList();

        return dtos;
    }
}
