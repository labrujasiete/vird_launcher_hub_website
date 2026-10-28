# Vird Launcher Hub Website

Official marketing, support, and legal static website for **Vird Launcher Hub** on macOS, built with **Next.js (Static Export)** and **Tailwind CSS**.

---

## Required App Store Connect URLs

When submitting your app to App Store Connect, copy and paste these paths using your GitHub Pages domain (or custom domain):

* **Marketing URL**:
  `https://<your-username>.github.io/<repo-name>/`
* **Support URL**:
  `https://<your-username>.github.io/<repo-name>/support/`
* **Privacy Policy URL**:
  `https://<your-username>.github.io/<repo-name>/privacy/`
* **Terms and Conditions**:
  `https://<your-username>.github.io/<repo-name>/terms/`

---

## Local Development

```bash
# Install dependencies
npm install

# Start local development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the site.

---

## Building the Static Site

```bash
npm run build
```

The compiled static HTML/CSS/JS files are generated directly into the `out/` directory with `.nojekyll` included for GitHub Pages compatibility.

---

## Hosting on GitHub Pages

### Method A: Automated GitHub Actions (Recommended)

1. Create a new repository on GitHub (for example `vird-launcher-hub-website`).
2. Push this directory to the `main` branch:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Vird Launcher Hub static website"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
3. In your GitHub repository settings:
   * Go to **Settings > Pages**.
   * Under **Build and deployment > Source**, select **GitHub Actions**.
4. The workflow in `.github/workflows/deploy.yml` will automatically build and publish the site.

### Method B: Deploying the `out` Directory Directly

If you prefer to push only the generated static output:
```bash
npm run build
cd out
git init
git add -A
git commit -m "Deploy to GitHub Pages"
git branch -M gh-pages
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -f origin gh-pages
```
Then select the `gh-pages` branch under **Settings > Pages > Deploy from a branch**.
