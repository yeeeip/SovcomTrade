package org.nuzhd.currencyapplication.service;

import org.nuzhd.currencyapplication.model.CurrencyAIRecommendation;

import java.util.List;

public interface AIRecommendationService {
    List<CurrencyAIRecommendation> findAll();
}
