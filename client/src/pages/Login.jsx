import React, { useState } from 'react';
import '../styles/pages/login.css'; 
import Button from '../components/ui/Button';
import { SearchIcon } from '../assets/icons';
import Input from '../components/ui/Input';
import Select from '../components/ui/Select';
import UserMenu from '../components/UserMenu';


  const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

  const validateEmail = (email) => {
    // Verifica que el correo electrónico sea válido
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Resetea los mensajes de error
    setEmailError('');
    setPasswordError('');

    let valid = true;

    if (!validateEmail(email)) {
      setEmailError('Por favor ingrese un correo electrónico válido.');
      valid = false;
    }

    if (password.length < 6) {
      setPasswordError('La contraseña debe tener al menos 6 caracteres.');
      valid = false;
    }

    if (valid) {
      // Realiza la lógica de inicio de sesión
      console.log('Iniciar sesión con:', { email, password });
    }
  };

  return (
    <div className="login-card">
      <img src="src/assets/logo/Logo.png" alt="Company Logo" className="logo" />
      <h1>Iniciar Sesión</h1>
      
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          
        <Input
          label ='Correo Electrónico'       
          placeholder='ingresa tu email'  
          type='email'
          id='email' 
          name='email'
          value={email} 
          onChange={(e) => setEmail(e.target.value)}  
        />
       {emailError && <p className="error">{emailError}</p>}
        
        </div>
        <div className="input-group">
         
          <Input
        label='Contraseña'     
        placeholder='ingresa tu contraseña'
        type="password" 
        id="password" 
        name="password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)}   
           
      />
        {passwordError && <p className="error">{passwordError}</p>}
        </div>
        
      <Button variant='default' size='default' type='submit'>
        Iniciar Sesión
      </Button>
       
      </form>
      <p className="register-text">
        No tengo una cuenta, <a href="/register" className="register-link">registrarme</a>
      </p>
    
    </div>
  );
};

export default Login;
