import { Outlet } from 'react-router-dom';
import Navbar from '../../components/Navbar';

export const FullWithLayout = () => {
  return (
    <div>
      <div
        style={{
          backgroundColor: 'var(--gray-color)',
          position: 'fixed',
          width: '100%',
          zIndex: '100',
          top: '0',
        }}
      >
        <Navbar />
      </div>
      <Outlet />
    </div>
  );
};
