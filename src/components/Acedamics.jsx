import React, { useEffect, useState } from "react";
import "./Nav.css";
import HomePic from "../Images/HomePic.png";
import { publicationsData } from "../assets/Data.js"; // adjust the path if needed
import mainImg from "../Images/HomePic.png";
import { FaInstagram, FaFacebook, FaGoogle, FaTwitter } from "react-icons/fa";

const Acedamics = () => {
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

    const element = document.getElementById("acedamics");
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
    <section id="acedamics" className={`section ${isVisible ? "animate" : ""}`}>
      <div className="section-container">
        <div className="about-content">
          <div className="about-text">
            <h2>Our Publications</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className="content_wrapper">
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
          <div className="about-image">
            <img src={HomePic} alt="Ruchi Chavala" className="about-img" />
          </div>
        </div>

        <div className="publications-grid">
          {publicationsData.map((pub) => (
            <div key={pub.id} className="publication-card">
              <div className="publication-header">
                <img src={mainImg} alt={pub.title} />
                <div className="publication-meta">
                  <p className="publication-author">
                    By {pub.author}{" "}
                    <span className="publication-date">{pub.date}</span>{" "}
                  </p>
                </div>
              </div>

              <h3 className="publication-title">{pub.title}</h3>
              <p className="publication-desc">{pub.desc}</p>
              <a
                href={pub.link}
                target="_blank"
                rel="noopener noreferrer"
                className="publication-btn"
              >
                Read Paper...
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Acedamics;
