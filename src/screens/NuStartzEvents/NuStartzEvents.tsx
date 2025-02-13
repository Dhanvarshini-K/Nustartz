import { useLocation } from "react-router-dom";
import { nuStartzEventsData } from "../../lib/nustartzEventsData";
import { NotFound } from "../../components/ui/notFound";

export const NuStartzEvents = () => {
  const { state } = useLocation();
  const { image } = state || {};

  const nustartzEventsArticleData = nuStartzEventsData.find(
    (event) => event.image === image
  );
  console.log("nustartzEventsArticleData", nustartzEventsArticleData);
  return (
    <section className="bg-heroBackground pt-20 px-10 md:px-24">
      {nustartzEventsArticleData !== undefined ? (
        <div className="section-container py-10 sm:py-16 flex flex-col space-y-4 sm:space-y-8">
          <h1 className="text-3xl sm:text-6xl font-bold">
            {nustartzEventsArticleData?.title}
          </h1>
          <div className="flex justify-center">
            <img
              src={nustartzEventsArticleData?.image}
              alt="Event-Image"
              className="w-[300px] sm:w-[500px]"
            />
          </div>
          <p className="text-lg sm:text-xl text-ParaGrey">
            {nustartzEventsArticleData?.content}
          </p>
          <p className="text-lg sm:text-xl text-ParaGrey">
            {nustartzEventsArticleData?.description}
          </p>
        </div>
      ) : (
        <NotFound />
      )}
    </section>
  );
};
