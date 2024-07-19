import React from 'react';
import '../styles/pages/detailsPage.css';
import Badge from '../components/ui/Badge';

const DetailsPage = () => {
  const data = {
    img: 'https://bodleianshop.co.uk/cdn/shop/products/SpeakingVolumes.jpg?v=1646308052',
    title: 'El nombre del viento',
    author: 'Patrick Rothfuss',
    year: '2024',
    genre: 'Fantasía',
    description:
      'El nombre del viento es una novela de fantasía épica, primera parte de la trilogía «Crónica del asesino de reyes»...',
  };
  return (
    <main className='container'>
      <div className='detail-container'>
        <div className='image-container'>
          <img src={data.img} alt={data.title} />
        </div>
        <div className='detail-container-info'>
          <h1>{data.title}</h1>
          <p className='autor'>por {data.author}</p>
          <div className='information'>
            <Badge genre={data.genre} />{' '}
            <strong>
              <span className='star'>★</span> 4.7
            </strong>{' '}
            <small>Año de publicación: {data.year}</small>
          </div>
          <p>{data.description}</p>
        </div>
      </div>
    </main>
  );
};

export default DetailsPage;
