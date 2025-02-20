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
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="pt-20 bg-heroBackground px-10 md:px-24 relative">
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
          <h2 className="text-5xl font-bold text-ParaGrey text-center mb-5 sm:mb-10">
            {AboutPageSectionEnums.boardAdvisors}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {boardMembersData.map((member) => (
              <Card
                key={member.name}
                className="rounded-[20px] shadow-md border-none"
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
                        className="w-5 opacity-50"
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

      {/* Founders */}
      <section className="py-10 sm:py-16 px-10 md:px-24">
        <div className="section-container">
          <h2 className="text-5xl font-bold text-ParaGrey text-center mb-5 sm:mb-10">
            {AboutPageSectionEnums.founders}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-[800px] mx-auto">
            {foundersData.map((founder) => (
              <Card
                key={founder.name}
                className="rounded-[20px] shadow-md border-none"
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
                        className="w-5 opacity-50"
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
          <h2 className="text-5xl font-bold text-ParaGrey text-center mb-5 sm:mb-10">
            {AboutPageSectionEnums.leaders}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-[800px] mx-auto">
            {leadersData.map((leader) => (
              <Card
                key={leader.name}
                className="rounded-[20px] shadow-md border-none"
              >
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full rounded-t-[20px]"
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

      {/* Call to Action */}
      <div className="px-10 md:px-24">
        <CallToAction />
      </div>
    </main>
  );
};
