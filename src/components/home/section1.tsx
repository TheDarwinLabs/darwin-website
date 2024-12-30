import { useGSAP } from "@gsap/react";
import { useMemo, useRef } from "react";
import SvgIcon from "../SvgIcon";
import Image from "next/image";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import Pattern from "@/assets/icons/pattern.svg";

const list = [
  {
    image: "s1.png",
    title: "REAL Assets",
    desc: "From global premium bonds to your digital wallet—tokenized and accessible.",
  },
  {
    image: "s2.png",
    title: "REAL Usage",
    desc: "Spend globally, earn crypto locally with every transaction.",
  },
  {
    image: "s3.png",
    title: "REAL Identity",
    desc: "Your secure gateway to digital finance, anchored in trust and transparency.",
  },
  {
    image: "s4.png",
    title: "REAL Value",
    desc: "Where 20%+ yields meet real-world utility.",
  },
];

const images = [
  {
    src: "/images/logo/bnbchain.png",
    width: 206,
    height: 94,
  },
  {
    src: "/images/logo/mastercard.png",
    width: 140,
    height: 94,
  },
  {
    src: "/images/logo/kulipa.png",
    width: 144,
    height: 94,
  },
  {
    src: "/images/logo/capitalone.png",
    width: 200,
    height: 94,
  },
  {
    src: "/images/logo/stanford.png",
    width: 148,
    height: 94,
  },
  {
    src: "/images/logo/princeton.png",
    width: 230,
    height: 94,
  },
  {
    src: "/images/logo/carnegie.png",
    width: 166,
    height: 94,
  },
  {
    src: "/images/logo/massa.png",
    width: 271,
    height: 94,
  },
  {
    src: "/images/logo/chicago.png",
    width: 273,
    height: 94,
  },
  // {
  //   src: "/images/logo/immersve.png",
  //   width: 171,
  //   height: 30,
  // },
];

