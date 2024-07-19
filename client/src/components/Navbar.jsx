import React from 'react';
import LogoBookShare from '../assets/logo/Logo.svg';
import Input from './ui/Input';
import Button from './ui/Button';
import '../styles/components/navbar.css';
import UserMenu from './UserMenu';
import useAuthStore from '../store/authStore';

const Navbar = () => {
  const { isAuthenticated } = useAuthStore();
  return (
    <div className='container'>
      <nav className='navbar'>
        <a href='/'>
          <img src={LogoBookShare} alt='bookshare-icon' />
        </a>
        <Input placeholder='Buscar libros...' icon className='searchInput' />
        {isAuthenticated() ? (
          <UserMenu username='adasdads' />
        ) : (
          <div className='authState'>
            <Button>
              <a href='/auth/login' className='authLogin'>
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
