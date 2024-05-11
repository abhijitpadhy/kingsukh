import React from "react";
import './Contact.css'

function Contact() {
  return (
    <>
    <h2 className="headings">Contact Us</h2>
      <div className="contact-container">
        <div className="content">
          <div className="left-side">
            <div className="address details">
              <h3 className="contact-subheading">Contact Info</h3>
              <i className="fas fa-map-marker-alt"></i>
              <div className="topic">Address</div>
              <div className="text-one">Beside Barshal Water Tank, Manpur, Barhanti,West Bengal 723156</div>
            </div>
            <div className="email details">
              <i className="fas fa-envelope"></i>
              <div className="topic">Email</div>
              <div className="text-one">kkghosh0099@gmail.com</div>
            </div>
            <div className="phone details">
              <i className="fa-solid fa-phone"></i>
              <div className="topic">Phone</div>
              <div className="text-one">+91 9007062180</div>
            </div>
            <div className="social-media-icons">
              <a href="#" className="facebook"><i className="fab fa-facebook"></i></a>
              <a href="#" className="instagram"><i class="fa-brands fa-square-instagram"></i></a>
              <a href="#" className="twitter"><i className="fab fa-twitter"></i></a>
              <a href="#" className="linkedin"><i className="fab fa-linkedin"></i></a>
            </div>
          </div>
          <div className="right-side">
            <div className="topic-text">Get In Touch With Us</div>
            <p className="contact-para">If you have any queries you can send a message from here. It's our pleasure to help you.</p>
            <form action="#">
              <div className="input-box">
                <input type="text" placeholder="First Name" className="placeholder"/>
              </div>
              <div className="input-box">
                <input type="text" placeholder="Last Name" className="placeholder"/>
              </div>
              <div className="input-box">
                <input type="email" placeholder="Email Address" className="placeholder"/>
              </div>
              <div className="input-box">
                <input type="number" placeholder="Mobile Number" className="placeholder"/>
              </div>
              <div className="input-box message-box">
                <input type="text" placeholder="Enter your message here" className="placeholder"/>
              </div>
              <div className="contact-button">
                <input type="button" value="Send Now" />
              </div>
            </form>
          </div>
        </div>
      </div>
      <div style={{ width: '100%', marginBottom: '10px' }}>
        <iframe
          title="Google Maps Embed"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.5017351225647!2d86.85721547510981!3d23.586332378782714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f6e3fdd3ff9ebb%3A0x517a57e3f93c1807!2sKingsukh%20Guest%20House!5e0!3m2!1sen!2sin!4v1713372311419!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
}

export default Contact;
