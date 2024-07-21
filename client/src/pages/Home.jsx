import React, { useEffect } from 'react';
import Button from '../components/ui/Button';
import { ArrowRightIcon } from '../assets/icons';
import HeroBg from '../assets/bg.webp';
import Card from '../components/Card';
// import useBookStore from '../store/bookStore';
import useAuthStore from '../store/authStore';
import '../styles/pages/homePage.css';

export default function Home() {
  const { fetchBooksData, booksData } = useAuthStore();

  useEffect(() => {
    fetchBooksData();
  }, [fetchBooksData]);

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
            <Button
              asLink
              href='/auth/register'
              className='register-button-home'
            >
              Regístrate Gratis
            </Button>
            <Button
              variant='ghost'
              rightIcon={<ArrowRightIcon />}
              className='explore-button'
              asLink
              href='/libros'
            >
              Explorar Libros
            </Button>
          </div>
        </div>
      </section>

      <section className='container'>
        <div className='popular-books'>
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
          {booksData?.map((book) => (
            <div key={book.id}>
              <Card {...book} />
            </div>
          ))}
        </div>
        <div>
          <Button asLink href='/libros' className='explore-button-books'>
            Explorar Libros
          </Button>
        </div>
        </div>
      </section>
    </main>
  );
}
