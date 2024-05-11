import React from "react";
import './Hero.css'
import homeImage from "../assets/ayodhya.webp";

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="background">
        <img src={homeImage} alt="" />
      </div>
      <div className="hero-content">
        <div className="hero-title">
          <p>Simple - Unique - Friendly</p>
          <h1>
            Make Yourself At Home<br/>
            In Our Guest House.
          </h1>
        </div>
      </div>
    </section>
  );
}
