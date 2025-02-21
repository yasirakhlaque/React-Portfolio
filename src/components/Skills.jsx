import '../styles/Skills.css';
import { useContext } from 'react';
import { ThemeContext } from '../App';
import SkillCard from "./SkillCard";

export default function Skills() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    let icons = [
        { icon: "fa-brands fa-js" },
        { icon: "fa-brands fa-react" },
        { icon: "fa-brands fa-html5" },
        { icon: "fa-brands fa-css" },
        { icon: "fa-brands fa-github" },
        { icon: "fa-brands fa-git-alt" },
        { icon: "fa-brands fa-node" },
    ];

    return (
        <>
            <div className={`skill ${theme}`}>
                <h1 className="skill-h1">PROFESSIONAL <span className='skillset'>SKILLSET</span></h1>
                <div className="skill-cards" >
                {
                    icons.map((icon, index) => (
                        <SkillCard key={index} icon={icon.icon} />
                    ))
                }
                </div>
            </div>
        </>
    );
}
