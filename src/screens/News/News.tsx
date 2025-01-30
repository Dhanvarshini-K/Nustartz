import { JSX } from "react";
import { ArrowRight, ArrowRightCircleIcon } from "lucide-react";
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
import { nuStartzNews, startupNews } from "../../lib/data";
import IMAGES from "../../themes";
export const News = (): JSX.Element => {
  return (
    <div className="bg-white">
      <main className="container px-4">
        <section className="flex flex-col gap-4 xl:mx-20">
          <h1 className="text-6xl font-bold text-DarkGrey">News</h1>

          <Carousel>
            <div className="flex justify-between items-center">
              <div className="flex  mb-8">
                <h2 className="text-4xl font-medium text-BrandBlueHeavy">
                  NuStartz News
                </h2>
              </div>
              <div className="flex mb-8">
                <CarouselPrevious />
                <CarouselNext />
              </div>
            </div>
            <div className="flex">
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
            </div>
          </Carousel>
        </section>

        <section className="mt-16  xl:mx-20">
          <Carousel>
            <div className="flex justify-between items-center">
              <div className="flex  mb-8">
                <h2 className="text-4xl font-medium text-BrandBlueHeavy">
                  Startup News
                </h2>
              </div>
              <div className="flex mb-8">
                <CarouselPrevious />
                <CarouselNext />
              </div>
            </div>

            <CarouselContent>
              {startupNews.map((news, index) => (
                <CarouselItem key={index} className="md:basis-1/3">
                  <Card className="relative overflow-hidden rounded-xl">
                    <div
                      className="h-[440px] bg-cover bg-center"
                      style={{
                        backgroundImage: `url(${IMAGES.startUpNewsImage})`,
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-b from-[#007AFF]/30 to-[#004999]/100"></div>

                      <div className="absolute top-4 left-4  text-black px-3 py-1 rounded-md">
                        <p className="text-sm font-medium">{news.date}</p>
                      </div>

                      <CardContent className="absolute bottom-0 p-6 text-white">
                        <h3 className="text-4xl font-semibold mb-4">
                          {news.title}
                        </h3>
                        <p className="text-xl">{news.description}</p>
                      </CardContent>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </section>
      </main>
    </div>
  );
};
