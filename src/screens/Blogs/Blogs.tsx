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
  blogPostsData,
  BlogPostsDataType,
  insightsTabData,
} from "../../lib/insightsPageData";
import { CallToAction } from "../../components/ui/callToAction";
import { useNavigate } from "react-router-dom";

export const Blogs = (): JSX.Element => {
  const navigate = useNavigate();

  const navigateToNuStartzBlogs = (post: BlogPostsDataType) => {
    navigate("/insights/nustartz-blogs", { state: post });
  };
  return (
    <section>
      <div id="blogs">
        <Carousel>
          <div className=" flex justify-between md:items-center">
            <h1 className="text-2xl sm:text-6xl font-bold text-DarkGrey mb-4 sm:mb-8">
              {insightsTabData.blogsTabTitle}
            </h1>
            {blogPostsData?.length > 1 ? (
              <div className="flex mb-4 sm:mb-8">
                <CarouselPrevious />
                <CarouselNext />
              </div>
            ) : null}
          </div>
          <div>
            <CarouselContent>
              {blogPostsData.map((post, index) => (
                <CarouselItem
                  key={index}
                  className="xs:basis-1/2 sm:basis-1/2 md:basis-1/2 lg:basis-1/3"
                >
                  <Card
                    className="border-none h-[400px] sm:h-[500px]"
                    onClick={() => navigateToNuStartzBlogs(post)}
                  >
                    <CardContent className="p-3 sm:p-6 relative transform transition duration-500 hover:scale-95">
                      <img
                        src={post.image}
                        alt="Blog-Image"
                        className="w-[400px] h-[380px] object-cover rounded-xl"
                      />
                      <div className="p-4 sm:p-6 bg-white rounded-xl shadow-sm h-[180px] absolute -bottom-10 w-[75%] end-3 sm:end-6">
                        <h3 className="text-xl font-bold text-BrandBlueHeavy mb-1">
                          {post.title}
                        </h3>
                        <p className="text-md sm:text-lg text-ParaGrey">
                          {post.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </div>
        </Carousel>
      </div>

      <CallToAction />
    </section>
  );
};
