import Footer from "@/components/layout/footer"
import Navbar from "../components/layout/navbar"
import {Scales} from "@/components/ui/scales";
import {Container, Section} from "@/components/layout/container";
export default function Home() {
  return (
    <>
      <Navbar/>
      <Container>
        <Section>
          <div>
            this is body
          </div>
        </Section>
      </Container>
      <Scales size={10} className="opacity-50"/>
      <Footer/>
    </>
  )
}