import { ArrowRight, Package2Icon } from "lucide-react";
import React, { JSX } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion.tsx";
import { Button } from "../../components/ui/button.tsx";
import { Card, CardContent } from "../../components/ui/card.tsx";
import { Separator } from "../../components/ui/separator.tsx";
import { caseStudies, services, techServices } from "../../lib/data.ts";

export const Services = (): JSX.Element => {
  return (
    <div className="bg-white flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 bg-[#282828] bg-opacity-10 px-10 md:px-40">
        <div className="container flex flex-wrap justify-between gap-8 py-24">
          <div className="flex flex-col gap-8">
            <h1 className="text-8xl font-bold text-ParaGrey leading-tight lg:w-[528px]">
              Your one stop shop for success.
            </h1>
          </div>
          <div>
            <img
              src="https://c.animaapp.com/AqDNkT34/img/nustartz-illus-1.svg"
              alt="Hero illustration"
              className="w-[498px] h-[568px]"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-GhostWhite py-24 px-10 lg:px-28 ">
        <div className="container flex justify-around flex-wrap">
          <div className="flex items-start gap-4 mb-16">
            <Package2Icon className="w-10 h-10" />
            <h2 className="text-4xl font-medium text-ParaGrey">Our Services</h2>
          </div>
          <Accordion
            type="single"
            collapsible
            className="w-full max-w-7xl ml-auto"
          >
            {services.map((service) => (
              <AccordionItem key={service} value={service}>
                <AccordionTrigger className="text-3xl text-Grey py-6">
                  {service}
                </AccordionTrigger>
                <AccordionContent>Service details here</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Tech Hub Section */}
      <section className="py-24">
        <div className="container">
          <div className="flex justify-between gap-16 mb-24 px-10 lg:px-40 flex-wrap">
            <div className="flex flex-col  justify-center gap-8 lg:w-[720px]">
              <h2 className="text-5xl font-semibold text-ParaGrey">
                Everything a Tech Startup Needs
              </h2>
              <p className="text-xl leading-relaxed text-Gray">
                Experience a workspace that feels like home for your brand. At
                NuStartz, we offer fully-branded, exclusive office spaces
                tailored to your team's unique needs—blending professionalism,
                focus, and collaboration.
              </p>
              <Button className="w-fit bg-BrandPurple text-white font-normal">
                GET IN TOUCH
                <ArrowRight />
              </Button>
            </div>
            <div className="flex flex-col">
              <img
                src="https://c.animaapp.com/AqDNkT34/img/8o2a5279-1.png"
                alt="Office space"
                className="w-[300px] h-[200px] lg:w-[700px] lg:h-[400px] object-cover"
              />
              <img
                src="https://c.animaapp.com/AqDNkT34/img/screenshot-2024-11-07-at-6-38-55-pm-1.png"
                alt="Office space"
                className="w-[300px] h-[200px] lg:w-[700px] lg:h-[400px] object-cover"
              />
            </div>
          </div>

          <div className="bg-GhostWhite px-10 lg:px-40 py-24">
            <h2 className="text-5xl font-semibold text-ParaGrey mb-16">
              Tech Fusion Hub
            </h2>
            <p className="text-3xl md:text-6xl text-Gray mb-16 max-w-3xl">
              We focus on providing the right tool for product innovation and
              digital communication.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {techServices.map((service) => (
                <div
                  key={service.category}
                  className="flex flex-col gap-4 px-4"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-semibold">
                      {service.number}
                    </span>
                    <h3 className="text-3xl font-semibold text-black">
                      {service.category}
                    </h3>
                  </div>
                  <Separator />
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
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 px-10 lg:px-40">
        <div className="container">
          <h2 className="text-5xl font-semibold text-ParaGrey mb-16">
            Case Studies
          </h2>

          <div className="flex flex-wrap lg:flex-nowrap gap-8 ">
            {caseStudies.map((study, index) => (
              <Card key={index} className="bg-Lavender bg-opacity-60 p-8">
                <CardContent className="flex flex-col gap-8">
                  <div>
                    <p className="text-3xl mb-2 text-ParaGrey">
                      CASE STUDY ({study.number})
                    </p>
                    <p className="text-md text-ParaGrey">{study.description}</p>
                  </div>
                  <Button className="w-fit bg-BrandPurple text-white">
                    SEE MORE
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
