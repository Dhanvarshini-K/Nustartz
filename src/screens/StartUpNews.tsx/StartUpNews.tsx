import { JSX } from "react";
import { useLocation } from "react-router-dom";
import { startUpNewsData } from "../../lib/startUpNewsData";
import { NotFound } from "../../components/ui/notFound";

export const StartupNews = (): JSX.Element => {
  const { state } = useLocation();
  const { title } = state || {};

  const startUpNewsArticleData = startUpNewsData.find(
    (news) => news.title === title
  );
  return (
    <section className="bg-custom-gradient pt-20 px-10 md:px-24">
      {startUpNewsArticleData !== undefined ? (
        <div className="section-container">
          <h1 className="pt-10 md:pt-16 text-4xl sm:text-6xl font-bold">
            {startUpNewsArticleData?.title}
          </h1>
          <img
            src={`${startUpNewsArticleData.image}`}
            alt="StartupArticleImage"
          />
          <div className="py-10">
            {startUpNewsArticleData?.contents?.map((content, index) => (
              <p className="text-lg sm:text-xl py-2 text-ParaGrey" key={index}>
                {content}
              </p>
            ))}
          </div>
        </div>
      ) : (
        <NotFound />
      )}
    </section>
  );
};
