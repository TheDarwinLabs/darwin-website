import { useState, useEffect, useRef, useCallback } from "react";

interface CountdownHook {
  seconds: number;
  isFinished: boolean;
  isStarted: boolean;
  start: () => void;
  reset: () => void;
  restart: () => void;
}

interface UseCountdownOptions {
  autoStart?: boolean;
  loop?: boolean;
  onEnd?: () => void;
}

const useCountdown = (
  initialSeconds: number,
  { autoStart = true, loop = false, onEnd }: UseCountdownOptions = {}
): CountdownHook => {
  const [seconds, setSeconds] = useState<number>(initialSeconds);
  const [isFinished, setIsFinished] = useState<boolean>(false);
  const [isActive, setIsActive] = useState<boolean>(autoStart);
  const [isStarted, setIsStarted] = useState<boolean>(autoStart);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const start = useCallback(() => {
    setIsActive(true);
    setIsStarted(true);
    setIsFinished(false);
  }, []);

  const reset = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    setSeconds(initialSeconds);
    setIsFinished(false);
    setIsActive(false);
    setIsStarted(false);
  }, [initialSeconds]);

  const restart = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    setSeconds(initialSeconds);
    setIsFinished(false);
    setIsActive(true);
    setIsStarted(true);
  }, [initialSeconds]);

  useEffect(() => {
    if (isActive && seconds > 0) {
      timerRef.current = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
    } else if (seconds <= 0) {
      setIsFinished(true);
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
      if (loop) {
        restart();
      }
      if (onEnd) {
        onEnd();
      }
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isActive, seconds, loop, restart, onEnd]);

  return { seconds, isFinished, isStarted, start, reset, restart };
};

export default useCountdown;
