
package com.hackatong7.server.presentation.controller;

import jakarta.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.hackatong7.server.application.dto.RegistrarLibroDTO;
import com.hackatong7.server.application.service.LibroService;
import com.hackatong7.server.domain.entity.Libro;
import com.hackatong7.server.infrastructure.security.JwtTokenProvider;




/**
 *
 * @author USUARIO
 */
@RestController
@RequestMapping("/api/libros")
public class LibroController {
    
    @Autowired
    private LibroService libroService;
    private final JwtTokenProvider jwtTokenProvider;

    @Autowired
    public LibroController(LibroService libroService, JwtTokenProvider jwtTokenProvider) {
        this.libroService = libroService;
        this.jwtTokenProvider = jwtTokenProvider;
    }
    
    
    @PostMapping("/registrar")
    public ResponseEntity<?> registrarLibro(
            @RequestHeader("Authorization") String token, 
            @Valid @RequestBody RegistrarLibroDTO registrarLibroDTO) {    
        
        String usuarioCorreo = jwtTokenProvider.getUsuario(token);        
        Libro libro = libroService.registrarLibro(registrarLibroDTO,usuarioCorreo);
        
        return ResponseEntity.ok(libro);
    }
    
    
    @GetMapping("/get")
    public ResponseEntity<?> getLibro(@RequestHeader("Authorization") String token) {
        
        //String respues = libroService.getLibro();                       
        String usuario = jwtTokenProvider.getUsuario(token);
        
        System.out.println(usuario);

        return ResponseEntity.ok(usuario);
        //Libro libro = libroService.getLibro();
        //return ResponseEntity.ok(respues);
    }
    
    
    
}
