import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SvgIcon from "@/components/SvgIcon";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Footer from "@/components/footer";
import Link from "next/link";
import Section2 from "./section2";
import Section3 from "./section3";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Home = () => {
  return (
    <>
      {/* <SvgIcon
        name="pattern"
        className="w-[1000px] h-[1000px] left-[50%] -ml-[500px] top-[50%] -mt-[500px] fixed z-0 text-[#f5f4f6]"
      /> */}
      {/* <Section1 /> */}
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
    </>
  );
};

const Section4 = () => {
  return (
    <div className="w-full h-[760px] relative overflow-hidden flex items-center justify-center">
      {/* <SvgIcon
        name="pattern"
        className="w-[1000px] h-[1000px] left-[50%] -ml-[500px] top-[50%] -mt-[500px] absolute z-0 text-white"
      /> */}
      <div className="">
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
                Ideal for: Institutions & HNWI seeking stable yields
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
                Ideal for: Experienced investors seeking optimized returns
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
                Ideal for: Smart traders seeking amplified opportunities
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
    </div>
  );
};

const Section5 = () => {
  const list = [
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
  return (
    <div className="w-full h-screen min-h-[760px] relative flex flex-col items-center justify-end">
      <div className="w-[1047.74px] text-center text-black text-[34px] font-medium font-['Montserrat'] leading-[42px] tracking-wider mb-6">
        Real Value Starts Here
      </div>
      <div className="flex gap-6 w-[888px] mb-[18px]">
        {list.map((item, index) => (
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
      <Footer />
    </div>
  );
};

export default Home;
