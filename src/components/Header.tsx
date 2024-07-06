import SvgIcon from "@/components/SvgIcon";

const Header = () => (
  <div className="bg-[rgba(11,8,13,0.8)] fixed left-0 right-0 top-0 z-50 sm:fixed">
    <div className=" mx-auto px-[15px] py-[18px] flex items-center justify-between border-b-[3px] border-[#2C2C2D] sm:w-[1200px] sm:px-[40px] sm:py-[30px] ">
      <SvgIcon
        name="logo_header"
        className="w-[73px] h-6 sm:w-[110px] sm:h-9"
      />
      <nav className="hidden gap-[80px] uppercase text-xs sm:flex">
        <a>home</a>
        <a>How it Works</a>
        <a>FAQs</a>
        <a>Get Started</a>
      </nav>
      <SvgIcon name="logo" className="w-6 h-6 sm:hidden" />
    </div>
  </div>
);

export default Header;
