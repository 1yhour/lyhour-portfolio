import {FaGithub, FaLinkedin, FaTelegram} from "react-icons/fa6"
import {MdAlternateEmail} from "react-icons/md"
export const navLinks = [
    { num: "01", name: "ABOUT", href: "#about" },
    { num: "02", name: "SKILLS", href: "#skills" },
    { num: "03", name: "EDUCATION", href: "#education" },
    { num: "04", name: "PROJECTS", href: "#projects" },
    { num: "05", name: "CONTACT", href: "#contact" },
];
export const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/1yhour",
      icon: <FaGithub className="h-4 w-4" />,
      handle: "@1yhour",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/seng-lyhour/",
      icon: <FaLinkedin className="h-4 w-4" />,
      handle: "in/seng-lyhour",
    },
    {
      name: "Telegram",
      href: "https://t.me/lyhourseng15",
      icon: <FaTelegram className="h-4 w-4" />,
      handle: "@lyhourseng15",
    },
    {
      name: "Email",
      href: "mailto:lyhourcoding@gmail.com",
      icon: <MdAlternateEmail className="h-4 w-4" />,
      handle: "lyhourcoding@gmail.com",
    },
  ];
export const techSpecs = [
    { label: "ENGINE", value: "Next.js 16 (App Router)" },
    { label: "STYLING", value: "Tailwind CSS v4" },
    { label: "ANIMATION", value: "Motion / React" },
    { label: "TYPOGRAPHY", value: "Geist Sans & Mono" },
    { label: "DEPLOY", value: "Vercel Edge Platform" },
  ];