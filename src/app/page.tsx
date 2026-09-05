import Footer from "@/components/layout/footer";
import Navbar from "../components/layout/navbar";
import { Container, Section } from "@/components/layout/container";
import Hero from "@/components/sections/hero/hero";
import { GitHubActivity } from "@/components/sections/github-activity";
import Skills from "@/components/sections/skills/skills";
import About from "@/components/sections/about/about";
export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Section>
          <Container className="lg:pl-0 lg:pr-0">
            <Hero />
            <GitHubActivity />
          </Container>
        </Section>
        <About />
        <Skills />
        
      </main>
      <Footer />
    </>
  );
}
