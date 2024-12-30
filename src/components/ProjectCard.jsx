import './ProjectCard.css'
import { useContext } from 'react';
import { ThemeContext } from '../App';

export default function ProjectCard({icon,name}){
    const { theme, toggleTheme } = useContext(ThemeContext);
    return(
        <>
        <div className={`project-card ${theme}`} data-aos="fade-up-right">
            <div className="project-icon"><i className={`${icon}`}></i></div>
            <div className="project-name">{name}</div>
        </div>
        </>
    )
}