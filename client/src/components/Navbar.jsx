import React from 'react';
import LogoBookShare from '../assets/logo/Logo.svg';
import Button from './ui/Button';
import '../styles/components/navbar.css';
import UserMenu from './UserMenu';
import useAuthStore from '../store/authStore';
import BookSearch from './BookSearch';

const Navbar = () => {
  const { isAuthenticated } = useAuthStore();
  return (
    <div className='container'>
      <nav className='navbar'>
        <a href='/'>
          <img src={LogoBookShare} alt='bookshare-icon' />
        </a>
        <BookSearch />
        {isAuthenticated() ? (
          <UserMenu />
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
