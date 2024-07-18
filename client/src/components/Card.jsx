import React from 'react';
import '../styles/components/ui/card.css';
import Badge from './ui/Badge';
import Button from './ui/Button';

const Card = () => {
  const id = 1;
  return (
    <article className='card'>
      <div className='card-image'>
        <img
          src='https://bodleianshop.co.uk/cdn/shop/products/SpeakingVolumes.jpg?v=1646308052'
          alt=''
        />
      </div>
      <div className='card-content'>
        <h1 className='card-title'>Cien años de soledad</h1>
        <small className='card-author'>Gabriel García Márquez</small>
        <div className='card-details'>
          <Badge genre='Realismo mágico' />
          <span className='card-rating'>★ 4.7</span>
        </div>
        <Button className='card-button'>
          <a href={`/detalles/${id}`} className='card-link'>
            Ver detalles
          </a>
        </Button>
      </div>
    </article>
  );
};

export default Card;
