package com.hackatong7.server.infrastructure.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * Configuración de JWT.
 * <p>
 * Esta clase configura los valores necesarios para el manejo de JWT en la aplicación.
 * </p>
 * 
 * <p>
 * Este archivo está bajo la Licencia Pública General de GNU.
 * </p>
 * 
 * @autor Christian Ariel Modesto Duarte
 * @version 1.0
 * @since 2024-07-18
 */
@Configuration
public class JwtConfig {

    @Value("${jwt.secret}")
    private String jwtSecret;

    /**
     * Proporciona el secreto JWT.
     * 
     * @return el secreto JWT
     */
    @Bean
    public String jwtSecret() {
        return jwtSecret;
    }
}
