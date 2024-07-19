package com.hackatong7.server.persistence.dao.impl;

import java.util.List;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;


import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;

import com.hackatong7.server.domain.entity.Libro;
import com.hackatong7.server.persistence.dao.LibroDAO;



@Repository
@Transactional
public class LibroDAOImpl implements LibroDAO {
 
    @PersistenceContext
    private EntityManager entityManager;

    @Override
    public Libro guardarLibro(Libro libro) {
        entityManager.persist(libro);
        return libro;
    }

    @Override
    public Libro actualizarLibro(Libro libro) {
        return entityManager.merge(libro);
    }

    @Override
    public void eliminarLibro(Long id) {
        Libro libro = entityManager.find(Libro.class, id);
        if (libro != null) {
            entityManager.remove(libro);
        }
    }

    @Override
    public Libro obtenerLibroPorId(Long id) {
        return entityManager.find(Libro.class, id);
    }

    @Override
    public List<Libro> listarLibros() {
        return entityManager.createQuery("SELECT l FROM Libro l", Libro.class)
                            .getResultList();
    }



    @Override
    public List<Libro> listarLibrosPorUsuarioId(Long usuarioId) {
        return entityManager.createQuery("SELECT l FROM Libro l WHERE l.usuario.id = :usuarioId", Libro.class)
        .setParameter("usuarioId", usuarioId)
        .getResultList();
    }
    

}
