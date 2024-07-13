"use client";

import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SvgIcon from "@/components/SvgIcon";
import InViewAnimation from "@/components/InViewAnimation";
import { cn } from "@/lib/utils";

const FaqList = [
  {
    title: `What is Darwinchain?`,
    content: `Darwinchain is an innovative blockchain platform that integrates AI and decentralized technologies to create a secure, transparent, and scalable infrastructure. It offers free, easy, and fast AI inference on chain.`,
  },
  {
    title: `How does Darwinchain work?`,
    content: `Darwinchain operates through a decentralized AI ecosystem founded on an L1 blockchain. It uses proprietary algorithms to ensure efficient, secure, and scalable AI operations, offering users real-time verifiable AI inference and gasless AI transactions through a unique stake-to-use system.`,
  },
  {
    title: `Who is building Darwinchain?`,
    content: `Darwinchain is built by a team of AI and blockchain experts from prestigious institutions such as Princeton, Harvard, MIT, CMU, Yale, and Stanford. This team includes engineers and founders who have previously built blockchains and unicorn startups, bringing extensive experience and expertise to the future of decentralized AI.`,
  },
  {
    title: "Who can contribute to Darwinchain?",
    content:
      "Darwinchain is designed to be an open-source platform, welcoming contributions from developers, researchers, and enthusiasts from around the world. Whether you are an AI expert, blockchain developer, compute provider, or simply passionate about decentralized AI, there is a place for you in the Darwinchain community.",
  },
  { title: "What are the core technologies behind Darwinchain?", content: "" },
  {
    title: "What is the stake-to-use model?",
    content:
      "The stake-to-use model allows users to stake our native token, $DNA, to receive a daily AI usage quota. This model drastically reduces costs and makes AI services more accessible and affordable, especially for small AI companies and startups.",
  },
];

const FaqSection = () => (
  <div
    id="faqs"
    className="section7 md:pt-[75px] md:pb-[64px]lg:pb-10  lg:py-[100px] "
  >
    <InViewAnimation className="relative z-10 flex flex-col mx-auto px-5 md:gap-[20px]  md:w-[700px] xl:gap-[100px] lg:w-[800px]  xl:w-[1200px] xl:pt-[100px] md:flex-row md:px-0">
      <div className=" bg-[rgba(255,255,255,0.03)] backdrop-blur-lg border-b-[1px] border-[rgba(255,255,255,0.15)] pt-[66px] pb-5 text-[30px] leading-[44px] tracking-tight font-bold uppercase md:w-[300px] md:h-[200px] md:text-[42px] md:leading-[60px] xl:w-[400px] xl:h-[400px] xl:pt-[60px] xl:text-[54px] xl:pl-[40px] xl:leading-[84px] xl:pb-0 xl:border-y-[1px]">
        faqs
      </div>
      <div className="flex-1">
        <Faqs />
      </div>
    </InViewAnimation>
  </div>
);

function Faqs() {
  const [openItem, setOpenItem] = useState<string>();

  const handleValueChange = (value: string) => {
    setOpenItem(value);
  };

  return (
    <Accordion type="single" collapsible onValueChange={handleValueChange}>
      {FaqList.map((item, index) => {
        const key = `item-${index}`;
        const isOpen = openItem == key;
        return (
          <AccordionItem
            key={index}
            value={key}
            className={cn(isOpen ? "bg-[rgba(255,255,255,0.03)]" : "")}
          >
            <AccordionTrigger className="uppercase py-[14px]  md:py-[30px] xl:py-[38px] text-xs md:text-[14px] md:leading-5 xl:text-base">
              {item.title}
              <SvgIcon
                name={isOpen ? "minus" : "plus"}
                className="w-[18px] h-[18px] mr-5 md:w-[38px] md:h-[38px]"
              />
            </AccordionTrigger>
            <AccordionContent className="text-xs text-[#989898] pb-[30px] text-[10px] leading-[15px] md:text-xs xl:text-base md:w-[400px] xl:w-[550px]">
              {item.content}
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}

export default FaqSection;
