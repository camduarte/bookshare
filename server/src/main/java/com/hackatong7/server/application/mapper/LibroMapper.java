package com.hackatong7.server.application.mapper;

import java.util.List;
import java.util.stream.Collectors;

import com.hackatong7.server.application.dto.LibroDTO;
import com.hackatong7.server.application.dto.RegistrarLibroDTO;
import com.hackatong7.server.domain.entity.Libro;
import com.hackatong7.server.domain.entity.Usuario;

/**
 * Clase de mapeo para convertir entre DTOs y entidades de Libro.
 * 
 * <p>
 * Este archivo está bajo la Licencia Pública General de GNU.
 * </p>
 * 
 * @autor Ricardo Ripa
 * @version 1.0
 * @since 2024-07-23
 */

public class LibroMapper {

    /**
     * Convierte un RegistrarLibroDTO a una entidad Libro.
     * 
     * @param registrarLibroDTO el DTO de registro de libro
     * @param usuario el usuario asociado al libro
     * @return la entidad Libro
     */
    public static Libro toEntity(RegistrarLibroDTO registrarLibroDTO, 
    		Usuario usuario) {
        if (registrarLibroDTO == null) {
            return null;
        }
        Libro libro = new Libro();
        libro.setTitulo(registrarLibroDTO.getTitle());
        libro.setAutor(registrarLibroDTO.getAuthor());
        libro.setDescripcion(registrarLibroDTO.getDescription());
        libro.setGenero(registrarLibroDTO.getGenre());
        libro.setImagenPortada(registrarLibroDTO.getImgUrl());
        libro.setFechaPublicacion(registrarLibroDTO.getYear());
        libro.setUsuario(usuario);

        return libro;
    }

    /**
    * Actualiza una entidad Libro existente con los datos proporcionados en un RegistrarLibroDTO.
    * 
    * <p>
    * Solo los campos no nulos en el DTO se copiarán a la entidad existente. 
    * Si un campo en el DTO es nulo, no se actualizará en la entidad.
    * </p>
    * 
    * @param libroExistente la entidad Libro que se va a actualizar
    * @param actualizarLibroDTO el DTO que contiene los nuevos datos para actualizar la entidad Libro
    */
    public static void actualizarEntidad(Libro libroExistente, 
    		RegistrarLibroDTO actualizarLibroDTO) {
        if (actualizarLibroDTO.getTitle() != null) {
            libroExistente.setTitulo(actualizarLibroDTO.getTitle());
        }
        if (actualizarLibroDTO.getAuthor() != null) {
            libroExistente.setAutor(actualizarLibroDTO.getAuthor());
        }
        if (actualizarLibroDTO.getDescription() != null) {
            libroExistente.setDescripcion(actualizarLibroDTO.getDescription());
        }
        if (actualizarLibroDTO.getGenre() != null) {
            libroExistente.setGenero(actualizarLibroDTO.getGenre());
        }
        if (actualizarLibroDTO.getImgUrl() != null) {
            libroExistente.setImagenPortada(actualizarLibroDTO.getImgUrl());
        }
        if (actualizarLibroDTO.getYear() != null) {
            libroExistente.setFechaPublicacion(actualizarLibroDTO.getYear());
        }
    }

    
     /**
     * Convierte un LibroDTO a una entidad Libro.
     * 
     * @param libroDTO el DTO de registro de libro
     * @return la entidad Libro
     */
    public static Libro toEntity(LibroDTO libroDTO) {
        if (libroDTO == null) {
            return null;
        }
        Libro libro = new Libro();
        libro.setTitulo(libroDTO.getTitle());
        libro.setAutor(libroDTO.getAuthor());
        libro.setDescripcion(libroDTO.getDescription());
        libro.setFechaPublicacion(libroDTO.getYear());
        libro.setGenero(libroDTO.getGenre());
        libro.setImagenPortada(libroDTO.getImgUrl());
        libro.setId(libroDTO.getId());
        return libro;
    }

    /**
     * Convierte una entidad Libro a un LibroDTO.
     * 
     * @param libro la entidad Usuario
     * @return el DTO LibroDTO
     */
    public static LibroDTO toDTO(Libro libro) {
        if (libro == null) {
            return null;
        }
        LibroDTO libroDTO = new LibroDTO();
        libroDTO.setTitle(libro.getTitulo());
        libroDTO.setAuthor(libro.getAutor());
        libroDTO.setDescription(libro.getDescripcion());
        libroDTO.setYear(libro.getFechaPublicacion());
        libroDTO.setGenre(libro.getGenero());
        libroDTO.setImgUrl(libro.getImagenPortada());
        libroDTO.setId(libro.getId());
        return libroDTO;
    }

    /**
    * Convierte una lista de entidades Libro a una lista de LibroDTO.
    * 
    * @param libros la lista de entidades Libro
    * @return una lista de DTOs LibroDTO
    */
    public static List<LibroDTO> toDTOList(List<Libro> libros) {
        return libros.stream().map(LibroMapper::toDTO).collect(Collectors.toList());
    }

    /**
    * Convierte una lista de LibroDTO a una lista de entidades Libro.
    * 
    * @param libroDTOs la lista de DTOs LibroDTO
    * @return una lista de entidades Libro
    */
    public static List<Libro> toEntityList(List<LibroDTO> libroDTOs) {
        return libroDTOs.stream().map(LibroMapper::toEntity).collect(Collectors.toList());
    }

}