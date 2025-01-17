import React, { JSX } from "react";
import {
  ArrowRightCircleIcon,
  DollarSignIcon,
  LeafIcon,
  RocketIcon,
} from "lucide-react";

import { Button } from "../../components/ui/button.tsx";
import { Card, CardContent } from "../../components/ui/card.tsx";
import { deliverySteps, values } from "../../lib/data.ts";

const Home = (): JSX.Element => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-[#282828] bg-opacity-10 min-h-screen pt-24 px-4">
        <div className="container grid grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-6xl font-bold bg-gradient-to-b from-[#52E5DC] via-[#FF66FF] to-[#7D67FF] bg-clip-text text-transparent">
              Crafting the future of Startups.
            </h1>
            <p className="text-xl text-variable-collection-paragrey">
              At NuStartz, we are your comprehensive partner in building and
              scaling your tech startup from the ground up—all the way to your
              Initial Public Offering (IPO). Our full suite of services is
              designed to support every aspect of your business, helping you
              transform your ideas into a thriving enterprise.
            </p>
            <Button className="bg-variable-collection-brand-purple-duplicate text-white px-8 py-4 rounded-[10px] flex items-center gap-4">
              GET IN TOUCH
              <ArrowRightCircleIcon className="h-6 w-6" />
            </Button>
          </div>

          <div className="relative">
            <img
              src="https://c.animaapp.com/4qACV4pp/img/austin-distel-rxpthowuvge-unsplash-1@2x.png"
              alt="Hero"
              className="w-full h-auto"
            />

            <Card className="absolute top-1/4 left-0 bg-[#90dbf6] border-8 border-white shadow-lg rounded-[30px] w-28 h-28">
              <CardContent className="p-5">
                <DollarSignIcon className="h-14 w-14 text-white" />
              </CardContent>
            </Card>

            <Card className="absolute bottom-1/4 left-0 bg-[#f8a8fe] border-8 border-white shadow-lg rounded-[30px] w-36 h-36">
              <CardContent className="p-5">
                <RocketIcon className="h-20 w-20 text-white" />
              </CardContent>
            </Card>

            <Card className="absolute top-0 right-0 bg-[#72dfb3] border-8 border-white shadow-lg rounded-[30px] w-36 h-36">
              <CardContent className="p-5">
                <LeafIcon className="h-20 w-20 text-white" />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How We Deliver Section */}
      <section className="bg-[#f5f9ff] py-24">
        <div className="container">
          <h2 className="text-5xl font-bold text-paragray text-center mb-16">
            How we deliver
          </h2>

          <div className="space-y-24">
            {deliverySteps.map((step, index) => (
              <div
                key={step.title}
                className={`grid grid-cols-1 gap-12 items-center md:ghrid-cols-2 ${
                  index % 2 === 1 ? "flex-row-reverse" : ""
                }`}
              >
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-auto"
                />
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <h3 className="text-6xl font-medium text-variable-collection-brand-purple-duplicate">
                      {step.title}
                    </h3>
                    <div className="w-3 h-3 bg-variable-collection-brand-purple-duplicate rounded-full" />
                  </div>
                  <p className="text-2xl text-variable-collection-paragrey">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="bg-white py-24">
        <div className="container text-center">
          <h2 className="text-4xl font-bold text-paragray mb-8">Who we are</h2>
          <p className="text-2xl text-variable-collection-brand-blue-heavy mb-16 max-w-4xl mx-auto">
            At NuStartz, we're not just a team—we're your growth partners. From
            tech and branding to marketing and beyond, we deliver solutions that
            drive measurable results, empowering startups to scale and succeed.
            Discover how we fuel your journey!
          </p>

          <div className="grid grid-cols-3 gap-12 mb-16">
            {values.map((value) => (
              <div key={value.title} className="flex flex-col items-center">
                <img
                  src={value.icon}
                  alt={value.title}
                  className="w-24 h-24 mb-6"
                />
                <h3 className="text-3xl font-normal">{value.title}</h3>
              </div>
            ))}
          </div>

          <Button className="bg-variable-collection-brand-purple-duplicate text-white px-8 py-4 rounded-[10px] flex items-center gap-4">
            LEARN MORE
            <ArrowRightCircleIcon className="h-6 w-6" />
          </Button>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-[#f5f9ff] py-24 px-4">
        <div className="container">
          <h2 className="text-4xl font-bold text-paragray text-center mb-16">
            Testimonials
          </h2>

          <Card className="bg-paragray text-white rounded-[20px] overflow-hidden">
            <CardContent className="p-0 grid grid-cols-2">
              <div className="relative">
                <img
                  src="https://c.animaapp.com/4qACV4pp/img/charlesdeluvio-lks7vei-eag-unsplash-1.png"
                  alt="Testimonial"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black to-transparent" />
              </div>

              <div className="p-16 space-y-8">
                <p className="text-2xl">
                  "Working with NuStartz has been a game-changer for our
                  business. Their team's attention to detail and commitment to
                  delivering quality outcomes were evident in every step of our
                  collaboration. They not only fixed critical issues swiftly but
                  also enhanced the overall functionality of our platform.
                  NuStartz is a partner we trust for all our digital
                  transformation needs"
                </p>
                <p className="text-3xl">Melvin Christopher, MYNA Inc.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-24">
        <div className="container text-center">
          <h2 className="text-4xl font-bold text-paragray mb-16">
            Our Startup Portfolio
          </h2>
          <div className="flex justify-center items-center gap-12 flex-wrap">
            <img
              src="https://c.animaapp.com/4qACV4pp/img/myna-logo-black-1.png"
              alt="MYNA"
              className="h-16"
            />
            <img
              src="https://c.animaapp.com/4qACV4pp/img/beyond-media-bwb-1@2x.png"
              alt="Beyond Media"
              className="h-24"
            />
            <img
              src="https://c.animaapp.com/4qACV4pp/img/tele-doctor-logo-final--1--1@2x.png"
              alt="Tele Doctor"
              className="h-36"
            />
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-24">
        <div className="container text-center">
          <h2 className="text-4xl font-bold text-paragray mb-16">
            Our Partners
          </h2>
          <div className="flex justify-center items-center gap-12 flex-wrap">
            <img
              src="https://c.animaapp.com/4qACV4pp/img/kore-ai-logo-latest-1.svg"
              alt="Kore.ai"
              className="h-14"
            />
            <img
              src="https://c.animaapp.com/4qACV4pp/img/imgone-1@2x.png"
              alt="Microsoft"
              className="h-24"
            />
            <img
              src="https://c.animaapp.com/4qACV4pp/img/snap-logic-logo-300-x-470px--1@2x.png"
              alt="SnapLogic"
              className="h-32"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
