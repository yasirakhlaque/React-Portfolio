import '../styles/LandingPage.css';
import { useContext, useEffect, useState, useRef } from 'react';
import { ThemeContext } from '../App';
import { FaGithub, FaLinkedin, FaChevronDown } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const LandingPage = () => {
  const { theme } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const navbarRef = useRef(null);
  
  useEffect(() => {
    setIsClient(true);
    
    // Handle clicks outside the navbar to close mobile menu
    const handleClickOutside = (e) => {
      if (navbarRef.current && 
          !navbarRef.current.contains(e.target) && 
          !e.target.classList.contains('menu-toggle') && 
          !e.target.parentElement?.classList.contains('menu-toggle')) {
        setMenuOpen(false);
      }
    };

    // Only add event listeners on client-side
    if (typeof window !== 'undefined') {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      // Only remove event listeners on client-side
      if (typeof window !== 'undefined') {
        document.removeEventListener('mousedown', handleClickOutside);
      }
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={`landing-page ${theme}`}>      
      {isClient && (
        <>
          <button 
            className="menu-toggle" 
            onClick={toggleMenu}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? "×" : "☰"}
          </button>
          
          <nav>
            <ul 
              className={`navbar ${menuOpen ? 'active' : ''}`}
              ref={navbarRef}
            >
              <li><a href="#about" onClick={() => setMenuOpen(false)}>ABOUT</a></li>
              <li><a href="#projects" onClick={() => setMenuOpen(false)}>PROJECTS</a></li>
              <li><a href="#contact" onClick={() => setMenuOpen(false)}>CONTACT</a></li>
              <li><a href="#skills" onClick={() => setMenuOpen(false)}>SKILLS</a></li>
              <li><a href="#resume" onClick={() => setMenuOpen(false)}>RESUME</a></li>
            </ul>
          </nav>
        </>
      )}
      
      <div className="content">
        <div className="headline-container" data-aos="zoom-out">
          <h1 className="main-headline">WEB DEV</h1>
          <div className="headline-shadow"></div>
          <p className="sub-headline">Front-end Development</p>
        </div>

        <div className="description-container">
          <div className="description-box left abt-para" data-aos="zoom-out">
            <p>
              Passionate web developer who loves to explore new technologies in web development and the new AI tools
            </p>
          </div>

          <div className="description-box right abt-para" data-aos="zoom-out">
            <p>
              Passionate web developer who loves to explore new technologies in web development and the new AI tools
            </p>
          </div>
        </div>

        <div className="profile-container">
          <div className="profile-image">
            <img src="Images/yasir5.png" alt="Profile" />
            <div className="image-overlay"></div>
          </div>
          <div className="profile-shadow"></div>
        </div>
        
        <div className="social-links">
          <a href="https://github.com/yasirakhlaque" className="social-link"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/yasirakhlaque" className="social-link"><FaLinkedin /></a>
          <a href="https://x.com/___Yas_bytes_" className="social-link"><FaXTwitter /></a>
        </div>
        
        <div className="scroll-indicator">
          <span>Scroll Down</span>
          <FaChevronDown />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
