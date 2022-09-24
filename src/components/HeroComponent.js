import React from 'react'
import './HeroComponent.css'

const heroObj =[
    {title: 'Vision Statement',
     icon: <i className="fas fa-lightbulb"></i>,
     para: 'To foster a world of legality while protecting human rights.'},
     {title: 'Mission Statement',
     icon: <i className="fas fa-crosshairs"></i>,
     para: 'With the soundest legal minds, the legal needs of our Clients must be met.'},
     {title: 'Core Values',
     icon: <i className="fas fa-gavel"></i>,
     para: ' Knowledge, Diligence, Professionalism and Excellence.'}
]

function HeroComponent() {
  return (
    <div className='hero-container'>
      {
        heroObj.map(obj=>(
          <div key={obj.title} className='each-container'>
            <div className='icon'>
              {obj.icon}
            </div>
            <h3>{obj.title}</h3>
            <p>{obj.para}</p>

          </div>
        ))
      }
        
      
    </div>
  )
}

export default HeroComponent
