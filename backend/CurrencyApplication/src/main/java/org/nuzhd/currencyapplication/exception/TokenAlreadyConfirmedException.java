package org.nuzhd.currencyapplication.exception;

public class TokenAlreadyConfirmedException extends RuntimeException{
    public TokenAlreadyConfirmedException() {
        super();
    }

    public TokenAlreadyConfirmedException(String message) {
        super(message);
    }

    public TokenAlreadyConfirmedException(String message, Throwable cause) {
        super(message, cause);
    }

    public TokenAlreadyConfirmedException(Throwable cause) {
        super(cause);
    }

    protected TokenAlreadyConfirmedException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
        super(message, cause, enableSuppression, writableStackTrace);
    }
}
