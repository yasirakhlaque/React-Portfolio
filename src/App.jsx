import './App.css';
import { useEffect, useState, createContext } from 'react';
import About from './components/About';
import LandingPage from './components/LandingPage';
import Project from './components/Project';
import Skills from './components/Skills';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Resume from './components/Resume';
// React Icons imports
import { FaSun, FaMoon } from 'react-icons/fa';

// Create Theme Context
export const ThemeContext = createContext();

const App = () => {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');
  const [isAnimating, setIsAnimating] = useState(false);
  // Default theme is dark

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const toggleTheme = () => {
    setIsAnimating(true);
    
    // Start the animation first
    setTimeout(() => {
      setTheme((prevTheme) => {
        const newTheme = prevTheme === 'dark' ? 'light' : 'dark';
        localStorage.setItem('theme', newTheme);
        return newTheme;
      });
    }, 250); // Change theme halfway through animation
    
    // End animation after it completes
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`app ${theme}`}>
        <button className="theme-toggle" onClick={toggleTheme}>
          <div className={`icon-container ${isAnimating ? 'rolling' : ''}`}>
            {theme === 'dark' ? <FaSun className='sun'/> : <FaMoon className='moon'/>}
          </div>
        </button>
        <div id="home">
          <LandingPage />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="projects">
          <Project />
        </div>
        <div id="skills">
          <Skills />
        </div>
        <div id="resume">
          <Resume />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </div>
      <Footer />
    </ThemeContext.Provider>
  );
};

export default App;