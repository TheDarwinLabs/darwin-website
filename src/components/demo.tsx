import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Section = () => {
  const sectionRef = useRef(null);
  const firstDivRef = useRef(null);
  const secondDivRef = useRef(null);
  const thirdDivRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=400%", // 调整滚动距离
        pin: true,
        scrub: 1,
      },
    });

    // 第二个div浮现并覆盖第一个div
    tl.fromTo(
      secondDivRef.current,
      { yPercent: 100, opacity: 0 },
      { yPercent: 0, opacity: 1 }
    );

    // 第二个div内的元素动画
    const elements = gsap.utils.toArray(".second-div-element");
    elements.forEach((element, i) => {
      tl.fromTo(
        element,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.5 }
      ).to(element, {
        opacity: 0,
        y: -50,
        duration: 0.5,
      });
    });

    // 第二个div消失，第三个div出现
    tl.to(secondDivRef.current, {
      yPercent: -100,
      opacity: 0,
    }).fromTo(
      thirdDivRef.current,
      { yPercent: 100, opacity: 0 },
      { yPercent: 0, opacity: 1 }
    );
  }, []);

  return (
    <div ref={sectionRef} className="h-screen relative overflow-hidden">
      <div ref={firstDivRef} className="absolute inset-0 bg-blue-500">
        第一个区块
      </div>

      <div ref={secondDivRef} className="absolute inset-0 bg-green-500">
        <div className="second-div-element">元素1</div>
        <div className="second-div-element">元素2</div>
        <div className="second-div-element">元素3</div>
      </div>

      <div ref={thirdDivRef} className="absolute inset-0 bg-red-500">
        第三个区块
      </div>
    </div>
  );
};

export default Section;
