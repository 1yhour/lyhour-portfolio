import Footer from "@/components/layout/footer";
import Navbar from "../components/layout/navbar";
import { Container, Section } from "@/components/layout/container";
import Hero from "@/components/sections/hero/hero";
import { GitHubActivity } from "@/components/sections/github-activity";
import Skills from "@/components/sections/skills/skills";
import About from "@/components/sections/about/about";
import Project from "@/components/sections/project/projectSection";
import EducationSection from "@/components/sections/education/educationSection";
export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Section id="home">
          <Container className="px-0 sm:px-0 md:px-0 lg:px-0 pt-8 md:pt-8 lg:pt-8 pb-0 md:pb-0 lg:pb-0">
            <Hero />
            <GitHubActivity />
          </Container>
        </Section>
        <About />
        <Skills />
        <EducationSection />
        <Project />
      </main>
      <Footer />
    </>
  );
}
