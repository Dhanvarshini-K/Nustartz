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
  "Mobile - (+1) 732-983-1325",
];

const Footer = () => {
  const location = useLocation();
  return (
    <footer className="bg-LightLavender py-12 px-20">
      <div className="flex justify-between flex-wrap lg:gap-20 gap-5">
        <div>
          <img
            src={IMAGES.nuStartzLogo}
            alt="NuStartz Logo"
            className="h-16 mb-4"
          />
        </div>
        <div className="flex gap-28 flex-wrap lg:pr-60">
          <div className="space-y-4 ">
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
          <div className="flex flex-col gap-6">
            <div className="space-y-2 flex items-start flex-col">
              {footerData.map((data) => (
                <p className="text-lg md:text-3xl text-Gray">{data}</p>
              ))}
            </div>
            <div className="flex gap-4 ">
              {socialMediaLinks.map((link) => (
                <img src={link} alt="SocialMedia" className="w-8" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
