import { FaReact, FaRobot, FaUser } from 'react-icons/fa';
import { FaFileShield } from 'react-icons/fa6';
import { MdOutlineShoppingCart } from 'react-icons/md';
export const projects = [
    {
        icon: MdOutlineShoppingCart,
        name: "Luxe",
        about: "Developed a full-stack e-commerce platform using Next.js, featuring Google and manual authentication with secure session handling.Built a powerful admin dashboard to manage products, orders, and users in real-time.Integrated dynamic cart and wishlist functionality with persistent user state across sessions.Used Prisma ORM with MongoDB for efficient database operations, and Zod for robust backend validation.Designed a responsive, user-friendly UI with Tailwind CSS, ensuring smooth and intuitive shopping experience.Followed scalable folder architecture, implemented clean API routes, and applied best practices for maintainability and performance.",
        link: "https://next-ecom-alpha-hazel.vercel.app/",
        github: "https://github.com/yasirakhlaque/next-ecom",
        technologies: ["Next.js", "Prisma", "Tailwind CSS", "MongoDB", "TypeScript", "Zod"],
        image: "Images/nextEcom.png"
    },
    {
        icon: FaFileShield,
        name: "JobAppTracker",
        about: "Developed a full-stack application to streamline job application tracking, featuring login/signup and protected routes. Implemented manual user authentication, RESTful APIs with Zod validation, and integrated Prisma ORM with MySQL.Designed a clean, responsive UI with Tailwind CSS and ensured seamless UX for managing job applications.Applied best practices in code structure, folder organization, and error handling to enhance maintainability.Successfully connected frontend and backend for dynamic, real-time application data handling",
        link: "https://job-application-tracker-mauve-pi.vercel.app/",
        github: "https://github.com/yasirakhlaque/job-application-tracker",
        technologies: ["Next.js", "Prisma", "Tailwind CSS", "MongoDB", "TypeScript", "Zod"],
        image: "Images/jobTracker.png"
    },
    {
        icon: FaReact,
        name: "React E-Commerce",
        about: "Developed a fully functional e-commerce platform using React.js with features like cart management, dynamic UI, and state management using Context API and reducers.",
        link: "https://react-e-commerce-kappa-six.vercel.app/",
        github: "https://github.com/yasirakhlaque/React-E-Commerce",
        technologies: ["React.js", "Context API", "Dynamic UI"],
        image: "Images/techora.png"
    },
    {
        icon: FaRobot,
        name: "Doraemon Bot",
        about: "Built a Doraemon-themed chatbot using React.js and Gemini API with an engaging UI for interactive conversations and responsive design for cross-device compatibility.",
        link: "https://doraemon-bot.vercel.app/",
        github: "https://github.com/yasirakhlaque/doraemon-bot",
        technologies: ["React.js", "GeminiAPI", "Responsive Design"],
        image: "Images/doraemonBot.png",
    },
    {
        icon: FaUser,
        name: "Personal Portfolio",
        about: "Developed a fully responsive portfolio using React.js with AOS (Animate On Scroll) library for better UX and user-friendly interface to showcase skills and projects.",
        link: "#",
        github: "https://github.com/yasir-akhlaq/portfolio",
        technologies: ["React.js", "AOS", "Responsive Design"],
        image: "Images/portfolio.png",
    },
];
