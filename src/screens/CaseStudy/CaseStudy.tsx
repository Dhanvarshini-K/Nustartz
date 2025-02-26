import { useLocation } from "react-router-dom";
import { caseStudyData1, caseStudyData2 } from "../../lib/caseStudyData";

export const CaseStudy = () => {
  const { state } = useLocation();

  const caseStudyData = state === "01" ? caseStudyData1 : caseStudyData2;
  return (
    <section className="bg-custom-gradient pt-20 px-10 md:px-24">
      <div className="section-container py-10 sm:py-16">
        <h1 className="text-3xl sm:text-6xl font-bold mb-5 sm:mb-10">
          {caseStudyData.title}
        </h1>
        {caseStudyData?.sections?.map((section, index) => (
          <div key={index}>
            <h2 className="text-2xl text-BrandPurple font-semibold my-2">
              {section.heading}
            </h2>
            {section.contents?.length === 1 ? (
              <p className="text-lg sm:text-xl text-ParaGrey">
                {section?.contents?.[0]?.headingDescription}
              </p>
            ) : (
              <div>
                <p className="text-lg font-semibold my-1">
                  {section.subHeading1}
                </p>

                {section?.contents?.map((content, index) => (
                  <div key={index}>
                    {content.headingDescription && (
                      <p className="text-lg sm:text-xl text-ParaGrey mb-1">
                        {content.headingDescription}
                      </p>
                    )}
                    {(content?.contentTitle || content?.contentDescription) && (
                      <ul className="text-md sm:text-xl text-ParaGrey">
                        <li className="ml-5 list-disc list-inside text-md sm:text-lg">
                          <span className="font-semibold text-md sm:text-lg">
                            {content?.contentTitle}
                          </span>{" "}
                          {content?.contentDescription}
                        </li>
                      </ul>
                    )}

                    {content.headingConclusion && (
                      <p className="text-lg sm:text-xl text-ParaGrey mb-1">
                        {content.headingConclusion}
                      </p>
                    )}
                  </div>
                ))}

                <p className="text-lg font-semibold my-1">
                  {section.subHeading2}
                </p>

                {section?.subContents?.length ? (
                  <ul className="text-lg sm:text-xl text-ParaGrey">
                    {section.subContents.map((subContent, index) => (
                      <li
                        key={index}
                        className="ml-5 list-disc list-inside text-lg"
                      >
                        {subContent.contentDescription}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
