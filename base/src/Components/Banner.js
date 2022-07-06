import { Button } from '@mui/material'
import React from 'react'
import './styles/Banner.css'

function Banner() {
  return (
    <div className='banner'>
      <img className='banner__image'  src={require('../Assets/banner.jpg')}/>
      <div className='banner__text'>
        <h1>Welcome to RestBooking!</h1>
        <p>We provide the best offers for your vacation, by passing through quick search you'll prepare your holidays in minutes!</p>
        <Button className='banner__button' variant='outlined'>Explore Rooms</Button>
      </div>
    </div>
  )
}

export default Banner