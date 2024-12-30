import './SkillCard.css';
import { useContext } from 'react';
import { ThemeContext } from '../App';

export default function SkillCard({ icon }) {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <>
            <div className={`skill-card ${theme}`} data-aos="flip-left">
                <div className="icon">
                    <i className={`${icon}`}></i>
                </div>
            </div>
        </>
    );
}
