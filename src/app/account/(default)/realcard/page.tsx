export const runtime = "edge";

import SvgIcon from "@/components/SvgIcon";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";

const btns = [
  { name: "Top-UP", icon: "plus" },
  { name: "Withdraw", icon: "minus" },
  { name: "Manage", icon: "settings" },
  { name: "Details", icon: "eye-closed" },
];

const records = [
  {
    name: "Paying with",
    spend: "-540",
    reward: "",
    icon: "usdc",
  },
  {
    name: "1% Crypto Back",
    spend: "+32",
    reward: "+128.2",
    icon: "darwin",
  },
  {
    name: "Stock Rewards",
    spend: "+32",
    reward: "+128.2",
    icon: "iost",
  },
];

const transactions = [
  {
    icon: "usdc",
    name: "Taxi",
    spend: "-$165.00",
    balance: "$8520.00",
    time: "Payment  17:06",
  },
  {
    icon: "darwin",
    name: "Cryptoback",
    spend: "$4.00",
    balance: "$8585.00",
    time: "$DARWIN 14:20",
  },
  {
    icon: "iost",
    name: "Taxi",
    spend: "$2.00",
    balance: "$8581.00",
    time: "Payment  17:06",
  },
];

export default function RealCardPage() {
  return (
    <div className="w-full max-w-[1020px] mx-auto">
      <div className="text-[#1a1a1a] mt-6 mb-4">Real Card</div>
      <div className="px-16 py-9 custom-gradient rounded-2xl">
        <div className="w-[693px] mx-auto flex gap-12 items-center">
          <div className="w-[354px] h-56 relative">
            <Image
              src="/images/realcard.jpg"
              fill
              alt=""
              className="rounded-2xl"
            />
          </div>
          <div className="flex flex-col gap-4">
            <div>Available for Card</div>
            <div className="">
              <span className="text-[#757575]">$</span>
              <span className="text-5xl font-bold mx-[10px]">8520.00</span>
              <span className="text-[#757575]">USDC</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex">
                <SvgIcon name="darwin" className="w-7"></SvgIcon>
                <SvgIcon name="iost" className="-translate-x-3 w-7"></SvgIcon>
              </div>
              <span className="text-[34px] font-bold flex-1">+ 262.3</span>
              <span className="text-[#757575]">USDC</span>
              <SvgIcon name="chevron-down" className="w-6"></SvgIcon>
            </div>
          </div>
        </div>
        <div className="w-[693px] mx-auto mt-8 grid grid-cols-4 gap-4">
          {btns.map((item, index) => (
            <Button key={index} className="btn flex items-center h-[56px]">
              <SvgIcon name={item.icon} className="!w-6 !h-6"></SvgIcon>
              {item.name}
            </Button>
          ))}
        </div>
      </div>
      <div className="mt-10 mb-9 flex items-center justify-between">
        <span className="text-[28px] font-medium ">
          Monthly Spending & Rewards
        </span>
        <span className="flex items-center gap-1 text-[#757575] ">
          More
          <SvgIcon
            name="chevron-down"
            className="w-5 h-5 text-[#757575] "
          ></SvgIcon>
        </span>
      </div>
      <div className="grid grid-cols-3 gap-6">
        {records.map((item, index) => (
          <div key={index} className="p-8 bg-white rounded-2xl">
            <div className="flex text-[#222222] text-2xl font-medium gap-2">
              <SvgIcon name={item.icon} className="w-9 h-9"></SvgIcon>
              {item.name}
            </div>
            <div className="my-3 flex gap-2 items-center">
              <span
                className={cn(
                  " text-[34px] font-bold",
                  +item.spend < 0 ? "text-[#212121]" : "text-[#52b81f]"
                )}
              >
                {item.spend}
              </span>
              <span className="text-[#757575]">USDC</span>
            </div>
            {item.reward && (
              <div className="text-[#8d8d8d]">{item.reward} $DARWIN</div>
            )}
          </div>
        ))}
      </div>
      <div className="mt-12 mb-9 flex items-center justify-between">
        <span className="text-[28px] font-medium">Latest Transactions</span>
        <span className="flex items-center gap-1 text-[#757575] ">
          More
          <SvgIcon
            name="chevron-down"
            className="w-5 h-5 text-[#757575] "
          ></SvgIcon>
        </span>
      </div>
      <div className="bg-white px-9 py-6 rounded-2xl">
        <div className=" inline-block h-[30px] px-1.5 py-1 bg-[#ffddbc] rounded">
          25 Nov
        </div>
        {transactions.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-3 py-6 border-b border-[#e2e2e2] last:border-none"
          >
            <SvgIcon name={item.icon} className="w-7 h-7"></SvgIcon>
            <div className="flex-1 flex items-center justify-between">
              <div>
                <div className="text-[#1d1d20] text-lg">Taxi</div>
                <div className="text-[#666666] text-sm">Payment 17:06</div>
              </div>
              <div className="text-right">
                <div className="text-[#c11b1b] text-lg">-$165.00</div>
                <div className="text-[#666666] text-sm">Balance: $8520.00</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
