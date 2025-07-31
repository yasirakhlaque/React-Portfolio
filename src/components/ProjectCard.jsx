import "../styles/ProjectCard.css";
import { useContext, useState } from "react";
import { ThemeContext } from "../App";
import { FaGithub, FaArrowUpRightFromSquare } from 'react-icons/fa6';
import { RxCross2 } from "react-icons/rx";

export default function ProjectCard({ icon: IconComponent, name, about, technologies, link, github, image }) {
    const { theme } = useContext(ThemeContext);
    const [projectDetails, setProjectDetails] = useState(false);

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
                {projectDetails && <DetailesProjectCard icon={IconComponent} name={name} about={about} technologies={technologies} link={link} github={github} image={image} setProjectDetails={setProjectDetails} />}
            </div>
        </>
    );
}

function DetailesProjectCard({ icon: IconComponent, name, about, technologies, link, github, image, setProjectDetails }) {
    const { theme } = useContext(ThemeContext);
    
    return (
        <div className={`project-details-overlay ${theme}`}>
            <div className={`project-details-modal ${theme}`}>
                <div className="project-details-header">
                    <div className="project-details-title">
                        <IconComponent className="project-details-icon" />
                        <h2>{name}</h2>
                    </div>
                    <button className="close-btn" onClick={() => setProjectDetails(false)}>
                        <RxCross2 />
                    </button>
                </div>
                
                <div className="project-details-content">
                    <div className="project-image-section">
                        <div className="project-image-container">
                            <img src={image} alt={name} className="project-image" />
                        </div>
                    </div>
                    
                    <div className="project-info-section">
                        <div className="project-description">
                            <h3>About This Project</h3>
                            <p>{about}</p>
                        </div>
                        
                        {technologies && (
                            <div className="project-tech-section">
                                <h3>Technologies Used</h3>
                                <div className="tech-badges-grid">
                                    {technologies.map((tech, index) => (
                                        <span key={index} className="tech-badge-detailed">{tech}</span>
                                    ))}
                                </div>
                            </div>
                        )}
                        
                        <div className="project-actions">
                            {link && (
                                <a href={link} target="_blank" rel="noopener noreferrer" className="action-btn primary">
                                    <FaArrowUpRightFromSquare />
                                    Live Demo
                                </a>
                            )}
                            {github && (
                                <a href={github} target="_blank" rel="noopener noreferrer" className="action-btn secondary">
                                    <FaGithub />
                                    View Code
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}