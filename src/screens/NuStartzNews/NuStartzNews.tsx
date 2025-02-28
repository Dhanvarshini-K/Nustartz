import { useLocation } from "react-router-dom";
import { nustartzNewsContents } from "../../lib/nustartzNewsData";
import { NotFound } from "../../components/ui/notFound";

export const NuStartzNews = () => {
  const { state } = useLocation();
  const { image } = state || {};

  const nustartzNewsArticleData = nustartzNewsContents.find(
    (news) => news.image1 === image
  );

  return (
    <section className="bg-custom-gradient px-4 sm:px-20">
      {nustartzNewsArticleData !== undefined ? (
        <div className="section-container py-10 sm:py-16">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-0 sm:mb-5">
            {nustartzNewsArticleData?.title}
          </h1>

          <p className="text-xl sm:text-2xl text-ParaGrey ">
            {nustartzNewsArticleData?.subTitle}
          </p>

          <div className="flex gap-10 py-10 flex-col-reverse lg:flex-row justify-between">
            <div className="w-full lg:w-[75%] flex flex-col justify-center">
              {nustartzNewsArticleData?.imageDescriptions1?.map(
                (description, index) => (
                  <p
                    className="text-lg sm:text-xl text-ParaGrey py-2"
                    key={index}
                  >
                    {description}
                  </p>
                )
              )}
            </div>
            <div className="flex items-center justify-center">
              <img
                src={nustartzNewsArticleData?.image1}
                alt="NustartzNews"
                className="w-[300px]"
              />
            </div>
          </div>

          <div className="flex gap-10 flex-col lg:flex-row justify-between pb-10">
            <div className="w-full flex items-center justify-center">
              <img
                src={nustartzNewsArticleData?.image2}
                alt="NustartzArticle"
                className="w-[300px] rounded-xl"
              />
            </div>
            <div className="flex flex-col items-center justify-center gap-5">
              {nustartzNewsArticleData?.imageDescriptions2?.map(
                (description, index) => (
                  <p
                    className="text-lg sm:text-xl text-ParaGrey w-full"
                    key={index}
                  >
                    {description}
                  </p>
                )
              )}
            </div>
          </div>

          {nustartzNewsArticleData?.news?.map((news, index) => (
            <div key={index}>
              <h2 className="text-2xl text-BrandPurple font-bold">
                {news.newsTitle}
              </h2>
              <div className="ml-6 p-3 sm:p-5">
                {news.newsDescriptions?.map((keyPoint, index) => (
                  <p className="text-lg text-ParaGrey pb-2" key={index}>
                    {keyPoint}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <NotFound />
      )}
    </section>
  );
};
