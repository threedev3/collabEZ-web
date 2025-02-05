"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  index: number;
}

const ServiceCard = ({ title, description, icon, index }: ServiceCardProps) => {
  return (
    <motion.div
      className=" rounded-xl p-6 "
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      //   whileHover={{
      //     backgroundColor: "#181818",
      //     borderWidth: 1,
      //     borderColor: "#ffffff13",
      //   }}
    >
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shrink-0">
          <Image src={icon} alt={title} width={24} height={24} />
        </div>
        <div className="flex flex-col items-center">
          <h3 className="text-white text-lg font-semibold mb-2 font-[family-name:var(--font-satoshi)]">
            {title}
          </h3>
          <p className="text-white/90 text-sm text-center font-[family-name:var(--font-satoshi)]">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const MobileServiceFeatures = () => {
  return (
    <div className="relative px-5 py-10">
      <div className="max-w-[93%] w-full mx-auto flex flex-col gap-2">
        <div className="flex flex-col lg:gap-6 gap-2 items-center justify-between w-full relative z-20">
          <h3 className="bg-clip-text text-transparent bg-gradient-to-r from-heroColor via-white to-heroColor max-w-full min-[1525px]:text-[75px] min-[1420px]:text-[70px]  min-[1260px]:text-[60px] min-[1071px]:text-[50px] min-[976px]:text-[45px] min-[899px]:text-[40px] sm:text-[40px] text-[28px] min-[375px]:text-[28px] min-[414px]:text-[32px] leading-snug font-[family-name:var(--font-satoshi)] text-center mx-auto">
            AI Services at CollabEZ
          </h3>

          <div className="flex flex-col justify-center items-center ">
            <p className="text-center md:tracking-wider xl:mb-4 text-[17px] min-[414px]:text-lg min-[540px]:text-xl md:text-2xl lg:text-2xl xl:text-3xl font-[family-name:var(--font-satoshi)] font-semibold max-w-[89vw] md:max-w-2xl lg:max-w-[80vw] xl:max-w-[85vw] min-[1400px]:max-w-[60vw]">
              We provide custom AI solutions designed to fit your business
              needs.
            </p>
            <p className="text-center md:tracking-wider xl:mb-4 text-[17px] min-[414px]:text-lg min-[540px]:text-xl md:text-2xl lg:text-2xl xl:text-3xl font-[family-name:var(--font-satoshi)] font-semibold max-w-[89vw] md:max-w-2xl lg:max-w-[80vw] xl:max-w-[85vw] min-[1400px]:max-w-[60vw] text-heroColor">
              Our AI services include:
            </p>
          </div>
        </div>

        <div className="relative w-full max-w-md mx-auto">
          <Image
            src="/aiServiceImg.png"
            alt="AI Head"
            width={400}
            height={400}
            className="w-full h-auto"
          />
        </div>

        <div className="grid md:grid-cols-2 md:gap-4 relative z-10">
          <ServiceCard
            title="1- AI-Powered Applications"
            description="Developing intelligent applications that learn and adapt to user behaviors, offering tailored solutions that evolve with your business."
            icon="/aiService1.png"
            index={0}
          />
          <ServiceCard
            title="2- Process Automation"
            description="Implementing AI-driven workflow automation to streamline processes, reduce manual intervention, and improve operational efficiency."
            icon="/aiService2.png"
            index={1}
          />
          <ServiceCard
            title="3- Data Analysis & Insights"
            description="Leveraging machine learning algorithms to analyze large datasets, uncover patterns, and provide actionable insights for smarter decision-making."
            icon="/aiService3.png"
            index={2}
          />
          <ServiceCard
            title="4- Natural Language Processing"
            description="Developing intelligent applications that learn and adapt to user behaviors, offering tailored solutions that evolve with your business."
            icon="/aiService4.png"
            index={3}
          />
        </div>
      </div>
      <div className="h-[1px] w-full bg-white/20 mt-8"></div>
    </div>
  );
};

export default MobileServiceFeatures;
