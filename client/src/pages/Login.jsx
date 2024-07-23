import React, { useEffect } from 'react';
import '../styles/pages/login.css';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { LoginSchema } from '../validations/authSchema';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';
import useAuthStore from '../store/authStore';
import Logo from '../assets/logo/Logo.svg';

const Login = () => {
  const { login, isLoading, error, clearError, isAuthenticated } =
    useAuthStore();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
    reset,
  } = useForm({ resolver: zodResolver(LoginSchema) });

  useEffect(() => {
    if (isAuthenticated()) navigate('/mis-libros');
  }, [isAuthenticated, navigate]);

  const handleInputChange = async (field) => {
    await trigger(field);
  };

  const onSubmit = async ({ email, password }) => {
    try {
      await login(email, password);
      reset();
      toast.success('Ingresando al sistema');
      navigate('/mis-libros');
    } catch (error) {
      const errorMessage = error.response?.data?.mensaje || 'Error desconocido';
      toast.error(`${errorMessage}`);
    }
  };

  useEffect(() => {
    if (error) {
      toast.error(`Error: ${error}`);
      clearError();
    }
  }, [error, clearError]);

  return (
    <div className='login-container'>
      <div className='login-card'>
        <Link to='/'>
          <img src={Logo} alt='Company Logo' className='logo' />
        </Link>
        <h1 className='login-title'>Iniciar Sesión</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
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

          <Button
            variant='default'
            size='default'
            type='submit'
            className='register-button'
            disabled={isLoading}
          >
            Iniciar Sesión
          </Button>
        </form>
        <p className='register-text'>
          No tienes una cuenta?{' '}
          <a href='/auth/register' className='register-link'>
            Registrarse
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
