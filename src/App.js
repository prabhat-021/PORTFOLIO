import "./styles.css";
import Home from "./Navbar.js";
import About from "./About.js";
import Project from "./Project.js";
import Contact from "./Contact.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<About />} />
        <Route path="/" element={<Project />} />
        <Route path="/" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
