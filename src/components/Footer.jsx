import React from "react";
import { FaInstagram, FaFacebook, FaGoogle, FaTwitter } from 'react-icons/fa'



const Footer = () => {
  return (
    <footer className="footer-container">
      {/* White section */}
      <div className="footer-top">
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/research">Research</a>
            </li>
            <li>
              <a href="/publications">Publications</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact</h4>
          <p>Prof. John Doe</p>
          <p>Email: johndoe@university.edu</p>
          <p>Room 205, Science Block</p>
        </div>

        <div className="footer-section">
          <h4>Newsletter</h4>
          <form className="newsletter-form">
            <input type="email" placeholder="Your email" />
            <button type="submit">Subscribe</button>
          </form>
          <div className="social-icons">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FaInstagram />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FaFacebook />
            </a>
            <a
              href="https://google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FaGoogle />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      {/* Yellow branding section */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Prof. John Doe | All rights reserved</p>
        <p className="university-name">IIT BHU Varanasi</p>
      </div>
    </footer>
  );
};

export default Footer;
