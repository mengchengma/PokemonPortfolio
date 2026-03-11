import { PARTY } from "../../config/party";
import { getAsset } from "../../utils/assets";
import HpBar from "../shared/HpBar";

export default function PartyPanel({ animate }: { animate: boolean }) {
  return (
    <div className="p-8 animate-fadeIn">
      <div className="font-pixel text-[10px] text-[var(--gold)] tracking-[4px] mb-5 pb-3 border-b border-[rgba(245,200,66,0.2)]">
        ACTIVE PARTY — TECH STACK
      </div>
      <div className="grid grid-cols-2 gap-5 max-[480px]:grid-cols-1">
        {PARTY.map((mon) => {
          const asset = getAsset(mon.spritePath, mon.emoji);
          return (
            <div
              key={mon.name}
              className="grid grid-cols-[80px_1fr] gap-4 bg-[rgba(10,31,54,0.5)]
                border border-[rgba(74,144,217,0.25)] rounded-[3px] p-5
                transition-all duration-200 hover:border-[var(--light-blue)] hover:-translate-y-[1px]"
            >
              <div className="flex flex-col items-center gap-1">
                <span
                  className="text-[40px] block"
                  style={{ filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.5))" }}
                >
                  {asset.type === "image" ? (
                    <img src={asset.src} alt={mon.name} className="w-12 h-12 pixelated" />
                  ) : (
                    asset.value
                  )}
                </span>
                <div className="font-pixel text-[11px] text-[var(--gold)] tracking-[1px]">
                  Lv. {mon.level}
                </div>
              </div>
              <div className="flex flex-col gap-2 justify-center">
                <div className="font-pixel text-[12px] text-[var(--white)] tracking-[2px]">
                  {mon.name}
                </div>
                <div className="font-vt text-[22px] text-[var(--pale-blue)]">
                  {mon.type}
                </div>
                <HpBar level={mon.level} animate={animate} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
