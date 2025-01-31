import { JSX } from "react";
import { Card, CardContent } from "../../components/ui/card";
import { events } from "../../lib/data";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../components/ui/carousel";

export const Events = (): JSX.Element => {
  return (
    <div className="w-full flex flex-row justify-center bg-white">
      <div className="w-full  relative">
        <main className="xl:mx-20">
          <Carousel>
            <div className="flex justify-between items-center">
              <div className="flex  mb-8">
                <h2 className="text-4xl font-medium text-BrandBlueHeavy">
                  Events
                </h2>
              </div>
              <div className="flex mb-8">
                <CarouselPrevious />
                <CarouselNext />
              </div>
            </div>
            <div className="flex">
              <CarouselContent
                className="border rounded-full"
                carouselClassName="h-[600px]"
              >
                {events.map((event, index) => (
                  <CarouselItem key={index} className="md:basis-1/3">
                    <Card key={event.id} className="border-none shadow-md">
                      <CardContent className="p-0">
                        <img
                          src={event.image}
                          alt={event.title}
                          className="w-full h-[341px] object-cover rounded-t-lg"
                        />
                        <div className="p-6 bg-white border-none rounded-full">
                          <h3 className="text-xl font-bold text-blue-900 mb-2">
                            {event.title}
                          </h3>
                          <p className="text-gray-600">{event.description}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </div>
          </Carousel>
        </main>
      </div>
    </div>
  );
};
