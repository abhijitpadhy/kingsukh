import React from "react";
import './Rooms.css'
import Destination1 from "../assets/small.jpg";
import Destination2 from "../assets/large.jpg";

export default function Recommend() {
  const data = [
    {
      image: Destination1,
      title: "Cozy Haven Room",
      subTitle: "Escape to comfort in our Cozy Haven Room, a snug retreat designed for intimate relaxation.",
      cost: "Starting from Rs. 1000/night",
    },
    {
      image: Destination2,
      title: "Spacious Serenity Suite",
      subTitle: "Indulge in luxury and ample space in our Spacious Serenity Suite, where tranquility meets roomy elegance.",
      cost: "Starting from Rs. 1500/night",
    },
  ];

  return (
    <div>
      <div className="headings">
        <h2 className="headings">Our Living Room</h2>
        <h3 className="sub-head">The Most Memorable Rest Time Starts Here.</h3>
      </div>
      <section className="Section" id="recommend">
        <div className="destinations">
          {data.map((destination, index) => {
            return (
              <div className="destination" key={index}>
                <img src={destination.image} alt={destination.title} />
                <h3>{destination.title}</h3>
                <p>{destination.subTitle}</p>
                <div className="info">
                  <h4>{destination.cost}</h4>
                  <button className="book-now-btn">Book Now</button>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
