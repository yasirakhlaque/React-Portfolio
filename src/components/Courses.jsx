import CourseCard from './CourseCard';
import './Courses.css';

export default function Courses() {

    let courses = [
        {
            platform: "GREAT LEARNING",
            name: "Prompt Engineering for ChatGPT",
            date: "May-2024"
        },
        {
            platform: "SOLOLEARN",
            name: "Front-end for Beginners",
            date: "Sept-2024"
        },
        {
            platform: "SOLOLEARN",
            name: "Introduction to JavaScript",
            date: "Oct-2024"
        },
        {
            platform: "TCS iON",
            name: "Communication Skills",
            date: "May-2024"
        },
    ];

    return (
        <>
            <div className="course">
                <h1 className="course-h1">COURSES AND <span className='skillset'>CERTIFICATIONS</span></h1>
                <div className="course-cards">
                    {
                        courses.map((course, index) => (
                            <CourseCard
                                key={index}
                                platform={course.platform}
                                name={course.name}
                                date={course.date}
                            />
                        ))
                    }
                </div>
            </div>
        </>
    );
}
