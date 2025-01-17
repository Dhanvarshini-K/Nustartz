import React from "react";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../components/ui/navigation-menu.tsx";
import { navigationLinks } from "../../lib/data.ts";

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="container flex items-center justify-between py-4">
        <img
          src="https://c.animaapp.com/4qACV4pp/img/logo.png"
          alt="NuStartz Logo"
          className="h-12 w-auto"
        />

        <NavigationMenu>
          <NavigationMenuList>
            {navigationLinks.map((link) => (
              <NavigationMenuItem key={link.title}>
                <NavigationMenuLink
                  className={`px-4 py-2 text-xl ${
                    link.active
                      ? "text-variable-collection-brand-purple-duplicate font-bold"
                      : "text-variable-collection-gray00-duplicate"
                  }`}
                  href={link.url}
                >
                  {link.title}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
};

export default Header;
