package org.nuzhd.currencyapplication.service;

import org.nuzhd.currencyapplication.model.Currency;
import org.nuzhd.currencyapplication.model.CurrencyNews;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CurrencyNewsRepository extends JpaRepository<CurrencyNews, Long> {

    List<CurrencyNews> findAllByCurrency(Currency currency);

}
