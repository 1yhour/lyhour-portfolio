import { Container , Section} from "@/components/layout/container";
import Title from "@/components/ui/title";
import { Terminal } from "@/components/ui/terminal";
export default function About() {
  const getGreeting = () => {
    const hour = new Date().getHours();

    if (hour < 12) return "Good morning";
    if (hour < 18) return "Good afternoon";
    return "Good evening";
  };

  const greeting = getGreeting();

  return (
    <Section>
        <Container className="lg:mt-[-50]">
            <div className="w-full flex flex-col gap-0">
                <Title page="§01" title={greeting} />
                {/* <div className="mt-5">
                    <Terminal commands={[
                    "whoami"
                ]} outputs={{
                    0: [
                       "A student from rupp "
                        
                    ]
                }} username="lyhour" enableSound={true}/>
                </div> */}
                <p className="font-mono text-sm mt-5">
                    Hello i&apos;m Lyhour a student from RUPP with a passion for building innovative and user-friendly web applications. Currently, I&apos;m exploring the world of AI, cloud technologies, and modern web development.
                </p>
            </div>
        </Container>
    </Section>
  );
}
