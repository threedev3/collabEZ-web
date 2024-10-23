"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";

interface NavItem {
  name: string;
  id: string;
  icon?: JSX.Element;
}

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: NavItem[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      const direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.1) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      const navHeight = 80; // Approximate navbar height
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit fixed top-10 inset-x-0 mx-auto border-2 border-white/50 rounded-xl dark:bg-black bg-dual-radial from-purpleBg/75 via-black/75 to-black/75 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-50 px-6 py-3  items-center justify-center space-x-4 ",
          className
        )}
      >
        {navItems.map((navItem, idx: number) => (
          <li
            key={`link=${idx}`}
            // href={navItem.link}
            onClick={() => handleScroll(navItem.id)}
            className={cn(
              "relative dark:text-neutral-50 items-center flex flex-wrap space-x-1 text-white dark:hover:text-neutral-300 hover:text-heroColor transition-all duration-300 cursor-pointer"
            )}
          >
            {/* <span className="block sm:hidden">{navItem.icon}</span> */}
            <span className="block text-sm">{navItem.name}</span>
          </li>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};
