package org.nuzhd.currencyapplication.exception;

public class EqualCurrencyException extends RuntimeException{
    public EqualCurrencyException() {
        super();
    }

    public EqualCurrencyException(String message) {
        super(message);
    }

    public EqualCurrencyException(String message, Throwable cause) {
        super(message, cause);
    }

    public EqualCurrencyException(Throwable cause) {
        super(cause);
    }

    protected EqualCurrencyException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
        super(message, cause, enableSuppression, writableStackTrace);
    }
}
