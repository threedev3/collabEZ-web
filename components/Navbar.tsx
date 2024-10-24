"use client";
import React, { useState } from "react";
import { FloatingNav } from "./ui/FloatingNavbar";
import { navItems } from "@/data";
import { FaBars } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import MagicButton from "./MagicButton";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = isMenuOpen ? "auto" : "hidden";
  };

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
    setIsMenuOpen(false);
  };

  const menuVariants = {
    closed: {
      transition: {
        staggerChildren: 0.15,
        staggerDirection: -1,
      },
      opacity: 0,
    },
    open: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    closed: { opacity: 0, y: 50 },
    open: { opacity: 1, y: 0 },
  };
  return (
    <header className="flex flex-row justify-between items-center gap-3 relative">
      <div className="flex flex-row justify-between items-center gap-3 w-full ">
        <div>
          <Image
            src="/logo.png"
            width={160}
            height={100}
            alt="collabez-logo"
            className="cursor-pointer w-[180px]"
          />
        </div>

        <nav>
          <ul className="lg:flex lg:items-center min-[1400px]:gap-6 xl:gap-4 gap-3 hidden">
            {navItems.map((item, index) => (
              <li
                key={index}
                className="list-none font-[family-name:var(--font-satoshi)] capitalize cursor-pointer text-white hover:text-heroColor transition-all duration-300 xl:text-base text-sm"
                onClick={() => handleScroll(item.id)}
                // href={item.id}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </nav>

        <div className="sm:block hidden absolute top-0 z-50">
          <FloatingNav navItems={navItems} />
        </div>

        <div className="lg:flex lg:items-center xl:gap-6 gap-4 hidden">
          {/* <button
            className="min-[1400px]:py-2 xl:py-1.5 py-1.5 min-[1400px]:px-10 xl:px-4 px-4 bg-white  rounded-xl text-black font-semibold font-[family-name:var(--font-satoshi)] transition-all duration-300 xl:text-base text-sm"
            onClick={() => handleScroll("contact")}
          >
            Contact Us
          </button> */}

          <a className="relative z-20 cursor-pointer">
            <MagicButton
              title="Get A Quote"
              // icon={<FaLocationArrow />}
              position="right"
              otherClasses="font-[family-name:var(--font-satoshi)] w-32 "
              handleClick={() => handleScroll("contact")}
            />
          </a>
        </div>

        <div
          className="lg:hidden block w-10 h-8 cursor-pointer z-50 relative"
          onClick={toggleMenu}
        >
          <FaBars
            className={`h-8 w-8 text-white absolute inset-0 transition-all duration-300 ease-in-out ${
              isMenuOpen
                ? "opacity-0 rotate-90 scale-50"
                : "opacity-100 rotate-0 scale-100"
            }`}
          />
          <IoCloseSharp
            className={`h-8 w-8 text-white absolute inset-0 transition-all duration-300 ease-in-out ${
              isMenuOpen
                ? "opacity-100 rotate-0 scale-100"
                : "opacity-0 rotate-90 scale-50"
            }`}
          />
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black bg-opacity-95 flex flex-col gap-6 items-center justify-center"
          >
            <motion.nav
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
            >
              <ul className="space-y-5 text-center">
                {navItems.map((item, index) => (
                  <motion.li key={index} variants={itemVariants}>
                    <button
                      onClick={() => handleScroll(item.id)}
                      className="text-white text-4xl font-bold hover:text-yellow-300 transition-colors duration-300 font-[family-name:var(--font-satoshi)]"
                    >
                      {item.name}
                    </button>
                  </motion.li>
                ))}
              </ul>
            </motion.nav>

            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              {/* <motion.button
                className="py-3 px-8 bg-white text-black rounded-full font-bold text-lg shadow-lg font-[family-name:var(--font-satoshi)]"
                onClick={() => handleScroll("contact")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us
              </motion.button> */}

              <a className="relative z-20 cursor-pointer mt-4">
                <MagicButton
                  title="Get A Quote"
                  // icon={<FaLocationArrow />}
                  position="right"
                  otherClasses="font-[family-name:var(--font-satoshi)] w-48 "
                  handleClick={() => handleScroll("contact")}
                />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
