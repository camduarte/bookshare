import React from 'react';
import Button from '../components/ui/Button';
import Card from '../components/Card';
import '../styles/pages/allBooksPage.css';
import Select from '../components/ui/Select';

const AllBooksPage = () => {
  const options = [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3' },
  ];
  return (
    <main className='container' style={{ marginTop: '5rem' }}>
      <div className='all-books-container'>
        <h1 className='primary-title'>Explorar Libros</h1>
        <div className='filter-container'>
          <Select options={options} placeholder='Filtrar por género' />
          <Button>Limpiar filtros</Button>
        </div>
        <div className='books-cards-container'>
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </main>
  );
};

export default AllBooksPage;
