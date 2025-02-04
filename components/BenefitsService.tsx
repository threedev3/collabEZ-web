"use client";
import React, { useState } from "react";
import MagicButton from "./MagicButton";
import { scrollToSection } from "@/lib/scrollToSection";
import Image from "next/image";
import { benefits } from "@/data";
import { AccordionItem } from "./AccordianItem";

const BenefitServices = () => {
  const [openIndex, setOpenIndex] = useState<number>(0);
  return (
    <div
      className="relative sm:px-10 px-5 sm:py-10 py-5 w-full"
      style={{
        backgroundImage: 'url("/benefitsBg.png")',
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        backgroundPosition: "0px center",
      }}
    >
      <div className="absolute bottom-0 -left-48 bg-blur-gradient-purple  lg:w-[600px] lg:h-[700px] sm:w-[400px] sm:h-[400px] w-[400px] h-[400px]" />

      <div className="max-w-[93%] w-full mx-auto flex flex-col gap-12">
        <div className="flex min-[806px]:flex-row flex-col gap-6 min-[806px]:items-center items-start justify-between w-full">
          <h3 className="bg-clip-text text-transparent bg-gradient-to-r from-heroColor via-white to-heroColor min-[1400px]:max-w-5xl xl:max-w-3xl lg:max-w-xl max-w-md min-[1525px]:text-[75px] min-[1420px]:text-[70px]  min-[1260px]:text-[60px] min-[1071px]:text-[50px] min-[976px]:text-[45px] min-[899px]:text-[40px] sm:text-[40px] text-[28px] min-[375px]:text-[28px] min-[414px]:text-[32px] leading-snug font-[family-name:var(--font-satoshi)] ">
            Benefits of AI Integration in Your Business
          </h3>

          <a className="relative cursor-pointer">
            <MagicButton
              title="Start Your Journey"
              position="right"
              otherClasses="font-[family-name:var(--font-satoshi)]"
              handleClick={() => scrollToSection("servicesAI")}
            />
          </a>
        </div>

        <div className="flex lg:flex-row justify-between items-center gap-6 flex-col ">
          <div className="lg:w-1/2">
            <Image
              src="/benefitsImg.png"
              alt="AI Benefits Illustration"
              width={600}
              height={600}
              //   className="w-full h-auto"
            />
          </div>

          <div className="lg:w-1/2 w-full relative">
            {/* Blue line decoration */}
            {/* <div className="absolute left-3 top-0 w-[2px] h-full bg-blue-500/20">
              <div
                className="absolute top-0 w-full h-1/5 bg-blue-500"
                style={{
                  top: `${openIndex * 20}%`,
                  transition: "top 0.3s ease-in-out",
                }}
              />
            </div> */}

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <AccordionItem
                  key={index}
                  title={benefit.title}
                  content={benefit.content}
                  isOpen={openIndex === index}
                  onToggle={() =>
                    setOpenIndex(index === openIndex ? -1 : index)
                  }
                />
              ))}
            </div>
          </div>
        </div>

        <div className="h-[1px] w-full bg-white/20 mt-3"></div>
      </div>
    </div>
  );
};

export default BenefitServices;
