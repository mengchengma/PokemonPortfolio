import { useEffect, useRef } from "react";

export default function Bubbles() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    function makeBubble() {
      const b = document.createElement("div");
      const size = Math.random() * 20 + 6;
      b.style.cssText = `
        position: absolute;
        bottom: -20px;
        border-radius: 50%;
        background: rgba(74,144,217,0.12);
        border: 1px solid rgba(74,144,217,0.2);
        animation: rise linear infinite;
        width: ${size}px;
        height: ${size}px;
        left: ${Math.random() * 100}%;
        animation-duration: ${Math.random() * 12 + 8}s;
        animation-delay: ${Math.random() * 4}s;
        opacity: ${Math.random() * 0.4 + 0.1};
      `;
      container!.appendChild(b);
      setTimeout(() => b.remove(), 20000);
    }

    // Initial burst
    for (let i = 0; i < 8; i++) {
      setTimeout(makeBubble, i * 200);
    }

    const interval = setInterval(makeBubble, 800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
    />
  );
}
