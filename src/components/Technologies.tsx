import SvgIcon from "@/components/SvgIcon";
import useEmblaCarousel from "embla-carousel-react";
import ClassNames from "embla-carousel-class-names";

const list = [
  {
    title: "Super usability",
    desc: "Scalable and Adaptable Infrastructure",
  },
  {
    title: "Super usability",
    desc: "Scalable and Adaptable Infrastructure",
  },
  {
    title: "Super usability",
    desc: "Scalable and Adaptable Infrastructure",
  },
];

const Technologies = () => {
  const [emblaRef] = useEmblaCarousel({}, [ClassNames()]);
  return (
    <div>
      <div className="flex flex-col mx-auto pt-[50px] pb-[78px] sm:justify-between sm:flex-row sm:w-[1200px] sm:h-[900px] sm:px-0 sm:pt-[171px] sm:pb-0">
        <div className="bg-[rgba(255,255,255,0.03)] border-b-[1px] border-[rgba(255,255,255,0.15)] backdrop-blur-lg  shadow-[0px_0px_30px_14px_rgba(0,0,0,0.9)] pb-5 mx-5 sm:border-y-[1px] sm:p-[60px] sm:w-[600px] sm:h-[500px] sm:mx-0">
          <div className="flex gap-[17px] sm:gap-[30px]">
            <div className="flex-1 h-[2px] w-full bg-white sm:opacity-10 sm:h-1"></div>
            <div className="w-[58px] h-[14px] bg-white text-[#000000] text-[9px] text-right px-[10px] font-bold sm:text-base sm:h-6 sm:w-[100px]">
              01
            </div>
          </div>
          <div className="text-[30px] leading-[44px] uppercase font-bold mt-[20px] w-[200px] sm:w-auto sm:text-[64px] sm:leading-[84px] sm:mt-[188px]">
            Core Technologies
          </div>
        </div>
        <div className="hidden pr-[100px] pt-[60px] sm:flex flex-col gap-[60px]">
          {list.map((item, index) => (
            <div
              key={index}
              className="technology-item justify-between p-5 w-[440px] h-[200px]"
            >
              <SvgIcon
                name="technology-sm"
                className=" w-[48px] h-[48px] mb-[64px]"
              />
              <div className=" uppercase">
                <div className="text-[#F2F2F2]">{item.title}</div>
                <div className="text-[#727272] text-xs mt-2">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="embla px-5 mt-[30px] sm:hidden" ref={emblaRef}>
          <div className="embla__container">
            {list.map((item, index) => (
              <div key={index} className="embla__slide">
                <div className="flex flex-col justify-between technology-item-sm w-[260px] h-[300px] p-[30px]">
                  <SvgIcon name="technology" className="w-[48px] h-[48px]" />
                  <div>
                    <div className="uppercase mt-[88px]">
                      <div className="text-[#F2F2F2]">{item.title}</div>
                      <div className="text-[#727272] text-xs mt-2 whitespace-normal">
                        {item.desc}
                      </div>
                    </div>
                    <div className="hidden mt-[10px] text-right plus-icon">
                      <SvgIcon
                        name="plus-light"
                        className=" inline-block w-[30px] h-[30px] "
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
