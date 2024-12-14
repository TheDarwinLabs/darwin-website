import Link from "next/link";
import SvgIcon from "./SvgIcon";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <div className="header w-full z-50 fixed top-0 left-0 py-5  h-24 text-[#121212]">
      <div className="w-[1216px] mx-auto justify-between items-center flex">
        <Link href="/" className="w-[126px]">
          <SvgIcon name="logo-color" className="darwin-logo" />
        </Link>
        <div className="justify-start items-center gap-6 flex text-xs capitalize leading-none tracking-wider">
          <div className="justify-start items-center  flex">
            <div className="px-3 py-2 justify-start items-center gap-2 flex">
              <div className="real-card-p w-2 h-2 rotate-45 bg-[#ff764a]" />
              <span className="text-xs">REAL Card</span>
            </div>
            <div className="px-3 ml-6 justify-start items-center gap-2 flex">
              <div className="real-fi-p w-2 h-2 rotate-45  bg-transparent" />
              REALFi
            </div>
            <div className="px-3 ml-[110px]">Sign In</div>
          </div>
          <Button className="px-10 py-7 rounded-[70px] text-black text-sm font-medium  tracking-wider leading-none cursor-pointer">
            APPLY NOW
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
