import React, { JSX } from "react";
import { ArrowRight, DollarSignIcon, LeafIcon, RocketIcon } from "lucide-react";

import { Button } from "../../components/ui/button.tsx";
import { Card, CardContent } from "../../components/ui/card.tsx";
import { deliverySteps, values } from "../../lib/data.ts";
import { useNavigate } from "react-router-dom";
import CraftingImage from "../../assets/CraftingImage.png";

const Home = (): JSX.Element => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/review");
  };
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-[#282828] bg-opacity-10 min-h-screen pt-24 px-10 lg:px-10 md:px-24 ">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 justify-items-center items-center pt-16 pb-10 md:pb-44">
          <div className="space-y-8  text-start md:w-[515px]">
            <h1 className="text-8xl font-bold bg-gradient-to-b from-[#52E5DC] via-[#FF66FF] to-[#7D67FF] bg-clip-text text-transparent leading-none">
              Crafting the future of Startups.
            </h1>
            <p className="text-xl text-ParaGrey">
              At NuStartz, we are your comprehensive partner in building and
              scaling your tech startup from the ground up—all the way to your
              Initial Public Offering (IPO). Our full suite of services is
              designed to support every aspect of your business, helping you
              transform your ideas into a thriving enterprise.
            </p>
            <Button className="bg-BrandPurple text-white px-8 py-6 rounded-[10px] flex items-center gap-4">
              GET IN TOUCH
              <ArrowRight className="h-6 w-6" />
            </Button>
          </div>

          <div className="relative">
            <img
              src={CraftingImage}
              alt="Hero"
              className="md:w-[371px] lg:w-[600px]  xl:w-[750px] object-cover"
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

      <section className="container py-20 bg-[#f5f9ff]">
        <h2 className="text-8xl font-bold text-center text-paragray mb-16">
          How we deliver
        </h2>

        <div className="space-y-32">
          {deliverySteps.map((step, index) => (
            <div
              key={step.title}
              className="flex justify-center px-10 md:px-24  items-center"
            >
              {index % 2 === 0 ? (
                <div className="flex 2xl:gap-60 items-center flex-wrap lg:flex-nowrap justify-center">
                  <div className="space-y-8">
                    <h3 className="text-8xl font-medium text-BrandPurple">
                      {step.title}
                    </h3>
                    <p className="text-3xl text-ParaGrey md:w-[543px]">
                      {step.description}
                    </p>
                  </div>
                  <div>
                    <img
                      src={step.image}
                      alt={step.title}
                      className=" w-400px md:w-[584px] md:h-[584px]"
                    />
                  </div>
                </div>
              ) : (
                <div className="flex 2xl:gap-60 items-center flex-wrap lg:flex-nowrap justify-center">
                  <img
                    src={step.image}
                    alt={step.title}
                    className=" w-400px md:w-[420px] md:h-[584px]"
                  />
                  <div className="space-y-8">
                    <h3 className="text-8xl font-medium text-BrandPurple">
                      {step.title}
                    </h3>
                    <p className="text-3xl text-ParaGrey md:w-[543px]">
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
      <section className="bg-white py-24 px-10">
        <div className="container text-center">
          <h2 className="text-8xl font-bold text-paragray mb-8">Who we are</h2>
          <p className="text-3xl text-BrandBlueHeavy mb-16 max-w-4xl mx-auto">
            At NuStartz, we're not just a team—we're your growth partners. From
            tech and branding to marketing and beyond, we deliver solutions that
            drive measurable results, empowering startups to scale and succeed.
            Discover how we fuel your journey!
          </p>

          <div className="flex gap-24 md:gap-72 mb-16 justify-center content-center flex-wrap">
            {values.map((value) => (
              <div key={value.title} className="flex flex-col items-center ">
                <img
                  src={value.icon}
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
              LEARN MORE
              <ArrowRight className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-[#f5f9ff] py-24 px-6 2xl:px-60 ">
        <div className="container">
          <h2 className="text-4xl md:text-8xl font-bold text-DarkGrey text-center mb-16">
            Testimonials
          </h2>

          <Card className="bg-DarkGrey text-white rounded-[20px] overflow-hidden">
            <CardContent className="p-0 flex flex-wrap md:flex-nowrap">
              <div className="relative">
                <img
                  src="https://c.animaapp.com/4qACV4pp/img/charlesdeluvio-lks7vei-eag-unsplash-1.png"
                  alt="Testimonial"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black to-transparent" />
              </div>

              <div className="p-3 md:p-16 space-y-8">
                <p className="text-3xl text-white  md:w-[415px]">
                  "Working with NuStartz has been a game-changer for our
                  business. Their team's attention to detail and commitment to
                  delivering quality outcomes were evident in every step of our
                  collaboration. They not only fixed critical issues swiftly but
                  also enhanced the overall functionality of our platform.
                  NuStartz is a partner we trust for all our digital
                  transformation needs"
                </p>
                <p className="text-4xl">Melvin Christopher, MYNA Inc.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-24">
        <div className="container text-center">
          <h2 className="text-5xl font-bold text-ParaGrey mb-16">
            Our Startup Portfolio
          </h2>
          <div className="flex justify-center items-center gap-12 flex-wrap">
            <img
              src="https://c.animaapp.com/4qACV4pp/img/myna-logo-black-1.png"
              alt="MYNA"
              className="h-16 w-[328px]"
            />
            <img
              src="https://c.animaapp.com/4qACV4pp/img/beyond-media-bwb-1@2x.png"
              alt="Beyond Media"
              className="h-24 w-[328px]"
            />
            <img
              src="https://c.animaapp.com/4qACV4pp/img/tele-doctor-logo-final--1--1@2x.png"
              alt="Tele Doctor"
              className="h-36 w-[328px]"
            />
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-24">
        <div className="container text-center">
          <h2 className="text-4xl font-bold text-ParaGrey mb-16">
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
