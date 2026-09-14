"use client"
import { Section, Container } from "@/components/layout/container";
import Title from "@/components/ui/title";
import { useState } from "react";
import ProjectCard from "./projectCard";
import { PROJECTDATA } from "@/data/projectData";
export default function ProjectSection() {

    const [openIds, setOpenIds] = useState(new Set<string>());

    const toggleOpen = (id: string) => {
        const next = new Set(openIds);
        next.has(id) ? next.delete(id) : next.add(id);
        setOpenIds(next);
    };
    
    return (
        <Section id="projects">
            <Container className="lg:mt-[-50]">
                <div className="w-full flex flex-col gap-0">
                    <Title title="Projects" page="§04" count={PROJECTDATA.length} />
                    <div className="flex flex-col gap-4 mt-6 ">
                        {PROJECTDATA.map((project) => (
                            <ProjectCard
                                key={project.id}
                                id={project.id}
                                title={project.title}
                                duration={project.duration}
                                openTitle={project.openTitle}
                                description={project.description}
                                tags={project.tags}
                                icon={project.icon}
                                githubUrl={project.githubUrl}
                                isOpen={openIds.has(project.id)}
                                toggleOpen={toggleOpen}
                            />
                        ))}
                    </div>
                    <div className="border-t border-border py-1.5 flex justify-end mt-6">
                        <span className="font-mono text-[8px] tracking-[0.25em] uppercase text-muted-foreground select-none">
                            END OF SECTION
                        </span>
                    </div>
                </div>
            </Container>
        </Section>
    );
}