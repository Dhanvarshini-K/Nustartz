import { useNavigate } from "react-router-dom";
import { Button } from "./button";
import IMAGES from "../../themes";

export const NotFoundPage = () => {
  const navigate = useNavigate();
  const navigateToHomePage = () => {
    navigate("/");
  };
  return (
    <div className="bg-custom-gradient flex flex-col justify-center items-center gap-4 h-[100vh]">
      <h1 className="text-8xl font-bold">404</h1>
      <p className="text-Gray text-lg">Page Not Found</p>
      <Button
        className="bg-BrandPurple text-white transition duration-200 hover:scale-105"
        onClick={navigateToHomePage}
      >
        <span>
          <img
            src={`${IMAGES.rightArrow}`}
            alt="arrow"
            className="rotate-180"
          />
        </span>
        Back to home
      </Button>
    </div>
  );
};
