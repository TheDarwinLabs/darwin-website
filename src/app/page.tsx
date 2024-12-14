"use client";

import React from "react";
import SvgIcon from "@/components/SvgIcon";
import Header from "@/components/header";
import Section1 from "@/components/home/section1";
import Section2 from "@/components/home/section2";
import Section3 from "@/components/home/section3";

export default function Home() {
  return (
    <>
      <Header />
      {/* <SvgIcon
        name="pattern"
        className="w-[1000px] h-[1000px] left-[50%] -ml-[500px] top-[50%] -mt-[500px] fixed z-0 text-[#f5f4f6]"
      /> */}
      <Section1 />
      <Section2 />
      <Section3 />
    </>
  );
}
