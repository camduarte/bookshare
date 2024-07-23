package com.hackatong7.server.application.service.impl;

import java.util.ArrayList;

import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.hackatong7.server.domain.entity.Usuario;
import com.hackatong7.server.persistence.dao.UsuarioDAO;

/**
 * Implementación personalizada del servicio de detalles del usuario.
 * <p>
 * Esta clase proporciona la lógica para cargar los detalles del usuario desde la base de datos
 * utilizando el correo electrónico como nombre de usuario.
 * </p>
 * 
 * <p>
 * Este archivo está bajo la Licencia Pública General de GNU.
 * </p>
 * 
 * @autor Christian Ariel Modesto Duarte
 * @version 1.0
 * @since 2024-07-18
 */
@Service
public class CustomUserDetailsService implements UserDetailsService {

    private final UsuarioDAO usuarioDAO;

    /**
     * Constructor que inyecta el DAO de usuario.
     * 
     * @param usuarioDAO el DAO de usuario
     */
    public CustomUserDetailsService(UsuarioDAO usuarioDAO) {
        this.usuarioDAO = usuarioDAO;
    }

    /**
     * Carga un usuario por su nombre de usuario (correo electrónico).
     * 
     * @param username el nombre de usuario (correo electrónico)
     * @return los detalles del usuario
     * @throws UsernameNotFoundException si el usuario no es encontrado
     */
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Usuario usuario = usuarioDAO.buscarPorCorreoElectronico(username);
        if (usuario == null) {
            throw new UsernameNotFoundException("Usuario no encontrado con el correo electrónico: " + username);
        }

        return new User(usuario.getCorreo(),
                usuario.getContrasena(), new ArrayList<>());
    }
}
