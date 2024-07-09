import SvgIcon from "@/components/SvgIcon";

const Footer = () => (
  <div className="relative z-10 backdrop-blur-xl">
    <div className="mx-auto py-[30px]  flex flex-col justify-between  sm:w-[1200px] sm:py-[60px] sm:h-[598px]">
      <div className="flex flex-col border-t-[3px] border-[rgba(255,255,255,0.1)] pt-[60px] px-5 sm:justify-between sm:flex-row sm:gap-[190px]">
        <SvgIcon
          name="logo_header"
          className="w-[55px] h-[18px] sm:w-[110px] sm:h-[36px]"
        />
        <div className="flex flex-wrap gap-x-[72px] gap-y-[36px] footer-nav mt-[42px] text-[10px] sm:text-[12px] sm:text-base sm:mt-3 sm:flex-nowrap sm:gap-[134px]">
          <dl>
            <dt>Company</dt>
            <dd>Trust</dd>
            <dd>Case Studies</dd>
            <dd>Partners</dd>
            <dd>Careers</dd>
            <dd>About us</dd>
          </dl>
          <dl>
            <dt>Resources</dt>
            <dd>Demos</dd>
            <dd>Support</dd>
            <dd>Security</dd>
            <dd>Changelog</dd>
            <dd>Community Guides</dd>
            <dd>Docs</dd>
            <dd>Blog</dd>
          </dl>
          <dl>
            <dt>Community</dt>
            <dd className="flex items-center">
              <SvgIcon name="x" className="w-[14px] h-[14px] mr-2" />
              x.com
            </dd>
            <dd className="flex items-center">
              <SvgIcon name="linkedin" className="w-[14px] h-[14px] mr-2" />
              LinkedIn
            </dd>
            <dd className="flex items-center">
              <SvgIcon name="github" className="w-[14px] h-[14px] mr-2" />
              GitHub
            </dd>
            <dd className="flex items-center">
              <SvgIcon name="discord" className="w-[14px] h-[14px] mr-2" />
              Discord
            </dd>
            <dd className="flex items-center">
              <SvgIcon name="discourse" className="w-[14px] h-[14px] mr-2" />
              Discourse
            </dd>
            <dd className="flex items-center">
              <SvgIcon name="youtube" className="w-[14px] h-[14px] mr-2" />
              YouTube
            </dd>
            <dd className="flex items-center">
              <SvgIcon name="creators" className="w-[14px] h-[14px] mr-2" />
              Creators
            </dd>
          </dl>
          <dl>
            <dt>Legal</dt>
            <dd>Business Information</dd>
            <dd>Cookie Policy</dd>
            <dd>Privacy Guide</dd>
            <dd>Subprocessors List</dd>
            <dd>DPA</dd>
            <dd>Terms of Service</dd>
            <dd>Privacy Policy</dd>
          </dl>
        </div>
      </div>
      <div className="px-5 text-[13px] text-[#727272] mt-[42px] sm:m-0">
        <div>Made in NY and the World</div>
        <div>Copyright Ⓒ 2022 – 2024 Darwin Lab, Inc.</div>
      </div>
    </div>
  </div>
);

export default Footer;