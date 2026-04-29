import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Home from "./pages/Home.jsx";
import PsychologyServices from "./pages/PsychologyServices.jsx";
import Services from "./pages/Services.jsx";
import TechnologyServices from "./pages/TechnologyServices.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/psychology" element={<PsychologyServices />} />
        <Route path="/services/technology" element={<TechnologyServices />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}
