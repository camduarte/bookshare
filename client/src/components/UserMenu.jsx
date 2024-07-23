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
          <div className='menuItems'>
            <p className='disable-option'>Perfil</p>
            <div>
              <a href='/mis-libros' className='menuItem' onClick={handleChange}>
                Mis Libros
              </a>
            </div>
            <div>
              <a href='/libros' className='menuItem' onClick={handleChange}>
                Explorar Libros
              </a>
            </div>
            <p className='disable-option'>Configuración</p>
          </div>
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
