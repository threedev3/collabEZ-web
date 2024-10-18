import { cn } from "@/lib/utils";
import { MdArrowOutward } from "react-icons/md";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  sideImg,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  sideImg?: React.ReactNode;
  icon?: string;
}) => {
  return (
    <div className={cn("relative group/bento ", className)}>
      <div
        className={cn(
          " rounded-xl  hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-8 dark:bg-black bg-white/10  flex flex-col space-y-4 ",
          className
        )}
      >
        {/* Gradient Border Animation */}
        {/* <div className="absolute inset-0 -z-10 rounded-xl bg-gradient-border animate-gradient-move opacity-50 group-hover:opacity-100 transition-opacity duration-300 w-10"></div>

      <div className="absolute inset-0 -z-20 rounded-xl border-[2px] border-transparent group-hover/bento:translate-x-2 transition duration-200 w-10"></div> */}

        <div className="w-[60px] h-[60px] bg-[#6F6F71] rounded-full flex justify-center items-center flex-shrink-0">
          <img src={icon} alt="" className="h-[33px] w-[33px] object-contain" />
        </div>

        <div className="group-hover/bento:translate-x-2 transition duration-200">
          <div className="font-[family-name:var(--font-satoshi)] font-bold text-white text-4xl max-w-xs  mb-2 mt-2">
            {title}
          </div>
          <div className="font-[family-name:var(--font-satoshi)] font-normal text-white text-lg mb-4 max-w-[280px]">
            {description}
          </div>
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
      </div>
    </div>
  );
};
