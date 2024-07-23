package com.hackatong7.server.persistence.dao.impl;

import java.util.List;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.hackatong7.server.domain.entity.Usuario;
import com.hackatong7.server.persistence.dao.UsuarioDAO;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;

@Repository
@Transactional
public class UsuarioDAOImpl implements UsuarioDAO {

    @PersistenceContext
    private EntityManager entityManager;

    @Override
    public Usuario guardarUsuario(Usuario usuario) {
        entityManager.persist(usuario);
        return usuario;
    }

    @Override
    public Usuario actualizarUsuario(Usuario usuario) {
        return entityManager.merge(usuario);
    }

    @Override
    public void eliminarUsuario(Long id) {
        Usuario usuario = entityManager.find(Usuario.class, id);
        if (usuario != null) {
            entityManager.remove(usuario);
        }
    }

    @Override
    public Usuario obtenerUsuarioPorId(Long id) {
        return entityManager.find(Usuario.class, id);
    }

    @Override
    public List<Usuario> listarUsuarios() {
        return entityManager.createQuery("SELECT u FROM Usuario u", Usuario.class).getResultList();
    }

    @Override
    public Usuario buscarPorCorreoElectronico(String correoElectronico) {
        List<Usuario> usuarios = entityManager.createQuery("SELECT u FROM Usuario u WHERE u.correo = :correoElectronico", Usuario.class)
                .setParameter("correoElectronico", correoElectronico)
                .getResultList();
        return usuarios.isEmpty() ? null : usuarios.get(0);
    }

}
