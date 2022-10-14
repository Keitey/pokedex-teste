import { useState, useEffect } from "react";
import { FiArrowUpCircle } from "react-icons/fi";
import * as C from "./styles";

const ScrollToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <C.Topo>
      {showTopBtn && (
        <FiArrowUpCircle
          className="icon-position icon-style"
          onClick={goToTop}
        />
      )}
    </C.Topo>
  );
};

export default ScrollToTop;
