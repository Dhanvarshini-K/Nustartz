import { useLocation } from "react-router-dom";
import { nuStartzEventsData } from "../../lib/nustartzEventsData";
import { NotFound } from "../../components/ui/notFound";
import { cn, generateColumnSpan } from "../../lib/utils";

export const NuStartzEvents = () => {
  const { state } = useLocation();
  const { image } = state || {};

  const nustartzEventsArticleData = nuStartzEventsData.find(
    (event) => event.image === image
  );
  return (
    <section className="bg-custom-gradient px-4 sm:px-20">
      {nustartzEventsArticleData !== undefined ? (
        <div className="section-container py-10 sm:py-16 flex flex-col space-y-4 sm:space-y-8">
          <h1 className="text-3xl sm:text-6xl font-bold">
            {nustartzEventsArticleData?.title}
          </h1>

          {nustartzEventsArticleData?.videoUrl ? (
            <div>
              <iframe
                src={nustartzEventsArticleData?.videoUrl}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="w-full h-[300px] sm:h-[500px] rounded-xl"
              ></iframe>
            </div>
          ) : null}

          <p className="text-lg sm:text-xl text-ParaGrey">
            {nustartzEventsArticleData?.content}
          </p>

          {nustartzEventsArticleData?.eventTitle ? (
            <h1 className="text-4xl text-BrandPurple font-semibold my-2">
              {nustartzEventsArticleData?.eventTitle}
            </h1>
          ) : null}

          {nustartzEventsArticleData?.eventImages?.length ? (
            <div
              className={cn(
                "scrollbar grid h-150 auto-cols-min grid-cols-4 gap-x-2 gap-y-2 overflow-y-auto pr-4",
                "sm:h-350",
                "sm:w-full",
                "md:grid-cols-2",
                "grid-cols-1"
              )}
            >
              {nustartzEventsArticleData?.eventImages?.map((photos, index) => {
                return (
                  <div
                    key={index}
                    className={`relative overflow-hidden rounded-2.5xl ${generateColumnSpan(
                      index
                    )} object-cover sm:!col-span-1 sm:w-full`}
                  >
                    <img
                      src={photos}
                      alt={photos || ""}
                      className="scale-up inset-0 h-64 w-full rounded-lg object-cover sm:relative sm:h-37.5 sm:w-full transform transition duration-500 hover:scale-105"
                    />
                  </div>
                );
              })}
            </div>
          ) : null}

          {nustartzEventsArticleData?.description?.map((point, index) => (
            <p className="text-lg sm:text-xl text-ParaGrey" key={index}>
              {point}
            </p>
          ))}
        </div>
      ) : (
        <NotFound />
      )}
    </section>
  );
};
