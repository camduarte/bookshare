import React, { useState } from 'react';
import LogoBookShare from '../assets/logo/Logo.svg';
import Input from './ui/Input';
import Button from './ui/Button';
import '../styles/components/navbar.css';
import UserMenu from './UserMenu';

const Navbar = () => {
  const [token, setToken] = useState(false);
  return (
    <div className='container'>
      <nav className='navbar'>
        <a href='/'>
          <img src={LogoBookShare} alt='bookshare-icon' />
        </a>
        <Input placeholder='Buscar libros...' icon className='searchInput' />
        {token ? (
          <UserMenu username='adasdads' />
        ) : (
          <div className='authState'>
            <Button>
              <a href='/login' className='authLogin'>
                Iniciar Sesión
              </a>
            </Button>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
