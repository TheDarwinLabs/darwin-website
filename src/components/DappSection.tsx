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
  <div className="section4 gradient-bg px-5 overflow-hidden sm:px-0">
    <div className="flex flex-col mx-auto sm:pt-[100px] sm:w-[1200px] sm:h-[900px]">
      <div className="flex gap-[50px]">
        <div className="flex-1 bg-[rgba(255,255,255,0.03)] border-b-[1px] border-[rgba(255,255,255,0.15)] backdrop-blur-lg shadow-[0px_0px_30px_14px_rgba(0,0,0,0.9)] py-5 text-[30px] leading-[44px] font-bold  uppercase sm:text-[64px] sm:leading-[84px] sm:pt-[60px] sm:pb-[72px] sm:border-y-[1px]">
          <div>D-apps</div>
          <div>in our eco-system</div>
        </div>
        <div className="hidden w-[350px]  flex-col justify-between sm:flex">
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
      <div className="mt-6 mb-7 flex flex-col gap-5 sm:flex-row sm:mt-[97px] sm:mb-[57px] sm:gap-0">
        {Dapps.map((item, index) => (
          <div
            key={index}
            className={cn(
              " relative p-[30px] h-[128px] dapp-item backdrop-blur-xl bg-[rgba(44,44,45,0.6)] sm:min-w-[400px] sm:h-[200px] last:hidden sm:last:block"
            )}
          >
            <Image
              src={`/${item.logo}`}
              width={0}
              height={0}
              alt=""
              sizes="100vw"
              className="w-6 h-6 object-cover sm:w-[60px] sm:h-[60px]"
            />
            <div className="flex items-center text-base uppercase mt-5 justify-between sm:mt-[44px] sm:justify-start sm:text-2xl">
              {item.name}
              <SvgIcon name="arrow_link" className="ml-5 w-9 h-9" />
            </div>
            <div
              className={cn(
                index == 3
                  ? "hidden absolute -top-[1px] left-0 right-0 -bottom-[1px]  bg-gradient-to-r from-transparent via-[rgba(0,0,0,0.95)] via-20%  to-black sm:block"
                  : ""
              )}
            ></div>
          </div>
        ))}
      </div>
      <div className="uppercase text-[#727272] md:w-[680px]">
        Learn from the experiences of our users. See how they have utilized our
        platform to drive innovation and achieve success.
      </div>
    </div>
  </div>
);

export default DappSection;
