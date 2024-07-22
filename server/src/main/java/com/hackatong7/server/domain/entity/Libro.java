package com.hackatong7.server.domain.entity;


import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;


@Entity
@Table(name = "Libros")
public class Libro {
    
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;

    @Column(name = "Titulo", columnDefinition = "TEXT", nullable = false)
    private String titulo;

    @Column(name = "Autor", columnDefinition = "TEXT", nullable = false)
    private String autor;

    @Column(name = "Descripcion", columnDefinition = "TEXT")
    private String descripcion;

    @Column(name = "Genero", nullable = false)
    private String genero;

    @Column(name = "ImagenPortada", columnDefinition = "TEXT")
    private String imagenPortada;

    @Column(name = "FechaPublicacion")
    private String fechaPublicacion;
    
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "UsuarioID", nullable = false)
    @JsonIgnore
    private Usuario usuario;

    

    public Libro() { 

    }

    public Libro(String titulo, String autor, String descripcion, String genero, String imagenPortada, String fechaPublicacion, Usuario usuario) {
        this.titulo = titulo;
        this.autor = autor;
        this.descripcion = descripcion != null ? descripcion : "";
        this.genero = genero != null ? genero : "";
        this.imagenPortada = imagenPortada != null ? imagenPortada : "";
        this.fechaPublicacion = fechaPublicacion != null ? fechaPublicacion : "";
        this.usuario = usuario;
    }

    public Long getId() {
        return Id;
    }

    public void setId(Long id) {
        Id = id;
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

    public Usuario getUsuario() {
        return usuario;
    }

    public void setUsuario(Usuario usuario) {
        this.usuario = usuario;
    }

    public String getFechaPublicacion() {
        return fechaPublicacion;
    }

    public void setFechaPublicacion(String fechaPublicacion) {
        this.fechaPublicacion = fechaPublicacion;
    }
    
}
