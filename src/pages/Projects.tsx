import { useNavigate } from "react-router-dom";
import DesktopWindow from "../components/fake-window";

export default function Projects() {
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
