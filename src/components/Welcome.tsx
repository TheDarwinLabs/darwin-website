"use client";

import { MutableRefObject, useEffect, useRef, useState } from "react";
import SvgIcon, { SvgIconProps } from "@/components/SvgIcon";
import useBodyScrollLock from "@/hooks/useBodyScrollLock";
import { useAnimate } from "framer-motion";
import LottieAnimation from "@/components/LottieAnimation";
import { useMediaQuery } from "react-responsive";
import mouse from "@/assets/lottie/mouse.json";
import arrow from "@/assets/lottie/arrow.json";
import logo from "@/assets/lottie/logo.json";
import { cn } from "@/lib/utils";

const Welcome = () => {
  const [orientation, setOrientation] = useState("portrait");
  const [isOpen, setOpen] = useState(true);
  const [scope, animate] = useAnimate();
  const mouseRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const vidRef = useRef<HTMLDivElement>(null);

  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  useBodyScrollLock(isOpen);

  useEffect(() => {
    const updateOrientation = () => {
      const { type } = screen.orientation;
      setOrientation(type.includes("portrait") ? "portrait" : "landscape");
    };

    // 初始化时设置方向
    updateOrientation();

    // 监听屏幕方向变化
    screen.orientation.addEventListener("change", updateOrientation);

    return () => {
      screen.orientation.removeEventListener("change", updateOrientation);
    };
  }, []);

  useEffect(() => {
    if (!isOpen) {
      if (mouseRef.current) {
        animate(mouseRef.current, { opacity: [1, 0] }, { duration: 0.2 });
      }
      if (titleRef.current) {
        animate(
          titleRef.current,
          { opacity: [1, 0], y: [0, -10] },
          { duration: 0.3 }
        );
      }
      if (logoRef.current) {
        animate(
          logoRef.current,
          { opacity: [1, 0], y: [0, -200] },
          { duration: 0.5 }
        );
      }
      if (vidRef.current) {
        animate(
          vidRef.current,
          {
            opacity: [1, 0],
            y: [0, -100],
            x: isMobile ? [0, 0] : ["-50%", "-50%"],
            filter: ["blur(0px)", "blur(90px)"],
          },
          { duration: 0.5 }
        );
      }
      if (scope) {
        const exitAnimation = async () => {
          animate(
            scope.current,
            { opacity: [1, 0], y: [0, -100] },
            { duration: 1, delay: 0.4 }
          );
          setTimeout(() => {
            document.body.classList.remove("body-top-locked");
          }, 200);
          await animate(scope.current, { duration: 1, delay: 0.4 });
          await animate(
            scope.current,
            { height: [1, 0], width: [1, 0] },
            { duration: 1 }
          );
          // document.body.style.overflow = "auto";
        };
        exitAnimation();
      }
    }
  }, [isOpen, animate, mouseRef, titleRef, vidRef, scope, isMobile]);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (isTop && window.scrollY > 0) {
  //       setOpen(false);
  //       window.removeEventListener("scroll", handleScroll);
  //     }
  //   };
  //   // handleScroll();
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, [isTop]);

  useEffect(() => {
    // 禁用页面滚动
    // document.body.style.overflow = "hidden";
    document.body.classList.add("body-top-locked");

    const handleScroll = (event: any) => {
      // 监听滚轮向下滚动或手势向下滑动
      if (event.deltaY > 0 || (event.touches && event.touches.length > 0)) {
        // 启用页面滚动
        //
        setOpen(false);
      }
    };

    // 添加事件监听器
    window.addEventListener("wheel", handleScroll);
    window.addEventListener("touchstart", handleScroll);

    return () => {
      // 清除事件监听器
      window.removeEventListener("wheel", handleScroll);
      window.removeEventListener("touchstart", handleScroll);
    };
  }, []);

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  //   setTimeout(() => {
  //     setIsTop(true);
  //   }, 0);
  // }, []);

  //
  console.log(orientation);
  return (
    <div
      ref={scope}
      className="relative w-[100%] h-screen bg-black z-[9999] overflow-hidden"
    >
      <div
        ref={vidRef}
        className={cn(
          "absolute min-w-[100vw] sm:min-w-[768px] md:min-w-[1080px] lg:min-w-[1440px] xl:min-w-[1920px]",
          orientation == "landscape"
            ? "bottom-0 left-0 md:left-1/2 md:-translate-x-1/2 sm:bottom-0  "
            : "bottom-0 left-0"
        )}
      >
        <div
          className={cn(
            orientation == "landscape"
              ? "w-[240vw] sm:w-[220vw] md:w-[180vw]"
              : "w-[240vw] sm:w-[220vw] md:w-[200vw]"
          )}
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="object-cover w-full"
          >
            <source src="/bg-circle.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <div className="absolute w-full left-1/2 text-xs md:text-base -translate-x-1/2 bottom-[220px] text-center md:text-left  md:bottom-[185px] uppercase xl:w-[1200px]">
        <div ref={titleRef}>
          The Evolutionary Chain for <span className="text-brand">AI</span>
        </div>
      </div>
      <div
        ref={mouseRef}
        className=" flex z-10 flex-col items-center justify-center absolute bottom-[40px] left-1/2 -translate-x-1/2"
      >
        <div>
          <LottieAnimation
            animationData={mouse}
            className="hidden md:inline-block  w-[30px] h-[30px] transition-all duration-300"
          />
          <LottieAnimation
            animationData={arrow}
            className=" md:hidden  w-[30px] h-[30px] transition-all duration-300"
          />
        </div>
        <div className=" text-xs uppercase h-9 flex items-center justify-center text-[#989898]">
          Slide up to evolve
        </div>
      </div>
      <div className="absolute w-[92vw] sm:w-[700px] md:w-[900px] xl:w-[1200px] left-1/2 -translate-x-1/2 -translate-y-1/2  top-1/2  md:top-[45%] ">
        <div ref={logoRef}>
          <LottieAnimation
            animationData={logo}
            className=" transition-all duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default Welcome;
