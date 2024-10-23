"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React from "react";

const AnimateOnScroll = ({ children }: { children: React.ReactNode }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.2, // Trigger when 20% of the component is in view
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }} // Start hidden and lower
      animate={inView ? { opacity: 1, y: 0 } : {}} // Animate into view
      transition={{ duration: 0.6, ease: "easeOut" }} // Animation settings
    >
      {children}
    </motion.div>
  );
};

export default AnimateOnScroll;
