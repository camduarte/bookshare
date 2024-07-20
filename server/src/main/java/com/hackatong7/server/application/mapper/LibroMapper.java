
package com.hackatong7.server.application.mapper;

import java.util.List;
import java.util.stream.Collectors;

import com.hackatong7.server.application.dto.LibroDTO;
import com.hackatong7.server.application.dto.RegistrarLibroDTO;
import com.hackatong7.server.domain.entity.Libro;
import com.hackatong7.server.domain.entity.Usuario;



public class LibroMapper {
    
    public static Libro toEntity(RegistrarLibroDTO registrarLibroDTO,Usuario usuario) {
        if (registrarLibroDTO == null) {
            return null;
        }

        Libro libro = new Libro();
        libro.setTitulo(registrarLibroDTO.getTitulo());
        libro.setAutor(registrarLibroDTO.getAutor());
        libro.setDescripcion(registrarLibroDTO.getDescripcion());
        libro.setGenero(registrarLibroDTO.getGenero());
        libro.setImagenPortada(registrarLibroDTO.getImagenPortada());
        libro.setFechaPublicacion(registrarLibroDTO.getFechaPublicacion());        
        libro.setEtiquetas(registrarLibroDTO.getEtiquetas());
        libro.setUsuario(usuario);
        
        return libro;
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

    
    public static void actualizarEntidad(Libro libroExistente, RegistrarLibroDTO actualizarLibroDTO) {
        if (actualizarLibroDTO.getTitulo() != null) {
            libroExistente.setTitulo(actualizarLibroDTO.getTitulo());
        }
        if (actualizarLibroDTO.getAutor() != null) {
            libroExistente.setAutor(actualizarLibroDTO.getAutor());
        }
        if (actualizarLibroDTO.getDescripcion() != null) {
            libroExistente.setDescripcion(actualizarLibroDTO.getDescripcion());
        }
        if (actualizarLibroDTO.getGenero() != null) {
            libroExistente.setGenero(actualizarLibroDTO.getGenero());
        }
        if (actualizarLibroDTO.getImagenPortada() != null) {
            libroExistente.setImagenPortada(actualizarLibroDTO.getImagenPortada());
        }
        if (actualizarLibroDTO.getFechaPublicacion() != null) {
            libroExistente.setFechaPublicacion(actualizarLibroDTO.getFechaPublicacion());
        }
        if (actualizarLibroDTO.getEtiquetas() != null) {
            libroExistente.setEtiquetas(actualizarLibroDTO.getEtiquetas());
        }
    }
    
}
