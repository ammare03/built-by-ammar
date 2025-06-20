import Image from "next/image";
import memojiImage from "@/assets/images/memoji-computer.png";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <div className="py-32">
      <div className="container">
        <div className="flex flex-col items-center">
          <Image
            src={memojiImage}
            className="size-[100px]"
            alt="Memoji Behind Laptop"
          />
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg animate-pulse">
            <div className="bg-green-500 size-2.5 rounded-full"></div>
            <div className="text-sm font-medium ">Available for work now!</div>
          </div>
        </div>
        <h1>Building exceptional Full Stack Websites</h1>
        <p>
          I specialize in creating complete, functional and high performing web
          applications. Reach out for your next project!
        </p>
        <div>
          <Button
            variant={"outline"}
            className="flex items-center gap-2 border-white bg-transparent text-gray-900 hover:bg-gray-100"
          >
            <span className="text-white">Explore My Work</span>
            <ArrowDown className="h-6 w-6 text-white" />
          </Button>
          <Button variant={"outline"} className="flex items-center gap-2">
            <span>👋</span>
            <span className="text-gray-900">Lets Connect</span>
          </Button>
        </div>
      </div>
    </div>
  );
};
