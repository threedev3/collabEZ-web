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
