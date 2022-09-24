import React, { useState } from 'react'
import ExpertImageColumn from '../components/ExpertImageColumn';
import './ContactUs.css';
import {Link} from 'react-router-dom'

function ContactUs({image, title}) {
    // const [contactInfo, setContactInfo] = useState({
    //     fullName: '',
    //     email: '',
    //     phone: '',
    //     moreDetails: ''
    // });

    // const handleChange = (e)=>{
    //     setContactInfo({...contactInfo, [e.target.name]: e.target.value})
    // };

    // const handleSubmit = (e)=>{
    //     e.preventDefault();
    //     console.log(contactInfo)
    //     setContactInfo({ fullName: "", email: "", phone: "" , moreDetails: ""});
    // }

  return (
    <div className='contactus-container'>
        <ExpertImageColumn image='./images/21.jpg' title='Contact Us' />
      <div className='contact-form-container'>

          <div className='contact-form-left'>
              <div className='each-card'>
                <i className='fas fa-map-marker-alt'></i>
               
                <p> 29 Patrick O’ Bokkor Street, Jabi District, Abuja, Federal Capital Territory, Nigeria.</p>
              </div>
              <div className='each-card'>
                <i className='fas fa-phone'></i>
                <p>+2348061339650 </p>
                <p>+2347032479647</p>
              </div>
              <div className='each-card'>
              <a href='mailto:info@lexfortisattorneys.com'>
              <i className='fas fa-envelope'></i>
                <p> info@lexfortisattorneys.com</p>
              </a>
              </div>
              <div className='each-card'>
              <div className='social-logos'>

                    
                    <a href='https://www.twitter.com/LexFortis_'>
                    <i className='fab fa-twitter'></i>
                    </a>
                    <a href='https://www.linkedin.com/in/lex-fortis-attorneys-6b599a242'>
                    <i className='fab fa-linkedin'></i>
                    </a>
                    <a href='https://www.facebook.com/profile.php?id=100082304537734'>
                    <i className='fab fa-facebook'></i>
                    </a>
                    <a href='https://api.whatsapp.com/send?phone=2348061339650'>
                    <i className='fab fa-whatsapp'></i>
                    </a>
                   
                </div>
                <p> social media handles</p>
              </div>

          </div>

          <div className='contact-form-right'>
              <h2>Talk to Us</h2>
              <form method="POST"
              action="https://formsubmit.co/4213942b4b979f997e7a2ca1decda3af"
              // onSubmit={handleSubmit}
              >
                  <div className='inputs'>
                    <label htmlFor='fullname'>FullName</label>
                    <input type='text'
                    name='fullName'
                    required
                    placeholder='FullName'
                    // value={contactInfo.fullName} 
                    // onChange={handleChange}
                      />
                  </div>
                  <div className='inputs'>
                    <label htmlFor='email'>Email</label>
                    <input type='text'
                    placeholder='Email'
                    name='email'
                    required
                    // value={contactInfo.email} 
                    // onChange={handleChange}
                      />
                  </div>
                  <div className='inputs'>
                    <label htmlFor='phone'>Phone</label>
                    <input type='number'
                    placeholder='Mobile Number'
                    name='phone'
                    required
                    // value={contactInfo.phone}
                    //  onChange={handleChange} 
                     />
                  </div>
                  <div className='inputs'>
                    <label htmlFor='phone'>Your Message</label>
                    <textarea type='text'
                    rows = "5" cols = "50"
                    name='moreDetails'
                    placeholder='Your Message' 
                    required
                    // value={contactInfo.moreDetails}
                    //  onChange={handleChange}
                      />
                  </div>
                  <button className='btn'>Submit</button>

              </form>

          </div>

      </div>
    </div>
  )
}

export default ContactUs
