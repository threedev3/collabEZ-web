"use client";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { reviewItems } from "@/data";

const Reviews = () => {
  const settings = {
    // className: "center",
    // centerMode: true,
    infinite: true,
    slideToScroll: 1,
    slidesToShow: 3,
    swipeToSlide: true,
    speed: 500,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="relative sm:px-10 px-5 sm:py-10 py-5 w-full " id="reviews">
      <div className="absolute top-0 -left-48 bg-blur-gradient lg:w-[700px] lg:h-[700px] w-[400px] h-[400px] -z-0" />
      <div className="bg-[url('/reviewsBg.png')] bg-no-repeat bg-contain bg-right absolute right-0 top-40 bottom-0 lg:w-[500px] w-[400px]" />

      <div className="max-w-[93%] w-full mx-auto flex flex-col xl:gap-8 lg:gap-6 gap-6 items-start justify-center h-full">
        <div className="flex flex-col min-[806px]:gap-6 gap-6 items-start justify-between w-full">
          <h3 className="bg-clip-text text-transparent bg-gradient-to-r from-heroColor via-white to-heroColor max-w-7xl min-[1525px]:text-[75px] min-[1420px]:text-[70px]  min-[1260px]:text-[60px] min-[1071px]:text-[50px] min-[976px]:text-[45px] min-[899px]:text-[40px] sm:text-[40px] text-[28px] min-[375px]:text-[32px] min-[414px]:text-[32px] leading-snug font-[family-name:var(--font-satoshi)] ">
            Our Client Reviews
          </h3>

          <p className="font-[family-name:var(--font-satoshi)] text-white lg:text-xl sm:text-lg text-base relative z-10 max-w-xl">
            Our clients rate about the personalized attention and innovative
            solutions we provide at Collabez.
          </p>
        </div>

        <Slider {...settings} className="w-full relative z-20">
          {reviewItems.map((reviewItem, index) => (
            <div className="mx-auto" key={index}>
              <div className="bg-reviewCard/40 min-[1426px]:max-w-[460px] xl:max-w-[350px] max-w-full  backdrop-blur-sm review-border flex flex-col gap-8 p-6 mx-3 cursor-pointer">
                <div className="flex flex-row justify-between items-center">
                  <div className="flex flex-row items-center gap-3">
                    <div>
                      <img src={reviewItem.avatar} alt="" />
                    </div>

                    <div className="flex flex-col gap-0.5">
                      <h3 className="font-[family-name:var(--font-satoshi)] text-white text-lg">
                        {reviewItem.name}
                      </h3>
                      <p className="font-[family-name:var(--font-satoshi)] text-white text-sm">
                        {reviewItem.tagLine}
                      </p>
                    </div>
                  </div>

                  <div>
                    <img src="./quote.png" alt="" />
                  </div>
                </div>

                <div>
                  <p className="font-[family-name:var(--font-satoshi)] text-white text-base max-w-[350px]">
                    {reviewItem.review}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div className="absolute -bottom-60 -right-28 bg-blur-gradient-purple  w-[600px] h-[600px]" />
    </div>
  );
};

export default Reviews;
