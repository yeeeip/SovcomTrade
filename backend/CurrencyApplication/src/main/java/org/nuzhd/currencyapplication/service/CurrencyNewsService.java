package org.nuzhd.currencyapplication.service;

import org.nuzhd.currencyapplication.model.Currency;
import org.nuzhd.currencyapplication.model.CurrencyNews;

import java.util.List;

public interface CurrencyNewsService {

    List<CurrencyNews> saveAll(List<CurrencyNews> news);

    List<CurrencyNews> parseForCurrencyAndSave(Currency currency);

    List<CurrencyNews> findAllByCurrency(Currency currency);

    List<CurrencyNews> findAll();
}
