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
  const blackCardRef = useRef<HTMLDivElement | null>(null);
  const orangeCardRef = useRef<HTMLDivElement | null>(null);
  const silverCardRef = useRef<HTMLDivElement | null>(null);
  const phoneBoxRef = useRef<HTMLDivElement | null>(null);
  const phoneCx1Ref = useRef<HTMLDivElement | null>(null);
  const phoneCx2Ref = useRef<HTMLDivElement | null>(null);
  const cardTopRef = useRef<HTMLImageElement | null>(null);
  const cardBottomRef = useRef<HTMLImageElement | null>(null);
  const cardCircleRef = useRef<HTMLImageElement | null>(null);
  const binanceRef = useRef<HTMLImageElement | null>(null);
  const mapRef = useRef<HTMLImageElement | null>(null);
  const title1Ref = useRef<HTMLDivElement | null>(null);
  const content1Ref = useRef<HTMLDivElement | null>(null);
  const content2Ref = useRef<HTMLDivElement | null>(null);
  const title2Ref = useRef<HTMLDivElement | null>(null);
  const title3Ref = useRef<HTMLDivElement | null>(null);
  const content3Ref = useRef<HTMLDivElement | null>(null);
  const content4Ref = useRef<HTMLDivElement | null>(null);
  const picBoxRef = useRef<HTMLDivElement | null>(null);
  const pic1Ref = useRef<HTMLDivElement | null>(null);
  const pic2Ref = useRef<HTMLDivElement | null>(null);
  const pic3Ref = useRef<HTMLDivElement | null>(null);
  const pic4Ref = useRef<HTMLDivElement | null>(null);
  const pic5Ref = useRef<HTMLDivElement | null>(null);
  const pic6Ref = useRef<HTMLDivElement | null>(null);
  const pic7Ref = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);
      const paths = document.querySelectorAll(".darwin-logo path");
      const originalColors = Array.from(paths).map((path) =>
        path.getAttribute("fill")
      );

      const container = containerRef.current;
      const blackContainer = blackContainerRef.current;
      const blackCard = blackCardRef.current;
      const cardTop = cardTopRef.current;
      const cardBottom = cardBottomRef.current;
      const cardCircle = cardCircleRef.current;
      const title1 = title1Ref.current;
      const content1 = content1Ref.current;
      const orangeCard = orangeCardRef.current;
      const silverCard = silverCardRef.current;
      const phoneBox = phoneBoxRef.current;
      const phoneCx1 = phoneCx1Ref.current;
      const phoneCx2 = phoneCx2Ref.current;
      const content2 = content2Ref.current;
      const title2 = title2Ref.current;
      const title3 = title3Ref.current;
      const content3 = content3Ref.current;
      const content4 = content4Ref.current;
      const binance = binanceRef.current;
      const picBox = picBoxRef.current;
      const pic1 = pic1Ref.current;
      const pic2 = pic2Ref.current;
      const pic3 = pic3Ref.current;
      const pic4 = pic4Ref.current;
      const pic5 = pic5Ref.current;
      const pic6 = pic6Ref.current;
      const pic7 = pic7Ref.current;
      const maps = mapRef.current;
      if (!container || !blackContainer) return;
      gsap
        .timeline({
          scrollTrigger: {
            trigger: container,
            start: "top top",
            end: "+=3500",
            pin: true,
            scrub: true,
            // markers: true,
            onEnter: () => {
              paths.forEach((el, index) => {
                gsap.to(el, {
                  fill: originalColors[index] ?? "",
                  duration: 1,
                });
              });
              gsap.to(".header", {
                color: "#121212",
                duration: 1,
              });
            },
            onLeaveBack: () => {
              paths.forEach((el) => {
                gsap.to(el, {
                  fill: "#ffffff",
                  duration: 1,
                });
              });
              gsap.to(".header", {
                color: "#ffffff",
                duration: 1,
              });
            },
          },
        })
        .to(
          blackCard,
          {
            rotate: 2,
            x: -210,
            y: 50,
            duration: 4,
          },
          1
        )
        .to(
          orangeCard,
          {
            rotate: 34,
            x: 200,
            y: -80,
            zIndex: 0,
            duration: 4,
          },
          1
        )
        .to(
          silverCard,
          {
            rotate: -43,
            duration: 2,
          },
          1
        )
        .to(blackContainer, { y: 0, duration: 5 }, 5)
        .to(
          blackCard,
          {
            y: 240,
            x: -220,
            rotate: -4,
            scale: 0.9,
            duration: 4,
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
          9
        )
        .to(
          ".header",
          {
            color: "#ffffff",
            duration: 1,
          },
          9
        )
        .to(title1, { y: 0, opacity: 1, duration: 2 }, 9)
        .to(content1, { y: 0, opacity: 1, duration: 2 }, 9)
        .to(
          cardTop,
          {
            opacity: 0,
            y: -200,
            duration: 2,
          },
          12
        )
        .to(
          cardBottom,
          {
            opacity: 0,
            y: -200,
            duration: 2,
          },
          12
        )
        .to(content1, { y: -200, opacity: 0, duration: 2 }, 13)
        .to(
          blackCard,
          {
            rotate: 0,
            y: 230,
            x: -200,
            scale: 0.68,
            duration: 3,
          },
          13
        )
        .to(
          phoneBox,
          {
            y: 0,
            duration: 3,
          },
          13
        )
        .to(
          content2,
          {
            opacity: 1,
            duration: 3,
            y: 0,
          },
          14
        )
        .to(
          phoneCx1,
          {
            opacity: 0,
            duration: 3,
          },
          18
        )

        .to(
          blackCard,
          {
            opacity: 0,
            duration: 3,
          },
          18
        )
        .to(
          phoneCx2,
          {
            opacity: 1,
            duration: 3,
          },
          18
        )
        .to(title1, { y: -100, opacity: 0, duration: 3 }, 18)
        .to(content2, { y: -100, opacity: 0, duration: 3 }, 18)
        .to(cardCircle, { y: -100, opacity: 0, duration: 3 }, 18)
        .to(title2, { opacity: 1, duration: 2 }, 21)
        .to(content3, { y: 0, opacity: 1, duration: 3 }, 21)
        .to(binance, { y: 0, opacity: 1, duration: 3 }, 21)
        .to(title2, { opacity: 0, duration: 2 }, 26)
        .to(title3, { y: 0, opacity: 1, duration: 2 }, 26)
        .to(binance, { y: -100, opacity: 0, duration: 2 }, 26)
        .to(content3, { y: -100, opacity: 0, duration: 2 }, 26)
        .to(content4, { y: 0, opacity: 1, duration: 2 }, 26)
        .to(phoneBox, { y: "100%", duration: 3 }, 26)
        .to(picBox, { opacity: 1, duration: 2 }, 27)
        .to(maps, { opacity: 1, y: 0, duration: 2 }, 27)
        .to(pic1, { x: -200, y: -100, duration: 2 }, 28)
        .to(pic2, { rotate: -15, duration: 2 }, 28)
        .to(pic3, { x: 170, y: -100, duration: 2 }, 28)
        .to(pic4, { rotate: 17, y: -320, duration: 2 }, 28)
        .to(pic5, { rotate: -10, x: -240, y: 200, duration: 2 }, 28)
        .to(pic6, { rotate: 16, y: 300, duration: 2 }, 28)
        .to(pic7, { x: 180, y: 180, duration: 2 }, 28)
        .add(() => {}, "+=5");
    },
    {
      // scope: containerRef
    }
  );

  useEffect(() => {
    setTimeout(() => {
      // window.scrollTo({ top: 0 });
    }, 0);
  }, []);
  return (
    <div ref={containerRef} className=" w-full h-screen relative min-h-[760px]">
      <div
        ref={blackContainerRef}
        className="absolute translate-y-full bottom-0 left-0 right-0 h-screen bg-[#202020] overflow-hidden flex items-end justify-center pb-[100px] z-20"
      >
        <div className="relative w-[556px] h-[394px] z-[25]">
          <div
            ref={title1Ref}
            className="text-[39px] font-semibold text-white absolute -left-[320px] -top-[200px] w-[476px] translate-y-full opacity-0"
          >
            Double Rewards on Every Single Swipe
          </div>
          <div
            ref={title2Ref}
            className="text-[39px] leading-[47px] font-semibold text-white absolute -left-[320px] -top-[200px] w-[358px]  opacity-0"
          >
            THE FIRST CARD POWERED BY{" "}
            <span className="text-[#ff870f]">BNB CHAIN</span>
          </div>

          <div
            ref={title3Ref}
            className="text-[39px] leading-[47px] font-semibold text-white absolute -left-[320px] -top-[200px] w-[463px] translate-y-1/3 opacity-0"
          >
            BORDERLESS SPENDING, LIMITLESS REWARDS
          </div>

          <Image
            ref={cardTopRef}
            src="/images/card-top.png"
            alt=""
            width={520}
            height={220}
            className="absolute top-0 right-0"
          ></Image>
          <Image
            ref={cardBottomRef}
            src="/images/card-bottom.png"
            alt=""
            width={520}
            height={220}
            className="absolute bottom-0 left-0 z-50"
          ></Image>
          <Image
            ref={cardCircleRef}
            src="/images/circle.png"
            width={532}
            height={418}
            className="absolute bottom-8 left-[82px]"
            alt=""
          ></Image>
          <Image
            ref={binanceRef}
            src="/images/binance.png"
            width={356}
            height={419}
            className="absolute bottom-[80px] left-[230px] opacity-0 translate-y-1/2"
            alt=""
          ></Image>
          <div
            ref={mapRef}
            className="absolute -bottom-[100px] left-1/2 -translate-x-1/2 w-[735px] h-[585px] opacity-0 translate-y-1/3"
          >
            <Image src="/images/map.png" fill alt=""></Image>
          </div>
          <div
            ref={picBoxRef}
            className="absolute bottom-[350px] left-[200px] opacity-0"
          >
            <div ref={pic1Ref} className="absolute w-[155px] h-[166px]">
              <Image src="/images/pic1.jpg" fill alt=""></Image>
            </div>
            <div
              ref={pic2Ref}
              className="absolute w-[162px] h-[178px] -left-1 -top-1 "
            >
              <Image src="/images/pic2.jpg" fill alt=""></Image>
            </div>
            <div
              ref={pic3Ref}
              className="absolute w-[185px] h-[189px] -left-4 -top-2 "
            >
              <Image src="/images/pic3.jpg" fill alt=""></Image>
            </div>
            <div
              ref={pic4Ref}
              className="absolute w-[176px] h-[176px] -left-3 -top-1"
            >
              <Image src="/images/pic4.jpg" fill alt=""></Image>
            </div>
            <div
              ref={pic5Ref}
              className="absolute w-[200px] h-[200px] -left-6 -top-4"
            >
              <Image src="/images/pic5.jpg" fill alt=""></Image>
            </div>
            <div
              ref={pic6Ref}
              className="absolute w-[179px] h-[196px] -left-3.5 -top-3.5 "
            >
              <Image src="/images/pic6.jpg" fill alt=""></Image>
            </div>
            <div
              ref={pic7Ref}
              className="absolute w-[169px] h-[173px] -left-2.5 -top-0.5 "
            >
              <Image src="/images/pic7.jpg" fill alt=""></Image>
            </div>
          </div>
          <div
            ref={content1Ref}
            className="absolute -right-[325px] top-[50px] translate-y-full opacity-0 "
          >
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
          <div
            ref={content2Ref}
            className="absolute -right-[325px] bottom-[180px] translate-y-[150%] opacity-0 w-[374px] "
          >
            <div className="text-white text-2xl font-medium mb-4">
              Earn Both Ways: $REAL on Spending + $GRID on Savings
            </div>
            <div className="text-[#c9c8c8] text-sm leading-6 list-disc list-inside">
              Turn Every Financial Move into a Wealth-Building Moment. The REAL
              Card Uniquely Rewards You Twice - On Spending AND Savings:
            </div>
          </div>
          <div
            ref={content3Ref}
            className="absolute -right-[325px] bottom-[0px] translate-y-[80%] opacity-0 w-[352px] "
          >
            <div className="text-white text-2xl font-medium mb-4">
              Where REAL Finance Meets BNB Chain
            </div>
            <div className="text-[#c9c8c8] text-sm leading-6 list-disc list-inside mb-10">
              REAL Card links world’s largest web3 ecosystem to your everyday
              spending. Each transaction unlocks rewards in $REAL and $GRID
              tokens, immediately accessible in your BNB Chain wallet for
              trading, staking, or yield farming.
            </div>
            <ul className="text-[#c9c8c8] text-sm">
              <li>
                <span className="w-6 inline-block mr-1 text-[#ff764a]">01</span>
                Instant Settlement on BNB Chain
              </li>
              <li className="mt-4">
                <span className="w-6 inline-block mr-1 text-[#ff764a]">02</span>{" "}
                Zero Gas Fee Rewards
              </li>
              <li className="mt-4">
                <span className="w-6 inline-block mr-1 text-[#ff764a]">03</span>{" "}
                Direct Access to BNB DeFi
              </li>
            </ul>
          </div>
          <div
            ref={content4Ref}
            className="absolute -right-[325px] bottom-[53px] translate-y-[50%] opacity-0 w-[339px]"
          >
            <div className="text-white text-2xl font-medium mb-4">
              Your Global Payment Power, Amplified by Crypto
            </div>
            <div className="text-[#c9c8c8] text-sm leading-6 list-disc list-inside mb-10">
              Achieve financial freedom across 200+ countries and 60+ million
              merchants worldwide.
            </div>
            <ul className="text-[#c9c8c8] text-sm">
              <li>
                <span className="w-6 inline-block mr-1 text-[#ff764a]">01</span>
                Low Transaction Fees
              </li>
              <li className="mt-4">
                <span className="w-6 inline-block mr-1 text-[#ff764a]">02</span>{" "}
                Real-Time Currency Conversion
              </li>
              <li className="mt-4">
                <span className="w-6 inline-block mr-1 text-[#ff764a]">03</span>{" "}
                Global Acceptance
              </li>
              <li className="mt-4">
                <span className="w-6 inline-block mr-1 text-[#ff764a]">03</span>{" "}
                Dual Crypto Rewards Everywhere
              </li>
            </ul>
          </div>
        </div>
        <div
          ref={phoneBoxRef}
          className="phone-box z-40 w-[397px] h-[772px] absolute -bottom-[200px] left-1/2 -translate-x-1/2 translate-y-full"
        >
          <div
            ref={phoneCx1Ref}
            className="absolute left-[8%] w-[84%] h-[92%] top-[4%] rounded-[45px] overflow-hidden"
          >
            <Image src="/images/phone1.jpg" fill alt="phone1"></Image>
          </div>
          <div
            ref={phoneCx2Ref}
            className="absolute left-[8%] w-[84%] h-[92%] top-[4%] rounded-[45px] overflow-hidden opacity-0"
          >
            <Image src="/images/phone2.jpg" fill alt="phone2"></Image>
          </div>
        </div>
        <Image
          src="/images/noise.png"
          fill
          alt=""
          className="mix-blend-soft-light absolute top-0 bottom-0 left-0 right-0 "
        ></Image>
      </div>
      <div className="w-[1216px] mx-auto relative h-full">
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
          ref={blackCardRef}
          className="absolute bottom-[360px] right-[141px] w-[400px] h-[255px] origin-top-left rotate-[32deg] rounded-2xl z-30"
        >
          <Image src="/images/blackcard.png" fill alt="BlackCard"></Image>
        </div>
        <div
          ref={orangeCardRef}
          className="absolute right-[278px] bottom-[380px] w-[375px] h-[236px] origin-top-left rotate-[49deg] rounded-2xl border border-[#ffddc9] z-10 scale-y-95 skew-x-[18deg] translate-x-[390px] translate-y-[64px]"
        >
          <Image src="/images/orangecard.png" fill alt="OrangeCard"></Image>
        </div>
        <div
          ref={silverCardRef}
          className="absolute -right-[90px] bottom-0 w-[400px] h-[255px] origin-top-left rotate-[-32deg] shadow border border-white rounded-2xl scale-y-95 skew-x-[-18deg]"
        >
          <Image src="/images/silvercard.png" fill alt="SilverCard"></Image>
        </div>
      </div>
    </div>
  );
};

export default Section2;
