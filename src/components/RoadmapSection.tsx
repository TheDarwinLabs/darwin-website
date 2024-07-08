import Image from "next/image";
import SvgIcon from "@/components/SvgIcon";
import { cn } from "@/lib/utils";

const RoadmapSection = () => (
  <div className="section5 gradient-bg px-5 md:px-0">
    <div className="flex flex-col mx-auto pt-[100px] sm:w-[1200px]">
      <div className="bg-[rgba(255,255,255,0.03)] border-b-[1px] border-[rgba(255,255,255,0.15)] backdrop-blur-lg shadow-[0px_0px_30px_14px_rgba(0,0,0,0.9)] pt-[66px] pb-5 text-[30px] leading-[44px] font-bold  uppercase sm:border-y-[1px] sm:py-[60px] sm:text-[64px] sm:leading-[84px]">
        Roadmap
      </div>
      <div className="hidden backdrop-blur-lg sm:block">
        <Image
          src="/roadmap.svg"
          width={0}
          height={0}
          alt=""
          sizes="100vw"
          className="w-6 h-6 object-cover sm:min-w-[894px] sm:h-[350px] scale-[2]"
        />
      </div>
      <div className="backdrop-blur-lg mt-5 px-5 sm:hidden">
        <Image
          src="/roadmap-sm.png"
          width={0}
          height={0}
          alt=""
          sizes="100vw"
          className="w-full object-cover"
        />
      </div>
    </div>
  </div>
);

export default RoadmapSection;
