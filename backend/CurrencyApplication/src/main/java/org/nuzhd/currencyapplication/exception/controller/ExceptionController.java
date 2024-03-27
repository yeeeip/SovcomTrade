package org.nuzhd.currencyapplication.exception.controller;

import org.nuzhd.currencyapplication.exception.PasswordsDoNotMatchException;
import org.nuzhd.currencyapplication.exception.UserAlreadyExistsException;
import org.springframework.context.MessageSource;
import org.springframework.http.HttpStatus;
import org.springframework.http.ProblemDetail;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.validation.ObjectError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.util.List;
import java.util.Locale;

@RestControllerAdvice
public class ExceptionController {

    private final MessageSource messageSource;

    public ExceptionController(MessageSource messageSource) {
        this.messageSource = messageSource;
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<ProblemDetail> handleValidationErrors(MethodArgumentNotValidException ex, Locale locale) {
        List<ObjectError> errors = ex.getAllErrors();
        ProblemDetail problemDetail = ProblemDetail.forStatusAndDetail(
                HttpStatus.BAD_REQUEST, messageSource.getMessage(
                        "currency.user.create.validation_errors", new Object[0], locale
                )
        );

        problemDetail.setProperty("errors", errors);
        return ResponseEntity
                .badRequest()
                .body(problemDetail);
    }

    @ExceptionHandler(PasswordsDoNotMatchException.class)
    public ResponseEntity<ProblemDetail> handlePasswordsDoNotMatchException(PasswordsDoNotMatchException ex) {
        ProblemDetail problemDetail = ProblemDetail
                .forStatusAndDetail(HttpStatus.BAD_REQUEST, ex.getMessage());

        return ResponseEntity
                .badRequest()
                .body(problemDetail);
    }

    @ExceptionHandler(UserAlreadyExistsException.class)
    public ResponseEntity<ProblemDetail> handleUserAlreadyExistsException(UserAlreadyExistsException ex) {
        ProblemDetail problemDetail = ProblemDetail
                .forStatusAndDetail(HttpStatus.BAD_REQUEST, ex.getMessage());

        return ResponseEntity
                .badRequest()
                .body(problemDetail);
    }

    @ExceptionHandler(BadCredentialsException.class)
    public ResponseEntity<ProblemDetail> handleBadCredentialsException(BadCredentialsException ex) {
        ProblemDetail problemDetail = ProblemDetail
                .forStatusAndDetail(HttpStatus.UNAUTHORIZED, ex.getMessage());

        return ResponseEntity
                .status(401)
                .body(problemDetail);
    }

    @ExceptionHandler(UsernameNotFoundException.class)
    public ResponseEntity<ProblemDetail> handleUserNotFound(UsernameNotFoundException ex, Locale locale) {
        ProblemDetail problemDetail = ProblemDetail
                .forStatusAndDetail(
                        HttpStatus.BAD_REQUEST,
                        this.messageSource.getMessage("currency.user.not_found", new Object[0], locale)
                );

        return ResponseEntity
                .badRequest()
                .body(problemDetail);
    }
}
