import { FaReact, FaRobot, FaUser } from 'react-icons/fa';
export const projects = [
        {
            icon: FaReact,
            name: "React E-Commerce",
            about: "Developed a fully functional e-commerce platform using React.js with features like cart management, dynamic UI, and state management using Context API and reducers.",
            link: "https://react-e-commerce-kappa-six.vercel.app/",
            github: "https://github.com/yasirakhlaque/React-E-Commerce",
            technologies: ["React.js", "Context API", "Dynamic UI"],
            image:"Images/techora.png"
        },
        {
            icon: FaRobot,
            name: "Doraemon Bot",
            about: "Built a Doraemon-themed chatbot using React.js and Gemini API with an engaging UI for interactive conversations and responsive design for cross-device compatibility.",
            link: "https://doraemon-bot.vercel.app/",
            github: "https://github.com/yasirakhlaque/doraemon-bot",
            technologies: ["React.js", "GeminiAPI", "Responsive Design"],
            image:"Images/doraemonBot.png",
        },
        {
            icon: FaUser,
            name: "Personal Portfolio",
            about: "Developed a fully responsive portfolio using React.js with AOS (Animate On Scroll) library for better UX and user-friendly interface to showcase skills and projects.",
            link: "#",
            github: "https://github.com/yasir-akhlaq/portfolio",
            technologies: ["React.js", "AOS", "Responsive Design"],
            image:"Images/portfolio.png",
        },
    ];
