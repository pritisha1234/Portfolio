import { useNavigate } from "react-router-dom";
import DesktopWindow from "../components/fake-window";

export default function Boot() {
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
