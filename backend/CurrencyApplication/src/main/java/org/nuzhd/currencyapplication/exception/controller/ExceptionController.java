package org.nuzhd.currencyapplication.exception.controller;

import org.nuzhd.currencyapplication.exception.*;
import org.nuzhd.currencyapplication.security.jwt.exception.InvalidJwtException;
import org.springframework.context.MessageSource;
import org.springframework.http.*;
import org.springframework.security.authentication.AuthenticationCredentialsNotFoundException;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.validation.ObjectError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import java.util.List;
import java.util.Locale;
import java.util.Map;

@RestControllerAdvice
public class ExceptionController extends ResponseEntityExceptionHandler {

    private final MessageSource messageSource;

    public ExceptionController(MessageSource messageSource) {
        this.messageSource = messageSource;
    }


    @Override
    protected ResponseEntity<Object> handleMethodArgumentNotValid(MethodArgumentNotValidException ex, HttpHeaders headers, HttpStatusCode status, WebRequest request) {
        List<ObjectError> errors = ex.getAllErrors();
        ProblemDetail problemDetail = ProblemDetail.forStatusAndDetail(
                HttpStatus.BAD_REQUEST, messageSource.getMessage(
                        "currency.user.create.validation_errors", new Object[0], request.getLocale()
                )
        );

        problemDetail.setProperty("errors", errors);
        return ResponseEntity
                .badRequest()
                .body(problemDetail);
    }

    @ExceptionHandler(PasswordsDoNotMatchException.class)
    public ResponseEntity<ProblemDetail> handlePasswordsDoNotMatchException(PasswordsDoNotMatchException ex, Locale locale) {
        ProblemDetail problemDetail = ProblemDetail.forStatusAndDetail(
                HttpStatus.BAD_REQUEST,
                this.messageSource.getMessage("currency.user.create.error.passwords_do_not_match",
                        new Object[0], locale)
        );

        return ResponseEntity
                .badRequest()
                .body(problemDetail);
    }

