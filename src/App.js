// import {Router, Routes, Route } from "react-router-dom";
// import "./App.css";
// import Footer from "./screens/Footer/Footer.tsx";
// import Header from "./screens/Header/Header.tsx";
// import Home from "./screens/Home/HomePage.tsx";
// import { Services } from "./screens/Services/Services.tsx";
// const App = () => {
//   return (
//     <Router>
//       <Header />
//       <Routes>
//         <Route path="/" element={<Home />} />
//       </Routes>
//       <Footer />
//     </Router>
//   );
// };

// export default App;


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./screens/Footer/Footer.tsx";
import Header from "./screens/Header/Header.tsx";
import Home from "./screens/Home/HomePage.tsx";
import { Services } from "./screens/Services/Services.tsx";
import { AboutUs } from "./screens/AboutUs/AboutUs.tsx";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/aboutUs" element={<AboutUs/>}/>
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
