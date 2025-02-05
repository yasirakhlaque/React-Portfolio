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
                <p className='about-para'>Computer Science student at Dr. Bhimrao Ambedkar University (Agra) on a mission to make web development faster and smarter.  My weapon of choice?  AI-powered tools and a passion for open source.  When I'm not coding, I'm probably exploring the latest tech or dreaming up new web experiences.</p>
                <button className="about-btn">
                    Let's Talk
                </button>
            </div>
        </div>
        </>
    )
}