import { Section, Container } from "@/components/layout/container";
import Title from "@/components/ui/title";
export default function ProjectSection() {
    return (
        <Section id="projects">
            <Container className="lg:mt-[-50]">
                <Title title="Projects" page="§04" />
            </Container>
        </Section>
    );
}