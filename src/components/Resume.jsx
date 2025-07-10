import '../styles/Resume.css';
import { useContext } from 'react';
import { ThemeContext } from '../App';
// React Icons imports
import {
    FaBriefcase, FaGraduationCap, FaCertificate, FaRobot, FaChalkboardTeacher, FaTrophy, FaAward, FaHandsHelping, FaMedal, FaUsers, FaCodeBranch, FaLink, FaDownload
} from 'react-icons/fa';

export default function Resume() {
    const { theme } = useContext(ThemeContext);

    const experiences = [
        {
            title: "SOCIAL WINTER OF CODE CONTRIBUTOR",
            period: "01/2023 - Present",
            points: [
                "Contributed to 3+ open-source projects with 35 merged PRs.",
                "Worked on frontend optimization and UI improvements."
            ],
            link: "https://certificate.givemycertificate.com/c/6d35c046-b285-42c7-93a2-bd28e0e0e141",
            icon: FaCodeBranch
        },
        {
            title: "VOLUNTEER IN THE GEN AI CAMPAIGN",
            period: "10/2024 - 11/2024",
            points: [
                "Assisted 50+ participants in completing the AI campaign successfully.",
                "Provided learning resources and technical guidance."
            ],
            link: "https://verification.givemycertificate.com/v/73592c61-a9d3-48fc-b6ad-7acb870bbfc6",
            icon: FaRobot
        },
        {
            title: "Web Development Bootcamp Volunteer & Speaker",
            period: "01/2025 - 02/2025",
            points: [
                "Served as a volunteer in a one-month-long Web Development Bootcamp at college.",
                "Delivered a 3-day session on CSS, teaching core concepts, Flexbox, Grid, and animations.",
                "Guided participants on best practices in frontend development."
            ],
            link: "#",
            icon: FaChalkboardTeacher
        }
    ];

    const achievements = [
        {
            title: "Selected among top 16 participants in TalentHunt@IET competition.",
            icon: FaTrophy
        },
        {
            title: "Led team to selection in the internal hackathon of Smart India Hackathon (SIH).",
            icon: FaUsers
        },
        {
            title: "Finished in top 5 of GDG IGC campus Gen AI campaign completions.",
            icon: FaAward
        },
        {
            title: "Active volunteer in Gen AI study jam (GDG IGC campus).",
            icon: FaHandsHelping
        },
        {
            title: "Finished at 19 rank in Social Winter of Code among 3000+ Participants.",
            icon: FaMedal
        },
        {
            title: "Participant in HackByte 3.0, contributed as Frontend Developer on a MERN stack project.",
            icon: FaMedal
        },
    ];

    const certifications = [
        {
            title: "Prompt Engineering for ChatGPT",
            provider: "Great Learning"
        },
        {
            title: "Human Computer Interaction (In English)",
            provider: "NPTEL"
        },
        {
            title: "Javascript Intermediate",
            provider: "Sololearn"
        },
        {
            title: "Communication Skills",
            id: "91306-26344843-1016",
            provider: "TCS iON"
        }
    ];

    return (
        <div className={`resume ${theme}`} id="resume">
            <h1 className="resume-title" data-aos="fade-down">RESUME</h1>

            <div className="resume-container">
                <div className="resume-section experience-section" data-aos="fade-up">
                    <h2 className="section-title">
                        <FaBriefcase />
                        EXPERIENCE
                    </h2>

                    <div className="timeline">
                        {experiences.map((exp, index) => (
                            <div className="timeline-item" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                                <div className="timeline-icon">
                                    <exp.icon />
                                </div>
                                <div className="timeline-content">
                                    <div className="timeline-header">
                                        <h3>{exp.title}</h3>
                                        <span className="timeline-period">{exp.period}</span>
                                    </div>
                                    <ul className="timeline-details">
                                        {exp.points.map((point, i) => (
                                            <li key={i}>{point}</li>
                                        ))}
                                    </ul>
                                    {exp.link && (
                                        <a href={exp.link} className="timeline-link" target="_blank" rel="noopener noreferrer">
                                            <FaLink /> Link
                                        </a>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="resume-section achievements-section" data-aos="fade-up">
                    <h2 className="section-title">
                        <FaTrophy />
                        KEY ACHIEVEMENTS
                    </h2>

                    <div className="achievements-list">
                        {achievements.map((achievement, index) => (
                            <div className="achievement-item" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                                <div className="achievement-icon">
                                    <achievement.icon />
                                </div>
                                <div className="achievement-content">
                                    <p>{achievement.title}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="resume-section education-section" data-aos="fade-up">
                    <h2 className="section-title">
                        <FaGraduationCap />
                        EDUCATION
                    </h2>

                    <div className="education-content">
                        <div className="education-item" data-aos="fade-up">
                            <h3>Associate's Degree in Computer Science Engineering</h3>
                            <div className="education-details">
                                <span className="education-place">Institute of Engineering & Technology</span>
                                <span className="education-period">08/2023 - 08/2027</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="resume-section certifications-section" data-aos="fade-up">
                    <h2 className="section-title">
                        <FaCertificate />
                        CERTIFICATION
                    </h2>

                    <div className="certifications-list">
                        {certifications.map((cert, index) => (
                            <div className="certification-item" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                                <h3>{cert.title}</h3>
                                <div className="certification-provider">
                                    <span>{cert.provider}</span>
                                    {cert.id && <div className="cert-id">ID: {cert.id}</div>}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="resume-cta">
                <a href="/resume.pdf" download="YasirAkhlaque_Resume.pdf">
                    <button className="resume-download-btn">
                        <FaDownload />
                        Download Full Resume
                    </button>
                </a>
            </div>
        </div>
    );
} 