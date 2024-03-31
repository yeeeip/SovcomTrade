package org.nuzhd.currencyapplication.service;

import org.nuzhd.currencyapplication.model.Currency;
import org.nuzhd.currencyapplication.model.CurrencyAIRecommendation;
import org.nuzhd.currencyapplication.model.CurrencyNews;

import java.util.List;

public interface AIRecommendationService {

    List<CurrencyAIRecommendation> generateRecommendationsForCurrency(Currency currency);

    CurrencyAIRecommendation findByNews(CurrencyNews news);

    List<CurrencyAIRecommendation> findAll();
}
