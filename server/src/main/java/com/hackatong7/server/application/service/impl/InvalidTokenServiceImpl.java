package com.hackatong7.server.application.service.impl;

import java.util.HashSet;
import java.util.Set;

import org.springframework.stereotype.Service;

import com.hackatong7.server.application.service.InvalidTokenService;

/**
 * Implementación del servicio {@link InvalidTokenService}.
 * 
 * <p>
 * Esta clase proporciona la funcionalidad para agregar tokens a una lista de tokens inválidos
 * y verificar si un token está en esa lista.
 * </p>
 * 
 * <p>
 * Este archivo está bajo la Licencia Pública General de GNU.
 * </p>
 * 
 * @autor Christian Ariel Modesto Duarte
 * @version 1.0
 * @since 2024-07-19
 */
@Service
public class InvalidTokenServiceImpl implements InvalidTokenService {

    private Set<String> invalidTokens = new HashSet<>();

    /**
     * {@inheritDoc}
     */
    @Override
    public void addToken(String token) {
        invalidTokens.add(token);
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public boolean isTokenInvalid(String token) {
        return invalidTokens.contains(token);
    }
}
