import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <>
      <footer>
    <div class="row">
      <div class="column">
        <h3 className='footer-heading'>Kingsukh Guest House</h3>
        <p className='footer-para'>Discover a world of comfort, luxury, and adventure as you explore our curated selection of hotels, making every moment of your getaway truly extraordinary.</p>
        <button className='book-now'>Book Now</button>
      </div>
      <div class="column">
        <h3 className='footer-heading'>Quick Links</h3>
        <ul>
          <li>
            <a href="#">
              <i class="fa fa-angle-right"></i> 
              Home</a>
          </li>
          <li>
            <a href="#">
              <i class="fa fa-angle-right"></i> 
              About</a>
          </li>
          <li>
            <a href="#">
              <i class="fa fa-angle-right"></i> 
              Contact</a>
           </li>
        </ul>
      </div>

      <div class="column">
        <h3 className='footer-heading'>Contact Us</h3>
        <ul>
          <li>
            <a href="#">
              <i class="fas fa-map-marker-alt"></i> 
              Beside Barshal Water Tank, Manpur, Barhanti, West Bengal 723156</a>
          </li>
          <li>
            <a href="#">
              <i class="fas fa-envelope"></i> 
              kkghosh0099@gmail.com</a>
          </li>
          <li>
            <a href="#">
              <i class="fa fa-phone"></i> 
              +91 9007062180</a>
           </li>
        </ul>
      </div>
      <div class="column">
        <h3 className='footer-heading'>Connect With Us</h3>
        <ul class="social-icons">
          <li>
            <a href="#">
              <i class="fa-brands fa-facebook-f"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fa-brands fa-instagram"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fa-brands fa-twitter"></i>
            </a>
           </li>
           <li>
             <a href="#">
             <i class="fa-brands fa-youtube"></i>
             </a>
           </li>
        </ul>
      </div>
    </div>
    <p class="copyright">Copyright © 2024 Kingsukh Guest House. All rights reserved.</p>
  </footer>  
    </>
  );
};

export default Footer;
