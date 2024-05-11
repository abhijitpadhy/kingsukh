import React from 'react';
import './About.css';
import Image from '../assets/out.jpg';

const About = () => {
  return (
    <div>
      <h2 className='headings'>About Us</h2>
      <div className="about-container">
        <div className="about-section">
          <div className="about-content">
            <div className="about-text">
              <h3 className='sub-heading'>The Best Holidays Start Here!</h3>
              <p className='about-para'>
                Embark on a tranquil journey at our Kingsukh Guest House, enveloped by the scenic allure of Biharinath Hill, Baranti Hill, Susunia Hill, Joychandi Hill, Garhpanchkot, Baranti Dam, Maithon Dam, and the captivating Panchat Dam. Revel in the embrace of comfort, relish delightful meals, and unwind in our verdant garden oasis. Your ideal retreat beckons, promising a harmonious blend of nature's beauty and heartfelt hospitality. Explore the hidden gems of Purulia, creating memories that linger long after your stay.
              </p>
              <br></br>
              <div className="contact-info">
                <p className='detail'>Address: Beside Barshal Water Tank, Manpur, Barhanti, West Bengal 723156</p>
                <p className='detail'>Contact us: +91 9007062180</p>
              </div>
              <button className="book-btn">Book Now</button>
            </div>
            <div className="about-image">
              <img src={Image} alt="Company Image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
