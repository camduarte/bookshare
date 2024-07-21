import React from 'react';
import Button from '../components/ui/Button';

const Error404 = () => {
  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div style={{ textAlign: 'center' }}>
        <h1
          style={{ fontSize: '5rem', color: '#d8d8d8', marginBottom: '1rem' }}
        >
          Error 404
        </h1>
        <Button
          asLink
          href='/'
          style={{ padding: '0 1rem', textDecoration: 'none' }}
        >
          Volver
        </Button>
      </div>
    </div>
  );
};

export default Error404;
