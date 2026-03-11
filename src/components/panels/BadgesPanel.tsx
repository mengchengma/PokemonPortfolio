import { BADGES } from "../../config/badges";
import { getAsset } from "../../utils/assets";

export default function BadgesPanel() {
  return (
    <div className="p-8 animate-fadeIn">
      <div className="font-pixel text-[10px] text-[var(--gold)] tracking-[4px] mb-5 pb-3 border-b border-[rgba(245,200,66,0.2)]">
        SKILL BADGES OBTAINED
      </div>
      <div className="grid grid-cols-4 gap-5 max-[480px]:grid-cols-3">
        {BADGES.map((badge) => {
          const asset = getAsset(badge.imagePath, badge.emoji);
          return (
            <div
              key={badge.name}
              className="flex flex-col items-center gap-[10px] p-5 bg-[rgba(10,31,54,0.5)]
                border border-[rgba(74,144,217,0.25)] rounded-[3px] transition-all duration-200
                hover:border-[var(--gold)] hover:bg-[rgba(245,200,66,0.05)] hover:-translate-y-[2px]
                hover:shadow-[0_4px_12px_rgba(245,200,66,0.15)]"
            >
              <div className="text-[36px]" style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.4))" }}>
                {asset.type === "image" ? (
                  <img src={asset.src} alt={badge.name} className="w-12 h-12 pixelated" />
                ) : (
                  asset.value
                )}
              </div>
              <div className="font-pixel text-[11px] text-[var(--gold)] tracking-[1px] text-center leading-[1.4]">
                {badge.name}
              </div>
              <div className="font-vt text-[22px] text-[var(--pale-blue)] text-center leading-[1.2]">
                {badge.tech}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
