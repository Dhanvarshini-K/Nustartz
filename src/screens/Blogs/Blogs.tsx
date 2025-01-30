import { JSX, useState } from "react";
import { ArrowRight } from "lucide-react";
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
import { Events } from "../Events/Events";

export const Blogs = (): JSX.Element => {
  const [active, setActive] = useState("blogs");
  const handleTabChange = (tab: string) => {
    setActive(tab);
  };
  return (
    <div className="bg-white">
      <main className="container pt-32 px-4">
        <Tabs defaultValue="blogs">
          <TabsList className="mb-4 w-full  md:w-auto md:overflow-hidden xl:mx-14">
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
                <div className=" flex justify-between md:items-center">
                  <div className="flex items-center justify-between mb-12 xl:mx-20">
                    <h1 className="text-2xl sm:text-6xl font-bold text-DarkGrey">
                      Nustartz Blog Posts
                    </h1>
                  </div>
                  <div className="flex mb-8">
                    <CarouselPrevious />
                    <CarouselNext />
                  </div>
                </div>
                <div className="flex xl:mx-20 relative ">
                  <CarouselContent>
                    {blogPosts.map((post, index) => (
                      <CarouselItem
                        key={index}
                        className="xs:basis-1/2 sm:basis-1/2 md:basis-1/3  2xl:basis-1/4 3xl:basis-1/4"
                      >
                        <Card className="relative rounded-xl border-none">
                          <div
                            className={`w-[288px] h-[300px]  xl:h-[341px] xl:w-[364px] 2xl:w-[320px] rounded-[20px] ${post.bgColor}`}
                          ></div>
                          <Card className="absolute w-72 h-32 bottom-4 lg:w-60 lg:right-8 lg:-bottom-10 xl:w-72 xl:-right-2  2xl:-bottom-10 2xl:w-72 2xl:right-24   border-none shadow-lg">
                            <CardContent className="p-6 pt-6 pb-8 bg-white rounded-2xl shadow border-b-6">
                              <h3 className="text-2xl font-bold text-BrandBlueHeavy mb-2">
                                {post.title}
                              </h3>
                              <p className="text-md text-NickelGrey">
                                {post.description}
                              </p>
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
          <TabsContent value="events">
            <Events />
          </TabsContent>
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
