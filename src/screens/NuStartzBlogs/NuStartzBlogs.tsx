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
    <section className="bg-heroBackground pt-20 px-10 md:px-24">
      {nuStartzBlogsArticleData !== undefined ? (
        <div className="section-container py-10 sm:py-16 space-y-4 sm:space-y-8">
          <h1 className="text-5xl sm:text-6xl text-DarkGrey font-bold">
            {nuStartzBlogsArticleData?.title}
          </h1>

          <div className="flex justify-center">
            <img
              src={`${nuStartzBlogsArticleData?.image}`}
              alt="Blog-Image"
              className="w-[300px] sm:w-[500px]"
            />
          </div>

          <p className="text-lg sm:text-xl text-ParaGrey">
            {nuStartzBlogsArticleData?.description}
          </p>

          <div>
            {nuStartzBlogsArticleData.keypoints.map((point, index) => (
                <ol key={index}>
                    <li className="text-lg sm:text-xl text-ParaGrey py-2">{index+1}. {point}</li>
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
