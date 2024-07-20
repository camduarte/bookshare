package com.hackatong7.server.application.dto;

import com.hackatong7.server.application.validators.ValidPassword;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;

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

    /** 
     * El nombre del usuario.
     */
    @NotBlank(message = "El nombre es obligatorio")
    @Size(min = 1, max = 100, message = "El nombre debe tener entre 1 y 100 caracteres")
    @Pattern(regexp = "^[A-Za-záéíóúÁÉÍÓÚñÑ ]+$", message = "El nombre solo puede contener letras y espacios")
    private String name;

    /**
     * El correo electrónico del usuario.
     */
    @NotBlank(message = "El correo electrónico es obligatorio")
    @Email(message = "El correo electrónico debe tener un formato válido")
    private String email;

    /**
     * La contraseña del usuario.
     */
    @NotBlank(message = "La contraseña es obligatoria")
    @ValidPassword
    private String password;

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
        this.name = nombre;
        this.email = correo;
        this.password = contrasena;
    }

    /**
     * Obtiene el nombre del usuario.
     * 
     * @return el nombre del usuario
     */
    public String getName() {
        return name;
    }

    /**
     * Establece el nombre del usuario.
     * 
     * @param nombre el nombre del usuario
     */
    public void setName(String nombre) {
        this.name = nombre;
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