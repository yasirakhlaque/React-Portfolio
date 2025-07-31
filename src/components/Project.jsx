import '../styles/Project.css'
import ProjectCard from './ProjectCard'
import { useContext, useState, useRef, useEffect } from 'react';
import { ThemeContext } from '../App';
import { FaReact, FaRobot, FaUser, FaChevronDown } from 'react-icons/fa';

export default function Project() {
    const { theme } = useContext(ThemeContext);
    const [activeIndex, setActiveIndex] = useState(null);

    const projects = [
        {
            icon: FaReact,
            name: "React E-Commerce",
            about: "Developed a fully functional e-commerce platform using React.js with features like cart management, dynamic UI, and state management using Context API and reducers.",
            link: "https://react-e-commerce-kappa-six.vercel.app/",
            github: "https://github.com/yasirakhlaque/React-E-Commerce",
            technologies: ["React.js", "Context API", "Dynamic UI"]
        },
        {
            icon: FaRobot,
            name: "Doraemon Bot",
            about: "Built a Doraemon-themed chatbot using React.js and Gemini API with an engaging UI for interactive conversations and responsive design for cross-device compatibility.",
            link: "https://doraemon-bot.vercel.app/",
            github: "https://github.com/yasirakhlaque/doraemon-bot",
            technologies: ["React.js", "GeminiAPI", "Responsive Design"]
        },
        {
            icon: FaUser,
            name: "Personal Portfolio",
            about: "Developed a fully responsive portfolio using React.js with AOS (Animate On Scroll) library for better UX and user-friendly interface to showcase skills and projects.",
            link: "#",
            github: "https://github.com/yasir-akhlaq/portfolio",
            technologies: ["React.js", "AOS", "Responsive Design"]
        },
    ];

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
                        onMouseEnter={() => setActiveIndex(index)}
                        onMouseLeave={() => setActiveIndex(null)}
                        style={{
                            transform: activeIndex === index ? 'scale(1.03)' : 'scale(1)',
                            zIndex: activeIndex === index ? 2 : 1
                        }}
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