# Code Style Guide

## General Principles

- Use TypeScript for type safety
- Maintain consistent code formatting using Prettier
- Follow ESLint rules for code quality

## File Structure

- Components go in `src/lib/components/`
- Types/interfaces go in `src/lib/types/`
- Pages/routes go in `src/routes/`
- Static assets go in `static/`

## Naming Conventions

- Component files: PascalCase.svelte (e.g., `AnimeWatchlist.svelte`)
- Type files: camelCase.ts (e.g., `anime.ts`)
- Route files: +page.svelte, +page.ts (SvelteKit convention)

## Component Guidelines

- One component per file
- Use TypeScript for props and events
- Prefer self-closing tags when possible
- Keep components focused and single-responsibility

## Styling

- Use TailwindCSS for styling
- Follow utility-first CSS approach
- Group related Tailwind classes logically

## TypeScript Usage

- Define interfaces/types for component props
- Use explicit return types for functions
- Avoid `any` type when possible
- Use type inference when types are obvious

## Best Practices

- Keep components small and focused
- Document complex logic with comments
- Use meaningful variable and function names
- Follow SvelteKit routing conventions
