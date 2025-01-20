import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "../../components/ui/navigation-menu.tsx";
import { navigationLinks } from "../../lib/data.ts";

const Header = () => {
  const location = useLocation();

  return (
    <header className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="container flex items-center justify-between py-4 px-10">
        <img
          src="https://c.animaapp.com/4qACV4pp/img/logo.png"
          alt="NuStartz Logo"
          className="h-12 w-auto"
        />

        <NavigationMenu>
          <NavigationMenuList>
            {navigationLinks.map((link) => {
              const isActive = location.pathname === link.url;

              return (
                <NavigationMenuItem
                  key={link.title}
                  className="hidden md:block"
                >
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
      </div>
    </header>
  );
};

export default Header;
