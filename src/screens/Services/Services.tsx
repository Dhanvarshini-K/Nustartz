import { ArrowRight } from "lucide-react";
import React, { JSX } from "react";
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

enum TextEnum {
  getInTouch = "GET IN TOUCH",
  seeMore = "SEE MORE",
  caseStudy = "CASE STUDY"
}

export const Services = (): JSX.Element => {
  const navigate = useNavigate();

  const navigateToContactUsPage = () => {
    navigate("/contact-us");
  }
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="pt-20 bg-heroBackground px-10 md:px-24 relative">
        <div className="section-container flex flex-wrap lg:flex-nowrap justify-between gap-8 py-16">
          <h1 className="text-6xl md:text-8xl font-bold text-ParaGrey leading-tight z-10">
            {ServicePageSectionsEnum.heroTitle}
          </h1>
          <img src={IMAGES.serviceImage} alt="Hero illustration" className="z-10"/>
        </div>

        <img src={IMAGES.serviceHeroSectionBackground} alt="Hero-Background" className="object-fill w-full h-full absolute inset-0"/>
      </section>

      {/* Services Section */}
      <section className="bg-GhostWhite py-16 px-10 md:px-24 ">
        <div className="section-container flex flex-col lg:flex-row justify-between gap-10">
          <div className="w-[50%]">
            <div className="flex items-center gap-4">
              <img
                src={IMAGES.serviceIcon}
                alt="Service-Icon"
                className="w-8"
              />
              <h2 className="text-4xl font-medium text-ParaGrey">
                {ServicePageSectionsEnum.services}
              </h2>
            </div>
          </div>
          <Accordion
            type="single"
            collapsible
            className="w-full max-w-7xl ml-auto"
          >
            {serviceSectionData.map((service) => (
              <AccordionItem key={service} value={service}>
                <AccordionTrigger className="text-3xl text-Grey py-6">
                  {service}
                </AccordionTrigger>
                <AccordionContent className="text-Grey text-lg">
                  {ServicePageSectionsEnum.triggeredAccordionText}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Tech Hub Section */}
      <section className="py-16  px-10 md:px-24">
        <div className="section-container flex justify-between gap-16 flex-col lg:flex-row">
          <div className="flex flex-col justify-center gap-8 lg:w-[50%]">
            <h2 className="text-5xl font-semibold text-ParaGrey">
              {ServicePageSectionsEnum.techStartup}
            </h2>
            <p className="text-xl leading-relaxed text-Gray">
              {ServicePageSectionsEnum.techStartupDescription}
            </p>
            <p className="text-xl text-Gray font-bold">
              {ServicePageSectionsEnum.techStartupContent}
            </p>
            <Button className="w-fit bg-BrandPurple text-white font-normal mt-5  px-8 py-6" onClick={navigateToContactUsPage}>
              {TextEnum.getInTouch}
              <ArrowRight />
            </Button>
          </div>
          <div>
            <img src={IMAGES.techStartupImage1} alt="Tech-Space" />
            <img src={IMAGES.techStartupImage2} alt="Tech-Space" />
          </div>
        </div>
      </section>

      {/* Tech Fusion Hub Section */}
      <section className="bg-GhostWhite px-10 md:px-24 py-16">
        <div className="section-container">
          <h2 className="text-5xl font-semibold text-ParaGrey mb-10">
            {ServicePageSectionsEnum.techFusion}
          </h2>
          <p className="text-3xl md:text-6xl text-Gray mb-10 max-w-3xl">
            {ServicePageSectionsEnum.techFusionSubTitle}
          </p>
        </div>
        <div className="section-container grid grid-cols-1 lg:grid-cols-2 gap-16">
          {techFusionHubSectionData.map((service) => (
            <div key={service.category} className="flex flex-col gap-4 px-4">
              <div className="flex justify-between items-center">
                <span className="text-2xl font-semibold">{service.number}</span>
                <h3 className="text-3xl font-semibold text-black">
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
      <section className="py-16 px-10 md:px-24">
        <div className="section-container">
          <h2 className="text-5xl font-semibold text-ParaGrey mb-10">
            {ServicePageSectionsEnum.caseStudies}
          </h2>

          <div className="flex flex-wrap lg:flex-nowrap gap-8 ">
            {caseStudiesSectionData.map((study, index) => (
              <Card key={index} className="bg-Lavender bg-opacity-60 p-8">
                <CardContent className="flex flex-col gap-8">
                  <div>
                    <p className="text-3xl mb-2 text-ParaGrey">
                      {TextEnum.caseStudy} ({study.number})
                    </p>
                    <p className="text-md text-ParaGrey">{study.description}</p>
                  </div>
                  <Button className="w-fit bg-BrandPurple text-white mt-10">
                    {TextEnum.seeMore}
                    <ArrowRight />
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
