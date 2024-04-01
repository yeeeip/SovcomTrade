package org.nuzhd.currencyapplication.repo;

import org.nuzhd.currencyapplication.model.CurrencyAIRecommendation;
import org.nuzhd.currencyapplication.model.CurrencyNews;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AiRecommendationRepository extends JpaRepository<CurrencyAIRecommendation, Long> {

    CurrencyAIRecommendation findByNews(CurrencyNews news);

}
