import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import DesktopWindow from "./components/fake-window";

function Boot() {
  const navigate = useNavigate();
  return (
    <DesktopWindow
      onCLick={() => navigate("/desktop")}
      title="PRITISHA OS"
      subtitle="Initializing workspace…"
      buttonLabel="▶ ENTER WORKSPACE"
      showPolaroid={true}
    />
  );
}

function Desktop() {
  const navigate = useNavigate();
  return (
    <DesktopWindow
      onCLick={() => {}}
      title="Desktop"
      buttonLabel=""
    >
      <span className="text-xs tracking-widest text-green-600">SYSTEM READY ●</span>
      <div className="grid grid-cols-2 gap-4">
        <button className="pixel-button text-xs" onClick={() => navigate("/about")}>📄 ABOUT</button>
        <button className="pixel-button text-xs" onClick={() => navigate("/projects")}>🧩 PROJECTS</button>
        <button className="pixel-button text-xs" onClick={() => navigate("/architecture")}>🏗 ARCHITECTURE</button>
        <button className="pixel-button text-xs" onClick={() => navigate("/contact")}>✉ CONTACT</button>
      </div>
    </DesktopWindow>
  );
}

function About() {
  const navigate = useNavigate();
  return (
    <DesktopWindow
      onCLick={() => navigate("/desktop")}
      title="About Me"
      buttonLabel="⬅ BACK TO DESKTOP"
    >
      <div className="space-y-4 text-xs max-w-md">
        <p>I'm a software engineer with experience building scalable, interactive web applications.</p>
        <p>My work focuses on clear state modeling, maintainable architecture, and thoughtful UI systems.</p>
        <p>I work primarily with React, Node.js, and am actively developing backend systems and services using Python.</p>
      </div>
    </DesktopWindow>
  );
}

function Projects() {
  const navigate = useNavigate();
  return (
    <DesktopWindow
      onCLick={() => navigate("/desktop")}
      title="Projects"
      buttonLabel="⬅ BACK TO DESKTOP"
    >
      <ul className="list-disc pl-4 space-y-2 text-xs max-w-md">
        <li>Decision-based UI systems with complex state constraints</li>
        <li>React + Redux applications focused on correctness and scalability</li>
        <li>Full-stack experiments integrating Python services</li>
      </ul>
    </DesktopWindow>
  );
}

function Architecture() {
  const navigate = useNavigate();
  return (
    <DesktopWindow
      onCLick={() => navigate("/desktop")}
      title="Architecture"
      buttonLabel="⬅ BACK TO DESKTOP"
    >
      <div className="space-y-4 text-xs max-w-md">
        <p>I focus on predictable data flow, separation of concerns, and avoiding architectural anti-patterns.</p>
        <p>I enjoy reasoning about trade-offs: when to centralize state, when to defer updates, and how to design systems that scale with team size.</p>
      </div>
    </DesktopWindow>
  );
}

function Contact() {
  const navigate = useNavigate();
  return (
    <DesktopWindow
      onCLick={() => navigate("/desktop")}
      title="Contact"
      buttonLabel="⬅ BACK TO DESKTOP"
    >
      <div className="space-y-4 text-xs max-w-md">
        <p>Interested in working together or discussing systems, architecture, or product design?</p>
        <p className="tracking-widest">EMAIL · GITHUB · LINKEDIN</p>
      </div>
    </DesktopWindow>
  );
}

function App() {
  return (
    <BrowserRouter basename="/Valetines">
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
