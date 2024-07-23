package com.hackatong7.server.application.service;

/**
 * Servicio para manejar tokens inválidos.
 * 
 * <p>
 * Este servicio proporciona métodos para agregar un token a la lista de tokens inválidos
 * y verificar si un token es inválido.
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
public interface InvalidTokenService {

    /**
     * Agrega un token a la lista de tokens inválidos.
     * 
     * @param token el token a agregar
     */
    void addToken(String token);

    /**
     * Verifica si un token es inválido.
     * 
     * @param token el token a verificar
     * @return true si el token es inválido, false en caso contrario
     */
    boolean isTokenInvalid(String token);
}