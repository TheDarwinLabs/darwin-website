"use client";

import { useState } from "react";
import Image from "next/image";
import SvgIcon from "@/components/SvgIcon";
import { cn } from "@/lib/utils";

const list = [
  {
    title: "For AI innovators",
    tags: "<Explore> <Build> <Earn>",
    desc: "oin our AI ecosystem to explore cutting-edge AI models, contribute innovations, and earn rewards for your creativity and efforts.For dApp Developers",
  },
  {
    title: "For Computational Power Providers",
    tags: "<Explore> <Build> <Earn>",
    desc: "Provide computational power to host and run AI models, validate AI operations, and earn substantial rewards in our decentralized network.",
  },
  {
    title: "For dApps Developers",
    tags: "<Explore> <Build> <Earn>",
    desc: "Deploy your decentralized applications on our chain, leverage AI resources for free, and drive innovation with seamless integration.",
  },
];

const Benefits = () => {
  const [curBenefit, setCurBenefit] = useState(0);

  return (
    <div>
      <div className=" mx-auto pt-[60px]  px-5 pb-5 sm:w-[1200px] sm:h-[900px] sm:pt-[171px] sm:px-0 sm:pb-0">
        <div className="uppercase text-[36px] leading-[53px] font-bold  sm:text-[64px] sm:leading-[84px] sm:w-[900px]">
          Benefits for Different Users
        </div>
        <div className="flex sm:gap-10 mt-[88px] sm:mt-[60px]">
          <div className="flex flex-col gap-10 border-[rgba(255,255,255,0.15)] flex-1 sm:py-5 sm:border-l-[1px]">
            {list.map((item, index) => (
              <div
                key={index}
                onClick={() => {
                  setCurBenefit(index);
                }}
                onMouseEnter={() => {
                  setCurBenefit(index);
                }}
                className={cn(
                  "relative uppercase text-xs sm:h-[100px] sm:pl-10",
                  curBenefit == index
                    ? "text-[#989898] sm:text-primary"
                    : "text-[#989898]"
                )}
              >
                {index == 0 && (
                  <div className=" hidden absolute left-0 mt-[6px] bg-primary h-[88px] w-1 sm:block">
                    <div className="absolute top-0 w-1 bg-brand h-[80%]"></div>
                  </div>
                )}
                <div
                  className={cn(
                    "text-base font-bold mb-2 sm:text-[24px] sm:leading-9",
                    curBenefit == index
                      ? "text-[var(--white)] sm:text-brand"
                      : "text-[var(--white)] sm:text-[#989898]"
                  )}
                >
                  {item.title}
                </div>
                <div className="mb-2">{item.tags}</div>
                <div className="mb-5 sm:mb-0">{item.desc}</div>
                <Image
                  src={`/card-${curBenefit}.svg`}
                  alt=""
                  className="!relative !h-auto backdrop-blur-lg sm:hidden"
                  fill
                />
              </div>
            ))}
          </div>
          <div
            className="hidden w-[500px] h-[400px] bg-cover benefit-card-item transition-all duration-300 backdrop-blur-lg  sm:block"
            style={{ backgroundImage: `url(/card-${curBenefit}.svg)` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
