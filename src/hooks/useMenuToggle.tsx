import { useState, useEffect } from "react";

function useMenuToggle() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const openMenu = () => {
    setScrollPosition(window.scrollY);
    // document.body.style.position = "fixed";
    // document.body.style.top = `-${window.scrollY}px`;
    setIsMenuOpen(true);
  };

  const closeMenu = () => {
    // document.body.style.position = "";
    // document.body.style.top = "";
    window.scrollTo(0, scrollPosition);
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    if (isMenuOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("body-locked");
    } else {
      document.body.classList.remove("body-locked");
    }
    return () => {
      document.body.classList.remove("body-locked");
    };
  }, [isMenuOpen]);

  return { isMenuOpen, openMenu, closeMenu, toggleMenu };
}

export default useMenuToggle;
