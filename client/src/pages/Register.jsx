import React, { useEffect } from 'react';
import '../styles/pages/register.css';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import useAuthStore from '../store/authStore';
import { RegisterSchema } from '../utils/authSchema';

/**
 *
 *
 * @return {div} devuelve el formulario de registro
 */
const Register = () => {
  const {
    register: registerUser,
    isLoading,
    error,
    clearError,
    isAuthenticated,
  } = useAuthStore();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
    reset,
  } = useForm({ resolver: zodResolver(RegisterSchema) });

  useEffect(() => {
    if (isAuthenticated()) navigate('/mis-libros');
  }, [isAuthenticated, navigate]);

  const handleInputChange = async (field) => {
    await trigger(field);
  };

  const onSubmit = async ({ name, email, password }) => {
    try {
      await registerUser({ name, email, password });
      reset();
      toast.success('Ingresando al sistema');
      navigate('/mis-libros');
    } catch (error) {
      toast.error(
        `Ocurrió un error al ingresar al sistema: ${error.message || 'Error desconocido'}`
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
    <div className='register-card'>
      <img src='src/assets/logo/Logo.png' alt='Company Logo' className='logo' />
      <h1 className='register-title'>Registrarse</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='input-group'>
          <Input
            label='Nombre'
            type='text'
            name='name'
            placeholder='Ingresa tu nombre'
            {...register('name')}
            onBlur={() => handleInputChange('name')}
            isError={!!errors.name}
            errorMessage={errors.name?.message}
            required
          />
        </div>
        <div className='input-group'>
          <Input
            label='Email'
            type='email'
            name='email'
            placeholder='ejemplo@gmail.com'
            {...register('email')}
            onBlur={() => handleInputChange('email')}
            isError={!!errors.email}
            errorMessage={errors.email?.message}
            required
          />
        </div>
        <div className='input-group'>
          <Input
            type='password'
            label='Contraseña'
            name='password'
            placeholder='********'
            {...register('password')}
            onBlur={() => handleInputChange('password')}
            isError={!!errors.password}
            errorMessage={errors.password?.message}
            required
          />
        </div>
        <div className='input-group'>
          <Input
            type='password'
            label='Repetir Contraseña'
            name='confirmPassword'
            placeholder='********'
            {...register('confirmPassword')}
            onBlur={() => handleInputChange('confirmPassword')}
            isError={!!errors.confirmPassword}
            errorMessage={errors.confirmPassword?.message}
            required
          />
        </div>

        <Button
          type='submit'
          variant='default'
          size='default'
          className='register-button'
          disabled={isLoading}
        >
          Registrarse
        </Button>
      </form>
      <p className='register-text'>
        Ya tienes una cuenta?{' '}
        <a href='/Login' className='register-link'>
          Iniciar Sesión
        </a>
      </p>
    </div>
  );
};

export default Register;
