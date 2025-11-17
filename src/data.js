import { BiAward, BiCodeAlt, BiPalette, BiTrendingUp } from 'react-icons/bi';
import { GoPeople } from 'react-icons/go';
import { MdOutlineEmail } from 'react-icons/md';
import { SiDribbble, SiGithub, SiLinkedin } from "react-icons/si";

// Navigation Data
export const name = "Deepanshi Birla";
export const emailId = "deepsbirla13@gmail.com";

export const navItems = [
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Resume', href: '#resume' },
    { name: 'Contact', href: '#contact' },
];

// Hero Section Data
export const heroData = {
    name: "Deepanshi Birla",
    description: "A UI/UX Designer with a Computer Science background, passionate about simplifying complex problems through human-first design. Currently at Care Health Insurance, I design scalable, accessible, and engaging digital experiences that drive retention and growth.",
    quote: "💡 Let's build something simple, smart, and user-first.",
    image: "/me.jpg"
};

// Projects Data (Extended with more projects for grid demonstration)
export const projects = [
    {
        id: 1,
        title: "Travel Website - Dashboard UX Audit",
        tools: ["Figma", "ChatGPT"],
        description: "Audited and redesigned a travel booking dashboard to improve navigation, booking clarity, and visual hierarchy. The goal was to reduce friction in key user flows and make critical data more accessible.",
        highlights: [
            "Identified UX gaps in navigation, data presentation, and task completion using heuristic analysis",
            "Proposed solutions like grouping related metrics, consistent chart styles, and clearer status indicators",
            "Created annotated wireframes and redesigned screens to improve readability and guide user actions"
        ],
        image: "/travel.png",
        links: {
            live: "https://dribbble.com/shots/26038049-Dashboard-UX-Audit?utm_source=Clipboard_Shot&utm_campaign=Deepanshi13&utm_content=Dashboard%20UX%20Audit&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=Deepanshi13&utm_content=Dashboard%20UX%20Audit&utm_medium=Social_Share"
        },
        isFeatured: true
    },
    {
        id: 4,
        title: "Recipe App - UX Fixes & Final Design",
        tools: ["Figma", "ChatGPT"],
        description: "Redesigned the recipe app by implementing key UX fixes and delivering polished high-fidelity screens focused on better content clarity, readability, and layout flow.",
        highlights: [
            "Reworked navigation and filtering to simplify category access",
            "Enhanced visual hierarchy with bold imagery and clean typography",
            "Designed final UI screens with improved structure and consistent component styling"
        ],
        image: "/ux_fixes.png",
        links: {
            live: "https://dribbble.com/shots/26098675-Recipe-App-UX-Audit-Recommendations?utm_source=Clipboard_Shot&utm_campaign=Deepanshi13&utm_content=Recipe%20App%20UX%20Audit%20%26%20Recommendations&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=Deepanshi13&utm_content=Recipe%20App%20UX%20Audit%20%26%20Recommendations&utm_medium=Social_Share"
        },
        isFeatured: true
    },
    {
        id: 2,
        title: "Portfolio - UI/UX Design",
        tools: ["Figma"],
        description: "Crafted a personal portfolio that not only showcases visual design skills but also emphasizes product thinking, user empathy, and a process-driven design approach.",
        highlights: [
            "Structured case studies using the design thinking model (empathize to test)",
            "Focused on user pain points, business goals, and storytelling in each project",
            "Built cohesive visuals and layout for clarity, confidence, and navigation ease"
        ],
        image: "/portfolio.png",
        links: {
            live: "https://dribbble.com/shots/26098675-Recipe-App-UX-Audit-Recommendations?utm_source=Clipboard_Shot&utm_campaign=Deepanshi13&utm_content=Recipe%20App%20UX%20Audit%20%26%20Recommendations&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=Deepanshi13&utm_content=Recipe%20App%20UX%20Audit%20%26%20Recommendations&utm_medium=Social_Share"
        },
        isFeatured: false
    },
    {
        id: 3,
        title: "Recipe App - UX Audit & Recommendations",
        tools: ["Figma", "ChatGPT"],
        description: "Evaluated an existing recipe app to identify usability issues and provide targeted improvements for better user flow, accessibility, and discoverability of content.",
        highlights: [
            "Conducted a heuristic evaluation to pinpoint friction in navigation and content hierarchy",
            "Recommended clearer categorization, improved ingredient visibility, and simplified recipe browsing",
            "Created wireframes and restructured screens to guide users smoothly from discovery to cooking"
        ],
        image: "/ux_audit.png",
        links: {
            live: "https://dribbble.com/shots/26094361-Recipe-App-UX-Audit-Recommendations?utm_source=Clipboard_Shot&utm_campaign=Deepanshi13&utm_content=Recipe%20App%20UX%20Audit%20%26%20Recommendations&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=Deepanshi13&utm_content=Recipe%20App%20UX%20Audit%20%26%20Recommendations&utm_medium=Social_Share"
        },
        isFeatured: true
    },

    {
        id: 5,
        title: "Knowledge Shields - COVID Safety Website",
        tools: ["Figma", "HTML", "CSS", "JavaScript"],
        description: "Built a responsive awareness website to educate users about COVID-19 symptoms, prevention, and transmission. Included a designed section for real-time stats simulation.",
        highlights: [
            "Designed clean, mobile-first layout for easier readability and quick info access",
            "Created preventive sections covering hygiene, distancing, and vaccination",
            "Simulated live COVID-19 stats section for future API integration possibility"
        ],
        image: "/covid.png",
        links: {
            github: "https://github.com/Birla13/Covid-Safety-Website",
            live: "https://dribbble.com/shots/26098675-Recipe-App-UX-Audit-Recommendations?utm_source=Clipboard_Shot&utm_campaign=Deepanshi13&utm_content=Recipe%20App%20UX%20Audit%20%26%20Recommendations&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=Deepanshi13&utm_content=Recipe%20App%20UX%20Audit%20%26%20Recommendations&utm_medium=Social_Share"
        },
        isFeatured: false
    },
    {
        id: 6,
        title: "Portfolio",
        tools: ["Figma", "React", "HTML", "CSS", "JavaScript"],
        description: "A sleek, responsive React-based personal portfolio showcasing projects, skillset, and professional background.",
        highlights: [
            "Fast, modular, and reusable components (navigation, project cards, contact form)",
            "Seamless transitions across desktop, tablet, and mobile devices",
            "Production-ready build with hashed filenames for cache control"
        ],
        image: "/portfolio_react.png",
        links: {
            github: "https://github.com/Birla13/Deepanshi-Portfolio",
            live: "https://deepanshi-portfolio-gamma.vercel.app/"
        },
        isFeatured: true
    }
];

