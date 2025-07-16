import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRive, Layout, Fit, Alignment } from "@rive-app/react-canvas";
// adding comment
const Hero = () => {
  return (
    <section className="pt-32 pb-0 md:pt-40 md:pb-0 bg-gradient-to-b from-hemut-darkblue to-hemut-navyblue mb-0">
      <div className="container-custom">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-hemut-blue/30 border border-hemut-blue/40">
            <p className="text-sm font-medium text-hemut-yellow">
              AI-Powered Transport Management System
            </p>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Transform Fleet Operations with{" "}
            <span className="gradient-text">AI Automation</span>
          </h1>

          <p className="text-lg md:text-xl text-hemut-offwhite/90 mb-8 max-w-3xl">
            A fast new way to optimize fleets, track loads, and automate
            invoicing with intelligent AI agents that streamline your logistics
            operations.
          </p>

          <div className="flex justify-center mt-0 pb-0 mb-0">
            <a
              href="https://form.typeform.com/to/kwmV357x"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-gradient-to-r from-hemut-yellow to-hemut-brightyellow text-hemut-navyblue font-semibold h-12 px-8 text-base rounded-lg shadow-md hover:shadow-lg hover:from-hemut-brightyellow hover:to-hemut-yellow transition-all duration-300 ease-in-out transform hover:-translate-y-0.5">
                Book a Demo
              </Button>
            </a>
          </div>
        </div>

        {/* Rive Animation */}
        <div className="w-full flex justify-end items-center overflow-hidden -mt-20 py-0">
          <div className="max-w-3xl w-full">
            <RiveAnimation />
          </div>
        </div>

        {/* Dashboard Preview */}
        {/* <div className="mt-16 relative max-w-5xl mx-auto">
          <div className="absolute inset-0 bg-gradient-radial from-hemut-yellow/20 to-transparent opacity-40 blur-3xl -z-10"></div>
          <div className="bg-hemut-darkblue/40 backdrop-blur-sm border border-hemut-blue/30 rounded-xl overflow-hidden shadow-2xl">
            <div className="aspect-[16/9] w-full bg-hemut-navyblue/60 relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-hemut-offwhite/70">
                  Dashboard Preview Image
                </p>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

const RiveAnimation = () => {
  const { rive, RiveComponent } = useRive({
    src: "/truck.riv",
    autoplay: true,
    artboard: "Artboard",
    stateMachines: "State Machine 1",
    layout: new Layout({
      fit: Fit.Contain,
      alignment: Alignment.Center,
    }),
  });

  return (
    <div className="aspect-video w-full -ml-[120px] pt-0">
      <RiveComponent />
    </div>
  );
};

export default Hero;