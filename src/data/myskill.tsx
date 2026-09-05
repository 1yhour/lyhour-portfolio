import { JSX } from "react";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaReact, FaLaravel, FaDocker, FaFigma } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiNextdotjs, SiTypescript } from "react-icons/si";
import { Badge } from "@/components/ui/badge";
import { IoLogoJavascript } from "react-icons/io5";
export interface SkillCardProps {
  icon: JSX.Element;
  title: string;
  description: string;
  level: string;    
  badge?: string | JSX.Element;
}
export const MYSKILL: SkillCardProps[] = [
  {
    icon: <FaReact className="h-12 w-12 text-foreground" />,
    title: "Web Development",
    description: "Library",
    badge: <Badge><IoLogoJavascript className="h-4 w-4"/></Badge>,
    level: "Advanced",
  },
  {
    icon: <SiNextdotjs className="h-12 w-12 text-foreground" />,
    title: "Next.js",
    description:"Framework",
    badge:<Badge>SSR</Badge>,
    level: "Advanced",
  },
  {
    icon: <BiLogoPostgresql className="h-12 w-12 text-foreground" />,
    title: "PostgreSQL",
    description:"Database",
    badge: <Badge>SQL</Badge>,
    level: "Advanced",
  },
  {
    icon: <SiTypescript className="h-12 w-12 text-foreground" />,
    title: "TypeScript",
    description:"Language",
    badge: <Badge>Type Safe</Badge>,
    level: "Advanced",
  },
  {
    icon: <FaLaravel className="h-12 w-12 text-foreground" />,
    title: "Laravel",
    description: "Backend Framework",
    badge: <Badge>API</Badge>,
    level: "Advanced",
  },
  {
    icon: <RiTailwindCssFill className="h-12 w-12 text-foreground" />,
    title: "Tailwind CSS",
    description: "Utility",
    badge:<Badge>UI</Badge>,
    level: "Advanced",
  },
  {
    icon: <FaDocker className="h-12 w-12 text-foreground" />,
    title: "Docker",
    description: "Containerization",
    badge:<Badge>Devops</Badge>,
    level: "Advanced",
  },
  {
    icon: <FaFigma className="h-12 w-12 text-foreground" />,
    title: "Figma",
    description: "Design",
    badge:<Badge>UI/UX</Badge>,
    level: "Advanced",
  },
];
