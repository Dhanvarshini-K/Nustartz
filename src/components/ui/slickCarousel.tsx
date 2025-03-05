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
                <img
                  src={carousel.title}
                  alt="carousel-title"
                  className="h-44 object-cover"
                />

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
