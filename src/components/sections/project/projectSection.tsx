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
                <Title title="Projects" page="§04" />
                <div className="flex flex-col divide-y divide-border">
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
            </Container>
        </Section>
    );
}