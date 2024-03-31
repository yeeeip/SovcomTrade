package org.nuzhd.currencyapplication.util;

import org.nuzhd.currencyapplication.dto.CurrencyRateResponseDTO;
import org.nuzhd.currencyapplication.dto.CurrencyRatesDynamicResponseDTO;
import org.nuzhd.currencyapplication.exception.XMLParsingException;
import org.nuzhd.currencyapplication.model.Currency;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Component;
import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;
import org.xml.sax.SAXException;

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.ParserConfigurationException;
import java.io.IOException;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;

@Component
public class ExchangeRatesXMLParser {

    @Value("${application.cb.xml-base-url}")
    private String baseUrl;

    @Cacheable(value = "exchange_rates", key = "{#startDate, #endDate, #currency.name()}")
    public CurrencyRatesDynamicResponseDTO parseExchangeRatesForPeriod(LocalDateTime startDate, LocalDateTime endDate, Currency currency) {
        DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();

        DocumentBuilder builder;
        try {
            builder = factory.newDocumentBuilder();
        } catch (ParserConfigurationException e) {
            throw new RuntimeException(e);
        }

        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd.MM.yyyy");

        String formattedStartDate = formatter.format(startDate);
        String formattedEndDate = formatter.format(endDate);

        Document doc = null;

        try {
            doc = builder.parse(
                    (
                            baseUrl + "/XML_dynamic.asp?" +
                                    "date_req1=%s" +
                                    "&date_req2=%s" +
                                    "&VAL_NM_RQ=%s")
                            .formatted(formattedStartDate,
                                    formattedEndDate,
                                    currency.getCode()
                            )
            );

            doc.getDocumentElement().normalize();
        } catch (SAXException e) {
            throw new XMLParsingException();
        } catch (IOException e) {
            throw new RuntimeException(e);
        }

        CurrencyRatesDynamicResponseDTO dtos = mapToDTO(doc);

        return dtos;
    }

    private CurrencyRatesDynamicResponseDTO mapToDTO(Document doc) {

        List<CurrencyRatesDynamicResponseDTO> rates = new ArrayList<>();

        NodeList nodes = doc.getElementsByTagName("Record");
        List<CurrencyRateResponseDTO> rateDtos = new ArrayList<>();
        for (int i = 0; i < nodes.getLength(); i++) {
            Node node = nodes.item(i);

            if (node.getNodeType() == Node.ELEMENT_NODE) {
                Element el = (Element) node;
                DateTimeFormatter f = DateTimeFormatter.ofPattern("dd.MM.yyyy");
                LocalDateTime date = LocalDate.parse(el.getAttribute("Date"), f).atStartOfDay();

                rateDtos.add(new CurrencyRateResponseDTO(
                                date,
                                Currency.fromCode(el.getAttribute("Id")),
                                BigDecimal.valueOf(
                                        Double.parseDouble(
                                                el.getElementsByTagName("VunitRate")
                                                        .item(0)
                                                        .getTextContent().replace(",", ".")
                                        )
                                )
                        )
                );
            }


        }

        BigDecimal max = rateDtos
                .stream()
                .map(CurrencyRateResponseDTO::curUnitRate)
                .max(BigDecimal::compareTo)
                .get();

        BigDecimal min = rateDtos
                .stream()
                .map(CurrencyRateResponseDTO::curUnitRate)
                .min(Comparator.naturalOrder())
                .get();

        CurrencyRatesDynamicResponseDTO result = new CurrencyRatesDynamicResponseDTO(
                min,
                max,
                rateDtos
        );

        return result;
    }
}
