// "use client";
// import React, { useEffect, useRef, useState } from "react";
// import { motion } from "framer-motion";
// import { cn } from "@/lib/utils";
// import { FaReact } from "react-icons/fa";
// import { RiNextjsFill } from "react-icons/ri";
// import { RiNextjsLine } from "react-icons/ri";
// import { FaNode } from "react-icons/fa6";
// import { SiExpress } from "react-icons/si";
// import { SiMongodb } from "react-icons/si";
// import { FaFigma } from "react-icons/fa6";
// import { SiAdobephotoshop } from "react-icons/si";
// import { FaShopify } from "react-icons/fa";
// import { FaWordpress } from "react-icons/fa";
// import { FaAws } from "react-icons/fa";

// const TechLogo = ({
//   name,
//   Icon,
// }: {
//   name: string;
//   Icon: React.FC<React.SVGProps<SVGSVGElement>>;
// }) => (
//   <div className="flex flex-col items-center xl:gap-10 md:gap-8 gap-4 justify-center xl:w-60 md:w-52 w-48 xl:h-60 md:h-52 h-48 p-4 rounded-xl shadow-lg">
//     <Icon className="xl:w-32 md:w-28 w-24 xl:h-32 md:h-28 h-24 text-white" />
//     <span className="md:text-2xl text-xl font-medium text-gray-300">
//       {name}
//     </span>
//   </div>
// );

// interface InfiniteTechSliderProps {
//   technologies: {
//     name: string;
//     Icon: React.FC<React.SVGProps<SVGSVGElement>>;
//   }[];
//   direction?: "left" | "right";
//   speed?: "fast" | "normal" | "slow";
//   pauseOnHover?: boolean;
//   className?: string;
// }

// const InfiniteTechSlider: React.FC<InfiniteTechSliderProps> = ({
//   technologies,
//   direction = "left",
//   speed = "slow",
//   pauseOnHover = false,
//   className,
// }) => {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const [start, setStart] = useState(false);

//   useEffect(() => {
//     console.log(
//       "containerRef.current.children,[]",
//       containerRef.current?.children
//     );
//   }, []);

//   useEffect(() => {
//     if (containerRef.current) {
//       const scrollerContent = Array.from(containerRef.current.children);

//       scrollerContent.forEach((item) => {
//         const duplicatedItem = item.cloneNode(true);
//         containerRef.current?.appendChild(duplicatedItem);
//       });

//       setStart(true);
//     }
//   }, []);

//   useEffect(() => {
//     if (containerRef.current) {
//       containerRef.current.style.setProperty(
//         "--animation-direction",
//         direction === "left" ? "forwards" : "reverse"
//       );
//       containerRef.current.style.setProperty(
//         "--animation-duration",
//         speed === "fast" ? "20s" : speed === "normal" ? "20s" : "60s"
//       );
//     }
//   }, [direction, speed]);
//   return (
//     <div className={cn("relative  w-full", className)}>
//       {/* <div className="max-w-[93%] w-full mx-auto flex flex-col xl:gap-6 lg:gap-6 gap-6 items-start justify-center h-full"> */}
//       {/* <div className="flex min-[806px]:flex-row flex-col min-[806px]:gap-6 gap-0 items-start justify-between w-full">
//           <h3 className="bg-clip-text text-transparent bg-gradient-to-r from-heroColor via-white to-heroColor max-w-7xl min-[1525px]:text-[75px] min-[1420px]:text-[70px]  min-[1260px]:text-[60px] min-[1071px]:text-[50px] min-[976px]:text-[45px] min-[899px]:text-[40px] sm:text-[40px] text-[28px] min-[414px]:text-[32px] leading-snug font-[family-name:var(--font-satoshi)]">
//             Deadline-Driven Digital Solutions for UAE & KSA
//           </h3>

//           <a className="min-[1525px]:mt-8 mt-6 inline-flex flex-shrink-0">
//             <MagicButton
//               title="Start Your Journey"
//               // icon={<FaLocationArrow />}
//               position="right"
//               otherClasses="font-[family-name:var(--font-satoshi)] "
//             />
//           </a>
//         </div>
//         <div>
//           <p className="font-[family-name:var(--font-satoshi)] text-white lg:text-xl sm:text-lg text-base relative z-10">
//             From Concept to Launch – We've Got You Covered
//           </p>
//         </div> */}

//       {/* </div> */}

//       <motion.div
//         ref={containerRef}
//         className={cn(
//           "flex gap-4 ",
//           start && "animate-scroll",
//           pauseOnHover && "hover:[animation-play-state:paused]"
//         )}
//         style={{
//           maskImage:
//             "linear-gradient(to right, transparent, white 20%, white 80%, transparent)",
//         }}
//       >
//         {technologies.map((tech, idx) => (
//           <TechLogo
//             key={`${tech.name}-${idx}`}
//             name={tech.name}
//             Icon={tech.Icon}
//           />
//         ))}
//       </motion.div>

