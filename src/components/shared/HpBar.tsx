import { useEffect, useRef, useState } from "react";

export default function HpBar({ level, animate }: { level: number; animate: boolean }) {
  const [width, setWidth] = useState(animate ? 0 : level);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (animate) {
      setWidth(0);
      const t = setTimeout(() => setWidth(level), 50);
      return () => clearTimeout(t);
    } else {
      setWidth(level);
    }
  }, [animate, level]);

  return (
    <div className="h-1 bg-white/10 rounded-sm mt-[2px] overflow-hidden">
      <div
        ref={ref}
        className="h-full rounded-sm transition-[width] duration-1000 ease-out"
        style={{
          width: `${width}%`,
          background: "linear-gradient(90deg, #20c040, #40e060)",
          boxShadow: "0 0 4px #20c04066",
        }}
      />
    </div>
  );
}
