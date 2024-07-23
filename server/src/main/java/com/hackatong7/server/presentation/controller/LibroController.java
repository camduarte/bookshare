package com.hackatong7.server.presentation.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.hackatong7.server.application.dto.LibroDTO;
import com.hackatong7.server.application.dto.RegistrarLibroDTO;
import com.hackatong7.server.application.service.LibroService;
import com.hackatong7.server.infrastructure.security.JwtTokenProvider;

import jakarta.validation.Valid;

/**
 * Controlador REST para la gestión de libros.
 * Proporciona endpoints para operaciones CRUD y búsqueda de libros.
 * 
 * <p>
 * Este archivo está bajo la Licencia Pública General de GNU.
 * </p>
 * 
 * @autor Ricardo Ripa
 * @version 1.0
 * @since 2024-07-23
 */
@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/books")
public class LibroController {

    @Autowired
    private LibroService libroService;
    @Autowired
    private JwtTokenProvider jwtTokenProvider;

    /**
     * Obtiene un libro por su ID.
     * 
     * @param id el ID del libro a obtener
     * @return el DTO del libro correspondiente al ID proporcionado
     */
    @GetMapping("/{id}")
    public ResponseEntity<?> getLibroById(@PathVariable Long id) {
        LibroDTO libroDTO = libroService.getLibro(id);
        if (libroDTO == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(libroDTO);
    }

    /**
     * Registra un nuevo libro en el sistema.
     * 
     * @param token el token de autenticación del usuario
     * @param registrarLibroDTO DTO que contiene los datos del libro a registrar
     * @return el DTO del libro registrado
     */
    @PostMapping("/create")
    public ResponseEntity<?> registrarLibro(
            @RequestHeader("Authorization") String token,
            @Valid @RequestBody RegistrarLibroDTO registrarLibroDTO) {

        String usuarioCorreo = jwtTokenProvider.getUsuario(token);
        LibroDTO libroDTO = libroService.registrarLibro(registrarLibroDTO,usuarioCorreo);
        return ResponseEntity.ok(libroDTO);
    }

    /**
     * Actualiza un libro existente en el sistema.
     * 
     * @param token el token de autenticación del usuario
     * @param id el ID del libro a actualizar
     * @param actualizarLibroDTO DTO que contiene los datos actualizados del libro
     * @return el DTO del libro actualizado
     */
    @PutMapping("/{id}")
    public ResponseEntity<?> actualizarLibro(
            @RequestHeader("Authorization") String token, 
            @PathVariable Long id,
            @Valid @RequestBody RegistrarLibroDTO actualizarLibroDTO) {

        String usuarioCorreo = jwtTokenProvider.getUsuario(token);
        LibroDTO libroDTO = libroService.actualizarLibro(id, actualizarLibroDTO, usuarioCorreo);
        if (libroDTO == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(libroDTO);
    }

    /**
     * Elimina un libro del sistema.
     * 
     * @param token el token de autenticación del usuario
     * @param id el ID del libro a eliminar
     * @return una respuesta sin contenido
     */
    @DeleteMapping("/{id}")
    public ResponseEntity<?> eliminarLibro(
            @RequestHeader("Authorization") String token, 
            @PathVariable Long id) {

        String usuarioCorreo = jwtTokenProvider.getUsuario(token);
        libroService.eliminarLibro(id, usuarioCorreo);
        return ResponseEntity.noContent().build();
    }   
    
    /**
     * Lista todos los libros del usuario actual.
     * 
     * @return una lista de DTOs de libros que pertenecen al usuario actual
     */
    @GetMapping
    public ResponseEntity<List<LibroDTO>> listarLibrosDelUsuario() {
    	List<LibroDTO> librosDTO = this.libroService.listarLibrosDelUsuario();
    	return ResponseEntity.ok(librosDTO);
    }

    /**
     * Lista todos los libros disponibles en el sistema.
     * 
     * @return una lista de DTOs de todos los libros
     */
    @GetMapping("/all")
    public ResponseEntity<List<LibroDTO>> listarLibros() {
    	List<LibroDTO> librosDTO = this.libroService.listarLibros();
    	return ResponseEntity.ok(librosDTO);
    }

    /**
     * Lista todos los libros que coinciden con un género específico.
     * 
     * @param genero el género para filtrar los libros
     * @return una lista de DTOs de libros que pertenecen al género especificado
     */
    @GetMapping("/byGender")
    public ResponseEntity<List<LibroDTO>> listarLibrosPorGenero(
            @RequestParam("genre") String genero) {
        List<LibroDTO> librosDTO = libroService.listarLibrosPorGenero(genero);
        return ResponseEntity.ok(librosDTO);
    }
    
    /**
     * Busca libros que cuyo titulo coincidan con la clave enviada .
     * 
     * @param palabraClave la palabra clave para buscar en los libros
     * @return una lista de DTOs de libros que coinciden con la palabra clave
     */
    @GetMapping("/search")
    public ResponseEntity<List<LibroDTO>> buscarLibros(
            @RequestParam("q") String palabraClave) {
        List<LibroDTO> librosDTO = libroService.buscar(palabraClave);
        return ResponseEntity.ok(librosDTO);
    }

}