import { BrowserRouter, Routes, Route } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";
import "./App.css";
import Intro from "./components/Home/Intro";
import Basic from "./components/Home/Basic";
import Navbar from "./components/Home/Navbar";
import Menu from "./components/Home/Menu";
import Maintenance from "./components/Home/Maintenance";
import Footer from "./components/Home/Footer";
import Contact from "./components/Contact/Contact";
import Gallery from "./components/Gallery/Gallery";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Intro />
              <Basic />
              <Menu />
              <Maintenance />
              <Footer />
            </>
          }
        />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<h1> Page Not Found 404 </h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
