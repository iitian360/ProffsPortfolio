import React from 'react'
import './Nav.css'
import HomePic from '../Images/HomePic.png'
import { FaInstagram, FaFacebook, FaGoogle, FaTwitter } from 'react-icons/fa'

const Home = () => {
  return (
    <section id="home" className='home_section'> 
      <div className="home_container">
        <div className="content_wrapper">
          <img 
            src={HomePic}
            alt="Website welcome banner"
            className="welcome_image"
          />
          <div className="text_section">
            <h1 className="fancy-name">
              <span className="first-name">Ruchi Chawla</span>
              <span className="last-name">
                <span className="name-text">Associate Professor | Pharmaceutical Engineering IIT (BHU) Varanasi</span>
              </span>
            </h1>
            <div className="social-icons">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon"><FaInstagram /></a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon"><FaFacebook /></a>
              <a href="https://google.com" target="_blank" rel="noopener noreferrer" className="social-icon"><FaGoogle /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon"><FaTwitter /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
