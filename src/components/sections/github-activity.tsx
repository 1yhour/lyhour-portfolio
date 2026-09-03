"use client";
import { GitHubCalendar } from "react-github-calendar";

export function GitHubActivity() {
  return (
    <section className="pt-5 pb-5 flex justify-center items-center border-b relative">
        <GitHubCalendar username="1yhour" className="text-muted-foreground"/>
        
    </section>
  );
}