import './ProjectCard.css'
import { useContext } from 'react';
import { ThemeContext } from '../App';
import About from './About';

export default function ProjectCard({ icon, name, about, link }) {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <>
            <div className={`project-card ${theme}`} data-aos="fade-up-right">
                <div className="project-abt">
                    <div className="project-icon"><i className={`${icon}`}></i></div>
                    <div className="project-name">{name}</div>
                    <p className='project-card-para'>{about}</p>
                </div>
                <div className="options">
                    <div className="project-link"><a href={`${link}`}><button>LINK<i className="fa-solid fa-arrow-up-right-from-square"></i></button></a></div>
                </div>
            </div>
        </>
    )
}