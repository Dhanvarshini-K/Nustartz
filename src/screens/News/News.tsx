import React, { JSX } from "react";
import { ArrowRightCircleIcon } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../components/ui/carousel";
import { Input } from "../../components/ui/input";
import { Separator } from "../../components/ui/separator";
import { nuStartzNews, startupNews } from "../../lib/data";

export const News = (): JSX.Element => {
  return (
    <div className="bg-white">
      <main className="container pt-24 px-4">
        <section>
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-medium text-blue-900">
              NuStartz News
            </h2>
          </div>

          <Carousel>
            <CarouselContent>
              {nuStartzNews.map((news, index) => (
                <CarouselItem key={index} className="md:basis-1/3">
                  <Card className="relative overflow-hidden rounded-xl">
                    <img
                      src={news.image}
                      alt={news.title}
                      className="w-full h-[440px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-900/90">
                      <CardContent className="absolute bottom-0 p-6 text-white">
                        <p className="mb-2">{news.date}</p>
                        <h3 className="text-xl font-medium">{news.title}</h3>
                      </CardContent>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-between items-center mt-4">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </Carousel>
        </section>

        <section className="mt-16">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-medium text-blue-900">Startup News</h2>
          </div>

          <Carousel>
            <CarouselContent>
              {startupNews.map((news, index) => (
                <CarouselItem key={index} className="md:basis-1/3">
                  <Card className="relative overflow-hidden rounded-xl">
                    <div className="h-[440px] bg-gradient-to-b from-blue-100 to-blue-200">
                      <CardContent className="absolute bottom-0 p-6 text-white">
                        <p className="mb-2">{news.date}</p>
                        <h3 className="text-3xl font-semibold mb-4">
                          {news.title}
                        </h3>
                        <p className="text-xl">{news.description}</p>
                      </CardContent>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-between items-center mt-4">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </Carousel>
        </section>

        <section className="my-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
          <div className="container py-16 flex justify-between items-center">
            <div className="w-1/3">
              <h2 className="text-4xl font-bold text-white">
                Signup to our News Letter
              </h2>
            </div>
            <div className="flex gap-4 w-2/3">
              <Input
                placeholder="Enter your email address"
                className="bg-white text-xl h-16"
              />
              <Button size="lg" className="bg-purple-700 h-16 w-16">
                <ArrowRightCircleIcon className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
