import React, { useCallback, useEffect } from 'react';
import '../styles/components/formModal.css';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import Button from './ui/Button';
import Input from './ui/Input';
import { bookSchema } from '../validations/bookSchema';
import { XIcon } from '../assets/icons';
import {
  CLOUDINARY_UPLOAD_PRESET,
  CLOUDINARY_CLOUD_NAME,
} from '../config/cloudinary';
import useDelayedReload from '../hooks/useDelayedReload';
import useAuthStore from '../store/authStore';

const FormModal = ({ onClose, book }) => {
  const { createBook, updateBook, isLoading, error, clearError } =
    useAuthStore();
  const delayedReload = useDelayedReload();

  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
    reset,
    setValue,
    setError,
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
  };

  const handleFileUpload = useCallback(
    async (event) => {
      const file = event.target.files[0];
      if (file) {
        const validTypes = ['image/webp', 'image/jpeg', 'image/png'];
        if (!validTypes.includes(file.type)) {
          setValue('imgUrl', '');
          setError('imgUrl', {
            type: 'manual',
            message:
              'El archivo debe ser una imagen en formato webp, jpg, jpeg o png',
          });
          return;
        }

        if (file.size > 5 * 1024 * 1024) {
          setValue('imgUrl', '');
          setError('imgUrl', {
            type: 'manual',
            message: 'El tamaño del archivo no puede superar los 5MB',
          });
          return;
        }
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
          setError('imgUrl', {
            type: 'manual',
            message: 'Error al subir la imagen. Por favor, intente de nuevo.',
          });
        }
      }
    },
    [setValue, trigger, setError]
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
              accept='.webp,.jpg,.jpeg,.png'
              onChange={handleFileUpload}
              className='form-input'
              isError={!!errors.imgUrl}
              errorMessage={errors.imgUrl?.message}
              required={!book}
            />
            <small className='file-input-info'>
              .webp, .jpg, .jpeg, .png | Tamaño máximo: 5MB
            </small>
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
    </div>
  );
};

export default FormModal;
