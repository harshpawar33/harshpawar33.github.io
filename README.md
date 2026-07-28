# Harsh Pawar — Engineering Portfolio

Vite + React engineering portfolio deployed at `https://harshpawar33.github.io/`.

## Static files

All portfolio images, SVG diagrams, the favicon, and the downloadable CV are stored under `public/`. Vite copies these files into the production `dist` folder during `npm run build`, so absolute paths such as `/assets/harsh-portrait.webp` work correctly on GitHub Pages.

## Local development

```bash
npm install
npm run dev
```

## Production check

```bash
npm run lint
npm run build
```

Deployment is handled by `.github/workflows/deploy.yml` whenever changes are pushed to `main`.
