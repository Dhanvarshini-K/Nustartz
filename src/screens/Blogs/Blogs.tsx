import { JSX } from "react";
import { Card, CardContent } from "../../components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../components/ui/carousel";
import { blogPostsData, insightsTabData } from "../../lib/insightsPageData";
import { CallToAction } from "../../components/ui/callToAction";

export const Blogs = (): JSX.Element => {
  return (
    <main>
      <div id="blogs">
        <Carousel>
          <div className=" flex justify-between md:items-center">
            <h1 className="text-2xl sm:text-6xl font-bold text-DarkGrey mb-8">
              {insightsTabData.blogsTabTitle}
            </h1>
            {blogPostsData?.length > 3 ? (
              <div className="flex mb-8">
                <CarouselPrevious />
                <CarouselNext />
              </div>
            ) : null}
          </div>
          <div className="flex relative">
            <CarouselContent carouselClassName="h-[400px]">
              {blogPostsData.map((post, index) => (
                <CarouselItem
                  key={index}
                  className="xs:basis-1/2 sm:basis-1/2 md:basis-1/2 lg:basis-1/3"
                >
                  <Card className="relative rounded-xl border-none">
                    <div
                      className={`w-[320px] h-[300px] rounded-2xl ${post.bgColor}`}
                    ></div>
                    <Card className="absolute w-72 h-32 start-8 -bottom-12 border-none">
                      <CardContent className="p-6 bg-white rounded-2xl">
                        <h3 className="text-2xl font-bold text-BrandBlueHeavy mb-1">
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

      <CallToAction />
    </main>
  );
};
