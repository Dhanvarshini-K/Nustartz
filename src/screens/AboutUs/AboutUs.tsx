import React, { JSX } from "react";
import { Card, CardContent } from "../../components/ui/card";
import {
  AboutPageSectionEnums,
  boardMembersData,
  foundersData,
  leadersData,
} from "../../lib/aboutPageData";
import { CallToAction } from "../../components/ui/callToAction";
import IMAGES from "../../themes";

export const AboutUs = (): JSX.Element => {
  // const [advisorDetailedDescription, setAdvisorDetailDescription] =
  //   useState<BoardMembersDataType | null>(null);

  const leaders = leadersData.slice(0, 2);
  const globalLeaders = leadersData.slice(2);

  // const handleOpenAdvisorDetails = (member: BoardMembersDataType) => {
  //   setAdvisorDetailDescription(member);
  // };

  // const handleCloseModal = () => {
  //   setAdvisorDetailDescription(null);
  // };
  return (
    <main className="bg-custom-gradient">
      {/* Hero Section */}
      <section
        className="px-10 sm:px-24 relative"
        style={{
          backgroundImage: `url(${IMAGES.carouselBackground})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="section-container py-10 sm:py-16">
          <iframe
            src="https://www.youtube.com/embed/bzcN_dyizIE?si=FF1fXQfZGC0iv2hk"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="w-full h-[300px] sm:h-[500px] rounded-xl"
          ></iframe>
        </div>
      </section>

      {/* Board of Advisors */}
      <section className="py-10 sm:py-16 px-10 md:px-24">
        <div className="section-container ">
          <h2 className="text-5xl font-bold text-DarkGrey text-center mb-5 sm:mb-10">
            {AboutPageSectionEnums.boardAdvisors}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {boardMembersData.map((member) => (
              <Card
                key={member.name}
                className="bg-white rounded-[20px] shadow-md border-none transform transition duration-500 hover:scale-105 hover:shadow-xl"
                // onClick={() => handleOpenAdvisorDetails(member)}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full rounded-t-[20px]"
                />
                <CardContent className="p-4 md:p-6">
                  <div className="flex items-center gap-4">
                    <h3 className="text-2xl font-bold text-LightPurple">
                      {member.name}
                    </h3>
                    <a
                      href={`${member.linkedInUrl}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src={`${IMAGES.linkedIn}`}
                        alt="linkedIn"
                        className="w-5 opacity-50 hover:bg-contactButton transform transition duration-500 hover:scale-110 hover:rounded-sm"
                      />
                    </a>
                  </div>
                  <p className="text-md text-NickelGrey">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* <div
        className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 transition-opacity duration-500 ${
          advisorDetailedDescription
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
      >
        <div className="bg-advisor-gradient p-4  w-[320px] sm:w-[600px] rounded-lg relative">
          <button
            className="absolute -end-2 -top-3 rounded-full bg-black p-1"
            onClick={handleCloseModal}
          >
            <X className="w-4 h-4 text-white" />
          </button>
          <div className="flex flex-col sm:flex-row gap-5 items-center">
            <img
              src={advisorDetailedDescription?.image}
              alt={advisorDetailedDescription?.name}
              className="w-[240px]"
            />
            <div className="p-2">
              <p className="text-md text-white">
                {advisorDetailedDescription?.description}
              </p>
            </div>
          </div>
          <div className="p-2">
            <h3 className="text-2xl font-bold text-white">
              {advisorDetailedDescription?.name}
            </h3>
            <p className="text-md text-white">
              {advisorDetailedDescription?.role}
            </p>
          </div>
        </div>
      </div> */}

      {/* Founders */}
      <section className="py-10 sm:py-16 px-10 md:px-24">
        <div className="section-container">
          <h2 className="text-5xl font-bold text-DarkGrey text-center mb-5 sm:mb-10">
            {AboutPageSectionEnums.founders}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-[800px] mx-auto">
            {foundersData.map((founder) => (
              <Card
                key={founder.name}
                className="bg-white rounded-[20px] shadow-md border-none transform transition duration-500 hover:scale-105 hover:shadow-xl"
              >
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="w-full rounded-t-[20px]"
                />
                <CardContent className="p-4 md:p-6 border-none">
                  <div className="flex items-center gap-4">
                    <h3 className="text-2xl font-bold text-LightPurple">
                      {founder.name}
                    </h3>
                    <a
                      href={`${founder.linkedInUrl}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src={`${IMAGES.linkedIn}`}
                        alt="linkedIn"
                        className="w-5 opacity-50 hover:bg-contactButton transform transition duration-500 hover:scale-110 hover:rounded-sm"
                      />
                    </a>
                  </div>
                  <p className="text-md text-NickelGrey">{founder.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leaders */}
      <section className="py-10 sm:py-16 px-10 md:px-24">
        <div className="section-container">
          <h2 className="text-5xl font-bold text-DarkGrey text-center mb-5 sm:mb-10">
            {AboutPageSectionEnums.leaders}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-[800px] mx-auto">
            {leaders.map((leader) => (
              <Card
                key={leader.name}
                className="bg-white rounded-[20px] shadow-md border-none transform transition duration-500 hover:scale-105 hover:shadow-xl"
              >
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full lg:h-[390px] rounded-t-[20px]"
                />
                <CardContent className="p-4 md:p-6 border-none">
                  <h3 className="text-2xl font-bold text-LightPurple mb-2">
                    {leader.name}
                  </h3>
                  <p className="text-md leading-[26px] text-NickelGrey">
                    {leader.role}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-10 md:px-24 pb-10 sm:pb-16">
        {globalLeaders.map((leader) => (
          <Card
            key={leader.name}
            className="bg-white rounded-[20px] shadow-md border-none transform transition duration-500 hover:scale-105 hover:shadow-xl"
          >
            <img
              src={leader.image}
              alt={leader.name}
              className="w-full lg:h-[350px] rounded-t-[20px]"
            />
            <CardContent className="p-4 md:p-6 border-none">
              <h3 className="text-2xl font-bold text-LightPurple mb-2">
                {leader.name}
              </h3>
              <p className="text-md leading-[26px] text-NickelGrey">
                {leader.role}
              </p>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* Call to Action */}
      <div className="px-10 md:px-24">
        <CallToAction text="Want to solve your problem" />
      </div>
    </main>
  );
};
