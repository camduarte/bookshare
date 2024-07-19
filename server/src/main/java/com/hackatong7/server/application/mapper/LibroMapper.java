
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
}
