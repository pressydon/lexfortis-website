import React from 'react'
import './ExpertImageColumn.css'

function ExpertImageColumn({image,title}) {
  return (
    <div className='Expert-image-container'>
        <img src={image} />
        <h1>{title}</h1>
      
    </div>
  )
}

export default ExpertImageColumn
