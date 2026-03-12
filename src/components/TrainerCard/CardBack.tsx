import { THEME } from "../../config/theme";
import { TRAINER } from "../../config/trainer";

export default function CardBack() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-[#0d2d4f] to-[#1c4a7a] border-[3px] border-[var(--light-blue)] rounded-[6px] overflow-hidden shadow-[0_0_0_1px_#0a1f36,0_0_30px_rgba(74,144,217,0.3)] flex flex-col items-center justify-center relative">
      {/* Holographic shimmer overlay */}
      <div className="absolute inset-0 opacity-30 pointer-events-none animate-shimmer"
        style={{
          background: "linear-gradient(135deg, transparent 20%, rgba(168,212,245,0.15) 30%, rgba(245,200,66,0.1) 40%, transparent 50%, rgba(74,144,217,0.15) 60%, rgba(245,200,66,0.08) 70%, transparent 80%)",
          backgroundSize: "200% 200%",
        }}
      />

      {/* Water ripple pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          background: "repeating-linear-gradient(0deg, transparent, transparent 8px, rgba(74,144,217,0.3) 8px, rgba(74,144,217,0.3) 9px)",
          animation: "scanlines 6s linear infinite",
        }}
      />

      {/* Title */}
      <div className="font-pixel text-[14px] text-[var(--pale-blue)] tracking-[6px] mb-4 relative z-10">
        TRAINER CARD
      </div>

      {/* Pokeball CSS design */}
      <div className="relative w-[180px] h-[180px] z-10">
        {/* Top half (red) */}
        <div className="absolute inset-0 rounded-full overflow-hidden border-[4px] border-[rgba(74,144,217,0.4)]">
          <div className="h-1/2 bg-gradient-to-b from-[#cc2233] to-[#aa1122]" />
          <div className="h-1/2 bg-gradient-to-b from-[#e8e8e8] to-[#cccccc]" />
        </div>
        {/* Center line */}
        <div className="absolute top-1/2 left-0 right-0 h-[5px] bg-[#333] -translate-y-1/2 z-10" />
        {/* Center button */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-[#333] border-[4px] border-[#555] z-20 flex items-center justify-center">
          <div className="w-7 h-7 rounded-full bg-[#eee] border-[3px] border-[#aaa] shadow-[inset_0_2px_4px_rgba(0,0,0,0.2),0_0_8px_rgba(255,255,255,0.3)]" />
        </div>
        {/* Glow */}
        <div className="absolute inset-0 rounded-full shadow-[0_0_40px_rgba(74,144,217,0.2),inset_0_0_20px_rgba(74,144,217,0.1)]" />
      </div>

      {/* Version badge */}
      <div className="mt-4 font-pixel text-[11px] text-[var(--gold)] tracking-[4px] relative z-10">
        {THEME.version} VERSION
      </div>

      {/* Trainer bio */}
      <div className="mt-4 px-8 text-center relative z-10">
        <div className="font-pixel text-[9px] text-[var(--pale-blue)] tracking-[3px] mb-2">
          TRAINER PROFILE
        </div>
        <div className="font-vt text-[18px] text-[rgba(168,212,245,0.5)] leading-[1.4]">
          {TRAINER.bio}
        </div>
      </div>

      {/* Secret info */}
      <div className="mt-4 flex flex-col items-center relative z-10">
        <div className="font-vt text-[20px] text-[rgba(168,212,245,0.4)] tracking-[2px]">
          {TRAINER.email}
        </div>
        <div className="flex gap-6">
          <a
            href={TRAINER.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="font-vt text-[20px] text-[rgba(168,212,245,0.4)] hover:text-[var(--gold)] transition-colors no-underline"
          >
            GitHub
          </a>
          <a
            href={TRAINER.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="font-vt text-[20px] text-[rgba(168,212,245,0.4)] hover:text-[var(--gold)] transition-colors no-underline"
          >
            LinkedIn
          </a>
        </div>
      </div>

      {/* Click prompt */}
      <div className="mt-2 font-pixel text-[10px] text-[var(--pale-blue)] tracking-[3px] z-10 animate-pulse cursor-pointer">
        CLICK TO START
      </div>

      {/* Bottom decoration */}
      <div className="absolute bottom-5 font-pixel text-[8px] text-[rgba(168,212,245,0.2)] tracking-[4px] z-10">
        {THEME.footer}
      </div>
    </div>
  );
}
