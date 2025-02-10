import { JSX } from "react";
import { Card, CardContent } from "../../components/ui/card";
import {
  clientReviewData,
  reviewDescription,
  ReviewPageSectionsEnum,
  solutionSectionData,
} from "../../lib/reviewsPageData";
import IMAGES from "../../themes";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../components/ui/carousel";
import { CallToAction } from "../../components/ui/callToAction";

export const Review = (): JSX.Element => {
  return (
    <main>
      <section className="bg-heroBackground pt-20 px-10 md:px-24 ">
        <div className="section-container py-8 sm:py-16">
          <h1 className="text-5xl sm:text-8xl font-bold text-paragray mb-8">
            {ReviewPageSectionsEnum.whoWeAre}
          </h1>
          <div className="bg-white p-3 rounded-xl">
            <iframe
              src="https://www.youtube.com/embed/IfM1WIyIDGc?si=AvyGQ8eljShlJ34z"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="w-full h-[300px] sm:h-[500px] rounded-xl"
            ></iframe>
          </div>
        </div>
      </section>

      <section className="px-10 md:px-24 py-8">
        <p className="section-container text-xl text-ParaGrey">
          {reviewDescription}
        </p>
      </section>

      <section className="bg-white py-16 px-10 md:px-24">
        <div className="section-container">
          <h2 className="text-5xl font-semibold text-paragray mb-10">
            {ReviewPageSectionsEnum.solutions}
          </h2>
          <div className="space-y-8">
            {solutionSectionData.map((solution, index) => (
              <Card
                key={index}
                className="bg-BrandLightBlue rounded-[20px] shadow-lg"
              >
                <CardContent className="flex flex-col sm:flex-row p-0">
                  <div className="relative w-full sm:w-[50%]">
                    <img
                      src={solution.image}
                      alt={solution.title}
                      className="h-full w-[600px] sm:h-[500px]"
                    />
                    <h3 className="absolute top-5 left-10 text-2xl font-bold text-white">
                      {solution.title}
                    </h3>
                  </div>
                  <div className="w-full sm:w-[75%] p-4 sm:p-6 lg:p-10 overflow-y-auto">
                    <p className="text-lg md:text-xl text-OuterBlack ">
                      {solution.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-10 md:px-24 bg-GhostWhite ">
        <div className="section-container">
          <h2 className="text-5xl font-bold text-paragray mb-8">
            {ReviewPageSectionsEnum.clientReviews}
          </h2>
          <Carousel>
            <CarouselContent>
              {clientReviewData.map((review, index) => (
                <CarouselItem
                  className="flex bg-white gap-10 p-4 sm:p-8 rounded-2xl"
                  key={index}
                >
                  <div className="w-[20%]">
                    <img
                      src={IMAGES.apostrophe}
                      alt="Apostrophe"
                      className="w-[50px] sm:w-[150px] h-[50px] sm:h-[150px] m-5 sm:m-10 sm:p-5"
                    />
                  </div>
                  <div className="p-4 sm:p-6 lg:p-10 space-y-8 w-full lg:w-[65%]">
                    <p className="text-lg md:text-xl text-ParaGrey">
                      {review.clientInfo}
                    </p>
                    <div className="flex items-center gap-5">
                      <img
                        src={review.profileImageURL}
                        alt="Profile-Image"
                        className="w-10 h-10 rounded-full"
                      />
                      <div>
                        <h3 className="text-lg md:text-xl text-ParaGrey font-bold">
                          {review.clientName}
                        </h3>
                        <p className="text-md md:text-lg text-ParaGrey">
                          {review.clientRole}
                        </p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {clientReviewData.length > 1 ? (
              <div className="mt-4 flex flex-row-reverse">
                <CarouselPrevious />
                <CarouselNext />
              </div>
            ) : null}
          </Carousel>
        </div>
      </section>

      <CallToAction />
    </main>
  );
};
