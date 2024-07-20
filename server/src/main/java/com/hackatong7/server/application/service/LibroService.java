
package com.hackatong7.server.application.service;

import com.hackatong7.server.application.dto.RegistrarLibroDTO;
import com.hackatong7.server.domain.entity.Libro;
import java.util.List;


public interface LibroService {
    
    
    public Libro getLibro(Long id);
    public Libro registrarLibro(RegistrarLibroDTO registrarLibroDTO,String usuarioCorreo);
    public Libro actualizarLibro(Long id,RegistrarLibroDTO actualizarLibroDTO,String usuarioCorreo);
    public void eliminarLibro(Long id, String usuarioCorreo);
    public List<Libro> listarLibrosPorUsuario(String usuarioCorreo);
    
    
}
