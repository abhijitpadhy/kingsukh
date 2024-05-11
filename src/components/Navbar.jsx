// Navbar.js

import React, { useState } from 'react';
import './Navbar.css';
import Logo from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleHamburgerClick = () => {
    setIsOpen(!isOpen);
  };

  const scrollToTop = (event) => {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Smooth scrolling animation
    });
  };

  return (
    <nav>
      <div className="logo">
        <img src={Logo} alt="Logo Image" />
      </div>
      <div className={`hamburger ${isOpen ? 'toggle' : ''}`} onClick={handleHamburgerClick}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li className='menu'><a href="#home" onClick={scrollToTop}>Home</a></li>
        <li className='menu'><a href="#about">About</a></li>
        <li className='menu'><a href="#services">Services</a></li>
        <li className='menu'><a href="#rooms">Rooms</a></li>
        <li className='menu'><a href="#gallery">Gallery</a></li>
        <li className='menu'><a href="#contact">Contact</a></li>
        <li><button className="book-button">Book Now</button></li>
      </ul>
    </nav>
  );
};

export default Navbar;
