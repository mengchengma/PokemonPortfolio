import { THEME } from "./config/theme";
import Bubbles from "./components/shared/Bubbles";
import TrainerCard from "./components/TrainerCard/TrainerCard";

export default function App() {
  return (
    <>
      <Bubbles />

      <div className="relative z-[1] font-pixel text-[9px] text-[var(--pale-blue)] tracking-[4px] uppercase mb-5 opacity-70">
        POKEMON {THEME.version} VERSION
      </div>

      <div className="relative z-[1] w-full flex justify-center animate-cardIn">
        <TrainerCard />
      </div>
    </>
  );
}
