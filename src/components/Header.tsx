"use client";

import SvgIcon from "@/components/SvgIcon";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

const Header = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const onScrollToTop = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const scrollToAnchor = (id: string) => {
    const element = document.querySelector(`#${id}`);
    if (element instanceof HTMLElement) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className={cn(
        "bg-[rgba(11,8,13,0.8)] fixed left-0 right-0 top-0 z-50  transition-all duration-300",
        scrollY > 1 ? "backdrop-blur-xl" : ""
      )}
    >
      <div
        className={cn(
          "relative mx-auto px-[15px] py-[18px] flex items-center justify-between  md:px-[40px]  xl:w-[1200px] xl:py-[30px] "
        )}
      >
        <SvgIcon
          name="logo_header"
          className="w-[73px] h-6 xl:w-[110px] xl:h-9"
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
          <Link href="/">Get Started</Link>
        </nav>
        <SvgIcon name="logo" className="w-6 h-6 md:hidden" />
        <div
          className={cn(
            "h-[3px] w-full bg-[#2C2C20] absolute bottom-0 left-0 transition-all duration-300",
            scrollY > 1 ? "scale-x-150" : "scale-x-150 xl:scale-x-100"
          )}
        ></div>
      </div>
    </div>
  );
};

export default Header;
