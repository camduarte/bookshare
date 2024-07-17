import React from 'react';
import '../styles/pages/register.css'; 
import Button from '../components/ui/Button';
import { SearchIcon } from '../assets/icons';
import Input from '../components/ui/Input';
import Select from '../components/ui/Select';
import UserMenu from '../components/UserMenu';

  /**
   *
   *
   * @return {div} devuelve el formulario de registro
   */
  const Register = () => {
    
  return (
    <div className="register-card">
      <img src="src/assets/logo/Logo.png" alt="Company Logo" className="logo" />
      <h1>Registrarse</h1>
      
      <form>
      <div className="input-group">
            <Input  
            label ='Nombre'       
            placeholder='Tu Nombre'
            />          
        </div>
        <div className="input-group">

          
        <Input
          label ='Email'       
          placeholder='example@gmail.com'           
        />
        
        </div>
        <div className="input-group">
         
          <Input
        label='Contraseña'     
        placeholder='***********'
        type="password" 
      />
       
        </div>
        
      <Button variant='default' size='default'>
        Registrarse
      </Button>
       
      </form>
      <p className="register-text">
        Ya tenes una cuenta? <a href="/Login" className="register-link">Iniciar Sesión</a>
      </p>
    
    </div>
  );
};

export default Register;
