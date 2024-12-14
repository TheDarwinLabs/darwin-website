import Link from "next/link";
import SvgIcon from "../SvgIcon";
import { Button } from "../ui/button";
import Image from "next/image";
import Footer from "../footer";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

const list = [
  {
    title: "Credit Flows Become Liquid Tokens",
    icon: "realfi_1",
  },
  {
    title: "Real-Time Ownership Tracking",
    icon: "realfi_2",
  },
  {
    title: "Transparent Yield Distribution",
    icon: "realfi_3",
  },
  {
    title: "Fractional Investment Enabled",
    icon: "realfi_4",
  },
];
const list2 = [
  {
    image: "/images/waitlist.png",
    title: "Join the Waitlist",
    desc: "Global spending, local rewards. Be the first to experience seamless payments.",
    button: "Join Waitlist",
    href: "/join",
  },
  {
    image: "/images/investing.png",
    title: "Start Investing",
    desc: "Tokenized assets, real-world returns. Create your account and earn 20%+ yields today.",
    button: "Get Started",
    href: "/start",
  },
];
const Section3 = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const p1Ref = useRef<HTMLDivElement | null>(null);
  const p2Ref = useRef<HTMLDivElement | null>(null);
  const p3Ref = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const paths = document.querySelectorAll(".darwin-logo path");
      const originalColors = Array.from(paths).map((path) =>
        path.getAttribute("fill")
      );

      gsap.registerPlugin(ScrollTrigger);
      const container = containerRef.current;
      const p1 = p1Ref.current;
      const p2 = p2Ref.current;
      const p3 = p3Ref.current;

      gsap
        .timeline({
          scrollTrigger: {
            trigger: container,
            start: "top top",
            end: "+=1500",
            pin: true,
            scrub: true,
            // markers: true,
            onEnter: () => {
              paths.forEach((el, index) => {
                gsap.to(el, {
                  fill: originalColors[index] ?? "",
                  duration: 1,
                });
              });
              gsap.to(".header", {
                color: "#121212",
                duration: 1,
              });
              gsap.to(".real-card-p", {
                backgroundColor: "transparent",
              });
              gsap.to(".real-fi-p", {
                backgroundColor: "#ff764a",
              });
            },
            onLeaveBack: () => {
              paths.forEach((el) => {
                gsap.to(el, {
                  fill: "#ffffff",
                  duration: 1,
                });
              });
              gsap.to(".header", {
                color: "#ffffff",
                duration: 1,
              });
              gsap.to(".real-card-p", {
                backgroundColor: "#ff764a",
              });
              gsap.to(".real-fi-p", {
                backgroundColor: "transparent",
              });
            },
          },
        })
        .to(
          p1,
          {
            y: -50,
            opacity: 0,
            duration: 3,
          },
          3
        )
        .to(
          p2,
          {
            y: "-50%",
            opacity: 1,
            duration: 3,
          },
          3
        )
        .to(
          p3,
          {
            y: 0,
            opacity: 1,
            duration: 3,
          },
          9
        )
        .to(
          p2,
          {
            y: "-80%",
            opacity: 0,
            duration: 3,
          },
          9
        )
        .add(() => {}, "+=3");
    },
    {
      // scope: containerRef
    }
  );
  return (
    <div
      ref={containerRef}
      className="w-full h-screen relative flex flex-col items-center justify-center overflow-hidden min-h-[760px]"
    >
      <div
        ref={p1Ref}
        className=" flex w-[1168px] mx-auto z-10 gap-[65px] translate-y-50"
      >
        <div className="w-[560px]   flex flex-col gap-6">
          <SvgIcon name="realfi"></SvgIcon>
          <div className="text-[#121212] text-[34px] font-medium leading-[42px] tracking-wider">
            Where REAL Premium Returns Meet Tokenization For Open Access.
          </div>
          <div className="text-black text-[17px] leading-snug tracking-wide pr-6">
            Tokenized, real-world value—accessible to all. Premium bonds,
            professionally managed, digitally delivered. Our tokens, backed by
            verified Brazilian bonds, transform institutional-grade investments
            into assets for everyone, globally accessible and secure.
          </div>
          <Button className="w-[180px] px-10 py-7 rounded-[70px] text-black text-sm font-medium  tracking-wider leading-none">
            APPLY NOW
          </Button>
        </div>
        <div className="flex-1 grid grid-cols-2 gap-[18px]">
          {list.map((item, index) => (
            <div
              key={index}
              className="px-6 pt-3 py-6 flex flex-col items-center text-center bg-white rounded-[18px]"
            >
              <SvgIcon name={item.icon}></SvgIcon>
              <div>{item.title}</div>
            </div>
          ))}
        </div>
      </div>
      <div ref={p2Ref} className=" top-1/2 translate-y-50 absolute opacity-0">
        <SvgIcon name="realfi" className="mb-10" />
        <div className="w-[1134px] grid grid-cols-3 gap-6">
          <div className="flex flex-col justify-start p-6 text-[#181818] items-end h-[400px] relative rounded-[18px] border border-[#d7b094] bg-[#E2C7B2] overflow-hidden ">
            <div className="absolute z-0 top-0 left-0 right-0 bottom-0 mix-blend-multiply opacity-50">
              <SvgIcon name="pattern" className=" text-[#E6C7AE] scale-110" />
            </div>
            <div className="bg-gradient-to-b from-[rgba(226,199,178,0)] to-[#e2c7b2] absolute z-10 top-0 left-0 w-full h-full"></div>
            <div className="flex-col justify-start items-start gap-[15px] flex z-20">
              <div className="text-[34px] font-medium leading-[34px]">
                SENIOR <br />
                BONDS
              </div>
              <div className="text-[#333333] text-sm leading-snug">
                Target APY
              </div>
              <div className="justify-end items-end font-medium gap-[5px] inline-flex">
                <div className="text-[44px] leading-[34px]">15</div>
                <div className="w-[34px] text-[21px] leading-snug">%</div>
              </div>
              <div className="text-[#333333] text-sm leading-snug min-h-11">
                {`Fixed Annual Yield "Institutional-Grade Stability`}
              </div>
              <div className="w-full h-[1px] bg-[#333333]"></div>
              <div className="text-[#333333] text-sm leading-snug">
                Minimum: $XXX Ideal for: Institutions & HNWI seeking stable
                yields
              </div>
            </div>
            <div className="mt-4 items-center gap-[9px] inline-flex z-20">
              <span className="text-sm font-medium font-['DM Sans'] leading-none tracking-wider">
                Learn More
              </span>
              <SvgIcon name="circle-arrow-right"></SvgIcon>
            </div>
          </div>
          <div className="flex flex-col justify-start p-6 text-[#181818] items-end h-[400px] relative rounded-[18px] border border-[#b3b3b3] bg-[#d3d3d3] overflow-hidden ">
            <div className="absolute z-0 top-0 left-0 right-0 bottom-0 mix-blend-multiply opacity-50">
              <SvgIcon name="pattern" className=" text-[#E8E8E8] scale-110" />
            </div>
            <div className="bg-gradient-to-b from-[rgba(196,196,196,0)] to-[#c3c3c3] absolute z-10 top-0 left-0 w-full h-full"></div>
            <div className="flex-col justify-start items-start gap-[15px] flex z-20">
              <div className="text-[34px] font-medium leading-[34px]">
                MEZZANINE PORTFOLIO
              </div>
              <div className="text-[#333333] text-sm leading-snug">
                Target APY
              </div>
              <div className="justify-end items-end font-medium gap-[5px] inline-flex">
                <div className="text-[44px] leading-[34px]">5-30</div>
                <div className="w-[34px] text-[21px] leading-snug">%</div>
              </div>
              <div className="text-[#333333] text-sm leading-snug min-h-11">
                {`Target Returns "Enhanced Yield Potential`}
              </div>
              <div className="w-full h-[1px] bg-[#333333]"></div>
              <div className="text-[#333333] text-sm leading-snug">
                Minimum: $XX Ideal for: Experienced investors seeking optimized
                returns
              </div>
            </div>
            <div className="mt-4 items-center gap-[9px] inline-flex z-20">
              <span className="text-sm font-medium font-['DM Sans'] leading-none tracking-wider">
                Learn More
              </span>
              <SvgIcon name="circle-arrow-right"></SvgIcon>
            </div>
          </div>
          <div className="flex flex-col justify-start p-6 text-white items-end h-[400px] relative rounded-[18px] border bg-[#303030] border-[#202020] overflow-hidden ">
            <div className="absolute z-0 top-0 left-0 right-0 bottom-0 mix-blend-multiply opacity-50">
              <SvgIcon name="pattern" className="text-[#202020] scale-110" />
            </div>
            <div className="bg-gradient-to-b from-[rgba(60,60,60,0)] to-[#010101] absolute z-10 top-0 left-0 w-full h-full"></div>
            <div className="flex-col justify-start items-start gap-[15px] flex z-20">
              <div className="text-[34px] font-medium leading-[34px]">
                ALPHA <br />
                SECURITIES
              </div>
              <div className="text-[#ebeae8] text-sm leading-snug">
                Target APY
              </div>
              <div className="justify-end items-end font-medium gap-[5px] inline-flex">
                <div className="text-[21px] leading-snug">Up to</div>
                <div className="text-[44px] leading-[34px]">500</div>
                <div className="w-[34px] text-[21px] leading-snug">%</div>
              </div>
              <div className="text-[#ebeae8] text-sm leading-snug min-h-11">
                Potential Return
              </div>
              <div className="w-full h-[1px] bg-[#757575]"></div>
              <div className="text-[#ebeae8] text-sm leading-snug">
                Minimum: $1,000 Ideal for: Smart traders seeking amplified
                opportunities
              </div>
            </div>
            <div className="mt-4 items-center gap-[9px] inline-flex z-20">
              <span className="text-sm font-medium font-['DM Sans'] leading-none tracking-wider">
                Learn More
              </span>
              <SvgIcon name="circle-arrow-right"></SvgIcon>
            </div>
          </div>
        </div>
      </div>
      <div
        ref={p3Ref}
        className=" bottom-0 absolute opacity-0 translate-y-[100%]"
      >
        <div className="w-[1100px] text-center text-black text-[34px] font-medium font-['Montserrat'] leading-[42px] tracking-wider mb-6">
          Real Value Starts Here
        </div>
        <div className="w-[1100px] flex items-center justify-center ">
          <div className="flex gap-6 w-[888px] mb-[18px]  items-center">
            {list2.map((item, index) => (
              <div key={index} className="bg-white rounded-[18px] flex-1">
                <div className="h-[150px] relative">
                  <Image src={item.image} fill alt={item.title}></Image>
                </div>
                <div className="px-6 pb-6 pt-[18px] flex flex-col gap-3">
                  <div className="text-[#0d0d0d] text-2xl font-medium leading-[34px]">
                    {item.title}
                  </div>
                  <div className="text-[#212121] text-sm font-normal leading-snug">
                    {item.desc}
                  </div>
                  <Button
                    asChild
                    className="self-start w-[136px] h-10 rounded-[99px] text-black"
                  >
                    <Link href={item.href}> {item.button}</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Section3;
