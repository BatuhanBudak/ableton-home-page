import { useEffect, useState } from "react";
import styles from "../styles/Navbar.module.css";

export default function useScrollPos() {
  const [lastScrollY, setLastScrollY] = useState<number>(0);
  const [scrollMove, setScrollMove] = useState<string>("");
  const [scrollClass, setScrollClass] = useState<string>("");
  const headerHeight = 128;

  const checkScrollClass = (): void => {
    if (scrollMove === "") {
      setScrollClass("");
    } else if (scrollMove === "up") {
      setScrollClass(styles.scrollUp);
    } else if (scrollMove === "down") {
      setScrollClass(styles.scrollDown);
    }
  };

  useEffect(() => {
    function handleScroll(): void {
      let currentScroll = window.scrollY;
      

      if (currentScroll <= headerHeight) {
        setScrollMove("up");
        checkScrollClass();
        return;
      }
      //Scroll Down
      if (currentScroll > lastScrollY) {
        setScrollMove("down");
        checkScrollClass();
      }
      //Scroll Up
      else if (currentScroll < lastScrollY) {
        setScrollMove("up");
        checkScrollClass();
      }
      setLastScrollY(currentScroll);
    }
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return scrollClass;
}
