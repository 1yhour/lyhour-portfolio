"use client";
import { TextHoverEffect } from "../ui/text-hover-effect";
import { NavLink } from "./navbar";
import { FaLinkedin, FaTelegram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { Button } from "../ui/button";
import { MdKeyboardArrowUp } from "react-icons/md";
import { Section } from "./container";
import { FaArrowUp } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className=" border-border bg-background">
      <Section id="contact">
      <div className="flex flex-col w-full border-l border-r border-border ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 border-b border-border">
          <div className="flex flex-col col-span-2 justify-center p-8 lg:p-12 border-b md:border-b-0 md:border-r border-border">
            <span className="text-3xl lg:text-4xl xl:text-5xl font-bold uppercase tracking-tighter text-foreground">{`Let's build`}</span>
            <span className="text-3xl lg:text-4xl xl:text-5xl font-bold uppercase tracking-tighter text-muted-foreground">
              something great
            </span>
          </div>

          <div className="flex flex-col justify-center p-6 lg:p-8 border-b md:border-b-0 md:border-r border-border">
            <span className="text-xl font-semibold mb-6 tracking-tight">
              Component library
            </span>
            <ul className="flex flex-col gap-3 text-muted-foreground text-sm">
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-foreground/50" />{" "}
                shadcn
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-foreground/50" />{" "}
                Lucide, React Icons
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-foreground/50" />{" "}
                Framer Motion
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-foreground/50" />{" "}
                Aceternity UI
              </li>
            </ul>
          </div>

          <div className="flex flex-col border-r justify-center p-6 lg:p-8">
            <span className="text-xl font-semibold mb-6 uppercase tracking-tight">
              Navigation
            </span>
            <nav className="flex flex-col gap-3 text-muted-foreground text-sm">
              <NavLink href="#about">About</NavLink>
              <NavLink href="#skills">Skills</NavLink>
              <NavLink href="#education">Education</NavLink>
              <NavLink href="#projects">Projects</NavLink>
              <NavLink href="#contact">Contact</NavLink>
            </nav>
          </div>
          <div className="flex flex-col justify-center p-6 lg:p-8">
            <span className="text-sm md:text-base font-semibold mb-6 uppercase tracking-tight">
              Social Network
            </span>
            <nav className="flex flex-row md:flex-col gap-2 text-sm md:text-base font-medium">
              <NavLink href="https://github.com/1yhour">
                <div className="flex items-center gap-2 hover:text-foreground transition-colors">
                  <FaGithub className="h-5 w-5" />
                  Github
                </div>
              </NavLink>
              <NavLink href="https://www.linkedin.com/in/seng-lyhour/">
                <div className="flex items-center gap-2 hover:text-foreground transition-colors">
                  <FaLinkedin className="h-5 w-5" />
                  Linkedin
                </div>
              </NavLink>
              <NavLink href="mailto:lyhourcoding@gmail.com">
                <div className="flex items-center gap-2 hover:text-foreground transition-colors">
                  <MdAlternateEmail className="h-5 w-5" />
                  Email
                </div>
              </NavLink>
              <NavLink href="https://t.me/lyhourseng15">
                <div className="flex items-center gap-2 hover:text-foreground transition-colors">
                  <FaTelegram className="h-5 w-5" />
                  Telegram
                </div>
              </NavLink>
            </nav>
          </div>
        </div>
      </div>
      </Section>
      <div className="flex flex-col sm:flex-row items-center justify-between border-t p-6 md:p-8 text-sm text-muted-foreground gap-4">
        <span>© 2026 Seng Lyhour</span>
        <span className="font-medium tracking-widest uppercase text-xs">
          Be Kind
        </span>
        <Button
          variant="ghost"
          className="hidden sm:inline-flex hover:bg-transparent hover:text-foreground cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Back to Top <MdKeyboardArrowUp className="ml-2 h-4 w-4" />
        </Button>

        <div className="fixed bottom-5 right-5 z-50 sm:hidden">
          <Button
            variant="ghost"
            size="sm"
            className="h-8 w-8 border border-border bg-background/90 backdrop-blur shadow-md hover:bg-foreground hover:text-background cursor-pointer flex items-center justify-center transition-colors"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
          >
            <FaArrowUp className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex justify-center px-8  md:py-12 overflow-hidden relative w-full">
          <TextHoverEffect text="LYHOUR" duration={0.7} />
        </div>
      </div>
    </footer>
  );
}
