package com.hackatong7.server.application.dto;

/**
 * DTO para la respuesta de inicio de sesión.
 * Contiene el token de autenticación generado tras un inicio de sesión exitoso.
 * 
 * <p>
 * Este archivo está bajo la Licencia Pública General de GNU.
 * </p>
 * 
 * @autor Christian Ariel Modesto Duarte
 * @version 1.0
 * @since 2024-07-18
 */
public class LoginResDTO {

    /**
     * El token de autenticación del usuario.
     */
    private String token;

    /**
     * Constructor con el token.
     * 
     * @param token el token de autenticación del usuario
     */
    public LoginResDTO(String token) {
        this.setToken(token);
    }

    /**
     * Obtiene el token de autenticación del usuario.
     * 
     * @return el token de autenticación del usuario
     */
    public String getToken() {
        return token;
    }

    /**
     * Establece el token de autenticación del usuario.
     * 
     * @param token el token de autenticación del usuario
     */
    public void setToken(String token) {
        this.token = token;
    }
}
