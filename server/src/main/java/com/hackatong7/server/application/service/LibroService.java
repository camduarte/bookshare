
package com.hackatong7.server.application.service;

import java.util.List;

import com.hackatong7.server.application.dto.LibroDTO;
import com.hackatong7.server.application.dto.RegistrarLibroDTO;

public interface LibroService {
    
    public LibroDTO getLibro(Long id);
    
    public LibroDTO registrarLibro(RegistrarLibroDTO registrarLibroDTO,String usuarioCorreo);
    
    public LibroDTO actualizarLibro(Long id,RegistrarLibroDTO actualizarLibroDTO,String usuarioCorreo);
    
    public void eliminarLibro(Long id, String usuarioCorreo);
    
    public List<LibroDTO> listarLibrosDelUsuario();
    
    public List<LibroDTO> listarLibros();
    
    public List<LibroDTO> listarLibrosPorGenero(String palabraClave);
    
    public List<LibroDTO> buscar(String palabraClave);
}
