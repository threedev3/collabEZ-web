"use client";

import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRight, FaChevronDown } from "react-icons/fa6";

interface AccordionItemProps {
  title: string;
  content: string;
  isOpen?: boolean;
  onToggle: () => void;
  isLast?: boolean;
}

export function AccordionItem({
  title,
  content,
  isOpen = false,
  onToggle,
  isLast = false,
}: AccordionItemProps) {
  return (
    <div className="relative pb-[1px]">
      {!isLast && (
        <div className="absolute left-0 bottom-0 w-full h-[2px] bg-gradient-to-r from-purpleBg/40 to-purpleBgTo/60"></div>
      )}
      <button
        onClick={onToggle}
        className="flex items-center justify-between w-full py-4 text-left"
      >
        <div className="flex items-center md:gap-4 gap-2">
          <span className="text-arrowColor">
            <FaArrowRight />
          </span>
          <span className="text-white xl:text-2xl sm:text-xl text-lg font-[family-name:var(--font-satoshi)]">
            {title}
          </span>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className={`${
            isOpen ? "bg-transparent" : "bg-white"
          } p-1 border border-white rounded-full`}
        >
          <FaChevronDown
            className={`w-3 h-3 ${isOpen ? "text-white" : "text-black"}`}
          />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-4 text-white/90 pl-7 sm:text-base text-sm font-[family-name:var(--font-satoshi)]">
              {content}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
