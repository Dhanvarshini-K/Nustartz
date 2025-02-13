import { caseStudyData } from "../../lib/caseStudyData";

export const CaseStudy = () => {
  return (
    <section className="bg-heroBackground pt-20 px-10 md:px-24">
      <div className="section-container py-10 sm:py-16">
        <h1 className="text-3xl sm:text-6xl font-bold mb-5 sm:mb-10">
          {caseStudyData.title}
        </h1>
        {caseStudyData.sections.map((section, index) => (
          <div key={index}>
            <h2 className="text-xl text-BrandPurple font-semibold">
              {section.heading}
            </h2>
            <p className="text-lg sm:text-xl text-ParaGrey pb-4 sm:pb-10">
              {section.content}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
