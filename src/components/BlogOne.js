import React,{useState, useEffect} from 'react'
import { useParams , useNavigate} from 'react-router-dom';
import './BlogOne.css';







function BlogOne({data}) {


const {id} = useParams();
const navigate = useNavigate();



// const filtered = data.filter((card) =>  card.id == 1 );
//  console.log(filtered);
//  console.log(data);

 
  return (
    <div className='full-blog'>
      {data
      .filter(card =>  card.id  == id)
      .map((card,index)=>(
        <div key={index} className='full-blog-container'>
          <h1 className='card-title'>{card.title} <span>{card.date}</span></h1>
          <h6>{card.author} <span>Esq.</span></h6>
          <div className='blog-body'>
          <p >{card.bodyTop}</p>
          <ul>
            <p>{card.ulTitle}</p>
            <li>{card.liContent1}</li>
            <li>{card.liContent2}</li>
            <li>{card.liContent3}</li>
            <li>{card.liContent4}</li>
            <li>{card.liContent5}</li>
            <li>{card.liContent6}</li>
            <li>{card.liContent7}</li>
            <li>{card.liContent8}</li>
            <li>{card.liContent9}</li>
            <li>{card.liContent10}</li>
            <h5>{card.additionalText}</h5>
            
          </ul>
         
          <p>{card.ulTitle2}</p>

          <ul>
            <li>{card.li2Content1}</li>
            <li>{card.li2Content2}</li>
            <li>{card.li2Content3}</li>
            <li>{card.li2Content4}</li>
            <li>{card.li2Content5}</li>
            <li>{card.li2Content6}</li>
            <li>{card.li2Content7}</li>
            <li>{card.li2Content8}</li>
          </ul>

          
          <p>{card.ulTitle3}</p>

          <ul>
            <li>{card.li3Content1}</li>
            <li>{card.li3Content2}</li>
            <li>{card.li3Content3}</li>
            <li>{card.li3Content4}</li>
            <li>{card.li3Content5}</li>
           
          </ul>
          <h5>{card.additionalText2}</h5>
          <h5 className='last-text'>{card.additionalText3}</h5>
          {/* <img  src={card.blogImageInner} /> */}

          <button onClick={() => navigate(-1)}>Go back</button>
          </div>

        
         
        </div>
      ))}
    </div>
  )
}

export default BlogOne
