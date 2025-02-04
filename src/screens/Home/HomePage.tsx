import React, { JSX } from "react";
import { ArrowRight, DollarSignIcon, LeafIcon, RocketIcon } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { useNavigate } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../components/ui/carousel";
import {
  aboutSectionData,
  companyDeliveryStepsData,
  heroSectionData,
  HomePageSectionsEnum,
  ourPartners,
  startupPortfolioData,
  testimonialsData,
  whoWeAreSectionData,
} from "../../lib/homePageData";

const Home = (): JSX.Element => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/review");
  };

  const navigateToContactUsPage = () => {
    navigate("/contact-us");
  }
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-heroBackground pt-20 px-10 md:px-24 ">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-16 justify-items-center items-center pt-16 pb-20 ">
          <div className="space-y-8  text-start md:w-[515px]">
            <h1 className="text-8xl font-bold bg-gradient-to-b from-[#52E5DC] via-[#FF66FF] to-[#7D67FF] bg-clip-text text-transparent leading-none">
              {heroSectionData.title}
            </h1>
            <p className="text-xl text-ParaGrey">
              {heroSectionData.description}
            </p>
            <Button className="bg-BrandPurple text-white px-8 py-6 rounded-[10px] flex items-center gap-4" onClick={navigateToContactUsPage}>
              {heroSectionData.buttonText}
              <ArrowRight className="h-6 w-6" />
            </Button>
          </div>

          <div className="relative">
            <img
              src={heroSectionData.heroImageUrl}
              alt="Hero"
              className="md:w-[371px] lg:w-[400px] object-cover"
            />

            <Card className="absolute -left-10 -top-10 sm:top-6 sm:-left-24 lg:top-10 lg:-left-32 md:top-6 md:-left-32  xl:top-18 xl:-left-32 bg-[#90dbf6] border-8 border-white shadow-lg rounded-[30px] w-20 h-20 md:w-28 md:h-28 ">
              <CardContent className="p-1 md:p-5">
                <DollarSignIcon className="h-14 w-14 text-white" />
              </CardContent>
            </Card>

            <Card className="absolute -bottom-10 -left-8 sm:-bottom-10 sm:-left-10 lg:-bottom-10 lg:-left-10 md:-bottom-16 md:-left-14 xl:-bottom-5 xl:-left-10 bg-[#f8a8fe] border-8 border-white shadow-lg rounded-[30px] w-26 h-26 md:w-36 md:h-36">
              <CardContent className="p-1 md:p-5">
                <RocketIcon className="h-20 w-20 text-white" />
              </CardContent>
            </Card>

            <Card className="absolute -top-10 -right-6 sm:-top-10 sm:-right-10 lg:-top-12 lg:-right-10 md:-top-12 md:-right-20 xl:-right-0 xl:-top-10 bg-[#72dfb3] border-8 border-white shadow-lg rounded-[30px] w-26 h-26 md:w-36 md:h-36">
              <CardContent className="p-1 md:p-5">
                <LeafIcon className="h-20 w-20 text-white" />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How We Deliver Section */}

      <section className="py-16 px-10 md:px-24 bg-GhostWhite">
        <h2 className="text-6xl font-bold text-center text-paragray mb-10">
          {HomePageSectionsEnum.howWeDeliver}
        </h2>

        <div className="space-y-10">
          {companyDeliveryStepsData.map((step, index) => (
            <div key={step.title}>
              {index % 2 === 0 ? (
                <div className="section-container grid grid-cols-1 lg:grid-cols-2 gap-16">
                  <div className="space-y-8">
                    <div className="flex">
                      <div className="w-full h-1.5 bg-BrandPurple mt-6" />
                      <h1 className="text-8xl font-medium text-BrandPurple text-end -ml-2">
                        {step.title}
                      </h1>
                    </div>
                    <p className="text-xl md:text-3xl text-ParaGrey md:w-[543px]">
                      {step.description}
                    </p>
                  </div>
                  <div className="m-auto">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-400px md:w-[420px]"
                    />
                  </div>
                </div>
              ) : (
                <div className="section-container grid grid-cols-1 lg:grid-cols-2 gap-16">
                  <div className="m-auto lg:order-first order-last">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-400px md:w-[420px]"
                    />
                  </div>
                  <div className="space-y-8">
                    <div className="flex">
                      <h1 className="text-8xl font-medium text-BrandPurple text-end -mr-2">
                        {step.title}
                      </h1>
                      <div className="w-full h-1.5 bg-BrandPurple mt-14" />
                    </div>
                    <p className="text-xl md:text-3xl text-ParaGrey md:w-[543px]">
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
      <section className="bg-white py-16 px-10">
        <div className="container text-center">
          <h2 className="text-6xl font-bold text-paragray mb-8">
            {HomePageSectionsEnum.whoWeAre}
          </h2>
          <p className="text-xl md:text-2xl text-BrandBlueHeavy mb-16 max-w-4xl mx-auto">
            {whoWeAreSectionData.description}
          </p>

          <div className="flex gap-20 md:gap-50 mb-16 justify-center content-center flex-wrap">
            {aboutSectionData.map((value) => (
              <div key={value.title} className="flex flex-col items-center ">
                <img
                  src={value.image}
                  alt={value.title}
                  className="w-24 h-24 mb-6"
                />
                <h3 className="text-3xl font-normal">{value.title}</h3>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <Button
              className="bg-BrandPurple text-white px-8 py-6 rounded-[10px] flex items-center gap-4"
              onClick={handleClick}
            >
              {whoWeAreSectionData.buttonText}
              <ArrowRight className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-GhostWhite py-16 px-10 md:px-24">
        <div className="section-container">
          <h2 className="text-6xl font-bold text-paragray text-center mb-8">
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
                        <p className="text-2xl text-white  md:w-[430px]">
                          {item.description}
                        </p>
                        <div>
                          <p className="text-4xl">{item.name}</p>
                          <p className="text-4xl">{item.projectName}</p>
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
      </section>

      {/* Portfolio Section */}
      <section className="py-16">
        <div className="section-container text-center">
          <h2 className="text-6xl font-bold text-ParaGrey mb-10">
            {HomePageSectionsEnum.startupPortFolio}
          </h2>
          <div className="flex justify-center items-center gap-12 flex-wrap">
            {startupPortfolioData.map((project, index) => (
              <img
                src={project}
                alt="Startup-Portfolio-Projects"
                className="lg:w-[250px] w-[200px]"
                key={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16">
        <div className="section-container text-center">
          <h2 className="text-6xl font-bold text-ParaGrey mb-10">
            {HomePageSectionsEnum.partners}
          </h2>
          <div className="flex justify-center items-center gap-12 flex-wrap">
            {ourPartners.map((partner, index) => (
              <img
                src={partner}
                alt="Our-Partners"
                className="lg:w-[250px] w-[200px]"
                key={index}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
