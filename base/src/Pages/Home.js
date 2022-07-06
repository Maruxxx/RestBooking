import React from 'react'
import Banner from '../Components/Banner'
import Card from '../Components/Card'
import Footer from '../Components/Footer'
import './styles/Home.css'

function Home() {
  return (
    <div className='home'>
      <Banner />
      <div className='info__cards1'>
        <Card 
        img='https://images.unsplash.com/photo-1505773278895-5efa7b11679a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aG90ZWwlMjByb29tfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=900&q=60'
        title='Family room in Villa Mandarina Bacalar'
        desc='The accommodation is located in front of the beautiful Bacalar lagoon where you can enjoy an atmosphere of relaxation and lots of nature.'
        price='$96'
        rating='5.0'
        />
        <Card 
        img='https://images.unsplash.com/photo-1521783593447-5702b9bfd267?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjByb29tfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=900&q=60'
        title='Private room in island'
        desc='The Arctic Hideaway is an architecturally playful and stunning collection of ten individual buildings, where four are sleeping cabins.'
        price='$126'
        rating='4.6'
        />
        <Card 
        img='https://images.unsplash.com/photo-1638619281167-b134b7fb3095?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGhvdGVsJTIwcm9vbXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=900&q=60'
        title='Lighthouse hosted by Valentino'
        desc='The Prišnjak lighthouse is built in a rustic style and is only 5 m away from the Adriatic Sea.'
        price='$55'
        rating='3.8'
        />
      </div>
      <div className='info__cards2'>
      <Card 
        img='https://images.unsplash.com/photo-1505773278895-5efa7b11679a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aG90ZWwlMjByb29tfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=900&q=60'
        title='Family room in Villa Mandarina Bacalar'
        desc='The accommodation is located in front of the beautiful Bacalar lagoon where you can enjoy an atmosphere of relaxation and lots of nature.'
        price='$96'
        rating='5.0'
        />
        <Card 
        img='https://images.unsplash.com/photo-1521783593447-5702b9bfd267?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjByb29tfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=900&q=60'
        title='Private room in island'
        desc='The Arctic Hideaway is an architecturally playful and stunning collection of ten individual buildings, where four are sleeping cabins.'
        price='$126'
        rating='4.6'
        />
        <Card 
        img='https://images.unsplash.com/photo-1638619281167-b134b7fb3095?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGhvdGVsJTIwcm9vbXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=900&q=60'
        title='Lighthouse hosted by Valentino'
        desc='The Prišnjak lighthouse is built in a rustic style and is only 5 m away from the Adriatic Sea.'
        price='$55'
        rating='3.8'
        />
      </div>

      <Footer />
    </div>
  )
}

export default Home