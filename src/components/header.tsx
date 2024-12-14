import Link from "next/link";
import SvgIcon from "./SvgIcon";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <div className="header w-full z-50 fixed top-0 left-0 py-6 h-24 text-[#121212] px-5 md:px-0 md:py-5">
      <div className="mx-auto justify-between items-center flex md:w-[688px] lg:w-[900px] xl:w-[1216px]">
        <Link href="/" className="w-10 md:w-[126px]">
          <SvgIcon name="logo-mini" className="darwin-logo md:hidden" />
          <SvgIcon
            name="logo-color"
            className="darwin-logo hidden md:inline-block"
          />
        </Link>
        <div className="justify-start items-center gap-6  text-xs capitalize leading-none tracking-wider hidden md:flex md:gap-3 lg:gap-6">
          <div className="justify-start items-center flex">
            <div className="px-3 py-2 justify-start items-center gap-2 flex cursor-pointer">
              <div className="real-card-p w-2 h-2 rotate-45 bg-[#ff764a]" />
              <span className="text-xs">REAL Card</span>
            </div>
            <div className="px-3 ml-6 justify-start items-center gap-2 flex cursor-pointer">
              <div className="real-fi-p w-2 h-2 rotate-45  bg-transparent" />
              REALFi
            </div>
            <div className="px-3 cursor-pointer md:ml-[40px] lg:ml-[110px]">
              Sign In
            </div>
          </div>
          <Button className="px-6 py-6 rounded-[70px] text-black text-sm font-medium  tracking-wider leading-none cursor-pointer xl:px-10 xl:py-7">
            APPLY NOW
          </Button>
        </div>
        <div className="flex items-center gap-3 md:hidden">
          <Button className="px-5 py-4 rounded-[70px] h-12 text-black text-sm font-medium tracking-wider cursor-pointer">
            APPLY
          </Button>
          <SvgIcon name="menu" className="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
