package org.nuzhd.currencyapplication.service.impl;

import org.nuzhd.currencyapplication.model.Currency;
import org.nuzhd.currencyapplication.model.CurrencyNews;
import org.nuzhd.currencyapplication.service.CurrencyNewsRepository;
import org.nuzhd.currencyapplication.service.CurrencyNewsService;
import org.nuzhd.currencyapplication.util.CurrencyNewsHTMLParser;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CurrencyNewsServiceImpl implements CurrencyNewsService {

    private final CurrencyNewsHTMLParser parser;
    private final CurrencyNewsRepository newsRepository;

    public CurrencyNewsServiceImpl(CurrencyNewsHTMLParser parser, CurrencyNewsRepository newsRepository) {
        this.parser = parser;
        this.newsRepository = newsRepository;
    }

    @Override
    public List<CurrencyNews> parseForCurrencyAndSave(Currency currency) {
        List<CurrencyNews> parsedNews = parser.parseNewsForCurrency(currency);

        return saveAll(parsedNews);
    }

    @Override
    public List<CurrencyNews> findAllByCurrency(Currency currency) {
        return newsRepository.findAllByCurrency(currency);
    }

    @Override
    public List<CurrencyNews> findAll() {
        return newsRepository.findAll();
    }

    @Override
    public List<CurrencyNews> saveAll(List<CurrencyNews> news) {
        return newsRepository.saveAll(news);
    }
}
