import "../styles/ProjectCard.css";
import { useContext } from "react";
import { ThemeContext } from "../App";
// React Icons imports
import { FaGithub, FaArrowUpRightFromSquare } from 'react-icons/fa6';

export default function ProjectCard({ icon: IconComponent, name, about, technologies, link, github, ...props }) {
    const { theme } = useContext(ThemeContext);
    
    return (
        <div 
            className={`project-card ${theme}`}
            data-aos="fade-up"
            data-aos-duration="800"
        >
            <div className="project-content">
                <div className="project-icon"><IconComponent /></div>
                <div className="project-name">{name}</div>
                <p className="project-card-para">{about}</p>
                
                {technologies && (
                    <div className="project-technologies">
                        {technologies.map((tech, index) => (
                            <span key={index} className="tech-badge">{tech}</span>
                        ))}
                    </div>
                )}
            </div>
            
            {github && (
                <a href={github} target="_blank" rel="noopener noreferrer" className="github-btn" title="View Code on GitHub">
                    <FaGithub />
                </a>
            )}
            
            <div className="options">
                <a href={link} target="_blank" rel="noopener noreferrer">
                    <button className="project-link-btn">
                        Visit 
                        <FaArrowUpRightFromSquare />
                    </button>
                </a>
            </div>
        </div>
    );
}