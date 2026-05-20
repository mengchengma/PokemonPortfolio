# Pokemon Sapphire Portfolio

A Pokemon Sapphire-themed personal portfolio website presenting professional information as an interactive Trainer Card.

**Live Site:** https://mengchengma.github.io/PokemonPortfolio/

## Tech Stack

| Layer       | Technology                              |
| ----------- | --------------------------------------- |
| Framework   | React 19 + TypeScript                   |
| Build       | Vite 7                                  |
| Styling     | Tailwind CSS 4 + CSS custom properties  |
| Fonts       | Press Start 2P (headings), VT323 (body) |
| Contact     | Web3Forms API                           |
| Deployment  | GitHub Pages via GitHub Actions          |

## How It Works

The entire portfolio is a **flippable Trainer Card** with two sides:

### Card Back (Landing)
- Pokeball splash screen with a short bio
- Click anywhere to flip to the front

### Card Front (Main Content)
Four navigable tabs, each rendering a themed panel:

| Tab       | Panel          | Content                                          |
| --------- | -------------- | ------------------------------------------------ |
| BADGES    | BadgesPanel    | 10 work experience + education + certs as gym badges |
| POKEDEX   | PokedexPanel   | 4 projects as Pokedex entries with detail modals  |
| PARTY     | PartyPanel     | 6 tech skills as Pokemon party members with HP bars |
| PKMN CTR  | ContactPanel   | Contact form, info links, and resume download     |

## Project Structure

```
src/
├── components/
│   ├── TrainerCard/
│   │   ├── TrainerCard.tsx        # Flip container with 3D CSS transform
│   │   ├── CardFront.tsx          # Header, hero, tabs, panels, footer
│   │   ├── CardBack.tsx           # Pokeball splash + bio
│   │   └── TrainerCard.module.css # 3D flip animation styles
│   ├── panels/
│   │   ├── BadgesPanel.tsx        # Work experience gym badge grid
│   │   ├── PokedexPanel.tsx       # Clickable project list
│   │   ├── PartyPanel.tsx         # Tech stack as Pokemon team
│   │   └── ContactPanel.tsx       # Contact form + info + resume
│   └── shared/
│       ├── BadgeModal.tsx         # Work experience detail modal
│       ├── PokedexModal.tsx       # Project detail modal
│       ├── TypeTag.tsx            # Colored skill/tech tag pill
│       ├── HpBar.tsx              # Animated HP bar for party panel
│       ├── PixelButton.tsx        # Retro styled button
│       ├── PixelTrainer.tsx       # CSS pixel art trainer fallback
│       └── Bubbles.tsx            # Animated background bubbles
├── config/
│   ├── trainer.ts                 # Name, title, stats, bio, API keys
│   ├── theme.ts                   # Colors, version name, footer text
│   ├── badges.ts                  # 10 work experience / education entries
│   ├── projects.ts                # 4 project entries with stats
│   └── party.ts                   # 6 tech stack Pokemon
├── utils/
│   └── assets.ts                  # getAsset() helper for BASE_URL prefixing
├── App.tsx
├── main.tsx
└── index.css                      # Theme variables, animations, scanlines
```

## Content Configuration

All portfolio data lives in `src/config/` files. To update content, edit these files — no component changes needed.

### Trainer (`trainer.ts`)
- Name: MENG CHENG MA
- Title: SOFTWARE ENGINEER
- Location: New York City, USA
- Stats: 3 years experience, 4 projects, 10 badges

### Badges (`badges.ts`) — Work Experience & Education
| Badge        | Company / Org               | Period                |
| ------------ | --------------------------- | --------------------- |
| FOUNDER      | Nopad                       | Sep 2024 – May 2025  |
| SOFTWARE DEV | InterSoft Associates        | Jan 2025 – Dec 2025  |
| GRADUATE     | NYIT (B.S. CS, GPA 3.8)    | Sep 2021 – Dec 2025  |
| CERTIFIED    | AWS, Anthropic, LinkedIn    | Aug 2018 – Mar 2026  |
| RESEARCHER   | NYIT                        | Oct 2024 – May 2025  |
| OFFICE ADMIN | NYIT                        | Aug 2023 – Dec 2025  |
| STEM COACH   | NYIT Summer Maker Academy   | Jul 2023 – Aug 2023  |
| CS INTERN    | Urban Tech Center           | Mar 2023 – May 2023  |
| HOST         | Spring Shabu-Shabu          | Aug 2022 – Oct 2022  |
| TEACHER ASST | CAPA                        | Feb 2022 – May 2022  |

### Projects (`projects.ts`) — Pokedex Entries
| #   | Project             | Tech                                    | Role           |
| --- | ------------------- | --------------------------------------- | -------------- |
| 001 | Timesheet Analyzer  | React, C#, SQL Server                   | Software Dev   |
| 002 | Rentally AI         | React Native, TypeScript, Firebase, AI  | Tech Lead      |
| 003 | Blackjack Web Game  | React, TypeScript, Node.js, Socket.io   | Full Stack Dev |
| 004 | Invoice Manager     | Next.js, TypeScript, PostgreSQL         | Team Lead      |

### Party (`party.ts`) — Tech Stack
| Pokemon    | Skills                       | Level |
| ---------- | ---------------------------- | ----- |
| JAVAZARD   | Java / C# / .NET             | 82    |
| REACTVEE   | React / Next.js / TS / JS    | 90    |
| CLOUDEON   | AWS / Firebase               | 78    |
| NEUTWO     | Claude / Cursor / AI         | 85    |
| SQLEON     | SQL / PostgreSQL             | 80    |
| PYTHONAIR  | Python / Django              | 75    |

## Assets

### Sprites (`public/sprites/`)
Animated GIFs for projects and party: charizard, eevee, umbreon, mewtwo, porygon, dragonair, piplup, mudkip, gengar, dewgong, and more.

### Badges (`public/badges/`)
10 custom PNGs for work experience gym badges: react, sharp, graduate, certified, python, data, node, typescript, cloud, rock-java.

## Development

```bash
npm install         # Install dependencies
npm run dev         # Start dev server (http://localhost:5173)
npm run build       # Type-check + production build
npm run lint        # Run ESLint
npm run preview     # Preview production build
```

## Deployment

Automatically deploys to GitHub Pages on push to `main` via `.github/workflows/deploy.yml`.

- Base URL: `/PokemonPortfolio/` (configured in `vite.config.ts`)
- All asset paths use `getAsset()` which prepends `import.meta.env.BASE_URL`

## Design

- Pokemon Sapphire color palette (dark blue, mid blue, gold, teal)
- Pixel art aesthetic with `image-rendering: pixelated` on select elements
- Retro fonts: Press Start 2P for headings, VT323 for body text
- Scanline overlay effect
- Custom animations: fadeIn, cardIn, shimmer, blinkBorder, rise
- 3D card flip via CSS transforms (TrainerCard.module.css)
- Responsive layout with mobile breakpoint at 480px
