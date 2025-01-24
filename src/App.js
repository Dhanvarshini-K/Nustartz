
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./screens/Footer/Footer";
import Header from "./screens/Header/Header";
import Home from "./screens/Home/HomePage";
import { Services } from "./screens/Services/Services";
import { AboutUs } from "./screens/AboutUs/AboutUs";
import { Review } from "./screens/Reviews/Reviews";

const App = () => {
  return (
    <div className="App">
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/aboutUs" element={<AboutUs/>}/>
        <Route path="/review" element={<Review/>}/>
      </Routes>
      <Footer />
    </Router>
    </div>
  );
};

export default App;
