package com.hackatong7.server.application.dto;

import java.util.UUID;

public class LibroDTO {
    
    private UUID id;
    private String titulo;
    private String autor;
    private String descripcion;
    private String genero;
    private String imagenPortada;
    private UUID usuarioId;
    private String etiquetas;
    private String fechaPublicacion;

    public LibroDTO(){


    }


    public LibroDTO(UUID id, String titulo, String autor, String descripcion, String genero, String imagenPortada, UUID usuarioId, String etiquetas, String fechaPublicacion ){

        this.id = id;
        this.titulo = titulo;
        this.autor = autor;
        this.descripcion = descripcion;
        this.genero = genero;
        this.imagenPortada = imagenPortada;
        this.usuarioId = usuarioId;
        this.etiquetas = etiquetas;
        this.fechaPublicacion = fechaPublicacion;

    }



    public UUID getId() {
        return id;
    }
    public void setId(UUID id) {
        this.id = id;
    }
    public String getTitulo() {
        return titulo;
    }
    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }
    public String getAutor() {
        return autor;
    }
    public void setAutor(String autor) {
        this.autor = autor;
    }
    public String getDescripcion() {
        return descripcion;
    }
    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }
    public String getGenero() {
        return genero;
    }
    public void setGenero(String genero) {
        this.genero = genero;
    }
    public String getImagenPortada() {
        return imagenPortada;
    }
    public void setImagenPortada(String imagenPortada) {
        this.imagenPortada = imagenPortada;
    }
    public UUID getUsuarioId() {
        return usuarioId;
    }
    public void setUsuarioId(UUID usuarioId) {
        this.usuarioId = usuarioId;
    }
    public String getEtiquetas() {
        return etiquetas;
    }
    public void setEtiquetas(String etiquetas) {
        this.etiquetas = etiquetas;
    }
    public String getFechaPublicacion() {
        return fechaPublicacion;
    }
    public void setFechaPublicacion(String fechaPublicacion) {
        this.fechaPublicacion = fechaPublicacion;
    } 
    

}
