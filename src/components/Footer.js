import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-container-inner'>



      <div className='footer-left'>

<ul  >
    <li>
        <Link 
        to='/'
        >Home</Link>
    </li>
    <li>
        <Link 
        to='/expert-practice-areas'
        >Expert Practice Areas</Link>
    </li>
    <li>
        <Link 
        to='/Know-our-firm'
        >Know Our Firm</Link>
    </li>
    <li>
        <Link 
        to='/blog'
        >Blog</Link>
    </li>
    <li>
        <Link 
        to='/our-philosophy'
        >Our Philosophy</Link>
    </li>
    <li>
        <Link 
        to='/contact-us'
        >Contact Us</Link>
    </li>
</ul>

<ul>
    <li>Corporate & Commercial Law</li>
    <li>Dispute Resolution</li>
    <li>Property & Real Estate</li>
    <li>Tax Audit</li>
    <li>Family Law & Matrimonial Causes</li>
    <li>Technology & Telecommunication</li>
    <li>Legislative & General Legal Drafting</li>
    <li>Banking Finance</li>
    
</ul>

</div>

<div className='footer-logo'>
    <img src='./images/lex.png' />

</div>



      </div>
        
        <p>Copyright &copy; 2022 Lex Fortis Attorneys. All Rights Reserved</p>
        
      
    </div>
  )
}

export default Footer
