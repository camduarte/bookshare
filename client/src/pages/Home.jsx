import React, { useEffect } from 'react';
import Button from '../components/ui/Button';
import { ArrowRightIcon } from '../assets/icons';
import HeroBg from '../assets/bg.webp';
import Card from '../components/Card';
// import useBookStore from '../store/bookStore';
import useBookStore from '../store/bookStore';
import '../styles/pages/homePage.css';
import { Skeleton } from '../components/ui/Skeleton';
import useAuthStore from '../store/authStore';

export default function Home() {
  const { isAuthenticated } = useAuthStore();
  const { fetchAllBooks, allBooks, isLoading } = useBookStore();

  useEffect(() => {
    fetchAllBooks();
  }, [fetchAllBooks]);

  const newBooks = allBooks
    ?.slice()
    .sort((a, b) => new Date(b.id) - new Date(a.id))
    .slice(0, 4);

  const renderSkeletonCards = () => {
    return Array(4)
      .fill()
      .map((_, i) => (
        <div key={i} className='card-popular-books'>
          <Skeleton style={{ width: '100%', height: '28rem' }} />
        </div>
      ));
  };

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
            {isAuthenticated() ? (
              ''
            ) : (
              <Button
                asLink
                href='/auth/register'
                className='register-button-home'
              >
                Regístrate Gratis
              </Button>
            )}
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
          <h2 className='popular-books-title'>Libros Recientes</h2>
          <div className='popular-books-cards'>
            {isLoading
              ? renderSkeletonCards()
              : newBooks?.map((book) => (
                  <div key={book.id} className='card-popular'>
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
