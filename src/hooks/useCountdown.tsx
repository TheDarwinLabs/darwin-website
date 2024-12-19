import { useState, useEffect, useCallback } from "react";

interface UseCountdownOptions {
  initialTime: number;
  onComplete?: () => void;
}

const useCountdown = ({ initialTime, onComplete }: UseCountdownOptions) => {
  const [timeLeft, setTimeLeft] = useState<number>(0);

  const startCountdown = useCallback(() => {
    setTimeLeft(initialTime);
  }, [initialTime]);

  const stopCountdown = useCallback(() => {
    setTimeLeft(0);
  }, []);

  useEffect(() => {
    if (timeLeft <= 0) {
      if (timeLeft === 0 && onComplete) onComplete();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, onComplete]);

  return { timeLeft, startCountdown, stopCountdown };
};

export default useCountdown;
