"use client";
import React from "react";
import { MdArrowOutward } from "react-icons/md";
import { CardSpotlight } from "./ui/card-spotlight";
import { motion } from "framer-motion";
import { serviceItems } from "@/data";

export function Services() {
  return (
    <div className="relative sm:px-10 px-5 sm:py-10 py-5 w-full" id="services">
      <div className="max-w-[93%] w-full mx-auto flex flex-col xl:gap-6 lg:gap-6 gap-6 items-start justify-center h-full">
        <div className="flex  min-[806px]:gap-6 gap-0 items-start justify-between w-full">
          <h3 className="bg-clip-text text-transparent bg-gradient-to-r from-heroColor via-white to-heroColor max-w-7xl min-[1525px]:text-[75px] min-[1420px]:text-[70px]  min-[1260px]:text-[60px] min-[1071px]:text-[50px] min-[976px]:text-[45px] min-[899px]:text-[40px] sm:text-[40px] text-[28px] min-[375px]:text-[32px] min-[414px]:text-[32px] leading-snug font-[family-name:var(--font-satoshi)]">
            Let’s work together
          </h3>
        </div>
        <div className="flex min-[806px]:flex-row flex-col justify-between gap-6 w-full min-[806px]:items-center items-start">
          <p className="font-[family-name:var(--font-satoshi)] text-white lg:text-lg sm:text-base text-base relative z-10 max-w-lg">
            help you to build website company that is modern, user friendly,
            good CEO, and Clean design
          </p>
          <button className="relative inline-flex h-12 overflow-hidden rounded-lg p-[3px] focus:outline-none  flex-shrink-0">
            {/* <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" /> */}
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-heroColor xl:px-8 px-4 py-3 lg:text-lg text-base font-[family-name:var(--font-satoshi)] font-semibold text-white backdrop-blur-3xl flex-shrink-0">
              Get Started
              {/* <FaLocationArrow className="ml-3 mt-1.5 xl:block hidden" /> */}
            </span>
          </button>
        </div>

        {/* Grid for the services */}
        <div className="grid lg:grid-cols-2 flex-wrap  gap-6 w-full mt-6">
          {serviceItems.map((item, index) => (
            <CardSpotlight
              key={index}
              className={`${
                index === 0 || index === 3 || index === 4
                  ? "col-span-1"
                  : "col-span-1"
              } relative bg-gradient-to-t from-[#111] serviceBorder to-[#1a1a1a] p-6 shadow-md hover:shadow-lg transition-shadow duration-300 group overflow-hidden max-h-96 flex justify-between items-center gap-4`}
            >
              {/* Gradient Border Animation */}
              {/* <motion.div
                initial={{ backgroundPosition: "0% 0%" }}
                animate={{ backgroundPosition: "200% 200%" }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-0 rounded-3xl border-[2px] border-transparent bg-gradient-to-r from-[#5B3CCC] to-[#000000] bg-clip-border"
                style={{
                  backgroundSize: "400% 400%",
                }}
              ></motion.div> */}
              {/* Background */}
              {/* <div
                className={item.className}
                style={{
                  backgroundImage: `url(${item.sideImg})`,
                }}
              /> */}
              {/* Overlay */}
              {/* <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-900/50 to-blue-900/50 group-hover:opacity-75 transition-opacity duration-300"></div> */}

              {/* Content */}
              <div className="relative flex flex-col justify-center space-y-6 text-white z-10 h-full">
                <div className="w-[60px] h-[60px] bg-[#6F6F71] rounded-full flex justify-center items-center flex-shrink-0">
                  <img
                    src={item.icon}
                    alt={`${item.title} Icon`}
                    className="h-[33px] w-[33px] object-contain"
                  />
                </div>
                <h3 className="font-[family-name:var(--font-satoshi)] font-bold text-white xl:text-4xl lg:text-[26px] md:text-3xl sm:text-2xl text-2xl  mb-2 mt-2">
                  {item.title}
                </h3>
                <p className="font-[family-name:var(--font-satoshi)] font-normal text-white xl:text-lg text-base mb-4 max-w-[380px]">
                  {item.description}
                </p>
                <div className="flex gap-2 items-start">
                  <a
                    href=""
                    className="font-[family-name:var(--font-satoshi)] underline"
                  >
                    Start With Us
                  </a>
                  <MdArrowOutward />
                </div>
              </div>
              <img src={item.sideImg} className={item.className} />
            </CardSpotlight>
          ))}
        </div>
      </div>

      <div className="absolute top-72 -right-32 bg-blur-gradient opacity-80 w-[500px] h-[500px]" />
      <div className="absolute -bottom-10 -left-32 bg-blur-gradient opacity-80 w-[500px] h-[500px]" />

      <div className="bg-blackBg w-full absolute -bottom-28 left-0 right-0 flex flex-row whitespace-nowrap overflow-x-auto overflow-y-hidden no-scrollbar px-6 py-8 transform -rotate-3">
        <div className="flex animate-marquee-ltr gap-12">
          {/* <div className="flex gap-12"> */}
          {Array(2)
            .fill(null)
            .map((_, duplicateIndex) => (
              <div
                className="flex gap-12 whitespace-nowrap"
                key={duplicateIndex}
              >
                {Array(10)
                  .fill(null)
                  .map((_, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center h-full w-[230px] whitespace-nowrap"
                    >
                      {/* <img
                        src="/marqueeLogo.png"
                        alt=""
                        className="w-[170px] h-auto object-contain"
                      />

                      <span className="inline-block w-2 h-2 bg-white rounded-full "></span> */}
                    </div>
                  ))}
              </div>
            ))}
        </div>
      </div>
      <div className="bg-purpleGrad w-full absolute -bottom-28 left-0 right-0 flex flex-row whitespace-nowrap overflow-x-auto overflow-y-hidden no-scrollbar px-6 py-6 transform rotate-2">
        <div className="flex animate-marquee-rtl gap-12">
          {/* <div className="flex gap-12"> */}
          {Array(2)
            .fill(null)
            .map((_, duplicateIndex) => (
              <div
                className="flex gap-12 whitespace-nowrap"
                key={duplicateIndex}
              >
                {Array(10)
                  .fill(null)
                  .map((_, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center h-full w-[230px] whitespace-nowrap"
                    >
                      <img
                        src="/marqueeLogo.png"
                        alt=""
                        className="w-[170px] h-auto object-contain"
                      />

                      <span className="inline-block w-2 h-2 bg-white rounded-full "></span>
                    </div>
                  ))}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
