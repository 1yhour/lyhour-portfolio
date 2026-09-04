import { Section, Container } from "@/components/layout/container";
import SkillCard from "@/components/ui/skillcard";

export default function About() {
  return (
    <Section>
      <Container className="lg:pt-6">
        <SkillCard/>
      </Container>
    </Section>
  );
}
