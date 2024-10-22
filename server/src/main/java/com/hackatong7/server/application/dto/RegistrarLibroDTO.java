package com.hackatong7.server.application.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import org.hibernate.validator.constraints.URL;

public class RegistrarLibroDTO {

    @NotBlank(message = "El título no puede estar en blanco")
    @Size(min = 1, max = 150, message = "El Titulo debe tener entre 1 y 150 caracteres")
    private String title;

    @NotBlank(message = "El autor no puede estar en blanco")
    @Size(min = 1, max = 50, message = "El autor debe tener entre 1 y 50 caracteres")
    private String author;

    @Size(max = 1000, message = "La descripción debe tener como máximo 1000 caracteres")
    private String description;

    @NotBlank(message = "El género no puede estar en blanco")
    @Size(min = 1,max = 50, message = "El género debe tener entre 1 y 50 caracteres")
    private String genre;

    @URL(message = "La URL de la imagen debe ser válida")
    private String imgUrl;

    @Pattern(regexp = "\\d{4}", message = "La fecha de publicación debe ser un año de cuatro dígitos")
    private String year;

    public RegistrarLibroDTO() {}

    public RegistrarLibroDTO(String title, String author, String description, String genre, String imgUrl, String year) {
		this.title = title;
		this.author = author;
		this.description = description;
		this.genre = genre;
		this.imgUrl = imgUrl;
		this.year = year;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getGenre() {
        return genre;
    }

    public void setGenre(String genre) {
        this.genre = genre;
    }

    public String getImgUrl() {
        return imgUrl;
    }

    public void setImgUrl(String imgUrl) {
        this.imgUrl = imgUrl;
    }

    public String getYear() {
        return year;
    }

    public void setYear(String year) {
        this.year = year;
    }

}
