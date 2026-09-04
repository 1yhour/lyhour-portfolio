import Footer from "@/components/layout/footer";
import Navbar from "../components/layout/navbar";
import { Container, Section } from "@/components/layout/container";
import Hero from "@/components/sections/hero/hero";
import { GitHubActivity } from "@/components/sections/github-activity";
import About from "@/components/sections/about/about";
import Scales from "@/components/ui/scales";
export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* <div className="absolute h-8 w-full border-b">
          <Scales size={5} />
        </div>
        <div className="absolute -bottom-16 w-full h-8 border-b">
                <Scales size={5} />
              </div> */}
        {/* <div className="absolute -inset-y-inset-y-[30%] -right-10 h-[160%] h-8 w-full border-b">
                <Scales size={5} orientation="diagonal" />
              </div> */}

        <Section>
          <Container>
            <Hero />
            <GitHubActivity />
          </Container>
        </Section>
        
        <About />
      </main>
      <Footer />
    </>
  );
}
