"use client";

import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SvgIcon from "@/components/SvgIcon";
import { cn } from "@/lib/utils";

const FaqList = [
  {
    title: `What is Darwin's Lab?`,
    content: `Darwin's Lab is a pioneering platform that integrates AI and blockchain technology to democratize AI development and create a decentralized, secure, and inclusive AI ecosystem.`,
  },
  {
    title: `What is Darwin's Lab?`,
    content: `Darwin's Lab is a pioneering platform that integrates AI and blockchain technology to democratize AI development and create a decentralized, secure, and inclusive AI ecosystem.`,
  },
  {
    title: `What is Darwin's Lab?`,
    content: `Darwin's Lab is a pioneering platform that integrates AI and blockchain technology to democratize AI development and create a decentralized, secure, and inclusive AI ecosystem.`,
  },
];

const FaqSection = () => (
  <div className="section7 gradient-bg">
    <div className="flex flex-col mx-auto px-5 sm:gap-[100px] sm:w-[1200px] sm:h-[900px] sm:pt-[100px] sm:flex-row sm:px-0">
      <div className=" bg-[rgba(255,255,255,0.03)] backdrop-blur-lg border-b-[1px] border-[rgba(255,255,255,0.15)] pt-[66px] pb-5 text-[30px] leading-[44px] tracking-tight font-bold uppercase sm:w-[400px] sm:h-[400px] sm:pt-[60px] sm:text-[72px] sm:leading-[84px] sm:pb-0 sm:border-y-[1px]">
        faqs
      </div>
      <div className="flex-1">
        <Faqs />
      </div>
    </div>
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
            <AccordionTrigger className="uppercase py-[14px] sm:py-[38px] text-xs sm:text-base">
              {item.title}
              <SvgIcon
                name={isOpen ? "minus" : "plus"}
                className="w-[18px] h-[18px] mr-5 sm:w-[38px] sm:h-[38px]"
              />
            </AccordionTrigger>
            <AccordionContent className="text-xs text-[#989898] pb-[30px] text-[10px] leading-[15px] sm:text-base sm:w-[550px]">
              {item.content}
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}

export default FaqSection;
