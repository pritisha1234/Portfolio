type ModalWindowProps = {
  title: string;
  onClose: () => void;
  children: React.ReactNode;
};

export default function ModalWindow({ title, onClose, children }: ModalWindowProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="w-[600px] bg-[#fdecec] rounded-2xl border-4 border-[#7a4b5e] shadow-2xl animate-popup">
        {/* Title bar */}
        <div className="flex bg-[#f79ca5] rounded-t-xl items-center justify-between border-b-4 border-[#7a4b5e] px-4 py-3">
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
    </div>
  );
}
