// AddBookModal.js
import React, { useState } from 'react';
import '../styles/components/formModal.css'; 

const FormModal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    title: '',
    genre: 'Ficción',
    author: '',
    publicationYear: '2024',
    description: '',
    cover: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      cover: e.target.files[0],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar el envío del formulario
    console.log(formData);
    onClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Agregar Nuevo Libro</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
          <label>Título *</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
            />
          
          </div>
          <div className="form-group">
            <label>Género *</label>
            <select
              name="genre"
              value={formData.genre}
              onChange={handleChange}
              required
            >
              <option value="Ficción">Ficción</option>
              <option value="No Ficción">No Ficción</option>
              {/* Agregar más opciones según sea necesario */}
            </select>
          </div>
          <div className="form-group">
            <label>Autor *</label>
            <input
              type="text"
              name="author"
              value={formData.author}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Año de Publicación *</label>
            <input
              type="number"
              name="publicationYear"
              value={formData.publicationYear}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Descripción *</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Portada del Libro *</label>
            <input
              type="file"
              name="cover"
              onChange={handleFileChange}
              required
            />
          </div>
          <button type="submit">Agregar Libro</button>
        </form>
        <button onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
};

export default FormModal;
