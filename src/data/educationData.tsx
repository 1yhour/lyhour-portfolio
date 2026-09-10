export interface EducationCardProps {
  id: string;
  school: string;
  period: string;
  degree?: string;
  field?: string;
  tags: string[];
  details: string[];
  isOpen: boolean;
}
export const EDUCATIONDATA = [
  {
    id: "01",
    school: "Royal University of Phnom Penh",
    period: "2025 - Present",
    degree: "Bachelor of Computer Science",
    field: "Computer Science",
    tags: [
      "C/C++ Programming",
      "C# Programming",
      "Java Programming",
      "Math For Computer Science",
      "Statistics",
      "Networking",
      "Web Development",
      "Database Management",
      "English",
      "Team Collaboration",
    ],
    details: [
      "Currently pursuing a Bachelor's degree in Computer Science (3rd year).",
      "Strong foundation in programming, software development, and systems design.",
      "Actively involved in practical projects.",
      "Gained experience in Agile methodologies, team collaboration, and project management.",
      "Relevant awards and achievements include hackathons and coding competitions.",
    ],
    isOpen: false,
  },
  {
    id: "02",
    school: "Royal University of Phnom Penh",
    period: "3 months (2026)",
    field: "Short course for Certificate of Backend Development",
    tags: ["Laravel", "Php", "PostgreSql", "Postman", "NextJS", "Git"],
    details: [
      "Fast-paced 12-week intensive bootcamp focused on building production-ready backend applications.",
      "Mastered Laravel 10 and PHP 8 fundamentals, including MVC architecture, Eloquent ORM, and API development.",
      "Developed RESTful APIs with Laravel, integrating PostgreSql databases and securing endpoints with Sanctum authentication.",
      "Utilized Postman for API testing, debugging, and documentation, ensuring seamless frontend-backend integration.",
      "Built a full-stack NextJS e-commerce application with real-time database updates and server-side rendering.",
      "Collaborated in Agile teams, practicing Git version control, code reviews, and CI/CD pipelines for efficient deployment.",
      "Achieved 90%+ project completion rate and received certification in Backend Development.",
    ],

    isOpen: false,
  },
];
