import React, { JSX, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";

import { Separator } from "../../components/ui/separator";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/ui/tabs";
import { blogPosts } from "../../lib/data";
import { News } from "../News/News";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../components/ui/carousel";

export const Blogs = (): JSX.Element => {
  const [active, setActive] = useState("blogs");
  const handleTabChange = (tab: string) => {
    setActive(tab);
  };
  return (
    <div className="bg-white">
      <main className="container pt-32 px-4">
        <Tabs defaultValue="blogs">
          <TabsList className="mb-4 w-full overflow-x-auto md:w-auto md:overflow-hidden xl:mx-14">
            <TabsTrigger
              value="blogs"
              className={` text-3xl font-bold p-5 lg:p-10 ${
                active === "blogs" ? "text-BrandPurple" : "text-gray-400"
              }`}
              onClick={() => handleTabChange("blogs")}
            >
              Blogs
            </TabsTrigger>
            <TabsTrigger
              value="news"
              className={` text-3xl font-bold p-5 lg:p-10 ${
                active === "news" ? "text-BrandPurple" : "text-gray-400"
              }`}
              onClick={() => handleTabChange("news")}
            >
              News
            </TabsTrigger>
            <TabsTrigger
              value="events"
              className={` text-3xl font-bold p-5 lg:p-10 ${
                active === "events" ? "text-BrandPurple" : "text-gray-400"
              }`}
              onClick={() => handleTabChange("events")}
            >
              Events
            </TabsTrigger>
          </TabsList>

          <Separator className="mb-8 bg-ChineseSilver" />

          <TabsContent value="blogs">
            <div id="blogs">
              <Carousel>
                <div className="flex justify-between items-center">
                  <div className="flex items-center justify-between mb-12 xl:mx-20">
                    <h1 className="text-6xl font-bold text-DarkGrey">
                      Nustartz Blog Posts
                    </h1>
                  </div>
                  <div className="flex mb-8">
                    <CarouselPrevious />
                    <CarouselNext />
                  </div>
                </div>

                <div className="flex xl:mx-20">
                  <CarouselContent>
                    {blogPosts.map((post, index) => (
                      <CarouselItem key={index} className="md:basis-1/3">
                        <Card className="relative rounded-xl border-none">
                          <div
                            className={`h-[300px] w-[426px] md:h-[340px] xl:w-[500px] lg:w-[440px] 2xl:w-[520px] rounded-[20px] ${post.bgColor}`}
                          ></div>
                          <Card className=" absolute w-80 top-96 left-20 border-red-500">
                            <CardContent className="absolute bottom-0 p-6 pt-6 pb-8 bg-white rounded-2xl border-none">
                              <h3 className="text-2xl font-bold text-variable-collection-brand-blue-heavy mb-2">
                                {post.title}
                              </h3>
                              <p className="text-md">{post.description}</p>
                            </CardContent>
                          </Card>
                        </Card>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </div>
              </Carousel>
            </div>
          </TabsContent>
          <TabsContent value="news">
            <News />
          </TabsContent>
          <TabsContent value="events"></TabsContent>
        </Tabs>

        <section className="container py-16 md:px-10  ">
          <div className="flex mx-auto overflow-hidden lg:h-[228px] flex-wrap">
            <div className="bg-BrandPurple text-white p-5 flex items-center justify-center text-5xl font-bold w-[800px] md:w-[600px] lg:w-[500px]">
              Signup to our News Letter
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
    </div>
  );
};
