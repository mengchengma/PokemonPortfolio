# Pokemon Portfolio

A Pokemon Sapphire-themed personal portfolio built as an interactive Trainer Card. Built with React, TypeScript, Vite, and Tailwind CSS.

**Live site:** https://mengchengma.github.io/PokemonPortfolio/

## About

The portfolio is a single-page application. The whole site is one Trainer Card mounted from `App.tsx`, and navigation happens entirely in React state — `TrainerCard.tsx` tracks a `flipped` boolean for the card flip, and `CardFront.tsx` tracks the active tab to swap between the Badges, Pokedex, Party, and Contact panels. There are no routes, no page reloads, and no server — the production build is a static bundle of HTML, JS, and assets served from GitHub Pages.

All content (trainer info, badges, projects, party, theme) is data-driven from `src/config/`, so updating the portfolio is just editing those files. The card flip uses a CSS 3D transform from `TrainerCard.module.css`, while everything else is styled with Tailwind 4 and CSS variables defined in `index.css`.

The four tabs on the card:

- **BADGES** — Work experience as gym badges
- **POKEDEX** — Projects as Pokemon entries with detail modals
- **PARTY** — Tech stack represented as a Pokemon party with HP bars
- **PKMN CTR** — Contact info and links

## Tech Stack

- React 19 + TypeScript
- Vite
- Tailwind CSS 4
- Press Start 2P / VT323 fonts for the retro pixel aesthetic

## Local Development

```bash
npm install
npm run dev       # start dev server
npm run build     # type-check + production build
npm run lint      # run ESLint
npm run preview   # preview the production build
```

## Deployment

Auto-deploys to GitHub Pages via `.github/workflows/deploy.yml` on every push to `main`.
