import React, { useEffect, useMemo } from 'react';
import Button from '../components/ui/Button';
import Card from '../components/Card';
import '../styles/pages/allBooksPage.css';
import Select from '../components/ui/Select';
import useBookStore from '../store/bookStore';
import useAuthStore from '../store/authStore';

const AllBooksPage = () => {
  const { searchResults } = useBookStore();
  const { fetchBooksData, booksData } = useAuthStore();

  useEffect(() => {
    fetchBooksData();
  }, [fetchBooksData]);

  const genreOptions = useMemo(() => {
    const dataToUse = searchResults.length > 0 ? searchResults : booksData;
    if (!dataToUse) return [];
    const uniqueGenres = [...new Set(dataToUse.map((book) => book.genre))];
    return uniqueGenres.map((genre) => ({
      value: genre,
      label: genre,
    }));
  }, [booksData, searchResults]);

  const booksToDisplay = searchResults.length > 0 ? searchResults : booksData;

  return (
    <main className='container' style={{ marginTop: '5rem' }}>
      <div className='all-books-container'>
        <h1 className='primary-title'>Explorar Libros</h1>
        <div className='filter-container'>
          <Select options={genreOptions} placeholder='Filtrar por género' />
          <Button>Limpiar filtros</Button>
        </div>
        <div className='books-cards-container'>
          {booksToDisplay &&
            booksToDisplay.map((book) => (
              <div key={book.id}>
                <Card {...book} />
              </div>
            ))}
        </div>
      </div>
    </main>
  );
};

export default AllBooksPage;
