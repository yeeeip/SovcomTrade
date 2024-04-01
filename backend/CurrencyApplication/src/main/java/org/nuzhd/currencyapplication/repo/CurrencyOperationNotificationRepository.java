package org.nuzhd.currencyapplication.repo;

import org.nuzhd.currencyapplication.model.CurrencyOperationNotification;
import org.nuzhd.currencyapplication.security.user.AppUser;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CurrencyOperationNotificationRepository extends JpaRepository<CurrencyOperationNotification, Long> {

    List<CurrencyOperationNotification> findAllByUser(AppUser user);

}
