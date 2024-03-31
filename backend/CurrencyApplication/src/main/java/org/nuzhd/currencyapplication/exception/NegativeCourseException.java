package org.nuzhd.currencyapplication.exception;

public class NegativeCourseException extends RuntimeException{

    public NegativeCourseException() {
        super();
    }

    public NegativeCourseException(String message) {
        super(message);
    }

    public NegativeCourseException(String message, Throwable cause) {
        super(message, cause);
    }

    public NegativeCourseException(Throwable cause) {
        super(cause);
    }

    protected NegativeCourseException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
        super(message, cause, enableSuppression, writableStackTrace);
    }
}
