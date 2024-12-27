"use client";

import React, { useEffect, useRef, useState } from "react";
import Header from "@/components/header";
import Section1 from "@/components/home/section1";
import Section2 from "@/components/home/section2";
import Section3 from "@/components/home/section3";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";
import SvgIcon from "@/components/SvgIcon";
import { useGlobal } from "@/providers/GlobalProvider";

export default function Home() {
  const { showSplash, setShowSplash } = useGlobal();
  const [videoSrc, setVideoSrc] = useState<string>("");
  const containerRef = useRef<HTMLDivElement | null>(null);

  const updateVideoSrc = () => {
    const screenWidth = window.innerWidth;

    if (screenWidth >= 1024) {
      setVideoSrc("/images/web.mp4");
    } else if (screenWidth >= 768) {
      setVideoSrc("/images/pad.mp4");
    } else {
      setVideoSrc("/images/mobile.mp4");
    }
  };

  useEffect(() => {
    updateVideoSrc();

    window.addEventListener("resize", updateVideoSrc);

    return () => {
      window.removeEventListener("resize", updateVideoSrc);
    };
  }, []);

  useEffect(() => {
    document.body.classList.add("body-top-locked");

    const handleScroll = (event: WheelEvent | TouchEvent) => {
      if (
        (event instanceof WheelEvent && event.deltaY > 0) ||
        (event instanceof TouchEvent && event.touches.length > 0)
      ) {
        setShowSplash(false);
        document.body.classList.remove("body-top-locked");
      }
    };

    window.addEventListener("wheel", handleScroll);
    window.addEventListener("touchstart", handleScroll);

    return () => {
      window.removeEventListener("wheel", handleScroll);
      window.removeEventListener("touchstart", handleScroll);
    };
  }, [setShowSplash]);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);
      gsap.to(".slide-up", {
        opacity: 0,
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".realfi-box1",
            start: "top 75%",
            end: "bottom 25%",
            scrub: 1,
          },
        })
        .fromTo(
          ".realfi-box1 .realfi-box1-item",
          {
            opacity: 0,
            y: 50,
          },
          {
            opacity: 1,
            y: 0,
            duration: 2,
            // stagger: 0.3,
            ease: "power2.out",
          }
        );

      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".realfi-box2",
            start: "top 75%",
            end: "bottom 25%",
            scrub: 1,
          },
        })
        .fromTo(
          ".realfi-box2 .realfi-box2-item",
          {
            opacity: 0,
            y: 50,
          },
          {
            opacity: 1,
            y: 0,
            duration: 2,
            stagger: 0.3,
            ease: "power2.out",
          }
        );

      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".realfi-box3",
            start: "-=300",
            end: "+=200",
            scrub: 1,
          },
        })
        .fromTo(
          ".realfi-box3 .realfi-box3-item",
          {
            opacity: 0.6,
            y: 50,
          },
          {
            opacity: 1,
            y: 0,
            duration: 3,
            ease: "power2.out",
          }
        );

      // const mm = gsap.matchMedia();
      // mm.add("(min-width: 1024px)", () => {
      //   gsap.timeline({
      //     scrollTrigger: {
      //       trigger: ".section1-container",
      //       start: "top top",
      //     },
      //   });
      // });
    },
    {
      scope: containerRef,
    }
  );
  return (
    <div ref={containerRef}>
      <Header />
      <div
        id="responsive-video"
        className={cn(
          "h-screen bg-black  fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center z-[1000] transition-all duration-500",
          !showSplash ? "opacity-0 z-0 pointer-events-none" : "opacity-100"
        )}
      >
        <video
          key={videoSrc}
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="slide-up absolute z-10 bottom-[80px] left-1/2 inline-flex flex-col items-center gap-3 -translate-x-1/2">
          <SvgIcon name="mouse"></SvgIcon>
          <div className="capitalize text-xs">Scroll to Evolve</div>
        </div>
      </div>
      {/* <SvgIcon
        name="pattern"
        className="w-[1000px] h-[1000px] left-[50%] -ml-[500px] top-[50%] -mt-[500px] fixed z-0 text-[#f5f4f6]"
      /> */}
      <Section1 />
      <Section2 />
      <Section3 />
    </div>
  );
}
