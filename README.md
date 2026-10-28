# Vird Launcher Hub: Official Website & Developer Portal

Official repository for the public marketing, documentation, support, and legal website for **Vird Launcher Hub**, a native macOS workspace and microservices orchestrator.

* **Live Website**: [https://labrujasiete.github.io/vird_launcher_hub_website/](https://labrujasiete.github.io/vird_launcher_hub_website/)
* **Direct macOS Download**: [Download VirdLauncherHub.dmg (v1.0.0)](https://labrujasiete.github.io/vird_launcher_hub_website/downloads/VirdLauncherHub.dmg)
* **Support Contact**: [labrujasiete@gmail.com](mailto:labrujasiete@gmail.com)

---

## App Store Connect Submission URLs

These exact URLs are live, verified, and configured for your App Store Connect product listing:

| Requirement | App Store Field | Production URL |
| :--- | :--- | :--- |
| **Marketing URL** | Marketing URL | `https://labrujasiete.github.io/vird_launcher_hub_website/` |
| **Support URL** | Support URL *(Mandatory)* | `https://labrujasiete.github.io/vird_launcher_hub_website/support/` |
| **Privacy Policy** | Privacy Policy URL *(Mandatory)* | `https://labrujasiete.github.io/vird_launcher_hub_website/privacy/` |
| **Terms of Service** | Terms of Use / EULA | `https://labrujasiete.github.io/vird_launcher_hub_website/terms/` |

---

## About Vird Launcher Hub

**Vird Launcher Hub** is a native macOS application engineered to eliminate terminal clutter and give developers complete command over their local developer environments.

### Core Capabilities

1. **One-Click Project Runner**:
   * Automatic script detection across Node.js (`npm`, `yarn`, `pnpm`), Python, Docker, Go, Makefiles, and shell scripts.
   * Start, stop, and restart services individually or all together with persistent command settings.

2. **Docker & n8n Automation Engine**:
   * Seamless toggle between native CLI execution and containerized Docker stacks.
   * Container health checks, port bindings, and runtime logs.

3. **Live Streaming Terminal Logs**:
   * Embedded stdout/stderr output viewer for every running project.
   * Real-time search, error filtering, and one-click log export to clipboard.

4. **Port Inspection & Collision Guard**:
   * Inspects active `localhost` socket bindings to detect which process owns a port.
   * Avoids `EADDRINUSE` conflicts before you launch servers.
   * One-click browser launch for running web endpoints.

5. **Integrated Git Workspace**:
   * Overview of active Git branch, uncommitted changes, and push/pull status directly in each project row.
   * Authenticate securely with GitHub via personal access tokens or browser OAuth.

6. **100% Local & Privacy-First**:
   * Operates strictly within the macOS App Sandbox (`com.apple.security.app-sandbox`).
   * Zero telemetry, zero tracking SDKs, and zero code transmission. Everything runs locally on your machine.

---

## macOS App Technical Specifications

* **Bundle Identifier**: `com.vird.launcherhub`
* **Deployment Target**: macOS 13.0 or later (Ventura, Sonoma, Sequoia)
* **Binary Architecture**: Universal Binary (Apple Silicon M1/M2/M3/M4 & Intel x86_64)
* **Packaging**: Native `.app` bundle, `.dmg` disk image, and Xcode `.xcarchive`

---

## Website Stack

* **Framework**: Next.js 14 (App Router, Static Export mode)
* **Styling**: Tailwind CSS
* **Icons**: Lucide React
* **Hosting**: GitHub Pages via dedicated `gh-pages` branch
* **Asset Optimization**: Unoptimized static images with relative `basePath` resolution (`/vird_launcher_hub_website`)

---

## Project Structure

```text
vird_launcher_hub_website/
├── public/
│   ├── downloads/
│   │   └── VirdLauncherHub.dmg   # Production macOS installer (3.5 MB)
│   ├── app-screenshot.png        # Native interface screenshot
│   ├── logo.png                  # Vird Launcher Hub icon
│   └── .nojekyll                 # GitHub Pages static asset routing rule
├── src/
│   ├── app/
│   │   ├── page.tsx              # Marketing landing page & downloads
│   │   ├── support/page.tsx      # Support center & FAQ (Support URL)
│   │   ├── privacy/page.tsx      # App Store compliant Privacy Policy
│   │   ├── terms/page.tsx        # Terms & Conditions / EULA
│   │   └── layout.tsx            # Global metadata & dark theme layout
│   ├── components/
│   │   ├── Navbar.tsx            # Navigation header with GitHub & download links
│   │   └── Footer.tsx            # Global footer with legal links
│   └── lib/
│       └── basePath.ts           # GitHub Pages subpath routing helper
├── .github/
│   └── workflows/deploy.yml      # Automated GitHub Actions deployment workflow
├── next.config.mjs               # Static export configuration
└── package.json                  # Dependencies and build scripts
```

---

## Local Development & Deployment

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the site locally.

### 3. Build Static Export
```bash
npm run build
```
Generates production-ready static HTML/CSS/JS inside the `out/` folder.

### 4. Deploy to GitHub Pages
```bash
npm run deploy
```
Compiles the static export and publishes all files (including `.nojekyll` and `VirdLauncherHub.dmg`) directly to the `gh-pages` branch on GitHub.

---

## License & Contact

* **Author**: Vird Team
* **Email Support**: [labrujasiete@gmail.com](mailto:labrujasiete@gmail.com)
* **Legal Terms**: [Terms & Conditions](https://labrujasiete.github.io/vird_launcher_hub_website/terms/)
* **Privacy**: [Privacy Policy](https://labrujasiete.github.io/vird_launcher_hub_website/privacy/)
