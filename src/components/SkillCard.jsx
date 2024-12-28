import './SkillCard.css';

export default function SkillCard({ icon }) {
    return (
        <>
            <div className="skill-card" data-aos="flip-left">
                <div className="icon">
                    <i className={`${icon}`}></i>
                </div>
            </div>
        </>
    );
}
