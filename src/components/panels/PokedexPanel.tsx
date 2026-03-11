import { useState } from "react";
import { PROJECTS } from "../../config/projects";
import { getAsset } from "../../utils/assets";
import TypeTag from "../shared/TypeTag";
import PokedexModal from "../shared/PokedexModal";

export default function PokedexPanel() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selectedProject = PROJECTS.find((p) => p.id === selectedId) ?? null;

  return (
    <div className="p-8 animate-fadeIn">
      <div className="font-pixel text-[10px] text-[var(--gold)] tracking-[4px] mb-5 pb-3 border-b border-[rgba(245,200,66,0.2)]">
        POKEDEX — PROJECT ENTRIES
      </div>
      <div className="flex flex-col gap-4">
        {PROJECTS.map((project) => {
          const asset = getAsset(project.spritePath, project.emoji);

          return (
            <div
              key={project.id}
              onClick={(e) => {
                e.stopPropagation();
                setSelectedId(project.id);
              }}
              className="grid grid-cols-[68px_1fr] gap-5 bg-[rgba(10,31,54,0.5)]
                border border-[rgba(74,144,217,0.25)] rounded-[3px] p-5 cursor-pointer
                transition-all duration-200 relative overflow-hidden
                hover:border-[var(--light-blue)] hover:bg-[rgba(37,99,168,0.15)]
                before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0
                before:w-[4px] before:bg-[var(--light-blue)] before:scale-y-0 before:transition-transform
                before:duration-200 before:origin-bottom hover:before:scale-y-100"
            >
              <div>
                <div className="font-pixel text-[8px] text-[rgba(168,212,245,0.4)] text-center leading-none pt-1">
                  #{project.id}
                </div>
                <div className="text-[36px] block text-center" style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.4))" }}>
                  {asset.type === "image" ? (
                    <img src={asset.src} alt={project.name} className="w-14 h-14 mx-auto mt-5" />
                  ) : (
                    asset.value
                  )}
                </div>
              </div>
              <div className="flex flex-col gap-[10px]">
                <div className="font-pixel text-[11px] text-[var(--white)] tracking-[2px]">
                  {project.name}
                </div>
                <div className="font-vt text-[20px] text-[var(--pale-blue)] leading-[1.3]">
                  {project.description}
                </div>
                <div className="flex gap-2 mt-1 flex-wrap">
                  {project.types.map((t) => (
                    <TypeTag key={t} type={t} />
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {selectedProject && (
        <PokedexModal
          project={selectedProject}
          onClose={() => setSelectedId(null)}
        />
      )}
    </div>
  );
}
