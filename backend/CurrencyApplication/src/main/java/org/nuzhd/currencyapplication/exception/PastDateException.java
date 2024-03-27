package org.nuzhd.currencyapplication.exception;

public class PastDateException extends RuntimeException{

    public PastDateException() {
        super();
    }

    public PastDateException(String message) {
        super(message);
    }

    public PastDateException(String message, Throwable cause) {
        super(message, cause);
    }

    public PastDateException(Throwable cause) {
        super(cause);
    }

    protected PastDateException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
        super(message, cause, enableSuppression, writableStackTrace);
    }
}
