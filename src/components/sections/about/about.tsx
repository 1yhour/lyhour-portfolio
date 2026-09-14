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
          <p className="font-mono text-xs sm:text-sm mt-6 text-foreground/90 leading-relaxed max-w-2xl">
            Hello, I&apos;m Lyhour — a computer science student at RUPP with a focus on building resilient, high-performance, and user-centric web applications. Currently engineering modern full-stack systems, exploring cloud infrastructures, and experimenting with AI integrations.
          </p>
        </div>
      </Container>
    </Section>
  );
}
