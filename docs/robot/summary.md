# Project Summary

## Overview

Personal website built with SvelteKit, currently featuring a landing page with personal information.

## Current Architecture

### Tech Stack

- Frontend Framework: SvelteKit
- Styling: TailwindCSS
- Package Manager: pnpm

### Key Components

- `src/routes/+page.svelte`: Main landing page
- `src/lib/components/`:
  - AnimeWatchlist.svelte
  - Header.svelte
  - ProjectList.svelte
  - RepoList.svelte
  - Wishlist.svelte

### Static Assets

- Located in `/static` directory
  - anya.png
  - favicon.png

## Implementation Details

The website currently implements a single-page layout with various components for displaying personal information and lists. The application uses TypeScript for type safety and includes configuration for ESLint, Prettier, and Playwright testing.
