import Slider from "react-slick";
import Images from "../../themes";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { heroSectionCarouselData } from "../../lib/homePageData";
import { Button } from "./button";

const CustomArrow = (props: any) => {
  const { className, style, onClick, direction } = props;
  return (
    <div
      className={className}
      onClick={onClick}
      style={{
        ...style,
        display: "block",
        borderRadius: "100%",
        background: "#6243E1",
        opacity: 0.9,
        zIndex: 10,
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
        [direction === "left" ? "left" : "right"]: "-20px",
      }}
    />
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
              <div className="space-y-8 text-start md:w-[535px] sm:ml-1">
                {/* <img
                  src={carousel.title}
                  alt="carousel-title"
                  className="h-32 sm:h-44 object-cover"
                /> */}
                <div className="sm:ml-1">
                  {carousel.titleText?.map((text, index) => (
                    <h1
                      className="text-5xl sm:text-6xl md:text-8xl font-bold bg-gradient-to-r from-[#52E5DC] via-[#FF66FF] to-[#7D67FF] bg-clip-text text-transparent leading-none tracking-[-1px]"
                      key={index}
                    >
                      {text}
                    </h1>
                  ))}
                </div>

                <p className="text-lg sm:text-xl text-ParaGrey sm:ml-1">
                  {carousel.description}
                </p>
                <Button
                  className="bg-BrandPurple text-white px-8 py-6 rounded-[10px] flex items-center gap-4 z-10 ml-5 sm:ml-1 text-md"
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
                  className={`object-cover relative ${carousel?.className}`}
                />
                {carousel?.imageStand ? (
                  <img
                    src={carousel.imageStand}
                    alt={carousel.title}
                    className="w-[280px] sm:w-[300px] absolute -bottom-2"
                  />
                ) : null}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};
