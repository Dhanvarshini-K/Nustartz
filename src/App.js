import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./screens/Home/HomePage";
import { Services } from "./screens/Services/Services";
import { AboutUs } from "./screens/AboutUs/AboutUs";
import { Review } from "./screens/Reviews/Reviews";
import { ContactUs } from "./screens/ContactUs/ContactUs";
import { StartupNews } from "./screens/StartUpNews.tsx/StartUpNews";
import { ScrollToTop } from "./customHooks/ScrollToTop";
import { Insights } from "./screens/Insights/Insights";
import { NuStartzNews } from "./screens/NuStartzNews/NuStartzNews";
import { NuStartzEvents } from "./screens/NuStartzEvents/NuStartzEvents";
import { CaseStudy } from "./screens/CaseStudy/CaseStudy";
import { NuStartzBlogs } from "./screens/NuStartzBlogs/NuStartzBlogs";
import { Layout } from "./components/ui/Layout";
import { NotFoundPage } from "./components/ui/404Page";

const App = () => {
  return (
    <div className="App">
      <Router>
        {/* <Layout> */}
        <ScrollToTop />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/review" element={<Review />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/case-study" element={<CaseStudy />} />
            <Route
              path="/insights/nustartz-blogs"
              element={<NuStartzBlogs />}
            />
            <Route path="/insights/startup-news" element={<StartupNews />} />
            <Route path="/insights/nustartz-news" element={<NuStartzNews />} />
            <Route
              path="/insights/nustartz-events"
              element={<NuStartzEvents />}
            />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        {/* </Layout> */}
      </Router>
    </div>
  );
};

export default App;
