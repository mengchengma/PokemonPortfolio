const TYPE_STYLES: Record<string, string> = {
  React: "bg-[#1a3a7a] text-[#61dafb] border-[#61dafb44]",
  "React Native": "bg-[#1a3a7a] text-[#61dafb] border-[#61dafb44]",
  Java: "bg-[#3a1a00] text-[#f89820] border-[#f8982044]",
  "Node.js": "bg-[#0a3a00] text-[#68a063] border-[#68a06344]",
  "SQL Server": "bg-[#1a0a3a] text-[#a68cff] border-[#a68cff44]",
  WebSocket: "bg-[#003a2a] text-[#00d4aa] border-[#00d4aa44]",
  "Socket.io": "bg-[#003a2a] text-[#00d4aa] border-[#00d4aa44]",
  AI: "bg-[#2a003a] text-[#e040fb] border-[#e040fb44]",
  TypeScript: "bg-[#002a3a] text-[#3178c6] border-[#3178c644]",
  "C#": "bg-[#1a003a] text-[#9b4dca] border-[#9b4dca44]",
  "Next.js": "bg-[#1a1a1a] text-white border-[#ffffff44]",
  Python: "bg-[#00203a] text-[#4584b6] border-[#4584b644]",
  Firebase: "bg-[#3a2200] text-[#ffca28] border-[#ffca2844]",
  PostgreSQL: "bg-[#0a1a3a] text-[#336791] border-[#33679144]",
  WordPress: "bg-[#0a1a3a] text-[#21759b] border-[#21759b44]",
  "Tailwind CSS": "bg-[#002a3a] text-[#38bdf8] border-[#38bdf844]",
  "HTML/CSS": "bg-[#3a1500] text-[#e34c26] border-[#e34c2644]",
};

export default function TypeTag({ type }: { type: string }) {
  const style = TYPE_STYLES[type] ?? "bg-[#1a1a3a] text-[#aaa] border-[#aaa4]";
  return (
    <span
      className={`font-pixel text-[8px] px-2 py-1 rounded-[2px] tracking-[1px] border ${style}`}
    >
      {type}
    </span>
  );
}
