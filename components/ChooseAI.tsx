// "use client";

// import { services } from "@/data";
// import React, { useEffect, useRef, useState } from "react";
// import { motion } from "framer-motion";
// import Image from "next/image";

// interface ChooseAIProps {
//   id: number;
//   icon: string;
//   title: string;
//   description: string;
//   isActive: boolean;
// }

// const ChooseAICard = ({
//   icon,
//   title,
//   description,
//   isActive,
// }: ChooseAIProps) => {
//   return (
//     <motion.div
//       className={`relative p-6 rounded-xl transition-all duration-300 mb-6 ${
//         isActive ? "bg-purple-600 bg-opacity-90" : "bg-transparent"
//       }`}
//       animate={{ scale: isActive ? 1.05 : 1 }}
//       transition={{ duration: 0.3 }}
//     >
//       <div className="flex items-start gap-4">
//         <div className="p-2 rounded-full bg-white/10">
//           <Image
//             src={icon}
//             alt="choose-icon"
//             height={20}
//             width={20}
//             className="w-6 h-6 text-white"
//           />
//         </div>
//         <div className="space-y-2">
//           <h3 className="text-xl font-semibold text-white">{title}</h3>
//           <p className="text-sm text-gray-300">{description}</p>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// const ChooseAI = () => {
// //   const [activeIndex, setActiveIndex] = useState(0);
// //   const scrollbarRef = useRef<HTMLDivElement>(null);

// //   const handleScroll = (e: React.MouseEvent<HTMLDivElement>) => {
// //     if (!scrollbarRef.current) return;

// //     const { top, height } = scrollbarRef.current.getBoundingClientRect();
// //     const y = e.clientY - top;
// //     const newIndex = Math.min(
// //       services.length - 1,
// //       Math.floor((y / height) * services.length)
// //     );
// //     setActiveIndex(newIndex);
// //   };
// const containerRef = useRef<HTMLDivElement>(null);
//   const [activeIndex, setActiveIndex] = useState(0);

//   const handleScroll = () => {
//     if (containerRef.current) {
//       const scrollTop = containerRef.current.scrollTop;
//       const cardHeight = containerRef.current.scrollHeight / services.length;
//       const index = Math.floor(scrollTop / cardHeight);
//       setActiveIndex(index);
//     }
//   };

//   useEffect(() => {
//     const container = containerRef.current;
//     if (container) {
//       container.addEventListener('scroll', handleScroll);
//       return () => container.removeEventListener('scroll', handleScroll);
//     }
//   }, []);

//   return (
//     <div
//       className="relative sm:px-10 px-5 sm:py-10 py-5 w-full "
//       id="choose-ai"
//     >
//       <div className="max-w-[93%] w-full mx-auto flex flex-col xl:gap-8 lg:gap-6 gap-6 items-start justify-center h-full">
//         <div className="flex  min-[806px]:gap-6 gap-0 items-start justify-between w-full">
//           <h3 className="bg-clip-text text-transparent bg-gradient-to-r from-heroColor via-white to-heroColor max-w-full min-[1525px]:text-[75px] min-[1420px]:text-[70px]  min-[1260px]:text-[60px] min-[1071px]:text-[50px] min-[976px]:text-[45px] min-[899px]:text-[40px] sm:text-[40px] text-[28px] min-[375px]:text-[32px] min-[414px]:text-[32px] leading-snug font-[family-name:var(--font-satoshi)] text-center mx-auto">
//             Why Choose CollabEZ for AI Solutions?
//           </h3>
//         </div>

//         <div className="grid grid-cols-2 ">
//           <div className="relative flex items-center">
//             <div className="w-full px-8">
//               {services.map((service, index) => (
//                 <motion.div
//                   key={service.id}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.5, delay: index * 0.1 }}
//                 >
//                   <ChooseAICard {...service} isActive={index === activeIndex} />
//                 </motion.div>
//               ))}
//             </div>
//             <div
//               ref={scrollbarRef}
//               className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-1/2 bg-gray-700 rounded-full cursor-pointer"
//               onClick={handleScroll}
//             >
//               <motion.div
//                 className="w-3 h-3 bg-purple-600 rounded-full -translate-x-1"
//                 animate={{
//                   y: `${(activeIndex / (services.length - 1)) * 100}%`,
//                 }}
//                 transition={{ type: "spring", stiffness: 300, damping: 30 }}
//               />
//             </div>
//           </div>
//           <div className="relative">
//             <div className="flex items-center justify-center">
//               <Image
//                 src="/chooseAIImg.png"
//                 height={500}
//                 width={400}
//                 alt="AI Robot Hand"
//                 className="max-w-full max-h-full object-contain"
//               />
//             </div>
//           </div>
//         </div>

//         <div className="h-[1px] w-full bg-white/20 mt-3"></div>
//       </div>

//       <div className="absolute -bottom-40 -right-48 bg-blur-gradient-purple  md:w-[900px] md:h-[900px] w-[500px] h-[500px]" />
//     </div>
//   );
// };

// export default ChooseAI;

"use client";

