import './ProjectCard.css'
import { useContext } from 'react';
import { ThemeContext } from '../App';

export default function ProjectCard({ icon, name }) {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <>
            <div className={`project-card ${theme}`} data-aos="fade-up-right">
                <div className="project-abt">
                    <div className="project-icon"><i className={`${icon}`}></i></div>
                    <div className="project-name">{name}</div>
                </div>
                <div className="options">
                    <div className="source"><button>SOURCE<i className="fa-regular fa-folder-open"></i></button></div>
                    <div className="project-link"><button>LINK<i className="fa-solid fa-arrow-up-right-from-square"></i></button></div>
                </div>
            </div>
        </>
    )
}