// useBodyScrollLock.ts
import { useEffect } from "react";

const useBodyScrollLock = (isLocked: boolean) => {
  useEffect(() => {
    if (isLocked) {
      // document.body.style.overflow = "hidden";
      document.body.classList.add("body-locked");
    } else {
      // document.body.style.overflow = "";
      document.body.classList.remove("body-locked");
    }
    return () => {
      // document.body.style.overflow = "";
      document.body.classList.remove("body-locked");
    };
  }, [isLocked]);
};

export default useBodyScrollLock;
