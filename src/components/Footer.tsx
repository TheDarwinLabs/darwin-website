import SvgIcon from "@/components/SvgIcon";
import Link from "next/link";

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
    <div className="mx-auto py-[30px]  flex flex-col justify-between xl:w-[1200px] sm:py-[60px]  gap-10">
      <div className="flex flex-col border-t-[3px] border-[rgba(255,255,255,0.1)] pt-[120px] px-5  md:items-end sm:justify-between sm:flex-row xl:gap-[190px]">
        <SvgIcon
          name="logo_footer"
          className="w-[60px] h-[24px] sm:w-[78px] sm:h-7"
        />
        {/* <div className="text-[10px] md:text-[12px] text-[#727272]">
          Presskit Download
        </div> */}

        {/* <div className="grow flex flex-wrap gap-x-[62px] gap-y-[36px] footer-nav mt-[42px]  lg:mt-0 xl:text-base xl:mt-3 xl:flex-nowrap lg:gap-[70px] xl:gap-[130px]">
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
        </div> */}
        <div className="text-[10px] text-[#727272]   mt-[42px] sm:text-right  sm:m-0 sm:text-[13px]">
          <Link
            href="https://darwinchain.gitbook.io/darwin-ai"
            target="_blank"
            className="cursor-pointer block mb-1 sm:mb-2 hover:text-[#888]"
          >
            Gitbook
          </Link>
          <Link
            href="https://explorer.darwinchain.ai/"
            target="_blank"
            className="cursor-pointer block mb-1 sm:mb-2 hover:text-[#888]"
          >
            BlockScreener
          </Link>
          <a
            href="/PressKit.zip"
            download
            className="cursor-pointer block mb-6 sm:mb-10 hover:text-[#888]"
          >
            <button>Presskit Download</button>
          </a>
          <div>Copyright Ⓒ 2022 – 2024 Darwin Lab, Inc.</div>
        </div>
      </div>
    </div>
  </div>
);

// const FooterOld = () => (
//   <div className="relative z-10 backdrop-blur-xl">
//     <div className="mx-auto py-[30px]  flex flex-col justify-between xl:w-[1200px] xl:py-[60px] md:min-h-[598px] gap-10">
//       <div className="flex flex-col border-t-[3px] border-[rgba(255,255,255,0.1)] pt-[60px] px-5 lg:justify-between lg:flex-row xl:gap-[190px]">
//         <SvgIcon
//           name="logo_header"
//           className="w-[55px] h-[18px] lg:w-[110px] lg:h-[36px]"
//         />
//         <div className="flex flex-wrap gap-x-[62px] gap-y-[36px] footer-nav mt-[42px]  lg:mt-0 xl:text-base xl:mt-3 xl:flex-nowrap lg:gap-[70px] xl:gap-[130px]">
//           {list.map((item, index) => (
//             <dl key={index} className="flex flex-col gap-5">
//               <dt className="text-[10px] md:text-[12px]">{item.title}</dt>
//               {item.children?.map((t, i) => (
//                 <dd
//                   key={i}
//                   className="flex items-center text-[10px] lg:text-[14px]"
//                 >
//                   {t.icon && (
//                     <SvgIcon name={t.icon} className="w-[14px] h-[14px] mr-2" />
//                   )}
//                   {t.title}
//                 </dd>
//               ))}
//             </dl>
//           ))}
//         </div>
//       </div>
//       <div className="px-5 text-[13px] text-[#727272] mt-[42px] xl:m-0">
//         <div>Made in NY and the World</div>
//         <div>Copyright Ⓒ 2022 – 2024 Darwin Lab, Inc.</div>
//       </div>
//     </div>
//   </div>
// );

export default Footer;
