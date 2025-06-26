import LWS from "@/assets/images/LWS.png";
import PES from "@/assets/images/PES.png";
import JHC from "@/assets/images/JHC.png";
import MPSTME from "@/assets/images/MPSTME.png";
import { SectionHeader } from "@/components/SectionHeader";
import Image from "next/image";
import { Card } from "@/components/Card";
import { Fragment } from "react";

const education = [
  {
    name: "Lodha World School",
    position: "ICSE Affiliated",
    text: "Lodha World School has been a transformative experience for me. The teachers are dedicated and the curriculum is well-rounded, focusing on both academics and extracurricular activities.",
    avatar: LWS,
  },
  {
    name: "People's Education Society",
    position: "HSC Affiliated",
    text: "People's Education Society has provided me with a solid foundation in my studies. The emphasis on practical learning and critical thinking has greatly enhanced my understanding of various sciences.",
    avatar: PES,
  },
  {
    name: "Jai Hind College",
    position: "BSc-IT Graduation",
    text: "With an average CGPA of 9.5 in my BSc-IT program, Jai Hind College has been instrumental in shaping my technical skills. The curriculum is rigorous and the faculty is highly knowledgeable, providing a great learning environment.",
    avatar: JHC,
  },
  {
    name: "Mukesh Patel School of Technology",
    position: "Masters in Computer Applications",
    text: "MPSTME, NMIMS has been a pivotal part of my academic journey. The program is heavily focused on practical applications of computer science, and the projects I've worked on have significantly enhanced my coding skills and problem-solving abilities.",
    avatar: MPSTME,
  },
];

export const EducationSection = () => {
  return (
    <div className="py-16 lg:py-24" id="education">
      <div className="container">
        <SectionHeader
          eyebrow="My Education"
          title="Learn About My Journey"
          desc="See how my education has shaped my skills and expertise in full stack development."
        />
        <div className="mt-16 md:20 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4">
          <div className="flex gap-8 pr-8 flex-none animate-move-left [animation-duration:90s] hover:[animation-play-state:paused]">
            {[...new Array(2)].fill(0).map((_, index) => (
              <Fragment key={index}>
                {education.map((edu) => (
                  <Card
                    key={edu.name}
                    className="max-w-xs p-6 md:max-w-md md:p-8 hover:scale-105 transition duration-300"
                  >
                    <div className="flex gap-4 items-center">
                      <div className="size-14 bg-gray-700 inline-flex rounded-full items-center justify-center flex-shrink-0">
                        <Image
                          src={edu.avatar}
                          alt={edu.name}
                          className="max-h-full"
                        />
                      </div>
                      <div>
                        <div className="font-semibold">{edu.name}</div>
                        <div className="text-sm text-white/40">
                          {edu.position}
                        </div>
                      </div>
                    </div>
                    <p className="mt-4 md:mt-6 text-sm md:text-base">
                      {edu.text}
                    </p>
                  </Card>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
