import '../styles/CourseCard.css'
import { useContext } from 'react';
import { ThemeContext } from '../App';

export default function CourseCard({platform,name,date}){
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <>
        <div className={`course-box ${theme}`} data-aos="fade-down-right">
            <h1 className="course-h1">{platform}</h1>
            <h3 className="course-title">{name}</h3>
            <h4>{date}</h4>
        </div>
        </>
    )
}