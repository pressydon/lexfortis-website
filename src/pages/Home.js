import React from 'react'
import CarouselContainer from '../components/CarouselContainer'
import HeroComponent from '../components/HeroComponent'
import Newsletter from '../components/Newsletter'
import Welcome from '../components/Welcome'
import './Home.css'


function Home() {
  return (
    <div className='home-container'>
      <CarouselContainer />
      <Welcome />
      <HeroComponent />
      {/* <Newsletter /> */}
      
    </div>
  )
}

export default Home
