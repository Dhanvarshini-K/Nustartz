import { JSX } from "react";
import { startUpNewsData } from "../../lib/startUpNewsData";

export const StartupNews = (): JSX.Element => {
  return (
    <section className="bg-heroBackground pt-20 px-10 md:px-24">
      <div className="section-container">
        <h1 className="pt-10 md:pt-16 text-4xl sm:text-6xl font-bold">{startUpNewsData.title}</h1>
        <p className="text-lg sm:text-xl py-5 text-ParaGrey">{startUpNewsData.description}</p>
        <p className="text-lg sm:text-xl pb-10 text-ParaGrey">{startUpNewsData.content}</p>
      </div>
    </section>
  );
};
