import '../styles/LandingPage.css';
import { useContext, useEffect, useState, useRef } from 'react';
import { ThemeContext } from '../App';

const LandingPage = () => {
  const { theme } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const navbarRef = useRef(null);
  
  useEffect(() => {
    // Set client-side flag for SSR compatibility
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
      <div className="animated-background">
        <div className="particle-container">
          {[...Array(15)].map((_, index) => (
            <div 
              key={index} 
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${Math.random() * 10 + 10}s`
              }}
            />
          ))}
        </div>
      </div>
      
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
            <img src="Images/yasir1.png" alt="Profile" />
            <div className="image-overlay"></div>
          </div>
          <div className="profile-shadow"></div>
        </div>
        
        <div className="social-links">
          <a href="#" className="social-link"><i className="fab fa-github"></i></a>
          <a href="#" className="social-link"><i className="fab fa-linkedin"></i></a>
          <a href="#" className="social-link"><i className="fab fa-twitter"></i></a>
        </div>
        
        <div className="scroll-indicator">
          <span>Scroll Down</span>
          <i className="fas fa-chevron-down"></i>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
