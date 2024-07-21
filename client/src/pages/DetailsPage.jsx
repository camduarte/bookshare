import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Badge from '../components/ui/Badge';
import '../styles/pages/detailsPage.css';
import useBookStore from '../store/bookStore';

const DetailsPage = () => {
  const { id } = useParams();
  const { currentBook, fetchBookByIdUser } = useBookStore();
  const { title, imgUrl, author, genre, year, description } = currentBook || {};
  console.log(currentBook);

  useEffect(() => {
    fetchBookByIdUser(id);
  }, [id, fetchBookByIdUser]);

  return (
    <main className='container'>
      <div className='detail-container'>
        <div className='image-container'>
          <img
            src={
              imgUrl ||
              'https://bodleianshop.co.uk/cdn/shop/products/SpeakingVolumes.jpg?v=1646308052'
            }
            alt={title || 'Título no disponible'}
          />
        </div>
        <div className='detail-container-info'>
          <h1>{title || 'Título no disponible'}</h1>
          <p className='autor'>por {author || 'Desconocido'}</p>
          <div className='information'>
            <Badge genre={genre || 'No especificado'} />{' '}
            <strong>
              <span className='star'>★</span> 4.7
            </strong>{' '}
            <small>Año de publicación: {year || 'No especificado'}</small>
          </div>
          <p>{description || 'No hay descripción disponible'}</p>
        </div>
      </div>
    </main>
  );
};

export default DetailsPage;
