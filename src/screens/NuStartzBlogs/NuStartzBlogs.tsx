import { useLocation } from "react-router-dom";
import { nuStartzBlogsData } from "../../lib/nustartzBlogsData";
import { NotFound } from "../../components/ui/notFound";

export const NuStartzBlogs = () => {
  const { state } = useLocation();
  const { image } = state || {};

  const nuStartzBlogsArticleData = nuStartzBlogsData.find(
    (blog) => blog.image === image
  );
  return (
    <section className="bg-custom-gradient px-4 md:px-20">
      {nuStartzBlogsArticleData !== undefined ? (
        <div className="section-container py-10 sm:py-16 space-y-4 sm:space-y-8">
          <h1 className="text-4xl sm:text-6xl text-DarkGrey font-bold">
            {nuStartzBlogsArticleData?.title}
          </h1>

          <img
            src={`${nuStartzBlogsArticleData?.image}`}
            alt="Blog-Image"
            className="w-[300px] sm:w-[500px]"
          />

          <p className="text-lg sm:text-xl text-ParaGrey">
            {nuStartzBlogsArticleData?.description}
          </p>

          <div>
            {nuStartzBlogsArticleData?.contents?.map((content, index) => (
              <ol key={index}>
                <li className="text-lg sm:text-xl text-ParaGrey py-2">
                  <span className="text-ParaGrey font-bold">
                    {index + 1}. {content?.contentTitle}
                  </span>
                  {content?.contentDescription}
                </li>
              </ol>
            ))}
          </div>

          <p className="text-lg sm:text-xl text-ParaGrey">
            {nuStartzBlogsArticleData?.conclusion}
          </p>
        </div>
      ) : (
        <NotFound />
      )}
    </section>
  );
};
