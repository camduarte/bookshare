package com.hackatong7.server.application.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.hackatong7.server.application.dto.RegistroUsuarioDTO;
import com.hackatong7.server.application.mapper.UsuarioMapper;
import com.hackatong7.server.application.service.AuthService;
import com.hackatong7.server.domain.entity.Usuario;
import com.hackatong7.server.domain.exceptions.RegistroUsuarioException;
import com.hackatong7.server.domain.exceptions.UsuarioExistenteException;
import com.hackatong7.server.persistence.dao.UsuarioDAO;

/**
 * Implementación del servicio de autenticación.
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
@Service
public class AuthServiceImpl implements AuthService {

    //TODO: Agregar anotación @Autowired
    private UsuarioDAO usuarioDAO;

    @Autowired
    private PasswordEncoder passwordEncoder;

    /**
     * Registra un nuevo usuario en el sistema.
     * 
     * @param registroUsuarioDTO DTO que contiene los datos del usuario a registrar
     * @return el usuario registrado
     */
    @Override
    public Usuario registrarUsuario(RegistroUsuarioDTO registroUsuarioDTO) {
        if (usuarioDAO.findByCorreoElectronico(registroUsuarioDTO.getCorreo()) != null) {
            throw new UsuarioExistenteException("El usuario con el correo electrónico " + registroUsuarioDTO.getCorreo() + " ya existe.");
        }

        try {
            Usuario usuario = UsuarioMapper.toEntity(registroUsuarioDTO);
            usuario.setContrasena(passwordEncoder.encode(registroUsuarioDTO.getContrasena()));
            return usuarioDAO.guardarUsuario(usuario);
        } catch (Exception e) {
        	e.printStackTrace();
            throw new RegistroUsuarioException("Error al registrar el usuario.");
        }
    }
}