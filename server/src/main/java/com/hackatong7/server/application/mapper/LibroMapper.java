
package com.hackatong7.server.application.mapper;

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
