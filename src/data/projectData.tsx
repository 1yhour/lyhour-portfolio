import { MdUploadFile } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { BsCartDash } from "react-icons/bs";

export interface Project {
  id: string;
  title: string;
  duration: string;
  openTitle: string; // name of the project that is open
  description: {
    titleDescription?: string;
    items: string[];
    
  };
  tags: string[];
  githubUrl?: string;
  isOpen: boolean;
  icon: React.ReactNode;
}

export const PROJECTDATA = [
  {
    id: "01",
    title: "Asynchronous File Conversion Platform ",
    duration: "June 2026 - Present",
    openTitle: "View Project",
    description: {
      items: [
        "Architected an asynchronous file-processing platform using Laravel Queues and Redis workers to offload CPU-intensive media and document conversions, keeping HTTP interfaces responsive under heavy load.",
        "Integrated the CloudConvert API with webhook callbacks for reliable asynchronous conversion status handling.",
        "Implemented real-time conversion progress tracking using Laravel Reverb WebSockets, streaming status updates to the React frontend.",
      ],
    },
    tags: [
      "PHP",
      "Laravel",
      "Redis",
      "WebSockets",
      "React",
      "CloudConvert API",
    ],
    githubUrl: "https://github.com/1yhour/file-convertor",
    isOpen: false,
    icon: (
        <MdUploadFile size={24} className="group-hover:fill-background fill-muted-foreground transition-colors duration-300" />
    )
  },
  {
    id: "02",
    title: "E-Commerce Platform — Team & Personal Builds",
    duration: "May 2026 - June 2026",
    openTitle: "View Project",
    description: {
      titleDescription: "E-Commerce Platform — Team & Personal Builds",
      items: [
        "Led backend development using Laravel REST APIs for product catalog, cart, and order management.",
        "Implemented role-based access control using Laravel Sanctum, custom middleware, and policies, with a PostgreSQL schema optimized through indexed search queries and rate limiting.",
        "Personal Contribution",
        "Built a full-stack e-commerce implementation using Next.js and Laravel, integrating KHQR payment gateway with webhook verification.",
        "Implemented dual authentication (JWT + Sanctum) and transactional database workflows to maintain order consistency.",
        "Deployed the Laravel backend on Railway and Next.js frontend on Vercel, building responsive desktop and mobile interfaces with Tailwind CSS.",
      ],
    },
    tags: [
        "Laravel",
        "Next.js",
        "PostgreSQL",
        "Sanctum",
        "JWT",
        "KHQR API",
        "Tailwind CSS",
        "Docker",
      ],
    gitHubUrl: "https://github.com/yehemo/Ecommerce",
    isOpen: false,
    icon: (
        <BsCartDash size={24} className="group-hover:fill-background fill-muted-foreground transition-colors duration-300" />
    )
  },
  {
    id:"03",
    title: "Portfolio Website",
    duration:"Mar 2026 to April 2026 ",
    openTitle:"View Project",
    description:{
        items: [
             "Built a responsive portfolio site with React, TypeScript, and Vite, achieving a 95+ Lighthouse score through code splitting and asset optimization.",
             "Deployed the production application on Vercel.",

        ]
    },
    tags: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
        "Vercel",
        "Vite"
    ],
    gitHubUrl: "https://github.com/1yhour/animated-portfolio",
    isOpen: false,
    icon: (
      <FaRegUser size={24} className="group-hover:fill-background fill-muted-foreground transition-colors duration-300" />
    )
  }
];
