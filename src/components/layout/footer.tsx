"use client";

import { useState } from "react";
import { TextHoverEffect } from "../ui/text-hover-effect";
import { FaLinkedin, FaTelegram, FaGithub, FaArrowUp } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { FiCopy, FiCheck, FiArrowUpRight } from "react-icons/fi";
import { Button } from "../ui/button";
import { Section } from "./container";

export default function Footer() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("lyhourcoding@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const navLinks = [
    { num: "01", name: "ABOUT", href: "#about" },
    { num: "02", name: "SKILLS", href: "#skills" },
    { num: "03", name: "EDUCATION", href: "#education" },
    { num: "04", name: "PROJECTS", href: "#projects" },
    { num: "05", name: "CONTACT", href: "#contact" },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/1yhour",
      icon: <FaGithub className="h-4 w-4" />,
      handle: "@1yhour",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/seng-lyhour/",
      icon: <FaLinkedin className="h-4 w-4" />,
      handle: "in/seng-lyhour",
    },
    {
      name: "Telegram",
      href: "https://t.me/lyhourseng15",
      icon: <FaTelegram className="h-4 w-4" />,
      handle: "@lyhourseng15",
    },
    {
      name: "Email",
      href: "mailto:lyhourcoding@gmail.com",
      icon: <MdAlternateEmail className="h-4 w-4" />,
      handle: "lyhourcoding@gmail.com",
    },
  ];

  const techSpecs = [
    { label: "ENGINE", value: "Next.js 16 (App Router)" },
    { label: "STYLING", value: "Tailwind CSS v4" },
    { label: "ANIMATION", value: "Motion / React" },
    { label: "TYPOGRAPHY", value: "Geist Sans & Mono" },
    { label: "DEPLOY", value: "Vercel Edge Platform" },
  ];

  return (
    <footer className="w-full bg-background">
      <Section id="contact">
        <div className="flex flex-col w-full border-l border-r border-border max-w-full md:max-w-3xl lg:max-w-4xl mx-auto">
          {/* Technical Section Bar */}
          <div className="border-b border-border mt-10 px-5 py-2.5 flex items-center justify-between font-mono text-[9px] sm:text-[10px] tracking-[0.25em] uppercase text-muted-foreground bg-background/50">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-foreground font-semibold">§05 // CONTACT &amp; COLOPHON</span>
            </div>
            <div className="hidden sm:flex items-center gap-3">
              <span>LOC // PHNOM PENH [UTC+7]</span>
              <span className="text-border select-none">|</span>
              <span className="text-foreground font-semibold">SYS.STATUS: ONLINE</span>
            </div>
          </div>

          {/* Hero Editorial Dispatch Block */}
          <div className="grid grid-cols-1 lg:grid-cols-12 border-b border-border">
            <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-border flex flex-col justify-between">
              <div>
                <span className="font-mono text-[9px] tracking-[0.22em] text-muted-foreground uppercase block mb-2">
                  COMMUNICATION_PROTOCOL // 01
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-foreground leading-[1.05]">
                  LET&apos;S BUILD <br />
                  <span className="text-muted-foreground">SOMETHING GREAT</span>
                </h2>
                <p className="mt-4 text-xs sm:text-sm text-muted-foreground font-mono leading-relaxed max-w-md">
                  Have a project in mind, software opportunity, or want to discuss modern web architecture? Direct lines are open.
                </p>
              </div>

              {/* Direct Actions */}
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="mailto:lyhourcoding@gmail.com"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-foreground text-background font-mono text-xs uppercase tracking-wider font-semibold hover:opacity-90 transition-opacity"
                >
                  <MdAlternateEmail className="w-3.5 h-3.5" />
                  <span>START_CONVERSATION</span>
                </a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-2 px-3.5 py-2 border border-border font-mono text-xs uppercase tracking-wider text-foreground hover:bg-muted/50 transition-colors cursor-pointer"
                >
                  {copied ? (
                    <>
                      <FiCheck className="w-3.5 h-3.5 text-emerald-500" />
                      <span className="text-emerald-500">COPIED_TO_CLIPBOARD</span>
                    </>
                  ) : (
                    <>
                      <FiCopy className="w-3.5 h-3.5 text-muted-foreground" />
                      <span>COPY_EMAIL</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Live Status & Direct Node Info */}
            <div className="lg:col-span-5 flex flex-col justify-between divide-y divide-border bg-muted/5">
              <div className="p-6 sm:p-8 flex flex-col justify-center">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-[9px] tracking-[0.25em] uppercase text-muted-foreground">
                    STATUS_INDEX
                  </span>
                  <span className="font-mono text-[9px] tracking-widest text-emerald-500 border border-emerald-500/30 px-1.5 py-0.5 bg-emerald-500/10">
                    AVAILABLE
                  </span>
                </div>
                <h3 className="font-bold text-sm uppercase tracking-wider text-foreground">
                  OPEN TO NEW ROLES &amp; FREELANCE
                </h3>
                <p className="font-mono text-[11px] text-muted-foreground mt-2 leading-relaxed">
                  Focusing on full-stack web engineering, API design, interactive UI, and cloud integrations.
                </p>
              </div>

              <div className="p-6 sm:p-8 flex flex-col justify-center">
                <span className="font-mono text-[9px] tracking-[0.25em] uppercase text-muted-foreground block mb-1.5">
                  DIRECT_NODE // SECURE
                </span>
                <span className="font-mono text-xs text-foreground select-all break-all font-medium">
                  lyhourcoding@gmail.com
                </span>
                <span className="font-mono text-[10px] text-muted-foreground mt-1">
                  RESPONSE_WINDOW: &lt; 24 HOURS
                </span>
              </div>
            </div>
          </div>

          {/* Modular 3-Column Swiss Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 border-b border-border">
            {/* Column 1: Navigation / Sitemap */}
            <div className="p-6 sm:p-8 border-b md:border-b-0 md:border-r border-border flex flex-col">
              <div className="flex items-center justify-between border-b border-border pb-3 mb-4">
                <span className="font-mono text-[10px] font-bold tracking-[0.2em] uppercase text-foreground">
                  [01] SITEMAP
                </span>
                <span className="font-mono text-[9px] text-muted-foreground">05 NODES</span>
              </div>
              <nav className="flex flex-col gap-2.5">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="group flex items-center justify-between text-xs font-mono text-muted-foreground hover:text-foreground transition-colors py-0.5"
                  >
                    <span className="tracking-widest">
                      <span className="text-muted-foreground/60 mr-2">{link.num} &frasl;&frasl; </span>
                      {link.name}
                    </span>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity font-mono text-muted-foreground">
                      →
                    </span>
                  </a>
                ))}
              </nav>
            </div>

            {/* Column 2: External Channels */}
            <div className="p-6 sm:p-8 border-b md:border-b-0 md:border-r border-border flex flex-col">
              <div className="flex items-center justify-between border-b border-border pb-3 mb-4">
                <span className="font-mono text-[10px] font-bold tracking-[0.2em] uppercase text-foreground">
                  [02] CHANNELS
                </span>
                <span className="font-mono text-[9px] text-muted-foreground">EXTERNAL</span>
              </div>
              <div className="flex flex-col gap-2.5">
                {socialLinks.map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between text-xs font-mono text-muted-foreground hover:text-foreground transition-colors py-0.5"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                        {s.icon}
                      </span>
                      <span className="tracking-wider">{s.name}</span>
                    </div>
                    <FiArrowUpRight className="w-3.5 h-3.5 text-muted-foreground/60 group-hover:text-foreground transition-colors" />
                  </a>
                ))}
              </div>
            </div>

            {/* Column 3: Colophon / Specifications */}
            <div className="p-6 sm:p-8 flex flex-col">
              <div className="flex items-center justify-between border-b border-border pb-3 mb-4">
                <span className="font-mono text-[10px] font-bold tracking-[0.2em] uppercase text-foreground">
                  [03] COLOPHON
                </span>
                <span className="font-mono text-[9px] text-muted-foreground">SPEC_V1.0</span>
              </div>
              <div className="flex flex-col gap-2 font-mono text-xs">
                {techSpecs.map((spec) => (
                  <div key={spec.label} className="flex items-baseline justify-between py-0.5">
                    <span className="text-[10px] text-muted-foreground tracking-widest uppercase">
                      {spec.label}
                    </span>
                    <span className="text-[11px] text-foreground font-medium">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Technical Status Strip */}
          <div className="border-b border-border p-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-[10px] tracking-widest uppercase text-muted-foreground bg-background">
            <div className="flex items-center gap-2">
              <span>© 2026 SENG LYHOUR</span>
              <span className="text-border select-none">/</span>
              <span className="hidden sm:inline">ALL RIGHTS RESERVED</span>
            </div>
            <div className="flex items-center gap-2 select-none">
              <span className="text-border">[</span>
              <span className="text-foreground font-medium">BE KIND</span>
              <span className="text-border">]</span>
            </div>
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="hidden sm:inline-flex items-center gap-1.5 hover:text-foreground transition-colors cursor-pointer"
            >
              <span>[↑] RETURN_TO_TOP</span>
            </button>
          </div>

          {/* Brand Monolith Area */}
          <div className="relative border-b border-border px-4 py-8 sm:py-12 overflow-hidden flex justify-center bg-background">
            {/* Technical Registration Corner Crosshairs */}
            <span className="pointer-events-none absolute top-2 left-3 font-mono text-[9px] text-muted-foreground/40 select-none">+</span>
            <span className="pointer-events-none absolute top-2 right-3 font-mono text-[9px] text-muted-foreground/40 select-none">+</span>
            <span className="pointer-events-none absolute bottom-2 left-3 font-mono text-[9px] text-muted-foreground/40 select-none">+</span>
            <span className="pointer-events-none absolute bottom-2 right-3 font-mono text-[9px] text-muted-foreground/40 select-none">+</span>

            <div className="w-full max-w-2xl flex justify-center">
              <TextHoverEffect text="LYHOUR" duration={0.7} />
            </div>
          </div>
        </div>
      </Section>

      {/* Floating Sticky Back-to-Top Button for Mobile Screens */}
      <div className="fixed bottom-5 right-5 z-50 sm:hidden">
        <Button
          variant="ghost"
          size="sm"
          className="h-10 w-10 border border-border bg-background/95 backdrop-blur shadow-md hover:bg-foreground hover:text-background cursor-pointer flex items-center justify-center transition-colors"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
        >
          <FaArrowUp className="h-4 w-4" />
        </Button>
      </div>
    </footer>
  );
}

