import React from 'react';
import '../styles/components/ui/card.css';
import Badge from './ui/Badge';
import Button from './ui/Button';

const Card = (book) => {
  const { id, imgUrl, title, author, genre } = book;

  return (
    <article className='card'>
      <div className='card-image'>
        <img src={imgUrl} alt='' />
      </div>
      <div className='card-content'>
        <h1 className='card-title'>{title}</h1>
        <small className='card-author'>{author}</small>
        <div className='card-details'>
          <Badge genre={genre} />
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
