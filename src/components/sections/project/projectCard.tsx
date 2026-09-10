import { Project } from "@/data/projectData";
import { Collapsible } from "@/components/ui/Collapsible";
import { FaFileCode } from "react-icons/fa6";
interface ProjectCardProps extends Project {
    toggleOpen: (id: string) => void;
}
export default function ProjectCard({ id, title, duration, openTitle, description, tags, githubUrl, isOpen, toggleOpen,icon }: ProjectCardProps) {
    return (
        
        <div className="py-5 flex gap3">
            <div className="flex items-center shrink-0 mt-0.5 p-0.5">
                {icon}
            </div>
            <div className="flex flex-col flex-1 min-w-0 ml-5">
                <Collapsible
                    id={id}
                    isOpen={isOpen}
                    onToggle={toggleOpen}
                    trigger={
                        <div className="min-w-0 flex-1">
                            <h3 className="font-semibold text-foreground leading-snug">{title}</h3>
                            <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 mt-0.5 text-sm text-muted-foreground">
                                <span>{duration}</span>
                            </div>
                            
                        </div>
                    }
                >
                    {description.items && description.items.length > 0 && (
                        <ul className="space-y-2 pl-2">
                            {description.titleDescription && description.titleDescription.length > 0 && (
                                <span className="text-sm font-medium text-foreground leading-relaxed">{description.titleDescription}</span>
                            )}
                            {description.items.map((item, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm text-foreground leading-relaxed">
                                    <span className="mt-1.5 shrink-0 w-1 h-1 rounded-full bg-muted-foreground" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    )}
                </Collapsible>
                <div className="flex flex-1 ">
                    <div className="flex flex-wrap gap-2 mt-4">
                        {tags.map((tag) => (
                            <span key={tag} className="text-xs px-2.5 py-1 rounded-full border border-border text-muted-foreground">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}