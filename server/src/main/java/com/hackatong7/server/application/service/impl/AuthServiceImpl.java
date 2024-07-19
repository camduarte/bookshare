package com.hackatong7.server.application.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.hackatong7.server.application.dto.LoginReqDTO;
import com.hackatong7.server.application.dto.RegistroUsuarioDTO;
import com.hackatong7.server.application.mapper.UsuarioMapper;
import com.hackatong7.server.application.service.AuthService;
import com.hackatong7.server.application.service.InvalidTokenService;
import com.hackatong7.server.domain.entity.Usuario;
import com.hackatong7.server.domain.exceptions.RegistroUsuarioException;
import com.hackatong7.server.domain.exceptions.UsuarioExistenteException;
import com.hackatong7.server.infrastructure.security.JwtTokenProvider;
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

    @Autowired
    private UsuarioDAO usuarioDAO;

    @Autowired
    private PasswordEncoder passwordEncoder;
    
    @Autowired
    private JwtTokenProvider jwtTokenProvider;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private InvalidTokenService invalidTokenService;

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

    /**
     * Autentica un usuario en el sistema.
     * 
     * @param loginReqDTO DTO que contiene los datos de inicio de sesión del usuario
     * @return un token de autenticación si las credenciales son válidas
     */
    @Override
    public String loginUsuario(LoginReqDTO loginReqDTO) {
    	Usuario	usuario = usuarioDAO.findByCorreoElectronico(loginReqDTO.getCorreo());
        if (usuario != null && passwordEncoder.matches(loginReqDTO.getContrasena(), usuario.getContrasena())) {
        	Authentication authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                    		loginReqDTO.getCorreo(),
                    		loginReqDTO.getContrasena()
                    )
            );
            SecurityContextHolder.getContext().setAuthentication(authentication);
            return jwtTokenProvider.generateToken(usuario.getCorreo());
        } else {
            throw new RuntimeException("Correo electrónico o contraseña incorrectos");
        }
    }

	/**
	 * Desloguea el usuario
	 * 
	 * @param token El token de autenticación
	 */
    public void logoutUsuario(String token) {
        SecurityContextHolder.clearContext();
        invalidTokenService.addToken(token);
    }
}