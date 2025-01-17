import React, { JSX } from "react";
import { ArrowRightCircleIcon } from "lucide-react";
import { Button } from "../../components/ui/button.tsx";
import { Card, CardContent } from "../../components/ui/card.tsx";
import { Input } from "../../components/ui/input.tsx";
import { boardMembers, founders, leaders } from "../../lib/data.ts";

export const AboutUs = (): JSX.Element => {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[920px] bg-[#282828] bg-opacity-10">
        <img
          src="https://c.animaapp.com/Wb1ZWYyD/img/thumbnail-1.png"
          alt="Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 w-full h-[584px] bg-gradient-to-b from-transparent to-white" />
      </section>

      {/* Board of Advisors */}
      <section className="container py-20">
        <h2 className="text-4xl font-bold text-paragray text-center mb-16">
          Board Of Advisors
        </h2>
        <div className="grid grid-cols-3 gap-8">
          {boardMembers.map((member) => (
            <Card key={member.name} className="rounded-[20px] shadow-shadow-l">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-[370px] object-cover rounded-t-[20px]"
              />
              <CardContent className="p-9">
                <h3 className="text-[22px] font-bold text-brand-purple mb-2">
                  {member.name}
                </h3>
                <p className="text-x-800 leading-[26px]">{member.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Founders */}
      <section className="container py-20">
        <h2 className="text-4xl font-bold text-paragray text-center mb-16">
          Our Founders
        </h2>
        <div className="grid grid-cols-2 gap-8 max-w-[800px] mx-auto">
          {founders.map((founder) => (
            <Card key={founder.name} className="rounded-[20px] shadow-shadow-l">
              <img
                src={founder.image}
                alt={founder.name}
                className="w-full h-[370px] object-cover rounded-t-[20px]"
              />
              <CardContent className="p-9">
                <h3 className="text-[22px] font-bold text-brand-purple mb-2">
                  {founder.name}
                </h3>
                <p className="text-x-800 leading-[26px]">{founder.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Leaders */}
      <section className="container py-20">
        <h2 className="text-4xl font-bold text-paragray text-center mb-16">
          Our Leaders
        </h2>
        <div className="grid grid-cols-2 gap-8 max-w-[1000px] mx-auto">
          {leaders.map((leader) => (
            <Card key={leader.name} className="rounded-[20px] shadow-shadow-l">
              <img
                src={leader.image}
                alt={leader.name}
                className="w-full h-[370px] object-cover rounded-t-[20px]"
              />
              <CardContent className="p-9">
                <h3 className="text-[22px] font-bold text-brand-purple mb-2">
                  {leader.name}
                </h3>
                <p className="text-x-800 leading-[26px]">{leader.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Email Subscription */}
      <section className="container py-16">
        <div className="bg-gradient-to-r from-[#52E5DC] via-[#80D1EA] to-[#7D67FF] p-16 flex items-center gap-8">
          <div className="bg-brand-purple-duplicate text-white p-14 w-[500px]">
            <h2 className="text-5xl font-bold leading-[52px]">
              Want to solve your problem
            </h2>
          </div>
          <div className="flex-1 flex gap-4">
            <Input
              placeholder="Enter your email address"
              className="bg-white text-3xl h-[68px] px-6"
            />
            <Button
              size="lg"
              className="bg-brand-purple-duplicate h-[68px] w-[68px]"
            >
              <ArrowRightCircleIcon className="h-8 w-8" />
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};
