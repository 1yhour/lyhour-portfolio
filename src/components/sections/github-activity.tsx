"use client";
import dynamic from "next/dynamic";

const GitHubCalendar = dynamic(
  () => import("react-github-calendar").then((mod) => mod.GitHubCalendar),
  { ssr: false },
);
const theme = {
  light: [
    "#f4f4f5",
    "#d4d4d8",
    "#a1a1aa",
    "#52525b",
    "#18181b",
  ],
  dark: [
    "#BFBFC6",
    "#71717a",
    "#52525b",
    "#3f3f46",
    "#18181b",
  ],
};
export function GitHubActivity() {
  return (
    <div className="relative">
      <div className="absolute top-0 bottom-0 w-[100vw] left-1/2 -translate-x-1/2 border-b border-border pointer-events-none -z-10"></div>
      <div className="pt-5 pb-5 flex justify-center items-center">
        <GitHubCalendar username="1yhour" className="text-muted-foreground opacity-70" theme={theme}/>
      </div>
    </div>
  );
}
