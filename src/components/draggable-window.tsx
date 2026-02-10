import { useState, useRef, useEffect } from "react";

type DraggableWindowProps = {
  title: string;
  onClose: () => void;
  children: React.ReactNode;
  initialX?: number;
  initialY?: number;
};

export default function DraggableWindow({ title, onClose, children, initialX = 100, initialY = 100 }: DraggableWindowProps) {
  const [position, setPosition] = useState({ x: initialX, y: initialY });
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const windowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        setPosition({
          x: e.clientX - dragOffset.x,
          y: e.clientY - dragOffset.y,
        });
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, dragOffset]);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (windowRef.current) {
      const rect = windowRef.current.getBoundingClientRect();
      setDragOffset({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
      setIsDragging(true);
    }
  };

  return (
    <div
      ref={windowRef}
      className="fixed w-[600px] bg-[#fdecec] rounded-2xl border-4 border-[#7a4b5e] shadow-2xl animate-popup"
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    >
      {/* Title bar */}
      <div
        className="flex bg-[#f79ca5] rounded-t-xl items-center justify-between border-b-4 border-[#7a4b5e] px-4 py-3 cursor-move"
        onMouseDown={handleMouseDown}
      >
        <span className="text-[#5a2f3d] font-bold text-sm tracking-wide">{title}</span>
        <div className="flex gap-2">
          <button
            aria-label="minimize"
            className="w-6 h-6 bg-[#ffd966] rounded-sm border border-[#5a2f3d] flex items-center justify-center text-[#5a2f3d] font-bold"
          >
            −
          </button>
          <button
            aria-label="maximize"
            className="w-6 h-6 bg-[#a4d4ae] rounded-sm border border-[#5a2f3d] flex items-center justify-center text-[#5a2f3d] font-bold"
          >
            □
          </button>
          <button
            aria-label="close"
            onClick={onClose}
            className="w-6 h-6 bg-[#f26d6d] rounded-sm border border-[#5a2f3d] flex items-center justify-center text-[#5a2f3d] font-bold hover:bg-[#ff8d8d]"
          >
            ✕
          </button>
        </div>
      </div>
      {/* Content */}
      <div className="p-8 max-h-[500px] overflow-y-auto">
        {children}
      </div>
    </div>
  );
}
