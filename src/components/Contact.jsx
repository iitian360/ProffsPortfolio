import React, { useEffect, useState } from 'react'
import './Nav.css'
import HomePic from '../Images/HomePic.png'
import ContactCards from './ContactCard';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('contact');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <section id="contact" className={`section ${isVisible ? 'animate' : ''}`}>
      <div className="section-container">
        <div className="about-content">
          <div className="about-text">
            <h2>Contact</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
          <div className="about-image">
            <img 
              src={HomePic}
              alt="Ruchi Chavala"
              className="about-img"
            />
          </div>
        </div>
        <ContactCards/>
      </div>
    </section>
  )
}

export default Contact
