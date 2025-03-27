import '../styles/Skills.css';
import { useContext } from 'react';
import { ThemeContext } from '../App';
import SkillCard from "./SkillCard";

export default function Skills() {
    const { theme } = useContext(ThemeContext);
    
    const skills = [
        { icon: "fa-brands fa-react", name: "React.js" },
        { icon: "fa-brands fa-js", name: "JavaScript" },
        { icon: "fa-brands fa-html5", name: "HTML" },
        { icon: "fa-brands fa-css3-alt", name: "CSS" },
        { icon: "fa-brands fa-node-js", name: "Node.js" },
        { icon: "fa-brands fa-github", name: "GitHub" },
        { icon: "fa-brands fa-git-alt", name: "Git" },
        { icon: "fa-solid fa-code", name: "APIs" }
    ];
    
    const technicalCategories = [
        {
            title: "Languages",
            items: ["HTML", "CSS", "JavaScript", "C"]
        },
        {
            title: "Libraries & Frameworks",
            items: ["React.js", "AOS", "Tailwind CSS"]
        },
        {
            title: "UI/UX",
            items: ["Component-based Architecture", "State Management", "API Integration"]
        },
        {
            title: "Testing & Debugging",
            items: ["Chrome DevTools", "Debugging Techniques"]
        }
    ];

    return (
        <>
            <div className={`skill ${theme}`} id="skills">
                <h1 className="skill-h1" data-aos="fade-down">
                    TECHNICAL <span className='skillset'>SKILLSET</span>
                </h1>
                
                <div className="skill-cards">
                    {
                        skills.map((skill, index) => (
                            <SkillCard 
                                key={index} 
                                icon={skill.icon} 
                                name={skill.name}
                                data-aos="zoom-in"
                                data-aos-delay={index * 100}
                            />
                        ))
                    }
                </div>
                
                <div className="technical-categories" data-aos="fade-up">
                    {technicalCategories.map((category, index) => (
                        <div className="category-card" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                            <h3 className="category-title">{category.title}</h3>
                            <div className="category-skills">
                                {category.items.map((item, i) => (
                                    <span className="category-skill-badge" key={i}>{item}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
