import "./ProjectCard.css";
import { useContext } from "react";
import { ThemeContext } from "../App";

export default function ProjectCard({ icon, name, about, link }) {
    const { theme } = useContext(ThemeContext);
    
    return (
        <div className={`project-card ${theme}`} data-aos="fade-up-right">
            <div className="project-content">
                <div className="project-icon"><i className={`${icon}`}></i></div>
                <div className="project-name">{name}</div>
                <p className="project-card-para">{about}</p>
            </div>
            <div className="options">
                <a href={link} target="_blank" rel="noopener noreferrer">
                    <button className="project-link-btn">Visit <i className="fa-solid fa-arrow-up-right-from-square"></i></button>
                </a>
            </div>
        </div>
    );
}