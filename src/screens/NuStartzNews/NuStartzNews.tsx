import { useLocation } from "react-router-dom";
import {
  newNustartzNewsArticleData,
  nustartzNewsContents,
} from "../../lib/nustartzNewsData";
import { NotFound } from "../../components/ui/notFound";

export const NuStartzNews = () => {
  const { state } = useLocation();
  const { image } = state || {};

  const nustartzNewsArticleData = nustartzNewsContents.find(
    (news) => news.image1 === image
  );

  const newArticleContent =
    nustartzNewsArticleData?.title === "Newsletter - Spring 2025"
      ? newNustartzNewsArticleData
      : null;

  return (
    <section className="bg-custom-gradient px-4 sm:px-20">
      {newArticleContent ? (
        <div className="section-container py-10 sm:py-16">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-0 sm:mb-5">
            {newArticleContent?.title}
          </h1>
          <p className="text-lg sm:text-2xl  py-2 font-semibold">
            {newArticleContent?.subTitle1}
          </p>
          <img
            src={newArticleContent?.image1}
            alt="new-artile-content"
            className="my-5"
          />
          <p className="text-lg sm:text-2xl  py-2 font-semibold">
            {newArticleContent?.description1}
          </p>

          {newArticleContent?.contents?.map(
            (
              { contentImage, contentDescription, contentLink, moralContent },
              index
            ) => (
              <div key={index} className="py-10">
                <img src={contentImage} alt="content-image" className="pb-5" />
                {contentDescription?.map((description, index) => (
                  <p
                    className="text-lg sm:text-xl text-ParaGrey py-3"
                    key={index}
                  >
                    {description}
                  </p>
                ))}

                {moralContent ? (
                  <p className="text-lg sm:text-xl font-semibold py-3">
                    {moralContent}
                  </p>
                ) : null}

                {contentLink ? (
                  <a
                    href={contentLink}
                    target="_blank"
                    rel="noreferrer"
                    className="text-lg sm:text-xl text-BrandPurple font-semibold underline"
                  >
                    Learn more about the content
                  </a>
                ) : null}
              </div>
            )
          )}

          <h1 className="text-3xl sm:text-4xl font-bold mb-0 sm:mb-2">
            Let’s Build the Future Together
          </h1>
          <p className="text-lg sm:text-2xl text-ParaGrey py-3">
            Whether you're refining your startup strategy or seeking guidance on
            execution, NuStartz is here to support your journey. Let's connect
            and turn your vision into reality.
          </p>
          <p className="text-lg sm:text-xl font-semibold py-3">
            Got questions? Need a brainstorm partner? Our inbox is always open.
          </p>
        </div>
      ) : (
        <>
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
                <img
                  src={nustartzNewsArticleData?.image2}
                  alt="NustartzArticle"
                  className="w-[300px] rounded-xl"
                />
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
        </>
      )}
    </section>
  );
};