const Section1 = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const boxRef = useRef<HTMLDivElement | null>(null);
  const p1Ref = useRef<HTMLDivElement | null>(null);
  const p2Ref = useRef<HTMLDivElement | null>(null);
  const iconsRef = useRef<HTMLDivElement | null>(null);
  const patternBoxRef = useRef<HTMLDivElement | null>(null);
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const mSliderRef = useRef<HTMLDivElement | null>(null);
  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);
      const container = containerRef.current;
      const box = boxRef.current;
      const p1 = p1Ref.current;
      const p2 = p2Ref.current;
      const icons = iconsRef.current;
      const patternBox = patternBoxRef.current;
      const slider = sliderRef.current;
      const mSlider = mSliderRef.current;
      if (!container) return;

      gsap.to(box, {
        rotateX: 6,
        rotateY: 6,
        y: "+=30",
        duration: 2,
        yoyo: true,
        repeat: -1,
      });
      const mm = gsap.matchMedia();
      mm.add("(min-width: 1024px)", () => {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: container,
              start: "top top",
              end: "+=2000",
              pin: true,
              scrub: true,
              // markers: true,
              //  onEnterBack: () => {},
              //  onLeaveBack: () => {},
              //  onUpdate: (self) => {
              //    console.log(self);
              //  },
            },
          })
          .to(
            container,
            {
              backgroundColor: "#202020",
              duration: 1,
            },
            5
          )

          .fromTo(
            ".pattern path",
            {
              color: "#F5F4F6",
              duration: 1,
            },
            {
              color: "#0d0d0d",
              duration: 1,
            },
            5
          )
          .to(
            p1,
            {
              y: -100,
              opacity: 0,
              duration: 1,
            },
            5
          )
          .to(
            icons,
            {
              y: -100,
              opacity: 0,
              duration: 1,
            },
            5
          )
          .fromTo(
            p2,
            {
              y: "+=50",
            },
            {
              y: 0,
              opacity: 1,
              duration: 3,
            },
            5
          )
          .to(
            ".darwin-logo-color",
            {
              opacity: 0,
              duration: 0,
            },
            5
          )
          .to(
            ".darwin-logo-white",
            {
              opacity: 1,
              duration: 0,
            },
            5
          )
          .to(
            ".header",
            {
              color: "#ffffff",
              duration: 1,
            },
            5
          )
          .to(
            p2,
            {
              y: "-=50",
              opacity: 0,
              duration: 6,
            },
            10
          )
          .to(
            slider,
            {
              x: 0,
              duration: 8,
            },
            15
          )
          .add(() => {}, "+=2");
      });
      mm.add("(min-width: 768px) and (max-width: 1023px)", () => {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: container,
              start: "top top",
              end: "+=2000",
              pin: true,
              scrub: true,
              // markers: true,
              onEnterBack: () => {},
              onLeaveBack: () => {},
            },
          })
          .to(
            container,
            {
              backgroundColor: "#202020",
              duration: 1,
            },
            5
          )
          // .to(
          //   box,
          //   {
          //     rotateX: 5,
          //     rotateY: 5,
          //     y: "+=5",
          //     duration: 3,
          //   },
          //   1
          // )
          // .to(
          //   ".sec1-box-item",
          //   {
          //     borderColor: "#0d0d0d",
          //     duration: 1,
          //   },
          //   5
          // )
          .to(
            patternBox,
            {
              color: "#0d0d0d",
              duration: 1,
            },
            5
          )
          .to(
            p1,
            {
              y: -100,
              opacity: 0,
              duration: 1,
            },
            5
          )
          .to(
            icons,
            {
              y: -100,
              opacity: 0,
              duration: 1,
            },
            5
          )
          .fromTo(
            p2,
            {
              y: "+=50",
            },
            {
              y: 0,
              opacity: 1,
              duration: 3,
            },
            5
          )
          .to(
            ".darwin-logo-color",
            {
              opacity: 0,
              duration: 0,
            },
            5
          )
          .to(
            ".darwin-logo-white",
            {
              opacity: 1,
              duration: 0,
            },
            5
          )
          .to(
            ".header",
            {
              color: "#ffffff",
              duration: 0,
            },
            5
          )
          .to(
            p2,
            {
              y: "-=50",
              opacity: 0,
              duration: 3,
            },
            10
          )
          .to(
            mSlider,
            {
              y: 0,
              duration: 8,
            },
            10
          )
          .add(() => {}, "+=2");
      });
      mm.add("(max-width: 767px)", () => {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: container,
              start: "top top",
              end: "+=2000",
              pin: true,
              scrub: true,
              // markers: true,
              onEnterBack: () => {},
              onLeaveBack: () => {},
            },
          })
          .to(
            container,
            {
              backgroundColor: "#202020",
              duration: 1,
            },
            5
          )
          // .to(
          //   box,
          //   {
          //     rotateX: 5,
          //     rotateY: 5,
          //     y: "+=5",
          //     duration: 3,
          //   },
          //   1
          // )
          // .to(
          //   ".sec1-box-item",
          //   {
          //     borderColor: "#0d0d0d",
          //     duration: 1,
          //   },
          //   5
          // )
          .to(
            patternBox,
            {
              color: "#0d0d0d",
              duration: 1,
            },
            5
          )
          .to(
            [".header-menu path"],
            {
              attr: { fill: "#ffffff" },
              fill: "#ffffff",
              stroke: "#ffffff",
              duration: 0,
            },
            5
          )
          .to(
            p1,
            {
              y: -100,
              opacity: 0,
              duration: 1,
            },
            5
          )
          .to(
            icons,
            {
              y: -100,
              opacity: 0,
              duration: 1,
            },
            5
          )
          .fromTo(
            p2,
            {
              y: "+=0",
            },
            {
              y: 0,
              opacity: 1,
              duration: 3,
            },
            5
          )
          .to(
            ".darwin-logo-color",
            {
              opacity: 0,
              duration: 0,
            },
            5
          )
          .to(
            ".darwin-logo-white",
            {
              opacity: 1,
              duration: 0,
            },
            5
          )
          .to(
            ".header",
            {
              color: "#ffffff",
              duration: 0,
            },
            5
          )
          .to(
            p2,
            {
              y: "-=20",
              opacity: 0,
              duration: 3,
            },
            8
          )
          .to(
            mSlider,
            {
              y: -160,
              duration: 8,
            },
            8
          )
          .add(() => {}, "+=2");
      });
    },
    {}
    // scope: containerRef
  );

  const totalWidth = useMemo(() => {
    return (
      images.reduce((acc, item) => acc + (item.width || 0), 0) +
      32 * images.length
    );
  }, []);

  return (
    <div
      ref={containerRef}
      className="section1-container w-full flex flex-col items-center justify-center md:h-screen relative bg-[#ebeae8] overflow-hidden min-h-[760px]"
    >
      <div
        ref={patternBoxRef}
        className="pattern w-[1000px] h-[1000px] left-[50%] -ml-[500px] top-[50%] -mt-[500px] fixed z-0 text-[#f5f4f6]"
      >
        <Pattern />
      </div>
      <div
        ref={p1Ref}
        className="z-10 mt-10 px-5 md:px-0"
        style={{
          perspective: "1000px",
        }}
      >
        <div className="flex items-center justify-center flex-col pt-[80px] md:flex-row">
          <div className="text-[#1a1a1a]">
            <div className="text-[32px] font-semibold tracking-wide leading-10 md:leading-[65px] md:text-[40px] xl:leading-[56px]">
              Where
              <span className="text-[#ff764a]"> Real </span>
              <br className=" hidden md:block xl:hidden" />
              Value Evolves
              <SvgIcon name="arrow-right" className="inline-block ml-6 w-20" />
            </div>
            <div className="mt-3 text-2xl font-medium leading-[34px] tracking-wide xl:text-[28px] md:w-[420px] lg:w-full">
              Bridging Traditional Assets with Digital Finance
            </div>
            <div className="mt-3 w-full leading-snug tracking-wide text-sm md:text-sm md:w-[420px] xl:w-[695px] xl:text-base">
              {`We're creating a new financial paradigm where real-world value and
            digital innovation meet. Through REALFi and the REAL Card, we're
            making high-yield investments accessible and everyday spending more
            rewarding—empowering users to create, use, and grow wealth in the
            new financial landscape.`}
            </div>
          </div>
          <div
            ref={boxRef}
            className="relative rotate-[18deg] mt-10 md:mt-0 -translate-y-4 w-[218px] h-[197px] lg:w-[255px] lg:h-[231px] xl:w-[380px] xl:h-[340px] ml-10 xl:ml-0"
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            <Image
              src="/images/3d-logo.png"
              alt=""
              fill
              style={{
                transformStyle: "preserve-3d",
              }}
            ></Image>
          </div>
        </div>
        <div className="text-left flex flex-col md:flex-row items-center gap-6 mt-[60px] text-sm md:text-base xl:mt-0">
          <span>Strategic Partnership with / Trusted by team from</span>
          <div className="w-full  h-[1px] bg-[#757575] md:w-[210px] lg:w-[265px]"></div>
        </div>
      </div>
      <div
        ref={iconsRef}
        className="h-[70px] w-full z-10 mt-6 overflow-hidden"
        style={
          {
            "--partners-offset": `-${totalWidth}px`,
            "--partners-duration": `${images.length * 3}s`,
          } as React.CSSProperties
        }
      >
        <div className="flex flex-nowrap h-full loop items-center">
          {images.map((item, index) => (
            <div
              className="relative flex-shrink-0"
              style={{ width: item.width, height: item.height }}
              key={index}
            >
              <Image src={item.src} alt="ubisoft" fill />
            </div>
          ))}
          {images.map((item, index) => (
            <div
              className="relative flex-shrink-0"
              style={{ width: item.width, height: item.height }}
              key={index}
            >
              <Image src={item.src} alt="ubisoft" fill />
            </div>
          ))}
        </div>
      </div>
      <div
        ref={p2Ref}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full z-10 text-center text-white text-[32px] md:text-[40px] font-bold leading-[48px]  md:leading-[65px] tracking-wider opacity-0 md:w-[710px] xl:w-[940px]"
      >
        <span className="text-[#ff764a]">REAL</span> Access,{" "}
        <span className="text-[#ff764a]">REAL</span> Impact <br />
        Integrating Digital Assets into Daily Life.
      </div>
      <div
        ref={sliderRef}
        className="absolute bottom-0 translate-y-full lg:bottom-[80px] text-white  lg:right-0 md:w-[688px] lg:min-w-full gap-6 lg:flex-nowrap lg:justify-end z-10 hidden  lg:flex md:grid-cols-2  md:justify-items-center md:left-1/2 md:-translate-x-1/2 md:translate-y-[150%] lg:pl-[112px] lg:left-auto lg:translate-y-0 lg:translate-x-[150%]"
      >
        {list.map((item, index) => (
          <div
            className="flex-shrink-0 w-[332px] h-[378px] bg-[#0d0d0d] tracking-wide rounded-[18px] overflow-hidden flex-col justify-start items-start relative lg:w-[356px] lg:h-[480px]"
            key={index}
          >
            <div className="relative h-[292px] lg:h-[364px]">
              <Image
                src={`/images/${item.image}`}
                fill
                alt=""
                style={{ objectFit: "cover" }}
              ></Image>
            </div>
            <div className="relative px-6 pb-4 gap-3 flex flex-col -mt-6 lg:-mt-4 z-10">
              <div className="text-2xl font-medium leading-[34px] lg:text-[28px] ">
                {item.title}
              </div>
              <div className="text-sm  leading-snug lg:text-[17px]">
                {item.desc}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div
        ref={mSliderRef}
        className="absolute bottom-0 translate-y-full lg:bottom-[80px] text-white  lg:right-0 md:w-[688px] lg:min-w-full gap-6 lg:flex-nowrap lg:justify-end z-10 grid lg:hidden md:grid-cols-2  md:justify-items-center md:left-1/2 md:-translate-x-1/2 md:translate-y-[150%]  lg:pl-[112px]  lg:left-auto lg:translate-y-0 lg:translate-x-[150%]"
      >
        {list.map((item, index) => (
          <div
            className="flex-shrink-0 w-[332px] h-[378px] bg-[#0d0d0d] tracking-wide rounded-[18px] overflow-hidden flex-col justify-start items-start relative lg:w-[356px] lg:h-[480px]"
            key={index}
          >
            <div className="relative h-[292px] lg:h-[364px]">
              <Image
                src={`/images/${item.image}`}
                fill
                alt=""
                style={{ objectFit: "cover" }}
              ></Image>
            </div>
            <div className="relative px-6 pb-4 gap-3 flex flex-col -mt-6 lg:-mt-4 z-10">
              <div className="text-2xl font-medium leading-[34px] lg:text-[28px] ">
                {item.title}
              </div>
              <div className="text-sm  leading-snug lg:text-[17px]">
                {item.desc}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section1;
