import React, { useState } from 'react';
import '../styles/components/userMenu.css';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import useAuthStore from '../store/authStore';

/**
 * @function UserMenu
 * @param {Function} logout - Función que se llama para cerrar sesión del usuario.
 * @param {string} username - Nombre de usuario que se muestra en el menú.
 *
 * @returns {JSX.Element} El componente de menú de usuario.
 *
 * @example
 * <UserMenu username='adasdads' logout={options} />
 */
const UserMenu = ({ username }) => {
  const navigate = useNavigate();
  const { logout } = useAuthStore();
  const [openMenu, setOpenMenu] = useState(false);

  const handleChange = () => {
    setOpenMenu(!openMenu);
  };

  const handleLogout = () => {
    logout();
    toast.success('Sesión cerrada exitosamente');
    navigate('/login');
  };

  const initials = username.substring(0, 2);

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
