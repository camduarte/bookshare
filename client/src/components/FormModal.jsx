// AddBookModal.js
import React, { useState } from 'react';
import '../styles/components/formModal.css';
import Button from './ui/Button';
import { SearchIcon } from '../assets/icons';
import Input from './ui/Input';
import Select from './ui/Select';
import UserMenu from './UserMenu';

const FormModal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    title: '',
    genre: 'Ficción',
    author: '',
    publicationYear: '2024',
    description: '',
    cover: null,
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
    <div className='modal'>
      <div className='modal-content'>
        <h1>Agregar Nuevo Libro</h1>
        <form onSubmit={handleSubmit}>
          <div className='form-group form1'>
            <Input
              label='Titulo'
              placeholder='ingresa el título del libro'
              value={formData.title}
              onChange={handleChange}
              required
            />
            <Select
              label='Género'
              name='genre'
              value={formData.genre}
              onChange={handleChange}
              required
            />
          </div>
          <div className='form-group form2'>
            <Input
              label='Autor'
              placeholder='Ingresa el nombre del autor'
              value={formData.author}
              type='text'
              name='author'
              onChange={handleChange}
              required
            />

            <Input
              label='Año de publicación'
              placeholder='2024'
              value={formData.publicationYear}
              type='number'
              name='publicationYear'
              onChange={handleChange}
              required
            />
          </div>

          <div className='form-group'>
            <Input
              label='Descripción'
              placeholder='Ingresa una descripción'
              value={formData.description}
              type='textarea'
              name='description'
              onChange={handleChange}
              required
            />
          </div>
          <div className='form-group'>
            <Input
              label='Portada'
              placeholder='Agregar portada'
              value={formData.author}
              type='file'
              name='cover'
              onChange={handleFileChange}
              Icon
              required
            />
          </div>

          <Button variant='default' size='default' type='submit'>
            Agregar Libro
          </Button>
        </form>

        <Button
          variant='outline'
          size='default'
          type='submit'
          onClick={onClose}
        >
          Volver
        </Button>
      </div>
    </div>
  );
};

export default FormModal;
