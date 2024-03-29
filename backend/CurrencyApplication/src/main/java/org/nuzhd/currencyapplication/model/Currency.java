package org.nuzhd.currencyapplication.model;

public enum Currency {
    RUB("RUB"),

    AED("R01235"),

    CNY("R01375");

    private String code;

    Currency(String code) {
        this.code = code;
    }

    public static Currency fromCode(String code) {
        for (Currency c : Currency.values()) {
            if (c.code.equals(code)) {
                return c;
            }
        }

        return null;
    }
    public String getCode() {
        return code;
    }
}
