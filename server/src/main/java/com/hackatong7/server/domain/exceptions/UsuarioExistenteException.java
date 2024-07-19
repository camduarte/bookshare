package com.hackatong7.server.domain.exceptions;

/**
 * Excepción para manejar el caso en que un usuario ya existe en el sistema.
 * 
 * <p>
 * Este archivo está bajo la Licencia Pública General de GNU.
 * </p>
 * 
 * @autor Christian Ariel Modesto Duarte
 * @version 1.0
 * @since 2024-07-18
 */
public class UsuarioExistenteException extends RuntimeException {
    private static final long serialVersionUID = 1L;

    /**
     * Constructor que acepta un mensaje de error.
     * 
     * @param mensaje el mensaje de error
     */
    public UsuarioExistenteException(String mensaje) {
        super(mensaje);
    }
}