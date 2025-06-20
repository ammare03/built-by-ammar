import Image from "next/image";
import memojiImage from "@/assets/images/memoji-computer.png";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <div>
      <div className="container">
        <Image src={memojiImage} alt="Memoji Behind Laptop" />
        <div>
          <div></div>
          <div>Available for work now!</div>
        </div>
        <h1>Building exceptional Full Stack Websites</h1>
        <p>
          I specialize in creating complete, functional and high performing web
          applications. Reach out for your next project!
        </p>
        <div>
          <Button variant={"outline"} className="flex items-center gap-2">
            <span className="text-gray-900">Explore My Work</span>
            <ArrowDown className="h-6 w-6 text-gray-900" />
          </Button>
        </div>
      </div>
    </div>
  );
};
