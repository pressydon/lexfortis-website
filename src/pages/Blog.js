import React,{useState} from 'react'
import BlogCardItem from '../components/BlogCardItem'
import ExpertImageColumn from '../components/ExpertImageColumn'
import BlogOne from '../components/BlogOne'
import './Blog.css'
import { Link, useParams } from 'react-router-dom';

function Blog({data}) {



  
  const {blog1} = useParams()

  return (
    <div className='blog-container'>
      <ExpertImageColumn image='./images/blog.png' title='BLOG' alt='blog' />

     <div className='all-blogs'>

       <BlogCardItem data={data} />
     


       
    

     </div>
    </div>
  )
}

export default Blog





// <Link to='/blog/blog1'>

// <BlogCardItem 
//  blogImage='./images/9.jpg' 
//  blogTitle='WHAT IN YOUR VIEW ARE THE CAUSES OF THE CRIME OF BANDITRY?' 
//  author='Chimezie Vitus' para='Banditry is a type of organized crime committed by outlaws typically involving the threat or use of violence...' />

  
//   </Link>
//  <Link to='/blog/blog2'>
//  <BlogCardItem 
//  blogImage='./images/9.jpg' 
//  blogTitle='WHAT IN YOUR VIEW ARE THE CAUSES OF THE CRIME OF BANDITRY?' 
//  author='Chimezie Vitus' para='Banditry is a type of organized crime committed by outlaws typically involving the threat or use of violence...' />
//  </Link>

//  <Link to='/blog/blog3'>
//  <BlogCardItem 
//  blogImage='./images/9.jpg' 
//  blogTitle='WHAT IN YOUR VIEW ARE THE CAUSES OF THE CRIME OF BANDITRY?' 
//  author='Chimezie Vitus' para='Banditry is a type of organized crime committed by outlaws typically involving the threat or use of violence...' />
//  </Link>

//  <Link to='/blog/blog4'>
//  <BlogCardItem 
//  blogImage='./images/9.jpg' 
//  blogTitle='WHAT IN YOUR VIEW ARE THE CAUSES OF THE CRIME OF BANDITRY?' 
//  author='Chimezie Vitus' para='Banditry is a type of organized crime committed by outlaws typically involving the threat or use of violence...' />
 
//  </Link >

//  <Link  to='/blog/blog5'>
 
//  <BlogCardItem 
//  blogImage='./images/9.jpg' 
//  blogTitle='WHAT IN YOUR VIEW ARE THE CAUSES OF THE CRIME OF BANDITRY?' 
//  author='Chimezie Vitus' para='Banditry is a type of organized crime committed by outlaws typically involving the threat or use of violence...' />
//  </Link>

 
 
