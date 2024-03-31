package org.nuzhd.currencyapplication.controller;

import org.nuzhd.currencyapplication.model.CurrencyAIRecommendation;
import org.nuzhd.currencyapplication.service.AIRecommendationService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
    public ResponseEntity<List<CurrencyAIRecommendation>> getAllRecommendationsForCurrency() {
        List<CurrencyAIRecommendation> recommendations = recommendationService
                .findAll();

        return ResponseEntity
                .ok(recommendations);
    }

}
