type DesktopWindowProps = {
    onCLick: () => void;
    title: string;
    subtitle?: string;
    buttonLabel: string;
    showPolaroid?: boolean;
    children?: React.ReactNode;
};

export default function DesktopWindow({
    onCLick,
    title,
    subtitle,
    buttonLabel,
    showPolaroid = false,
    children,
}: DesktopWindowProps) {
    return (
        <div className="flex items-center justify-center">
            {/* Window */}
            <div className="w-[720px] h-[420px] bg-[#fdecec] rounded-2xl border-4 border-[#7a4b5e] shadow-xl relative">
                {/* Polaroid Photo */}
                {showPolaroid && (
                    <div className="absolute -bottom-16 -left-12 -rotate-6 z-20">
                        <div className="absolute -top-3 left-10 w-20 h-6 bg-yellow-200 opacity-70 rotate-3"></div>

                        <div className="bg-white p-3 pb-10 border-2 border-[#7a4b5e] shadow-lg w-48">
                            <img
                                src="/Valetines/headshot.jpeg"
                                className="w-full h-52 object-cover"
                            />
                            <p className="text-xs text-center mt-3 text-[#5a2f3d] font-handwriting">
                                Know more about me
                            </p>
                        </div>
                    </div>
                )}
                {/* Title bar */}
                <div className="flex bg-[#f79ca5] rounded-t-xl items-center justify-between border-b-4 border-[#7a4b5e] px-4 py-3">
                    <span className="text-[#5a2f3d] font-bold text-sm tracking-wide">
                        {title}
                    </span>

                    {/* Window buttons */}
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
                            className="w-6 h-6 bg-[#f26d6d] rounded-sm border border-[#5a2f3d] flex items-center justify-center text-[#5a2f3d] font-bold"
                        >
                            ✕
                        </button>
                    </div>
                </div>

                {/* Content */}
                <div className="flex flex-col justify-between gap-12 p-6">
                    <div className="flex flex-col items-center text-center gap-4">
                        {subtitle && (
                            <p className="text-xs tracking-widest text-[#5a2f3d] opacity-80">
                                {subtitle}
                            </p>
                        )}

                        {children || (
                            <>
                                <span className="text-xs text-[#5a2f3d]">
                                    Full-Stack Engineer · React · Node · Python
                                </span>

                                <button
                                    className="pixel-button mt-2"
                                    onClick={onCLick}
                                >
                                    {buttonLabel}
                                </button>
                            </>
                        )}
                    </div>

                    {/* Footer */}
                    <div className="text-[10px] tracking-widest text-[#5a2f3d] text-right opacity-70">
                        SYSTEM STATUS: STABLE
                    </div>
                </div>
            </div>
        </div>
    );
}
