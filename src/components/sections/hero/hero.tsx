"use client";

import { useState, useEffect } from "react";
import MyImage from "../../../../public/mypic.jpg";
import Image from "next/image";
import { NavLink } from "../../layout/navbar";
import { FaFacebook, FaGithub, FaLinkedinIn, FaTelegram } from "react-icons/fa";
import { cn } from "@/lib/utils";
import { DiaTextReveal } from "@/components/ui/dia-text-reveal";

const ROLE = [
  {
    id: 0,
    role: "Web Developer",
  },
  {
    id: 1,
    role: "UI/UX Designer",
  },
  {
    id: 2,
    role: "Software Developer",
  },
];
function DateTime({ className }: { className?: string }) {
  const [date, setDate] = useState<Date | null>(null);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setDate(new Date());
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!date) {
    return (
      <div className={cn("flex flex-col", className)}>
        <span className="uppercase text-2xl md:text-3xl lg:text-5xl invisible">00:00 AM</span>
        <span className="uppercase text-xs text-muted-foreground">
          Phnom penh, cambodia
        </span>
      </div>
    );
  }

  const formatTime = date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className={cn("flex flex-col", className)}>
      <span className="uppercase text-2xl lg:text-5xl">{formatTime}</span>
      <span className="uppercase text-xs text-muted-foreground">
        Phnom penh, cambodia
      </span>
    </div>
  );
}

export default function Hero() {

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 relative">
      <div className="absolute top-0 bottom-0 w-[100vw] left-1/2 -translate-x-1/2 border-t border-b border-border pointer-events-none -z-10"></div>

      <div className="flex flex-row items-center justify-start md:justify-center md:col-span-2">
        <div className="border-r border-border flex justify-center shrink-0">
          <div className="w-40 h-40 overflow-hidden rounded-full m-4">
            <Image
              src={MyImage}
              alt="My Image"
              loading="eager"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="flex-1 flex flex-col items-start px-4 sm:px-8 py-4 w-full text-left">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold uppercase tracking-tighter">
            Seng Lyhour
          </h1>
          <div className="h-6 mt-1 md:mt-2 relative w-full flex justify-start">
            <DiaTextReveal
              text={ROLE.map((r) => r.role)}
              repeat
              repeatDelay={1.5}
              duration={1.2}
              fixedWidth
              className="text-muted-foreground font-medium text-sm sm:text-base"
            />
          </div>
          <div className="mt-3 md:mt-4 flex gap-1 sm:gap-2 items-start justify-start">
            <NavLink href="https://github.com/1yhour">
              <div className="bg-foreground/5 hover:bg-foreground/10 transition-colors border border-border p-1.5 sm:p-2">
                <FaGithub className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
            </NavLink>
            <NavLink href="https://linkedin.com">
              <div className="bg-foreground/5 hover:bg-foreground/10 transition-colors border border-border p-1.5 sm:p-2">
                <FaLinkedinIn className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
            </NavLink>
            <NavLink href="https://telegram.org">
              <div className="bg-foreground/5 hover:bg-foreground/10 transition-colors border border-border p-1.5 sm:p-2">
                <FaTelegram className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
            </NavLink>
            <NavLink href="https://facebook.com">
              <div className="bg-foreground/5 hover:bg-foreground/10 transition-colors border border-border p-1.5 sm:p-2">
                <FaFacebook className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
            </NavLink>
          </div>
        </div>
      </div>
      <div className="flex flex-row md:flex-col justify-between md:justify-center items-center md:items-start border-t md:border-t-0 md:border-l border-border relative py-4 px-4 md:py-0 md:px-0">
        <div className="md:absolute top-4 right-4 flex justify-center items-center">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse "></div>
          <span className="text-xs font-medium text-green-500 ml-2">
            Available for work
          </span>
        </div>
        <div className="md:ml-8 mt-0 md:mt-0 text-right md:text-left">
          <DateTime />
        </div>
      </div>
    </div>
  );
}
