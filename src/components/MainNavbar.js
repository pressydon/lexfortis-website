import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './MainNavbar.css'

function MainNavbar() {
    const [click, setClick] = useState(false);
    const [isOpen, setIsOpen] = useState(false);


    const handleClick = ()=> setClick(!click);
    const closeMenu =()=> setClick(false);


  return (
    <div className='main-nav-container'>
        <div className='menu-bar' onClick={handleClick} >
            <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
        <ul  className={click ? 'menu-links ':'menu-links active'} >
            <li>
                <NavLink 
                to='/'
                onClick={closeMenu}>Home</NavLink>
            </li>
            <li>
                <NavLink 
                to='/expert-practice-areas'
                onClick={closeMenu}>Expert Practice Areas</NavLink>
            </li>
            <li>
                <NavLink 
                to='/Know-our-firm'
                onClick={closeMenu}>Know Our Firm</NavLink>
            </li>
            <li>
                <NavLink 
                to='/blog'
                onClick={closeMenu}>Blog</NavLink>
            </li>
            <li>
                <NavLink 
                to='/our-philosophy'
                onClick={closeMenu}>Our Philosophy</NavLink>
            </li>
            <li>
                <NavLink 
                to='/contact-us'
                onClick={closeMenu}>Contact Us</NavLink>
            </li>
        </ul>
      
    </div>
  )
}

export default MainNavbar
