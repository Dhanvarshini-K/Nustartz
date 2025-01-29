import React, { JSX, useState } from "react";
import {
  ArrowLeft,
  ArrowLeftCircleIcon,
  ArrowRight,
  ArrowRightCircleIcon,
  SendHorizonalIcon,
} from "lucide-react";
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

export const Blogs = (): JSX.Element => {
  const [active, setActive] = useState("blogs");
  const handleTabChange = (tab: string) => {
    setActive(tab);
  };
  return (
    <div className="bg-white">
      <main className="container pt-32 px-4">
        <Tabs defaultValue="blogs">
          <TabsList className="mb-4 mx-10 w-full overflow-x-auto md:w-auto md:overflow-hidden">
            <TabsTrigger
              value="blogs"
              className={` text-3xl font-bold p-10 ${
                active === "blogs" ? "text-BrandPurple" : "text-gray-400"
              }`}
              onClick={() => handleTabChange("blogs")}
            >
              Blogs
            </TabsTrigger>
            <TabsTrigger
              value="news"
              className={` text-3xl font-bold p-10 ${
                active === "news" ? "text-BrandPurple" : "text-gray-400"
              }`}
              onClick={() => handleTabChange("news")}
            >
              News
            </TabsTrigger>
            <TabsTrigger
              value="events"
              className={` text-3xl font-bold p-10 ${
                active === "events" ? "text-BrandPurple" : "text-gray-400"
              }`}
              onClick={() => handleTabChange("events")}
            >
              Events
            </TabsTrigger>
          </TabsList>

          <Separator className="mb-8 bg-ChineseSilver" />

          <TabsContent value="blogs">
            <div className="flex items-center justify-between mb-12 mx-20">
              <h1 className="text-6xl font-bold text-DarkGrey">
                Nustartz Blog Posts
              </h1>
              <div className="flex gap-4">
                <Button variant="outline" size="icon" className="rounded-full">
                  <ArrowLeft className="h-6 w-6" />
                </Button>
                <Button size="icon" className="rounded-full">
                  <ArrowRight className="h-6 w-6" />
                </Button>
              </div>
            </div>

            <div
              className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-8 mb-24 justify-items-center "
              id="blogs"
            >
              {blogPosts.map((post) => (
                <div
                  key={post.id}
                  className="relative  xl:mx-10 2xl:mx-20 mb-24 "
                >
                  <div
                    className={`h-[300px] w-[426px] md:h-[340px] xl:w-[500px] lg:w-[440px] 2xl:w-[460px] rounded-[20px] ${post.bgColor}`}
                  />
                  <Card className="absolute top-60 -right-48 lg:w-[80%] lg:-right-44 xl:w-[75%] 2xl:w-[90%] xl:-right-48 xl:h-44  2xl:-right-52 2xl:top-64 -translate-x-1/2 w-[90%] rounded-t-none border-none lg:h-40">
                    <CardContent className="pt-6 pb-8 bg-white rounded-2xl border-none">
                      <h3 className="text-2xl font-bold text-variable-collection-brand-blue-heavy mb-2">
                        {post.title}
                      </h3>
                      <p className="text-md">{post.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="news">
            <News />
          </TabsContent>
          <TabsContent value="events"></TabsContent>
        </Tabs>

        <section className="container py-16 px-10 md:px-48 ">
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
