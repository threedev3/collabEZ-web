import React from "react";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import Footer from "@/components/Footer";
import ThankYouComp from "@/components/ThankYou";
import { navItemsAI } from "@/data";
import ServiceHero from "@/components/ServiceHero";
import BenefitServices from "@/components/BenefitsService";

const AIAutomation = () => {
  return (
    <main className="relative bg-black flex justify-center items-center flex-col overflow-hidden mx-auto min-h-screen">
      <div className="bg-[url('/bgLines.png')] bg-no-repeat h-full bg-cover w-full bg-center bg-opacity-20 absolute inset-0 z-0" />
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="relative z-20 w-full">
        <ServiceHero navItems={navItemsAI} />
        <div className="relative z-20">
          <AnimateOnScroll>
            <BenefitServices />
          </AnimateOnScroll>
          <AnimateOnScroll>
            <Footer />
          </AnimateOnScroll>
        </div>
      </div>
    </main>
  );
};

export default AIAutomation;
