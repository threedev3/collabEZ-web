"use client";
import React, { useState } from "react";
import { FloatingNav } from "./ui/FloatingNavbar";
import { navItems } from "@/data";
import { FaBars } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = isMenuOpen ? "auto" : "hidden";
  };
  return (
    <header className="flex flex-row justify-between items-center gap-3">
      <div>
        <img src="/logo.png" alt="collabez-logo" />
      </div>

      <FloatingNav navItems={navItems} />

      <nav>
        <ul className="lg:flex lg:items-center min-[1400px]:gap-6 xl:gap-4 gap-3 hidden">
          {navItems.map((item, index) => (
            <li
              key={index}
              className="list-none font-[family-name:var(--font-satoshi)] capitalize cursor-pointer text-white hover:text-heroColor transition-all duration-300 xl:text-base text-sm"
              // onClick={() => handleScroll(item.id)}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </nav>

      <div className="lg:flex lg:items-center xl:gap-6 gap-4 hidden">
        <button
          className="min-[1400px]:py-2 xl:py-1.5 py-1.5 min-[1400px]:px-10 xl:px-4 px-4 bg-white  rounded-full text-black font-semibold font-[family-name:var(--font-satoshi)] transition-all duration-300 xl:text-base text-sm"
          //   onClick={() => handleScroll("contact-us")}
        >
          Contact Us
        </button>
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

      <div
        className={`fixed inset-0 bg-black bg-opacity-95 transform ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        } transition-transform duration-500 ease-in-out xl:hidden flex items-center justify-center`}
      >
        <div className="flex flex-col items-center justify-center h-full w-full">
          <nav>
            <ul className="space-y-5 text-center">
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className="font-[family-name:var(--font-satoshi)] uppercase cursor-pointer text-white hover:text-heroColor transition-all duration-300 sm:text-4xl min-[540px]:text-3xl text-2xl"
                  //   onClick={() => handleScroll(item.id)}
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </nav>
          <div className="mt-12 space-y-4 w-64">
            <button
              className="w-full py-3 px-6 border-2 border-heroColor  rounded-full text-white font-[family-name:var(--font-satoshi)]  transition-all duration-300 text-xl"
              //   onClick={() => handleScroll("contact-us")}
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