//       <div className="absolute -bottom-64 -left-48 bg-blur-gradient opacity-80 w-[500px] h-[500px]" />
//     </div>
//   );
// };

// const ReactIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
//   <FaReact size={110} color="#61DBFB" />
// );
// const NextIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
//   <RiNextjsLine size={110} color="#ffffff" />
// );

// const NodejsIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
//   <FaNode size={110} color="#339933" />
// );

// const MongoDBIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
//   <SiMongodb size={110} color="#4DB33D" />
// );

// const ExpressIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
//   <SiExpress size={110} color="#ffffff" />
// );

// const WordPressIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
//   <FaWordpress size={110} color="#21759B" />
// );

// const ShopifyIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
//   <FaShopify size={110} color="#96bf48" />
// );

// const FigmaIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
//   <FaFigma size={110} color="#cdcdcd" />
// );

// const PhotoshopIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
//   <SiAdobephotoshop size={110} color="#001E36" />
// );

// const AWSIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
//   <FaAws size={110} color="#FF9900" />
// );

// const technologies = [
//   { name: "React", Icon: ReactIcon },
//   { name: "NextJS", Icon: NextIcon },
//   { name: "Node.js", Icon: NodejsIcon },
//   { name: "MongoDB", Icon: MongoDBIcon },
//   { name: "Express", Icon: ExpressIcon },
//   { name: "WordPress", Icon: WordPressIcon },
//   { name: "Shopify", Icon: ShopifyIcon },
//   { name: "Figma", Icon: FigmaIcon },
//   { name: "Photoshop", Icon: PhotoshopIcon },
//   { name: "AWS", Icon: AWSIcon },
// ];

// export function TechSliderDemo() {
//   return (
//     <div className="flex items-center justify-center gap-12 sm:px-10 px-5 sm:py-10 py-5">
//       <InfiniteTechSlider
//         technologies={technologies}
//         direction="left"
//         speed="normal"
//       />
//     </div>
//   );
// }

// export default TechSliderDemo;

"use client";
import React from "react";
import { FaReact } from "react-icons/fa";
import { RiNextjsLine } from "react-icons/ri";
import { FaNode } from "react-icons/fa6";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaFigma } from "react-icons/fa6";
import { SiAdobephotoshop } from "react-icons/si";
import { FaShopify } from "react-icons/fa";
import { FaWordpress } from "react-icons/fa";
import { FaAws } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import MagicButton from "./MagicButton";

const ReactIcon: React.FC = () => <FaReact size={110} color="#61DBFB" />;
const NextIcon: React.FC = () => <RiNextjsLine size={110} color="#ffffff" />;
const NodejsIcon: React.FC = () => <FaNode size={110} color="#339933" />;
const MongoDBIcon: React.FC = () => <SiMongodb size={110} color="#4DB33D" />;
const ExpressIcon: React.FC = () => <SiExpress size={110} color="#ffffff" />;
const WordPressIcon: React.FC = () => (
  <FaWordpress size={110} color="#21759B" />
);
const ShopifyIcon: React.FC = () => <FaShopify size={110} color="#96bf48" />;
const FigmaIcon: React.FC = () => <FaFigma size={110} color="#cdcdcd" />;
const PhotoshopIcon: React.FC = () => (
  <SiAdobephotoshop size={110} color="#0e4d7c" />
);
const AWSIcon: React.FC = () => <FaAws size={110} color="#FF9900" />;

const icons = [
  ReactIcon,
  NextIcon,
  NodejsIcon,
  MongoDBIcon,
  ExpressIcon,
  WordPressIcon,
  ShopifyIcon,
  FigmaIcon,
  PhotoshopIcon,
  AWSIcon,
];

const TechSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="relative sm:px-10 px-5 sm:py-10 py-5 w-full ">
      <div className="max-w-[93%] w-full mx-auto flex flex-col gap-12">
        <div className="flex flex-col gap-6 items-start justify-between w-full">
          <h3 className="bg-clip-text text-transparent bg-gradient-to-r from-heroColor via-white to-heroColor max-w-7xl min-[1525px]:text-[75px] min-[1420px]:text-[70px]  min-[1260px]:text-[60px] min-[1071px]:text-[50px] min-[976px]:text-[45px] min-[899px]:text-[40px] sm:text-[40px] text-[28px] min-[375px]:text-[32px] min-[414px]:text-[32px] leading-snug font-[family-name:var(--font-satoshi)]">
            Our Tech Stack
          </h3>

          <div>
            <p className="font-[family-name:var(--font-satoshi)] text-white lg:text-xl sm:text-lg text-base relative z-10">
              Our stack ensures high performance and scalability
            </p>
          </div>
        </div>

        <Slider {...settings} className="w-auto">
          {icons.map((Icon, index) => (
            <div key={index} className="flex items-center justify-center px-4">
              <Icon />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TechSlider;
