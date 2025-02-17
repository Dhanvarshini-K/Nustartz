import { useLocation } from "react-router-dom";
import { caseStudyData1, caseStudyData2 } from "../../lib/caseStudyData";

export const CaseStudy = () => {
  const {state} = useLocation();

  const caseStudyData = state === "01" ? caseStudyData1 : caseStudyData2;
  return (
    <section className="bg-heroBackground pt-20 px-10 md:px-24">
      <div className="section-container py-10 sm:py-16">
        <h1 className="text-3xl sm:text-6xl font-bold mb-5 sm:mb-10">
          {caseStudyData.title}
        </h1>
        {caseStudyData.sections.map((section, index) => (
          <div key={index}>
            <h2 className="text-2xl text-BrandPurple font-semibold my-4">
              {section.heading}
            </h2>
            {section.content.length > 1 ? (
            <ul className="text-lg sm:text-xl text-ParaGrey">
              {section.content.map((point, index) => (
                <li key={index}>- {point}</li>
              ))}
            </ul>
          ) : (
            <p className="text-lg sm:text-xl text-ParaGrey">{section.content[0]}</p>
          )}
          </div>
        ))}
      </div>
    </section>
  );
};
