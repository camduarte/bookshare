package com.hackatong7.server.presentation.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
}