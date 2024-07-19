"use client";

import SvgIcon from "@/components/SvgIcon";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import useBodyScrollLock from "@/hooks/useBodyScrollLock";
import { motion } from "framer-motion";

const Header = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useBodyScrollLock(isOpen);

  const onScrollToTop = () => {
    setOpen(false);
    setTimeout(() => {
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }, 50);
  };

  const scrollToAnchor = (id: string) => {
    setOpen(false);
    setTimeout(() => {
      const element = document.querySelector(`#${id}`);
      if (element instanceof HTMLElement) {
        console.log(element);
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 50);
  };

  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  return (
    <>
      <div
        className={cn(
          "bg-[rgba(11,8,13,0.8)] fixed left-0 right-0 top-0 z-50  transition-all duration-300",
          scrollY > 1 ? "backdrop-blur-xl" : ""
        )}
      >
        <div
          className={cn(
            "relative mx-auto px-[15px] py-[18px] flex items-center justify-between md:py-[30px] lg:w-[900px] xl:w-[1200px]"
          )}
        >
          <SvgIcon
            name="logo_header"
            className="w-[78px] h-7 md:w-[118px] md:h-[42px]"
          />
          <nav className="hidden gap-[80px] uppercase text-xs md:flex">
            <a
              className="cursor-pointer hover:text-brand transition-all"
              onClick={onScrollToTop}
            >
              home
            </a>
            <a
              onClick={() => scrollToAnchor("core-tect")}
              className="cursor-pointer  hover:text-brand transition-all"
            >
              How it Works
            </a>
            <a
              onClick={() => scrollToAnchor("faqs")}
              className="cursor-pointer  hover:text-brand transition-all"
            >
              FAQs
            </a>
            {/* <Link href="/" className="text-brand">
              Get Started
            </Link> */}
          </nav>
          <SvgIcon
            name={isOpen ? "menu-close" : "menu"}
            className="w-6 h-6 md:hidden"
            onClick={toggleMenu}
          />
          <div
            className={cn(
              "h-[2px] w-full bg-[#2C2C20] absolute bottom-0 left-1/2 -translate-x-1/2 transition-all duration-300 md:h-[3px]",
              scrollY > 1 ? "w-screen" : "w-screen xl:w-full"
            )}
          ></div>
        </div>
      </div>
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: isOpen ? "auto" : 0 }}
        className="fixed top-[60px] left-0 right-0 overflow-hidden z-[9999] lg:hidden"
      >
        <div className="relative bg-[rgba(0,0,0,0.8)] backdrop-blur-lg z-[9999] px-[10px] text-center">
          <span
            onClick={onScrollToTop}
            className="block #f2f2f2 uppercase py-10 border-b-[0.5px] border-[#333333] hover:text-[#9083FF]"
          >
            Home
          </span>
          <span
            onClick={() => scrollToAnchor("core-tect")}
            className="block #f2f2f2 uppercase py-10 border-b-[0.5px] border-[#333333] hover:text-[#9083FF]"
          >
            how it Works
          </span>
          <span
            onClick={() => scrollToAnchor("faqs")}
            className="block #f2f2f2 uppercase py-10 hover:text-[#9083FF]"
          >
            faqs
          </span>
          {/* <a
            href="#"
            onClick={() => setOpen(false)}
            className="block #f2f2f2 uppercase py-10 text-[#9083FF]"
          >
            get started
          </a> */}
        </div>
      </motion.div>
    </>
  );
};

export default Header;
