package com.hackatong7.server.application.dto;

public class LibroDTO {

	private Long id;
	private String author;
	private String imgUrl;
	private String title;
	private String genre;
	private String year;
	private String description;

	public LibroDTO() {}

	public LibroDTO(Long id, String author, String imgUrl, String title, String genre, String year,
			String description) {
		this.id = id;
		this.author = author;
		this.imgUrl = imgUrl;
		this.title = title;
		this.genre = genre;
		this.year = year;
		this.description = description;
	}

	public String getImgUrl() {
		return imgUrl;
	}
	public void setImgUrl(String imgUrl) {
		this.imgUrl = imgUrl;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getGenre() {
		return genre;
	}
	public void setGenre(String genre) {
		this.genre = genre;
	}
	public String getYear() {
		return year;
	}
	public void setYear(String year) {
		this.year = year;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getAuthor() {
		return author;
	}
	public void setAuthor(String author) {
		this.author = author;
	}

	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}

}
