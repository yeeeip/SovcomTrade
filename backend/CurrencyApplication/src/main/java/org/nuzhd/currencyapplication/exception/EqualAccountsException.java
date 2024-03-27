package org.nuzhd.currencyapplication.exception;

public class EqualAccountsException extends RuntimeException{

    public EqualAccountsException() {
        super();
    }

    public EqualAccountsException(String message) {
        super(message);
    }

    public EqualAccountsException(String message, Throwable cause) {
        super(message, cause);
    }

    public EqualAccountsException(Throwable cause) {
        super(cause);
    }

    protected EqualAccountsException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
        super(message, cause, enableSuppression, writableStackTrace);
    }
}
