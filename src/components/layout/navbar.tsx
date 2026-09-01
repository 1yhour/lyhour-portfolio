"use client";
import Link from "next/link";
import { Search, Moon, Sun } from "lucide-react";
import { useState } from "react";
import { Command, CommandInput, CommandList } from "@/components/ui/command";
import { Button } from "../ui/button";
import { CommandDialog, CommandEmpty, CommandGroup, CommandItem } from "cmdk";

import { Notch, NotchItem } from "@/components/ui/notch";
import { Menu, Home, Info, Briefcase, PhoneCall } from "lucide-react";
import { useRouter } from "next/navigation";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink = ({
  href,
  children,
}: NavLinkProps) => {
  return (
    <Link
      href={href}
      className="transition-colors hover:text-foreground/80 text-foreground/60"
    >
      {children}
    </Link>
  );
};
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const router = useRouter();

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const notchItems: NotchItem[] = [
    {
      id: "search",
      label: "Search",
      icon: <Search className="h-4 w-4" />,
      options: [],
      onClick: () => setOpen(true),
    },
    {
      id: "menu",
      label: "Menu",
      icon: <Menu className="h-4 w-4" />,
      options: [
        { id: "/", label: "Home", icon: <Home className="h-4 w-4" /> },
        { id: "/about", label: "About", icon: <Info className="h-4 w-4" /> },
        { id: "/services", label: "Services", icon: <Briefcase className="h-4 w-4" /> },
        { id: "/projects", label: "Projects", icon: <Search className="h-4 w-4" /> },
        { id: "/contact", label: "Contact", icon: <PhoneCall className="h-4 w-4" /> },
      ],
    },
  ];

  const handleNotchChange = (itemId: string, optionId: string) => {
    if (itemId === "menu") {
      router.push(optionId);
    }
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center justify-between max-w-5xl mx-auto px-4">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center space-x-2">
              <svg
                viewBox="0 0 1133 412"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-auto shrink-0 text-foreground"
              >
                <rect x="0" width="103" height="412" fill="currentColor"></rect>
                <rect x="103" y="309" width="206" height="103" fill="currentColor"></rect>
                <rect x="412" width="103" height="103" fill="currentColor"></rect>
                <rect x="618" width="103" height="103" fill="currentColor"></rect>
                <rect x="515" y="103" width="103" height="309" fill="currentColor"></rect>
                <rect x="824" width="103" height="412" fill="currentColor"></rect>
                <rect x="927" y="154.5" width="103" height="103" fill="currentColor"></rect>
                <rect x="1030" width="103" height="412" fill="currentColor"></rect>
              </svg>
            </Link>
          </div>

          <div className="flex items-center gap-2">
            <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
              <NavLink href="/about">About</NavLink>
              <NavLink href="/services">Services</NavLink>
              <NavLink href="/projects">Projects</NavLink>
              <NavLink href="/contact">Contact</NavLink>
            </nav>
            <div className="hidden sm:block">
              <Button
              variant="outline"
              className="relative h-8 w-full justify-start rounded-[0.5rem] bg-muted/50 text-sm font-normal text-muted-foreground shadow-none sm:pr-12 md:w-40 lg:w-64"
              onClick={() => setOpen(true)}
            >
              <Search className="mr-2 h-4 w-4" />
              <span className="hidden lg:inline-flex">Search...</span>
              <span className="inline-flex lg:hidden">Search...</span>
              <kbd className="pointer-events-none absolute right-[0.3rem] top-[0.3rem] hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
                <span className="text-xs">⌘</span>K
              </kbd>
            </Button>

            <CommandDialog open={open} onOpenChange={setOpen}>
              <CommandInput placeholder="Type a command or search..." />
              <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup heading="Links">
                  <CommandItem onSelect={() => { router.push("/"); setOpen(false); }}>Home</CommandItem>
                  <CommandItem onSelect={() => { router.push("/about"); setOpen(false); }}>About</CommandItem>
                  <CommandItem onSelect={() => { router.push("/services"); setOpen(false); }}>Services</CommandItem>
                  <CommandItem onSelect={() => { router.push("/projects"); setOpen(false); }}>Projects</CommandItem>
                  <CommandItem onSelect={() => { router.push("/contact"); setOpen(false); }}>Contact</CommandItem>
                </CommandGroup>
              </CommandList>
            </CommandDialog>
            </div>
              <div className="mx-1 h-4 w-px bg-neutral-300 dark:bg-neutral-700 hidden sm:block"></div>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMode}
              className="h-8 w-8"
            >
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </div>
        </div>
      </header>

      <div className="md:hidden">
        <Notch items={notchItems} position="bottom" onItemChange={handleNotchChange} />
      </div>
    </>
  );
}
