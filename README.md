# my-resume

Single-page CV site built with **React** and **Vite**, deployed to GitHub Pages.

## Commands

| Command | What it does |
|--------|----------------|
| `npm install` | Installs dependencies. Run once after clone or when `package.json` / `package-lock.json` change. |
| `npm run dev` | Starts the **Vite** dev server locally (e.g. http://localhost:5173). Use this for day-to-day development; the app hot-reloads on save. |
| `npm run build` | Runs the **Vite** production build and writes output to the `dist/` folder. Used by CI and before checking that the app builds. |
| `npm run preview` | Serves the contents of `dist/` locally so you can test the production build before deploying. |
| `npm run test` | Runs **Vitest** in watch mode (re-runs tests when files change). |
| `npm run test:run` | Runs **Vitest** once (e.g. in CI). |
| `git push` (to `main`) | Pushes your commits. Pushing to `main` triggers the GitHub Actions workflow, which runs `npm run build` and deploys the `dist/` folder to GitHub Pages. There is no separate “deploy” command. |

## Deployment

The site deploys automatically to GitHub Pages on every push to `main`, and is served at **https://jeoffreyfischer.com**.

### One-time setup

1. **GitHub (Settings → Pages)**  
   - Source: GitHub Actions.  
   - **Custom domain:** set to `jeoffreyfischer.com`, then follow GitHub’s steps (e.g. enforce HTTPS).

2. **Namecheap (DNS)**  
   - Add the records GitHub shows for your Pages site.  
   - Typically: a **CNAME** for `www` → `username.github.io`, and for the apex `jeoffreyfischer.com` use either ALIAS/ANAME/CNAME flattening if Namecheap supports it, or the **A** records GitHub recommends for apex.  
   - See Namecheap’s docs for “connecting a domain to GitHub Pages” or “CNAME”.

If the app ever needs a token or API key at build time, add it as a repository/organization secret and reference it only in the build job of `.github/workflows/deploy.yml`.
