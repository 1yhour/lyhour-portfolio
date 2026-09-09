"use client"
import { Container, Section } from "@/components/layout/container";
import Title from "@/components/ui/title";
import { useState, useEffect } from "react";
export default function About() {
  const [greeting, setGreeting] = useState("");
  useEffect(() => {
    const getGreeting = () => {
      const hour = new Date().getHours();
      if (hour < 12) return "Good morning";
      if (hour < 18) return "Good afternoon";
      return "Good evening";
    };
    setGreeting(getGreeting());
  }, []);

  return (
    <Section id="about">
      <Container className="lg:mt-[-50]">
        <div className="w-full flex flex-col gap-0">
          <Title page="§01" title={greeting} />
          <p className="font-mono text-sm mt-5">
            Hello i&apos;m Lyhour a student from RUPP with a passion for
            building innovative and user-friendly web applications. Currently,
            I&apos;m exploring the world of AI, cloud technologies, and modern
            web development.
          </p>
        </div>
      </Container>
    </Section>
  );
}
