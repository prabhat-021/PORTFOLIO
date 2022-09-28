import "./styles.css";
import Home from "./Home.js";
import About from "./About.js";
import Project from "./Project.js";
import Contact from "./Contact.js";
import Navbar from "./Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
export default function App() {
  return (

    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<App />} /> */}
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
