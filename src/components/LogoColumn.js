import React from 'react'
import './LogoColumn.css'
import {Link} from 'react-router-dom'

function LogoColumn() {
  return (
    <div className='logo-column-container'>
        <Link to='/'>
        <div className='logo-container'>
            <img src='./images/lex.jpg' />
        </div>
        </Link>
        <div className='contact-right'>
            <div className='socials'>
                <p>connect with us </p>
                <div className='social-logos'>

                    <a href='https://wa.me/2348061339650?text=Hello,%20can%20I%20speak%20with%20a%20Lawyer%20?'>
                    <i className='fab fa-whatsapp'></i>
                    </a>
                    <a href='https://www.twitter.com/LexFortis_'>
                    <i className='fab fa-twitter'></i>
                    </a>
                    <a href='https://www.linkedin.com/in/lex-fortis-attorneys-6b599a242'>
                    <i className='fab fa-linkedin'></i>
                    </a>
                    <a href='https://www.facebook.com/profile.php?id=100082304537734'>
                    <i className='fab fa-facebook'></i>
                    </a>
                   
                    <a href='mailto:info@lexfortisattorneys.com'>
                    <i className='fas fa-envelope'></i>
                    </a>
                   
                </div>
            </div>
            <div className='telephone'>
                <p>Telephone: </p>
                <div className='phone-container'>
                <h4> +2348061339650</h4>
                <h4>+2347032479647</h4>
                </div>
                
            </div>
            <div className='address'>
                <p>29 Patrick O’ Bokkor Street, Jabi District, Abuja, Nigeria.</p>
                
            </div>
        </div>
      
    </div>
  )
}

export default LogoColumn
