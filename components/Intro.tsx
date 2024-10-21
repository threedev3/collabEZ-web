import React from "react";
import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./MagicButton";

const Intro = () => {
  return (
    <div className="relative sm:px-10 px-5 sm:py-10 py-5 w-full">
      <div className="max-w-[93%] w-full mx-auto flex flex-col xl:gap-6 lg:gap-6 gap-6 items-start justify-center h-full">
        <div className="flex min-[806px]:flex-row flex-col min-[806px]:gap-6 gap-0 items-start justify-between w-full">
          <h3 className="bg-clip-text text-transparent bg-gradient-to-r from-heroColor via-white to-heroColor max-w-7xl min-[1525px]:text-[75px] min-[1420px]:text-[70px]  min-[1260px]:text-[60px] min-[1071px]:text-[50px] min-[976px]:text-[45px] min-[899px]:text-[40px] sm:text-[40px] text-[28px] min-[414px]:text-[32px] leading-snug font-[family-name:var(--font-satoshi)]">
            Deadline-Driven Digital Solutions for UAE & KSA
          </h3>
          {/* <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[3px] focus:outline-none min-[1525px]:mt-8 mt-6 flex-shrink-0">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-white xl:px-8 px-4 py-3 lg:text-lg text-base font-[family-name:var(--font-satoshi)] font-semibold text-black backdrop-blur-3xl flex-shrink-0">
              Start Your Journey
            </span>
          </button> */}
          <a className="min-[1525px]:mt-8 mt-6 inline-flex flex-shrink-0">
            <MagicButton
              title="Start Your Journey"
              // icon={<FaLocationArrow />}
              position="right"
              otherClasses="font-[family-name:var(--font-satoshi)] "
            />
          </a>
        </div>
        <div>
          <p className="font-[family-name:var(--font-satoshi)] text-white lg:text-xl sm:text-lg text-base relative z-10">
            From Concept to Launch – We've Got You Covered
          </p>
        </div>
      </div>

      <div className="absolute -bottom-64 -left-48 bg-blur-gradient opacity-80 w-[500px] h-[500px]" />
    </div>
  );
};

export default Intro;
