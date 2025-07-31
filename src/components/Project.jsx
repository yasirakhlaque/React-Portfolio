import '../styles/Project.css'
import ProjectCard from './ProjectCard'
import { useContext, useState, useRef, useEffect } from 'react';
import { ThemeContext } from '../App';
import { FaReact, FaRobot, FaUser, FaChevronDown } from 'react-icons/fa';
import { projects } from '../lib/project';

export default function Project() {
    const { theme } = useContext(ThemeContext);

    return (
        <div
            className={`project ${theme}`}
            id="projects"
        >
            <h1
                className="project-h1"
                data-aos="fade-down"
                data-aos-duration="800"
            >
                PROJECTS
                <span className="project-h1-highlight"></span>
            </h1>

            <div className="project-cards">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="project-card-wrapper"
                        data-aos="fade-up"
                        data-aos-delay={index * 100}
                        data-aos-duration="800"
                    >
                        <ProjectCard
                            icon={project.icon}
                            name={project.name}
                            about={project.about}
                            technologies={project.technologies}
                            link={project.link}
                            github={project.github}
                            image={project.image}
                        />
                    </div>
                ))}
            </div>

            <div className="scroll-more">
                <span>Scroll for more</span>
                <div className="scroll-arrow">
                    <FaChevronDown />
                </div>
            </div>
        </div>
    );
}