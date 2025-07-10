import '../styles/Skills.css';
import { useContext } from 'react';
import { ThemeContext } from '../App';
import SkillCard from "./SkillCard";
import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaGithub, FaGitAlt } from 'react-icons/fa';
import { IoLogoJavascript,IoPrism } from 'react-icons/io5';
import { MdApi } from 'react-icons/md';
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";

export default function Skills() {
    const { theme } = useContext(ThemeContext);

    const skills = [
        { icon: FaReact, name: "React.js" },
        { icon: IoLogoJavascript, name: "JavaScript" },
        { icon: FaHtml5, name: "HTML" },
        { icon: FaCss3Alt, name: "CSS" },
        { icon: FaNodeJs, name: "Node.js" },
        { icon: FaGithub, name: "GitHub" },
        { icon: FaGitAlt, name: "Git" },
        { icon: MdApi, name: "APIs" },
        { icon: RiTailwindCssFill, name: "Tailwind CSS" },
        { icon: RiNextjsFill, name: "Next.js" },
        { icon: IoPrism, name: "Prisma" },
    ];

    const technicalCategories = [
        {
            title: "Languages",
            items: ["HTML", "CSS", "JavaScript", "TypeScript", "C"]
        },
        {
            title: "Libraries & Frameworks",
            items: ["React.js", "Next.js", "AOS", "Tailwind CSS"]
        },
        {
            title: "UI/UX",
            items: ["Component-based Architecture", "State Management", "API Integration"]
        },
        {
            title: "Testing & Debugging",
            items: ["Chrome DevTools", "Debugging Techniques"]
        },
        {
            title: "Backend & Database",
            items: ["Prisma", "MySQL"]
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
