import React, { JSX, useState } from "react";
import { ArrowRight, X } from "lucide-react";
import { Button } from "../../components/ui/button";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "../../components/ui/carousel";
import {
  aboutSectionData,
  companyDeliveryStepsData,
  HomePageSectionsEnum,
  ourPartners,
  startupPortfolioData,
  // testimonialsData,
  whoWeAreSectionData,
} from "../../lib/homePageData";
import { StartupPitchDeckForm } from "../../components/ui/startupPitchDeckForm";
import Marquee from "react-fast-marquee";
import { SlickCarousel } from "../../components/ui/slickCarousel";

const Home = (): JSX.Element => {
  const [openModal, setOpenModal] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const showYouTubeVideo = () => {
    setShowVideo(true);
  };
  return (
    <main>
      {/* Hero Section */}
      <SlickCarousel handleOpenModal={handleOpenModal} />
      <div
        className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 transition-opacity duration-500 ${
          openModal ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <StartupPitchDeckForm
          handleCloseModal={handleCloseModal}
          openModal={openModal}
        />
      </div>

      {/* How We Deliver Section */}
      <section className="py-10 sm:py-16 px-4 sm:px-20 bg-GhostWhite">
        <h2 className="text-5xl sm:text-6xl font-bold text-center text-DarkGrey mb-5 sm:mb-10 tracking-[-2px]">
          {HomePageSectionsEnum.howWeDeliver}
        </h2>

        <div className="space-y-10 sm:space-y-20">
          {companyDeliveryStepsData.map((step, index) => (
            <div key={index}>
              {index % 2 === 0 ? (
                <div className="section-container flex flex-wrap lg:flex-nowrap gap-16">
                  <div className="space-y-8 w-[100%]">
                    <div className="flex">
                      <img src={step.titleImage} alt={step.titleImage} />
                    </div>
                    <p className="text-lg sm:text-xl md:text-3xl text-ParaGrey md:w-[543px]">
                      {step.description}
                    </p>
                  </div>
                  <div className="w-[100%] flex justify-center lg:justify-end">
                    <img
                      src={step.image}
                      alt={step.image}
                      className="w-400px md:w-[420px]"
                    />
                  </div>
                </div>
              ) : (
                <div className="section-container flex flex-wrap lg:flex-nowrap gap-16">
                  <div className="m-auto lg:order-first order-last  w-[100%] flex justify-center lg:justify-start">
                    <img
                      src={step.image}
                      alt={step.image}
                      className="w-400px md:w-[420px]"
                    />
                  </div>
                  <div className="space-y-8  w-[100%]">
                    <div className="flex">
                      <img src={step.titleImage} alt={step.titleImage} />
                    </div>
                    <p className="text-lg sm:text-xl md:text-3xl text-ParaGrey md:w-[543px]">
                      {step.description}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-10 sm:py-16 px-4">
        <div className="section-container sm:text-center">
          <h2 className="text-5xl sm:text-6xl font-bold text-DarkGrey mb-5 sm:mb-10 tracking-[-1px]">
            {HomePageSectionsEnum.whoWeAre}
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-BrandBlueHeavy mb-10 max-w-4xl mx-auto">
            {whoWeAreSectionData.description}
          </p>

          <div className="flex gap-10 sm:gap-20 md:gap-50 mb-10 sm:mb-16 justify-center content-center flex-wrap">
            {aboutSectionData.map((value) => (
              <div
                key={value.title}
                className="flex flex-col items-center justify-center"
              >
                <img
                  src={value.image}
                  alt={value.title}
                  className="w-15 h-15 sm:w-24 sm:h-24 transform transition duration-500 hover:scale-110 mb-2"
                />
                <h3 className="text-xl sm:text-3xl font-normal ml-3">
                  {value.title}
                </h3>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <Button
              className="bg-BrandPurple text-white px-8 py-6 rounded-[10px] flex items-center gap-4 transform transition duration-300 hover:scale-105"
              onClick={showYouTubeVideo}
            >
              {whoWeAreSectionData.buttonText}
              <ArrowRight className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </section>

      <div
        className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 transition-opacity duration-500 ${
          showVideo ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="relative">
          <button
            onClick={() => setShowVideo(false)}
            className="absolute end-0 -top-6"
          >
            <X className="w-8 h-7 text-white" />
          </button>
          <iframe
            src="https://www.youtube.com/embed/IfM1WIyIDGc?si=AvyGQ8eljShlJ34z"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="w-[300px] h-[300px] sm:w-[600px] sm:h-[400px] rounded-xl relative"
          ></iframe>
        </div>
      </div>

      {/* Testimonials Section */}
      {/* <section className="bg-GhostWhite py-10 sm:py-16 px-10 md:px-24">
        <div className="section-container">
          <h2 className="text-5xl sm:text-6xl font-bold text-paragray text-center mb-8">
            {HomePageSectionsEnum.testimonials}
          </h2>

          <Carousel>
            <CarouselContent>
              {testimonialsData.map((item, index) => (
                <CarouselItem key={index}>
                  <Card className="bg-DarkGrey text-white rounded-[20px] overflow-hidden">
                    <CardContent className="p-0 flex flex-wrap md:flex-nowrap">
                      <div className="relative">
                        <img
                          src={item.image}
                          alt="Testimonial"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black to-transparent" />
                      </div>
                      <div className="p-3 md:p-10 space-y-8">
                        <p className="text-lg sm:text-2xl text-white  md:w-[430px]">
                          {item.description}
                        </p>
                        <div className="p-3">
                          <p className="text-3xl sm:text-4xl">{item.name}</p>
                          <p className="text-3xl sm:text-4xl">
                            {item.projectName}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            {testimonialsData.length > 1 ? (
              <div className="mt-4 flex flex-row-reverse">
                <CarouselPrevious />
                <CarouselNext />
              </div>
            ) : null}
          </Carousel>
        </div>
      </section> */}

      {/* Portfolio Section */}
      <section className="pt-10 sm:pt-16">
        <div className="section-container text-center">
          <h2 className="text-5xl sm:text-6xl font-bold text-DarkGrey mb-5">
            {HomePageSectionsEnum.startupPortFolio}
          </h2>
          <Marquee>
            <div className="flex justify-center items-center gap-10 sm:gap-20">
              {startupPortfolioData.map((project, index) => (
                <img
                  src={project}
                  alt="Startup-Portfolio-Projects"
                  className="sm:w-[200px] w-[180px] first:ml-10 sm:first:ml-20"
                  key={index}
                />
              ))}
            </div>
          </Marquee>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-10 sm:py-16">
        <div className="section-container text-center">
          <h2 className="text-5xl sm:text-6xl font-bold text-DarkGrey mb-5">
            {HomePageSectionsEnum.partners}
          </h2>
          <Marquee direction="right">
            <div className="flex justify-center items-center gap-10 sm:gap-20">
              {ourPartners.map((partner, index) => (
                <img
                  src={partner}
                  alt="Our-Partners"
                  className="sm:w-[200px] w-[180px] first:ml-10 sm:first:ml-20"
                  key={index}
                />
              ))}
            </div>
          </Marquee>
        </div>
      </section>
    </main>
  );
};

export default Home;