import { services } from "@/data";
import React, { useEffect, useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import Image from "next/image";

interface ChooseAIProps {
  id: number;
  icon: string;
  title: string;
  description: string;
  isActive: boolean;
}

const ChooseAICard = ({
  icon,
  title,
  description,
  isActive,
}: ChooseAIProps) => {
  return (
    <motion.div
      className={`relative p-6 rounded-xl transition-all duration-300 mb-6 ${
        isActive ? "bg-purple-600 bg-opacity-90" : "bg-transparent"
      }`}
      animate={{ scale: isActive ? 1.05 : 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-start gap-4">
        <div className="p-2 rounded-full bg-white/10">
          <Image
            src={icon}
            alt="choose-icon"
            height={20}
            width={20}
            className="w-6 h-6 text-white"
          />
        </div>
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-white">{title}</h3>
          <p className="text-sm text-gray-300">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

const ChooseAI = () => {
  //   const [activeIndex, setActiveIndex] = useState(0);
  //   const containerRef = useRef<HTMLDivElement>(null);
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);

  const handleScroll = (e: WheelEvent) => {
    // e.preventDefault(); // Prevent default page scrolling

    if (!ref.current) return;

    const scrollAmount = e.deltaY;
    if (scrollAmount > 0) {
      setActiveCard((prev) => Math.min(prev + 1, services.length - 1));
    } else {
      setActiveCard((prev) => Math.max(prev - 1, 0));
    }
  };

  //   useEffect(() => {
  //     const container = containerRef.current;
  //     if (container) {
  //       container.addEventListener("wheel", handleScroll);
  //     }
  //     return () => {
  //       if (container) {
  //         container.removeEventListener("wheel", handleScroll);
  //       }
  //     };
  //   }, []);

  const { scrollYProgress } = useScroll({
    // uncomment line 22 and comment line 23 if you DONT want the overflow container and want to have it change on the entire page scroll
    // target: ref
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = services.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = services.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = [
    "var(--slate-900)",
    "var(--black)",
    "var(--neutral-900)",
  ];
  const linearGradients = [
    "linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))",
    "linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))",
    "linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))",
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(
    linearGradients[0]
  );

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);

  return (
    <div
      className="relative sm:px-10 px-5 sm:py-10 py-5 w-full "
      id="choose-ai"
      //   ref={containerRef}
    >
      <div className="max-w-[93%] w-full mx-auto flex flex-col xl:gap-8 lg:gap-6 gap-6 items-start justify-center h-full">
        <div className="flex min-[806px]:gap-6 gap-0 items-start justify-between w-full">
          <h3 className="bg-clip-text text-transparent bg-gradient-to-r from-heroColor via-white to-heroColor max-w-full text-[40px] leading-snug font-[family-name:var(--font-satoshi)] text-center mx-auto">
            Why Choose CollabEZ for AI Solutions?
          </h3>
        </div>

        <div className="grid grid-cols-2 ">
          <motion.div
            // animate={{
            //   backgroundColor:
            //     backgroundColors[activeCard % backgroundColors.length],
            // }}
            className="h-[40rem] overflow-y-auto flex justify-center relative space-x-10 rounded-md p-10"
            ref={ref}
          >
            <div className="w-full px-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {/* <ChooseAICard {...service} isActive={index === activeCard} /> */}

                  <motion.div
                    className={`relative p-6 rounded-xl transition-all duration-300 mb-6`}
                    style={{ background: backgroundGradient }}
                    // className={`relative p-6 rounded-xl transition-all duration-300 mb-6 ${
                    //   activeCard
                    //     ? "bg-purple-600 bg-opacity-90"
                    //     : "bg-transparent"
                    // }`}
                    animate={{ scale: activeCard ? 1.05 : 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-2 rounded-full bg-white/10">
                        <Image
                          src={service.icon}
                          alt="choose-icon"
                          height={20}
                          width={20}
                          className="w-6 h-6 text-white"
                        />
                      </div>
                      <div className="space-y-2">
                        <motion.h3
                          className="text-xl font-semibold text-white"
                          initial={{
                            opacity: 0,
                          }}
                          animate={{
                            opacity: activeCard === index ? 1 : 0.3,
                          }}
                        >
                          {service.title}
                        </motion.h3>
                        <motion.p
                          className="text-sm text-gray-300"
                          initial={{
                            opacity: 0,
                          }}
                          animate={{
                            opacity: activeCard === index ? 1 : 0.3,
                          }}
                        >
                          {service.description}
                        </motion.p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
            {/* <div
              ref={scrollbarRef}
              className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-60 bg-gray-700 rounded-full cursor-pointer"
              onMouseMove={handleScroll}
            >
              <motion.div
                className="w-3 h-6 bg-purple-600 rounded-full"
                animate={{
                  y: `${(activeIndex / (services.length - 1)) * 100}%`,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            </div> */}
          </motion.div>

          <div
            ref={ref}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-1/2 bg-gray-700 rounded-full cursor-pointer"
            // onClick={handleScroll}
            // onScroll={handleScroll}
          >
            <motion.div
              className="w-3 h-3 bg-purple-600 rounded-full -translate-x-1"
              animate={{
                y: `${(activeCard / (services.length - 1)) * 100}%`,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          </div>
          <div className="relative">
            <div className="flex items-center justify-center">
              <Image
                src="/chooseAIImg.png"
                height={500}
                width={400}
                alt="AI Robot Hand"
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </div>
        </div>

        <div className="h-[1px] w-full bg-white/20 mt-3"></div>
      </div>

      <div className="absolute -bottom-40 -right-48 bg-blur-gradient-purple md:w-[900px] md:h-[900px] w-[500px] h-[500px]" />
    </div>
  );
};

export default ChooseAI;
