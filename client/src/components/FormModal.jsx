import React, { useCallback, useEffect } from 'react';
import '../styles/components/formModal.css';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import Button from './ui/Button';
import Input from './ui/Input';
import useBookStore from '../store/bookStore';
import { bookSchema } from '../validations/bookSchema';
import { XIcon } from '../assets/icons';
import {
  CLOUDINARY_UPLOAD_PRESET,
  CLOUDINARY_CLOUD_NAME,
} from '../config/cloudinary';
import useDelayedReload from '../hooks/useDelayedReload';

<<<<<<< HEAD

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
=======
const FormModal = ({ onClose, book }) => {
  const { createBook, updateBook, isLoading, error, clearError } =
    useBookStore();
  const delayedReload = useDelayedReload();

  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
    reset,
    setValue,
  } = useForm({ resolver: zodResolver(bookSchema) });

  useEffect(() => {
    if (book) {
      setValue('title', book.title);
      setValue('author', book.author);
      setValue('genre', book.genre);
      setValue('year', book.year);
      setValue('description', book.description);
      setValue('imgUrl', book.imgUrl);
    }
  }, [book, setValue]);

  const handleInputChange = async (field) => {
    await trigger(field);
>>>>>>> 9d223f0f03a0507db28d20be9e1b9c1b25e97d1e
  };

  const handleFileUpload = useCallback(
    async (event) => {
      const file = event.target.files[0];
      if (file) {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);

        try {
          const response = await fetch(
            `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`,
            {
              method: 'POST',
              body: formData,
            }
          );

          if (!response.ok) throw new Error('Network response was not ok');

          const data = await response.json();
          setValue('imgUrl', data.secure_url);
          await trigger('imgUrl');
        } catch (error) {
          console.error('Error uploading to Cloudinary', error);
        }
      }
    },
    [setValue, trigger]
  );

  const onSubmit = async (data) => {
    try {
      if (book) {
        await updateBook(book.id, data);
        toast.success('Libro actualizado exitosamente');
        delayedReload();
      } else {
        await createBook(data);
        toast.success('Libro publicado exitosamente');
        delayedReload();
      }
      reset();
      onClose();
    } catch (error) {
      toast.error(
        `Ocurrió un error al publicar libro: ${error.message || 'Error desconocido'}`
      );
      console.error(error);
    }
  };

<<<<<<< HEAD
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
=======
  useEffect(() => {
    if (error) {
      toast.error(`Error: ${error}`);
      clearError();
    }
  }, [error, clearError]);

  return (
    <div className='modal-container'>
      <form onSubmit={handleSubmit(onSubmit)} className='modal-content'>
        <div className='modal-header'>
          <h1 className='modal-title'>
            {book ? 'Editar Libro' : 'Agregar Nuevo Libro'}
          </h1>
          <Button
            variant='ghost'
            size='icon'
            onClick={onClose}
            className='close-button'
          >
            <XIcon />
          </Button>
        </div>
        <div className='modal-body'>
          <div className='form-grid'>
            <div>
              <Input
                label='Título'
                type='text'
                name='title'
                placeholder='Ingresa el título del libro'
                {...register('title')}
                onBlur={() => handleInputChange('title')}
                isError={!!errors.title}
                errorMessage={errors.title?.message}
                required
                className='form-input'
              />
              <Input
                label='Autor'
                type='text'
                name='author'
                placeholder='Ingresa el nombre del autor'
                {...register('author')}
                onBlur={() => handleInputChange('author')}
                isError={!!errors.author}
                errorMessage={errors.author?.message}
                required
                className='form-input'
              />
            </div>
            <div>
              <Input
                label='Género'
                type='text'
                name='genre'
                placeholder='Ingresa el género del libro'
                {...register('genre')}
                onBlur={() => handleInputChange('genre')}
                isError={!!errors.genre}
                errorMessage={errors.genre?.message}
                required
                className='form-input'
              />
              <Input
                label='Año de Publicación'
                type='number'
                name='year'
                placeholder='Ingresa el año de publicación'
                {...register('year')}
                onBlur={() => handleInputChange('year')}
                isError={!!errors.year}
                errorMessage={errors.year?.message}
                required
                className='form-input'
              />
            </div>
          </div>
          <Input
            label='Descripción'
            type='text'
            name='description'
            placeholder='Ingresa una descripción'
            {...register('description')}
            onBlur={() => handleInputChange('description')}
            isError={!!errors.description}
            errorMessage={errors.description?.message}
            required
            className='form-input'
          />
          <div className='file-input'>
            <Input
              label='Portada del Libro'
              type='file'
              accept='image/*'
              onChange={handleFileUpload}
              className='form-input'
              required={!book}
            />
          </div>
        </div>
        <div className='modal-footer'>
          <Button
            type='submit'
            variant='default'
            size='default'
            disabled={isLoading}
          >
            {book ? 'Actualizar Libro' : 'Agregar Libro'}
          </Button>
        </div>
      </form>
>>>>>>> 9d223f0f03a0507db28d20be9e1b9c1b25e97d1e
    </div>
  );
};

export default FormModal;

