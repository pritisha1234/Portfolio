import { useNavigate } from "react-router-dom";
import DesktopWindow from "../components/fake-window";

export default function Contact() {
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
