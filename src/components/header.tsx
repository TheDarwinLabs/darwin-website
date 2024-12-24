"use client";

import Link from "next/link";
import SvgIcon from "./SvgIcon";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { useAuth } from "@/providers/AuthProvider";
import { useState } from "react";

interface HeaderProps {
  olnyLogo?: boolean;
  isAccount?: boolean;
  accountTabs?: { title: string; icon: string; link?: string }[];
  onAccountTabClick?: (index: number) => void;
}

const Header: React.FC<HeaderProps> = ({
  olnyLogo,
  isAccount,
  accountTabs,
  onAccountTabClick,
}) => {
  const { user } = useAuth();
  const [open, setOpen] = useState(false);

  const scrollToRealCard = () => {
    const target = document.getElementById("realcard");
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const scrollToRealfi = () => {
    const target = document.getElementById("realfi");
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const scrollToApply = () => {
    const target = document.getElementById("apply");
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      <div className="header w-full z-50 fixed top-0 left-0 py-6 h-24 text-[#121212] px-5 md:px-0 md:py-5">
        <div className=" relative mx-auto justify-between items-center flex md:w-[688px] lg:w-[900px] xl:w-[1216px] z-10">
          <Link href="/" className=" relative w-10 md:w-[126px] ">
            <SvgIcon
              name="logo-color-mini"
              className="darwin-logo-color md:hidden"
            />
            <SvgIcon
              name="logo-white-mini"
              className="darwin-logo-white md:hidden absolute top-0 left-0 opacity-0"
            />
            <SvgIcon
              name="logo-color"
              className="darwin-logo-color hidden md:inline-block "
            />
            <SvgIcon
              name="logo-white"
              className="darwin-logo-white absolute top-0 left-0  hidden md:inline-block opacity-0"
            />
          </Link>
          <div
            className={cn(
              "justify-start items-center gap-6  text-xs capitalize leading-none tracking-wider hidden  md:gap-3 lg:gap-6",
              olnyLogo ? "hidden" : "md:flex"
            )}
          >
            <div className="justify-start items-center flex">
              <div
                className="px-3 py-2 justify-start items-center gap-2 flex cursor-pointer"
                onClick={scrollToRealCard}
              >
                <div className="real-card-p w-2 h-2 rotate-45 bg-[#ff764a]" />
                <span className="text-xs">REAL Card</span>
              </div>
              <div
                className="px-3 ml-6 justify-start items-center gap-2 flex cursor-pointer"
                onClick={scrollToRealfi}
              >
                <div className="real-fi-p w-2 h-2 rotate-45  bg-transparent" />
                REALFi
              </div>
              {!user?.email && (
                <Link
                  href="/signin"
                  className="px-3 cursor-pointer md:ml-[40px] lg:ml-[110px]"
                >
                  Sign In
                </Link>
              )}
            </div>
            <Button
              className="px-6 py-6 rounded-[70px] bg-[#ff764a] hover:bg-[#FFA58A] text-black text-sm font-medium  tracking-wider leading-none cursor-pointer xl:px-10 xl:py-7"
              onClick={scrollToApply}
            >
              APPLY NOW
            </Button>
            {user?.email && (
              <Link
                href="/account"
                className="bg-[#d49e80] rounded-full w-[46px] h-[46px] text-[17px]  flex items-center justify-center uppercase"
              >
                {user?.email.substring(0, 1)}
              </Link>
            )}
          </div>
          <div
            className={cn(
              "flex items-center gap-3 md:hidden",
              olnyLogo ? "hidden" : ""
            )}
          >
            <Button
              onClick={scrollToApply}
              className="px-5 py-4 rounded-[70px] h-12 bg-[#ff764a] hover:bg-[#FFA58A] text-black text-sm font-medium tracking-wider cursor-pointer"
            >
              APPLY
            </Button>

            <SvgIcon
              name={open ? "cancel" : "menu"}
              className="header-menu"
              onClick={() => setOpen((preValue) => !preValue)}
            />
          </div>
          {isAccount && (
            <div className="sm:hidden">
              <SvgIcon
                name={open ? "cancel" : "menu"}
                className="header-menu"
                onClick={() => setOpen((preValue) => !preValue)}
              />
            </div>
          )}
        </div>
        {isAccount ? (
          <div
            className={cn(
              "bg-[#ebeae8] fixed top-0 left-0 right-0 bottom-0 pt-[96px] text-[#1a1a1a]",
              open ? "" : "hidden"
            )}
          >
            {accountTabs?.map((item, index) => (
              <div
                key={item.title}
                onClick={() => {
                  onAccountTabClick?.(index);
                  setOpen((preValue) => !preValue);
                }}
                className=" relative flex items-center justify-between text-xl font-medium py-5  pl-5 pr-6"
              >
                <span>{item.title}</span>
                <SvgIcon name="right"></SvgIcon>
                <div className="absolute h-[1px] bg-[#c9c8c8] w-full bottom-0"></div>
              </div>
            ))}
          </div>
        ) : (
          <div
            className={cn(
              "bg-[#ebeae8] fixed top-0 left-0 right-0 bottom-0 pt-[96px] text-[#1a1a1a]",
              open ? "" : "hidden"
            )}
          >
            <div
              onClick={() => {
                setOpen(false);
                scrollToRealCard();
              }}
              className=" relative flex items-center justify-between text-xl font-medium py-5  pl-5 pr-6"
            >
              <span>Real Card</span>
              <SvgIcon name="right"></SvgIcon>
              <div className="absolute h-[1px] bg-[#c9c8c8] w-full bottom-0"></div>
            </div>
            <div
              onClick={() => {
                setOpen(false);
                scrollToRealfi();
              }}
              className="relative flex items-center justify-between text-xl font-medium py-5 pl-5 pr-6"
            >
              <span>RealFi</span>
              <SvgIcon name="right"></SvgIcon>
              <div className="absolute h-[1px] bg-[#c9c8c8] w-full bottom-0"></div>
            </div>
            {user?.email ? (
              <Link
                href="/account"
                className="relative flex items-center justify-between text-xl font-medium py-5 pl-5 pr-6"
              >
                <div className="bg-[#d49e80] rounded-full w-[46px] h-[46px] text-[17px]  flex items-center justify-center uppercase">
                  {user?.email.substring(0, 1)}
                </div>
                <div className="text-[#202020] text-sm font-normal flex-1 ml-2">
                  {user.email}
                </div>
                <SvgIcon name="right"></SvgIcon>
                <div className="absolute h-[1px] bg-[#c9c8c8] w-full bottom-0"></div>
              </Link>
            ) : (
              <Link
                href="/signin"
                className="relative flex items-center justify-between text-xl font-medium py-5 pl-5 pr-6"
              >
                <span>Sign in</span>
                <SvgIcon name="right"></SvgIcon>
                <div className="absolute h-[1px] bg-[#c9c8c8] w-full bottom-0"></div>
              </Link>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
