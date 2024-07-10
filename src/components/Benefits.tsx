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
      <div className="relative z-10 mx-auto pt-[60px]  px-5 pb-5 md:h-[750px] md:px-[30px] xl:w-[1200px] xl:h-[900px] xl:pt-[171px] xl:px-0 xl:pb-0">
        <div className="uppercase text-[36px] leading-[53px] font-bold md:w-[400px] md:text-[42px] md:leading-[60px] xl:text-[54px] xl:leading-[84px] xl:w-[900px]">
          Benefits for Different Users
        </div>
        <div ref={ref} className="flex md:gap-10 mt-[88px] md:mt-[60px]">
          <div className="flex flex-col gap-10 border-[rgba(255,255,255,0.15)] flex-1 md:gap-5 xl:py-5 xl:border-l-[1px]">
            {list.map((item, index) => (
              <div
                key={index}
                onClick={() => onChange(index)}
                className={cn(
                  "relative uppercase text-xs cursor-pointer xl:h-[100px] md:pl-10",
                  curIndex == index
                    ? "text-[#989898] xl:text-primary"
                    : "text-[#989898]"
                )}
              >
                {index == curIndex && (
                  <div className=" hidden absolute left-0 mt-[6px] bg-primary h-[88px] w-1 md:block">
                    <div
                      className="absolute top-0 w-1 bg-brand"
                      style={{ height: `${progress}%` }}
                    ></div>
                  </div>
                )}
                <div
                  className={cn(
                    "text-base font-bold mb-2 md:text-[20px] md:leading-[30px] xl:text-[24px] xl:leading-9 transition-all",
                    curIndex == index
                      ? "text-[var(--white)] xl:text-brand"
                      : "text-[var(--white)] xl:text-[#989898]"
                  )}
                >
                  {item.title}
                </div>
                <div className="mb-2 transition-all ">{item.tags}</div>
                <div className="mb-5 transition-all xl:mb-0">{item.desc}</div>
                <Image
                  src={`/card-${curIndex}.svg`}
                  alt=""
                  className="!relative !h-auto backdrop-blur-lg md:hidden"
                  fill
                />
              </div>
            ))}
          </div>
          <div
            className="hidden self-end w-[260px] h-[208px] bg-cover benefit-card-item transition-all duration-300 backdrop-blur-lg  md:block xl:w-[500px] xl:h-[400px]"
            style={{ backgroundImage: `url(/card-${curIndex}.svg)` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
