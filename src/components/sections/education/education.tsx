"use client";
import { Section, Container } from "@/components/layout/container";
import Title from "@/components/ui/title";
import { EDUCATIONDATA } from "@/data/educationData";
import { EducationCardProps } from "@/data/educationData";
import { useState } from "react";
import { IoIosSchool } from "react-icons/io";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

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
        <Title title="Education" page="§03" />
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
              icon={education.icon}
              isOpen={openIds.has(education.id)}
              toggleOpen={toggleOpen}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}

export function EducationCard({
  school,
  period,
  degree,
  field,
  tags,
  details,
  isOpen,
  toggleOpen,
  id,
}: EducationCardProps & { toggleOpen: (id: string) => void }) {
  return (
    <div className="py-5 flex gap-3">
      <div className="flex flex-col flex-1 min-w-0">
        <div className="flex items-start justify-between gap-3">
          <div className="shrink-0 mt-0.5 border p-0.5">
            <IoIosSchool
              size={28}
              className="fill-muted-foreground transition-colors duration-300"
            />
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="font-semibold text-foreground leading-snug">
              {school}
            </h3>
            <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 mt-0.5 text-sm text-muted-foreground">
              <span>{period}</span>
              {degree && (
                <>
                  <span className="text-border select-none">|</span>
                  <span>{degree}</span>
                </>
              )}
              {field && (
                <>
                  <span className="text-border select-none">|</span>
                  <span>{field}</span>
                </>
              )}
            </div>
          </div>
          <button
            onClick={() => toggleOpen(id)}
            aria-expanded={isOpen}
            aria-label={isOpen ? "Collapse" : "Expand"}
            className="shrink-0 mt-0.5 text-muted-foreground hover:text-foreground transition-colors duration-200 cursor-pointer"
          >
            {isOpen ? (
              <MdKeyboardArrowUp size={22} />
            ) : (
              <MdKeyboardArrowDown size={22} />
            )}
          </button>
        </div>
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          {details && details.length > 0 && (
            <ul className="mt-4 space-y-2 pl-2">
              {details.map((detail, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-sm text-foreground leading-relaxed"
                >
                  <span className="mt-1.5 shrink-0 w-1 h-1 rounded-full bg-muted-foreground" />
                  {detail}
                </li>
              ))}
            </ul>
          )}
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2.5 py-1 rounded-full border border-border text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-0 opacity-0" : "max-h-[500px] opacity-100"
          }`}
        >
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2.5 py-1 rounded-full border border-border text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
