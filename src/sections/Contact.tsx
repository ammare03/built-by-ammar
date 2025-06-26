import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import grainImage from "@/assets/images/grain.jpg";

export const ContactSection = () => {
  return (
    <div className="py-16 pt-12">
      <div className="container">
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center relative overflow-hidden z-0">
          <div
            className="absolute inset-0 opacity-5 -z-10"
            style={{ backgroundImage: `url(${grainImage.src})` }}
          ></div>
          <h2 className="font-serif text-2xl">
            Lets create something amazing together
          </h2>
          <p className="text-sm mt-2">
            Ready to bring your next project to life? Lets connect and discuss
            how I can help you achieve your goals.
          </p>
          <Button
            variant={"default"}
            className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 mt-6 hover:bg-gray-900/95 hover:scale-105 transition-all duration-200"
          >
            <span className="font-semibold">Contact Me</span>
            <ArrowUpRight size={4} />
          </Button>
        </div>
      </div>
    </div>
  );
};
