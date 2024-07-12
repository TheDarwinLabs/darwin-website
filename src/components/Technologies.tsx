"use client";

import { useEffect, useRef, useState } from "react";

import SvgIcon from "@/components/SvgIcon";
import useEmblaCarousel from "embla-carousel-react";
import ClassNames from "embla-carousel-class-names";
import useBodyScrollLock from "@/hooks/useBodyScrollLock";
import InViewAnimation from "@/components/InViewAnimation";
import { cn } from "@/lib/utils";

const list = [
  {
    title: "Scalable & adaptable",
    desc: "Supporting the Growing Needs of Diverse Sectors",
    content: [
      "Darwin chain is built to scale and adapt, seamlessly supporting the evolving needs for AI. By enabling the widespread adoption of AI technologies across diverse applications, we are paving the way for innovative solutions that drive growth and efficiency.",
      "With real-time, easy, and free AI inference, we provide a robust foundation for future advancements, making AI accessible and beneficial to everyone.",
    ],
  },
  {
    title: "LFG-GM algorithm",
    desc: "Real-time verifiable inference",
    content: [
      "LFG-GM stands for “Layered Fingerprinted Grid - Game-Theoretic Mixer”, a groundbreaking approach to ensure inference verifiability in AI operations. By mixing user queries with pre-computed challenge queries using instructional fingerprints, the algorithm makes it impossible for inference nodes to cheat.",
      "The LFG-GM algorithm provides a reliable real-time verification for ai inference. It’s designed to handle high-throughput demands while maintaining low costs, making it an ideal solution for various AI applications.",
    ],
  },
  {
    title: "Specter framework",
    desc: "Fastest Zero-Knowledge Proof for ai",
    content: [
      `SPECTER stands for “Succinct Zero-Knowledge Proof System for Efficient Inference over Transformer Models”.
specter represents a major leap forward in AI verification technology. Designed specifically for transformer-based models, SPECTER achieves unprecedented speeds and efficiency, providing over 100x faster verification compared to other zk methods.`,
      "By integrating SPECTER, darwinchain offers the fastest, most reliable zero-knowledge proof system for transformer models, pushing the boundaries of what’s possible in verifiable inference. This advanced framework underpins our commitment to providing secure, efficient, and scalable AI solutions, driving innovation and trust in the AI ecosystem.",
    ],
  },
  {
    title: "Decentralized inference",
    desc: "Harnessing Distributed Inference Power",
    content: [
      "Darwinchain leverages a global network of computational power to provide scalable, efficient, and cost-effective AI computations. By using a distributed network, we can harness the power of multiple AI nodes spread across the world, ensuring that computational tasks are handled efficiently and effectively.",
      "Tap into a global network of decentralized AI resources, enabling scalable, efficient, and cost-effective AI computations through distributed inference.",
    ],
  },
  {
    title: "Gasless MODEL for AI",
    desc: "Free AI Usage",
    content: [
      "Darwinchain introduces a revolutionary hybrid gas model to make AI operations cost-effective and accessible. Our model combines traditional gas fees for regular transactions with a unique stake-to-use system for AI operations.",
      "Stake-to-Use Model: Users earn points by staking our native tokens. These points can then be used for AI operations without additional costs, making AI usage flexible and affordable",
    ],
  },
  {
    title: "PRIVACY-PRESERVING PROTOCOLS",
    desc: "SECURE AND CONFIDENTIAL",
    content: [
      "Maintaining data privacy and security is at the core of darwinchain. Our robust privacy-preserving protocols leverage advanced technologies like distributed inference and zero-knowledge proofs to ensure that AI operations are both secure and confidential.",
      "By using these cutting-edge techniques, we ensure that sensitive data remains protected throughout the computational process, preventing unauthorized access and preserving the integrity of the information. Our approach provides a secure environment for AI applications, fostering trust and confidence among users.",
    ],
  },
  {
    title: "community driven AI alignment",
    desc: "RLcf - shaping the future of ai through community",
    content: [
      "Darwinchain empowers its community to actively participate in the governance and alignment of AI models through RLCF (Reinforcement Learning from Community Feedback). This innovative approach ensures that our AI models evolve in a way that aligns with user needs and ethical standards.",
    ],
  },
  {
    title: "consensus mechanism for ai",
    desc: "a new paradigm for AI inference verification",
    content: [
      "Darwinchain’s consensus mechanism is specially designed to optimize AI inference verification. Using model sharding, our consensus mechanism ensures that inference computations are verified efficiently and accurately.",
      "Our AI-optimized consensus mechanism is tailored to handle the unique demands of AI workloads, providing a robust and scalable solution for verifying AI inferences. This ensures that our platform can support complex AI applications with high accuracy and reliability.",
    ],
  },
  {
    title: "Fair rewards for everyone",
    desc: "Incentivizing Contributions Across the Network",
    content: [
      "Our robust incentive mechanism is designed to reward users for their contributions to the network. Participants can earn substantial rewards through various activities such as contributing models, hosting model layers, and verifying ai inferences.",
    ],
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
        <InViewAnimation className="relative  z-10 flex flex-col mx-auto pt-[50px] pb-[78px] md:justify-between md:items-start md:flex-row md:w-[700px] lg:w-[900px] lg:h-[900px] xl:w-[1200px] xl:h-[1000px] md:px-0 xl:pt-[100px] xl:pb-0">
          <div className="bg-[rgba(255,255,255,0.03)] border-b-[1px] border-[rgba(255,255,255,0.15)] backdrop-blur-lg  shadow-[0px_0px_30px_14px_rgba(0,0,0,0.9)] pb-5 mx-5 md:w-[300px] lg:w-[400px] md:border-y-[1px] md:py-[30px] lg:px-[30px] xl:px-[40px] xl:py-[60px] xl:w-[600px] xl:h-[500px] md:mx-0">
            <div className="flex gap-[17px] xl:gap-[30px]">
              <div className="flex-1 h-[2px] w-full bg-white md:opacity-10 xl:h-1"></div>
              <div className="w-[58px] h-[14px] bg-white text-[#000000] text-[9px] text-right px-[10px] font-bold md:w-[50px] md:h-[24px] md:text-base xl:h-6 xl:w-[100px]">
                01
              </div>
            </div>
            <div className="text-[30px] leading-[44px] uppercase font-bold mt-[20px] w-[200px] lg:text-[42px] lg:leading-[60px] xl:w-auto xl:text-[54px] xl:leading-[84px] md:mt-[188px]">
              Core Technologies
            </div>
          </div>
          <div className="hidden relative h-[800px] overflow-auto scrollbar-none pr-[100px] pl-10 md:pl-5 md:pr-[00] md:gap-5 lg:md:gap-[30px] md:flex flex-col xl:gap-[60px] xl:h-[900px]">
            {list.map((item, index) => (
              <div
                key={index}
                className="technology-item justify-between p-5 w-[380px] h-[200px] lg:w-[450px] xl:w-[440px]"
                onClick={() => onOpen(index)}
              >
                <SvgIcon
                  name={`core_${index + 1}`}
                  className=" w-[48px] h-[48px] mb-[64px]"
                />
                <div className=" ">
                  <div className="uppercase text-[#F2F2F2]">{item.title}</div>
                  <div className="text-[#727272] text-xs mt-2">{item.desc}</div>
                </div>
              </div>
            ))}
            <div className="min-h-[200px] sticky bottom-0 bg-gradient-to-t from-[rgba(0,0,0,1)] to-[rgba(0,0,0,0)] pointer-events-none"></div>
          </div>
          <div className="embla px-5 mt-[30px] md:hidden" ref={emblaRef}>
            <div className="embla__container">
              {list.map((item, index) => (
                <div key={index} className="embla__slide">
                  <div
                    onClick={() => onOpen(index)}
                    className="flex flex-col justify-between technology-item-sm w-[260px] h-[300px] p-[30px]"
                  >
                    <SvgIcon
                      name={`core_${index + 1}`}
                      className="w-[48px] h-[48px]"
                    />
                    <div>
                      <div className="uppercase mt-[88px]">
                        <div className="text-[#F2F2F2]">{item.title}</div>
                        <div className="text-[#727272] text-xs mt-2 whitespace-normal">
                          {item.desc}
                        </div>
                      </div>
                      {/* <div className="hidden mt-[10px] text-right plus-icon">
                        <SvgIcon
                          name="plus-light"
                          className=" inline-block w-[30px] h-[30px] "
                        />
                      </div> */}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </InViewAnimation>
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
          <div className="flex flex-col-reverse gap-5   mx-auto p-5 xl:w-[1200px] xl:pt-[100px] xl:pb-[60px] xl:flex-row xl:h-full xl:gap-0">
            <div className="hidden xl:block w-[300px] h-[250px] mr-[60px]  bg-[rgba(255,255,255,0.03)] border-y-[1px] border-[rgba(255,255,255,0.15)] backdrop-blur-lg  shadow-[0px_0px_30px_14px_rgba(0,0,0,0.9)] p-[30px]">
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
            <div className="flex flex-col flex-1 technology-item-sm p-[30px] xl:p-[60px] xl:technology-modal-content">
              <div className="flex items-center text-[rgba(255,255,255,0.4)] uppercase mb-2">
                <SvgIcon
                  name="technology"
                  className="w-[18px] h-[18px] mr-1 xl:hidden"
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
                  {list[curIndex].content.map((text, idx) => (
                    <p key={idx}>{text}</p>
                  ))}
                </div>
                {/* <div className="bottom-gradient"></div> */}
                <div className=" mt-10 text-brand font-bold text-right uppercase">
                  <span>&gt; read more</span>
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-between  gap-6 xl:flex-col xl:mx-[40px] xl:justify-start">
              <SvgIcon
                name="close"
                className="w-[42px] h-[42px] cursor-pointer border-[1px] border-[rgba(255,255,255,0.5)] hover:border-white xl:w-[60px] xl:h-[60px]"
                onClick={onClose}
              />
              <div className="flex gap-6 xl:flex-col">
                <SvgIcon
                  name="arrow-up"
                  className="w-[42px] h-[42px] cursor-pointer border-[1px] border-[rgba(255,255,255,0.5)] -rotate-90 hover:border-white xl:w-[60px] xl:h-[60px] xl:rotate-0"
                  onClick={onPrev}
                />
                <SvgIcon
                  name="arrow-up"
                  className="w-[42px] h-[42px] cursor-pointer rotate-90  border-[1px] border-[rgba(255,255,255,0.5)] hover:border-white xl:w-[60px] xl:h-[60px] xl:rotate-180"
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
