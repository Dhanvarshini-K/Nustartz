import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./screens/Footer/Footer";
import Header from "./screens/Header/Header";
import Home from "./screens/Home/HomePage";
import { Services } from "./screens/Services/Services";
import { AboutUs } from "./screens/AboutUs/AboutUs";
import { Review } from "./screens/Reviews/Reviews";
import { ContactUs } from "./screens/ContactUs/ContactUs";
import { StartupNews } from "./screens/StartUpNews.tsx/StartUpNews";
import { ScrollToTop } from "./customHooks/ScrollToTop";
import { Insights } from "./screens/Insights/Insights";
import {NuStartzNews} from "./screens/NuStartzNews/NuStartzNews";
import {NuStartzEvents} from "./screens/NuStartzEvents/NuStartzEvents";
import {CaseStudy} from "./screens/CaseStudy/CaseStudy";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/review" element={<Review />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/case-study" element={<CaseStudy />} />
          <Route path="/insights/startup-news" element={<StartupNews />} />
          <Route path="/insights/nustartz-news" element={<NuStartzNews />} />
          <Route path="/insights/nustartz-events" element={<NuStartzEvents />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
