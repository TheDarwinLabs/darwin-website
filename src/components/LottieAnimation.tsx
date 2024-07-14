import { useEffect, useRef } from "react";
import lottie from "lottie-web";

interface LottieAnimationProps {
  animationData: any;
  loop?: boolean;
  autoplay?: boolean;
}

const LottieAnimation: React.FC<LottieAnimationProps> = ({
  animationData,
  loop = true,
  autoplay = true,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const animationInstance = lottie.loadAnimation({
        container: containerRef.current,
        renderer: "svg",
        loop: loop,
        autoplay: autoplay,
        animationData: animationData,
      });

      return () => {
        animationInstance.destroy();
      };
    }
  }, [animationData, loop, autoplay]);

  return <div ref={containerRef} />;
};

export default LottieAnimation;
