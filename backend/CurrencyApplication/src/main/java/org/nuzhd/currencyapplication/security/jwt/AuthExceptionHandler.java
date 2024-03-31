package org.nuzhd.currencyapplication.security.jwt;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerExceptionResolver;

import java.io.IOException;

@Component
public class AuthExceptionHandler implements AuthenticationEntryPoint {

    private static final Logger LOG = LoggerFactory.getLogger(AuthExceptionHandler.class);

    private final HandlerExceptionResolver resolver;

    @Autowired
    public AuthExceptionHandler(@Qualifier("handlerExceptionResolver") final HandlerExceptionResolver resolver) {
        this.resolver = resolver;
    }

    @Override
    public void commence(HttpServletRequest request, HttpServletResponse response, AuthenticationException authException) throws IOException, ServletException {
        LOG.error("Responding with unauthorized error. Message - {}", authException.getMessage());
        response.addHeader("access_denied_reason", authException.getMessage());
        response.sendError(401, "TEST");
    }
}