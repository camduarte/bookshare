package com.hackatong7.server.application.mapper;

import java.util.List;
import java.util.stream.Collectors;

import com.hackatong7.server.application.dto.LibroDTO;
import com.hackatong7.server.application.dto.RegistrarLibroDTO;
import com.hackatong7.server.domain.entity.Libro;
import com.hackatong7.server.domain.entity.Usuario;

public class LibroMapper {

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

    public static List<LibroDTO> toDTOList(List<Libro> libros) {
        return libros.stream().map(LibroMapper::toDTO).collect(Collectors.toList());
    }

    public static List<Libro> toEntityList(List<LibroDTO> libroDTOs) {
        return libroDTOs.stream().map(LibroMapper::toEntity).collect(Collectors.toList());
    }

}