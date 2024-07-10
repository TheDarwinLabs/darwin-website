"use client";

import { useEffect, useRef, useState } from "react";

import SvgIcon from "@/components/SvgIcon";
import useEmblaCarousel from "embla-carousel-react";
import ClassNames from "embla-carousel-class-names";
import useBodyScrollLock from "@/hooks/useBodyScrollLock";
import { cn } from "@/lib/utils";

const list = [
  {
    title: "Super usability1",
    desc: "1Scalable and Adaptable Infrastructure",
    content: `1SPECTER stands for Succinct Zero-Knowledge Proof System for Efficient Inference over Transformer Models in Decentralized Networks. Leverage SPECTER, the world's fastest zero-knowledge proof system for transformer-based large models, offering over 100x speed increase compared to other methods for verifiable AI inference. \n\n SPECTER stands for Succinct Zero-Knowledge Proof System for Efficient Inference over Transformer Models in Decentralized Networks. Leverage SPECTER, the world's fastest zero-knowledge proof system for transformer-based large models, offering over 100x speed increase compared to other methods for verifiable AI inference. \n\n SPECTER stands for Succinct Zero-Knowledge Proof System for Efficient Inference over Transformer Models in Decentralized Networks. Leverage SPECTER, the world's fastest zero-knowledge proof system for transformer-based large models, offering over 100x speed increase compared to other methods for verifiable AI inference.`,
  },
  {
    title: "Super usability2",
    desc: "2Scalable and Adaptable Infrastructure",
    content: `2SPECTER stands for Succinct Zero-Knowledge Proof System for Efficient Inference over Transformer Models in Decentralized Networks. Leverage SPECTER, the world's fastest zero-knowledge proof system for transformer-based large models, offering over 100x speed increase compared to other methods for verifiable AI inference. \n\n SPECTER stands for Succinct Zero-Knowledge Proof System for Efficient Inference over Transformer Models in Decentralized Networks. Leverage SPECTER, the world's fastest zero-knowledge proof system for transformer-based large models, offering over 100x speed increase compared to other methods for verifiable AI inference. \n\n SPECTER stands for Succinct Zero-Knowledge Proof System for Efficient Inference over Transformer Models in Decentralized Networks. Leverage SPECTER, the world's fastest zero-knowledge proof system for transformer-based large models, offering over 100x speed increase compared to other methods for verifiable AI inference.`,
  },
  {
    title: "Super usability3",
    desc: "3Scalable and Adaptable Infrastructure",
    content: `3SPECTER stands for Succinct Zero-Knowledge Proof System for Efficient Inference over Transformer Models in Decentralized Networks. Leverage SPECTER, the world's fastest zero-knowledge proof system for transformer-based large models, offering over 100x speed increase compared to other methods for verifiable AI inference. \n\n SPECTER stands for Succinct Zero-Knowledge Proof System for Efficient Inference over Transformer Models in Decentralized Networks. Leverage SPECTER, the world's fastest zero-knowledge proof system for transformer-based large models, offering over 100x speed increase compared to other methods for verifiable AI inference. \n\n SPECTER stands for Succinct Zero-Knowledge Proof System for Efficient Inference over Transformer Models in Decentralized Networks. Leverage SPECTER, the world's fastest zero-knowledge proof system for transformer-based large models, offering over 100x speed increase compared to other methods for verifiable AI inference.`,
  },
  {
    title: "Super usability3",
    desc: "3Scalable and Adaptable Infrastructure",
    content: `3SPECTER stands for Succinct Zero-Knowledge Proof System for Efficient Inference over Transformer Models in Decentralized Networks. Leverage SPECTER, the world's fastest zero-knowledge proof system for transformer-based large models, offering over 100x speed increase compared to other methods for verifiable AI inference. \n\n SPECTER stands for Succinct Zero-Knowledge Proof System for Efficient Inference over Transformer Models in Decentralized Networks. Leverage SPECTER, the world's fastest zero-knowledge proof system for transformer-based large models, offering over 100x speed increase compared to other methods for verifiable AI inference. \n\n SPECTER stands for Succinct Zero-Knowledge Proof System for Efficient Inference over Transformer Models in Decentralized Networks. Leverage SPECTER, the world's fastest zero-knowledge proof system for transformer-based large models, offering over 100x speed increase compared to other methods for verifiable AI inference.`,
  },
  {
    title: "Super usability3",
    desc: "3Scalable and Adaptable Infrastructure",
    content: `3SPECTER stands for Succinct Zero-Knowledge Proof System for Efficient Inference over Transformer Models in Decentralized Networks. Leverage SPECTER, the world's fastest zero-knowledge proof system for transformer-based large models, offering over 100x speed increase compared to other methods for verifiable AI inference. \n\n SPECTER stands for Succinct Zero-Knowledge Proof System for Efficient Inference over Transformer Models in Decentralized Networks. Leverage SPECTER, the world's fastest zero-knowledge proof system for transformer-based large models, offering over 100x speed increase compared to other methods for verifiable AI inference. \n\n SPECTER stands for Succinct Zero-Knowledge Proof System for Efficient Inference over Transformer Models in Decentralized Networks. Leverage SPECTER, the world's fastest zero-knowledge proof system for transformer-based large models, offering over 100x speed increase compared to other methods for verifiable AI inference.`,
  },
  {
    title: "Super usability3",
    desc: "3Scalable and Adaptable Infrastructure",
    content: `3SPECTER stands for Succinct Zero-Knowledge Proof System for Efficient Inference over Transformer Models in Decentralized Networks. Leverage SPECTER, the world's fastest zero-knowledge proof system for transformer-based large models, offering over 100x speed increase compared to other methods for verifiable AI inference. \n\n SPECTER stands for Succinct Zero-Knowledge Proof System for Efficient Inference over Transformer Models in Decentralized Networks. Leverage SPECTER, the world's fastest zero-knowledge proof system for transformer-based large models, offering over 100x speed increase compared to other methods for verifiable AI inference. \n\n SPECTER stands for Succinct Zero-Knowledge Proof System for Efficient Inference over Transformer Models in Decentralized Networks. Leverage SPECTER, the world's fastest zero-knowledge proof system for transformer-based large models, offering over 100x speed increase compared to other methods for verifiable AI inference.`,
  },
  {
    title: "Super usability3",
    desc: "3Scalable and Adaptable Infrastructure",
    content: `3SPECTER stands for Succinct Zero-Knowledge Proof System for Efficient Inference over Transformer Models in Decentralized Networks. Leverage SPECTER, the world's fastest zero-knowledge proof system for transformer-based large models, offering over 100x speed increase compared to other methods for verifiable AI inference. \n\n SPECTER stands for Succinct Zero-Knowledge Proof System for Efficient Inference over Transformer Models in Decentralized Networks. Leverage SPECTER, the world's fastest zero-knowledge proof system for transformer-based large models, offering over 100x speed increase compared to other methods for verifiable AI inference. \n\n SPECTER stands for Succinct Zero-Knowledge Proof System for Efficient Inference over Transformer Models in Decentralized Networks. Leverage SPECTER, the world's fastest zero-knowledge proof system for transformer-based large models, offering over 100x speed increase compared to other methods for verifiable AI inference.`,
  },
  {
    title: "Super usability3",
    desc: "3Scalable and Adaptable Infrastructure",
    content: `3SPECTER stands for Succinct Zero-Knowledge Proof System for Efficient Inference over Transformer Models in Decentralized Networks. Leverage SPECTER, the world's fastest zero-knowledge proof system for transformer-based large models, offering over 100x speed increase compared to other methods for verifiable AI inference. \n\n SPECTER stands for Succinct Zero-Knowledge Proof System for Efficient Inference over Transformer Models in Decentralized Networks. Leverage SPECTER, the world's fastest zero-knowledge proof system for transformer-based large models, offering over 100x speed increase compared to other methods for verifiable AI inference. \n\n SPECTER stands for Succinct Zero-Knowledge Proof System for Efficient Inference over Transformer Models in Decentralized Networks. Leverage SPECTER, the world's fastest zero-knowledge proof system for transformer-based large models, offering over 100x speed increase compared to other methods for verifiable AI inference.`,
  },
  {
    title: "Super usability3",
    desc: "3Scalable and Adaptable Infrastructure",
    content: `3SPECTER stands for Succinct Zero-Knowledge Proof System for Efficient Inference over Transformer Models in Decentralized Networks. Leverage SPECTER, the world's fastest zero-knowledge proof system for transformer-based large models, offering over 100x speed increase compared to other methods for verifiable AI inference. \n\n SPECTER stands for Succinct Zero-Knowledge Proof System for Efficient Inference over Transformer Models in Decentralized Networks. Leverage SPECTER, the world's fastest zero-knowledge proof system for transformer-based large models, offering over 100x speed increase compared to other methods for verifiable AI inference. \n\n SPECTER stands for Succinct Zero-Knowledge Proof System for Efficient Inference over Transformer Models in Decentralized Networks. Leverage SPECTER, the world's fastest zero-knowledge proof system for transformer-based large models, offering over 100x speed increase compared to other methods for verifiable AI inference.`,
  },
];

