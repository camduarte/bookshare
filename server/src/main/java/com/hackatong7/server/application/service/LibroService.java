
package com.hackatong7.server.application.service;

import com.hackatong7.server.application.dto.RegistrarLibroDTO;
import com.hackatong7.server.domain.entity.Libro;


public interface LibroService {
    
    
    public Libro getLibro();
    public Libro registrarLibro(RegistrarLibroDTO registrarLibroDTO,String usuarioCorreo);

    
}
