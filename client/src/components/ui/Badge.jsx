import React from 'react';
import '../../styles/components/ui/badge.css';

const Badge = ({ genre }) => {
  return (
    <div className='badge'>
      <small>{genre}</small>
    </div>
  );
};

export default Badge;
