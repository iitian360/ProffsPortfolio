import React, { useEffect, useState } from 'react'
import './Nav.css'
// import HomePic from '../Images/HomePic.png'
import { FaUniversity, FaGraduationCap, FaUserTie, FaMicroscope, FaBook } from 'react-icons/fa'
import { FaPeopleGroup } from "react-icons/fa6";

import lab1 from '../Images/lab1.jpg';


const About = () => {
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

    const element = document.getElementById('about');
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
    <section id="about" className={`section ${isVisible ? 'animate' : ''}`}>
      <div className="about-container">
        <div className="about-top-section">
          <div className="about-image">
            <img 
              src={lab1}
              alt="Ruchi Chawla"
              className="about-img"
            />
          </div>
          <div className="about-text">
            <h2>About Lab</h2>
            <p>Our lab at the Department of Pharmaceutical Engineering & Technology, IIT(BHU), Varanasi, focuses on applying nanotechnology to solve critical health problems. We design and evaluate advanced drug delivery systems, such as nanocarriers and nanoscaffolds, primarily targeting treatments for diseases like Alzheimer's and lung cancer. Our research translates pharmaceutical innovations into potential therapeutic applications.</p>
          </div>
        </div>
        
        <div className="about-cards-container">
          <div className="about-cards">
            <div className="about-card">
              <div className="card-icon">
                <FaUniversity />
              </div>
              <h3>Department</h3>
              <p>Department of Pharmaceutical Engineering</p>
            </div>
            <div className="about-card">
              <div className="card-icon">
                <FaGraduationCap />
              </div>
              <h3>Institution</h3>
              <p>Indian Institute of Technology (BHU) Varanasi</p>
            </div>
            <div className="about-card">
              <div className="card-icon">
                <FaUserTie />
              </div>
              <h3>Position</h3>
              <p>Associate Professor</p>
            </div>
            <div className="about-card">
              <div className="card-icon">
                <FaMicroscope />
              </div>
              <h3>Research Focus</h3>
              <p>Pharmaceutical Engineering and Drug Delivery Systems</p>
            </div>
            <div className="about-card">
              <div className="card-icon">
              <FaPeopleGroup />
              </div>
              <h3>Lab members</h3>
              <p>10+ years of teaching and research experience</p>
            </div>
            <div className="about-card">
              <div className="card-icon">
                <FaBook />
              </div>
              <h3>Publications</h3>
              <p>Multiple research papers in reputed journals</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
