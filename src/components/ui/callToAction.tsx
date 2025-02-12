import { ArrowRight } from "lucide-react";
import { Button } from "./button";
import { Input } from "./input";
import { insightsTabData } from "../../lib/insightsPageData";

export const CallToAction = () => {
  return (
    <section className="py-10 sm:py-16">
      <div className="section-container flex mx-auto overflow-hidden lg:h-[228px] flex-wrap">
        <div className="bg-BrandPurple text-white p-4 lg:p-10 flex items-center justify-center text-4xl sm:text-5xl font-bold w-full lg:w-[400px]">
          {insightsTabData.blogsCTATitle}
        </div>
        <div className="flex flex-1 items-center bg-gradient-to-r from-gray-100 to-purple-100 p-4 px-4 lg:px-20">
          <Input
            placeholder="Enter your email address"
            className="bg-white text-xl sm:text-3xl h-[68px] px-2 sm:px-6 rounded-none"
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
  );
};
