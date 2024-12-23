import Link from "next/link";
import SvgIcon from "./SvgIcon";
import { Space_Mono, Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
});

const Footer = () => {
  return (
    <div>
      <div className="w-full mx-auto pt-5 pb-[30px] border-t border-[#757575] flex-col justify-start items-start flex md:-[688px] lg:w-[900px] xl:w-[1100px]">
        <div className="self-stretch flex-col md:flex-row gap-3 md:justify-between items-end inline-flex">
          <div className="flex-col justify-end items-start  ">
            <div className="w-full md:w-[370px] text-[#494949] text-sm leading-snug">
              Disclaimer
            </div>
            <div className="w-full md:w-[370px] text-[#757575] text-xs leading-[17px] ">
              Darwin Labs is a technology services provider. Before using the
              Darwin Protocol, you should review our documentation to ensure you
              fully understand how the Protocol works. As described in our
              Terms, Darwin Protocol is provided on an “as is” and “as
              available” basis, at your own risk. Use of the Darwin Protocol
              involves risks, including but not limited to the potential loss of
              digital assets. Nothing in Darwin Protocol is intended to be
              construed as a solicitation of any individual in restricted
              jurisdictions. We explicitly disclaim any representation or
              warranties of any kind relating to the Protocol or usage of the
              Protocol, and no developer or entity will be liable for claims or
              damages of any kind associated with use or inability to use the
              Protocol.
            </div>
          </div>
          <div className="self-stretch flex-col justify-between items-end inline-flex">
            <SvgIcon name="logo-color" />
            <div className="flex-col items-end gap-2.5 flex mt-3 md:mt-0">
              <div className="items-center gap-5 flex text-[#727272] text-sm">
                <div className="items-center gap-2 flex">
                  <SvgIcon name="x" />
                  <div>x.com</div>
                </div>
                <div className="items-center gap-2 flex">
                  <SvgIcon name="in" />
                  <div>LinkedIn</div>
                </div>
                <div className="items-center gap-2 flex">
                  <SvgIcon name="github" />
                  <div>GitHub</div>
                </div>
              </div>
              <div className="justify-end items-center gap-[50px] flex">
                <div className="justify-center gap-2 md:gap-[59px] inline-flex text-right text-[#727272] text-xs capitalize leading-none tracking-wider flex-col md:flex-row">
                  <Link href="/terms">Terms of Use</Link>
                  <Link href="/privacy">Privacy Policy</Link>
                  <span>©2024 Darwin Labs | All Rights Reserved.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
