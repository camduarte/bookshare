import React, { useEffect, useState } from 'react';
import '../styles/components/userMenu.css';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import useAuthStore from '../store/authStore';

const UserMenu = () => {
  const navigate = useNavigate();
  // const { logout, fetchUserData, user } = useAuthStore();
  const { logout } = useAuthStore();
  const [openMenu, setOpenMenu] = useState(false);

  // useEffect(() => {
  //   fetchUserData();
  // }, [fetchUserData]);

  const handleChange = () => {
    setOpenMenu(!openMenu);
  };

  const handleLogout = () => {
    logout();
    toast.success('Sesión cerrada exitosamente');
    navigate('/auth/login');
  };

  // const initials = user?.name ? user.name.substring(0, 2) : 'In';

  return (
    <div className='userMenu'>
      <button onClick={handleChange} className='userProfile'>
        In
      </button>
      {openMenu && (
        <div className='menu'>
          <span className='menuItemTitle'>Mi Cuenta</span>
          <hr />
          <ul className='menuItems'>
            <li className='disable-option'>Perfil</li>
            <li>
              <a href='/mis-libros' className='menuItem' onClick={handleChange}>
                Mis Libros
              </a>
            </li>
            <li>
              <a href='/libros' className='menuItem' onClick={handleChange}>
                Explorar Libros
              </a>
            </li>
            <li className='disable-option'>Configuración</li>
          </ul>
          <hr />
          <button onClick={handleLogout} className='menuLogout'>
            Cerrar Sesión
          </button>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
