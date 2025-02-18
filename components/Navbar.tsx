"use client";
import React from "react";
import { FloatingNav } from "./ui/FloatingNavbar";
import { FaBars } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import MagicButton from "./MagicButton";
import { scrollToSection } from "@/lib/scrollToSection";
import Link from "next/link";

interface NavbarProps {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  navItems: any;
  ctaAction: string;
}

const Navbar: React.FC<NavbarProps> = ({
  isMenuOpen,
  setIsMenuOpen,
  navItems,
  ctaAction,
}) => {
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = isMenuOpen ? "auto" : "hidden";
  };

  const handleScroll = (id: string) => {
    scrollToSection(id);
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
        <Link href="/">
          <Image
            src="/logo.png"
            width={180}
            height={100}
            alt="collabez-logo"
            className="cursor-pointer object-contain"
          />
        </Link>

        <nav>
          <ul className="lg:flex lg:items-center min-[1400px]:gap-6 xl:gap-4 gap-3 hidden">
            {navItems?.map((item: any, index: number) => (
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

        <div className="sm:block hidden absolute top-0 z-[10000]">
          <FloatingNav navItems={navItems} />
        </div>

        <div className="lg:flex lg:items-center xl:gap-6 gap-4 hidden">
          <a className="relative z-20 cursor-pointer">
            <MagicButton
              title="Get A Quote"
              position="right"
              otherClasses="font-[family-name:var(--font-satoshi)] w-32 "
              handleClick={() => scrollToSection(ctaAction)}
            />
          </a>
        </div>

        <div
          className="lg:hidden block w-10 h-8 cursor-pointer z-[11000] relative"
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
            className={`fixed inset-0 ${
              isMenuOpen ? "z-[10000]" : "z-0"
            } bg-black bg-opacity-95 flex flex-col gap-6 items-center justify-center`}
          >
            <motion.nav
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
            >
              <ul className="space-y-5 text-center">
                {navItems.map((item: any, index: number) => (
                  <motion.li key={index} variants={itemVariants}>
                    <button
                      onClick={() => handleScroll(item.id)}
                      className="text-white text-3xl font-bold hover:text-heroColor transition-colors duration-300 font-[family-name:var(--font-satoshi)]"
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
              <a className="relative z-20 cursor-pointer mt-4">
                <MagicButton
                  title="Get A Quote"
                  // icon={<FaLocationArrow />}
                  position="right"
                  otherClasses="font-[family-name:var(--font-satoshi)] w-48 "
                  handleClick={() => handleScroll(ctaAction)}
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
