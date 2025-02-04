"use client";

import React from "react";
import MagicButton from "./MagicButton";
import { scrollToSection } from "@/lib/scrollToSection";

const GetStartedAI = () => {
  return (
    <div
      className="relative sm:px-10 px-5 sm:py-10 py-5 w-full "
      id="get-started"
    >
      <div className="max-w-[93%] w-full mx-auto flex flex-col xl:gap-8 lg:gap-6 gap-6 items-start justify-center h-full">
        <div className="bg-gradient-to-r from-getStartedFrom via-getStartedVia to-getStartedTo sm:p-16 p-8 flex flex-col justify-center items-center gap-6 sm:rounded-tl-[7.5rem] rounded-tl-[4.5rem] sm:rounded-br-[7.5rem] rounded-br-[4.5rem] w-full mx-auto">
          <h3 className="bg-clip-text text-transparent bg-gradient-to-r from-heroColor via-white to-heroColor max-w-full min-[1525px]:text-[75px] min-[1420px]:text-[70px]  min-[1260px]:text-[60px] min-[1071px]:text-[50px] min-[976px]:text-[45px] min-[899px]:text-[40px] sm:text-[40px] text-[28px] min-[375px]:text-[32px] min-[414px]:text-[32px] leading-snug font-[family-name:var(--font-satoshi)] text-center mx-auto">
            Get Started with AI Today!
          </h3>

          <p className="max-w-3xl text-white xl:text-lg sm:text-base text-sm text-center font-[family-name:var(--font-satoshi)]">
            Embrace the future with CollabEZ’s AI and Automation services. Let
            us help you integrate AI into your business to boost efficiency,
            reduce costs, and drive growth.
          </p>
          <p className="max-w-3xl text-white xl:text-xl sm:text-lg text-base text-center font-[family-name:var(--font-satoshi)]">
            <span className="text-heroColor">Contact us today</span> to discuss
            how our AI expertise can transform your business.
          </p>

          <a className="relative cursor-pointer">
            <MagicButton
              title="Schedule a Free Consultation"
              position="right"
              otherClasses="font-[family-name:var(--font-satoshi)]"
              handleClick={() => scrollToSection("servicesAI")}
            />
          </a>
        </div>

        <div className="h-[1px] w-full bg-white/20 mt-3"></div>
      </div>

      {/* <div className="absolute -bottom-40 -right-48 bg-blur-gradient-purple  md:w-[900px] md:h-[900px] w-[500px] h-[500px]" /> */}
    </div>
  );
};

export default GetStartedAI;
