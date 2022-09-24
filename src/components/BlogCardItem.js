import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './BlogCardItem.css';


function BlogCardItem({data}) {

      // const {title} = useParams()
  return (
    
      <>
      {
        data.map((card,index)=>(
        <div  key={index} className='blog-item-container'>
          <div className='blog-image-container'>
          <img src={card.blogImage} />
            <i className='fas fa-caret-up'></i>
          </div>

          <h4>{card.title}</h4>
          <h6 className='author'>{card.author} <span>Esq.</span></h6>
          <p className='content'>{card.content}</p>
          <Link  to={`/blog/${card.id}`}>
          <button className='view-more-button'>More</button> </Link>

          </div>
    
   
      )) }
      </>
  
  )
}

export default BlogCardItem



{/* <div className='blog-image-container'>
<img src={blogImage} />
<i className='fas fa-caret-up'></i>
</div>
<h4>{blogTitle}</h4>
<h6 className='author'>{author} <span>Esq.</span></h6>
<p className='content'>{para}</p>
<button className='view-more-button'>More</button> */}
