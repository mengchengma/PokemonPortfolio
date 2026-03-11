export default function PixelButton({
  label,
  onClick,
}: {
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="font-pixel text-[7px] tracking-[1px] px-3 py-[6px] rounded-[2px] cursor-pointer
        bg-gradient-to-b from-[#4a5568] to-[#2d3748] text-[#e2e8f0]
        border border-[#718096] shadow-[inset_0_1px_0_#718096,0_2px_4px_rgba(0,0,0,0.3)]
        hover:from-[#5a6578] hover:to-[#3d4758] active:translate-y-[1px] active:shadow-none
        transition-all duration-100"
    >
      {label}
    </button>
  );
}
