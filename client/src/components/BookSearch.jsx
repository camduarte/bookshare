import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import useDebounce from '../hooks/useDebounce';
import useBookStore from '../store/bookStore';
import Input from './ui/Input';
import { SearchIcon } from '../assets/icons';
import '../styles/components/bookSearch.css';
import Button from './ui/Button';

const BookSearch = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  const { searchBooks, searchResults, clearSearchResults } = useBookStore();
  const inputRef = useRef(null);

  useEffect(() => {
    if (debouncedSearchTerm) searchBooks(debouncedSearchTerm);
    else clearSearchResults();
  }, [debouncedSearchTerm, searchBooks, clearSearchResults]);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSelect = (bookTitle) => {
    setSearchTerm(bookTitle);
    clearSearchResults();
    setIsFocused(false);
    inputRef.current.blur();
    navigate(`/libros?search=${encodeURIComponent(bookTitle)}`);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setTimeout(() => {
      setIsFocused(false);
    }, 200);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter')
      navigate(`/libros?search=${encodeURIComponent(searchTerm)}`);
  };

  return (
    <div className='book-search-container'>
      <Input
        ref={inputRef}
        placeholder='Buscar libros...'
        name='search'
        value={searchTerm}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onKeyPress={handleKeyPress}
        icon={<SearchIcon />}
        className='search-input'
      />
      {isFocused && searchResults && searchResults.length > 0 && (
        <div className='search-results'>
          {searchResults.map((book) => (
            <Button
              key={book.id}
              variant='ghost'
              className='search-result-item'
              onClick={() => handleSelect(book.title)}
            >
              {book.title}
            </Button>
          ))}
        </div>
      )}
    </div>
  );
};

export default BookSearch;
