import React from "react";

const ContactForm = () => {
  return (
    <div className="relative sm:px-10 px-5 sm:py-16 py-5 w-full " id="contact">
      <div className="max-w-[93%] w-full mx-auto flex flex-col xl:gap-8 lg:gap-6 gap-6 items-start justify-center h-full">
        <div className="flex  min-[806px]:gap-6 gap-0 items-start justify-between w-full">
          <h3 className="bg-clip-text text-transparent bg-gradient-to-r from-heroColor via-white to-heroColor max-w-full min-[1525px]:text-[75px] min-[1420px]:text-[70px]  min-[1260px]:text-[60px] min-[1071px]:text-[50px] min-[976px]:text-[45px] min-[899px]:text-[40px] sm:text-[40px] text-[28px] min-[414px]:text-[32px] leading-snug font-[family-name:var(--font-satoshi)] text-center mx-auto">
            Contact Us Today
          </h3>
        </div>

        <div className="bg-contactFormBg w-full h-[70vh] rounded-xl relative z-10 py-10 px-10 grid lg:grid-cols-2 grid-cols-1 gap-4">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <h3 className="font-[family-name:var(--font-satoshi-bold)] text-white text-3xl">
                Let’s connect today
              </h3>
              <p className="font-[family-name:var(--font-satoshi)] text-white/80 text-base max-w-sm">
                We'd love to hear from you! Please fill out the form below, and
                we'll get back to you shortly.
              </p>
            </div>

            <div className=""></div>
          </div>

          <div>
            <img src="/contactImg.png" alt="" />
          </div>
        </div>
      </div>

      {/* <div className="absolute -bottom-40 -right-48 bg-blur-gradient-purple  w-[900px] h-[900px]" /> */}
    </div>
  );
};

export default ContactForm;
