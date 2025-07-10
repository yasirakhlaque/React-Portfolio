import '../styles/About.css'
import { useContext } from 'react';
import { ThemeContext } from '../App';
// React Icons imports
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

export default function About() {
    const { theme } = useContext(ThemeContext);
    
    // Core skills to display based on resume
    const skills = [
        "React.js", "JavaScript", "HTML/CSS", "Node.js", 
        "Responsive Design", "UI/UX", "Git", "APIs", "MUI"
    ];

    return (
        <>
            <div className={`about ${theme}`} id="about">
                <div className="about-image" data-aos="zoom-in-down">
                    <img src="Images/yasir2.JPG" alt="Yasir Akhlaque" />
                </div>
                <div className="about-content" data-aos="zoom-in-left">
                    <h2>ABOUT ME</h2>
                    <h3>FRONTEND DEVELOPER</h3>
                    <p className='about-para'>
                        Hey I am Yasir Akhlaque, a Frontend Developer skilled in building interactive and scalable web applications using React.js. I'm passionate about open-source contributions and creating user-friendly interfaces. When I'm not collaborating with teams and integrating APIs, I'm exploring new technologies to enhance web development.
                    </p>
                    
                    <div className="skills-badges">
                        {skills.map((skill, index) => (
                            <span key={index} className="skill-badge">{skill}</span>
                        ))}
                    </div>
                    
                    <div className="about-social">
                        <a href="https://www.linkedin.com/in/yasirakhlaque" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin />
                        </a>
                        <a href="https://github.com/yasirakhlaque" target="_blank" rel="noopener noreferrer">
                            <FaGithub />
                        </a>
                        <a href="mailto:akhlaqueyasir28@gmail.com">
                            <FaEnvelope />
                        </a>
                    </div>
                    
                    <a href="/resume.pdf" download="YasirAkhlaque_Resume.pdf">
                        <button className="about-btn">
                            Download Resume
                        </button>
                    </a>
                </div>
            </div>
        </>
    )
}