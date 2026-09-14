import { Project } from "@/data/projectData";
import { Collapsible } from "@/components/ui/Collapsible";
import { FaGithub } from "react-icons/fa";

interface ProjectCardProps extends Project {
    toggleOpen: (id: string) => void;
}

export default function ProjectCard({
    id,
    title,
    duration,
    openTitle,
    description,
    tags,
    githubUrl,
    isOpen,
    toggleOpen,
    icon,
}: ProjectCardProps) {
    return (
        <div className="group relative border border-border bg-card/30 p-4 sm:p-5 transition-all duration-200 hover:border-foreground/40">
            {/* Subtle corner technical marks */}
            <span className="pointer-events-none absolute top-0 left-0 w-2 h-2 border-r border-b border-foreground/10 group-hover:border-foreground/30 transition-colors" />
            <span className="pointer-events-none absolute bottom-0 right-0 w-2 h-2 border-l border-t border-foreground/10 group-hover:border-foreground/30 transition-colors" />

            <Collapsible
                id={id}
                isOpen={isOpen}
                onToggle={toggleOpen}
                trigger={
                    <div className="flex items-start gap-3 sm:gap-4 flex-1 min-w-0">
                        <div className="shrink-0 flex items-center justify-center w-10 h-10 border border-border bg-background/60 text-foreground group-hover:border-foreground/40 group-hover:bg-foreground group-hover:text-background transition-colors mt-0.5">
                            {icon}
                        </div>
                        <div className="flex flex-col min-w-0 flex-1">
                            <div className="flex items-center gap-2 flex-wrap">
                                <span className="font-mono text-[10px] tracking-widest uppercase text-muted-foreground select-none">
                                    PROJECT #{id}
                                </span>
                                <span className="text-border select-none">|</span>
                                <span className="font-mono text-[10px] tracking-wide text-muted-foreground">
                                    {duration}
                                </span>
                            </div>
                            <h3 className="font-bold text-sm sm:text-base uppercase tracking-tight text-foreground leading-snug mt-1 group-hover:text-primary transition-colors">
                                {title}
                            </h3>
                        </div>
                    </div>
                }
            >
                <div className="pt-4 mt-4 border-t border-border/70 flex flex-col gap-4">
                    {description.titleDescription && (
                        <p className="font-mono text-xs sm:text-sm font-semibold uppercase tracking-wider text-foreground leading-relaxed">
                            {description.titleDescription}
                        </p>
                    )}

                    {description.items && description.items.length > 0 && (
                        <ul className="space-y-2">
                            {description.items.map((item, i) => (
                                <li key={i} className="flex items-start gap-2.5 font-mono text-xs sm:text-sm text-foreground/90 leading-relaxed">
                                    <span className="mt-2 shrink-0 w-1 h-1 rounded-full bg-muted-foreground" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    )}

                    {tags && tags.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 pt-1">
                            {tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="font-mono text-[10px] sm:text-xs px-2.5 py-0.5 border border-border text-muted-foreground bg-background/50 rounded-none uppercase"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}

                    {githubUrl && (
                        <div className="pt-3 flex items-center justify-between border-t border-border/50">
                            <a
                                href={githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider px-3 py-1.5 border border-border hover:border-foreground/50 hover:bg-foreground hover:text-background transition-colors"
                            >
                                <FaGithub className="w-3.5 h-3.5" />
                                <span>View Source</span>
                            </a>
                            {openTitle && (
                                <span className="font-mono text-[9px] tracking-widest uppercase text-muted-foreground select-none">
                                    {openTitle}
                                </span>
                            )}
                        </div>
                    )}
                </div>
            </Collapsible>
        </div>
    );
}