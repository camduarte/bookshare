package com.hackatong7.server.presentation.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hackatong7.server.application.dto.LoginReqDTO;
import com.hackatong7.server.application.dto.LoginResDTO;
import com.hackatong7.server.application.dto.RegistroUsuarioDTO;
import com.hackatong7.server.application.service.AuthService;

import jakarta.validation.Valid;

/**
 * Controlador REST para la autenticación de usuarios.
 * Proporciona endpoints para el registro y autenticación de usuarios.
 * 
 * <p>
 * Este archivo está bajo la Licencia Pública General de GNU.
 * </p>
 * 
 * @autor Christian Ariel Modesto Duarte
 * @version 1.0
 * @since 2024-07-17
 */
@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private AuthService authService;

    /**
     * Endpoint para registrar un nuevo usuario.
     * 
     * @param registroUsuarioDTO DTO que contiene los datos del usuario a registrar
     * @return una respuesta HTTP 200 OK si el registro es exitoso
     */
    @PostMapping("/register")
    public ResponseEntity<?> registrarUsuario(@Valid @RequestBody RegistroUsuarioDTO registroUsuarioDTO) {
        authService.registrarUsuario(registroUsuarioDTO);
        return ResponseEntity.ok().build();
    }

    @PostMapping("/login")
    public ResponseEntity<?> loginUsuario(@RequestBody LoginReqDTO loginDTO) {
        String token = authService.loginUsuario(loginDTO);
        return ResponseEntity.ok(new LoginResDTO(token));
    }

    @PostMapping("/logout")
    public ResponseEntity<?> logoutUsuario(@RequestHeader("Authorization") String token) {
        if (token != null && token.startsWith("Bearer ")) {
            token = token.substring(7);
        }
        authService.logoutUsuario(token);
        return ResponseEntity.ok().build();
    }
}