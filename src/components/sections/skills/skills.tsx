import { Section, Container } from "@/components/layout/container";
import { Skill } from "@/components/ui/skillcard";
import Title from "@/components/ui/title";
import { MYSKILL } from "@/data/myskill";

export default function Skills() {
  return (
    <Section id="skills">
      <Container className="lg:mt-[-50]">
        <div className="w-full flex flex-col gap-0">
          <Title page="§02" title="Core Technologies & Tools" count={MYSKILL.length} />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 mt-5">
            {MYSKILL.map(({ title, icon, description, level, badge }, i) => (
              <div key={title} className="-mt-px -ml-px first:ml-0">
                <Skill
                  index={i}
                  icon={icon}
                  title={title}
                  description={description}
                  level={level}
                  badge={badge}
                />
              </div>
            ))}
          </div>
          <div className="border-t border-border py-1.5 flex justify-end">
            <span className="font-mono text-[8px] tracking-[0.25em] uppercase text-muted-foreground select-none">
              END OF SECTION
            </span>
          </div>
        </div>
      </Container>
    </Section>
  );
}
