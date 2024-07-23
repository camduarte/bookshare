package com.hackatong7.server.application.service;

import java.util.List;

import com.hackatong7.server.application.dto.LibroDTO;
import com.hackatong7.server.application.dto.RegistrarLibroDTO;

/**
 * Interfaz para el servicio de libro.
 * Proporciona métodos para el CRUD libro, listado y filtrado .
 * 
 * <p>
 * Este archivo está bajo la Licencia Pública General de GNU.
 * </p>
 * 
 * @autor Ricardo Ripa
 * @version 1.0
 * @since 2024-07-23
 */
public interface LibroService {

    /**
     * Obtiene un libro por su ID.
     * 
     * @param id el ID del libro a obtener
     * @return el DTO del libro correspondiente al ID proporcionado
     */
    public LibroDTO getLibro(Long id);

    /**
     * Registra un nuevo libro en el sistema.
     * 
     * @param registrarLibroDTO DTO que contiene los datos del libro a registrar
     * @param usuarioCorreo el correo electrónico del usuario que registra el libro
     * @return el DTO del libro registrado
     */
    public LibroDTO registrarLibro(RegistrarLibroDTO registrarLibroDTO,String usuarioCorreo);

    /**
     * Actualiza un libro existente en el sistema.
     * 
     * @param id el ID del libro a actualizar
     * @param actualizarLibroDTO DTO que contiene los datos actualizados del libro
     * @param usuarioCorreo el correo electrónico del usuario que realiza la actualización
     * @return el DTO del libro actualizado
     */
    public LibroDTO actualizarLibro(Long id,RegistrarLibroDTO actualizarLibroDTO,String usuarioCorreo);

    /**
     * Elimina un libro del sistema.
     * 
     * @param id el ID del libro a eliminar
     * @param usuarioCorreo el correo electrónico del usuario que solicita la eliminación, verifica que sea el propietario del libro
     */
    public void eliminarLibro(Long id, String usuarioCorreo);

    /**
     * Lista todos los libros del usuario.
     * 
     * @return una lista de DTOs de libros que pertenecen al usuario
     */
    public List<LibroDTO> listarLibrosDelUsuario();

    /**
     * Lista todos los libros disponibles en el sistema.
     * 
     * @return una lista de DTOs de todos los libros
     */
    public List<LibroDTO> listarLibros();

    /**
     * Lista todos los libros que coinciden con un género específico.
     * 
     * @param genero el género para filtrar los libros
     * @return una lista de DTOs de libros que pertenecen al género especificado
     */
    public List<LibroDTO> listarLibrosPorGenero(String genero);

    /**
     * Busca libros que cuyo titulo coincidan con la clave enviada .
     * 
     * @param palabraClave la palabra clave para buscar en los libros
     * @return una lista de DTOs de libros que coinciden con la palabra clave
     */
    public List<LibroDTO> buscar(String palabraClave);
}
