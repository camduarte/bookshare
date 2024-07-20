package com.hackatong7.server.application.dto;

public class LibroDTO {

	private Long id;
        private String title;
	private String author;
        private String description;
	private String genre;
        private String imgUrl;
	private String year;
	

	public LibroDTO() {}

	public LibroDTO(Long id, String title,  String author, String description, String genre, String imgUrl,
			String year) {
		this.id = id;
                this.title = title;
		this.author = author;
                this.description = description;                
		this.genre = genre;
                this.imgUrl = imgUrl;
		this.year = year;
	}

        
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
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
