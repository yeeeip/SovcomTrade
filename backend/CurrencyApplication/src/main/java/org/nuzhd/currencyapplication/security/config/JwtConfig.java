package org.nuzhd.currencyapplication.security.config;

import org.nuzhd.currencyapplication.security.jwt.JwtAuthenticationFilter;
import org.nuzhd.currencyapplication.security.jwt.JwtUtils;
import org.nuzhd.currencyapplication.security.user.service.impl.AppUserServiceImpl;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class JwtConfig {

    private final AppUserServiceImpl userService;

    public JwtConfig(AppUserServiceImpl userService) {
        this.userService = userService;
    }

    @Bean
    public JwtAuthenticationFilter jwtAuthenticationFilter() {
        return new JwtAuthenticationFilter(jwtUtils(), userService);
    }

    @Bean
    public JwtUtils jwtUtils() {
        return new JwtUtils();
    }
}
