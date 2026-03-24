import { BrowserRouter, Routes, Route } from "react-router-dom";
import Boot from "./pages/Boot";
import Desktop from "./pages/Desktop";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Architecture from "./pages/Architecture";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter basename="/Portfolio">
      <div className="pixel-grid h-screen w-full relative">
        <div className="border-4 border-black h-full w-full flex items-center justify-center">
          <Routes>
            <Route path="/" element={<Boot />} />
            <Route path="/desktop" element={<Desktop />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/architecture" element={<Architecture />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
