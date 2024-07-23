
package com.hackatong7.server.domain.exceptions;

/**
 * Excepción para manejar la verificacion del propietario del libro.
 * 
 * <p>
 * Este archivo está bajo la Licencia Pública General de GNU.
 * </p>
 * 
 * @autor Ricardo Ripa
 * @version 1.0
 * @since 2024-07-23
 */
public class UnauthorizedException extends RuntimeException {
    
    /**
     * Constructor que acepta un mensaje de error.
     * 
     * @param message el mensaje de error
     */
    public UnauthorizedException(String mensaje) {
        super(mensaje);
    }
    
}
