import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Badge from '../components/ui/Badge';
import '../styles/pages/detailsPage.css';
import useBookStore from '../store/bookStore';
import { Skeleton } from '../components/ui/Skeleton';

const DetailsPage = () => {
  const { id } = useParams();
  const { currentBook, fetchBookByIdUser, isLoading } = useBookStore();
  const { title, imgUrl, author, genre, year, description } = currentBook || {};
  console.log(currentBook);

  useEffect(() => {
    fetchBookByIdUser(id);
  }, [id, fetchBookByIdUser]);

  return (
    <main className='container'>
      <div className='detail-container'>
        <div className='image-container'>
          {isLoading ? (
            <Skeleton style={{ width: '100%', height: '400px' }} />
          ) : (
            <img src={imgUrl} alt={title} />
          )}
        </div>
        <div className='detail-container-info'>
          {isLoading ? (
            <Skeleton
              style={{ width: '100%', height: '3rem', marginBottom: '1rem' }}
            />
          ) : (
            <h1>{title}</h1>
          )}
          {isLoading ? (
            <Skeleton
              style={{ width: '50%', height: '1.5rem', marginBottom: '1rem' }}
            />
          ) : (
            <p className='autor'>por {author || 'Desconocido'}</p>
          )}
          <div className='information'>
            {isLoading ? (
              <>
                <Skeleton
                  style={{
                    width: '80px',
                    height: '1.5rem',
                    marginRight: '1rem',
                  }}
                />
                <Skeleton
                  style={{
                    width: '40px',
                    height: '1.5rem',
                    marginRight: '1rem',
                  }}
                />
                <Skeleton style={{ width: '150px', height: '1.5rem' }} />
              </>
            ) : (
              <>
                <Badge genre={genre || 'No especificado'} />{' '}
                <strong>
                  <span className='star'>★</span> 4.7
                </strong>{' '}
                <small>Año de publicación: {year || 'No especificado'}</small>
              </>
            )}
          </div>
          {isLoading ? (
            <>
              <Skeleton
                style={{
                  width: '100%',
                  height: '1rem',
                  marginBottom: '0.5rem',
                }}
              />
              <Skeleton
                style={{
                  width: '100%',
                  height: '1rem',
                  marginBottom: '0.5rem',
                }}
              />
              <Skeleton style={{ width: '80%', height: '1rem' }} />
            </>
          ) : (
            <p>{description || 'No hay descripción disponible'}</p>
          )}
        </div>
      </div>
    </main>
  );
};

export default DetailsPage;
