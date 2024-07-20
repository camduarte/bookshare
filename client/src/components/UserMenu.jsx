import React, { useEffect, useState } from 'react';
import '../styles/components/userMenu.css';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import useAuthStore from '../store/authStore';

const UserMenu = () => {
  const navigate = useNavigate();
  const { logout, fetchUserData, user } = useAuthStore();
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    fetchUserData();
  }, [fetchUserData]);

  const handleChange = () => {
    setOpenMenu(!openMenu);
  };

  const handleLogout = () => {
    logout();
    toast.success('Sesión cerrada exitosamente');
    navigate('/auth/login');
  };

  const initials = user?.name.substring(0, 2);

  return (
    <div className='userMenu'>
      <button onClick={handleChange} className='userProfile'>
        {initials}
      </button>
      {openMenu && (
        <div className='menu'>
          <span className='menuItemTitle'>Mi Cuenta</span>
          <hr />
          <ul className='menuItems'>
            <li>
              <a href='/' className='menuItem' onClick={handleChange}>
                Perfil
              </a>
            </li>
            <li>
              <a href='/mis-libros' className='menuItem' onClick={handleChange}>
                Mis Libros
              </a>
            </li>
            <li>
              <a href='/' className='menuItem' onClick={handleChange}>
                Configuración
              </a>
            </li>
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
