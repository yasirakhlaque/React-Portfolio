import './App.css';
import { useEffect } from 'react';
import About from './components/About';
import Courses from './components/Courses';
import LandingPage from './components/LandingPage';
import Project from './components/Project';
import Skills from './components/Skills';
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {
  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])
  return (
    <>
      <LandingPage />
      <About />
      <Project />
      <Skills />
      <Courses />
    </>
  );
};

export default App;