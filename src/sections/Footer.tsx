import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const footerLinks = [
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/ammar-engineer-9b673b326/",
    target: "_blank",
  },
  {
    title: "GitHub",
    href: "https://github.com/ammare03/",
    target: "_blank",
  },
  {
    title: "Leetcode",
    href: "https://leetcode.com/u/ammare03/",
    target: "_blank",
  },
  {
    title: "Back To Top",
    href: "/",
    target: "_self",
  },
];

export const Footer = () => {
  return (
    <footer className="relative -z-10 overflow-x-clip">
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10 animate-pulse"></div>
      <div className="container">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row items-center md:justify-between gap-8">
          <div className="text-white/40">
            &copy; {new Date().getFullYear().toString()}. All rights reserved
          </div>
          <nav className="flex flex-col md:flex-row items-center gap-8">
            {footerLinks.map((link) => (
              <Link
                className="inline-flex items-center gap-1.5 hover:scale-105 transition-all duration-200 ease-in-out"
                key={link.title}
                href={link.href}
                target={link.target}
                rel="noopener noreferrer"
              >
                <span className="font-semibold">{link.title}</span>
                <ArrowUpRight className="size-4" />
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
