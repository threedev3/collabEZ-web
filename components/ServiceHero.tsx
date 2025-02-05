"use client";
import React, { useState } from "react";
import Navbar from "./Navbar";
import { CardSpotlight } from "./ui/card-spotlight";
import { Spotlight } from "./ui/spotlight";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import MagicButton from "./MagicButton";
import { scrollToSection } from "@/lib/scrollToSection";

interface HeroProps {
  navItems: any;
}

const ServiceHero: React.FC<HeroProps> = ({ navItems }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <section
      className="min-h-screen relative z-30 border-b border-white/20"
      id="home"
    >
      <div
        className="bg-[url('/heroBg.png')] bg-no-repeat  bg-cover bg-center w-full relative z-30"
        // id="home"
      >
        <CardSpotlight className=" relative sm:px-10 px-5 sm:py-10 py-5 h-[100vh] w-full z-10">
          <div className="bg-black absolute inset-0 h-screen w-full bg-opacity-5" />
          <div>
            <Spotlight
              className="-top-12 -left-10 md:left-0 md:top-0 h-screen "
              fill="#854CFF"
            />
          </div>

          <div className="max-w-[93%] w-full mx-auto relative z-0 ">
            <Navbar
              isMenuOpen={isMenuOpen}
              setIsMenuOpen={setIsMenuOpen}
              navItems={navItems}
              ctaAction={"contact-ai"}
            />
          </div>

          <div
            className={`flex justify-center items-center relative h-[96%] lg:z-[0] ${
              isMenuOpen ? "-z-[1]" : "z-0"
            }`}
          >
            <div className=" flex flex-col min-[1400px]:gap-16 xl:gap-16 lg:gap-10 gap-16 items-center justify-center h-full">
              <TextGenerateEffect
                words={["AI & Automation Solutions"]}
                // rotatingWords={[
                //   "Websites",
                //   "Mobile Apps",
                //   "Custom Software",
                //   "Ecommerce Solutions",
                // ]}
                className="text-center text-[28px] min-[375px]:text-[30px] min-[414px]:text-[32px] min-[540px]:text-[40px] md:text-[56px] lg:text-[56px] xl:text-[68px] min-[1400px]:text-[80px] font-[family-name:var(--font-satoshi-bold)] max-w-[89vw] md:max-w-2xl lg:max-w-[80vw] xl:max-w-[85vw] min-[1400px]:max-w-[68vw]"
              />

              <p className="text-center md:tracking-wider xl:mb-4 text-[17px] min-[414px]:text-lg min-[540px]:text-xl md:text-2xl lg:text-2xl xl:text-3xl font-[family-name:var(--font-satoshi)] font-semibold max-w-[89vw] md:max-w-2xl lg:max-w-[80vw] xl:max-w-[85vw] min-[1400px]:max-w-[38vw]">
                Drive Efficiency, Reduce Costs, and Scale Faster{" "}
                {/* <span className="text-heroColor">
                  AI Automation Solutions at CollabEZ
                </span> */}
              </p>

              {/* <p className="text-center md:tracking-wider xl:mb-4 text-[17px] min-[414px]:text-lg min-[540px]:text-xl md:text-2xl lg:text-2xl xl:text-3xl font-[family-name:var(--font-satoshi)]">
                Websites • Mobile Apps • Custom Software
              </p> */}
              <p className="text-center md:tracking-wider xl:mb-4 text-base text-white/80 min-[414px]:text-base min-[540px]:text-base md:text-lg xl:text-xl font-[family-name:var(--font-satoshi)] max-w-[89vw] md:max-w-2xl lg:max-w-[80vw] xl:max-w-[85vw] min-[1400px]:max-w-[60vw]">
                At CollabEZ, we leverage the power of Artificial Intelligence
                (AI) and AI automation to streamline business operations,
                enhance decision-making, and improve customer experiences. Our
                AI-driven solutions help businesses reduce costs, increase
                efficiency, and gain a competitive edge in the digital era.
              </p>

              {/* <a className="relative cursor-pointer">
                <MagicButton
                  title="Explore Your Possibilities"
                  position="right"
                  otherClasses="font-[family-name:var(--font-satoshi)]"
                  handleClick={() => scrollToSection("services")}
                />
              </a> */}
            </div>
          </div>
        </CardSpotlight>
      </div>
    </section>
  );
};

export default ServiceHero;
