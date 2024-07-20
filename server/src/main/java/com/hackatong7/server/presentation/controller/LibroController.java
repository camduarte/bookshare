
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
import java.util.List;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;




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
    
    
    @GetMapping("/get/{id}")
    public ResponseEntity<?> getLibroById(
            @RequestHeader("Authorization") String token, 
            @PathVariable Long id) {        
        
        String usuario = jwtTokenProvider.getUsuario(token);
        Libro libro = libroService.getLibro(id);      
        if (libro == null) {
            return ResponseEntity.notFound().build();
        }        
        return ResponseEntity.ok(libro);
    }
    
    
    @PostMapping("/registrar")
    public ResponseEntity<?> registrarLibro(
            @RequestHeader("Authorization") String token, 
            @Valid @RequestBody RegistrarLibroDTO registrarLibroDTO) {    
        
        String usuarioCorreo = jwtTokenProvider.getUsuario(token);        
        Libro libro = libroService.registrarLibro(registrarLibroDTO,usuarioCorreo);        
        return ResponseEntity.ok(libro);
    }
    
    @PutMapping("/actualizar/{id}")
    public ResponseEntity<?> actualizarLibro(
            @RequestHeader("Authorization") String token, 
            @PathVariable Long id, 
            @Valid @RequestBody RegistrarLibroDTO actualizarLibroDTO) {
        
        String usuarioCorreo = jwtTokenProvider.getUsuario(token);
        Libro libroActualizado = libroService.actualizarLibro(id, actualizarLibroDTO, usuarioCorreo);
        if (libroActualizado == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(libroActualizado);
    }
    
    @DeleteMapping("/eliminar/{id}")
    public ResponseEntity<?> eliminarLibro(
            @RequestHeader("Authorization") String token, 
            @PathVariable Long id) {
        
        String usuarioCorreo = jwtTokenProvider.getUsuario(token);
        libroService.eliminarLibro(id, usuarioCorreo);
        return ResponseEntity.noContent().build();
    }
    
    @GetMapping("/librosusuario")
    public ResponseEntity<List<Libro>> listarLibrosPorUsuario(
            @RequestHeader("Authorization") String token) {
        String usuarioCorreo = jwtTokenProvider.getUsuario(token);
        List<Libro> libros = libroService.listarLibrosPorUsuario(usuarioCorreo);
        return ResponseEntity.ok(libros);
    }
    
    
}
