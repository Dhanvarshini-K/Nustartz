import { JSX } from "react";
import { Card, CardContent } from "../../components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../components/ui/carousel";
import {
  insightsEventsData,
  insightsTabData,
} from "../../lib/insightsPageData";
import { CallToAction } from "../../components/ui/callToAction";

export const Events = (): JSX.Element => {
  return (
    <div className="">
      <div className="w-full">
        <Carousel>
          <div className="flex justify-between items-center">
            <div className="flex mb-8">
              <h2 className="text-4xl font-medium text-BrandBlueHeavy">
                {insightsTabData.eventsTabTitle}
              </h2>
            </div>
            {insightsEventsData?.length > 3 ? (
            <div className="flex mb-8">
              <CarouselPrevious />
              <CarouselNext />
            </div>
            ) : null}
          </div>
          <div className="flex">
            <CarouselContent
              carouselClassName="pb-10"
            >
              {insightsEventsData.map((event, index) => (
                <CarouselItem
                  key={index}
                  className="xs:basis-1/2 sm:basis-1/2 md:basis-1/2 lg:basis-1/3"
                >
                  <Card key={event.id} className="border-none shadow-md">
                    <CardContent className="p-0">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-[341px] object-cover rounded-t-lg"
                      />
                      <div className="p-6 bg-white border-none rounded-b-lg">
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
        <CallToAction />
      </div>
    </div>
  );
};
