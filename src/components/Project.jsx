import './Project.css'
import ProjectCard from './ProjectCard'
import { useContext } from 'react';
import { ThemeContext } from '../App';

export default function Project() {
    const { theme, toggleTheme } = useContext(ThemeContext);

    let project = [
        {
            icon: "fa-solid fa-calendar",
            name: "Event Managing Calendar"
        },
        {
            icon: "fa-regular fa-comment",
            name: "Doraemon Bot"
        },
    ]

    return (
        <>
            <div className={`project ${theme}`}>
                <h1 className="project-h1">PROJECTS</h1>
                <div className="project-cards">
                    {
                        project.map((project, index) => (
                            <ProjectCard key={index} icon={project.icon} name={project.name}/>
                        ))
                    }
                </div>
            </div>
        </>
    )
}