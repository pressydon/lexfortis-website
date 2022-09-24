import React from 'react';
import { Carousel } from 'react-bootstrap';
import './CarouselContainer.css'

// import image1 from './../assets/images/1.jpg';
// import image2 from './../assets/images/2.jpg';
// import image3 from './../assets/images/3.jpg';

const CarouselContainer = () => {
  return (
    <Carousel fade={true} pause={false} style={{zIndex:0, maxWidth: '100%',overflow: 'hidden'}}>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100 "
          src='./images/12.jpg'
          alt="First slide"
        />
        <Carousel.Caption style={ {position: 'absolute',
    top: '50%',
    left: '50%',
    width:'90%',
    transform: 'translate(-50%, -50%)'}}>
          <h1  style={{fontWeight:'800'}}  >Your preferred Attorneys & Solicitors</h1>
       
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src='./images/14.jpg'
          alt="Third slide"
        />
        <Carousel.Caption style={ {position: 'absolute',
    top: '50%',
    left: '50%',
    width:'90%',
    transform: 'translate(-50%, -50%)'}}>
          <h1 className='m-auto' style={{fontWeight:800}}>Complete Legal Solutions</h1>
       
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src='./images/21.jpg'
          alt="Third slide"
        />
        <Carousel.Caption style={ {position: 'absolute',
    top: '50%',
    left: '50%',
    width:'90%',
    transform: 'translate(-50%, -50%)'}}>
          <h1  style={{fontWeight:800}}>The Law Firm for every one</h1>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default CarouselContainer;