const Technologies = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [emblaRef] = useEmblaCarousel({}, [ClassNames()]);
  const [curIndex, setCurIndex] = useState(0);

  const [showBottomGradient, setShowBottomGradient] = useState(true);
  const [showTopGradient, setShowTopGradient] = useState(false);

  useBodyScrollLock(visible);

  useEffect(() => {
    const container = containerRef.current;
    const handleScroll = () => {
      if (container) {
        const { scrollTop, scrollHeight, clientHeight } = container;
        const isBottom = scrollTop + clientHeight >= scrollHeight;
        console.log(isBottom);
        console.log(scrollTop > 0);
        setShowBottomGradient(!isBottom);
        setShowTopGradient(scrollTop == 0);
      }
    };

    container?.addEventListener("scroll", handleScroll);

    return () => {
      container?.removeEventListener("scroll", handleScroll);
    };
  }, [visible]);

  const onOpen = (index: number) => {
    setCurIndex(index);
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const onPrev = () => {
    const prevIndex = curIndex - 1;
    setCurIndex(prevIndex < 0 ? list.length - 1 : prevIndex);
  };
  const onNext = () => {
    const nextIndex = curIndex + 1;
    setCurIndex(nextIndex > list.length - 1 ? 0 : nextIndex);
  };

  return (
    <>
      <div id="core-tect" className="section3">
        <div className="relative z-10 flex flex-col mx-auto pt-[50px] pb-[78px] sm:justify-between sm:flex-row sm:w-[1200px] sm:h-[1000px] sm:px-0 sm:pt-[100px] sm:pb-0">
          <div className="bg-[rgba(255,255,255,0.03)] border-b-[1px] border-[rgba(255,255,255,0.15)] backdrop-blur-lg  shadow-[0px_0px_30px_14px_rgba(0,0,0,0.9)] pb-5 mx-5 sm:border-y-[1px] sm:px-[40px] sm:py-[60px] sm:w-[600px] sm:h-[500px] sm:mx-0">
            <div className="flex gap-[17px] sm:gap-[30px]">
              <div className="flex-1 h-[2px] w-full bg-white sm:opacity-10 sm:h-1"></div>
              <div className="w-[58px] h-[14px] bg-white text-[#000000] text-[9px] text-right px-[10px] font-bold sm:text-base sm:h-6 sm:w-[100px]">
                01
              </div>
            </div>
            <div className="text-[30px] leading-[44px] uppercase font-bold mt-[20px] w-[200px] sm:w-auto sm:text-[54px] sm:leading-[84px] sm:mt-[188px]">
              Core Technologies
            </div>
          </div>
          <div className="hidden relative h-[900px] overflow-auto scrollbar-none pr-[100px] pl-10 sm:flex flex-col gap-[60px]">
            {list.map((item, index) => (
              <div
                key={index}
                className="technology-item justify-between p-5 w-[440px] h-[200px]"
                onClick={() => onOpen(index)}
              >
                <SvgIcon
                  name="technology-sm"
                  className=" w-[48px] h-[48px] mb-[64px]"
                />
                <div className=" uppercase">
                  <div className="text-[#F2F2F2]">{item.title}</div>
                  <div className="text-[#727272] text-xs mt-2">{item.desc}</div>
                </div>
              </div>
            ))}
            <div className="min-h-[200px] sticky bottom-0 bg-gradient-to-t from-[rgba(0,0,0,1)] to-[rgba(0,0,0,0)]"></div>
          </div>
          <div className="embla px-5 mt-[30px] sm:hidden" ref={emblaRef}>
            <div className="embla__container">
              {list.map((item, index) => (
                <div key={index} className="embla__slide">
                  <div
                    onClick={() => onOpen(index)}
                    className="flex flex-col justify-between technology-item-sm w-[260px] h-[300px] p-[30px]"
                  >
                    <SvgIcon name="technology" className="w-[48px] h-[48px]" />
                    <div>
                      <div className="uppercase mt-[88px]">
                        <div className="text-[#F2F2F2]">{item.title}</div>
                        <div className="text-[#727272] text-xs mt-2 whitespace-normal">
                          {item.desc}
                        </div>
                      </div>
                      <div className="hidden mt-[10px] text-right plus-icon">
                        <SvgIcon
                          name="plus-light"
                          className=" inline-block w-[30px] h-[30px] "
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <>
        <div
          className={cn(
            "fixed top-0 left-0 right-0 bottom-0   bg-black transition-all ease-in",
            visible ? "z-[9000]" : "-z-[1] opacity-0"
          )}
        ></div>
        <div
          className={cn(
            "fixed top-0 left-0 right-0 bottom-0 transition-all ease-in ",
            visible ? "z-[9999]" : "-z-[1] opacity-0 invisible"
          )}
        >
          <div className="flex flex-col-reverse gap-5   mx-auto p-5 sm:w-[1200px] sm:pt-[100px] sm:pb-[60px] sm:flex-row sm:h-full sm:gap-0">
            <div className="hidden sm:block w-[300px] h-[250px] mr-[60px]  bg-[rgba(255,255,255,0.03)] border-y-[1px] border-[rgba(255,255,255,0.15)] backdrop-blur-lg  shadow-[0px_0px_30px_14px_rgba(0,0,0,0.9)] p-[30px]">
              <div className="flex gap-[15px]">
                <div className="flex-1 h-[2px] w-full bg-white opacity-10"></div>
                <div className="w-[50px] h-6 bg-white text-[#000000] text-right px-[5px] font-bold ">
                  01
                </div>
              </div>
              <div className="text-[32px] leading-[42px] uppercase font-bold mt-[82px] ">
                Core Technologies
              </div>
            </div>
            <div className="flex flex-col flex-1 technology-item-sm p-[30px] sm:p-[60px] sm:technology-modal-content">
              <div className="flex items-center text-[rgba(255,255,255,0.4)] uppercase mb-2">
                <SvgIcon
                  name="technology"
                  className="w-[18px] h-[18px] mr-1 sm:hidden"
                />
                {list[curIndex].title}
              </div>
              <div className="text-base mb-[162px] font-bold uppercase  md:text-[36px] md:leading-[53px] md:mb-[110px]">
                {list[curIndex].desc}
              </div>
              <div
                ref={containerRef}
                className={cn(
                  "relative  text-[rgba(255,255,255,0.8)] h-[calc(100vh-410px)] overflow-auto scrollbar-none md:flex-1"
                )}
              >
                {/* <div className="top-gradient"></div> */}
                <div className="whitespace-pre-wrap ">
                  {list[curIndex].content}
                </div>
                {/* <div className="bottom-gradient"></div> */}
                <div className=" mt-10 text-brand font-bold text-right uppercase">
                  <span>&gt; read more</span>
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-between  gap-6 sm:flex-col sm:mx-[40px] sm:justify-start">
              <SvgIcon
                name="close"
                className="w-[42px] h-[42px] cursor-pointer border-[1px] border-[rgba(255,255,255,0.5)] hover:border-white sm:w-[60px] sm:h-[60px]"
                onClick={onClose}
              />
              <div className="flex gap-6 sm:flex-col">
                <SvgIcon
                  name="arrow-up"
                  className="w-[42px] h-[42px] cursor-pointer border-[1px] border-[rgba(255,255,255,0.5)] -rotate-90 hover:border-white sm:w-[60px] sm:h-[60px] sm:rotate-0"
                  onClick={onPrev}
                />
                <SvgIcon
                  name="arrow-up"
                  className="w-[42px] h-[42px] cursor-pointer rotate-90  border-[1px] border-[rgba(255,255,255,0.5)] hover:border-white sm:w-[60px] sm:h-[60px] sm:rotate-180"
                  onClick={onNext}
                />
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default Technologies;
