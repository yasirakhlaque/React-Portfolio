import './LandingPage.css';
import { useContext } from 'react';
import { ThemeContext } from '../App';

const LandingPage = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={`landing-page ${theme}`}>
      <nav>
        <ul className="navbar" data-aos="fade-down">
          <li><a href="#about">ABOUT</a></li>
          <li><a href="#projects">PROJECTS</a></li>
          <li><a href="#contact">CONTACT</a></li>
          <li><a href="#skills">SKILLS</a></li>
          <li><a href="#courses">COURSES</a></li>
        </ul>
      </nav>

      <div className="content">
        <h1 data-aos="zoom-out">WEB DEV</h1>

        <div className="description-box left" data-aos="zoom-out">
          <p>
            Passionate web developer who loves to explore new technologies in web development and the new AI tools
          </p>
        </div>

        <div className="description-box right" data-aos="zoom-out">
          <p>
            Passionate web developer who loves to explore new technologies in web development and the new AI tools
          </p>
        </div>

        <a href="/resume.pdf" download="resume.pdf"><button className="download-btn">DOWNLOAD RESUME</button></a>

        <div className="profile-image">
          <img src="Images/yasir1.png" alt="Profile" />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
