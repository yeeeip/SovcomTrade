package org.nuzhd.currencyapplication.repo;

import org.nuzhd.currencyapplication.model.CurrencyOperation;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CurrencyOperationRepository extends JpaRepository<CurrencyOperation, Long> {
}
