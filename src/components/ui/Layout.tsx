import { Outlet } from "react-router-dom";
import { ScrollToTopButton } from "../../customHooks/ScrollToTopButton";
import Footer from "../../screens/Footer/Footer";
import Header from "../../screens/Header/Header";

export const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <ScrollToTopButton />
      <Footer />
    </div>
  );
};
