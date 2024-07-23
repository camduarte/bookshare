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

/**
 * Implementación del servicio libro.
 * 
 * <p>
 * Este archivo está bajo la Licencia Pública General de GNU.
 * </p>
 * 
 * @autor Ricardo Ripa
 * @version 1.0
 * @since 2024-07-23
 */

@Service
public class LibroServiceImpl implements LibroService{

    @Autowired
    private UsuarioDAO usuarioDAO;

    @Autowired
    private LibroDAO libroDAO;

     /**
     * Obtiene un libro por su ID.
     * 
     * @param id el ID del libro a obtener
     * @return el DTO del libro correspondiente al ID proporcionado
     */
    @Override
    public LibroDTO getLibro(Long id) {
        return LibroMapper.toDTO(libroDAO.obtenerLibroPorId(id));
    }

    /**
     * Registra un nuevo libro en el sistema.
     * 
     * @param registrarLibroDTO DTO que contiene los datos del libro a registrar
     * @param usuarioCorreo el correo electrónico del usuario que registra el libro
     * @return el DTO del libro registrado
     */
    @Override
    public LibroDTO registrarLibro(RegistrarLibroDTO registrarLibroDTO,String usuarioCorreo) {
        Usuario usuario = usuarioDAO.buscarPorCorreoElectronico(usuarioCorreo);
        Libro libro = LibroMapper.toEntity(registrarLibroDTO,usuario);
        return LibroMapper.toDTO(libroDAO.guardarLibro(libro));
    }
    
    /**
     * Actualiza un libro existente en el sistema.
     * 
     * @param id el ID del libro a actualizar
     * @param actualizarLibroDTO DTO que contiene los datos actualizados del libro
     * @param usuarioCorreo el correo electrónico del usuario que realiza la actualización
     * @return el DTO del libro actualizado
     */
    @Override
    public LibroDTO actualizarLibro(Long id, RegistrarLibroDTO actualizarLibroDTO, String usuarioCorreo) {
        Libro libroExistente = libroDAO.obtenerLibroPorId(id);
        if (libroExistente == null) {
            throw new ResourceNotFoundException("El libro con ID " + id + " no existe");
        }
        Usuario usuario = usuarioDAO.buscarPorCorreoElectronico(usuarioCorreo);
        if (!libroExistente.getUsuario().getId().equals(usuario.getId())) {
                    throw new UnauthorizedException("No tienes permiso para actualizar este libro");
        }

        LibroMapper.actualizarEntidad(libroExistente, actualizarLibroDTO);
        return LibroMapper.toDTO(libroDAO.actualizarLibro(libroExistente));
    }

     /**
     * Elimina un libro del sistema.
     * 
     * @param id el ID del libro a eliminar
     * @param usuarioCorreo el correo electrónico del usuario que solicita la eliminación
     */
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

    /**
     * Lista todos los libros del usuario actual.
     * 
     * @return una lista de DTOs de libros que pertenecen al usuario actual
     */
    @Override
    public List<LibroDTO> listarLibrosDelUsuario() {
       Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
       String correoElectronico = authentication.getName();
       Usuario usuario = this.usuarioDAO.buscarPorCorreoElectronico(correoElectronico);
       List<Libro> libros = usuario.getLibros();
       return LibroMapper.toDTOList(libros);
    }

    /**
     * Lista todos los libros disponibles en el sistema.
     * 
     * @return una lista de DTOs de todos los libros
     */
    @Override
    public List<LibroDTO> listarLibros() {
       List<Libro> libros = libroDAO.listarLibros();
       return LibroMapper.toDTOList(libros);
    }

    /**
     * Lista todos los libros que coinciden con un género específico.
     * 
     * @param genero el género para filtrar los libros
     * @return una lista de DTOs de libros que pertenecen al género especificado
     */
    @Override
    public List<LibroDTO> listarLibrosPorGenero(String genero){
       List<Libro> libros = libroDAO.listarLibrosPorGenero(genero);
       return LibroMapper.toDTOList(libros);
    }

    /**
     * Busca libros que cuyo titulo coincidan con la clave enviada .
     * 
     * @param palabraClave la palabra clave para buscar en los libros
     * @return una lista de DTOs de libros que coinciden con la palabra clave
     */
    @Override
    public List<LibroDTO> buscar(String palabraClave){
       List<Libro> libros = libroDAO.buscarLibros(palabraClave);
       return LibroMapper.toDTOList(libros);
    }

}