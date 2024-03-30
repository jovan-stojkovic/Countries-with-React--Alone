import { useEffect, useState, useContext } from "react";
import ThemeContext from "../Helpers/ThemeContext";

const BackToTopButton = () => {
  const { theme } = useContext(ThemeContext);
  const [backToTopButton, setBackToTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
    
      {backToTopButton && (
        <button onClick={scrollUp} className={`to-the-top-button ${theme}`}>
          <div className="to-the-top-popup">To the Top</div>
          <img
            src="https://www.iconbolt.com/iconsets/heroicons-outline/arrow-up-circle.svg"
            alt="top"
          />
        </button>
      )}
    </>
  );
};

export default BackToTopButton;
