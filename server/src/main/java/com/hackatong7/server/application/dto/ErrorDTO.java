package com.hackatong7.server.application.dto;

/**
 * DTO para representar los datos de error.
 * Contiene un mensaje de error y el código de estado HTTP correspondiente.
 * 
 * <p>
 * Este archivo está bajo la Licencia Pública General de GNU.
 * </p>
 * 
 * @autor Christian Ariel Modesto Duarte
 * @version 1.0
 * @since 2024-07-17
 */
public class ErrorDTO {

    /**
     * El mensaje de error.
     */
    private String mensaje;

    /**
     * El código de estado HTTP.
     */
    private int estado;

    /**
     * Constructor con parámetros.
     * 
     * @param mensaje el mensaje de error
     * @param estado el código de estado HTTP
     */
    public ErrorDTO(String mensaje, int estado) {
        this.mensaje = mensaje;
        this.estado = estado;
    }

    /**
     * Obtiene el mensaje de error.
     * 
     * @return el mensaje de error
     */
    public String getmensaje() {
        return mensaje;
    }

    /**
     * Establece el mensaje de error.
     * 
     * @param mensaje el mensaje de error
     */
    public void setmensaje(String mensaje) {
        this.mensaje = mensaje;
    }

    /**
     * Obtiene el código de estado HTTP.
     * 
     * @return el código de estado HTTP
     */
    public int getEstado() {
        return estado;
    }

    /**
     * Establece el código de estado HTTP.
     * 
     * @param estado el código de estado HTTP
     */
    public void setEstado(int estado) {
        this.estado = estado;
    }
}
