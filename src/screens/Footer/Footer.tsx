import { navigationLinks } from "../../lib/data";
import { Link, useLocation } from "react-router-dom";
import IMAGES from "../../themes";

const socialMediaLinks = [
  {
    image: IMAGES.linkedIn,
    url: "https://www.linkedin.com/company/nustartz/posts/?feedView=all",
  },
  { image: IMAGES.instagram, url: "https://www.instagram.com/nustartz/" },
  { image: IMAGES.facebook, url: "https://www.facebook.com/share/19xETUcAsU/" },
  { image: IMAGES.youtube, url: "https://www.youtube.com/@NuStartz" },
];

const footerData: string[] = [
  "Website - www.nustartz.com",
  "Email - contact@NuStartz.com",
  "Mobile - (+1) 310-818-3415",
];

const Footer = () => {
  const location = useLocation();
  return (
    <footer className="bg-LightLavender p-5 sm:py-12 px-4 sm:px-20">
      <div className="flex justify-between flex-wrap lg:gap-20 gap-5">
        <div>
          <img
            src={IMAGES.nuStartzLogo}
            alt="NuStartz Logo"
            className="h-16 sm:mb-4"
          />
        </div>
        <div className="flex gap-5 sm:gap-20 md:gap-28 flex-wrap">
          <div className="space-y-2 sm:space-y-4 ">
            {navigationLinks.map((link) => {
              const isActive = location.pathname === link.url;
              return (
                <div key={link.title}>
                  <Link
                    to={link.url}
                    className={`sm:px-4 py-2 text-xl ${
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
              {footerData.map((data, index) => (
                <p className="text-lg md:text-xl text-Gray" key={index}>
                  {data}
                </p>
              ))}
            </div>
            <div className="flex gap-4 ">
              {socialMediaLinks.map((link, index) => (
                <a
                  href={`${link.url}`}
                  target="_blank"
                  rel="noreferrer"
                  key={index}
                >
                  <img
                    src={link.image}
                    alt="SocialMedia"
                    className="w-8 h-8 rounded-lg transform transition duration-500 hover:scale-110"
                    key={index}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
