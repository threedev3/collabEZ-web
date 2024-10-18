import React from "react";
import { MdArrowOutward } from "react-icons/md";
import { CardSpotlight } from "./ui/card-spotlight";

export function Services() {
  return (
    <div className="relative sm:px-10 px-5 sm:py-16 py-5 w-full">
      <div className="max-w-[93%] w-full mx-auto flex flex-col xl:gap-6 lg:gap-6 gap-6 items-start justify-center h-full">
        <div className="flex  min-[806px]:gap-6 gap-0 items-start justify-between w-full">
          <h3 className="bg-clip-text text-transparent bg-gradient-to-r from-heroColor via-white to-heroColor max-w-7xl min-[1525px]:text-[75px] min-[1420px]:text-[70px]  min-[1260px]:text-[60px] min-[1071px]:text-[50px] min-[976px]:text-[45px] min-[899px]:text-[40px] sm:text-[40px] text-[28px] min-[414px]:text-[32px] leading-snug font-[family-name:var(--font-satoshi)]">
            Let’s work together
          </h3>
        </div>
        <div className="flex min-[806px]:flex-row flex-col justify-between gap-6 w-full min-[806px]:items-center items-start">
          <p className="font-[family-name:var(--font-satoshi)] text-white lg:text-lg sm:text-base text-base relative z-10 max-w-lg">
            help you to build website company that is modern, user friendly,
            good CEO, and Clean design
          </p>
          <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[3px] focus:outline-none  flex-shrink-0">
            {/* <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" /> */}
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-heroColor xl:px-8 px-4 py-3 lg:text-lg text-base font-[family-name:var(--font-satoshi)] font-semibold text-white backdrop-blur-3xl flex-shrink-0">
              Get Started
              {/* <FaLocationArrow className="ml-3 mt-1.5 xl:block hidden" /> */}
            </span>
          </button>
        </div>

        {/* Grid for the services */}
        <div className="flex justify-between items-center flex-wrap  gap-6 w-full mt-6">
          {items.map((item, index) => (
            <CardSpotlight
              key={index}
              className={`${
                index === 0 || index === 3 || index === 4
                  ? "w-[59%]"
                  : "w-[39%]"
              } relative bg-gradient-to-t from-[#111] to-[#1a1a1a] p-6 rounded-3xl shadow-md hover:shadow-lg transition-shadow duration-300 group overflow-hidden min-h-96`}
            >
              {/* Background */}
              <div
                className={item.className}
                style={{
                  backgroundImage: `url(${item.sideImg})`,
                }}
              />
              {/* Overlay */}
              {/* <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-900/50 to-blue-900/50 group-hover:opacity-75 transition-opacity duration-300"></div> */}

              {/* Content */}
              <div className="relative flex flex-col space-y-6 text-white z-10 h-full">
                <div className="w-[60px] h-[60px] bg-[#6F6F71] rounded-full flex justify-center items-center flex-shrink-0">
                  <img
                    src={item.icon}
                    alt={`${item.title} Icon`}
                    className="h-[33px] w-[33px] object-contain"
                  />
                </div>
                <h3 className="font-[family-name:var(--font-satoshi)] font-bold text-white text-4xl  mb-2 mt-2">
                  {item.title}
                </h3>
                <p className="font-[family-name:var(--font-satoshi)] font-normal text-white text-lg mb-4 max-w-[380px]">
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
            </CardSpotlight>
          ))}
        </div>
      </div>
    </div>
  );
}

const items = [
  {
    title: "Custom Web Dev",
    description:
      "Building fast, secure, and scalable websites tailored to your business needs, with a focus on performance and reliability.",
    sideImg: "/skeleton1.png",
    className:
      "absolute bottom-0 -right-40 w-[460px] h-[320px] rounded-3xl opacity-50",
    icon: "/service1.png",
  },
  {
    title: "UI/UX Design",
    description:
      "Creating intuitive, user-friendly interfaces that drive engagement and ensure a seamless experience across all devices.",
    sideImg: "/skeleton4.png",
    className:
      "absolute top-10 -right-44 w-[360px] h-[360px] bg-contain bg-no-repeat rounded-3xl opacity-50",
    icon: "/service2.png",
  },
  {
    title: "Web Applications",
    description:
      "Developing powerful, responsive web apps that offer enhanced functionality.",
    sideImg: "/skeleton3.png",
    className:
      "absolute bottom-0 -right-60 w-[460px] h-[320px] rounded-3xl opacity-50",
    icon: "/service4.png",
  },
  {
    title: "iOS & Android Applications",
    description:
      "Native and cross-platform mobile apps built for performance, user experience, and engagement.",
    sideImg: "/skeleton2.png",
    className:
      "absolute top-10 -right-44 w-[360px] h-[360px] bg-contain bg-no-repeat rounded-3xl opacity-50",
    icon: "/service4.png",
  },
  {
    title: "DevOps & Integrations",
    description:
      "Optimizing development workflows and integrating third-party services for seamless performance.",
    sideImg: "/skeleton1.png",
    className:
      "absolute bottom-0 -right-40 w-[460px] h-[320px] rounded-3xl opacity-50",
    icon: "/service5.png",
  },
  {
    title: "E-commerce Solutions",
    description:
      "From custom stores to Shopify and WooCommerce, we build e-commerce platforms.",
    sideImg: "/skeleton5.png",
    className:
      "absolute bottom-0 -right-60 w-[460px] h-[320px] rounded-3xl opacity-50",
    icon: "/service6.png",
  },
];
