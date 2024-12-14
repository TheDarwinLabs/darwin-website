import { useGSAP } from "@gsap/react";
import { useEffect, useRef } from "react";
import Image from "next/image";
import SvgIcon from "../SvgIcon";
import { Button } from "../ui/button";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

const Section2 = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const blackContainerRef = useRef<HTMLDivElement | null>(null);
  const blackCard = useRef<HTMLDivElement | null>(null);
  const orangeCard = useRef<HTMLDivElement | null>(null);
  const silverCard = useRef<HTMLDivElement | null>(null);
  const phoneBox = useRef<HTMLDivElement | null>(null);
  const phoneCx1 = useRef<HTMLDivElement | null>(null);
  const phoneCx2 = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      const container = containerRef.current;
      const blackContainer = blackContainerRef.current;
      if (!container || !blackContainer) return;

      gsap
        .timeline({
          scrollTrigger: {
            trigger: container,
            start: "top top",
            end: "+=3000",
            pin: true,
            scrub: true,
            markers: true,
          },
        })
        .to(blackContainer, { y: 0, duration: 5 }, 5)
        .add(() => {}, "+=20");

      // gsap.to(container, {
      //   scrollTrigger: {
      //     trigger: container,
      //     start: "top top",
      //     end: "+=3000",
      //     pin: true,
      //     scrub: true,
      //     markers: true,
      //   },
      // });
      // gsap.to(blackContainer, {
      //   y: 0,
      //   scrollTrigger: {
      //     trigger: container,
      //     start: "500",
      //     end: "1000",
      //     scrub: true,
      //     // markers: true,
      //   },
      // });

      if (blackCard.current) {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: container,
              start: "100",
              end: "1500",
              scrub: true,
              // markers: true,
            },
          })
          .to(blackCard.current, {
            rotate: 2,
            x: -210,
            y: 50,
          })
          .to(blackCard.current, {
            y: 240,
            x: -220,
            rotate: -4,
            scale: 0.9,
            // zIndex: 30,
          })
          .to(
            blackCard.current,
            {
              rotate: 0,
              y: 260,
              x: -195,
              scale: 0.65,
              // zIndex: 30,
            },
            2
          );
        gsap.to(blackCard.current, {
          opacity: 0,
          scrollTrigger: {
            trigger: container,
            start: "1600",
            end: "1800",
            scrub: true,
          },
        });
      }
      if (orangeCard.current) {
        gsap.to(orangeCard.current, {
          rotate: 34,
          x: 200,
          y: -80,
          zIndex: 0,
          scrollTrigger: {
            trigger: container,
            start: "100",
            end: "500",
            scrub: true,
            // markers: true,
          },
        });
      }
      if (silverCard.current) {
        gsap.to(silverCard.current, {
          borderColor: "#0d0d0d",
          scrollTrigger: {
            trigger: container,
            start: "top top",
            end: "+=1000",
            scrub: true,
            // markers: true,
          },
        });
      }
      if (phoneBox.current) {
        gsap.to(phoneBox.current, {
          y: 0,
          scrollTrigger: {
            trigger: container,
            start: "1200",
            end: "1500",
            scrub: true,
            // markers: true,
          },
        });
      }
      if (phoneCx1.current) {
        gsap.to(phoneCx1.current, {
          opacity: 0,
          scrollTrigger: {
            trigger: container,
            start: "1600",
            end: "1800",
            scrub: true,
            // markers: true,
          },
        });
      }
      if (phoneCx2.current) {
        gsap.to(phoneCx2.current, {
          opacity: 1,
          scrollTrigger: {
            trigger: container,
            start: "1600",
            end: "1700",
            scrub: true,
            // markers: true,
          },
        });
      }
    },
    { scope: containerRef }
  );

  useEffect(() => {
    setTimeout(() => {
      // window.scrollTo({ top: 0 });
    }, 0);
  }, []);
  return (
    <div ref={containerRef} className=" w-full h-screen relative">
      <div
        ref={blackContainerRef}
        className="absolute translate-y-full bottom-0 left-0 right-0 h-screen bg-[#202020] overflow-hidden flex items-end justify-center pb-[100px] z-20"
      >
        <div className="relative w-[556px] h-[394px] z-[25]">
          <div className="text-[39px] font-semibold text-white absolute -left-[320px] -top-[200px] w-[476px]">
            Double Rewards on Every Single Swipe
          </div>
          <Image
            src="/images/card-top.png"
            alt=""
            width={520}
            height={220}
            className="absolute top-0 right-0"
          ></Image>
          <Image
            src="/images/card-bottom.png"
            alt=""
            width={520}
            height={220}
            className="absolute bottom-0 left-0 z-50"
          ></Image>
          <Image
            src="/images/circle.png"
            width={532}
            height={418}
            className="absolute bottom-8 left-[82px]"
            alt=""
          ></Image>
          <div className="absolute -right-[325px] top-[50px]">
            <div className="text-white text-2xl font-medium mb-4">
              SAVE → EARN in $IOST
            </div>
            <ul className="text-[#c9c8c8] text-sm leading-6 mb-[80px] list-disc list-inside">
              <li>Save more earn more</li>
              <li>Higher tiers for larger balances</li>
              <li>Access to premium yields</li>
              <li>Long-term wealth building</li>
            </ul>
            <div className="text-white text-2xl font-medium mb-4">
              SPEND → EARN in $DARWIN
            </div>
            <ul className="text-[#c9c8c8] text-sm leading-6 list-disc list-inside">
              <li>Instant rewards on every purchase</li>
              <li>Global acceptance</li>
              <li>Low fees</li>
              <li>Compound yield opportunities </li>
            </ul>
          </div>
        </div>
        <div
          ref={phoneBox}
          className="phone-box z-40 w-[375px] h-[729px] absolute -bottom-[200px] left-1/2 -translate-x-1/2 translate-y-full"
        >
          <div
            ref={phoneCx1}
            className="absolute border border-white left-[8%] w-[84%] h-[92%] top-[4%] rounded-[45px] overflow-hidden"
          >
            <Image src="/images/phone1.jpg" fill alt="phone1"></Image>
          </div>
          <div
            ref={phoneCx2}
            className="absolute border border-white left-[8%] w-[84%] h-[92%] top-[4%] rounded-[45px] overflow-hidden opacity-0"
          >
            <Image src="/images/phone2.jpg" fill alt="phone2"></Image>
          </div>
          {/* <div className="absolute border border-white w-full h-full rounded-[45px] overflow-hidden">
            <Image src="/images/phone1.jpg" fill alt="phone1"></Image>
          </div> */}
        </div>
        <Image
          src="/images/noise.png"
          fill
          alt=""
          className="mix-blend-soft-light absolute top-0 bottom-0 left-0 right-0 "
        ></Image>
      </div>
      <div className="w-[1216px] mx-auto border border-black relative h-full">
        <div className="absolute bottom-[95px] left-0 w-[442px] flex flex-col gap-6">
          <SvgIcon name="read-card" className="w-[106px]"></SvgIcon>
          <div className="text-[34px] tracking-wider">
            SPEND <span className="font-bold">ANYWHERE</span>, EARN{" "}
            <span className="font-bold">EVERYWHERE</span>
          </div>
          <div className="text-[17px] leading-snug tracking-wide">
            The first global payment card that turns every swipe into dual
            crypto rewards.
          </div>
          <Button className="rounded-[70px] w-[180px] h-[56px] text-[#202020] text-sm font-medium leading-none tracking-wider">
            APPLY NOW
          </Button>
        </div>
        <div
          ref={blackCard}
          className="absolute bottom-[360px] right-[141px] w-[400px] h-[255px] origin-top-left rotate-[32deg] rounded-2xl z-30"
        >
          <Image src="/images/blackcard.png" fill alt="BlackCard"></Image>
        </div>
        <div
          ref={orangeCard}
          className="absolute right-[278px] bottom-[380px] w-[375px] h-[236px] origin-top-left rotate-[49deg] rounded-2xl border border-[#ffddc9] z-10 scale-y-95 skew-x-[18deg] translate-x-[390px] translate-y-[64px]"
        >
          <Image src="/images/orangecard.png" fill alt="OrangeCard"></Image>
        </div>
        <div
          ref={silverCard}
          className="absolute -right-[90px] bottom-0 w-[400px] h-[255px] origin-top-left rotate-[-32deg] shadow border border-white rounded-2xl scale-y-95 skew-x-[-18deg]"
        >
          <Image src="/images/silvercard.png" fill alt="SilverCard"></Image>
        </div>
      </div>
    </div>
  );
};

export default Section2;
