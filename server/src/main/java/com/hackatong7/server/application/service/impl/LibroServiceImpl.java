
package com.hackatong7.server.application.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hackatong7.server.application.dto.RegistrarLibroDTO;
import com.hackatong7.server.application.mapper.LibroMapper;
import com.hackatong7.server.application.service.LibroService;
import com.hackatong7.server.domain.entity.Libro;
import com.hackatong7.server.domain.entity.Usuario;
import com.hackatong7.server.persistence.dao.LibroDAO;
import com.hackatong7.server.persistence.dao.UsuarioDAO;


@Service
public class LibroServiceImpl implements LibroService{

    @Autowired
    private UsuarioDAO usuarioDAO;
    
    @Autowired
    private LibroDAO libroDAO;
    

    @Override
    public Libro registrarLibro(RegistrarLibroDTO registrarLibroDTO,String usuarioCorreo) {
        Usuario usuario = usuarioDAO.findByCorreoElectronico(usuarioCorreo);        
        Libro libro = LibroMapper.toEntity(registrarLibroDTO,usuario);
        return libroDAO.guardarLibro(libro);        
    }
    
    @Override
    public Libro getLibro() {
        Libro libro = null;
        return libro ;
    }
    
    
}
