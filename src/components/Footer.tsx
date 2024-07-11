import SvgIcon from "@/components/SvgIcon";



const list: { title: string; children: { title: string; icon?: string }[] }[] =
  [
    {
      title: "Company",
      children: [
        { title: "Trust" },
        { title: "Case Studies" },
        { title: "Partners" },
        { title: "Careers" },
        { title: "About us" },
      ],
    },
    {
      title: "Resources",
      children: [
        { title: "Demos" },
        { title: "Support" },
        { title: "Security" },
        { title: "Changelog" },
        { title: "Community Guides" },
        { title: "Docs" },
        { title: "Blog" },
      ],
    },
    {
      title: "Community",
      children: [
        { title: "x.com", icon: "x" },
        { title: "LinkedIn", icon: "linkedin" },
        { title: "GitHub", icon: "github" },
        { title: "Discord", icon: "discord" },
        { title: "Discourse", icon: "discourse" },
        { title: "YouTube", icon: "youtube" },
        { title: "Creators", icon: "creators" },
      ],
    },
    {
      title: "Legal",
      children: [
        { title: "Business Information" },
        { title: "Cookie Policy" },
        { title: "Privacy Guide" },
        { title: "Subprocessors List" },
        { title: "DPA" },
        { title: "Terms of Service" },
        { title: "Privacy Policy" },
      ],
    },
  ];

const Footer = () => (
  <div className="relative z-10 backdrop-blur-xl">
    <div className="mx-auto py-[30px]  flex flex-col justify-between xl:w-[1200px] xl:py-[60px] md:min-h-[598px] gap-10">
      <div className="flex flex-col border-t-[3px] border-[rgba(255,255,255,0.1)] pt-[60px] px-5 lg:justify-between lg:flex-row xl:gap-[190px]">
        <SvgIcon
          name="logo_header"
          className="w-[55px] h-[18px] lg:w-[110px] lg:h-[36px]"
        />
        <div className="flex flex-wrap gap-x-[62px] gap-y-[36px] footer-nav mt-[42px]  lg:mt-0 xl:text-base xl:mt-3 xl:flex-nowrap lg:gap-[70px] xl:gap-[130px]">
          {list.map((item, index) => (
            <dl key={index} className="flex flex-col gap-5">
              <dt className="text-[10px] md:text-[12px]">{item.title}</dt>
              {item.children?.map((t, i) => (
                <dd
                  key={i}
                  className="flex items-center text-[10px] lg:text-[14px]"
                >
                  {t.icon && (
                    <SvgIcon name={t.icon} className="w-[14px] h-[14px] mr-2" />
                  )}
                  {t.title}
                </dd>
              ))}
            </dl>
          ))}
        </div>
      </div>
      <div className="px-5 text-[13px] text-[#727272] mt-[42px] xl:m-0">
        <div>Made in NY and the World</div>
        <div>Copyright Ⓒ 2022 – 2024 Darwin Lab, Inc.</div>
      </div>
    </div>
  </div>
);

export default Footer;
