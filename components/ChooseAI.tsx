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
  // const [activeCard, setActiveCard] = React.useState(0);
  // const ref = useRef<any>(null);

  // const handleScroll = (e: any) => {
  //   if (!ref.current) return;

  //   const scrollAmount = e.deltaY;
  //   if (scrollAmount > 0) {
  //     setActiveCard((prev) => Math.min(prev + 1, services.length - 1));
  //   } else {
  //     setActiveCard((prev) => Math.max(prev - 1, 0));
  //   }
  // };

  // const { scrollYProgress } = useScroll({
  //   container: ref,
  //   offset: ["start start", "end start"],
  // });
  // const cardLength = services.length;

  // useMotionValueEvent(scrollYProgress, "change", (latest) => {
  //   const cardsBreakpoints = services.map((_, index) => index / cardLength);
  //   const closestBreakpointIndex = cardsBreakpoints.reduce(
  //     (acc, breakpoint, index) => {
  //       const distance = Math.abs(latest - breakpoint);
  //       if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
  //         return index;
  //       }
  //       return acc;
  //     },
  //     0
  //   );
  //   setActiveCard(closestBreakpointIndex);
  // });

  // const linearGradients = [
  //   "linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))",
  //   "linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))",
  //   "linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))",
  // ];

  // const [backgroundGradient, setBackgroundGradient] = useState(
  //   linearGradients[0]
  // );

  // useEffect(() => {
  //   setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  // }, [activeCard]);

  // const [activeCard, setActiveCard] = useState(0);
  // const scrollRef = useRef<HTMLDivElement>(null);
  // const containerRef = useRef<HTMLDivElement>(null);
  // const [isInView, setIsInView] = useState(false);

  // // Handle component visibility
  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     ([entry]) => {
  //       setIsInView(entry.isIntersecting);
  //     },
  //     { threshold: 0.5 }
  //   );

  //   if (containerRef.current) {
  //     observer.observe(containerRef.current);
  //   }

  //   return () => observer.disconnect();
  // }, []);

  // // Control page scroll
  // useEffect(() => {
  //   const handlePageScroll = (e: WheelEvent) => {
  //     if (isInView) {
  //       if (
  //         (activeCard === 0 && e.deltaY < 0) ||
  //         (activeCard === services.length - 1 && e.deltaY > 0)
  //       ) {
  //         // Allow page scroll only at boundaries
  //         return;
  //       }
  //       e.preventDefault();
  //     }
  //   };

  //   window.addEventListener("wheel", handlePageScroll, { passive: false });
  //   return () => window.removeEventListener("wheel", handlePageScroll);
  // }, [activeCard, isInView]);

  // // Handle component scroll
  // const handleWheel = (e: React.WheelEvent) => {
  //   e.preventDefault();
  //   if (e.deltaY > 0 && activeCard < services.length - 1) {
  //     setActiveCard((prev) => prev + 1);
  //   } else if (e.deltaY < 0 && activeCard > 0) {
  //     setActiveCard((prev) => prev - 1);
  //   }
  // };

  // // Gradient backgrounds for cards
  // const gradients = [
  //   "from-pink-500 to-indigo-500",
  //   "from-pink-500 to-indigo-500",
  //   "from-pink-500 to-indigo-500",
  //   "from-pink-500 to-indigo-500",
  // ];

  // // Scroll progress tracking
  // const { scrollYProgress } = useScroll({
  //   container: containerRef,
  //   offset: ["start start", "end end"],
  // });

  // useMotionValueEvent(scrollYProgress, "change", (latest) => {
  //   const cardIndex = Math.min(
  //     Math.floor(latest * services.length),
  //     services.length - 1
  //   );
  //   setActiveCard(cardIndex);
  // });

  // // Card animation variants
  // const cardVariants = {
  //   inactive: {
  //     backgroundColor: "transparent",
  //     scale: 0.95,
  //     opacity: 0.5,
  //     transition: { duration: 0.3 },
  //   },
  //   active: {
  //     scale: 1,
  //     opacity: 1,
  //     transition: { duration: 0.3 },
  //   },
  // };

  // // Calculate scrollbar height based on active card
  // const scrollbarHeight = `${100 / services.length}%`;
  // const scrollbarProgress = (activeCard / (services.length - 1)) * 100;

  return (
    <div
      // ref={containerRef}
      className="relative sm:px-10 px-5 sm:py-10 py-5 w-full "
      id="choose-ai"
    >
      <div className="max-w-[93%] w-full mx-auto flex flex-col xl:gap-8 lg:gap-6 gap-6 items-start justify-center h-full">
        <div className="flex min-[806px]:gap-6 gap-0 items-start justify-between w-full">
          <h3 className="bg-clip-text text-transparent bg-gradient-to-r from-heroColor via-white to-heroColor max-w-full min-[1525px]:text-[75px] min-[1420px]:text-[70px]  min-[1260px]:text-[60px] min-[1071px]:text-[50px] min-[976px]:text-[45px] min-[899px]:text-[40px] sm:text-[40px] text-[28px] min-[375px]:text-[32px] min-[414px]:text-[32px] leading-snug font-[family-name:var(--font-satoshi)] text-center mx-auto">
            Why Choose CollabEZ for AI Solutions?
          </h3>
        </div>

        <div
          className="flex justify-between xl:gap-8 gap-4 items-center w-full"
          style={{
            backgroundImage: 'url("/chooseAIBg.png")',
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "contain",
          }}
        >
          <div
            className="relative lg:w-auto w-full"
            // onWheel={handleWheel}
          >
            <div
              // ref={scrollRef}
              className="flex flex-col xl:gap-3 gap-1 "
            >
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  // initial="inactive"
                  // animate={activeCard === index ? "active" : "inactive"}
                  // variants={cardVariants}
                  // className={`relative p-6 rounded-xl ${
                  //   activeCard === index
                  //     ? `bg-gradient-to-r ${
                  //         gradients[index % gradients.length]
                  //       }`
                  //     : "bg-transparent"
                  // }`}
                  whileHover={{
                    scale: 1.05,
                    background: "linear-gradient(135deg, #A604F2, #763AF5)",
                  }}
                  transition={{ duration: 0.3 }}
                  className="relative py-4 md:px-6 px-4 rounded-xl flex flex-col items-start min-[1400px]:gap-4 gap-2 w-full "
                >
                  {/* <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0"
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  /> */}
                  <div className="flex items-center md:gap-6 gap-3">
                    <div className="xl:p-4 p-3 rounded-full bg-white flex-shrink-0">
                      <Image
                        src={service.icon}
                        alt={`${service.title} icon`}
                        height={20}
                        width={20}
                        className="w-6 h-6 text-white"
                      />
                    </div>
                    <h3 className="lg:text-2xl text-xl text-white font-[family-name:var(--font-satoshi)]">
                      {service.title}
                    </h3>
                  </div>
                  <div className="w-full">
                    <p className="text-base text-white/90 max-w-2xl font-[family-name:var(--font-satoshi)]">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Custom Scrollbar */}
            {/* <div className="absolute right-0 top-0 h-full w-1 bg-gray-700/30 rounded-full">
              <motion.div
                className="w-1 rounded-full bg-purple-600"
                style={{
                  height:
                    activeCard === services.length - 1
                      ? "100%"
                      : scrollbarHeight,
                }}
                animate={{
                  y: `${scrollbarProgress}%`,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            </div> */}
          </div>

          {/* Static Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative lg:flex items-center justify-center hidden"
          >
            <Image
              src="/chooseAIImg.png"
              height={600}
              width={600}
              alt="AI Robot Hand"
              className="max-w-full max-h-full object-contain"
            />
          </motion.div>
        </div>

        <div className="h-[1px] w-full bg-white/20 mt-3"></div>
      </div>

      <div className="absolute bottom-0 -right-48 bg-blur-gradient-purple lg:w-[600px] lg:h-[800px] " />
    </div>
  );
};

export default ChooseAI;
