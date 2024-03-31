package org.nuzhd.currencyapplication.model;

import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity(name = "currency_news")
public class CurrencyNews {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @SequenceGenerator(name = "currency_news_seq", allocationSize = 1)
    private Long id;

    private String title;

    private String shortDesc;

    @Enumerated(EnumType.STRING)
    private Currency currency;

    private LocalDateTime publicationDate;

    private String newsUrl;

    private String imageUrl;

    private boolean analyzed;

    public CurrencyNews() {
    }

    public CurrencyNews(String title, String shortDesc, Currency currency, LocalDateTime publicationDate, String newsUrl, String imageUrl) {
        this.title = title;
        this.shortDesc = shortDesc;
        this.currency = currency;
        this.publicationDate = publicationDate;
        this.newsUrl = newsUrl;
        this.imageUrl = imageUrl;
        this.analyzed = false;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getShortDesc() {
        return shortDesc;
    }

    public void setShortDesc(String shortDesc) {
        this.shortDesc = shortDesc;
    }

    public Currency getCurrency() {
        return currency;
    }

    public void setCurrency(Currency currency) {
        this.currency = currency;
    }

    public LocalDateTime getPublicationDate() {
        return publicationDate;
    }

    public void setPublicationDate(LocalDateTime publicationDate) {
        this.publicationDate = publicationDate;
    }

    public String getNewsUrl() {
        return newsUrl;
    }

    public void setNewsUrl(String newsUrl) {
        this.newsUrl = newsUrl;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public boolean isAnalyzed() {
        return analyzed;
    }

    public void setAnalyzed(boolean analyzed) {
        this.analyzed = analyzed;
    }

    @Override
    public String toString() {
        return "CurrencyNews{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", description='" + shortDesc + '\'' +
                ", currency=" + currency +
                ", publicationDate=" + publicationDate +
                ", newsUrl='" + newsUrl + '\'' +
                ", imageUrl='" + imageUrl + '\'' +
                '}';
    }
}