// Skills Data
export const skillCategories = [
    {
        icon: <BiPalette className="w-8 h-8 text-purple-500" />,
        title: "UX & Design",
        skills: [
            "Wireframing & Prototyping",
            "Micro-copying",
            "UX Research",
            "User Journey Mapping",
            "Accessibility-first Design",
            "Mobile-First Design",
            "Visual Hierarchy",
            "Color Psychology",
            "Responsive Design"
        ]
    },
    {
        icon: <BiCodeAlt className="w-8 h-8 text-blue-500" />,
        title: "Tools & Technologies",
        skills: [
            "Figma",
            "GitHub",
            "HTML & CSS",
            "JavaScript",
            "Tailwind CSS",
            "ReactJS (Basic)"
        ]
    },
    {
        icon: <GoPeople className="w-8 h-8 text-green-500" />,
        title: "Soft Skills",
        skills: [
            "Prompt Engineering",
            "Clear Communication",
            "Public Speaking",
            "Critical Thinking",
            "Team Collaboration",
            "Problem Solving",
            "Project Management",
            "Client Relations"
        ]
    }
];

// Experience Data
export const experienceData = {
    role: "UI & UX Developer",
    company: "Care Health Insurance",
    period: "May 2024 - Present",
    responsibilities: [
        "Redesigned the agent app UI using Figma, improving usability and boosting agent productivity",
        "Implemented user-friendly features that increased customer retention and navigation ease",
        "Streamlined design processes with a design system, reducing revisions and dev time"
    ]
};

export const achievements = [
    {
        icon: <BiTrendingUp className="w-8 h-8 text-green-500" />,
        metric: "40%",
        description: "Boost in customer retention"
    },
    {
        icon: <BiAward className="w-8 h-8 text-blue-500" />,
        metric: "24%",
        description: "Reduction in revision cycles"
    },
    {
        icon: <GoPeople className="w-8 h-8 text-purple-500" />,
        metric: "50%",
        description: "Increase in agent productivity"
    }
];

// Contact Data
export const contactInfo = [
    {
        icon: <MdOutlineEmail className="w-6 h-6" />,
        label: "Email",
        value: "deepsbirla13@gmail.com",
        href: "mailto:deepsbirla13@gmail.com"
    },
    {
        icon: <SiLinkedin className="w-6 h-6" />,
        label: "Linkedin",
        value: "Let's Talk",
        href: "https://www.linkedin.com/in/deepanshibirla/"
    }
];

export const dribbbleLink = "https://dribbble.com/Deepanshi13";

export const socialLinks = [
    // {
    //     icon: <SiLinkedin className="w-6 h-6" />,
    //     label: "LinkedIn",
    //     href: "https://www.linkedin.com/in/deepanshibirla/",
    //     color: "hover:bg-blue-600"
    // },
    {
        icon: <SiDribbble className="w-6 h-6" />,
        label: "Dribble",
        href: "https://dribbble.com/Deepanshi13",
        color: "hover:bg-blue-500"
    },
    {
        icon: <SiGithub className="w-6 h-6" />,
        label: "GitHub",
        href: "https://github.com/birla13",
        color: "hover:bg-gray-500"
    },
    {
        icon: <SiDribbble className="w-6 h-6" />,
        label: "Dribbble",
        href: "https://dribbble.com/Deepanshi13",
        color: "hover:bg-gray-500"

    }
];

export const collaborationServices = [
    "UI/UX Design Projects",
    "Frontend Development",
    "Design System Creation",
    "User Research & Testing"
];

// Resume Download Data
export const resumeData = {
    downloadUrl: "https://drive.google.com/file/d/1VzXrv4z7NiW9O-bUZ17RNeun_bfS9nZl/view?usp=drive_link",
}; 