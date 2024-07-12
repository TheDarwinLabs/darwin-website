"use client";

import SvgIcon from "@/components/SvgIcon";
import InViewAnimation from "@/components/InViewAnimation";

const Section1 = () => {
  return (
    <div className="relative section1">
      <InViewAnimation className="z-10 relative px-5 mx-auto pt-[150px] pb-[116px] md:h-[900px] md:w-[700px] md:pt-[404px] lg:w-[900px] lg:pt-[237px] xl:w-[1200px] md:px-0 xl:pt-[362px] xl:pb-0">
        <div className="text-[36px] w-[340px] font-bold leading-[53px] tracking-tight uppercase text-balance md:w-[700px] md:text-[48px]  lg:text-[54px] lg:leading-[84px]  xl:text-[72px] xl:w-[910px] xl:leading-[84px]">
          The <span className="text-brand">Evolutionary Chain</span> infused
          with
          <span className="text-brand"> AI</span>
        </div>
        <div className="text-xs mt-5 text-[#727272]  text-balance md:w-[600px] md:mt-10 md:text-sm lg:w-[750px] xl:w-[890px] xl:text-base">
          {`We are pioneering a revolutionary approach to the integration of AI and blockchain technology, a concept we call "The Chain of Evolution." Darwinchain empowers developers to build AI apps with free, verifiable AI inference and seamless dApp deployment on a decentralized, Layer-1 blockchain. By driving innovation and mass adoption of AI technology, we are building a smarter digital economy where AI and blockchain seamlessly integrate for transformative impact.`}
        </div>
        <a
          href="/"
          className="try-now-btn group mt-[83px] w-[200px] px-3 py-4 md:mt-[50px] md:w-[300px] md:py-[18px] lg:w-[400px] hover:font-bold transition-all duration-300 "
        >
          try now
          <SvgIcon
            name="arrow"
            className=" absolute right-3 w-[9px] h-[9px] md:w-[18px] md:h-[18px] transition-all duration-300 group-hover:opacity-0"
          />
          <SvgIcon
            name="arrow-hover"
            className="absolute w-[102px] h-[18px] right-3 transition-all duration-300 -translate-x-20 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"
          />
        </a>
      </InViewAnimation>
    </div>
  );
};

export default Section1;
