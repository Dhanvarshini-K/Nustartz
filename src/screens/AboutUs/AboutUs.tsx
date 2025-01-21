import React, { JSX } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "../../components/ui/button.tsx";
import { Card, CardContent } from "../../components/ui/card.tsx";
import { Input } from "../../components/ui/input.tsx";
import { boardMembers, founders, leaders } from "../../lib/data.ts";

export const AboutUs = (): JSX.Element => {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative lg:h-[920px] bg-[#282828] bg-opacity-10">
        <img
          src="https://c.animaapp.com/Wb1ZWYyD/img/thumbnail-1.png"
          alt="Hero"
          className="w-full h-96 lg:w-full lg:h-full object-cover"
        />
        <div className="absolute bottom-0 w-full h-[584px] bg-gradient-to-b from-transparent to-white" />
      </section>

      {/* Board of Advisors */}
      <section className="container py-20 px-10 xl:px-40">
        <h2 className="text-5xl font-bold text-ParaGrey text-center mb-16">
          Board Of Advisors
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {boardMembers.map((member) => (
            <Card key={member.name} className="rounded-[20px] shadow-shadow-l">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-auto 2xl:h-[430px] object-cover rounded-t-[20px]"
              />
              <CardContent className="p-9">
                <h3 className="text-4xl font-bold text-LightPurple mb-2">
                  {member.name}
                </h3>
                <p className="text-2xl leading-[26px] text-NickelGrey">
                  {member.role}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Founders */}
      <section className="container py-20">
        <h2 className="text-5xl font-bold text-ParaGrey text-center mb-16">
          Our Founders
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[800px] mx-auto px-10">
          {founders.map((founder) => (
            <Card key={founder.name} className="rounded-[20px] shadow-shadow-l">
              <img
                src={founder.image}
                alt={founder.name}
                className="w-full h-[370px] object-cover rounded-t-[20px]"
              />
              <CardContent className="p-9">
                <h3 className="text-4xl font-bold text-LightPurple mb-2">
                  {founder.name}
                </h3>
                <p className="text-2xl leading-[26px] text-NickelGrey">
                  {founder.role}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Leaders */}
      <section className="container py-20">
        <h2 className="text-5xl font-bold text-ParaGrey text-center mb-16">
          Our Leaders
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 px-10 gap-8 max-w-[1000px] mx-auto">
          {leaders.map((leader) => (
            <Card key={leader.name} className="rounded-[20px] shadow-shadow-l">
              <img
                src={leader.image}
                alt={leader.name}
                className="w-full h-[370px] object-cover rounded-t-[20px]"
              />
              <CardContent className="p-9">
                <h3 className="text-4xl font-bold text-LightPurple mb-2">
                  {leader.name}
                </h3>
                <p className="text-2xl leading-[26px] text-NickelGrey">
                  {leader.role}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Email Subscription */}
      <section className="container py-16 px-10 md:px-48 ">
        <div className="flex mx-auto overflow-hidden lg:h-[228px] flex-wrap">
          <div className="bg-BrandPurple text-white p-5 flex items-center justify-center text-5xl font-bold w-[500px]">
            Want to solve your problem
          </div>
          <div className="flex flex-1 items-center bg-gradient-to-r from-gray-100 to-purple-100 p-3">
            <Input
              placeholder="Enter your email address"
              className="bg-white text-3xl h-[68px] px-6 rounded-none"
            />
            <Button
              size="lg"
              className=" bg-BrandPurple h-[68px] w-[68px] rounded-none"
            >
              <ArrowRight className="h-8 w-8" color="white" />
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};
