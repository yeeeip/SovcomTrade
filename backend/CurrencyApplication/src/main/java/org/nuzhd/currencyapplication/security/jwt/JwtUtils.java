package org.nuzhd.currencyapplication.security.jwt;

import io.jsonwebtoken.*;
import org.nuzhd.currencyapplication.security.user.AppUser;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.AuthenticationCredentialsNotFoundException;

import java.util.Date;

public class JwtUtils {

    @Value("${application.jwt.key}")
    private String jwtKey;

    public String generateJWT(AppUser user) {
        String username = user.getUsername();
        Date expirationDate = new Date(System.currentTimeMillis() + 1000 * 60 * 10);

        String token = Jwts.builder()
                .setSubject(username)
                .claim("id", user.getId())
                .claim("email", user.getEmail())
                .setIssuedAt(new Date())
                .setExpiration(expirationDate)
                .signWith(SignatureAlgorithm.HS512, jwtKey)
                .compact();

        return token;
    }

    public String extractUsername(String token) {
        Claims claims = Jwts.parser()
                .setSigningKey(jwtKey)
                .parseClaimsJws(token)
                .getBody();

        return claims.getSubject();
    }

    public boolean validateToken(String token) throws MalformedJwtException {
        try {
            Jwts.parser()
                    .setSigningKey(jwtKey)
                    .parseClaimsJws(token);
        } catch (ExpiredJwtException ex) {
            throw new AuthenticationCredentialsNotFoundException("JWT has expired");
        } catch (MalformedJwtException ex) {
            throw new AuthenticationCredentialsNotFoundException("Invalid JWT");
        }
        return true;
    }
}
