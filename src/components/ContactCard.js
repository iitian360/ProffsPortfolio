import React from 'react';
import { FaUniversity} from 'react-icons/fa'



const ContactCards = () => {
  return (
    <div className="contact-container">
      <div className="contact-card">
        <div className="card-icon">
                <FaUniversity />
        </div>
        <div className="text">
          <h3>Email</h3>
          <p>rchawla.phe@iitbhu.ac.in</p>
        </div>
      </div>

      <div className="contact-card">
        <div className="card-icon">
                <FaUniversity />
        </div>
        <div className="text">
          <h3>Phone</h3>
          <p>+91 9336077707</p>
        </div>
        <button className="card-button">Call Now</button>
      </div>

      <div className="contact-card">
        <div className="card-icon">
                <FaUniversity />
        </div>
        <div className="text">
          <h3>Address</h3>
          <p>123 Street, City, India</p>
        </div>
        <button className="card-button">Get Directions</button>
      </div>
    </div>
  );
};

export default ContactCards;
