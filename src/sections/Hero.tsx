import Image from "next/image";
import memojiImage from "@/assets/images/memoji-computer.png";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import grainImage from "@/assets/images/grain.jpg";
import { HeroOrbit } from "@/components/HeroOrbit";
import StarIcon from "@/assets/icons/star.svg";
import SparkleIcon from "@/assets/icons/sparkle.svg";
import Link from "next/link";

export const HeroSection = () => {
  return (
    <div
      id="hero"
      className="py-16 md:py-24 lg:py-30 relative z-0 overflow-x-clip"
    >
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{ backgroundImage: `url(${grainImage.src})` }}
        />
        <div className="size-[620px] hero-ring" />
        <div className="size-[820px] hero-ring" />
        <div className="size-[1020px] hero-ring" />
        <div className="size-[1220px] hero-ring" />

        <HeroOrbit
          size={430}
          rotation={-14}
          shouldOrbit
          orbitDuration="30s"
          shouldSpin
          spinDuration="3s"
        >
          <SparkleIcon className="size-8 text-emerald-300/20" />
        </HeroOrbit>

        <HeroOrbit
          size={440}
          rotation={79}
          shouldOrbit
          orbitDuration="32s"
          shouldSpin
          spinDuration="3s"
        >
          <SparkleIcon className="size-5 text-emerald-300/20" />
        </HeroOrbit>

        <HeroOrbit size={520} rotation={-41} shouldOrbit orbitDuration="34s">
          <div className="size-2 rounded-full bg-emerald-300/20" />
        </HeroOrbit>

        <HeroOrbit
          size={530}
          rotation={170}
          shouldOrbit
          orbitDuration="36s"
          shouldSpin
          spinDuration="3s"
        >
          <SparkleIcon className="size-10 text-emerald-300/20" />
        </HeroOrbit>

        <HeroOrbit
          size={550}
          rotation={10}
          shouldOrbit
          orbitDuration="38s"
          shouldSpin
          spinDuration="6s"
        >
          <StarIcon className="size-12 text-emerald-300" />
        </HeroOrbit>

        <HeroOrbit
          size={590}
          rotation={98}
          shouldOrbit
          orbitDuration="40s"
          shouldSpin
          spinDuration="6s"
        >
          <StarIcon className="size-8 text-emerald-300" />
        </HeroOrbit>

        <HeroOrbit size={650} rotation={-25} shouldOrbit orbitDuration="42s">
          <div className="size-2 rounded-full bg-emerald-300/20" />
        </HeroOrbit>

        <HeroOrbit
          size={710}
          rotation={144}
          shouldOrbit
          orbitDuration="44s"
          shouldSpin
          spinDuration="3s"
        >
          <SparkleIcon className="size-14 text-emerald-300/20" />
        </HeroOrbit>

        <HeroOrbit size={720} rotation={105} shouldOrbit orbitDuration="46s">
          <div className="size-3 rounded-full bg-emerald-300/20" />
        </HeroOrbit>

        <HeroOrbit
          size={800}
          rotation={-64}
          shouldOrbit
          orbitDuration="48s"
          shouldSpin
          spinDuration="6s"
        >
          <StarIcon className="size-28 text-emerald-300" />
        </HeroOrbit>
      </div>
      <div className="container">
        <div className="flex flex-col items-center">
          <Image
            src={memojiImage}
            className="size-36"
            alt="Memoji Behind Laptop"
          />
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg ">
            <div className="bg-green-500 size-2.5 rounded-full relative">
              <div className="bg-green-500 size-2.5 rounded-full absolute inset-0 animate-ping-large"></div>
            </div>
            <div className="text-sm font-medium capitalize">
              Available for work now!
            </div>
          </div>
        </div>
        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">
            Building Exceptional Full Stack Websites
          </h1>
          <p className="mt-4 text-center text-white/60 md:text-lg">
            I specialize in creating complete, functional and high performing
            web applications. Reach out for your next project!
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-6 gap-4">
          <Link href="#projects" className="z-10">
            <Button
              variant={"outline"}
              className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl text-white bg-transparent hover:bg-white/10 hover:scale-105 transition-all duration-300 z-10"
            >
              <span className="text-white font-semibold">Explore My Work</span>
              <ArrowDown className="h-6 w-6 text-white" />
            </Button>
          </Link>
          <Link href="/#contact" className="z-10">
            <Button
              variant={"outline"}
              className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl hover:bg-white/80 hover:scale-105 transition-all duration-300 z-10"
            >
              <span>👋</span>
              <span className="text-gray-900 font-semibold">Lets Connect</span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
