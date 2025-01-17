import React from "react";
import { navigationLinks } from "../../lib/data.ts";

const Footer = () => {
  return (
    <footer className="bg-[#ecebf4] py-12 px-10">
      <div className="container grid md:grid-cols-4 gap-8 sm:grid-cols-1">
        <div>
          <img
            src="https://c.animaapp.com/4qACV4pp/img/logo.png"
            alt="NuStartz Logo"
            className="h-16 mb-4"
          />
        </div>

        <div className="space-y-4 ">
          {navigationLinks.map((link) => (
            <div
              key={link.title}
              className="text-2xl text-variable-collection-gray00-duplicate"
            >
              {link.title}
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-3">
          <div className="space-y-4 flex items-start flex-col">
            <p className="text-xl text-variable-collection-gray00-duplicate">
              Website - www.nustartz.com
            </p>
            <p className="text-xl text-variable-collection-gray00-duplicate">
              Email - contact@NuStartz.com
            </p>
            <p className="text-xl text-variable-collection-gray00-duplicate">
              Mobile - (+1) 732-983-1325
            </p>
          </div>

          <div className="flex gap-4 ">
            <img
              src="https://c.animaapp.com/4qACV4pp/img/image-2@2x.png"
              alt="Social"
              className="h-8 w-8"
            />
            <img
              src="https://c.animaapp.com/4qACV4pp/img/image-3@2x.png"
              alt="Social"
              className="h-8 w-8"
            />
            <img
              src="https://c.animaapp.com/4qACV4pp/img/image-4@2x.png"
              alt="Social"
              className="h-8 w-8"
            />
            <img
              src="https://c.animaapp.com/4qACV4pp/img/youtube-1@2x.png"
              alt="YouTube"
              className="h-8"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
