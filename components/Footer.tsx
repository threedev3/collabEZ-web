"use client";

import React from "react";
import MagicButton from "./MagicButton";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="relative  w-full">
      <div className="sm:px-10 px-5 sm:py-10 py-5 border-t-2 border-[#63518960] border-b-2">
        <div className="absolute -top-40 -left-48 bg-blur-gradient-purple opacity-80 w-[900px] h-[900px]" />

        <div className="max-w-[93%] w-full mx-auto flex flex-col xl:gap-6 lg:gap-6 gap-6 items-start justify-center h-full relative z-[5]">
          <div className="flex min-[806px]:flex-row flex-col min-[806px]:gap-6 gap-0 items-start justify-between w-full">
            <h3 className="bg-clip-text text-transparent bg-gradient-to-r from-heroColor via-white to-heroColor max-w-7xl min-[1525px]:text-[75px] min-[1420px]:text-[70px]  min-[1260px]:text-[60px] min-[1071px]:text-[50px] min-[976px]:text-[45px] min-[899px]:text-[40px] sm:text-[40px] text-[28px] min-[375px]:text-[32px] min-[414px]:text-[32px] leading-snug font-[family-name:var(--font-satoshi)]">
              Ready to Get Started?
            </h3>
            {/* <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[3px] focus:outline-none min-[1525px]:mt-8 mt-6 flex-shrink-0">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-white xl:px-8 px-4 py-3 lg:text-lg text-base font-[family-name:var(--font-satoshi)] font-semibold text-black backdrop-blur-3xl flex-shrink-0">
              Start Your Journey
            </span>
          </button> */}
            <a className="min-[1525px]:mt-8 mt-4 inline-flex flex-shrink-0 cursor-pointer">
              <MagicButton
                title="Get a Free Consultation"
                // icon={<FaLocationArrow />}
                position="right"
                otherClasses="font-[family-name:var(--font-satoshi)] min-[540px]:text-base text-sm"
              />
            </a>
          </div>
          <div>
            <p className="font-[family-name:var(--font-satoshi)] text-white lg:text-xl sm:text-lg font-medium text-base relative z-10 max-w-2xl">
              <span className="font-[family-name:var(--font-satoshi-bold)] font-bold">
                Let’s Build Something Great Together!
              </span>{" "}
              Whether you need a website, app, or custom solution, we’re ready
              to help you succeed.
            </p>
          </div>
        </div>
      </div>

      <div className="sm:px-10 px-5 sm:py-10 py-5 relative z-10">
        <div className="max-w-[93%] w-full mx-auto flex flex-col xl:gap-6 lg:gap-6 gap-6 items-start justify-center h-full relative z-10">
          <div className="grid lg:grid-cols-4 min-[540px]:grid-cols-2 grid-cols-1 min-[540px]:gap-6 gap-8 place-items-start place-content-center w-full">
            <div className="flex flex-col gap-3">
              <div>
                <img
                  src="/logo.png"
                  alt=""
                  className="cursor-pointer"
                  onClick={scrollToTop}
                />
              </div>
              <div>
                <p className="font-[family-name:var(--font-satoshi)] text-white min-[540px]:text-lg text-base max-w-sm">
                  Transforming ideas into impactful digital solutions.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div>
                <h3 className="font-[family-name:var(--font-satoshi-bold)] text-white text-xl font-extrabold">
                  Quick Links
                </h3>
              </div>
              <ul className="flex flex-col gap-3">
                <li className="text-white font-[family-name:var(--font-satoshi)] min-[540px]:text-base text-sm cursor-pointer">
                  Services
                </li>
                <li className="text-white font-[family-name:var(--font-satoshi)] min-[540px]:text-base text-sm cursor-pointer">
                  Portfolio
                </li>
                <li className="text-white font-[family-name:var(--font-satoshi)] min-[540px]:text-base text-sm cursor-pointer">
                  Why Collabez
                </li>
                <li className="text-white font-[family-name:var(--font-satoshi)] min-[540px]:text-base text-sm cursor-pointer">
                  Reviews
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <div>
                <h3 className="font-[family-name:var(--font-satoshi-bold)] text-white text-xl">
                  Services
                </h3>
              </div>
              <ul className="flex flex-col gap-3">
                <li className="text-white font-[family-name:var(--font-satoshi)] min-[540px]:text-base text-sm">
                  Web Development
                </li>
                <li className="text-white font-[family-name:var(--font-satoshi)] min-[540px]:text-base text-sm">
                  UI/UX Designer
                </li>
                <li className="text-white font-[family-name:var(--font-satoshi)] min-[540px]:text-base text-sm">
                  Branding
                </li>
                <li className="text-white font-[family-name:var(--font-satoshi)] min-[540px]:text-base text-sm">
                  Shopify
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <div>
                <h3 className="font-[family-name:var(--font-satoshi-bold)] text-white text-xl">
                  Contact Us
                </h3>
              </div>
              <ul className="flex flex-col gap-3">
                <li className="text-white font-[family-name:var(--font-satoshi)] min-[540px]:text-base text-sm cursor-pointer">
                  hello@collabez.co.uk
                </li>
                <li className="text-white font-[family-name:var(--font-satoshi)] min-[540px]:text-base text-sm">
                  +1 845 631 78 49
                </li>
                <li className="text-white font-[family-name:var(--font-satoshi)] min-[540px]:text-base text-sm">
                  20-22, Wenlock Road, N1 7GU, London, UK
                </li>
              </ul>
            </div>
          </div>

          <div className="h-[1px] w-full bg-white/50 mt-6"></div>

          <div className="flex md:flex-row flex-col md:justify-between md:items-center gap-4 w-full">
            <div>
              <p className="text-white font-[family-name:var(--font-satoshi)] min-[540px]:text-base text-sm md:text-start text-center">
                © {currentYear} Collabez. All rights reserved.
              </p>
            </div>
            <div className="flex gap-3 items-center md:justify-start justify-center">
              <p className="text-white font-[family-name:var(--font-satoshi)] min-[540px]:text-base text-sm">
                Privacy Policy
              </p>
              <p className="text-white font-[family-name:var(--font-satoshi)] min-[540px]:text-base text-sm">
                Terms of Service
              </p>
              <p className="text-white font-[family-name:var(--font-satoshi)] min-[540px]:text-base text-sm">
                Cookie Policy
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-32 -right-48 bg-blur-gradient opacity-80 w-[700px] h-[700px] z-0" />
    </div>
  );
};

export default Footer;
