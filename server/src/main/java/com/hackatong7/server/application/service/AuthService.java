package com.hackatong7.server.application.service;

import com.hackatong7.server.application.dto.RegistroUsuarioDTO;
import com.hackatong7.server.domain.entity.Usuario;

/**
 * Interfaz para el servicio de autenticación.
 * Proporciona métodos para registrar y autenticar usuarios.
 * 
 * <p>
 * Este archivo está bajo la Licencia Pública General de GNU.
 * </p>
 * 
 * @autor Christian Ariel Modesto Duarte
 * @version 1.0
 * @since 2024-07-17
 */
public interface AuthService {

    /**
     * Registra un nuevo usuario en el sistema.
     * 
     * @param registroUsuarioDTO DTO que contiene los datos del usuario a registrar
     * @return el usuario registrado
     */
    Usuario registrarUsuario(RegistroUsuarioDTO registroUsuarioDTO);
}