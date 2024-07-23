// AddBookModal.js
import React, { useState } from 'react';
import '../styles/components/formModal.css';
import Button from '../components/ui/Button';
import { SearchIcon } from '../assets/icons';
import Input from '../components/ui/Input';
import Select from '../components/ui/Select';
import UserMenu from '../components/UserMenu';


const FormModal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    title: '',
    genre: 'Ficción',
    author: '',
    publicationYear: '2024',
    description: '',
    cover: null,
  });

  const [errors, setErrors] = useState({});

  const validate = (name, value) => {
    let error;
    if (name === 'title' && value.length > 150) {
      error = 'El título no debe exceder los 150 caracteres.';
    } else if (name === 'author' && value.length > 50) {
      error = 'El nombre del autor no debe exceder los 50 caracteres.';
    } else if (name === 'genre' && value.length > 50) {
      error = 'El nombre del genero no debe exceder los 50 caracteres.';
    } 
    else if (name === 'description' && value.length > 1000) {
      error = 'La descripción no debe exceder los 1000 caracteres.';
    }
    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const error = validate(name, value);
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));
    if (!error) {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleFileChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      cover: e.target.files[0],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      const error = validate(key, formData[key]);
      if (error) {
        newErrors[key] = error;
      }
    });
    if (Object.keys(newErrors).length === 0) {
      console.log(formData);
      onClose();
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h1>Agregar Nuevo Libro</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group form1">
            <Input
              label="Título"
              placeholder="Ingresa el título del libro"
              value={formData.title}
              name="title"
              onChange={handleChange}
              required
            />
            {errors.title && <p className="error">{errors.title}</p>}
            <Select
              label="Género"
              name="genre"
              value={formData.genre}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group form2">
            <Input
              label="Autor"
              placeholder="Ingresa el nombre del autor"
              value={formData.author}
              type="text"
              name="author"
              onChange={handleChange}
              required
            />
            {errors.author && <p className="error">{errors.author}</p>}
            <Input
              label="Año de publicación"
              placeholder="2024"
              value={formData.publicationYear}
              type="number"
              name="publicationYear"
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <Input
              label="Descripción"
              placeholder="Ingresa una descripción"
              value={formData.description}
              type="textarea"
              name="description"
              onChange={handleChange}
              required
            />
            {errors.description && <p className="error">{errors.description}</p>}
          </div>
          <div className="form-group">
            <Input
              label="Portada"
              placeholder="Agregar portada"
              type="file"
              name="cover"
              onChange={handleFileChange}
              Icon
              required
            />
          </div>
          <Button
            variant="default"
            size="default"
            type="submit"
          >
            Agregar Libro
          </Button>
        </form>
        <Button
          variant="outline"
          size="default"
          type="button"
          onClick={onClose}
        >
          Volver
        </Button>
      </div>
    </div>
  );
};

export default FormModal;

