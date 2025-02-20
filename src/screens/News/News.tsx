import { JSX } from "react";
import { Card, CardContent } from "../../components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../components/ui/carousel";
import IMAGES from "../../themes";
import { useNavigate } from "react-router-dom";
import {
  insightsNewsData,
  InsightsNewsDataType,
  insightsStartupNewsData,
  insightsTabData,
} from "../../lib/insightsPageData";
import { CallToAction } from "../../components/ui/callToAction";
export const News = (): JSX.Element => {
  const navigate = useNavigate();
  const navigateToStartUpNews = () => {
    navigate("/insights/startup-news");
  };

  const navigateToNuStartzNews = (news: InsightsNewsDataType) => {
    navigate("/insights/nustartz-news", { state: news });
  };
  return (
    <main className="container px-4">
      <section className="flex flex-col gap-2 sm:gap-4">
        <h1 className="text-5xl sm:text-6xl font-bold text-DarkGrey">
          {insightsTabData.newsTabTitle}
        </h1>

        <Carousel>
          <div className="flex justify-between items-center ">
            <div className="flex  mb-4 sm:mb-8">
              <h2 className="text-xl sm:text-4xl font-medium text-BrandBlueHeavy">
                {insightsTabData.newsTabSubTitle1}
              </h2>
            </div>
            <div className="flex mb-4 sm:mb-8">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </div>
          <div className="flex gap-10">
            <CarouselContent>
              {insightsNewsData.map((news, index) => (
                <CarouselItem
                  key={index}
                  className="xs:basis-1/2 sm:basis-1/2 md:basis-1/2 lg:basis-1/3"
                >
                  <Card
                    className="relative overflow-hidden rounded-xl"
                    onClick={() => navigateToNuStartzNews(news)}
                  >
                    <img
                      src={news.image}
                      alt={news.title}
                      className="w-[600px] h-[440px] object-cover transform transition duration-500 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-900/90 pointer-events-none">
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

      <section className="mt-10 sm:mt-16">
        <Carousel>
          <div className="flex justify-between items-center">
            <div className="flex  mb-4 sm:mb-8">
              <h2 className="text-2xl sm:text-4xl font-medium text-BrandBlueHeavy">
                {insightsTabData.newsTabSubTitle2}
              </h2>
            </div>
            <div className="flex mb-4 sm:mb-8">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </div>

          <CarouselContent>
            {insightsStartupNewsData.map((news, index) => (
              <CarouselItem
                key={index}
                className="xs:basis-1/2 sm:basis-1/2 md:basis-1/2 lg:basis-1/3"
              >
                <Card
                  className="relative overflow-hidden rounded-xl cursor-pointer"
                  onClick={navigateToStartUpNews}
                >
                  <div
                    className="h-[440px] bg-cover bg-center transform transition duration-500 hover:scale-105"
                    style={{
                      backgroundImage: `url(${IMAGES.startUpNewsImage})`,
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-b from-[#007AFF]/30 to-[#004999]/100"></div>

                    <div className="absolute top-4 left-4  text-black px-3 py-1 rounded-md">
                      <p className="text-sm font-medium">{news.date}</p>
                    </div>

                    <CardContent className="absolute bottom-0 p-6 text-white">
                      <h3 className="text-2xl sm:text-3xl font-semibold mb-4">
                        {news.title}
                      </h3>
                      <p className="text-lg">{news.description}</p>
                    </CardContent>
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </section>

      <CallToAction />
    </main>
  );
};
