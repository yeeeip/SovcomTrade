package org.nuzhd.currencyapplication.security.controller;

import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import jakarta.validation.Valid;
import org.nuzhd.currencyapplication.security.dto.UserLoginDTO;
import org.nuzhd.currencyapplication.security.dto.UserRegistrationDTO;
import org.nuzhd.currencyapplication.security.user.AppUser;
import org.nuzhd.currencyapplication.security.user.service.AppUserService;
import org.nuzhd.currencyapplication.security.user.service.AuthenticationService;
import org.springframework.http.ProblemDetail;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Locale;

@RestController
@RequestMapping("${application.base-path}/auth")
@CrossOrigin
public class AuthController {

    private final AppUserService userService;
    private final AuthenticationService authService;

    public AuthController(AppUserService userService, AuthenticationService authService) {
        this.userService = userService;
        this.authService = authService;
    }

    @ApiResponses({
            @ApiResponse(responseCode = "200",
                    content = @Content(
                            schema = @Schema(implementation = String.class)
                    )
            ),
            @ApiResponse(responseCode = "400",
                    description = "Некорректные данные",
                    content = @Content(
                            schema = @Schema(implementation = ProblemDetail.class)
                    )
            ),
            @ApiResponse(responseCode = "400",
                    description = "Пользователь уже существует",
                    content = @Content(
                            schema = @Schema(implementation = ProblemDetail.class)
                    )
            )
    })
    @PostMapping("/register")
    public ResponseEntity<String> register(@Valid @RequestBody UserRegistrationDTO userRegistrationDTO, Locale locale) {
        AppUser result = userService.createUser(userRegistrationDTO, locale);

        return ResponseEntity.ok()
                .body(result.getUsername());
    }

    @PostMapping("/login")
    public ResponseEntity<String> login(@Valid @RequestBody UserLoginDTO userLoginDTO) {
        authService.authenticateUser(userLoginDTO);

        return ResponseEntity
                .ok()
                .build();
    }
}
