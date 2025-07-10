import '../styles/SkillCard.css';
import { useContext } from 'react';
import { ThemeContext } from '../App';

export default function SkillCard({ icon: IconComponent, name, ...props }) {
    const { theme } = useContext(ThemeContext);

    return (
        <div
            className={`skill-card ${theme}`}
            data-aos="flip-left"
            data-aos-duration="800"
        >
            <div className="icon">
                <IconComponent size={48} className="icon"/>
                <div className="skill-name">{name}</div>
            </div>
        </div>
    );
}
