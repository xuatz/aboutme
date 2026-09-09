# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/main/packages/create-svelte).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm create svelte@latest

# create a new project in my-app
npm create svelte@latest my-app
```

## Developing

Use Node.js 24 and npm. With [nvm](https://github.com/nvm-sh/nvm), install and select the version specified in `.nvmrc`:

```bash
nvm install
nvm use
npm install
```

Start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

## Deployment

The project uses `@sveltejs/adapter-cloudflare` for Cloudflare Pages. Configure the Pages project with:

- Build command: `npm run build`
- Build output directory: `.svelte-kit/cloudflare`
- Node.js version: `24`
- Runtime compatibility flag: `nodejs_als` (or `nodejs_compat` if already enabled)

To test the Cloudflare build locally:

```bash
npm run build
npx wrangler pages dev .svelte-kit/cloudflare --compatibility-flag=nodejs_als
```
