"use client";
import { Section, Container } from "@/components/layout/container";
import Title from "@/components/ui/title";
import { EDUCATIONDATA } from "@/data/educationData";
import { useState } from "react";
import { EducationCard } from "./educationCard";

export default function EducationSection() {
  const [openIds, setOpenIds] = useState(new Set<string>());

  const toggleOpen = (id: string) => {
    const next = new Set(openIds);
    next.has(id) ? next.delete(id) : next.add(id);
    setOpenIds(next);
  };

  return (
    <Section id="education">
      <Container className="lg:mt-[-50]">
        <Title title="Education" page="§03" count={EDUCATIONDATA.length} />
        <div className="flex flex-col divide-y divide-border">
          {EDUCATIONDATA.map((education) => (
            <EducationCard
              key={education.id}
              id={education.id}
              school={education.school}
              period={education.period}
              degree={education.degree}
              field={education.field}
              tags={education.tags}
              details={education.details}
              
              isOpen={openIds.has(education.id)}
              toggleOpen={toggleOpen}
            />
          ))}
        </div>
        <div className="border-t border-border py-1.5 flex justify-end mt-6">
          <span className="font-mono text-[8px] tracking-[0.25em] uppercase text-muted-foreground select-none">
            END OF SECTION
          </span>
        </div>
      </Container>
    </Section>
  );
}
