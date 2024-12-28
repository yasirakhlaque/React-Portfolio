import React from 'react';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <nav>
        <ul className="navbar" data-aos="fade-down">
          <li><a href="#home">HOME</a></li>
          <li><a href="#about">ABOUT</a></li>
          <li><a href="#contact">CONTACT</a></li>
          <li><a href="#skills">SKILLS</a></li>
          <li><a href="#achievement">ACHIEVEMENT</a></li>
        </ul>
      </nav>

      <div className="content">
        <h1 data-aos="zoom-out">WEB DEV</h1>
        
        <div className="description-box left" data-aos="zoom-out">
          <p>Passionate web developer who loves to explore new technologies in web development and the new AI tools</p>
        </div>
        
        <div className="description-box right" data-aos="zoom-out">
          <p>Passionate web developer who loves to explore new technologies in web development and the new AI tools</p>
        </div>

        <button className="download-btn">DOWNLOAD RESUME</button>

        <div className="profile-image" >
          <img src="Images/yasir1.png" alt="Profile" />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;