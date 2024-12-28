import './CourseCard.css'

export default function CourseCard({platform,name,date}){
    return (
        <>
        <div className="course-box" data-aos="fade-down-right">
            <h1 className="course-h1">{platform}</h1>
            <h3 className="course-title">{name}</h3>
            <h4>{date}</h4>
        </div>
        </>
    )
}