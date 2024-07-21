
package com.hackatong7.server.application.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import com.hackatong7.server.application.dto.LibroDTO;
import com.hackatong7.server.application.dto.RegistrarLibroDTO;
import com.hackatong7.server.application.mapper.LibroMapper;
import com.hackatong7.server.application.service.LibroService;
import com.hackatong7.server.domain.entity.Libro;
import com.hackatong7.server.domain.entity.Usuario;
import com.hackatong7.server.domain.exceptions.ResourceNotFoundException;
import com.hackatong7.server.domain.exceptions.UnauthorizedException;
import com.hackatong7.server.persistence.dao.LibroDAO;
import com.hackatong7.server.persistence.dao.UsuarioDAO;


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
    public LibroDTO registrarLibro(RegistrarLibroDTO registrarLibroDTO,String usuarioCorreo) {
        Usuario usuario = usuarioDAO.buscarPorCorreoElectronico(usuarioCorreo);        
        Libro libro = LibroMapper.toEntity(registrarLibroDTO,usuario);
        return LibroMapper.toDTO(libroDAO.guardarLibro(libro));        
    }

    @Override
    public Libro actualizarLibro(Long id, RegistrarLibroDTO actualizarLibroDTO, String usuarioCorreo) {
        Libro libroExistente = libroDAO.obtenerLibroPorId(id);
        if (libroExistente == null) {
            throw new ResourceNotFoundException("El libro con ID " + id + " no existe");
        }                
        Usuario usuario = usuarioDAO.buscarPorCorreoElectronico(usuarioCorreo);  
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
        
        Usuario usuario = usuarioDAO.buscarPorCorreoElectronico(usuarioCorreo);
        if (!libroExistente.getUsuario().getId().equals(usuario.getId())) {
            throw new UnauthorizedException("No tienes permiso para eliminar este libro");
        }        
        libroDAO.eliminarLibro(libroExistente.getId());
    }
 
   
    @Override
    public List<LibroDTO> listarLibrosDelUsuario() {
       Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
       String correoElectronico = authentication.getName();
       Usuario usuario = this.usuarioDAO.buscarPorCorreoElectronico(correoElectronico);
       List<Libro> libros = usuario.getLibros();
       return LibroMapper.toDTOList(libros);
    }
    
    @Override
    public List<LibroDTO> buscar(String palabraClave){
       List<Libro> libros = libroDAO.buscarLibros(palabraClave); 
       return LibroMapper.toDTOList(libros);
    }

}