"use client";
import React from "react";
import { MdArrowOutward } from "react-icons/md";
import { CardSpotlight } from "./ui/card-spotlight";
import { serviceItems } from "@/data";
import Image from "next/image";
import MagicButton from "./MagicButton";
import { scrollToSection } from "@/lib/scrollToSection";
import Link from "next/link";

export function Services() {
  return (
    <div className="relative sm:px-10 px-5 sm:py-6 py-5 w-full" id="services">
      <div className="max-w-[93%] w-full mx-auto flex flex-col xl:gap-6 lg:gap-6 gap-6 items-start justify-center h-full">
        <div className="flex  min-[806px]:gap-6 gap-0 items-start justify-between w-full">
          <h3 className="bg-clip-text text-transparent bg-gradient-to-r from-heroColor via-white to-heroColor max-w-7xl min-[1525px]:text-[75px] min-[1420px]:text-[70px]  min-[1260px]:text-[60px] min-[1071px]:text-[50px] min-[976px]:text-[45px] min-[899px]:text-[40px] sm:text-[40px] text-[28px] min-[375px]:text-[32px] min-[414px]:text-[32px] leading-snug font-[family-name:var(--font-satoshi)]">
            Explore Our Services
          </h3>
        </div>
        <div className="flex min-[806px]:flex-row flex-col justify-between gap-6 w-full min-[806px]:items-center items-start">
          <p className="font-[family-name:var(--font-satoshi)] text-white lg:text-xl sm:text-base text-base relative z-10 max-w-2xl">
            From websites to mobile apps and e-commerce solutions, we offer
            tailored digital services to help your business thrive!
          </p>

          <a className="relative z-20 cursor-pointer flex-shrink-0">
            <MagicButton
              title="Get Started"
              position="right"
              otherClasses="font-[family-name:var(--font-satoshi)]"
              handleClick={() => scrollToSection("contact")}
            />
          </a>
        </div>

        <div className="grid lg:grid-cols-2 flex-wrap xl:gap-6 gap-3 w-full mt-6">
          {serviceItems.map((item, index) => (
            <Link href={index === 0 ? "/ai-automation" : "#"}>
              <CardSpotlight
                key={index}
                className={`${
                  index === 0 || index === 3 || index === 4
                    ? "col-span-1"
                    : "col-span-1"
                } relative p-6 shadow-md hover:shadow-lg transition-shadow duration-300 group overflow-hidden max-h-96 flex justify-between items-center gap-2 cursor-pointer ${
                  item.boxClass
                }`}
              >
                <div className="relative flex flex-col justify-center space-y-6 text-white z-10 h-full">
                  <div className="w-[60px] h-[60px] bg-[#6F6F71] rounded-full flex justify-center items-center flex-shrink-0">
                    <Image
                      src={item.icon}
                      width={33}
                      height={33}
                      alt={`${item.title} Icon`}
                      className="h-auto w-auto object-contain"
                    />
                  </div>
                  <h3 className="font-[family-name:var(--font-satoshi)] font-bold text-white min-[1400px]:text-4xl lg:text-[26px] md:text-3xl sm:text-2xl text-2xl  mb-2 mt-2">
                    {item.title}
                  </h3>
                  <p className="font-[family-name:var(--font-satoshi)] font-normal text-white xl:text-lg text-base mb-4 max-w-[380px]">
                    {item.description}
                  </p>
                  <div
                    className="flex gap-2 items-start cursor-pointer"
                    // onClick={(e) => {
                    //   scrollToSection("contact");
                    // }}
                  >
                    <li className="font-[family-name:var(--font-satoshi)] underline list-none">
                      Start With Us
                    </li>
                    <MdArrowOutward />
                  </div>
                </div>
                <Image
                  src={item.sideImg}
                  alt=""
                  width={500}
                  height={500}
                  className={item.className}
                />
              </CardSpotlight>
            </Link>
          ))}
        </div>
      </div>

      <div className="absolute top-72 -right-32 bg-blur-gradient opacity-80 w-[500px] h-[500px]" />
      <div className="absolute -bottom-10 -left-32 bg-blur-gradient opacity-80 w-[500px] h-[500px]" />

      <div className="bg-blackBg w-full absolute -bottom-28 left-0 right-0 flex flex-row whitespace-nowrap overflow-x-auto overflow-y-hidden no-scrollbar px-6 py-8 transform -rotate-3">
        <div className="flex animate-marquee-ltr gap-12">
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
                    ></div>
                  ))}
              </div>
            ))}
        </div>
      </div>
      <div className="bg-purpleGrad w-full absolute -bottom-28 left-0 right-0 flex flex-row whitespace-nowrap overflow-x-auto overflow-y-hidden no-scrollbar px-6 py-6 transform rotate-2">
        <div className="flex animate-marquee-rtl gap-12">
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
                      <Image
                        src="/marqueeLogo.png"
                        alt=""
                        width={200}
                        height={200}
                        className="w-[171px] object-contain"
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
