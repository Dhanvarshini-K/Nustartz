import React, { JSX } from "react";
import { ArrowRightCircleIcon, ArrowUpRightFromCircleIcon } from "lucide-react";
import { Button } from "../../components/ui/button.tsx";
import { Card, CardContent } from "../../components/ui/card.tsx";
import { Input } from "../../components/ui/input.tsx";
import { solutions } from "../../lib/data.ts";

export const Review = (): JSX.Element => {
  return (
    <main className="bg-white">
      <section className="container pt-32 pb-16">
        <h1 className="text-6xl font-bold text-paragray mb-8">Who we are</h1>
        <Card className="p-10 bg-[#dfd8ff80] rounded-[40px] border-[10px] border-white shadow-lg">
          <CardContent className="flex items-center justify-center min-h-[500px]">
            <img
              src="https://c.animaapp.com/bvljseyz/img/group-1@2x.png"
              alt="Who we are"
              className="w-16"
            />
          </CardContent>
        </Card>
        <p className="text-xl text-variable-collection-paragrey mt-8 leading-relaxed">
          At NuStartz, we are your comprehensive partner in building and scaling
          your tech startup from the ground up—all the way to your Initial
          Public Offering (IPO). Our full suite of services is designed to
          support every aspect of your business, helping you transform your
          ideas into a thriving enterprise.
        </p>
      </section>

      <section className="container py-16">
        <h2 className="text-4xl font-semibold text-paragray mb-16">
          Our Solutions
        </h2>
        <div className="space-y-16">
          {solutions.map((solution, index) => (
            <Card
              key={index}
              className="bg-variable-collection-brand-light-blue rounded-[20px] shadow-lg"
            >
              <CardContent className="flex">
                <div className="relative w-1/2">
                  <img
                    src={solution.image}
                    alt={solution.title}
                    className="h-full object-cover rounded-l-[20px]"
                  />
                  <h3 className="absolute top-16 left-14 text-2xl font-bold text-white">
                    {solution.title}
                  </h3>
                  <Button
                    variant="ghost"
                    className="absolute bottom-8 right-8 text-white"
                  >
                    EXPLORE
                    <ArrowUpRightFromCircleIcon className="ml-2" />
                  </Button>
                </div>
                <div className="w-1/2 p-10">
                  <p className="text-2xl leading-9 text-[#263238]">
                    {solution.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="container py-16 bg-[#f5f9ff]">
        <h2 className="text-4xl font-bold text-paragray mb-8">
          Client Reviews
        </h2>
        <img
          src="https://c.animaapp.com/bvljseyz/img/group-1000009764.png"
          alt="Client Reviews"
          className="w-full"
        />
      </section>

      <section className="container py-16 bg-gradient-to-r from-[rgba(82.68,229.85,220.04,0.8)] to-[rgba(125.04,103.77,255,0.8)]">
        <div className="flex items-center justify-between">
          <div className="w-1/3">
            <h2 className="text-5xl font-bold text-white">
              Want to solve your problem
            </h2>
          </div>
          <div className="flex gap-4 w-2/3">
            <Input
              placeholder="Enter your email address"
              className="bg-white text-3xl h-[68px]"
            />
            <Button
              size="lg"
              className="bg-variable-collection-brand-purple-duplicate h-[68px] w-[68px]"
            >
              <ArrowRightCircleIcon className="h-8 w-8" />
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};
