import '../styles/Project.css'
import ProjectCard from './ProjectCard'
import { useContext, useState, useRef, useEffect } from 'react';
import { ThemeContext } from '../App';

export default function Project() {
    const { theme } = useContext(ThemeContext);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [activeIndex, setActiveIndex] = useState(null);
    const containerRef = useRef(null);
    
    useEffect(() => {
        const handleMouseMove = (e) => {
            if (containerRef.current) {
                const { left, top, width, height } = containerRef.current.getBoundingClientRect();
                const x = ((e.clientX - left) / width) - 0.5;
                const y = ((e.clientY - top) / height) - 0.5;
                setMousePosition({ x, y });
            }
        };
        
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const projects = [
        {
            icon: "fa-brands fa-react",
            name: "React E-Commerce",
            about: "Developed a fully functional e-commerce platform using React.js with features like cart management, dynamic UI, and state management using Context API and reducers.",
            link: "https://react-e-commerce-kappa-six.vercel.app/",
            github: "https://github.com/yasirakhlaque/React-E-Commerce",
            technologies: ["React.js", "Context API", "Dynamic UI"]
        },
        {
            icon: "fa-solid fa-robot",
            name: "Doraemon Bot",
            about: "Built a Doraemon-themed chatbot using React.js and Gemini API with an engaging UI for interactive conversations and responsive design for cross-device compatibility.",
            link: "https://doraemon-bot.vercel.app/",
            github: "https://github.com/yasirakhlaque/doraemon-bot",
            technologies: ["React.js", "GeminiAPI", "Responsive Design"]
        },
        {
            icon: "fa-solid fa-user",
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
            ref={containerRef}
            style={{
                backgroundPosition: `${50 + mousePosition.x * 10}% ${50 + mousePosition.y * 10}%`
            }}
        >
            <div className="project-particles">
                {[...Array(10)].map((_, index) => (
                    <div 
                        key={index}
                        className="project-particle"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            width: `${Math.random() * 6 + 2}px`,
                            height: `${Math.random() * 6 + 2}px`,
                            animationDuration: `${Math.random() * 20 + 10}s`,
                            animationDelay: `${Math.random() * 5}s`
                        }}
                    />
                ))}
            </div>
            
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
                        <div 
                            className={`card-spotlight ${activeIndex === index ? 'active' : ''}`}
                            style={{
                                background: `radial-gradient(circle at ${mousePosition.x * 100 + 50}% ${mousePosition.y * 100 + 50}%, var(--accent-primary-transparent), transparent 70%)`
                            }}
                        />
                    </div>
                ))}
            </div>
            
            <div className="scroll-more">
                <span>Scroll for more</span>
                <div className="scroll-arrow">
                    <i className="fa-solid fa-chevron-down"></i>
                </div>
            </div>
            
            <div className="project-circle"></div>
            <div className="project-circle circle-2"></div>
        </div>
    );
}