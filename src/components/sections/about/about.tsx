"use client";
import { Container, Section } from "@/components/layout/container";
import Title from "@/components/ui/title";
import { useState, useEffect } from "react";
export default function About() {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const interval = setInterval(() => (setNow(new Date()), 60000));
    return () => clearInterval(interval);
  }, []);
  const hour = now.getHours();
  const greeting = `Good ${hour < 12 ? "morning" : hour < 18 ? "afternoon" : "evening"}`;

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
