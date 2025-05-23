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

// Create Theme Context
export const ThemeContext = createContext();

const App = () => {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');
 // Default theme is dark

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const toggleTheme = () => {
  setTheme((prevTheme) => {
    const newTheme = prevTheme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', newTheme);
    return newTheme;
  });

  const icon = document.querySelector('.theme-toggle i');
  if (icon) {
    icon.style.animation = 'none';
    icon.offsetHeight;
    icon.style.animation = 'roll 0.5s ease 1';
  }
};

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`app ${theme}`}>
        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === 'dark' ? <i className="fa-solid fa-sun"></i> : <i className="fa-solid fa-moon"></i>}
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
