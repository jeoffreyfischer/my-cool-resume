# my-resume

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
