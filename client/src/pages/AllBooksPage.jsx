import React, { useEffect, useMemo, useState } from 'react';
import Button from '../components/ui/Button';
import Card from '../components/Card';
import '../styles/pages/allBooksPage.css';
import Select from '../components/ui/Select';
import useBookStore from '../store/bookStore';

const AllBooksPage = () => {
  const { filteredBooks, filterBooks, clearFilteredBooks } = useBookStore();
  const [selectedGenre, setSelectedGenre] = useState('');

  useEffect(() => {
    filterBooks({});
  }, [filterBooks]);

  const genreOptions = useMemo(() => {
    if (!filteredBooks) return [];
    const uniqueGenres = [...new Set(filteredBooks.map((book) => book.genre))];
    return uniqueGenres.map((genre) => ({
      value: genre,
      label: genre,
    }));
  }, [filteredBooks]);

  const handleGenreChange = (e) => {
    const newGenre = e.target.value;
    setSelectedGenre(newGenre);
    filterBooks({ genre: newGenre });
  };

  const handleClearFilters = () => {
    setSelectedGenre('');
    clearFilteredBooks();
    filterBooks({});
  };

  return (
    <main className='container' style={{ marginTop: '5rem' }}>
      <div className='all-books-container'>
        <h1 className='primary-title'>Explorar Libros</h1>
        <div className='filter-container'>
          <Select
            options={genreOptions}
            placeholder='Filtrar por género'
            value={selectedGenre}
            onChange={handleGenreChange}
          />
          <Button onClick={handleClearFilters}>Limpiar filtros</Button>
        </div>
        <div className='books-cards-container'>
          {filteredBooks &&
            filteredBooks.map((book) => (
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
