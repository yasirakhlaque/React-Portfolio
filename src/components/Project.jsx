import './Project.css'
import ProjectCard from './ProjectCard'

export default function Project() {

    let project = [
        {
            icon: "fa-solid fa-calendar",
            name: "Event Managing Calendar"
        },
        {
            icon: "fa-regular fa-comment",
            name: "Doraemon Bot"
        },
    ]

    return (
        <>
            <div className="project">
                <h1 className="project-h1">PROJECTS</h1>
                <div className="project-cards">
                    {
                        project.map((project, index) => (
                            <ProjectCard key={index} icon={project.icon} name={project.name}/>
                        ))
                    }
                </div>
            </div>
        </>
    )
}