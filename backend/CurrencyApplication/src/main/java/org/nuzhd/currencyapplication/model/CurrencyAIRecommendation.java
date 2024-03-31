package org.nuzhd.currencyapplication.model;

import jakarta.persistence.*;

@Entity(name = "ai_recommendation")
public class CurrencyAIRecommendation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne
    private CurrencyNews news;

    private String forecast;

    public CurrencyAIRecommendation(CurrencyNews news, String forecast) {
        this.news = news;
        this.forecast = forecast;
    }

    public CurrencyAIRecommendation() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public CurrencyNews getNews() {
        return news;
    }

    public void setNews(CurrencyNews news) {
        this.news = news;
    }

    public String getForecast() {
        return forecast;
    }

    public void setForecast(String forecast) {
        this.forecast = forecast;
    }
}
