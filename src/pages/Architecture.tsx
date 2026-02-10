import { useNavigate } from "react-router-dom";
import DesktopWindow from "../components/fake-window";

export default function Architecture() {
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
