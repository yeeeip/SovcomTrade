package org.nuzhd.currencyapplication.exception;

public class NegativePriceException extends RuntimeException{

    public NegativePriceException() {
        super();
    }

    public NegativePriceException(String message) {
        super(message);
    }

    public NegativePriceException(String message, Throwable cause) {
        super(message, cause);
    }

    public NegativePriceException(Throwable cause) {
        super(cause);
    }

    protected NegativePriceException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
        super(message, cause, enableSuppression, writableStackTrace);
    }
}
