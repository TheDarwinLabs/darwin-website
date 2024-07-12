import { useState } from "react";
import Image from "next/image";
import SvgIcon from "@/components/SvgIcon";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FaqSection from "@/components/FaqSection";
import DappSection from "@/components/DappSection";
import RoadmapSection from "@/components/RoadmapSection";
import Technologies from "@/components/Technologies";
import Benefits from "@/components/Benefits";
import TopSection from "@/components/TopSection";
import RevolutionSection from "@/components/RevolutionSection";

export default function Page() {
  return (
    <>
      <Header />
      <main role="main" className="main-container">
        <div className="shadow-box"></div>
        <TopSection />
        <Benefits />
        <Technologies />
        <DappSection />
        <RoadmapSection />
        <RevolutionSection />
        <FaqSection />
      </main>
      <Footer />
    </>
  );
}
