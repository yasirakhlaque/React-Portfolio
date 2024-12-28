import './ProjectCard.css'

export default function ProjectCard({icon,name}){
    return(
        <>
        <div className="project-card" data-aos="fade-up-right">
            <div className="project-icon"><i className={`${icon}`}></i></div>
            <div className="project-name">{name}</div>
        </div>
        </>
    )
}