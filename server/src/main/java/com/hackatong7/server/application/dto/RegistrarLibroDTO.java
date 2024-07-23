package com.hackatong7.server.application.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import org.hibernate.validator.constraints.URL;

/**
 * Data Transfer Object (DTO) para el registro o actualizacion de un libro.
 * 
 * <p>
 * Este archivo está bajo la Licencia Pública General de GNU.
 * </p>
 * 
 * @autor Ricardo Ripa
 * @version 1.0
 * @since 2024-07-23
 */

public class RegistrarLibroDTO {

    /** 
     * El titulo del libro.
     */    
    @NotBlank(message = "El título no puede estar en blanco")
    @Size(min = 1, max = 150, message = "El Titulo debe tener entre 1 y 150 caracteres")
    private String title;

    /** 
     * El autor del libro.
     */ 
    @NotBlank(message = "El autor no puede estar en blanco")
    @Size(min = 1, max = 50, message = "El autor debe tener entre 1 y 50 caracteres")
    private String author;

    /** 
     * La descripcion del libro.
     */ 
    @Size(max = 1000, message = "La descripción debe tener como máximo 1000 caracteres")
    private String description;

    /** 
     * El genero del libro.
     */ 
    @NotBlank(message = "El género no puede estar en blanco")
    @Size(min = 1,max = 50, message = "El género debe tener entre 1 y 50 caracteres")
    private String genre;

    /** 
     * La Url de imagen de portada del libro.
     */ 
    @URL(message = "La URL de la imagen debe ser válida")
    private String imgUrl;

    /** 
     * El año de publicacion del libro.
     */ 
    @Pattern(regexp = "\\d{4}", message = "La fecha de publicación debe ser un año de cuatro dígitos")
    private String year;

    /**
     * Constructor por defecto.
     */
    
    public RegistrarLibroDTO() {}

    /**
     * Constructor con parámetros.
     * 
     * @param title el título del libro
     * @param author el autor del libro
     * @param description la descripción del libro
     * @param genre el género del libro
     * @param imgUrl La Url de imagen de portada del libro
     * @param year el año de publicación del libro
     */
    
    public RegistrarLibroDTO(String title, String author, String description, String genre, String imgUrl, String year) {
		this.title = title;
		this.author = author;
		this.description = description;
		this.genre = genre;
		this.imgUrl = imgUrl;
		this.year = year;
    }
    
    /**
     * Obtiene el título del libro.
     * 
     * @return el título del libro
     */
    public String getTitle() {
        return title;
    }

    /**
     * Establece el título del libro.
     * 
     * @param title el nuevo título del libro
     */
    public void setTitle(String title) {
        this.title = title;
    }

    /**
     * Obtiene el autor del libro.
     * 
     * @return el autor del libro
     */
    public String getAuthor() {
        return author;
    }

    /**
     * Establece el autor del libro.
     * 
     * @param author el nuevo autor del libro
     */
    public void setAuthor(String author) {
        this.author = author;
    }

    /**
     * Obtiene la descripción del libro.
     * 
     * @return la descripción del libro
     */
    public String getDescription() {
        return description;
    }

    /**
     * Establece la descripción del libro.
     * 
     * @param description la nueva descripción del libro
     */
    public void setDescription(String description) {
        this.description = description;
    }

    /**
     * Obtiene el género del libro.
     * 
     * @return el género del libro
     */
    public String getGenre() {
        return genre;
    }

    /**
     * Establece el género del libro.
     * 
     * @param genre el nuevo género del libro
     */
    public void setGenre(String genre) {
        this.genre = genre;
    }

    /**
     * Obtiene la URL de la imagen del libro.
     * 
     * @return la URL de la imagen del libro
     */
    public String getImgUrl() {
        return imgUrl;
    }

    /**
     * Establece la URL de la imagen del libro.
     * 
     * @param imgUrl la nueva URL de la imagen del libro
     */
    public void setImgUrl(String imgUrl) {
        this.imgUrl = imgUrl;
    }

    /**
     * Obtiene el año de publicación del libro.
     * 
     * @return el año de publicación del libro
     */
    public String getYear() {
        return year;
    }

    /**
     * Establece el año de publicación del libro.
     * 
     * @param year el nuevo año de publicación del libro
     */
    public void setYear(String year) {
        this.year = year;
    }

}
