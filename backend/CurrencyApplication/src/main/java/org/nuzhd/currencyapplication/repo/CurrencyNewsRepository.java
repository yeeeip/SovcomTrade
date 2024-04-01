package org.nuzhd.currencyapplication.repo;

import org.nuzhd.currencyapplication.model.Currency;
import org.nuzhd.currencyapplication.model.CurrencyNews;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface CurrencyNewsRepository extends JpaRepository<CurrencyNews, Long> {

    @Query("""
            SELECT cn FROM currency_news cn 
            WHERE cn.analyzed IS FALSE
            ORDER BY cn.publicationDate DESC LIMIT 3
            """)
    List<CurrencyNews> findNextThreeNotAnalyzed();

    List<CurrencyNews> findAllByCurrency(Currency currency);

}
