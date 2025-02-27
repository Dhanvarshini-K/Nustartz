import { useLocation } from "react-router-dom";
import { nuStartzNewsData } from "../../lib/nustartzNewsData";
import { NotFound } from "../../components/ui/notFound";

export const NuStartzNews = () => {
  const { state } = useLocation();
  const { image } = state || {};

  const nustartzNewsArticleData = nuStartzNewsData.find(
    (news) => news.image1 === image
  );

  return (
    <section className="bg-custom-gradient px-4 sm:px-20">
      {nustartzNewsArticleData !== undefined ? (
        <div className="section-container py-10 sm:py-16">
          <h1 className="text-3xl sm:text-6xl font-bold mb-5 sm:mb-10">
            {nustartzNewsArticleData?.title}
          </h1>

          <p className="text-xl sm:text-3xl text-ParaGrey ">
            {nustartzNewsArticleData?.subtitle}
          </p>

          <div className="flex gap-10 py-10 flex-col-reverse lg:flex-row justify-between">
            <div className="w-full lg:w-[75%] flex flex-col justify-center">
              <p className="text-lg sm:text-xl text-ParaGrey pb-4">
                {nustartzNewsArticleData?.imageDescription1}
              </p>
              <p className="text-lg sm:text-xl text-ParaGrey">
                {nustartzNewsArticleData?.imageDescription2}
              </p>
            </div>
            <div className="flex items-center justify-center">
              <img
                src={nustartzNewsArticleData?.image1}
                alt="NustartzNews"
                className="w-[300px] sm:w-[350px]"
              />
            </div>
          </div>

          <div className="flex gap-10 flex-col lg:flex-row justify-between">
            <div className="w-full flex items-center justify-center">
              <img
                src={nustartzNewsArticleData?.image2}
                alt="NustartzArticle"
                className="w-[300px] sm:w-[350px] rounded-xl"
              />
            </div>
            <div className="flex items-center">
              <p className="text-lg sm:text-xl text-ParaGrey w-full">
                {nustartzNewsArticleData?.description2}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <NotFound />
      )}
    </section>
  );
};
