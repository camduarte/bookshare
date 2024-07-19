package com.hackatong7.server.application.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import java.util.UUID;

public class RegistrarLibroDTO {
    
    @NotBlank(message = "El título no puede estar en blanco")
    @Size(min = 1, message = "El título no puede estar vacío")
    private String titulo;

    @NotBlank(message = "El autor no puede estar en blanco")
    @Size(min = 1, message = "El autor no puede estar vacío")
    private String autor;
    
    private String descripcion;
    private String genero;
    private String imagenPortada;
    private String etiquetas;
    
    @Pattern(regexp = "\\d{4}", message = "La fecha de publicación debe ser un año de cuatro dígitos")
    private String fechaPublicacion;

    public RegistrarLibroDTO(){


    }


    public RegistrarLibroDTO( String titulo, String autor, String descripcion, String genero, String imagenPortada, String etiquetas, String fechaPublicacion ){
        this.titulo = titulo;
        this.autor = autor;
        this.descripcion = descripcion;
        this.genero = genero;
        this.imagenPortada = imagenPortada;
        this.etiquetas = etiquetas;
        this.fechaPublicacion = fechaPublicacion;
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
