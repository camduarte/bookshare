package com.hackatong7.server.application.dto;

import java.util.UUID;
import java.util.List;

public class UsuarioDTO {
 
    private UUID id;
    private String nombre;
    private String correo;
    private String contrasena;
    private List<RegistrarLibroDTO> libros;



    public UsuarioDTO(){

    }

    public UsuarioDTO( UUID id, String nombre, String correo, String contrasena, List<RegistrarLibroDTO> libros){
        this.id= id;
        this.nombre = nombre;
        this.correo = correo;
        this.contrasena = contrasena;
        this.libros = libros;

    }




    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getCorreo() {
        return correo;
    }

    public void setCorreo(String correo) {
        this.correo = correo;
    }

    public String getContrasena() {
        return contrasena;
    }

    public void setContrasena(String contrasena) {
        this.contrasena = contrasena;
    }

    public List<RegistrarLibroDTO> getLibros() {
        return libros;
    }

    public void setLibros(List<RegistrarLibroDTO> libros) {
        this.libros = libros;
    }

}
