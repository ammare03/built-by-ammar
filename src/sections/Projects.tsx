import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import neuroPdf from "@/assets/images/neuro-pdf.png";
import wardrobeWizard from "@/assets/images/wardrobe-wizard.png";
import uniresell from "@/assets/images/uniresell.png";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import { ArrowUpRightIcon } from "lucide-react";
import grainImage from "@/assets/images/grain.jpg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";

const portfolioProjects = [
  {
    company: "Personal Project",
    year: "2025",
    title: "NeuroPDF",
    results: [
      {
        title: "AI-powered PDF summarization with interactive navigation.",
      },
      {
        title: "Secure authentication and subscription management.",
      },
      {
        title: "Modern responsive design with export functionality.",
      },
    ],
    link: "https://github.com/ammare03/neuro-pdf",
    image: neuroPdf,
  },
  {
    company: "Semester 2 - MCA",
    year: "2025",
    title: "Wardrobe Wizard",
    results: [
      { title: "Python-powered image processing for clothing visualization" },
      { title: "Smart outfit suggestions using real-time weather data" },
      { title: "MongoDB/JWT authentication with Razorpay payment integration" },
    ],
    link: "https://github.com/mjalawadiya/wardrobe-wizard",
    image: wardrobeWizard,
  },
  {
    company: "Semester 2 - MCA",
    year: "2025",
    title: "UniResell",
    results: [
      {
        title:
          "React marketplace with real-time search, price filters, and infinite scroll.",
      },
      {
        title: "Global cart and authentication state with custom alert hooks.",
      },
      {
        title:
          "Axios-powered data fetching with error handling and user permissions.",
      },
    ],
    link: "https://github.com/ammare03/uniresell",
    image: uniresell,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24" id="projects">
      <div className="container">
        <SectionHeader
          eyebrow="Real-world Results"
          title="Featured Projects"
          desc="See how I transformed concepts into engaging digital experiences"
        />
        <div className="flex flex-col mt-10 gap-20 md:mt-20">
          {portfolioProjects.map((project, projectIndex) => (
            <Card
              key={project.title}
              className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
              style={{ top: `calc(64px + ${projectIndex * 40}px` }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase traacking-widest text-sm text-tranggsparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl mt-2 md:text-4xl md:mt-5">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result, index) => (
                      <li
                        key={index}
                        className="flex gap-2 text-sm text-white/50 md:text-base"
                      >
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href={project.link} target="_blank">
                    <Button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 border border-white/15 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 hover:bg-white/70 transition-colors duration-300 ">
                      <span className="font-semibold">View Codebase</span>
                      <ArrowUpRightIcon />
                    </Button>
                  </Link>
                </div>
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="rounded-2xl mt-8 -mb-8 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
