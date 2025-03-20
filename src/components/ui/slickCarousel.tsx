import Slider from "react-slick";
import Images from "../../themes";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { heroSectionCarouselData } from "../../lib/homePageData";
import { Button } from "./button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CustomArrow = (props: any) => {
  const { onClick, direction } = props;

  return (
    <div
      className={`absolute sm:top-1/2 top-auto bottom-0 sm:-translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center bg-[#C6B5FF] shadow-lg cursor-pointer hover:bg-[#B5A1FF] transition ${
        direction === "left"
          ? "left-[-15px] sm:left-[-45px] lg:left-[-60px]"
          : "right-[-15px] sm:right-[-45px] lg:right-[-60px]"
      }`}
      onClick={onClick}
      style={{
        boxShadow: "0px 4px 8px rgba(198, 181, 255, 0.5)",
      }}
    >
      {direction === "left" ? (
        <ChevronLeft size={22} color="white" />
      ) : (
        <ChevronRight size={22} color="white" />
      )}
    </div>
  );
};

const settings = {
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  prevArrow: <CustomArrow direction="left" />,
  nextArrow: <CustomArrow direction="right" />,
};

type CarouselProps = {
  handleOpenModal: () => void;
};

export const SlickCarousel = ({ handleOpenModal }: CarouselProps) => {
  return (
    <section className="relative px-8 sm:px-20 bg-heroBackground">
      <div
        className="absolute inset-0 bg-cover bg-no-repeat bg-center opacity-40"
        style={{ backgroundImage: `url(${Images.carouselBackground})` }}
      ></div>
      <div className="section-container pt-8 sm:pt-16 pb-20">
        <Slider {...settings}>
          {heroSectionCarouselData?.map((carousel, index) => (
            <div
              key={index}
              className="!flex !flex-col lg:!flex-row gap-16  justify-between items-center"
            >
              <div className="space-y-8 text-start md:w-[535px] ml-1 sm:ml-1">
                <div className="sm:ml-1">
                  <h1 className="text-5xl md:text-8xl font-bold bg-gradient-to-r from-[#52E5DC] via-[#FF66FF] to-[#7D67FF] bg-clip-text text-transparent leading-none">
                    {carousel.title}
                  </h1>
                </div>

                <p className="text-lg sm:text-xl md:text-2xl text-ParaGrey sm:ml-1">
                  {carousel.description}
                </p>
                <Button
                  className="bg-BrandPurple text-white px-8 py-6 rounded-[10px] hidden md:flex items-center gap-4 z-10 ml-5 sm:ml-1 text-md"
                  onClick={handleOpenModal}
                >
                  {carousel.buttonText}
                  <span>
                    <img src={`${Images.rightArrow}`} alt="arrow" />
                  </span>
                </Button>
              </div>
              <div className="!mx-auto relative">
                <img
                  src={carousel.heroImageUrl}
                  alt={carousel.title}
                  className={`object-cover relative ${carousel?.className} animate-float`}
                />

                <Button
                  className="md:hidden bg-BrandPurple text-white px-8 py-6 rounded-[10px] flex items-center gap-4 z-10 ml-10 text-md mx-auto"
                  onClick={handleOpenModal}
                >
                  {carousel.buttonText}
                  <span>
                    <img src={`${Images.rightArrow}`} alt="arrow" />
                  </span>
                </Button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};
