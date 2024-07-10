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
        <div className="shadow-box"></div>
        <div className="relative section1">
          <div className="z-10  relative px-5 mx-auto pt-[150px] pb-[116px] md:h-[900px] md:w-[700px] md:pt-[404px] lg:w-[900px] lg:pt-[237px] xl:w-[1200px] md:px-0 xl:pt-[362px] xl:pb-0">
            <div className="text-[36px] w-[340px] font-bold leading-[53px] tracking-tight uppercase text-balance md:w-[600px] md:text-[48px]  lg:text-[54px] lg:leading-[84px]  xl:text-[72px] xl:w-[890px] xl:leading-[84px]">
              The Evolutionary Chain for
              <span className="text-brand"> AI</span>
            </div>
            <div className="text-xs mt-5 text-[#727272] uppercase text-balance md:w-[600px] md:mt-10 md:text-sm lg:w-[750px] xl:w-[890px] xl:text-base">
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
              className="flex items-center justify-between mt-[83px] w-[200px] border-y-[1px] border-brand px-3 py-4 uppercase text-brand md:mt-[50px] md:w-[300px] md:py-[18px] lg:w-[400px] "
            >
              try now
              <SvgIcon name="arrow" className="w-[18px] h-[18px]" />
            </a>
          </div>
        </div>
        <Benefits />
        <Technologies />
        <DappSection />
        <RoadmapSection />
        <div className="section6">
          <div className="relative z-10 mx-auto py-[40px] px-5  md:h-[750px]  md:w-[700px] lg:w-[900px] lg:h-[800px]  xl:w-[1200px] xl:h-[800px] xl:py-[100px] md:px-0">
            <div className="mx-auto text-center bg-[rgba(255,255,255,0.03)] border-x-[1px] border-[rgba(255,255,255,0.15)]  backdrop-blur-lg md:py-[80px] xl:py-[68px]  md:w-[700px] xl:w-[1000px]">
              <div className=" mx-auto uppercase text-[30px] leading-[44px] tracking-tight font-bold text-balance md:text-[36px] md:leading-[60px] md:w-[500px] md:text-wrap lg:text-[42px] xl:text-wrap xl:text-[54px] xl:leading-[84px] xl:w-[726px]">
                be a part of the revolution
              </div>
              <div className=" mx-auto mt-5 text-[rgba(255,255,255,0.8)] text-[10px] leading-[14px] md:w-[580px] md:text-[14px] md:leading-[21px] w-[240px] xl:w-[726px] md:mt-10 xl:text-base md:text-[#727272]">
                Learn from the experiences of our users. See how they have
                utilized our platform to drive innovation and achieve success.
                <br />
                Join us today and be a part of the revolution in AI and
                blockchain technology. Explore, innovate, and thrive with
                Darwin&apos;s Lab.
              </div>
              <a
                href="/"
                className="mx-auto flex items-center justify-between mt-[40px] w-[200px] border-y-[1px] border-brand px-[10px] py-[19px] uppercase font-bold text-brand md:w-[400px] md:mt-[116px] md:py-7 xl:mt-[80px] xl:px-5 xl:py-[31px]"
              >
                <SvgIcon
                  name="arrow"
                  className="w-[9px] h-[9px] md:w-[18px] md:h-[18px]"
                />
                <span className="text-[8px] leading-3 md:text-base">
                  Join now
                </span>
                <SvgIcon
                  name="arrow"
                  className="w-[9px] h-[9px] md:w-[18px] md:h-[18px] rotate-180"
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
