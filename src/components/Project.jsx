import '../styles/Project.css'
import ProjectCard from './ProjectCard'
import { useContext } from 'react';
import { ThemeContext } from '../App';

export default function Project() {
    const { theme, toggleTheme } = useContext(ThemeContext);

    let project = [
        {
            icon: "fa-solid fa-calendar",
            name: "Event Managing Calendar",
            about:"A place where you can list your upcoming events"
        },
        {
            icon: "fa-regular fa-comment",
            name: "Doraemon Bot",
            about:"A bot which chats like doraemon",
            link:"https://doraemon-bot.vercel.app/"
        },
        {
            icon: "fa-solid fa-basket-shopping",
            name: "React Ecommerce",
            about:"A E-Commerce Website Made using react js",
            link:"https://react-e-commerce-kappa-six.vercel.app/"
        },
    ]

    return (
        <>
            <div className={`project ${theme}`}>
                <h1 className="project-h1">PROJECTS</h1>
                <div className="project-cards">
                    {
                        project.map((project, index) => (
                            <ProjectCard key={index} icon={project.icon} name={project.name} about={project.about} link={project.link}/>
                        ))
                    }
                </div>
            </div>
        </>
    )
}