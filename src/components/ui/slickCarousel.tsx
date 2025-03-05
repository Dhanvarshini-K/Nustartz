import Slider from "react-slick";
import Images from "../../themes";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { heroSectionCarouselData } from "../../lib/homePageData";
import { Button } from "./button";
import { ArrowRight } from "lucide-react";

const settings = {
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
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
                {/* <img src={carousel.title} alt="" className="object-cover" /> */}
                <h1 className="text-6xl sm:text-8xl font-bold bg-gradient-to-r from-[rgba(82,229,220,0.8)] via-[rgba(255,102,255,0.8)] to-[rgba(125,103,255,0.8)] bg-clip-text text-transparent leading-none">
                  {carousel.titleText}
                </h1>

                <p className="text-lg sm:text-xl text-ParaGrey">
                  {carousel.description}
                </p>
                <Button
                  className="bg-BrandPurple text-white px-8 py-6 rounded-[10px] flex items-center gap-4 z-10 ml-5 sm:ml-1"
                  onClick={handleOpenModal}
                >
                  {carousel.buttonText}
                  <ArrowRight className="h-6 w-6" />
                </Button>
              </div>
              <div className="!mx-auto relative hidden md:block">
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
