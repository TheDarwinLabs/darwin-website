// InViewComponent.tsx
import React, { ReactNode, useEffect, useRef } from "react";
import { motion, useAnimation, Variants, useInView } from "framer-motion";

type MarginType =
  | `${number}px ${number}px ${number}px ${number}px`
  | `${number}px ${number}px`;

interface InViewComponentProps {
  children: ReactNode;
  animationVariants?: Variants;
  once?: boolean;
  threshold?: number;
  rootMargin?: MarginType;
  className?: string;
}

const defaultAnimationVariants: Variants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      type: "cubic-bezier(0.17, 0.55, 0.55, 1)",
      // delay: 0.5,
    },
  },
};

// style={{
//   transform: isInView ? "none" : "translateY(100px)",
//   opacity: isInView ? 1 : 0,
//   transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
// }}

const InViewComponent: React.FC<InViewComponentProps> = ({
  children,
  animationVariants = defaultAnimationVariants,
  once = true,
  threshold = 0.1,
  rootMargin = "-10px" as MarginType,
  className = "",
}) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, {
    once,
    margin: rootMargin,
    amount: threshold,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={animationVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default InViewComponent;
