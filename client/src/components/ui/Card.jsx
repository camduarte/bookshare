import React from 'react';
import '../../styles/components/ui/card.css';

function Card({imagenUrl,libro,autor}){

    return(
        <div className='card'>    
            <img src={imagenUrl} alt={title} className='card-imagen' />
            <div>
                <h2 className='card-title'>{libro}</h2>
                <small className='card-autor'>{autor}</small>   
            </div>
        </div> 
    )
}

export default Card;