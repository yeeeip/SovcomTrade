package org.nuzhd.currencyapplication.exception;

public class BankAccountNotFound extends RuntimeException{

    public BankAccountNotFound() {
        super();
    }

    public BankAccountNotFound(String message) {
        super(message);
    }

    public BankAccountNotFound(String message, Throwable cause) {
        super(message, cause);
    }

    public BankAccountNotFound(Throwable cause) {
        super(cause);
    }

    protected BankAccountNotFound(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
        super(message, cause, enableSuppression, writableStackTrace);
    }
}
