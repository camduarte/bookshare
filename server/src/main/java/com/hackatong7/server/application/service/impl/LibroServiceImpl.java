
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

	@Override
	public List<LibroDTO> listarLibrosDelUsuario() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String correoElectronico = authentication.getName();
        Usuario usuario = this.usuarioDAO.findByCorreoElectronico(correoElectronico);
        List<Libro> libros = usuario.getLibros();
        return LibroMapper.toDTOList(libros);
	}

}
