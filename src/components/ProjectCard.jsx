import "../styles/ProjectCard.css";
import { useContext } from "react";
import { ThemeContext } from "../App";

export default function ProjectCard({ icon, name, about, technologies, link, github, ...props }) {
    const { theme } = useContext(ThemeContext);
    
    return (
        <div 
            className={`project-card ${theme}`}
            data-aos="fade-up"
            data-aos-duration="800"
        >
            <div className="project-content">
                <div className="project-icon"><i className={`${icon}`}></i></div>
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
                    <i className="fa-brands fa-github"></i>
                </a>
            )}
            
            <div className="options">
                <a href={link} target="_blank" rel="noopener noreferrer">
                    <button className="project-link-btn">
                        Visit 
                        <i className="fa-solid fa-arrow-up-right-from-square"></i>
                    </button>
                </a>
            </div>
        </div>
    );
}