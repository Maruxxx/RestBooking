import React from 'react'
import './styles/Card.css'
import StarIcon from '@mui/icons-material/Star';

function Card({img, title, desc, price, rating}) {
  return (
    <div className='card'>
      <div className='card__wrap'>
        <img src={img}/>
        <h1>{title}</h1>
        <p>{desc}</p>
        <h3>{price} <span>night</span></h3>
        <div className='rating'>
          <StarIcon style={{ color: '#006aec', objectFit: 'contain' ,width: 17, marginRight: 1}} fontSize='small'/>
          <p>{rating}</p>
        </div>
      </div>
   </div>
  )
}

export default Card