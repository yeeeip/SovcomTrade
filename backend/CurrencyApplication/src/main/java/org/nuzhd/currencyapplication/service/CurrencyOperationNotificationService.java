package org.nuzhd.currencyapplication.service;

import org.nuzhd.currencyapplication.dto.CurrencyOperationNotificationResponseDTO;
import org.nuzhd.currencyapplication.model.CurrencyOperationNotification;
import org.nuzhd.currencyapplication.security.user.AppUser;

import java.util.List;

public interface CurrencyOperationNotificationService {

    List<CurrencyOperationNotificationResponseDTO> findAllByUser(AppUser user);

}
