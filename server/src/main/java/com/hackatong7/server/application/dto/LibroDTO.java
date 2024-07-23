package com.hackatong7.server.application.dto;

/**
 * Data Transfer Object (DTO) para representar un libro.
 * 
 * <p>
 * Este archivo está bajo la Licencia Pública General de GNU.
 * </p>
 * 
 * @autor Christian Ariel Modesto Duarte
 * @version 1.0
 * @since 2024-07-18
 */
public class LibroDTO {

    
    private Long id;
    private String title;
    private String author;
    private String description;
    private String genre;
    private String imgUrl;
    private String year;

    /**
     * Constructor por defecto.
     */
    public LibroDTO() {}

    /**
     * Constructor con parámetros.
     * 
     * @param id el ID del libro
     * @param title el título del libro
     * @param author el autor del libro
     * @param description la descripción del libro
     * @param genre el género del libro
     * @param imgUrl la URL de la imagen del libro
     * @param year el año de publicación del libro
     */
    public LibroDTO(Long id, String title, String author, String description, 
                    String genre, String imgUrl, String year) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.description = description;
        this.genre = genre;
        this.imgUrl = imgUrl;
        this.year = year;
    }

    /**
     * Obtiene el ID del libro.
     * 
     * @return el ID del libro
     */
    public Long getId() {
        return id;
    }

    /**
     * Establece el ID del libro.
     * 
     * @param id el nuevo ID del libro
     */
    public void setId(Long id) {
        this.id = id;
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
