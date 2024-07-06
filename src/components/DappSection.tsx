import SvgIcon from "@/components/SvgIcon";
import Image from "next/image";
import { cn } from "@/lib/utils";

const Dapps = [
  {
    name: "Alicecam.ai",
    logo: "alicecam.png",
  },
  {
    name: "Seekandfind.ai",
    logo: "seekandfind.png",
  },
  {
    name: "futurewhispers.ai",
    logo: "futurewhispers.png",
  },
  {
    name: "futurewhispers.ai",
    logo: "futurewhispers.png",
  },
];

const DappSection = () => (
  <div className=" overflow-hidden">
    <div className="flex flex-col  w-[1200px] mx-auto h-[900px] pt-[100px]">
      <div className="flex gap-[50px]">
        <div className="flex-1 bg-[rgba(255,255,255,0.03)] border-y-[1px] border-[rgba(255,255,255,0.15)] backdrop-blur-lg shadow-[0px_0px_30px_14px_rgba(0,0,0,0.9)] pt-[60px] pb-[72px] text-[64px] leading-[84px] font-bold  uppercase">
          <div>D-apps</div>
          <div>in our eco-system</div>
        </div>
        <div className="w-[350px] flex flex-col justify-between">
          <div className="text-right uppercase">
            <div className="mb-5 text-[#F2F2F2]">Joining the Community</div>
            <div className="text-[#727272]">
              Becoming part of Darwin&apos;s Lab ecosystem
            </div>
          </div>
          <a
            href="/"
            className="flex items-center justify-between mt-[50px] w-[350px] border-y-[1px] border-brand px-3 py-[18px] uppercase text-brand"
          >
            try now
            <SvgIcon name="arrow" className="w-[18px] h-[18px]" />
          </a>
        </div>
      </div>
      <div className="mt-[97px] mb-[57px] flex">
        {Dapps.map((item, index) => (
          <div
            key={index}
            className={cn(
              " relative p-[30px] min-w-[400px] h-[200px] dapp-item backdrop-blur-xl bg-[rgba(44,44,45,0.6)]"
            )}
          >
            <Image src={`/${item.logo}`} alt="" width={60} height={60} />
            <div className="flex items-center text-2xl uppercase mt-[44px]">
              {item.name}
              <SvgIcon name="arrow_link" className="ml-5 w-9 h-9" />
            </div>
            <div
              className={cn(
                index == 3
                  ? "absolute -top-[1px] left-0 right-0 -bottom-[1px]  bg-gradient-to-r from-transparent via-[rgba(0,0,0,0.95)] via-20%  to-black"
                  : ""
              )}
            ></div>
          </div>
        ))}
      </div>
      <div className="w-[680px] uppercase text-[#727272]">
        Learn from the experiences of our users. See how they have utilized our
        platform to drive innovation and achieve success.
      </div>
    </div>
  </div>
);

export default DappSection;
