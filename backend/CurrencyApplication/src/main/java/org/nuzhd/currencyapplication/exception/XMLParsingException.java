package org.nuzhd.currencyapplication.exception;

public class XMLParsingException extends RuntimeException{

    public XMLParsingException() {
        super();
    }

    public XMLParsingException(String message) {
        super(message);
    }

    public XMLParsingException(String message, Throwable cause) {
        super(message, cause);
    }

    public XMLParsingException(Throwable cause) {
        super(cause);
    }

    protected XMLParsingException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
        super(message, cause, enableSuppression, writableStackTrace);
    }
}
