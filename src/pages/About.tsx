import { useNavigate } from "react-router-dom";
import DesktopWindow from "../components/fake-window";

export default function About() {
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
