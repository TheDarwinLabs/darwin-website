"use client";

import SvgIcon from "@/components/SvgIcon";
import Image from "next/image";
import InViewAnimation from "@/components/InViewAnimation";
import { cn } from "@/lib/utils";

const Dapps = [
  {
    name: "Alicecam.ai",
    logo: "alicecam.png",
  },
  {
    name: "Seekandfind.ai",
    logo: "seekandfind.png",
  },
  {
    name: "futurewhispers.ai",
    logo: "futurewhispers.png",
  },
  // {
  //   name: "futurewhispers.ai",
  //   logo: "futurewhispers.png",
  // },
];

const DappSection = () => (
  <div className="section4 px-5 overflow-hidden md:px-0">
    <InViewAnimation className="relative z-10 flex flex-col mx-auto md:h-[728px]  md:w-[700px] lg:w-[900px]  lg:h-[800px] md:pt-[100px] xl:w-[1200px] xl:h-[900px]">
      <div className="flex gap-[50px]">
        <div className="flex-1 flex flex-col bg-[rgba(255,255,255,0.03)] border-b-[1px] border-[rgba(255,255,255,0.15)] backdrop-blur-lg shadow-[0px_0px_30px_14px_rgba(0,0,0,0.9)] py-5 text-[30px] leading-[44px] font-bold  uppercase md:pt-[150px] lg:pl-[30px] xl:pl-10 xl:text-[54px] xl:leading-[84px] xl:pt-[60px] xl:pb-[40px] xl:border-y-[1px] md:h-[300px] md:justify-end">
          <div>D-apps</div>
          <div>in our eco-system</div>
        </div>
        <div className="hidden w-[350px] md:w-[250px] flex-col justify-between md:flex lg:w-[350px] xl:w-[350px]">
          <div className="text-right uppercase">
            <div className="mb-5 text-[#F2F2F2]">Joining the Community</div>
            <div className="text-[#727272]">
              Becoming part of Darwin&apos;s Lab ecosystem
            </div>
          </div>
          <a
            href="/"
            className="try-now-btn group mt-[50px] w-full border-y-[1px] border-brand px-3 py-[18px] uppercase text-brand  hover:font-bold transition-all duration-300 "
          >
            try now
            <SvgIcon
              name="arrow"
              className=" absolute right-3 w-[18px] h-[18px] transition-all duration-300 group-hover:opacity-0"
            />
            <SvgIcon
              name="arrow-hover"
              className="absolute w-[102px] h-[18px] right-3 transition-all duration-300 -translate-x-20 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"
            />
          </a>
        </div>
      </div>
      <div className="mt-6 mb-7 flex flex-col gap-5 md:flex-row md:mt-[30px] md:mb-[30px]  xl:mt-[97px] xl:mb-[57px] lg:gap-0">
        {Dapps.map((item, index) => (
          <div
            key={index}
            className={cn(
              "relative flex flex-col p-[30px] h-[128px] dapp-item backdrop-blur-xl  md:h-[160px] md:min-w-[310px] md:justify-between lg:min-w-[400px] lg:h-[200px] [&:nth-child(4)]:hidden xl:last:block"
            )}
          >
            <Image
              src={`/${item.logo}`}
              width={0}
              height={0}
              alt=""
              sizes="100vw"
              className="w-6 h-6 object-cover xl:w-[60px] xl:h-[60px]"
            />
            <div className="flex items-center text-base uppercase mt-5 justify-between xl:mt-[44px] xl:justify-start xl:text-2xl">
              {item.name}
              {/* <SvgIcon name="arrow_link" className="ml-5 w-9 h-9" /> */}
            </div>
            {/* <div
              className={cn(
                index == 3
                  ? "hidden absolute -top-[1px] left-0 right-0 -bottom-[1px]  bg-gradient-to-r from-transparent via-[rgba(0,0,0,0.95)] via-20%  to-black md:block"
                  : ""
              )}
            ></div> */}
          </div>
        ))}
      </div>
      <div className=" text-[#727272] md:w-[680px] md:text-sm">
        Supporting dapps through real-time verifiable AI inference using cutting
        edge LFG-GM
      </div>
    </InViewAnimation>
  </div>
);

export default DappSection;
