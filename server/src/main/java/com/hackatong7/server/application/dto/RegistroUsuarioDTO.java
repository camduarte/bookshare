package com.hackatong7.server.application.dto;

/**
 * DTO para el registro de un usuario.
 * Contiene los datos necesarios para registrar un usuario nuevo en el sistema.
 * 
 * <p>
 * Este archivo está bajo la Licencia Pública General de GNU.
 * </p>
 * 
 * @autor Christian Ariel Modesto Duarte
 * @version 1.0
 * @since 2024-07-17
 */
public class RegistroUsuarioDTO {

    /** El nombre del usuario. */
    private String nombre;

    /** El correo electrónico del usuario. */
    private String correo;

    /** La contraseña del usuario. */
    private String contrasena;

    /**
     * Constructor por defecto.
     */
    public RegistroUsuarioDTO() {}

    /**
     * Constructor con todos los campos.
     * 
     * @param nombre el nombre del usuario
     * @param correo el correo electrónico del usuario
     * @param contrasena la contraseña del usuario
     */
    public RegistroUsuarioDTO(String nombre, String correo, String contrasena) {
        this.nombre = nombre;
        this.correo = correo;
        this.contrasena = contrasena;
    }

    /**
     * Obtiene el nombre del usuario.
     * 
     * @return el nombre del usuario
     */
    public String getNombre() {
        return nombre;
    }

    /**
     * Establece el nombre del usuario.
     * 
     * @param nombre el nombre del usuario
     */
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    /**
     * Obtiene el correo electrónico del usuario.
     * 
     * @return el correo electrónico del usuario
     */
    public String getCorreo() {
        return correo;
    }

    /**
     * Establece el correo electrónico del usuario.
     * 
     * @param correo el correo electrónico del usuario
     */
    public void setEmail(String correo) {
        this.correo = correo;
    }

    /**
     * Obtiene la contraseña del usuario.
     * 
     * @return la contraseña del usuario
     */
    public String getContrasena() {
        return contrasena;
    }

    /**
     * Establece la contraseña del usuario.
     * 
     * @param contrasena la contraseña del usuario
     */
    public void setContrasena(String contrasena) {
        this.contrasena = contrasena;
    }
}