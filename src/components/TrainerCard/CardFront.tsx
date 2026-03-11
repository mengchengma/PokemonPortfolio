import { useState } from "react";
import { TRAINER } from "../../config/trainer";
import { THEME } from "../../config/theme";
import PixelTrainer from "../shared/PixelTrainer";
import BadgesPanel from "../panels/BadgesPanel";
import PokedexPanel from "../panels/PokedexPanel";
import PartyPanel from "../panels/PartyPanel";
import ContactPanel from "../panels/ContactPanel";

const TABS = ["BADGES", "POKEDEX", "PARTY", "PKMN CTR"] as const;
type TabId = (typeof TABS)[number];

export default function CardFront({ onFlip }: { onFlip: () => void }) {
  const [activeTab, setActiveTab] = useState<TabId>("BADGES");
  const [partyAnimate, setPartyAnimate] = useState(false);

  const handleTabClick = (tab: TabId) => {
    setActiveTab(tab);
    if (tab === "PARTY") {
      setPartyAnimate(true);
      setTimeout(() => setPartyAnimate(false), 1200);
    }
  };

  const tabIndex = TABS.indexOf(activeTab);

  return (
    <div
      className="w-full overflow-hidden rounded-[6px] border-[3px] border-[var(--light-blue)]"
      style={{
        background: "linear-gradient(145deg, #1c4a7a, #0d2d4f)",
        boxShadow:
          "0 0 0 1px #0a1f36, 0 0 30px rgba(74,144,217,0.3), inset 0 1px 0 rgba(168,212,245,0.2)",
      }}
    >
      {/* Card header stripe */}
      <div
        className="flex items-center justify-between px-8 py-5 border-b-2 border-[var(--light-blue)]"
        style={{ background: "linear-gradient(90deg, var(--mid-blue), var(--water-teal), var(--mid-blue))" }}
      >
        <span className="font-pixel text-[14px] text-[var(--white)] tracking-[4px]">TRAINER CARD</span>
        <span className="font-pixel text-[10px] px-2 py-1 rounded-[3px] tracking-[3px] bg-[var(--gold)] text-[#1a1a00]">
          {THEME.version}
        </span>
        <span className="font-pixel text-[14px] text-[var(--pale-blue)] tracking-[2px]">
          ID NO. {TRAINER.id}
        </span>
      </div>

      {/* Hero section */}
      <div className="grid grid-cols-[195px_1fr] max-[480px]:grid-cols-[120px_1fr] border-b-2 border-[rgba(74,144,217,0.3)]">
        <div
          className="border-r-2 border-[rgba(74,144,217,0.3)] flex items-center justify-center p-[4px_12px]"
          style={{ background: "linear-gradient(180deg, #0e2a45, #0a1f36)" }}
        >
          <PixelTrainer />
        </div>
        <div className="p-[16px_28px] flex flex-col gap-2">
          <div
            className="font-pixel text-[28px] max-[480px]:text-[18px] text-[var(--white)] tracking-[3px] leading-none"
            style={{ textShadow: "2px 2px 0 rgba(0,0,0,0.5)" }}
          >
            {TRAINER.name}
          </div>
          <div className="font-pixel text-[12px] text-[var(--gold)] tracking-[3px]">
            {TRAINER.title}
          </div>
          <div className="grid grid-cols-2 gap-3 mt-2">
            <Stat label="PLAY TIME" number={`${TRAINER.stats.experience}`} unit="years exp" />
            <Stat label="MONEY" number={`${TRAINER.stats.features}`} unit="features" />
            <Stat label="POKEDEX" number={`${TRAINER.stats.projects}`} unit="projects" />
            <Stat label="BADGES" number={`${TRAINER.stats.badges}`} unit="skills" />
          </div>
        </div>
      </div>

      {/* Section tabs */}
      <div className="flex border-b-2 border-[rgba(74,144,217,0.3)] bg-[rgba(10,31,54,0.6)] relative z-[2] py-1">
        {TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => handleTabClick(tab)}
            className={`flex-1 py-5 px-3 font-pixel text-[12px] tracking-[3px] text-center cursor-pointer
              border-none bg-transparent border-r border-r-[rgba(74,144,217,0.2)] last:border-r-0
              transition-all duration-150 relative
              ${
                activeTab === tab
                  ? "text-[var(--gold)] bg-[rgba(37,99,168,0.3)] after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:right-0 after:h-[2px] after:bg-[var(--gold)]"
                  : "text-[var(--pale-blue)] hover:text-[var(--white)] hover:bg-[rgba(74,144,217,0.1)]"
              }`}
          >
            {activeTab === tab && <span className="text-[8px] mr-1">&#9654;</span>}
            {tab}
          </button>
        ))}
      </div>

      {/* Panels — fixed height so card doesn't resize on tab switch */}
      <div
        className="h-[340px] overflow-y-auto overflow-x-hidden scrollbar-none"
        style={{ scrollbarWidth: "none" }}
      >
        {activeTab === "BADGES" && <BadgesPanel />}
        {activeTab === "POKEDEX" && <PokedexPanel />}
        {activeTab === "PARTY" && <PartyPanel animate={partyAnimate} />}
        {activeTab === "PKMN CTR" && <ContactPanel />}
      </div>

      {/* Card footer */}
      <div className="bg-[rgba(10,31,54,0.6)] border-t-2 border-[rgba(74,144,217,0.3)] px-8 py-4 flex items-center justify-between">
        <div className="flex gap-2">
          {TABS.map((_, i) => (
            <div
              key={i}
              className={`w-[8px] h-[8px] rounded-full ${
                i === tabIndex
                  ? "bg-[var(--light-blue)] shadow-[0_0_6px_var(--light-blue)]"
                  : "bg-[rgba(74,144,217,0.3)]"
              }`}
            />
          ))}
        </div>
        <div className="font-pixel text-[9px] text-[rgba(168,212,245,0.4)] tracking-[3px]">
          {THEME.footer}
        </div>
        <button
          onClick={(e) => { e.stopPropagation(); onFlip(); }}
          className="font-pixel text-[9px] text-[rgba(168,212,245,0.4)] tracking-[3px] bg-transparent border-none cursor-pointer hover:text-[var(--gold)] transition-colors"
        >
          BACK &#8635;
        </button>
      </div>
    </div>
  );
}

function Stat({ label, number, unit }: { label: string; number: string; unit: string }) {
  return (
    <div className="flex flex-col gap-[6px]">
      <div className="font-pixel text-[10px] text-[var(--pale-blue)] tracking-[2px]">{label}</div>
      <div className="leading-none">
        <span className="font-vt text-[28px] text-[var(--white)]">{number}</span>
        <span className="font-vt text-[18px] text-[var(--pale-blue)]"> {unit}</span>
      </div>
    </div>
  );
}
