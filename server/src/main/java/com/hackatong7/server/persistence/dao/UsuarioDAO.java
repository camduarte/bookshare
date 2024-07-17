package com.hackatong7.server.persistence.dao;

import java.util.List;


import com.hackatong7.server.domain.entity.Usuario;



public interface UsuarioDAO {

    
    Usuario guardarUsuario(Usuario usuario);

    Usuario actualizarUsuario(Usuario usuario);

    void eliminarUsuario(Long id);

    Usuario obtenerUsuarioPorId(Long id);

    List<Usuario> listarUsuarios();
    
    Usuario findByCorreoElectronico(String correoElectronico);
    
}
