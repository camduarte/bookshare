package com.hackatong7.server.domain.exceptions;

/**
 * Excepción para manejar errores durante el registro de usuarios.
 * 
 * <p>
 * Este archivo está bajo la Licencia Pública General de GNU.
 * </p>
 * 
 * @autor Christian Ariel Modesto Duarte
 * @version 1.0
 * @since 2024-07-18
 */
public class RegistroUsuarioException extends RuntimeException {
    private static final long serialVersionUID = 1L;

    /**
     * Constructor que acepta un mensaje de error.
     * 
     * @param mensaje el mensaje de error
     */
    public RegistroUsuarioException(String mensaje) {
        super(mensaje);
    }
}