import React from 'react'
import ExpertImageColumn from '../components/ExpertImageColumn'
import HeroComponent from '../components/HeroComponent';
import './OurPhilosophy.css'



function OurPhilosophy({image,title}) {
  return (
    <div className='our-philosophy-container'>
        <ExpertImageColumn image='./images/9.jpg' title='OUR PHILOSOPHY' />
       <HeroComponent />
        <div className='firm-objective'>
            <h4>Firm's Objective</h4>
            <div className='each-item'>
                <i className='fas fa-check-circle'></i>
                <p>To use the knowledge of the law for the security of the common man</p>

            </div>
            <div className='each-item'>
                <i className='fas fa-check-circle'></i>
                <p>To protect businesses and help companies grow legally and ethically</p>

            </div>
            <div className='each-item'>
                <i className='fas fa-check-circle'></i>
                <p>To reduce legal illiteracy and create legal awareness in the people</p>

            </div>
            <div className='each-item'>
                <i className='fas fa-check-circle'></i>
                <p>To execute client instruction within agreed timelines</p>

            </div>
            <div className='each-item'>
                <i className='fas fa-check-circle'></i>
                <p>To radiate excellence through the practice of law.</p>

            </div>
        </div>
        
      
    </div>
  )
}

export default OurPhilosophy