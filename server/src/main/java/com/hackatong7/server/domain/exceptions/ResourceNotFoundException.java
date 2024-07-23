
package com.hackatong7.server.domain.exceptions;

/**
 * Excepción para manejar la el error de libro no encontrado.
 * 
 * <p>
 * Este archivo está bajo la Licencia Pública General de GNU.
 * </p>
 * 
 * @autor Ricardo Ripa
 * @version 1.0
 * @since 2024-07-23
 */
public class ResourceNotFoundException extends RuntimeException {
    
    /**
     * Constructor que acepta un mensaje de error.
     * 
     * @param mensaje el mensaje de error
     */
    public ResourceNotFoundException(String mensaje) {
        super(mensaje);
    }
}
