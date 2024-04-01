package org.nuzhd.currencyapplication.repo;

import org.nuzhd.currencyapplication.model.CurrencyOperation;
import org.nuzhd.currencyapplication.security.user.AppUser;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CurrencyOperationRepository extends JpaRepository<CurrencyOperation, Long> {

    List<CurrencyOperation> findAllByUser(AppUser user);


}
