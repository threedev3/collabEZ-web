"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string[];
  className?: string;
}) => {
  const [scope, animate] = useAnimate();
  //   let wordsArray = words.split(" ");
  useEffect(() => {
    // console.log(wordsArray);
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 2,
        delay: stagger(0.15),
      }
    );
  }, [scope.current]);

  const renderWords = () => {
    return (
      //   <motion.div ref={scope}>
      //     {words.map((line, lineIdx) => {
      //       return (
      //         <motion.span
      //           key={word + idx}
      //           // change here if idx is greater than 3, change the text color to #CBACF9
      //           className={` ${
      //             idx >= 0
      //               ? "text-purple bg-clip-text text-transparent bg-gradient-to-r from-heroColor via-white to-heroColor"
      //               : "dark:text-white "
      //           } opacity-0`}
      //         >
      //           {word}{" "}
      //         </motion.span>
      //       );
      //     })}
      //   </motion.div>
      <motion.div ref={scope}>
        {words.map((line, lineIdx) => (
          <div key={lineIdx} className="my-2">
            {line.split(" ").map((word, idx) => (
              <motion.span
                key={word + idx}
                className={`${
                  idx >= 0
                    ? "text-purple bg-clip-text text-transparent bg-gradient-to-r from-heroColor via-white to-heroColor"
                    : "dark:text-white"
                } opacity-0`}
              >
                {word}{" "}
              </motion.span>
            ))}
          </div>
        ))}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      {/* mt-4 to my-4 */}
      <div className="">
        <div className=" dark:text-white bg-clip-text text-transparent bg-gradient-to-r from-heroColor via-white to-heroColor xl:leading-tight leading-none tracking-wide ">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
