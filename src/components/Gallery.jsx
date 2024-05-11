import React from 'react';
import './Gallery.css';
import Image1 from '../assets/baranti.webp'
import Image2 from '../assets/out.jpg'
import Image3 from '../assets/flower.jpg'
import Image4 from '../assets/ayodhya.webp'
import Image5 from '../assets/mithonDam.webp'
import Image6 from '../assets/palash.webp'
import Image7 from '../assets/recep.jpg'
import Image8 from '../assets/room1.jpg'
import Image9 from '../assets/small.jpg'
import Image10 from '../assets/large.jpg'

const Gallery = () => {
  return (
    <>
      <div>
        <h2 className="headings">Our Portfolio</h2>
      </div>
      <div className="parent-container">
        <div className="child-container" id="one">
          <img src={Image1} width="100%" height="auto" alt=""/>
          <img src={Image2} width="100%" height="auto" alt=""/>
          <img src={Image9} width="100%" height="30%" alt=""/>
        </div>
        <div className="child-container" id="two">
          <img src={Image7} width="100%" height="auto" alt=""/>
          <img src={Image8} width="100%" height="auto" alt=""/>
          <img src={Image5} width="100%" height="auto" alt=""/>
          <img src={Image4} width="100%" height="auto" alt=""/>
        </div>
        <div className="child-container" id="three">
          <img src={Image6} width="100%" height="auto" alt=""/>
          <img src={Image10} width="100%" height="auto" alt=""/>
          <img src={Image3} width="100%" height="45%" alt=""/>
        </div>
      </div>
    </>
  );
}

export default Gallery;
