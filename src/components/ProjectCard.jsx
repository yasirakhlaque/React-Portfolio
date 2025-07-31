import "../styles/ProjectCard.css";
import { useContext, useState } from "react";
import { ThemeContext } from "../App";
import { FaGithub, FaArrowUpRightFromSquare } from 'react-icons/fa6';

export default function ProjectCard({ icon: IconComponent, name, about, technologies, link, github }) {
    const { theme } = useContext(ThemeContext);
    const [projectDetails, setProjectDetails] = useState(null);

    return (
        <>
            <div
                className={`project-card ${theme}`}
                data-aos="fade-up"
                data-aos-duration="800"
            >
                <div className="project-content">
                    <div className="project-icon"><IconComponent /></div>
                    <div onClick={() => setProjectDetails(true)}>
                        <div className="project-name">{name}</div>
                        <p className="project-card-para">{about}</p>
                    </div>

                    {technologies && (
                        <div className="project-technologies">
                            {technologies.map((tech, index) => (
                                <span key={index} className="tech-badge">{tech}</span>
                            ))}
                        </div>
                    )}
                </div>

                {github && (
                    <a href={github} target="_blank" rel="noopener noreferrer" className="github-btn" title="View Code on GitHub">
                        <FaGithub />
                    </a>
                )}

                <div className="options">
                    <a href={link} target="_blank" rel="noopener noreferrer">
                        <button className="project-link-btn">
                            Visit
                            <FaArrowUpRightFromSquare />
                        </button>
                    </a>
                </div>
            </div>
            <div className="project-details-card">
                {projectDetails && <DetailesProjectCard />}
            </div>
        </>
    );
}

function DetailesProjectCard() {
    return (
        <div className="project-details">

        </div>
    )
}