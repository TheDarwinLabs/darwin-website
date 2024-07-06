// hooks/useSmoothProgress.js

import { useCallback, useEffect, useRef, useState } from "react";

interface SmoothProgressOptions {
  duration: number; // 持续时间（秒）
  autoStart?: boolean; // 是否自动开始，默认为 false
  loop?: boolean; // 是否循环倒计时，默认为 false
  onEnd?: () => void; // 倒计时结束时的回调函数
}

const useSmoothProgress = ({
  duration,
  autoStart = false,
  loop = false,
  onEnd = () => {},
}: SmoothProgressOptions) => {
  const startTime = useRef<number | null>(null);
  const [progress, setProgress] = useState(0);
  const [isStart, setIsStart] = useState(autoStart);

  const start = useCallback(() => {
    setIsStart(true);
  }, []);

  const reset = useCallback(() => {
    startTime.current = null;
    start();
  }, [start]);

  useEffect(() => {
    const step = (timestamp: number) => {
      if (!startTime.current) startTime.current = timestamp;
      const elapsed = timestamp - startTime.current;
      setProgress(
        +Math.min(100, (elapsed / (duration * 1000)) * 100).toFixed(2)
      );

      if (elapsed < duration * 1000) {
        requestAnimationFrame(step);
      } else {
        onEnd();
        if (loop) {
          startTime.current = null;
          requestAnimationFrame(step);
        }
      }
    };
    if (isStart) {
      requestAnimationFrame(step);
    }

    return () => {
      setProgress(0);
    };
  }, [duration, isStart, loop, startTime, start, onEnd]);

  return {
    progress,
    isStart,
    start,
    reset,
  };
};

export default useSmoothProgress;
