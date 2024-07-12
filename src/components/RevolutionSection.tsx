"use client";

import SvgIcon from "@/components/SvgIcon";
import InViewAnimation from "@/components/InViewAnimation";

const RevolutionSection = () => {
  return (
    <div className="section6">
      <InViewAnimation className="relative z-10 mx-auto py-[40px] px-5  md:h-[750px]  md:w-[700px] lg:w-[900px] lg:h-[800px]  xl:w-[1200px] xl:h-[800px] xl:py-[100px] md:px-0">
        <div className="mx-auto text-center bg-[rgba(255,255,255,0.03)] border-x-[1px] border-[rgba(255,255,255,0.15)]  backdrop-blur-lg md:py-[80px] xl:py-[68px]  md:w-[700px] xl:w-[1000px]">
          <div className=" mx-auto uppercase text-[30px] leading-[44px] tracking-tight font-bold text-balance md:text-[36px] md:leading-[60px] md:w-[500px] md:text-wrap lg:text-[42px] xl:text-wrap xl:text-[54px] xl:leading-[84px] xl:w-[726px]">
            be a part of the revolution
          </div>
          <div className=" mx-auto mt-5 text-[rgba(255,255,255,0.8)] text-[10px] leading-[14px] md:w-[580px] md:text-[14px] md:leading-[21px] w-[240px] xl:w-[726px] md:mt-10 xl:text-base md:text-[#727272]">
            {`Let's be part of our journey building better AI for everyone`}
          </div>
          <a
            href="/"
            className="try-now-btn justify-center group mx-auto mt-[40px] w-[200px] px-[10px] py-[19px] font-bold md:w-[400px] md:mt-[116px] md:py-7 xl:mt-[80px] xl:px-5 xl:py-[31px]"
          >
            <SvgIcon
              name="arrow"
              className=" absolute left-[10px] xl:left-[20px] w-[9px] h-[9px] md:w-[18px] md:h-[18px] transition-all duration-300 group-hover:opacity-0"
            />
            <SvgIcon
              name="arrow-hover-sm"
              className="absolute w-[102px] h-[18px] left-[10px] xl:left-[20px] transition-all duration-300 -translate-x-20 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"
            />
            <span className="text-[8px] leading-3 md:text-base">Join now</span>
            <SvgIcon
              name="arrow"
              className=" absolute right-[10px] rotate-180 xl:right-[20px] w-[9px] h-[9px] md:w-[18px] md:h-[18px] transition-all duration-300 group-hover:opacity-0"
            />
            <SvgIcon
              name="arrow-hover-sm"
              className="absolute w-[102px] h-[18px] right-[10px] xl:right-[20px] rotate-180 transition-all duration-300 translate-x-20 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"
            />
          </a>
        </div>
      </InViewAnimation>
    </div>
  );
};

export default RevolutionSection;
