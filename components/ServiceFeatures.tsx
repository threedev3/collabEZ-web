"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface ServiceProps {
  title: string;
  description: string;
  icon: string;
  className: string;
  lineClassName: string;
}

const Service = ({
  title,
  description,
  icon,
  className,
  lineClassName,
}: ServiceProps) => {
  return (
    <div className={`absolute min-[1400px]:w-80 xl:w-72 w-60 ${className}`}>
      <div className="flex flex-col items-start gap-3">
        <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
          <Image src={icon} alt={title} width={24} height={24} />
        </div>
        <div className="flex-1">
          <h3 className="text-white xl:text-xl text-lg font-semibold mb-2 font-[family-name:var(--font-satoshi)]">
            {title}
          </h3>
          <p className="text-white/90 xl:text-base text-sm font-[family-name:var(--font-satoshi)]">
            {description}
          </p>
        </div>
      </div>
      {/* <motion.div
        className={`absolute h-[2px] bg-gradient-to-r from-purple-600/50 to-purple-600 ${lineClassName}`}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      /> */}
    </div>
  );
};

const ServiceFeatures = () => {
  return (
    <div className="relative " id="why-choose">
      <div className="sm:px-10 px-5 sm:py-10 py-5 w-full ">
        <div className="absolute left-1/2 top-[60%] -translate-x-1/2 -translate-y-1/2  bg-blur-gradient-pink  min-[1400px]:w-[1200px] min-[1400px]:h-[1200px] xl:w-[800px] xl:h-[800px] w-[600px] h-[600px]" />

        <div className="max-w-[93%] w-full mx-auto flex flex-col xl:gap-8 lg:gap-6 gap-6 items-start justify-center h-full">
          <div className="flex flex-col lg:gap-6 gap-0 items-center justify-between w-full relative z-20">
            <h3 className="bg-clip-text text-transparent bg-gradient-to-r from-heroColor via-white to-heroColor max-w-full min-[1525px]:text-[75px] min-[1420px]:text-[70px]  min-[1260px]:text-[60px] min-[1071px]:text-[50px] min-[976px]:text-[45px] min-[899px]:text-[40px] sm:text-[40px] text-[28px] min-[375px]:text-[28px] min-[414px]:text-[32px] leading-snug font-[family-name:var(--font-satoshi)] text-center mx-auto ">
              AI Services at CollabEZ
            </h3>

            <div className="flex flex-col justify-center items-center ">
              <p className="text-center md:tracking-wider xl:mb-4 text-[17px] min-[414px]:text-lg min-[540px]:text-xl md:text-2xl lg:text-2xl xl:text-3xl font-[family-name:var(--font-satoshi)] font-semibold max-w-[89vw] md:max-w-2xl lg:max-w-[80vw] xl:max-w-[85vw] min-[1400px]:max-w-[60vw]">
                We provide custom AI solutions designed to fit your business
                needs.
              </p>
              <p className="text-center md:tracking-wider xl:mb-4 text-[17px] min-[414px]:text-lg min-[540px]:text-xl md:text-2xl lg:text-2xl xl:text-3xl font-[family-name:var(--font-satoshi)] font-semibold max-w-[89vw] md:max-w-2xl lg:max-w-[80vw] xl:max-w-[85vw] min-[1400px]:max-w-[60vw] text-heroColor">
                Our AI services include:
              </p>
            </div>
          </div>

          {/* <main className="flex items-center justify-center p-4 w-full"> */}
          <div className="relative w-full  aspect-video">
            {/* Center Image */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ">
              <Image
                src="/aiServiceImg.png"
                alt="AI Head"
                width={1200}
                height={1200}
                className=" object-contain"
              />
            </div>

            {/* Services */}
            <Service
              title="1- AI-Powered Applications"
              description="Developing intelligent applications that learn 
and adapt to user behaviors, offering tailored 
solutions that evolve with your business.
"
              icon="/aiService1.png"
              className="top-8 min-[1400px]:left-16 left-8"
              lineClassName="w-32 rotate-45 origin-left top-16 left-full"
            />

            <Service
              title="2- Process Automation"
              description="Implementing AI-driven workflow automation to streamline processes, reduce manual intervention, and improve operational efficiency."
              icon="/aiService2.png"
              className="bottom-8 min-[1400px]:left-16 left-8"
              lineClassName="w-32 -rotate-45 origin-left bottom-16 left-full"
            />

            <Service
              title="3- Data Analysis & Insights"
              description="Leveraging machine learning algorithms to analyze large datasets, uncover patterns, and provide actionable insights for smarter decision-making."
              icon="/aiService3.png"
              className="top-8 min-[1400px]:right-16 right-8"
              lineClassName="w-32 -rotate-45 origin-right top-16 right-full"
            />

            <Service
              title="4- Natural Language Processing"
              description="Developing intelligent applications that learn 
and adapt to user behaviors, offering tailored 
solutions that evolve with your business.
"
              icon="/aiService4.png"
              className="bottom-8 min-[1400px]:right-16 right-8"
              lineClassName="w-32 rotate-45 origin-right bottom-16 right-full"
            />
          </div>
          {/* </main> */}
          <div className="h-[1px] w-full bg-white/20 mt-3"></div>
        </div>
      </div>

      {/* <div className="absolute -bottom-56 right-[36%] bg-radial-dark lg:w-[700px] lg:h-[700px] w-[400px] h-[400px] " /> */}
    </div>
  );
};

export default ServiceFeatures;
