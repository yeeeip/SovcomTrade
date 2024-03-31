package org.nuzhd.currencyapplication.util;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.nuzhd.currencyapplication.model.Currency;
import org.nuzhd.currencyapplication.model.CurrencyNews;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;

@Component
public class CurrencyNewsHTMLParser {

    @Value("${application.invest-com.base-url}")
    private String investComUrl;

    public List<CurrencyNews> parseNewsForCurrency(Currency currency) {
        Document doc;

        try {
            doc = Jsoup.connect(investComUrl + "/currencies/%s-rub-news"
                            .formatted(currency.name().toLowerCase())
                    )
                    .get();
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
        System.out.println("Parsing from " + doc.baseUri());

        List<CurrencyNews> news = new ArrayList<>();

        Elements newsUl = doc.select("div.mb-4")
                .select("ul")
                .select("li.border-b");

        for (Element el : newsUl) {

            DateTimeFormatter f = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
            LocalDateTime pubDate = LocalDateTime.parse(
                    el.select("article")
                            .select("div")
                            .select("ul")
                            .select("li.ml-2")
                            .select("time")
                            .attr("datetime"), f
            );
            String imageUrl = el.select("figure")
                    .select("a")
                    .get(0)
                    .select("div")
                    .select("img")
                    .attr("src");

            Element articleData = el.select("article")
                    .select("div")
                    .select("a")
                    .get(0);

            String url = investComUrl + articleData.attr("href");
            String title = articleData.text();
            String desc = el.select("article")
                    .select("p")
                    .text();

            news.add(new CurrencyNews(
                    title,
                    desc,
                    currency,
                    pubDate,
                    url,
                    imageUrl
            ));
        }

        return news;
    }

}
