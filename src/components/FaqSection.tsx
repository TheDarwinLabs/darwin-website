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
  <div id="faqs" className="section7">
    <div className="relative z-10 flex flex-col mx-auto px-5 md:gap-[20px]  md:w-[700px]  xl:gap-[100px] xl:w-[1200px] md:h-[900px] xl:pt-[100px] md:flex-row md:px-0">
      <div className=" bg-[rgba(255,255,255,0.03)] backdrop-blur-lg border-b-[1px] border-[rgba(255,255,255,0.15)] pt-[66px] pb-5 text-[30px] leading-[44px] tracking-tight font-bold uppercase md:w-[200px] md:h-[300px] md:text-[42px] md:leading-[60px] xl:w-[400px] xl:h-[400px] xl:pt-[60px] xl:text-[54px] xl:pl-[40px] xl:leading-[84px] xl:pb-0 xl:border-y-[1px]">
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
            <AccordionTrigger className="uppercase py-[14px]  md:py-[30px] xl:py-[38px] text-xs md:text-[14px] md:leading-5 xl:text-base">
              {item.title}
              <SvgIcon
                name={isOpen ? "minus" : "plus"}
                className="w-[18px] h-[18px] mr-5 md:w-[38px] md:h-[38px]"
              />
            </AccordionTrigger>
            <AccordionContent className="text-xs text-[#989898] pb-[30px] text-[10px] leading-[15px] xl:text-base md:w-[400px] xl:w-[550px]">
              {item.content}
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}

export default FaqSection;
