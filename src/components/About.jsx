import './About.css'
import { useContext } from 'react';
import { ThemeContext } from '../App';

export default function About(){

    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <>
        <div className={`about ${theme}`}>
            <div className="about-image" data-aos="zoom-in-down">
                <img src="Images/yasir2.JPG" alt="" />
            </div>
            <div className="about-content" data-aos="zoom-in-left">
                <h2>ABOUT ME</h2>
                <h3>DEVELOPER</h3>
                <p className='about-para'>Student at Dr. Bhimrao Ambedkar University pursuing Bachelors of Engineering from Computer Science . Loves website development and explore new AI tools that helps in web development and are time saving.</p>
                <button className="about-btn">
                    Let's Talk
                </button>
            </div>
        </div>
        </>
    )
}