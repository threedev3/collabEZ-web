"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaArrowDown, FaArrowUp } from "react-icons/fa6";

interface MetricCardProps {
  title: string;
  percentage: string;
  subtitle: string;
  description: string;
  trend: string;
}

const MetricCard = ({
  title,
  percentage,
  subtitle,
  description,
  trend,
}: MetricCardProps) => {
  return (
    <motion.div
      className="relative rounded-2xl bg-black/20 p-6 backdrop-blur-sm border border-white/10"
      initial={{ height: "280px" }}
      whileHover={{
        height: "300px",
        backgroundColor: "#161616",
        transition: { duration: 0.3, ease: "easeInOut" },
      }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex flex-col h-full">
        <h3 className="text-heroColor  min-[1400px]:text-2xl text-xl font-medium mb-4 font-[family-name:var(--font-satoshi)]">
          {title}
        </h3>

        <div className="flex items-center justify-between gap-2 mb-2">
          <span className="text-white text-3xl xl:text-4xl font-semibold font-[family-name:var(--font-satoshi)]">
            {percentage}
          </span>
          {trend === "up" ? (
            <FaArrowUp className="w-6 h-6 text-emerald-500" />
          ) : (
            <FaArrowDown className="w-6 h-6 text-red-500" />
          )}
        </div>

        <span className="text-white/90 text-base mb-4 font-[family-name:var(--font-satoshi)]">
          {subtitle}
        </span>

        <div className="h-[1px] w-full bg-white/20 mb-2"></div>

        <p className="text-white/90 text-base min-[1400px]:text-lg mt-auto font-[family-name:var(--font-satoshi)]">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

const SuccessStoryAI = () => {
  const metrics = [
    {
      title: "Automated AI Sales Agent",
      percentage: "+60%",
      subtitle: "Increase",
      description: "60% increase in setting up the appointment with new leads.",
      trend: "up",
    },
    {
      title: "Automated Customer Service Chatbot",
      percentage: "+30%",
      subtitle: "Increase",
      description:
        "30% increase in customer satisfaction and 25% faster response times.",
      trend: "up",
    },
    {
      title: "AI-Driven Predictive Analytics",
      percentage: "+40%",
      subtitle: "Reduced operational downtime",
      description:
        "Reduced operational downtime by 40% through proactive maintenance insights.",
      trend: "down",
    },
  ];

  return (
    <div
      className="relative sm:px-10 px-5 sm:py-10 py-5 w-full "
      id="choose-ai"
    >
      <div className="max-w-[93%] w-full mx-auto flex flex-col xl:gap-8 lg:gap-6 gap-6 items-start justify-center h-full">
        <div className="flex flex-col gap-0 items-start justify-between w-full relative z-10">
          <h3 className="bg-clip-text text-transparent bg-gradient-to-r from-heroColor via-white to-heroColor max-w-full min-[1525px]:text-[75px] min-[1420px]:text-[70px]  min-[1260px]:text-[60px] min-[1071px]:text-[50px] min-[976px]:text-[45px] min-[899px]:text-[40px] sm:text-[40px] text-[28px] min-[375px]:text-[32px] min-[414px]:text-[32px] leading-snug font-[family-name:var(--font-satoshi)] text-center mx-auto">
            Success Stories:
          </h3>
          <h3 className="bg-clip-text text-transparent bg-gradient-to-r from-heroColor via-white to-heroColor max-w-full min-[1525px]:text-[75px] min-[1420px]:text-[70px]  min-[1260px]:text-[60px] min-[1071px]:text-[50px] min-[976px]:text-[45px] min-[899px]:text-[40px] sm:text-[40px] text-[28px] min-[375px]:text-[32px] min-[414px]:text-[32px] leading-snug font-[family-name:var(--font-satoshi)] text-center mx-auto">
            AI Transforming Businesses
          </h3>
        </div>

        <div className=" mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 xl:gap-6">
            {metrics.map((metric, index) => (
              <MetricCard key={index} {...metric} />
            ))}
          </div>
        </div>

        <div className="h-[1px] w-full bg-white/20 mt-3"></div>
      </div>

      <div className="absolute -bottom-40 -right-48 bg-blur-gradient-purple  md:w-[900px] md:h-[900px] w-[500px] h-[500px]" />
    </div>
  );
};

export default SuccessStoryAI;
