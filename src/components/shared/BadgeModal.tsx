import { useEffect } from "react";
import { BADGES } from "../../config/badges";
import { getAsset } from "../../utils/assets";
import TypeTag from "./TypeTag";

type Badge = (typeof BADGES)[number];

export default function BadgeModal({
  badge,
  onClose,
}: {
  badge: Badge;
  onClose: () => void;
}) {
  const asset = getAsset(badge.imagePath, badge.emoji);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={(e) => {
        e.stopPropagation();
        onClose();
      }}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-[rgba(0,0,0,0.7)]" />

      {/* Modal */}
      <div
        className="relative w-full max-w-[560px] rounded-[6px] border-[3px] border-[var(--light-blue)] overflow-hidden animate-fadeIn"
        style={{
          background: "linear-gradient(145deg, #1c4a7a, #0d2d4f)",
          boxShadow:
            "0 0 0 1px #0a1f36, 0 0 40px rgba(74,144,217,0.4), inset 0 1px 0 rgba(168,212,245,0.2)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between px-5 py-3 border-b-2 border-[var(--light-blue)]"
          style={{
            background:
              "linear-gradient(90deg, var(--mid-blue), var(--water-teal), var(--mid-blue))",
          }}
        >
          <span className="font-pixel text-[9px] text-[var(--white)] tracking-[2px]">
            BADGE INFO
          </span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            className="font-pixel text-[10px] text-[var(--gold)] bg-transparent border-none cursor-pointer hover:text-[var(--white)] transition-colors"
          >
            ✕
          </button>
        </div>

        {/* Top section: badge image + info */}
        <div className="grid grid-cols-[120px_1fr] border-b border-[rgba(74,144,217,0.25)]">
          <div
            className="flex items-center justify-center border-r border-[rgba(74,144,217,0.25)] p-4"
            style={{
              background: "linear-gradient(180deg, #0e2a45, #0a1f36)",
            }}
          >
            <div
              className="text-[56px]"
              style={{
                filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.5))",
              }}
            >
              {asset.type === "image" ? (
                <img
                  src={asset.src}
                  alt={badge.name}
                  className="w-16 h-16 pixelated"
                />
              ) : (
                asset.value
              )}
            </div>
          </div>

          <div className="p-4 flex flex-col gap-2">
            <span className="font-pixel text-[13px] text-[var(--white)] tracking-[2px]">
              {badge.name}
            </span>

            <div className="font-vt text-[20px] text-[var(--pale-blue)]">
              {badge.company}
            </div>

            <div className="flex gap-6 mt-1">
              <div>
                <div className="font-pixel text-[7px] text-[var(--pale-blue)] tracking-[1px] opacity-60">
                  PERIOD
                </div>
                <div className="font-vt text-[18px] text-[var(--gold)]">
                  {badge.period}
                </div>
              </div>
              <div>
                <div className="font-pixel text-[7px] text-[var(--pale-blue)] tracking-[1px] opacity-60">
                  LOCATION
                </div>
                <div className="font-vt text-[18px] text-[#40e060]">
                  {badge.location}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="px-5 py-4 border-b border-[rgba(74,144,217,0.25)]">
          <div className="font-pixel text-[8px] text-[var(--gold)] tracking-[2px] mb-2">
            DESCRIPTION
          </div>
          <div className="font-vt text-[20px] text-[var(--pale-blue)] leading-[1.3]">
            {badge.description}
          </div>
        </div>

        {/* Skills */}
        <div className="px-5 py-4">
          <div className="font-pixel text-[8px] text-[var(--gold)] tracking-[2px] mb-3">
            SKILLS
          </div>
          <div className="flex gap-2 flex-wrap">
            {badge.skills.map((s) => (
              <TypeTag key={s} type={s} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
