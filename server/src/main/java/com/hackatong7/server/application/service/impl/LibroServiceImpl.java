
package com.hackatong7.server.application.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hackatong7.server.application.dto.RegistrarLibroDTO;
import com.hackatong7.server.application.mapper.LibroMapper;
import com.hackatong7.server.application.service.LibroService;
import com.hackatong7.server.domain.entity.Libro;
import com.hackatong7.server.domain.entity.Usuario;
import com.hackatong7.server.domain.exceptions.ResourceNotFoundException;
import com.hackatong7.server.domain.exceptions.UnauthorizedException;
import com.hackatong7.server.persistence.dao.LibroDAO;
import com.hackatong7.server.persistence.dao.UsuarioDAO;
import java.util.List;


@Service
public class LibroServiceImpl implements LibroService{

    @Autowired
    private UsuarioDAO usuarioDAO;
    
    @Autowired
    private LibroDAO libroDAO;
    

    @Override
    public Libro getLibro(Long id) {
        Libro libro = libroDAO.obtenerLibroPorId(id);
        return libro ;
    }
    
    @Override
    public Libro registrarLibro(RegistrarLibroDTO registrarLibroDTO,String usuarioCorreo) {
        Usuario usuario = usuarioDAO.findByCorreoElectronico(usuarioCorreo);        
        Libro libro = LibroMapper.toEntity(registrarLibroDTO,usuario);
        return libroDAO.guardarLibro(libro);        
    }

    @Override
    public Libro actualizarLibro(Long id, RegistrarLibroDTO actualizarLibroDTO, String usuarioCorreo) {
        Libro libroExistente = libroDAO.obtenerLibroPorId(id);
        if (libroExistente == null) {
            throw new ResourceNotFoundException("El libro con ID " + id + " no existe");
        }                
        Usuario usuario = usuarioDAO.findByCorreoElectronico(usuarioCorreo);  
        if (!libroExistente.getUsuario().getId().equals(usuario.getId())) {
                    throw new UnauthorizedException("No tienes permiso para actualizar este libro");
        }   
        
        LibroMapper.actualizarEntidad(libroExistente, actualizarLibroDTO);
        return libroDAO.actualizarLibro(libroExistente);   
    }

    
    @Override
    public void eliminarLibro(Long id, String usuarioCorreo) {
        Libro libroExistente = libroDAO.obtenerLibroPorId(id);
        if (libroExistente == null) {
            throw new ResourceNotFoundException("El libro con ID " + id + " no existe");
        }
        
        Usuario usuario = usuarioDAO.findByCorreoElectronico(usuarioCorreo);
        if (!libroExistente.getUsuario().getId().equals(usuario.getId())) {
            throw new UnauthorizedException("No tienes permiso para eliminar este libro");
        }        
        libroDAO.eliminarLibro(libroExistente.getId());
    }
    
    @Override
    public List<Libro> listarLibrosPorUsuario(String usuarioCorreo) {
        Usuario usuario = usuarioDAO.findByCorreoElectronico(usuarioCorreo);        
        return libroDAO.listarLibrosPorUsuarioId(usuario.getId());
    }
    
    
}
