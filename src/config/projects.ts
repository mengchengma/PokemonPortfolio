export const PROJECTS = [
  {
    id: "001",
    name: "TIMESHEET ANALYZER",
    description:
      "Internal budget analysis tool at InterSoft Associates. Automated executive reporting with Excel exports, reducing report generation time by 94%. Built 25+ C# endpoints connecting React to SQL Server for 30 employees.",
    emoji: "⏱️",
    spritePath: "/sprites/piplup.gif",
    types: ["React", "C#", "SQL Server"],
    link: null as string | null,
    role: "SOFTWARE DEV",
    status: "PRODUCTION",
    stats: [
      { label: "EFFICIENCY", value: 94 },
      { label: "ENDPOINTS", value: 85 },
      { label: "TEAM SIZE", value: 50 },
    ],
  },
  {
    id: "002",
    name: "RENTALLY AI",
    description:
      "AI-powered rental platform built as tech lead of a 4-member team. Integrated Gemini API for intelligent chatbot recommendations with full CRUD functionality for listings and profiles.",
    emoji: "🏠",
    spritePath: "/sprites/mudkip.gif",
    types: ["React Native", "TypeScript", "Firebase", "AI"],
    link: "https://github.com/mengchengma/RentallyAI",
    role: "TECH LEAD",
    status: "DEPLOYED",
    stats: [
      { label: "AI POWER", value: 88 },
      { label: "TEAM SIZE", value: 40 },
      { label: "COMPLEXITY", value: 82 },
    ],
  },
  {
    id: "003",
    name: "BLACKJACK WEB GAME",
    description:
      "Real-time multiplayer card game with up to 3 players per room. Features betting system, hand splitting, dealer logic, and automated card reveals through WebSocket communication.",
    emoji: "🃏",
    spritePath: "/sprites/gengar.gif",
    types: ["React", "TypeScript", "Node.js", "Socket.io"],
    link: "https://github.com/WildUni/BlackJackWebGame",
    role: "FULL STACK DEV",
    status: "DEPLOYED",
    stats: [
      { label: "REAL-TIME", value: 95 },
      { label: "COMPLEXITY", value: 80 },
      { label: "FUN FACTOR", value: 92 },
    ],
  },
  {
    id: "004",
    name: "INVOICE MANAGER",
    description:
      "Invoice management application hosted on Vercel with NeonDB PostgreSQL. Led 3-member team. Implemented secure authentication with NextAuth and Bcrypt for contractors and clients.",
    emoji: "📄",
    spritePath: "/sprites/dewgong.gif",
    types: ["Next.js", "TypeScript", "PostgreSQL"],
    link: "https://docs.google.com/presentation/d/1j-2uWl0zazudjv-c7rwZTj1YkvaMC1SGjNPKJX48IWI/edit?usp=sharing",
    role: "TEAM LEAD",
    status: "DEPLOYED",
    stats: [
      { label: "SECURITY", value: 85 },
      { label: "COMPLEXITY", value: 72 },
      { label: "RELIABILITY", value: 88 },
    ],
  },
];
