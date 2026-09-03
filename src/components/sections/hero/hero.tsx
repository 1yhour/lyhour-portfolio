"use client";

import { useState, useEffect } from "react";
import MyImage from "../../../../public/mypic.jpg";
import Image from "next/image";
import { NavLink } from "../../layout/navbar";
import { FaFacebook, FaGithub, FaLinkedinIn, FaTelegram } from "react-icons/fa";
import Scales from "@/components/ui/scales";
import { cn } from "@/lib/utils";
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
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  const formatTime = date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className={cn("flex flex-col", className)}>
      <span className="uppercase text-5xl">{formatTime}</span>
      <span className="uppercase text-xs text-muted-foreground">
        Phnom penh, cambodia
      </span>
    </div>
  );
}

export default function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % ROLE.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 border-t border-b ">
      <div className="flex items-center justify-center col-span-2">
        <div className="border-r">
          <div className="w-48 h-48 overflow-hidden rounded-full">
            <Image
              src={MyImage}
              alt="My Image"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="flex-1 flex flex-col px-8 border-t border-b py-2">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold uppercase tracking-tighter">
            Seng Lyhour
          </h1>
          <div className="h-6 mt-2 relative w-full">
            {ROLE.map((r, index) => (
              <span
                key={r.id}
                className={`absolute inset-x-0 transition-opacity duration-1000 ${
                  index === currentRoleIndex ? "opacity-100" : "opacity-0"
                } text-gray-500 font-medium`}
              >
                {r.role}
              </span>
            ))}
          </div>
          <div className="mt-2 flex gap-2 items-start">
            <NavLink href="https://github.com/1yhour">
              <div className="bg-foreground/10 border-foreground p-1 ">
                <FaGithub />
              </div>
            </NavLink>
            <NavLink href="https://github.com/1yhour">
              <div className="bg-foreground/10 border-foreground p-1 ">
                <FaLinkedinIn />
              </div>
            </NavLink>
            <NavLink href="https://github.com/1yhour">
              <div className="bg-foreground/10 border-foreground p-1 ">
                <FaTelegram />
              </div>
            </NavLink>
            <NavLink href="https://github.com/1yhour">
              <div className="bg-foreground/10 border-foreground p-1 ">
                <FaFacebook />
              </div>
            </NavLink>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-start border-l">
        <div className="relative right-[-60%] flex justify-center items-center top-[-15%] ">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse "></div>
          <span className="text-xs font-medium text-green-500 ml-2">
            Available for work
          </span>
        </div>
        <div className="ml-5">
          <DateTime />
        </div>
      </div>
    </div>
    
  );
}
