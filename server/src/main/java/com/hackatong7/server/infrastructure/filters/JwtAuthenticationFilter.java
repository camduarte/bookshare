package com.hackatong7.server.infrastructure.filters;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import com.hackatong7.server.application.service.InvalidTokenService;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

/**
 * Filtro de autenticación JWT que se ejecuta una vez por solicitud.
 * <p>
 * Este filtro intercepta las solicitudes HTTP para verificar la validez del token JWT y autenticar al usuario.
 * </p>
 * 
 * <p>
 * Este archivo está bajo la Licencia Pública General de GNU.
 * </p>
 * 
 * @autor Christian Ariel Modesto Duarte
 * @version 1.0
 * @since 2024-07-17
 */
@Component
public class JwtAuthenticationFilter extends OncePerRequestFilter {

	@Autowired
    private UserDetailsService userDetailsService;

	@Value("${jwt.secret}")
    private  String jwtSecret;

    @Autowired
    private InvalidTokenService invalidTokenService;
	
    /**
     * Filtra las solicitudes HTTP para autenticar el usuario basado en el token JWT.
     * 
     * @param request la solicitud HTTP
     * @param response la respuesta HTTP
     * @param filterChain la cadena de filtros
     * @throws ServletException si ocurre un error de servlet
     * @throws IOException si ocurre un error de E/S
     */
    @Override
    protected void doFilterInternal(HttpServletRequest request,
                                    HttpServletResponse response,
                                    FilterChain filterChain) throws ServletException, IOException {

        String token = getJwtFromRequest(request);

        if (token != null && validateToken(token) && !invalidTokenService.isTokenInvalid(token)) {
            String username = getUsernameFromJWT(token);

            UserDetails userDetails = userDetailsService.loadUserByUsername(username);
            UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
            authentication.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));

            SecurityContextHolder.getContext().setAuthentication(authentication);
        }

        filterChain.doFilter(request, response);
    }

    /**
     * Obtiene el token JWT de la solicitud HTTP.
     * 
     * @param request la solicitud HTTP
     * @return el token JWT o null si no está presente
     */
    private String getJwtFromRequest(HttpServletRequest request) {
        String bearerToken = request.getHeader("Authorization");
        if (bearerToken != null && bearerToken.startsWith("Bearer ")) {
            return bearerToken.substring(7);
        }
        return null;
    }

    /**
     * Obtiene el nombre de usuario del token JWT.
     * 
     * @param token el token JWT
     * @return el nombre de usuario
     */
    private String getUsernameFromJWT(String token) {
        Claims claims = Jwts.parserBuilder()
                .setSigningKey(Keys.hmacShaKeyFor(jwtSecret.getBytes()))
                .build()
                .parseClaimsJws(token)
                .getBody();

        return claims.getSubject();
    }

    /**
     * Valida el token JWT.
     * 
     * @param authToken el token JWT
     * @return true si el token es válido, false en caso contrario
     */
    private boolean validateToken(String authToken) {
        try {
            Jwts.parserBuilder().setSigningKey(Keys.hmacShaKeyFor(jwtSecret.getBytes())).build().parseClaimsJws(authToken);
            return true;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return false;
    }
}
