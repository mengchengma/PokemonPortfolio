# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Pokemon Sapphire-themed portfolio website built with React, TypeScript, Vite, and Tailwind CSS. The portfolio presents professional information as a Pokemon Trainer Card with a flip animation and multiple interactive panels.

## Development Commands

```bash
npm run dev       # Start development server with HMR
npm run build     # Type-check with tsc and build for production
npm run lint      # Run ESLint
npm run preview   # Preview production build locally
```

## Architecture

### Component Structure

The app centers around a **flippable Trainer Card** (`TrainerCard.tsx`) with two sides:

- **CardFront**: Main interactive side with 4 tabs (BADGES, POKEDEX, PARTY, PKMN CTR) that render different panels
- **CardBack**: Shows additional trainer information (currently displays back of card)

The card starts flipped to show the back. Clicking the back flips to the front, where users navigate tabs.

### Configuration System

All portfolio content lives in `src/config/` files as data exports:

- `theme.ts`: Theme colors, version name, footer text
- `trainer.ts`: Personal info, stats, trainer sprite path
- `party.ts`: Tech stack represented as Pokemon party (name, type, level, sprite)
- `badges.ts`: Tech badges/skills
- `projects.ts`: Project entries with descriptions, tech stack, stats, sprites

**To update content**: Modify these config files. No component changes needed.

### Asset Handling

Assets use the `getAsset()` utility (`utils/assets.ts`):
- Automatically prefixes paths with `BASE_URL` for GitHub Pages deployment
- Falls back to emoji if sprite path is null
- All sprite paths in config should start with `/` (e.g., `/sprites/eevee.gif`)

### Styling Approach

- **Tailwind CSS 4** for utilities with custom CSS variables in `index.css`
- CSS custom properties define theme colors (`--mid-blue`, `--gold`, etc.)
- Pixel art aesthetic with `image-rendering: pixelated` and retro fonts (Press Start 2P, VT323)
- CSS modules only for TrainerCard 3D flip effect (`TrainerCard.module.css`)
- Scanline overlay and custom animations (fadeIn, cardIn, shimmer) in `index.css`

### Panel Components

Each tab renders a panel component in `src/components/panels/`:
- `BadgesPanel.tsx`: Grid of tech skill badges
- `PokedexPanel.tsx`: Clickable project list with modal detail view
- `PartyPanel.tsx`: Tech stack as Pokemon team with HP bars
- `ContactPanel.tsx`: Contact information and links

Panels are conditionally rendered based on active tab and fixed to 340px height to prevent card resizing.

## Deployment

Deploys to GitHub Pages via `.github/workflows/deploy.yml`:
- Triggers on push to `main` or manual workflow dispatch
- Builds with `npm run build` (outputs to `dist/`)
- Deploys to `https://mengchengma.github.io/PokemonPortfolio/`

**Important**: `vite.config.ts` sets `base: '/PokemonPortfolio/'` for correct asset paths on GitHub Pages.

## Key Technical Details

- **Vite base URL**: Configured for GitHub Pages subdirectory deployment
- **React 19**: Using latest React with TypeScript
- **Font loading**: Press Start 2P and VT323 fonts should be loaded via CDN or added to project
- **Responsive**: Card adapts for mobile with grid column adjustments at 480px breakpoint
- **Type safety**: Full TypeScript coverage with strict mode
