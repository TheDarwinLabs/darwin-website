"use client";

import React, { useRef } from "react";
import Header from "@/components/header";
import Section1 from "@/components/home/section1";
import Section2 from "@/components/home/section2";
import Section3 from "@/components/home/section3";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Home() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);
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
            start: "top 75%",
            end: "bottom 25%",
            scrub: 1,
          },
        })
        .fromTo(
          ".realfi-box3 .realfi-box3-item",
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
    },
    {
      scope: containerRef,
    }
  );
  return (
    <div ref={containerRef}>
      <Header />
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
