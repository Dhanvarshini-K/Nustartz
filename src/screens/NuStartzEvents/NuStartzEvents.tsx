import { useLocation } from "react-router-dom";
import { nuStartzEventsData } from "../../lib/nustartzEventsData";
import { NotFound } from "../../components/ui/notFound";

export const NuStartzEvents = () => {
  const { state } = useLocation();
  const { image } = state || {};

  const nustartzEventsArticleData = nuStartzEventsData.find(
    (event) => event.image === image
  );

  const {
    content,
    description,
    image: mainEventImage,
    eventImages,
    eventTitle,
    title,
    videoUrl,
  } = nustartzEventsArticleData || {};

  if (!nustartzEventsArticleData) {
    return <NotFound />;
  }
  return (
    <section className="bg-custom-gradient px-4 sm:px-20">
      <div className="section-container py-10 sm:py-16 flex flex-col space-y-4 sm:space-y-8">
        <h1 className="text-3xl sm:text-6xl font-bold">{title}</h1>

        {videoUrl ? (
          <div>
            <iframe
              src={videoUrl}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="w-full h-[300px] sm:h-[500px] rounded-xl"
            ></iframe>
          </div>
        ) : null}

        <p className="text-lg sm:text-xl text-ParaGrey">{content}</p>

        {eventTitle ? (
          <h1 className="text-4xl text-BrandPurple font-semibold my-2">
            {eventTitle}
          </h1>
        ) : null}

        {mainEventImage && (
          <img src={mainEventImage} alt="" className="w-[50%]" />
        )}

        {description?.map((point, index) => (
          <p className="text-lg sm:text-xl text-ParaGrey" key={index}>
            {point}
          </p>
        ))}
      </div>
    </section>
  );
};
