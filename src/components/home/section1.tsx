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

const Section1 = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const boxRef = useRef<HTMLDivElement | null>(null);
  const p1Ref = useRef<HTMLDivElement | null>(null);
  const p2Ref = useRef<HTMLDivElement | null>(null);
  const iconsRef = useRef<HTMLDivElement | null>(null);
  const patternBoxRef = useRef<HTMLDivElement | null>(null);
  const sliderRef = useRef<HTMLDivElement | null>(null);
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
      if (!container) return;

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
            onLeaveBack: () => {
              // gsap.to(".darwin-logo path", {
              //   fill: "#ffffff",
              //   duration: 1,
              // });
            },
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
        .to(
          box,
          {
            rotateX: 5,
            rotateY: 5,
            y: "+=5",
            duration: 3,
          },
          1
        )
        .to(
          ".sec1-box-item",
          {
            borderColor: "#0d0d0d",
            duration: 1,
          },
          5
        )
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
          ".darwin-logo path",
          {
            attr: { fill: "#ffffff" },
            fill: "#ffffff",
            duration: 1,
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
            duration: 3,
          },
          10
        )
        .to(
          slider,
          {
            x: 0,
            duration: 8,
          },
          10
        )
        .add(() => {}, "+=2");
    },
    {}
    // scope: containerRef
  );
  const images = [
    {
      src: "/images/logo/bnbchain.png",
      width: 170,
      height: 30,
    },
    {
      src: "/images/logo/mastercard.png",
      width: 68,
      height: 40,
    },
    {
      src: "/images/logo/kulipa.png",
      width: 101,
      height: 33,
    },
    {
      src: "/images/logo/capitalone.png",
      width: 136,
      height: 58,
    },
    {
      src: "/images/logo/stanford.png",
      width: 104,
      height: 64,
    },
    {
      src: "/images/logo/princeton.png",
      width: 166,
      height: 94,
    },
    {
      src: "/images/logo/carnegie.png",
      width: 116,
      height: 80,
    },
    {
      src: "/images/logo/massa.png",
      width: 216,
      height: 88,
    },
    {
      src: "/images/logo/chicago.png",
      width: 224,
      height: 80,
    },
    {
      src: "/images/logo/immersve.png",
      width: 171,
      height: 30,
    },
  ];

  const totalWidth = useMemo(() => {
    return (
      images.reduce((acc, item) => acc + (item.width || 0), 0) +
      32 * images.length
    );
  }, []);

  return (
    <div
      ref={containerRef}
      className="section1 w-full flex flex-col items-center justify-center h-screen relative bg-[#ebeae8] overflow-hidden min-h-[760px]"
    >
      <div
        ref={patternBoxRef}
        className="w-[1000px] h-[1000px] left-[50%] -ml-[500px] top-[50%] -mt-[500px] fixed z-0 text-[#f5f4f6]"
      >
        <Pattern />
      </div>
      <div
        ref={p1Ref}
        className="z-10 mt-10"
        style={{
          perspective: "1000px",
        }}
      >
        <div className="flex items-center justify-center">
          <div className="text-[#1a1a1a]">
            <div className="text-5xl font-semibold tracking-wide">
              Where
              <span className="text-[#ff764a]"> Real </span>
              Value Evolves
              <SvgIcon name="arrow-right" className="inline-block ml-6 w-20" />
            </div>
            <div className="mt-3 text-[28px] font-medium leading-[34px] tracking-wide">
              Bridging Traditional Assets with Digital Finance
            </div>
            <div className="mt-3 w-[695px] text-[17px] leading-snug tracking-wide">
              {`We're creating a new financial paradigm where real-world value and
            digital innovation meet. Through REALFi and the REAL Card, we're
            making high-yield investments accessible and everyday spending more
            rewarding—empowering users to create, use, and grow wealth in the
            new financial landscape.`}
            </div>
          </div>
          <div
            ref={boxRef}
            className="relative w-[380px] h-[340px] rotate-[18deg] -translate-y-4"
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
        <div className="text-left flex items-center gap-6">
          <span>Strategic Partnership with / Trusted by/team from</span>
          <div className="w-[265px] h-[1px] bg-[#757575]"></div>
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
        <div className="flex flex-nowrap gap-8 h-full loop items-center">
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
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[940px] z-10 text-center text-white text-[40px] font-bold leading-[65px] tracking-wider opacity-0"
      >
        <span className="text-[#ff764a]">REAL</span> Access,{" "}
        <span className="text-[#ff764a]">REAL</span> Impact <br />
        Integrating Digital Assets into Daily Life.
      </div>
      <div
        ref={sliderRef}
        className="absolute bottom-[80px] flex text-white pl-[112px] right-0 min-w-full flex-nowrap justify-end z-10 translate-x-[150%]"
      >
        <div className="flex gap-6">
          {list.map((item, index) => (
            <div
              className="flex-shrink-0 w-[356px] h-[480px] bg-[#0d0d0d] tracking-wide rounded-[18px] overflow-hidden flex-col justify-start items-start relative"
              key={index}
            >
              <div className="relative h-[364px]">
                <Image src={`/images/${item.image}`} fill alt=""></Image>
              </div>
              <div className="relative px-6 pb-4 gap-3 flex flex-col -mt-4 z-10">
                <div className="text-[28px] font-medium leading-[34px]">
                  {item.title}
                </div>
                <div className="text-[17px] leading-snug">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section1;
