import { chooseItems } from "@/data";
import React from "react";

const Choose = () => {
  return (
    <div className="relative sm:px-10 px-5 sm:py-16 py-5 w-full mt-32">
      <div className="absolute top-40 -left-32 bg-blur-gradient-purple  w-[700px] h-[700px]" />

      <div className="max-w-[93%] w-full mx-auto flex flex-col xl:gap-8 lg:gap-6 gap-6 items-start justify-center h-full">
        <div className="flex  min-[806px]:gap-6 gap-0 items-start justify-between w-full">
          <h3 className="bg-clip-text text-transparent bg-gradient-to-r from-heroColor via-white to-heroColor max-w-full min-[1525px]:text-[44px] min-[1420px]:text-[70px]  min-[1260px]:text-[60px] min-[1071px]:text-[50px] min-[976px]:text-[45px] min-[899px]:text-[40px] sm:text-[40px] text-[28px] min-[414px]:text-[32px] leading-snug font-[family-name:var(--font-satoshi)] text-center mx-auto">
            Why Choose{" "}
            <span className="block min-[1525px]:text-[75px]">Collabez</span>
          </h3>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 w-full relative z-10">
          {chooseItems.map((chooseItem, index) => (
            <div
              key={index}
              className="flex flex-col gap-6 items-center mt-10 group"
            >
              <div className="p-6 rounded-full gradient-border relative">
                <div className="w-9 h-9 rounded-full bg-white absolute inset-0 flex items-center justify-center">
                  <p className="text-black font-[family-name:var(--font-satoshi-bold)] font-extrabold text-sm">
                    0{index + 1}
                  </p>
                </div>
                <img
                  src={chooseItem.icon}
                  alt=""
                  className="w-20 object-contain"
                />
              </div>

              <div className="w-16 h-1 bg-heroColor rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>

              <div>
                <h3 className="font-[family-name:var(--font-satoshi)] text-white text-2xl">
                  {chooseItem.title}
                </h3>
              </div>
              <div>
                <p className="font-[family-name:var(--font-satoshi)] text-white xl:text-lg text-base text-center xl:max-w-[350px] max-w-xs">
                  {chooseItem.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-20 -right-48 bg-blur-gradient w-[800px] h-[650px]" />
    </div>
  );
};

export default Choose;
