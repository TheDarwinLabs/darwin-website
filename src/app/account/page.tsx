"use client";
import Footer from "@/components/footer";
import Header from "@/components/header";
import SvgIcon from "@/components/SvgIcon";
import { useUserData } from "@/hooks/useUserData";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useMutation } from "@tanstack/react-query";

const tabs = [
  { title: "Dashboard", icon: "app", component: Dashboard },
  { title: "Settings", icon: "setting", component: Settings },
  { title: "Terms", icon: "terms", link: "/terms" },
  { title: "Services", icon: "file-check", link: "" },
  { title: "Documentation", icon: "app" },
];

const Account = () => {
  const [active, setActive] = useState(0);
  const ActiveComponent = tabs[active]?.component;
  const router = useRouter();

  const onTabClick = (index: number) => {
    if (tabs[index].link) {
      router.push(tabs[index].link);
      return;
    }
    setActive(index);
  };

  return (
    <>
      <Header olnyLogo />
      <div className="w-full min-h-screen flex flex-col pt-[96px]  px-5 md:px-0 ">
        <div className="flex-1 flex gap-7 pb-[88px]">
          <div className="hidden flex-col sm:flex sm:w-[90px] md:w-[260px] lg:w-[380px] xl:w-[560px] text-[17px] py-1">
            {tabs.map((item, index) => (
              <div
                key={item.title}
                className={cn(
                  "flex py-5 pr-4 justify-end gap-2 rounded-tr-xl rounded-br-xl cursor-pointer",
                  active === index ? "bg-[#FFDEBD]" : ""
                )}
                onClick={() => onTabClick(index)}
              >
                <SvgIcon name={item.icon}></SvgIcon>
                <div className="w-[150px] hidden md:block">{item.title}</div>
              </div>
            ))}
          </div>
          <div className="flex-1 sm:pr-[43px]">
            {ActiveComponent && <ActiveComponent />}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

const list2 = [
  {
    image: "/images/waitlist.png",
    title: "Join the Waitlist",
    desc: "Global spending, local rewards. Be the first to experience seamless payments.",
    button: "Join Waitlist",
    href: "/join",
  },
  {
    image: "/images/investing.png",
    title: "Start Investing",
    desc: "Tokenized assets, real-world returns. Create your account and earn 20%+ yields today.",
    button: "Get Started",
    href: "/start",
  },
];

function Dashboard() {
  const { data } = useUserData();
  return (
    <div className="">
      <div className="text-[28px] font-medium ">Your Account</div>
      <div className="mt-3 bg-white rounded-[18px] p-5 text-[17px] flex gap-2 items-center">
        <div className="bg-[#d49e80] rounded-full w-[46px] h-[46px] flex items-center justify-center uppercase">
          {data?.email.substring(0, 1)}
        </div>
        <span className="flex-1">{data?.email}</span>
      </div>
      <div className="text-[28px] font-medium mt-8 mb-5">Your Application</div>
      <div className="flex gap-6 flex-col sm:flex-row">
        {list2.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-[18px] overflow-hidden flex-1"
          >
            <div className="h-[150px] relative ">
              <Image
                src={item.image}
                fill
                alt={item.title}
                className="object-cover"
              ></Image>
            </div>
            <div className="px-6 pb-6 pt-[18px] flex flex-col gap-3">
              <div className="text-[#0d0d0d] text-2xl font-medium leading-[34px]">
                {item.title}
              </div>
              <div className="text-[#212121] text-sm font-normal leading-snug">
                {item.desc}
              </div>
              <Button
                asChild
                className="self-start w-[136px] h-10 rounded-[99px] bg-[#ff764a] hover:bg-[#ff764a] text-black"
              >
                <Link href={item.href}> {item.button}</Link>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Settings() {
  const { data: user } = useUserData();

  const logoutMutation = useMutation({
    mutationFn: async () => {
      const response = await fetch("/api/user/logout", {
        method: "POST",
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "logout failed");
      }

      return response.json();
    },
  });
  const logout = () => {
    logoutMutation.mutate();
  };
  return (
    <div>
      <div className="text-[28px] font-medium ">Your Account</div>
      <div className="mt-3 bg-white rounded-[18px] p-7 text-[17px] flex flex-col gap-9">
        <div className="flex gap-[53px] items-center">
          <span className="w-[144px]">Email Address</span>
          <span>{user?.email}</span>
        </div>
        <Link href="/account/resetPwd" className="flex gap-[53px] items-center">
          <span className="w-[144px]">Passwords</span>
          <span className="flex-1">******</span>
          <SvgIcon name="right"></SvgIcon>
        </Link>
      </div>
      <Button
        variant="ghost"
        className="underline mx-auto block mt-10 text-[17px] hover:bg-transparent "
        onClick={logout}
        disabled={logoutMutation.isPending}
      >
        Sign out
      </Button>
    </div>
  );
}

export default Account;
