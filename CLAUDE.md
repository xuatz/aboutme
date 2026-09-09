# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website built with SvelteKit, TypeScript, and TailwindCSS. Features a dark mode theme with yellow/black color scheme, anime watchlist, project showcase, and personal timeline tracking.

## Essential Commands

```bash
# Development
npm run dev              # Start dev server on http://localhost:5173
npm run preview          # Preview production build

# Build & Deploy
npm run build            # Create production build in .svelte-kit/

# Quality Checks (run these before committing)
npm run check            # Type checking with svelte-check
npm run lint             # ESLint and Prettier checks
npm run format           # Auto-format code

# Testing
npm run test:unit        # Run Vitest unit tests
npm run test:integration # Run Playwright E2E tests
npm test                # Run all tests
```

## Architecture & Key Patterns

### Routing Structure

- **File-based routing** in `src/routes/`
- `+page.svelte` - Component template
- `+page.ts` - Data loading (runs on client and server)
- `+layout.svelte` - Shared layout with dark mode and navigation

### Component Organization

- Reusable components in `src/lib/components/`
- Each component is self-contained with its own styles
- Type definitions in `src/lib/types/`

### Styling System

- **TailwindCSS** with custom theme in `tailwind.config.js`
- Dark mode using `class` strategy with manual toggle
- Custom color palette: yellow (`#fbbf24`) and black theme
- Global styles in `src/app.css`

### Key Components & Their Responsibilities

- **Header**: Career duration calculator using date-fns
- **NavBar**: Main navigation (About, Blog sections)
- **AnimeWatchlist**: Complex status tracking with seasonal data
- **Wishlist**: Shopping list with completion states
- **RepoList**: GitHub repository showcase

### Data Management

- Static data loading in route `+page.ts` files
- No external API dependencies - data is hardcoded
- Type-safe interfaces for all data structures

## Development Guidelines

### Adding New Features

1. Create components in `src/lib/components/`
2. Define types in `src/lib/types/`
3. Use existing color palette and styling patterns
4. Follow the dark mode implementation pattern

### Before Committing

Always run:

```bash
npm run check && npm run lint && npm run test:unit
```

### Testing Approach

- Unit tests with Vitest for component logic
- E2E tests with Playwright for user flows
- Test files co-located with source files (`.test.ts`)

## Important Configuration

### SvelteKit Adapter

Uses `@sveltejs/adapter-cloudflare` for Cloudflare Pages. Build output is written to `.svelte-kit/cloudflare` with server rendering and static assets.

### TypeScript

Strict mode enabled. All components should have proper type annotations.

### Environment

- Development server: http://localhost:5173
- Node.js with ES modules
- Package manager: npm

## Project-Specific Patterns

### Dark Mode Implementation

- Toggle stored in localStorage as 'theme'
- System preference detection on mount
- Class-based switching on `<html>` element

### Date Calculations

Uses `date-fns` for duration calculations (career timeline, Japan residence).

### Component State

- Svelte stores for global state (dark mode)
- Local component state for UI interactions
- No external state management library
