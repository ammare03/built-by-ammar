import ChromeIcon from "@/assets/icons/chrome.svg";
import CssIcon from "@/assets/icons/css3.svg";
import GitHubIcon from "@/assets/icons/github.svg";
import HTML5Icon from "@/assets/icons/html5.svg";
import ReactIcon from "@/assets/icons/react.svg";
import JavaScriptIcon from "@/assets/icons/square-js.svg";
import bookImage from "@/assets/images/book-cover.png";
import mapImage from "@/assets/images/map.png";
import smileMemoji from "@/assets/images/memoji-smile.png";
import { Card } from "@/components/Card";
import { CardHeader } from "@/components/CardHeader";
import { SectionHeader } from "@/components/SectionHeader";
import { TechIcon } from "@/components/TechIcon";
import { ToolboxItems } from "@/components/ToolboxItems";
import Image from "next/image";

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
];

const hobbies = [
  {
    title: "Photography",
    emoji: "📸",
  },
  {
    title: "Music",
    emoji: "🎵",
  },
  {
    title: "Cooking",
    emoji: "🍕",
  },
  {
    title: "Fitness",
    emoji: "🏋️‍♂️",
  },
  {
    title: "Billiards",
    emoji: "🎱",
  },
  {
    title: "Politics",
    emoji: "⚖️",
  },
];

export const AboutSection = () => {
  return (
    <div className="py-20">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="A Glimpse Into My World"
          desc="Learn More About Who I Am, What I Do, and What Inspires Me"
        />
        <div className="mt-20 flex flex-col gap-8">
          <Card className="h-[320px]">
            <CardHeader
              title="My Reads"
              desc="Explore the books shaping my perspectives"
            />
            <div className="w-40 mx-auto mt-8">
              <Image src={bookImage} alt="Book Cover" />
            </div>
          </Card>
          <Card>
            <CardHeader
              title="My Toolbox"
              desc="Explore the technologies and tools I use to craft exceptional digital experiences."
            />
            <ToolboxItems items={toolboxItems} className="mt-6" />
            <ToolboxItems
              items={toolboxItems}
              className="mt-6 "
              itemsWrapperClassName="-transalte-x-1/2"
            />
          </Card>
          <Card className="h-[320px] p-0">
            <CardHeader
              title="Beyond the Code"
              desc="Explore my interests and hobbies beyond the digital realm."
              className="px-6 pt-6"
            />
            <div>
              {hobbies.map((hobby) => (
                <div key={hobby.title}>
                  <span>{hobby.title}</span>
                  <span>{hobby.emoji}</span>
                </div>
              ))}
            </div>
          </Card>
          <Card>
            <Image src={mapImage} alt="map" className="size-10" />
            <Image src={smileMemoji} alt="smile memoji" className="size-10" />
          </Card>
        </div>
      </div>
    </div>
  );
};
