import { ArrowRight } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { JSX } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import { Textarea } from "../../components/ui/textarea";

export const ContactUs = (): JSX.Element => {
  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="overflow-hidden w-full relative">
        <div className="w-full">
          <div className="relative w-full h-[920px] bg-white">
            <div className="h-screen w-full bg-gradient-to-b from-[#F9FBFF] to-white"></div>
          </div>

          <div className="relative -mt-[750px] px-4">
            <h1 className="text-center text-8xl font-bold text-ParaGrey tracking-[-0.64px] leading-[63.9px] mb-8">
              Contact our team
            </h1>

            <p className="text-center text-3xl font-medium text-black leading-9 mb-16 max-w-[1160px] mx-auto">
              We'd love to hear about your vision and challenges. Share your
              details below,
              <br />
              and let's explore how we can help your startup scale, innovate,
              and succeed.
            </p>

            <Card className="max-w-[776px] mx-auto bg-transparent border-none shadow-none">
              <CardContent className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <label className="text-3xl font-medium text-black">
                      First name
                    </label>
                    <Input
                      placeholder="First name"
                      className="h-[84px] text-3xl p-6 rounded-[10px] border-2 border-[#b1b1b1]"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-3xl font-medium text-black">
                      Last name
                    </label>
                    <Input
                      placeholder="Last name"
                      className="h-[84px] text-3xl p-6 rounded-[10px] border-2 border-[#b1b1b1]"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-3xl font-medium text-black">
                    E-mail
                  </label>
                  <Input
                    placeholder="you@company.com"
                    type="email"
                    className="h-[84px] text-3xl p-6 rounded-[10px] border-2 border-[#b1b1b1]"
                  />
                </div>

                <div className="space-y-3">
                  <label className="text-3xl font-medium text-black">
                    Phone number
                  </label>
                  <div className="flex gap-6 h-[84px] p-6 rounded-[10px] border-2 border-[#b1b1b1]">
                    <Select defaultValue="US">
                      <SelectTrigger className="w-[100px] border-0">
                        <SelectValue placeholder="US" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="US">US</SelectItem>
                      </SelectContent>
                    </Select>
                    <Input
                      placeholder="+1 (000)-000-0000"
                      type="tel"
                      className="border-0 h-auto p-0 text-2xl placeholder:text-[#b1b1b1] shadow-none"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-2xl font-medium text-black">
                    Message
                  </label>
                  <Textarea
                    placeholder="Leave us a message"
                    className="h-[243px] text-2xl p-6 rounded-[10px] border-2 border-[#b1b1b1]"
                  />
                </div>

                <Button className="ml-auto flex items-center gap-4 px-8 py-8 bg-BrandPurple hover:bg-variable-collection-brand-purple-duplicate/90 text-white">
                  <span className="text-xl">SEND MESSAGE</span>
                  <ArrowRight className="w-[30px] h-[30px]" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
