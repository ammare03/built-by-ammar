"use client";

import ChromeIcon from "@/assets/icons/chrome.svg";
import CssIcon from "@/assets/icons/css3.svg";
import GitHubIcon from "@/assets/icons/github.svg";
import HTML5Icon from "@/assets/icons/html5.svg";
import NextJsIcon from "@/assets/icons/nextjs.svg";
import ReactIcon from "@/assets/icons/react.svg";
import JavaScriptIcon from "@/assets/icons/square-js.svg";
import TailwindIcon from "@/assets/icons/tailwind.svg";
import NodeJsIcon from "@/assets/icons/nodejs.svg";
import AndroidIcon from "@/assets/icons/android.svg";
import PythonIcon from "@/assets/icons/python.svg";
import FirebaseIcon from "@/assets/icons/firebase.svg";
import mapImage from "@/assets/images/map.png";
import smileMemoji from "@/assets/images/memoji-smile.png";
import movieImage from "@/assets/images/movie.png";
import { Card } from "@/components/Card";
import { CardHeader } from "@/components/CardHeader";
import { SectionHeader } from "@/components/SectionHeader";
import { ToolboxItems } from "@/components/ToolboxItems";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const toolboxItems = [
  {
    title: "JavaScript",
    iconType: JavaScriptIcon,
  },
  {
    title: "HTML5",
    iconType: HTML5Icon,
  },
  {
    title: "CSS3",
    iconType: CssIcon,
  },
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "Chrome",
    iconType: ChromeIcon,
  },
  {
    title: "GitHub",
    iconType: GitHubIcon,
  },
  {
    title: "Next.js",
    iconType: NextJsIcon,
  },
  {
    title: "Tailwind CSS",
    iconType: TailwindIcon,
  },
  {
    title: "Node.js",
    iconType: NodeJsIcon,
  },
  {
    title: "Python",
    iconType: PythonIcon,
  },
  {
    title: "Firebase",
    iconType: FirebaseIcon,
  },
  {
    title: "Android",
    iconType: AndroidIcon,
  },
];

const hobbies = [
  {
    title: "Photography",
    emoji: "📸",
    left: "5%",
    top: "5%",
  },
  {
    title: "Music",
    emoji: "🎵",
    left: "50%",
    top: "5%",
  },
  {
    title: "Cooking",
    emoji: "🍕",
    left: "10%",
    top: "35%",
  },
  {
    title: "Fitness",
    emoji: "🏋️‍♂️",
    left: "35%",
    top: "40%",
  },
  {
    title: "Billiards",
    emoji: "🎱",
    left: "70%",
    top: "45%",
  },
  {
    title: "Politics",
    emoji: "⚖️",
    left: "5%",
    top: "65%",
  },
];

export const AboutSection = () => {
  const constraintRef = useRef(null);
  return (
    <div className="py-20 lg:py-28" id="about">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="A Glimpse Into My World"
          desc="Learn More About Who I Am, What I Do, and What Inspires Me"
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader
                title="Watchlist"
                desc="Interstellar, Shutter Island, Inception, and more."
              />
              <div className="w-40 mx-auto h-40">
                <Image
                  src={movieImage}
                  alt="Book Cover"
                  className="rounded-lg h-full object-cover"
                />
              </div>
            </Card>
            <Card className="h-[320px] md:col-span-3 lg:col-span-2">
              <CardHeader
                title="My Toolbox"
                desc="Explore the technologies and tools I use to craft exceptional digital experiences."
              />
              <ToolboxItems
                items={toolboxItems}
                className=""
                itemsWrapperClassName="animate-move-left [animation-duration:30s]"
              />
              <ToolboxItems
                items={toolboxItems}
                className="mt-6 "
                itemsWrapperClassName="animate-move-right [animation-duration:15s]"
              />
            </Card>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5  lg:grid-cols-3">
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader
                title="Beyond the Code"
                desc="Explore my interests and hobbies beyond the digital realm."
                className="px-6 py-6"
              />
              <div className="relative flex-1" ref={constraintRef}>
                {hobbies.map((hobby) => (
                  <motion.div
                    key={hobby.title}
                    className="absolute inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5"
                    style={{ left: hobby.left, top: hobby.top }}
                    drag
                    dragConstraints={constraintRef}
                    dragElastic={0.8}
                  >
                    <span className="font-medium text-gray-950">
                      {hobby.title}
                    </span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
              <Image
                src={mapImage}
                alt="map"
                className="h-full w-full object-cover object-left-top"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outine-gray-950/30">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]"></div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"></div>
                <Image
                  src={smileMemoji}
                  alt="smile memoji"
                  className="size-20 scale-[0.75] px-2"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
