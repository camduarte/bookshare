package com.hackatong7.server.application.dto;

/**
 * DTO para la solicitud de inicio de sesión.
 * Contiene los datos necesarios para autenticar a un usuario.
 * 
 * <p>
 * Este archivo está bajo la Licencia Pública General de GNU.
 * </p>
 * 
 * @autor Christian Ariel Modesto Duarte
 * @version 1.0
 * @since 2024-07-18
 */
public class LoginReqDTO {

    /**
     * El correo electrónico del usuario.
     */
    private String email;

    /**
     * La contraseña del usuario.
     */
    private String password;

    /**
     * Constructor por defecto.
     */
    public LoginReqDTO() {
    }

    /**
     * Constructor con todos los campos.
     * 
     * @param correo el correo electrónico del usuario
     * @param contrasena la contraseña del usuario
     */
    public LoginReqDTO(String correo, String contrasena) {
        this.email = correo;
        this.password = contrasena;
    }

    /**
     * Obtiene el correo electrónico del usuario.
     * 
     * @return el correo electrónico del usuario
     */
    public String getEmail() {
        return email;
    }

    /**
     * Establece el correo electrónico del usuario.
     * 
     * @param correo el correo electrónico del usuario
     */
    public void setEmail(String correo) {
        this.email = correo;
    }

    /**
     * Obtiene la contraseña del usuario.
     * 
     * @return la contraseña del usuario
     */
    public String getPassword() {
        return password;
    }

    /**
     * Establece la contraseña del usuario.
     * 
     * @param contrasena la contraseña del usuario
     */
    public void setPassword(String contrasena) {
        this.password = contrasena;
    }
}
