"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import SvgIcon from "@/components/SvgIcon";
import useSmoothProgress from "@/hooks/useSmoothProgress";
import { useInView } from "react-intersection-observer";
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
  const [curIndex, setCurIndex] = useState(0);

  const { start, progress, reset, isStart } = useSmoothProgress({
    duration: 10,
    autoStart: false,
    loop: true,
    onEnd: useCallback(() => {
      setCurIndex((prevState) =>
        prevState + 1 > list.length - 1 ? 0 : prevState + 1
      );
    }, []),
  });

  const { ref, inView } = useInView({
    threshold: 0.1, // 当 div 10% 可见时触发
  });

  const onChange = (index: number) => {
    setCurIndex(index);
    reset();
  };

  useEffect(() => {
    if (inView && !isStart) {
      start();
    }
  }, [inView, isStart, start]);

  return (
    <div className=" section2">
      <div className="relative z-10 mx-auto pt-[60px]  px-5 pb-5 sm:w-[1200px] sm:h-[900px] sm:pt-[171px] sm:px-0 sm:pb-0">
        <div className="uppercase text-[36px] leading-[53px] font-bold  sm:text-[54px] sm:leading-[84px] sm:w-[900px]">
          Benefits for Different Users
        </div>
        <div ref={ref} className="flex sm:gap-10 mt-[88px] sm:mt-[60px]">
          <div className="flex flex-col gap-10 border-[rgba(255,255,255,0.15)] flex-1 sm:py-5 sm:border-l-[1px]">
            {list.map((item, index) => (
              <div
                key={index}
                onClick={() => onChange(index)}
                className={cn(
                  "relative uppercase text-xs cursor-pointer sm:h-[100px] sm:pl-10",
                  curIndex == index
                    ? "text-[#989898] sm:text-primary"
                    : "text-[#989898]"
                )}
              >
                {index == curIndex && (
                  <div className=" hidden absolute left-0 mt-[6px] bg-primary h-[88px] w-1 sm:block">
                    <div
                      className="absolute top-0 w-1 bg-brand"
                      style={{ height: `${progress}%` }}
                    ></div>
                  </div>
                )}
                <div
                  className={cn(
                    "text-base font-bold mb-2 sm:text-[24px] sm:leading-9 transition-all",
                    curIndex == index
                      ? "text-[var(--white)] sm:text-brand"
                      : "text-[var(--white)] sm:text-[#989898]"
                  )}
                >
                  {item.title}
                </div>
                <div className="mb-2 transition-all">{item.tags}</div>
                <div className="mb-5 transition-all sm:mb-0">{item.desc}</div>
                <Image
                  src={`/card-${curIndex}.svg`}
                  alt=""
                  className="!relative !h-auto backdrop-blur-lg sm:hidden"
                  fill
                />
              </div>
            ))}
          </div>
          <div
            className="hidden w-[500px] h-[400px] bg-cover benefit-card-item transition-all duration-300 backdrop-blur-lg  sm:block"
            style={{ backgroundImage: `url(/card-${curIndex}.svg)` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
