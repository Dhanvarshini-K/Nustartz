import { ScrollToTopButton } from "../../customHooks/ScrollToTopButton";
import Footer from "../../screens/Footer/Footer";
import Header from "../../screens/Header/Header";

import { ReactNode } from "react";

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">{children}</main>
      <ScrollToTopButton />
      <Footer />
    </div>
  );
};
