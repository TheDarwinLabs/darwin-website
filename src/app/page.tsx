import { useState } from "react";
import Image from "next/image";
import SvgIcon from "@/components/SvgIcon";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FaqSection from "@/components/FaqSection";
import DappSection from "@/components/DappSection";
import RoadmapSection from "@/components/RoadmapSection";
import Technologies from "@/components/Technologies";
import Benefits from "@/components/Benefits";

export default function Page() {
  return (
    <>
      <Header />
      <main role="main" className="main-container">
        <div className="relative section1">
          <div className="relative px-5 mx-auto pt-[150px] pb-[116px] sm:h-[900x] sm:w-[1200px] sm:px-0 sm:pt-[362px] sm:pb-0">
            <div className="text-[36px] w-[340px] font-bold leading-[53px] tracking-tight uppercase sm:text-[72px] sm:w-[890px] sm:leading-[84px]">
              The Evolutionary Chain for
              <span className="text-brand"> AI</span>
            </div>
            <div className="text-xs mt-5 text-[#727272] uppercase sm:mt-10 sm:w-[890px] sm:text-base">
              We are pioneering a revolutionary approach to the integration of
              AI and blockchain technology, a concept we call &quot;The Chain of
              Evolution.&ldquo; Our mission is to democratize access to AI
              resources and disrupt the monopoly held by traditional tech
              giants. By leveraging the decentralized nature of blockchain, we
              aim to create a more inclusive, secure, and equitable AI
              ecosystem.
            </div>
            <a
              href="/"
              className="flex items-center justify-between mt-[83px] w-[200px] border-y-[1px] border-brand px-3 py-4 uppercase text-brand sm:w-[400px] sm:mt-[50px] sm:py-[18px]"
            >
              try now
              <SvgIcon name="arrow" className="w-[18px] h-[18px]" />
            </a>
            <div className="left-box hidden"></div>
            <div className="right-box hidden"></div>
          </div>
        </div>
        <Benefits />
        <Technologies />
        <DappSection />
        {/* <RoadmapSection /> */}
        <div>
          <div className="mx-auto py-[40px] px-5 sm:w-[1200px] sm:h-[800px] sm:py-[100px] sm:px-0">
            <div className="mx-auto text-center bg-[rgba(255,255,255,0.03)] border-x-[1px] border-[rgba(255,255,255,0.15)]  backdrop-blur-lg sm:py-[68px] sm:w-[1000px]">
              <div className=" mx-auto uppercase text-[30px] leading-[44px] tracking-tight font-bold text-balance  sm:text-wrap sm:text-[72px] sm:leading-[84px] sm:w-[726px]">
                be a part of the revolution
              </div>
              <div className=" mx-auto mt-5 text-[rgba(255,255,255,0.8)] text-[10px] leading-[14px] w-[240px] sm:w-[726px] sm:mt-10 sm:text-base md:text-[#727272]">
                Learn from the experiences of our users. See how they have
                utilized our platform to drive innovation and achieve success.
                Join us today and be a part of the revolution in AI and
                blockchain technology. Explore, innovate, and thrive with
                Darwin&apos;s Lab.
              </div>
              <a
                href="/"
                className="mx-auto flex items-center justify-between mt-[40px] w-[200px] border-y-[1px] border-brand px-[10px] py-[19px] uppercase font-bold text-brand sm:w-[400px] sm:mt-[80px] sm:px-5 sm:py-[31px]"
              >
                <SvgIcon
                  name="arrow"
                  className="w-[9px] h-[9px] sm:w-[18px] sm:h-[18px]"
                />
                <span className="text-[8px] leading-3 sm:text-base">
                  Join now
                </span>
                <SvgIcon
                  name="arrow"
                  className="w-[9px] h-[9px] sm:w-[18px] sm:h-[18px] rotate-180"
                />
              </a>
            </div>
          </div>
        </div>
        <FaqSection />
      </main>
      <Footer />
    </>
  );
}
