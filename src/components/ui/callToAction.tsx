import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "./button";
import { Input } from "./input";
import { insightsTabData } from "../../lib/insightsPageData";
import { emailRegex } from "../../lib/regex";

export const CallToAction = () => {
  const [email, setEmail] = useState("");
  const [hasTyped, setHasTyped] = useState(false);

  const validateEmail = (email: string) => {
    return emailRegex.test(email);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    setHasTyped(true);
  };

  const error =
    hasTyped && !validateEmail(email) ? "Enter a valid email address" : "";

  const handleSubmit = () => {
    console.log("Email :", email);
    setEmail("");
    setHasTyped(false);
  };

  return (
    <section className="py-10 sm:py-16">
      <div className="section-container flex mx-auto overflow-hidden lg:h-[228px] flex-wrap">
        <div className="bg-BrandPurple text-white p-4 lg:p-10 flex items-center justify-center text-2xl sm:text-5xl font-bold w-full lg:w-[400px]">
          {insightsTabData.blogsCTATitle}
        </div>
        <div className="flex flex-1 items-center bg-gradient-to-r from-[#d2f1fb] to-[#fbd7fb] p-4 px-4 lg:px-20">
          <div className="w-full flex">
            <Input
              placeholder="Enter your email address"
              className="bg-white text-md sm:text-2xl h-[30px] sm:h-[68px] px-2 sm:px-6 rounded-none w-full"
              value={email}
              onChange={handleInputChange}
            />
            <Button
              size="sm"
              className={`bg-BrandPurple h-[52px] w-[40px] sm:h-[68px] sm:w-[68px] rounded-none transition-opacity ${
                error
                  ? "opacity-50 cursor-not-allowed"
                  : "opacity-100 cursor-pointer"
              }`}
              disabled={!hasTyped}
              onClick={handleSubmit}
            >
              <ArrowRight className="h-8 w-8" color="white" />
            </Button>
          </div>
          {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>
      </div>
    </section>
  );
};
