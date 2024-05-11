import React, { useEffect, useRef } from 'react';
import './Counter.css';
import Icon1 from '../assets/booking.png'
import Icon2 from '../assets/customers.png'
const Counter = () => {
  const counterRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5 
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          startCounters();
          observer.unobserve(entry.target);
        }
      });
    }, options);
    if (counterRef.current) {
      observer.observe(counterRef.current);
    }
    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  const startCounters = () => {
    function counter(id, start, end, duration) {
      const obj = document.getElementById(id);
      let current = start;
      const range = end - start;
      const increment = end > start ? 1 : -1;
      const step = Math.abs(Math.floor(duration / range));
      const timer = setInterval(() => {
        current += increment;
        if ((increment > 0 && current >= end) || (increment < 0 && current <= end)) {
          current = end;
          clearInterval(timer);
        }
        obj.textContent = current > start ? current + '+' : current;
      }, step);
    }
    counter("count1", 1, 100, 1000); 
    counter("count2", 50, 150, 1000); 
  };

  return (
    <section ref={counterRef} className="counter-wrapper">
      <div className="counter-inner">
        <div className="main-container">
          <div className="row g-0">
            <div className="col-6 col-lg-6">
              <div className="py-5 text-center text-white">
                <div>
                 <img src={Icon1} className='counter-icon1'/>
                </div>
                <div className="py-2 count">
                  <span id="count1">1+</span>
                </div>
                <div className='text'>
                  Bookings Completed
                </div>
              </div>
            </div>
            <div className="col-6 col-lg-6">
              <div className="py-5 text-center text-white">
                <div>
                  <img src={Icon2} className='counter-icon2'/>
                </div>
                <div className="py-2 count">  
                  <span id="count2">50+</span>
                </div>
                <div className='text'>
                  Happy Customers
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Counter;
