"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import SvgIcon from "@/components/SvgIcon";
import { cn } from "@/lib/utils";
import InViewAnimation from "@/components/InViewAnimation";

const step = 600;

const RoadmapSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const [xOffset, setXOffset] = useState(0);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  useEffect(() => {
    setIsAtStart(xOffset <= 0);
    setIsAtEnd(xOffset >= 600);
  }, [xOffset]);

  useEffect(() => {
    const scrollLeft = () => {
      if (xOffset < 600) {
        // TODO 这里要计算最大可以滚动的距离
        setXOffset(xOffset + step);
      }
    };

    const scrollRight = () => {
      if (xOffset >= 0) {
        setXOffset(xOffset - step);
      }
    };

    const handleMouseMove = (event: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const mouseX = event.clientX - rect.left;
        const mouseY = event.clientY - rect.top;

        if (mouseY >= 300) {
          if (mouseX < rect.width / 2) {
            if (isAtStart) {
              containerRef.current.style.cursor =
                "url('/cursor/arrow-left-on.svg'), auto";
            } else {
              containerRef.current.style.cursor =
                "url('/cursor/arrow-left-off.svg'), auto";
            }
          } else {
            if (isAtEnd) {
              containerRef.current.style.cursor =
                "url('/cursor/arrow-right-on.svg'), auto";
            } else {
              containerRef.current.style.cursor =
                "url('/cursor/arrow-right-off.svg'), auto";
            }
          }
        } else {
          containerRef.current.style.cursor = "default"; // 其他区域恢复默认图标
        }
      }
    };

    const handleMouseDown = (event: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const mouseX = event.clientX - rect.left;
        const mouseY = event.clientY - rect.top;
        if (mouseY >= 300) {
          if (mouseX < rect.width / 2) {
            scrollLeft();
          } else {
            scrollRight();
          }
        }
      }
    };

    const currentDiv = containerRef.current;
    if (currentDiv) {
      currentDiv.addEventListener("mousemove", handleMouseMove);
      currentDiv.addEventListener("mousedown", handleMouseDown);
    }

    return () => {
      if (currentDiv) {
        currentDiv.removeEventListener("mousemove", handleMouseMove);
        currentDiv.removeEventListener("mousedown", handleMouseDown);
      }
    };
  }, [isAtStart, isAtEnd, xOffset]);

  return (
    <div ref={containerRef} className="section5 px-5 md:px-0 overflow-hidden">
      <InViewAnimation className="relative z-10 flex flex-col mx-auto pt-[100px] md:h-[900px]  md:w-[700px] lg:w-[900px] xl:h-[1000px] xl:w-[1200px]">
        <div className="z-10 bg-[rgba(255,255,255,0.03)] border-b-[1px] border-[rgba(255,255,255,0.15)] backdrop-blur-lg shadow-[0px_0px_30px_14px_rgba(0,0,0,0.9)] pt-[66px] pb-5 text-[30px] leading-[44px] font-bold  uppercase md:text-[36px] md:leading-[60px] md:pt-[86px] md:pb-[30px] lg:w-[500px] lg:pl-[30px] xl:w-[800px] xl:border-y-[1px] xl:text-[54px] xl:leading-[84px]">
          Roadmap
        </div>
        <div className="relative tran roadmap-box hidden backdrop-blur-lg h-[700px]  -mt-[103px] md:flex">
          <div
            ref={imgRef}
            className=" relative transition-all duration-300 ease-in-out"
            style={{ transform: `translateX(-${xOffset}px)` }}
          >
            <Image
              src="/roadmap.svg"
              width={0}
              height={0}
              alt=""
              sizes="100vw"
              className="min-w-[1783px] h-[700px]"
            />
            <RoadmapItem
              date="24 Q3"
              text={["AI Stack PoC", "Seed round fundraising"]}
              className="bottom-[156px] left-[1px]"
              active={true}
              lineWidth={248}
            />
            <RoadmapItem
              date="24 Q4"
              text={[
                "Inference infra development",
                "Community features launch",
              ]}
              className="bottom-[355px] left-[439px]"
              active={xOffset >= step}
              lineWidth={310}
            />
            <RoadmapItem
              date="25 Q1"
              text={["Testnet launch", "Verifiable inference"]}
              className="bottom-[56px] left-[832px]"
              active={xOffset > 300}
              lineWidth={244}
            />
            <RoadmapItem
              date="25 Q2"
              text={[
                "Ecosystem",
                "Finetune infra development",
                "Model evaluation modules",
              ]}
              className="bottom-[281px] left-[1141px]"
              active={xOffset > 450}
              lineWidth={308}
            />
            <RoadmapItem
              date="25 Q3"
              text={["Mainnet Launch"]}
              className="bottom-[379px] left-[1586px]"
              active={xOffset >= 600}
              lineWidth={176}
            />
          </div>
        </div>
        <div className="backdrop-blur-lg mt-5 px-5 md:hidden">
          <Image
            src="/roadmap-sm.png"
            width={0}
            height={0}
            alt=""
            sizes="100vw"
            className="w-full object-cover"
          />
        </div>
      </InViewAnimation>
    </div>
  );
};

interface RoadmapItemProps {
  date: string;
  text: string[];
  className?: string;
  active?: boolean;
  lineWidth?: number;
}

const RoadmapItem = ({
  date,
  text,
  className,
  active,
  lineWidth = 250,
}: RoadmapItemProps) => (
  <div className={cn("absolute", className)}>
    <div className="bg-[rgba(0,0,0,1)] pl-1 -ml-1 flex items-center mb-5">
      <div
        className={cn(
          "flex  items-center justify-center w-[21px] h-[21px] border-[2px]  rounded-full",
          active ? "border-brand" : "border-[rgba(255,255,255,0.15)]"
        )}
      >
        <span
          className={cn(
            "inline-block w-2 h-2 rounded-full",
            active ? "bg-brand" : "bg-[#727272]"
          )}
        ></span>
      </div>
      <div
        className={cn(
          "h-[1px] ",
          active ? "bg-brand" : "bg-[rgba(255,255,255,0.15)]"
        )}
        style={{ width: `${lineWidth}px` }}
      ></div>
    </div>
    <div className={cn("pl-4", active ? "text-brand" : "text-white")}>
      <div
        className={cn(
          "bg-brand w-[159px] h-9 text-[#000000] text-[24px] font-bold pl-[10px] mb-[30px]",
          active ? "bg-brand" : "bg-white"
        )}
      >
        {date}
      </div>
      {text.map((item, index) => (
        <div key={index} className=" uppercase">
          &gt; {item}
        </div>
      ))}
    </div>
  </div>
);

export default RoadmapSection;
