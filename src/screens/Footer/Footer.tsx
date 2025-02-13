import { navigationLinks } from "../../lib/data";
import { Link, useLocation } from "react-router-dom";
import IMAGES from "../../themes";

const socialMediaLinks: string[] = [
  IMAGES.linkedIn,
  IMAGES.facebook,
  IMAGES.twitter,
  IMAGES.youtube,
];

const footerData: string[] = [
  "Website - www.nustartz.com",
  "Email - contact@NuStartz.com",
  "Mobile - (+1) 310-818-3415",
];

const Footer = () => {
  const location = useLocation();
  return (
    <footer className="bg-LightLavender p-5 sm:py-12 sm:px-20">
      <div className="flex justify-between flex-wrap lg:gap-20 gap-5">
        <div>
          <img
            src={IMAGES.nuStartzLogo}
            alt="NuStartz Logo"
            className="h-16 sm:mb-4"
          />
        </div>
        <div className="flex gap-5 sm:gap-10 md:gap-28 flex-wrap lg:pr-60">
          <div className="space-y-2 sm:space-y-4 ">
            {navigationLinks.map((link) => {
              const isActive = location.pathname === link.url;
              return (
                <div key={link.title}>
                  <Link
                    to={link.url}
                    className={`px-4 py-2 text-xl ${
                      isActive ? "text-BrandPurple font-bold" : "text-Gray"
                    }`}
                  >
                    {link.title}
                  </Link>
                </div>
              );
            })}
          </div>
          <div className="flex flex-col gap-6 ml-4 sm:ml-0">
            <div className="space-y-2 flex items-start flex-col">
              {footerData.map((data,index) => (
                <p className="text-lg md:text-3xl text-Gray" key={index}>{data}</p>
              ))}
            </div>
            <div className="flex gap-4 ">
              {socialMediaLinks.map((link, index) => (
                <img src={link} alt="SocialMedia" className="w-8" key={index}/>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
