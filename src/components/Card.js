import React from 'react';
import { Link } from 'react-router-dom';


const Card = ({ to, imageSrc, alt, category }) => {
  return (
    <div className='card'>
      <Link to={to}>
        <img className='card-image' src={imageSrc} alt={alt} />
        <div className='card-desc-below'>
          <p>{category}</p>
        </div>
      </Link>
    </div>
  );
};

export default Card;