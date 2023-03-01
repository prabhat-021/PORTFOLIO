import "./pages/styles.css";
import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Project from "./pages/Project.js";
import Contact from "./pages/Contact.js";
import Navbar from "./Components/Navbar.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
export default function App() {
  return (

    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<App />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
