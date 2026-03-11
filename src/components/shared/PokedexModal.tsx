import { useEffect } from "react";
import { PROJECTS } from "../../config/projects";
import { getAsset } from "../../utils/assets";
import TypeTag from "./TypeTag";

type Project = (typeof PROJECTS)[number];

function StatBar({ label, value }: { label: string; value: number }) {
  return (
    <div className="flex items-center gap-3">
      <div className="font-pixel text-[9px] text-[var(--pale-blue)] tracking-[1px] w-[100px] shrink-0">
        {label}
      </div>
      <div className="flex-1 h-[6px] bg-[rgba(255,255,255,0.08)] rounded-sm overflow-hidden">
        <div
          className="h-full rounded-sm transition-[width] duration-700 ease-out"
          style={{
            width: `${value}%`,
            background:
              value >= 85
                ? "linear-gradient(90deg, #20c040, #40e060)"
                : value >= 60
                  ? "linear-gradient(90deg, #e0a020, #f0c040)"
                  : "linear-gradient(90deg, #d04040, #e06060)",
            boxShadow:
              value >= 85
                ? "0 0 4px #20c04066"
                : value >= 60
                  ? "0 0 4px #e0a02066"
                  : "0 0 4px #d0404066",
          }}
        />
      </div>
      <div className="font-vt text-[18px] text-[var(--white)] w-[32px] text-right">
        {value}
      </div>
    </div>
  );
}

export default function PokedexModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const asset = getAsset(project.spritePath, project.emoji);

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
          <div className="flex gap-5">
            <span className="font-pixel text-[9px] text-[var(--white)] tracking-[2px]">
              INFO
            </span>
            <span className="font-pixel text-[9px] text-[var(--pale-blue)] tracking-[2px] opacity-50">
              STATS
            </span>
            <span className="font-pixel text-[9px] text-[var(--pale-blue)] tracking-[2px] opacity-50">
              LINKS
            </span>
          </div>
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

        {/* Top section: sprite + info */}
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
                  alt={project.name}
                  className="w-16 h-16 pixelated"
                />
              ) : (
                asset.value
              )}
            </div>
          </div>

          <div className="p-4 flex flex-col gap-2">
            <div className="flex items-baseline gap-3">
              <span className="font-pixel text-[8px] text-[rgba(168,212,245,0.4)]">
                #{project.id}
              </span>
              <span className="font-pixel text-[13px] text-[var(--white)] tracking-[2px]">
                {project.name}
              </span>
            </div>

            <div className="flex gap-2 flex-wrap">
              {project.types.map((t) => (
                <TypeTag key={t} type={t} />
              ))}
            </div>

            <div className="flex gap-6 mt-1">
              <div>
                <div className="font-pixel text-[7px] text-[var(--pale-blue)] tracking-[1px] opacity-60">
                  ROLE
                </div>
                <div className="font-vt text-[18px] text-[var(--gold)]">
                  {project.role}
                </div>
              </div>
              <div>
                <div className="font-pixel text-[7px] text-[var(--pale-blue)] tracking-[1px] opacity-60">
                  STATUS
                </div>
                <div className="font-vt text-[18px] text-[#40e060]">
                  {project.status}
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
            {project.description}
          </div>
        </div>

        {/* Stats */}
        <div className="px-5 py-4 border-b border-[rgba(74,144,217,0.25)]">
          <div className="font-pixel text-[8px] text-[var(--gold)] tracking-[2px] mb-3">
            BASE STATS
          </div>
          <div className="flex flex-col gap-2">
            {project.stats.map((s) => (
              <StatBar key={s.label} label={s.label} value={s.value} />
            ))}
          </div>
        </div>

        {/* Footer with link */}
        <div className="px-5 py-3 flex justify-center">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="font-pixel text-[9px] text-[var(--gold)] tracking-[2px]
              border border-[var(--gold)] rounded-[3px] px-4 py-2 hover:bg-[rgba(245,200,66,0.1)]
              transition-colors duration-200 no-underline"
          >
            VIEW ON GITHUB
          </a>
        </div>
      </div>
    </div>
  );
}
