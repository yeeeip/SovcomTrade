package org.nuzhd.currencyapplication.controller;

import org.nuzhd.currencyapplication.model.Currency;
import org.nuzhd.currencyapplication.model.CurrencyAIRecommendation;
import org.nuzhd.currencyapplication.service.AIRecommendationService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("${application.base-path}/lk/recommendations")
@CrossOrigin
public class AIRecommendationController {

    private final AIRecommendationService recommendationService;

    public AIRecommendationController(AIRecommendationService recommendationService) {
        this.recommendationService = recommendationService;
    }

    @GetMapping
    public ResponseEntity<List<CurrencyAIRecommendation>> getAllRecommendationsForCurrency(
            @RequestParam("cur") Currency currency
    ) {
        List<CurrencyAIRecommendation> recommendations = recommendationService
                .generateRecommendationsForCurrency(currency);

        return ResponseEntity
                .ok(recommendations);
    }

}
