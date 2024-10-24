"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  rotatingWords,
}: {
  words: string[];
  rotatingWords: string[];
  className?: string;
}) => {
  const [scope, animate] = useAnimate();
  const [rotatingWordIndex, setRotatingWordIndex] = useState(0);

  // const [currentWord, setCurrentWord] = useState(0);
  // const [isAnimating, setIsAnimating] = useState(false);

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     setIsAnimating(true);
  //     setTimeout(() => {
  //       setCurrentWord((prev) => (prev + 1) % rotatingWords.length);
  //       setIsAnimating(false);
  //     }, 500); // Transition time (matches transition in Tailwind)
  //   }, 3000); // Change word every 3 seconds

  //   return () => clearInterval(intervalId);
  // }, [rotatingWords]);

  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 1,
        delay: stagger(0.15),
      }
    );

    // Handle rotating word change every 2 seconds
    const interval = setInterval(() => {
      setRotatingWordIndex((prevIndex) =>
        prevIndex === rotatingWords.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Adjust the interval time to control the speed of word change

    return () => clearInterval(interval);
  }, [animate, rotatingWords]);

  return (
    <div className={cn("font-bold", className)}>
      {/* mt-4 to my-4 */}
      <div className="">
        <div className=" dark:text-white bg-clip-text text-transparent bg-gradient-to-r from-heroColor via-white to-heroColor min-[1400px]:leading-tight leading-none tracking-wide ">
          {/* {renderWords()} */}

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

            {/* Rotating word section */}
            <div className="my-2">
              {words.slice(-1, -1).join(" ")}{" "}
              <AnimatePresence mode="wait">
                <motion.span
                  key={rotatingWordIndex} // A key ensures a new element gets created for each word.
                  initial={{ rotateY: 90, opacity: 0 }} // Initial state before the word appears
                  animate={{ rotateY: 0, opacity: 1 }} // Final state (enter animation)
                  exit={{ rotateY: -90, opacity: 0 }} // Exit animation
                  transition={{ duration: 0.6 }} // Duration of animation
                  className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-heroColor via-white to-heroColor transform"
                >
                  {rotatingWords[rotatingWordIndex]}
                </motion.span>
              </AnimatePresence>
              {/* <span
                className={`inline-block bg-clip-text text-transparent bg-gradient-to-r from-heroColor via-white to-heroColor transition-all duration-500 transform ${
                  isAnimating
                    ? "opacity-0 -translate-y-5"
                    : "opacity-100 translate-y-0"
                }`}
              >
                {rotatingWords[currentWord]}
              </span> */}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
