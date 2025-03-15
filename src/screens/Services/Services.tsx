import React, { JSX, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import IMAGES from "../../themes";
import { Separator } from "../../components/ui/separator";
import {
  caseStudiesSectionData,
  ServicePageSectionsEnum,
  serviceSectionData,
  techFusionHubSectionData,
} from "../../lib/servicePageData";
import { useNavigate } from "react-router-dom";
import { StartupPitchDeckForm } from "../../components/ui/startupPitchDeckForm";
import Images from "../../themes";

enum TextEnum {
  getInTouch = "GET IN TOUCH",
  seeMore = "SEE MORE",
  caseStudy = "CASE STUDY",
}

const serviceHeroTitle = "Your one stop shop for success.";

export const Services = (): JSX.Element => {
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const navigateToCaseStudy = (caseStudyNumber: string) => {
    navigate("/case-study", { state: caseStudyNumber });
  };
  return (
    <div className="bg-custom-gradient">
      {/* Hero Section */}
      <section className="bg-heroBackground bg-opacity-40 px-4 sm:px-20 relative">
        <div className="section-container flex flex-wrap lg:flex-nowrap justify-between gap-8 py-10 sm:py-16">
          <div className="md:mt-16 mx-auto md:mx-0 w-[300px] sm:w-[350px]">
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-[#52E5DC] via-[#FF66FF] to-[#7D67FF] bg-clip-text text-transparent leading-tight z-10 tracking-[-3px]">
              {serviceHeroTitle}
            </h1>
          </div>
          <img
            src={IMAGES.serviceImage}
            alt="Hero illustration"
            className="z-10"
          />
        </div>

        <img
          src={IMAGES.serviceHeroSectionBackground}
          alt="Hero-Background"
          className="object-fill w-full h-full absolute inset-0 opacity-40"
        />
      </section>

      {/* Services Section */}
      <section className="bg-heroBackground py-10 sm:py-16 px-4 sm:px-20 ">
        <div className="section-container flex flex-col lg:flex-row justify-between gap-5 sm:gap-10">
          <div className="w-[100%] sm:w-[50%]">
            <div className="flex items-center gap-4">
              <img
                src={IMAGES.serviceIcon}
                alt="Service-Icon"
                className="w-8"
              />
              <h2 className="text-3xl sm:text-4xl font-medium text-DarkGrey">
                {ServicePageSectionsEnum.services}
              </h2>
            </div>
          </div>
          <Accordion
            type="single"
            collapsible
            className="w-full max-w-7xl ml-auto"
          >
            {serviceSectionData.map((service, index) => (
              <AccordionItem key={index} value={service.title}>
                <AccordionTrigger className="text-xl sm:text-3xl text-Grey py-4 sm:py-6">
                  {service.title}
                </AccordionTrigger>
                <AccordionContent className="text-Grey text-md sm:text-lg">
                  {service.description}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Tech Hub Section */}
      <section className="py-10 sm:py-16 px-4 sm:px-20">
        <div className="section-container flex justify-between gap-16 flex-col lg:flex-row">
          <div className="flex flex-col justify-center gap-8 lg:w-[50%]">
            <h2 className="text-4xl sm:text-5xl font-semibold text-DarkGrey tracking-[-1px]">
              {ServicePageSectionsEnum.techStartup}
            </h2>
            <p className="text-lg sm:text-xl text-Gray">
              {ServicePageSectionsEnum.techStartupDescription}
            </p>

            <p className="text-lg sm:text-xl text-Gray">
              {ServicePageSectionsEnum.techStartupDescription2}
            </p>

            <p className="text-lg sm:text-xl text-Gray font-bold">
              {ServicePageSectionsEnum.techStartupContent}
            </p>
            <Button
              className="w-fit bg-BrandPurple text-white text-md font-normal mt-5 px-8 py-6"
              onClick={handleOpenModal}
            >
              {TextEnum.getInTouch}
              <span>
                <img src={`${Images.rightArrow}`} alt="arrow" />
              </span>
            </Button>
          </div>
          <div>
            <img src={IMAGES.techStartupImage1} alt="Tech-Space" />
            <img src={IMAGES.techStartupImage2} alt="Tech-Space" />
          </div>
        </div>
      </section>

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

      {/* Tech Fusion Hub Section */}
      <section className="bg-heroBackground px-4 sm:px-20 py-10 sm:py-16">
        <div className="section-container">
          <h2 className="text-4xl sm:text-5xl font-semibold text-DarkGrey mb-5 sm:mb-10 tracking-[-1px]">
            {ServicePageSectionsEnum.techFusion}
          </h2>
          <p className="text-xl sm:text-3xl md:text-6xl text-Gray mb-5 sm:mb-10 max-w-3xl tracking-[-1px]">
            {ServicePageSectionsEnum.techFusionSubTitle}
          </p>
        </div>
        <div className="section-container grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-16">
          {techFusionHubSectionData.map((service) => (
            <div
              key={service.category}
              className="flex flex-col gap-2 sm:gap-4"
            >
              <div className="flex gap-5 sm:justify-between items-center">
                <span className="text-xl sm:text-2xl font-semibold">
                  {service.number}
                </span>
                <h3 className="text-xl sm:text-3xl font-semibold text-black">
                  {service.category}
                </h3>
              </div>
              <Separator className="h-0.5 bg-Gray" />
              <ul className="space-y-2 text-right text-Grey">
                {service.items.map((item) => (
                  <li key={item} className="text-md">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Case Studies */}
      <section className="bg-white py-10 sm:py-16 px-4 sm:px-20">
        <div className="section-container">
          <h2 className="text-4xl sm:text-5xl font-semibold text-DarkGrey mb-5 sm:mb-10 tracking-[-1px]">
            {ServicePageSectionsEnum.caseStudies}
          </h2>

          <div className="flex flex-wrap md:flex-nowrap gap-8">
            {caseStudiesSectionData.map((study, index) => (
              <Card
                key={index}
                className="bg-Lavender bg-opacity-60 p-4 sm:p-8 w-full"
              >
                <CardContent className="flex flex-col">
                  <div>
                    {/* <p className="text-3xl mb-2 text-ParaGrey font-semibold">
                      {TextEnum.caseStudy} ({study.number})
                    </p> */}
                    <p className="text-lg sm:text-2xl text-ParaGrey font-semibold">
                      {study.description}
                    </p>
                  </div>
                  <Button
                    className="w-fit bg-BrandPurple text-white text-md mt-5"
                    onClick={() => navigateToCaseStudy(study.number)}
                  >
                    {TextEnum.seeMore}
                    <span>
                      <img src={`${Images.rightArrow}`} alt="arrow" />
                    </span>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
