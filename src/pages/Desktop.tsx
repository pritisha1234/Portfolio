import { useState } from "react";
import DesktopWindow from "../components/fake-window";
import DraggableWindow from "../components/draggable-window";
import { useNavigate } from "react-router-dom";

type WindowType = "about" | "projects" | "architecture" | "contact";

export default function Desktop() {
  const [openWindows, setOpenWindows] = useState<WindowType[]>([]);

  const openWindow = (type: WindowType) => {
    if (!openWindows.includes(type)) {
      setOpenWindows([...openWindows, type]);
    }
  };

  const closeWindow = (type: WindowType) => {
    setOpenWindows(openWindows.filter((w) => w !== type));
  };

  const getWindowOffset = (index: number) => ({
    x: 100 + index * 30,
    y: 100 + index * 30,
  });
  const navigate = useNavigate();

  return (
    <>
      <DesktopWindow onCLick={() => { }} title="Desktop" buttonLabel="">
        <button
          className=" pixel-button bg-[#f6c1d1] left-10 top-20 absolute"
          onClick={() => navigate("/")}

        >
          &lt;
        </button>
        <span className="text-xs tracking-widest text-green-600">SYSTEM READY ●</span>
        <div className="grid grid-cols-2 gap-6">
          <button
            className="flex flex-col items-center gap-1 bg-transparent border-none cursor-pointer folder-icon"
            onClick={() => openWindow("about")}
          >
            <img src="/Portfolio/folder_icon.png" alt="" className="w-20 h-20" />
            <span className="text-[10px] text-[#5a2f3d]">ABOUT</span>
          </button>
          <button
            className="flex flex-col items-center gap-1 bg-transparent border-none cursor-pointer folder-icon"
            onClick={() => openWindow("projects")}
          >
            <img src="/Portfolio/folder_icon.png" alt="" className="w-20 h-20" />
            <span className="text-[10px] text-[#5a2f3d]">PROJECTS</span>
          </button>
          <button
            className="flex flex-col items-center gap-1 bg-transparent border-none cursor-pointer folder-icon"
            onClick={() => openWindow("architecture")}
          >
            <img src="/Portfolio/folder_icon.png" alt="" className="w-20 h-20" />
            <span className="text-[10px] text-[#5a2f3d]">ARCHITECTURE</span>
          </button>
          <button
            className="flex flex-col items-center gap-1 bg-transparent border-none cursor-pointer folder-icon"
            onClick={() => openWindow("contact")}
          >
            <img src="/Portfolio/folder_icon.png" alt="" className="w-20 h-20" />
            <span className="text-[10px] text-[#5a2f3d]">CONTACT</span>
          </button>
        </div>
        {openWindows.length >= 0 && (
          <button className="absolute -bottom-12 text-xs pixel-button">
            Close all windows
          </button>
        )}
      </DesktopWindow>


      {openWindows.map((windowType, index) => {
        const offset = getWindowOffset(index);

        if (windowType === "about") {
          return (
            <DraggableWindow
              key="about"
              title="About Me"
              onClose={() => closeWindow("about")}
              initialX={offset.x}
              initialY={offset.y}
            >
              <div className="space-y-4 text-xs">
                <p>I'm a software engineer with experience building scalable, interactive web applications.</p>
                <p>My work focuses on clear state modeling, maintainable architecture, and thoughtful UI systems.</p>
                <p>I work primarily with React, Node.js, and am actively developing backend systems and services using Python.</p>
              </div>
            </DraggableWindow>
          );
        }

        if (windowType === "projects") {
          return (
            <DraggableWindow
              key="projects"
              title="Projects"
              onClose={() => closeWindow("projects")}
              initialX={offset.x}
              initialY={offset.y}
            >
              <ul className="list-disc pl-4 space-y-2 text-xs">
                <li>Decision-based UI systems with complex state constraints</li>
                <li>React + Redux applications focused on correctness and scalability</li>
                <li>Full-stack experiments integrating Python services</li>
              </ul>
            </DraggableWindow>
          );
        }

        if (windowType === "architecture") {
          return (
            <DraggableWindow
              key="architecture"
              title="Architecture"
              onClose={() => closeWindow("architecture")}
              initialX={offset.x}
              initialY={offset.y}
            >
              <div className="space-y-4 text-xs">
                <p>I focus on predictable data flow, separation of concerns, and avoiding architectural anti-patterns.</p>
                <p>I enjoy reasoning about trade-offs: when to centralize state, when to defer updates, and how to design systems that scale with team size.</p>
              </div>
            </DraggableWindow>
          );
        }

        if (windowType === "contact") {
          return (
            <DraggableWindow
              key="contact"
              title="Contact"
              onClose={() => closeWindow("contact")}
              initialX={offset.x}
              initialY={offset.y}
            >
              <div className="space-y-4 text-xs">
                <p>Interested in working together or discussing systems, architecture, or product design?</p>
                <p className="tracking-widest">EMAIL · GITHUB · LINKEDIN</p>
              </div>
            </DraggableWindow>
          );
        }

        return null;
      })}
    </>
  );
}
