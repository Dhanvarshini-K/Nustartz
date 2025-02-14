import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "../../components/ui/navigation-menu";
import { navigationLinks } from "../../lib/data";
import { Menu, X } from "lucide-react";
import IMAGES from "../../themes";
import { Button } from "../../components/ui/button";

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="container flex items-center justify-between py-4 px-10 max-w-[1200px] m-auto">
        <img
          src={IMAGES.nuStartzLogo}
          alt="NuStartz Logo"
          className="h-12 w-auto"
        />

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            {navigationLinks.map((link) => {
              const isActive = location.pathname === link.url;

              if (link.title.includes("Contact us")) {
                return (
                  <Button
                    className={`bg-contactButton text-xl ${
                      isActive ? "text-BrandPurple font-semibold" : "text-white"
                    }`}
                    onClick={() => navigate("/contact-us")}
                  >
                    {link.title}
                  </Button>
                );
              }
              return (
                <NavigationMenuItem key={link.title}>
                  <Link
                    to={link.url}
                    className={`px-4 py-2 text-xl ${
                      isActive ? "text-BrandPurple font-bold" : "text-Gray"
                    }`}
                  >
                    {link.title}
                  </Link>
                </NavigationMenuItem>
              );
            })}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md py-4 absolute top-full left-0 w-full flex flex-col items-center">
          {navigationLinks.map((link) => {
            const isActive = location.pathname === link.url;

            if (link.title.includes("Contact us")) {
              return (
                <Button
                  className="text-white bg-contactButton text-xl"
                  onClick={() => navigate("/contact-us")}
                >
                  {link.title}
                </Button>
              );
            }

            return (
              <Link
                key={link.title}
                to={link.url}
                className={`py-2 text-xl w-full text-center ${
                  isActive ? "text-BrandPurple font-bold" : "text-Gray"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.title}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
};

export default Header;
