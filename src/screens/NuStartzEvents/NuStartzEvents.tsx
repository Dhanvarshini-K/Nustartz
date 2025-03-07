import { useLocation } from "react-router-dom";
import { nuStartzEventsData } from "../../lib/nustartzEventsData";
import { NotFound } from "../../components/ui/notFound";
import { X } from "lucide-react";
import { useState } from "react";

export const NuStartzEvents = () => {
  const { state } = useLocation();
  const { image } = state || {};
  const [hoveredImage, setHoveredImage] = useState<string | null>(null);

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
    capturedEventImage,
    conclusionText,
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

        <div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-8 lg:gap-16">
          <p className="text-lg sm:text-xl text-ParaGrey">{content}</p>
          <img
            src={mainEventImage}
            alt="events"
            className="w-[300px] sm:w-[400px] rounded-xl"
          />
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-16">
          {capturedEventImage && (
            <img
              src={capturedEventImage}
              alt="events"
              className="w-[300px] sm:w-[400px] rounded-xl"
            />
          )}
          <p className="text-lg sm:text-xl text-ParaGrey">{description}</p>
        </div>

        {eventTitle && eventImages?.length ? (
          <h1 className="text-4xl text-BrandPurple font-semibold my-2">
            {eventTitle}
          </h1>
        ) : null}

        {eventImages?.length ? (
          <div className="flex flex-wrap lg:flex-nowrap gap-4">
            {eventImages.map((eventImage, index) => (
              <img
                key={index}
                src={eventImage}
                alt="events"
                className="sm:h-[300px] rounded-xl"
                onMouseEnter={() => setHoveredImage(eventImage)}
              />
            ))}
          </div>
        ) : null}
        <p className="text-lg sm:text-xl text-ParaGrey">{conclusionText}</p>
      </div>

      <div
        className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 transition-opacity duration-500 ${
          hoveredImage ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="relative">
          <button
            className="absolute end-0 -top-6"
            onClick={() => setHoveredImage(null)}
          >
            <X className="w-8 h-7 text-white" />
          </button>
          <img src={hoveredImage || ""} alt="events" className="sm:h-[350px]" />
        </div>
      </div>
    </section>
  );
};
