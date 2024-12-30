import './App.css';
import { useEffect, useState, createContext } from 'react';
import About from './components/About';
import Courses from './components/Courses';
import LandingPage from './components/LandingPage';
import Project from './components/Project';
import Skills from './components/Skills';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Contact from './components/Contact';

// Create Theme Context
export const ThemeContext = createContext();

const App = () => {
  const [theme, setTheme] = useState('dark'); // Default theme is dark

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
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
        <div id="courses">
          <Courses />
        </div>
        <div id="contact">
          <Contact/>
        </div>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
