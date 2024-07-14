"use client";

import { useRef, useState } from "react";

import SvgIcon from "@/components/SvgIcon";
import useBodyScrollLock from "@/hooks/useBodyScrollLock";
import InViewAnimation from "@/components/InViewAnimation";

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
  const [curIndex, setCurIndex] = useState(0);

  useBodyScrollLock(visible);

  const clearStyleAttr = () => document.querySelectorAll('.tech-content-item').forEach((item) => ((item as HTMLDivElement).removeAttribute('style')));

  const handleFirstClick = (contents: NodeListOf<Element>, targetElement: HTMLDivElement) => {
    contents.forEach((item) => (item as HTMLDivElement).style.display = 'none');
    targetElement.style.display = 'block';
  };

  const setTransition = (firstClick: boolean, index: number) => {
    const container = containerRef.current;
    const contents = document.querySelectorAll('.tech-content-item');

    if (container && contents.length) {
      const targetElement = contents[index] as HTMLDivElement;

      if (firstClick) {
        handleFirstClick(contents, targetElement);
      } else {
        window.matchMedia('(max-width: 768px)').matches ? (container.scrollLeft = (window.innerWidth - 40) * index) : (container.scrollTop = targetElement.offsetTop - container.offsetTop);
      }
    }
  }

  const onOpen = (index: number) => {
    if (visible) return;

    setVisible(true); 
    setCurIndex(index);
    setTransition(true, index);
  };

  const onClose = () => (setVisible(false), clearStyleAttr());

  const onPrev = () => {
    clearStyleAttr();
    const prevIndex = curIndex - 1;
    const index = prevIndex < 0 ? list.length - 1 : prevIndex;

    setCurIndex(index);
    setTransition(false, index);
  };

  const onNext = () => {
    clearStyleAttr();
    const nextIndex = curIndex + 1;
    const index = nextIndex > list.length - 1 ? 0 : nextIndex;

    setCurIndex(index);
    setTransition(false, index);
  };

  return (
    <div id="core-tect" className="section3">
      <InViewAnimation className={`${!visible && 'relative'} z-10 flex flex-col mx-auto pt-[50px] pb-[78px] md:justify-between md:items-start md:flex-row md:w-[700px] lg:w-[900px] lg:h-[900px] xl:w-[1200px] xl:h-[1000px] xl:pt-[100px] xl:pb-0 md:px-0 md:py-0`}>
        <div className={`tech-bg ${ visible && 'tech-visible'}`}></div>
        <div className={`tech-content ${ visible && 'tech-visible'}`}>
          <div className="tech-content__left">
            <div className="tech-content__number"></div>
            <div className="tech-content__title">Core <br /> Technologies</div>
          </div>
          <div className="tech-content__right" ref={containerRef}>
            {list.map((item, index) => (
              <div className="tech-content-item" key={index} onClick={() => onOpen(index)}>
                <div className="tech-content-wrapper">
                  <SvgIcon className="tech-content-icon" name={`core_${index + 1}`} />
                  <p className="tech-content-desc">{item.title}</p>
                  <h1 className="tech-content-title">{item.desc}</h1>
                  {item.content.map((contentItem, contentIndex) => <p className="tech-content-list" key={contentIndex}>{contentItem}</p>)}
                </div>
              </div>
            ))}
          </div>
          <div className="tech-tools flex flex-row justify-between gap-6 lg:flex-col lg:justify-start xl:flex-col xl:mx-[40px] xl:justify-start">
            <SvgIcon
              name="close"
              className="w-[42px] h-[42px] cursor-pointer border-[1px] border-[rgba(255,255,255,0.5)] hover:border-white xl:w-[60px] xl:h-[60px]"
              onClick={onClose}
            />
            <div className="flex gap-6 xl:flex-col lg:flex-col">
              <SvgIcon
                name="arrow-up"
                className="w-[42px] h-[42px] cursor-pointer border-[1px] border-[rgba(255,255,255,0.5)] -rotate-90 hover:border-white xl:w-[60px] xl:h-[60px] xl:rotate-0 md:rotate-0"
                onClick={onPrev}
              />
              <SvgIcon
                name="arrow-up"
                className="w-[42px] h-[42px] cursor-pointer rotate-90  border-[1px] border-[rgba(255,255,255,0.5)] hover:border-white xl:w-[60px] xl:h-[60px] xl:rotate-180 md:rotate-180"
                onClick={onNext}
              />
            </div>
          </div>
        </div>
      </InViewAnimation>
    </div>
  );
};

export default Technologies;
