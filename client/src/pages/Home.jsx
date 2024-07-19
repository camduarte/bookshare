import React, { useEffect } from 'react';
import Button from '../components/ui/Button';
import { ArrowRightIcon } from '../assets/icons';
import HeroBg from '../assets/bg.webp';
import '../styles/pages/homePage.css';
import Card from '../components/Card';
import useBookStore from '../store/bookStore';

export default function Home() {
  const { books, fetchBooks } = useBookStore();

  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  return (
    <main className='home-main'>
      <section className='hero-section'>
        <div className='hero-bg'>
          <img src={HeroBg} alt='backgroundImage' />
        </div>
        <div className='hero-content'>
          <h1 className='hero-title'>Comparte, Descubre, Lee</h1>
          <p className='hero-description'>
            Únete a la comunidad de BookShare y explora un mundo de historias.
            Intercambia libros, comparte reseñas y encuentra tu próxima lectura
            favorita.
          </p>
          <div className='hero-buttons'>
            <Button className='register-button'>
              <a href='/auth/register'>Regístrate Gratis</a>
            </Button>
            <Button
              variant='ghost'
              rightIcon={<ArrowRightIcon />}
              className='explore-button'
            >
              <a href='/libros'>Explorar Libros</a>
            </Button>
          </div>
        </div>
      </section>

      <section className='popular-books container'>
        <h2 className='popular-books-title'>Libros Populares</h2>
        <div className='popular-books-genres'>
          <Button variant='outline'>Todos</Button>
          <Button variant='outline'>Ficción</Button>
          <Button variant='outline'>No Ficción</Button>
          <Button variant='outline'>Misterio</Button>
          <Button variant='outline'>Romance</Button>
          <Button variant='outline'>Ciencia Ficción</Button>
        </div>
        <div className='popular-books-cards'>
          {books.map((book) => (
            <div key={book.id}>
              <Card {...book} />
            </div>
          ))}
        </div>
        <div>
          <Button className='explore-button-books'>
            <a href='/libros'>Explorar Libros</a>
          </Button>
        </div>
      </section>
    </main>
  );
}