    @ExceptionHandler(UserAlreadyExistsException.class)
    public ResponseEntity<ProblemDetail> handleUserAlreadyExistsException(UserAlreadyExistsException ex, Locale locale) {
        ProblemDetail problemDetail = ProblemDetail
                .forStatusAndDetail(HttpStatus.BAD_REQUEST,
                        this.messageSource.getMessage("currency.user.create.error.already_exists",
                                new Object[0], locale)
                );

        return ResponseEntity
                .badRequest()
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

    @ExceptionHandler(EqualAccountsException.class)
    public ResponseEntity<ProblemDetail> handleEqualAccounts(EqualAccountsException ex, Locale locale) {
        ProblemDetail problemDetail = ProblemDetail.forStatus(
                HttpStatus.BAD_REQUEST
        );

        problemDetail.setProperty("errors",
                List.of(Map.of("field", "debit_account_id", "defaultMessage", this.messageSource.getMessage(
                        "currency.operation.create.error.equal_accounts",
                        new Object[0],
                        locale
                )), Map.of("field", "credit_account_id", "defaultMessage", this.messageSource.getMessage(
                        "currency.operation.create.error.equal_accounts",
                        new Object[0],
                        locale
                ))));

        return ResponseEntity
                .badRequest()
                .body(problemDetail);
    }

    @ExceptionHandler(PastDateException.class)
    public ResponseEntity<ProblemDetail> handlePastDateException(PastDateException ex, Locale locale) {
        ProblemDetail problemDetail = ProblemDetail.forStatus(
                HttpStatus.BAD_REQUEST
        );

        problemDetail.setProperty("errors",
                List.of(Map.of("field", "deadline", "defaultMessage", this.messageSource.getMessage("currency.operation.create.deadline_in_past",
                        new Object[0], locale
                ))));

        return ResponseEntity
                .badRequest()
                .body(problemDetail);
    }

    @ExceptionHandler(BankAccountNotFound.class)
    public ResponseEntity<ProblemDetail> handleAccountNotFound(BankAccountNotFound ex, Locale locale) {
        ProblemDetail problemDetail = ProblemDetail.forStatusAndDetail(
                HttpStatus.BAD_REQUEST,
                this.messageSource.getMessage("currency.bank_account.not_found",
                        new Object[0], locale
                )
        );

        return ResponseEntity
                .badRequest()
                .body(problemDetail);
    }

    @ExceptionHandler(XMLParsingException.class)
    public ResponseEntity<ProblemDetail> handleXMLParsingException(XMLParsingException ex, Locale locale) {
        ProblemDetail problemDetail = ProblemDetail.forStatusAndDetail(
                HttpStatus.BAD_REQUEST,
                this.messageSource.getMessage("app.internal.error",
                        new Object[0], locale
                )
        );

        return ResponseEntity
                .internalServerError()
                .body(problemDetail);
    }

    @ExceptionHandler(InvalidJwtException.class)
    public ResponseEntity<ProblemDetail> handleInvalidJWT(InvalidJwtException ex, Locale locale) {
        ProblemDetail problemDetail = ProblemDetail.forStatusAndDetail(
                HttpStatus.UNAUTHORIZED,
                "ERROR"
        );

        return ResponseEntity
                .status(401)
                .body(problemDetail);
    }

    @ExceptionHandler(AuthenticationCredentialsNotFoundException.class)
    public ResponseEntity<ProblemDetail> handleAuthenticationCredentialsNotFound(AuthenticationCredentialsNotFoundException ex, Locale locale) {
        ProblemDetail problemDetail = ProblemDetail.forStatusAndDetail(
                HttpStatus.UNAUTHORIZED,
                "ERROR"
        );

        return ResponseEntity
                .status(401)
                .body(problemDetail);
    }

    @ExceptionHandler(TokenExpiredException.class)
    public ResponseEntity<ProblemDetail> handleTokenExpired(TokenExpiredException ex, Locale locale) {
        ProblemDetail problemDetail = ProblemDetail.forStatusAndDetail(
                HttpStatus.BAD_REQUEST,
                this.messageSource.getMessage("currency.user.confirm.token_expired",
                        new Object[0],
                        locale
                )
        );

        return ResponseEntity
                .status(400)
                .body(problemDetail);
    }

    @ExceptionHandler(TokenAlreadyConfirmedException.class)
    public ResponseEntity<ProblemDetail> handleTokenConfirmed(TokenAlreadyConfirmedException ex, Locale locale) {
        ProblemDetail problemDetail = ProblemDetail.forStatusAndDetail(
                HttpStatus.BAD_REQUEST,
                this.messageSource.getMessage("currency.user.confirm.already_confirmed",
                        new Object[0],
                        locale
                )
        );

        return ResponseEntity
                .status(400)
                .body(problemDetail);
    }

    @ExceptionHandler(TokenNotFoundException.class)
    public ResponseEntity<ProblemDetail> handleTokenNotFound(TokenNotFoundException ex, Locale locale) {
        ProblemDetail problemDetail = ProblemDetail.forStatusAndDetail(
                HttpStatus.BAD_REQUEST,
                this.messageSource.getMessage("currency.user.confirm.token_not_found",
                        new Object[0],
                        locale
                )
        );

        return ResponseEntity
                .status(400)
                .body(problemDetail);
    }

    @ExceptionHandler(EqualCurrencyException.class)
    public ResponseEntity<ProblemDetail> handleEqualCurrency(EqualCurrencyException ex, Locale locale) {
        ProblemDetail problemDetail = ProblemDetail.forStatusAndDetail(
                HttpStatus.BAD_REQUEST,
                this.messageSource.getMessage("currency.operation.equal_currencies",
                        new Object[0],
                        locale
                )
        );

        return ResponseEntity
                .status(400)
                .body(problemDetail);
    }

    @ExceptionHandler(NegativeCourseException.class)
    public ResponseEntity<ProblemDetail> handleNegativeCourse(NegativeCourseException ex, Locale locale) {
        ProblemDetail problemDetail = ProblemDetail.forStatus(
                HttpStatus.BAD_REQUEST
        );

        problemDetail.setProperty("errors",
                List.of(Map.of("field", "course", "defaultMessage", this.messageSource.getMessage("currency.operation.course_not_negative",
                        new Object[0],
                        locale
                ))));

        return ResponseEntity
                .status(400)
                .body(problemDetail);
    }

    @ExceptionHandler(NegativePriceException.class)
    public ResponseEntity<ProblemDetail> handleNegativePrice(NegativePriceException ex, Locale locale) {
        ProblemDetail problemDetail = ProblemDetail.forStatus(
                HttpStatus.BAD_REQUEST
        );

        problemDetail.setProperty("errors",
                List.of(Map.of("price", "deadline", "defaultMessage", this.messageSource.getMessage("currency.operation.price_not_negative",
                        new Object[0],
                        locale
                ))));

        return ResponseEntity
                .status(400)
                .body(problemDetail);
    }

}
