import { useEffect, useState } from "react";
import { ArrowUpIcon } from "lucide-react";

export const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-2 right-2 sm:bottom-6 sm:right-6 p-1 bg-BrandPurple text-white rounded-full shadow-md transform transition duration-500 hover:scale-105 z-10 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <ArrowUpIcon width={25} />
    </button>
  );
};
