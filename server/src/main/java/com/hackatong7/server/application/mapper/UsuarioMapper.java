package com.hackatong7.server.application.mapper;

import com.hackatong7.server.application.dto.RegistroUsuarioDTO;
import com.hackatong7.server.domain.entity.Usuario;

/**
 * Clase de mapeo para convertir entre DTOs y entidades de Usuario.
 * 
 * <p>
 * Este archivo está bajo la Licencia Pública General de GNU.
 * </p>
 * 
 * @autor Christian Ariel Modesto Duarte
 * @version 1.0
 * @since 2024-07-17
 */
public class UsuarioMapper {

    /**
     * Convierte un RegistroUsuarioDTO a una entidad Usuario.
     * 
     * @param registroUsuarioDTO el DTO de registro de usuario
     * @return la entidad Usuario
     */
    public static Usuario toEntity(RegistroUsuarioDTO registroUsuarioDTO) {
        if (registroUsuarioDTO == null) {
            return null;
        }

        Usuario usuario = new Usuario();
        usuario.setNombre(registroUsuarioDTO.getNombre());
        usuario.setCorreo(registroUsuarioDTO.getCorreo());
        usuario.setContrasena(registroUsuarioDTO.getContrasena());
        return usuario;
    }

    /**
     * Convierte una entidad Usuario a un RegistroUsuarioDTO.
     * 
     * @param usuario la entidad Usuario
     * @return el DTO RegistroUsuarioDTO
     */
    public static RegistroUsuarioDTO toDTO(Usuario usuario) {
        if (usuario == null) {
            return null;
        }

        RegistroUsuarioDTO registroUsuarioDTO = new RegistroUsuarioDTO();
        registroUsuarioDTO.setNombre(usuario.getNombre());
        registroUsuarioDTO.setCorreo(usuario.getCorreo());
        registroUsuarioDTO.setContrasena(usuario.getContrasena());
        return registroUsuarioDTO;
    }
}