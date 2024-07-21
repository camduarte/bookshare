
package com.hackatong7.server.application.service;

import java.util.List;

import com.hackatong7.server.application.dto.LibroDTO;
import com.hackatong7.server.application.dto.RegistrarLibroDTO;
import com.hackatong7.server.domain.entity.Libro;

public interface LibroService {
    
    public LibroDTO getLibro(Long id);
    
    public LibroDTO registrarLibro(RegistrarLibroDTO registrarLibroDTO,String usuarioCorreo);
    
    public LibroDTO actualizarLibro(Long id,RegistrarLibroDTO actualizarLibroDTO,String usuarioCorreo);
    
    public void eliminarLibro(Long id, String usuarioCorreo);
    
    public List<LibroDTO> listarLibrosDelUsuario();
    
    public List<LibroDTO> buscar(String palabraClave);
}
