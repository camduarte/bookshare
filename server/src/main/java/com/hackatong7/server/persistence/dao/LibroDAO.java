package com.hackatong7.server.persistence.dao;

import java.util.List;

import com.hackatong7.server.domain.entity.Libro;

public interface LibroDAO {
    
    Libro guardarLibro(Libro libro);

    Libro actualizarLibro(Libro libro);

    void eliminarLibro(Long id);

    Libro obtenerLibroPorId(Long id);

    List<Libro> listarLibros();

    List<Libro> listarLibrosPorUsuarioId(Long usuarioId);

    List<Libro> buscarLibros(String palabraClave);
}
