# 4WS.Platform — Documentation Site

Official documentation site for **4WS.Platform**, a low-code/no-code digital application platform for rapidly building web and mobile applications.  
Built with [Docusaurus 3](https://docusaurus.io/) and deployed automatically on [GitHub Pages](https://SinesyWarpProjects.github.io/SinesyPlatformDocs/).

> **4WS.Platform** — *DIGITAL BUSINESS TRANSFORMATION: free to be clever*

---

## Table of Contents

- [Overview](#overview)
- [Documentation Structure](#documentation-structure)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Local Development](#local-development)
- [Build](#build)
- [Deployment](#deployment)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [Generate NotebookLM Sources](#generate-notebooklm-sources)
- [Contact](#contact)

---

## Overview

4WS.Platform is a rapid application development platform created by **Sinesy S.r.l.** that enables the creation of web and mobile applications through a visual App Designer combined with custom code extensibility. The platform supports:

- **Web & Mobile** applications from a single codebase
- **Visual Configuration** via App Designer (graphical UI)
- **Custom Code Injection** via JavaScript (client-side and server-side), SQL, and Web Services
- **Google Cloud Platform** integration (BigQuery, Cloud Storage, Datastore, Spanner)
- **Enterprise Modules**: BPM, ECM, Audit, SSO, Scheduler, Reports, and more
- **Warp SDK** for advanced Java-based customization

This repository contains the full documentation site covering API references, user guides, knowledge base articles, and more.

---

## Documentation Structure

The documentation is organized into **4 main sections** (~470 Markdown files):

| Section | Files | Description |
|---------|------:|-------------|
| **[User Guide](docs/user-guide/)** | ~308 | Comprehensive platform guide: setup, core features, modules, best practices |
| **[Knowledge Base](docs/knowledge-base/)** | ~105 | How-to articles, real-world scenarios, troubleshooting, and FAQs |
| **[API (Web)](docs/api/)** | ~42 | Client-side & server-side JavaScript API, REST API, variables |
| **[API (Mobile)](docs/api-mobile/)** | ~15 | Mobile-specific JavaScript API and variables |

### User Guide Highlights

- **Overview** — Architecture, tech specs, Enterprise Edition, Warp SDK
- **Core Features** — Data models, business components, UI wizards, events, users & roles
- **Modules** — File management, BPM, ECM, Google Cloud, G Suite, Jira, NoSQL, Reports, SSO, Scheduler, TensorFlow, and more
- **Best Practices** — Database design, web/mobile common use cases, maintenance

### Knowledge Base Topics

Authentication (LDAP, OAuth2, SAML), email & notifications, grid/tree/panel customization, Google Cloud services, MongoDB, REST integration, Jasper Reports, and many more.

### API Reference

- **Client-side** — Window management, ExtJS API, file uploading, UI variables
- **Server-side** — Google Cloud, MongoDB, BigQuery, Cloud Storage, XML, image handling
- **Mobile** — Grids, dialogs, forms, HTTP, SQL, file operations, push notifications
- **REST API** — Platform REST endpoints

---

## Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| [Docusaurus](https://docusaurus.io/) | 3.10.2 | Static site generator |
| [React](https://react.dev/) | 19.x | UI components |
| [MDX](https://mdxjs.com/) | 3.x | Enhanced Markdown with JSX |
| [Prism React Renderer](https://github.com/FormidableLabs/prism-react-renderer) | 2.x | Code syntax highlighting |
| [@cmfcmf/docusaurus-search-local](https://github.com/cmfcmf/docusaurus-search-local) | 2.x | Offline/local search |
| [GitHub Pages](https://pages.github.com/) | — | Hosting |

---

## Prerequisites

- **Node.js** >= 20.0
- **npm** (or yarn/pnpm)

---

## Installation

```bash
git clone https://github.com/SinesyWarpProjects/SinesyPlatformDocs.git
cd SinesyPlatformDocs
npm install
```

---

## Local Development

```bash
npm run start
```

Starts a local development server at `http://localhost:3000/SinesyPlatformDocs/` with hot reload enabled. Most changes are reflected live without restarting the server.

### Other Useful Commands

| Command | Description |
|---------|-------------|
| `npm run build` | Generate production build in `build/` |
| `npm run serve` | Serve the production build locally |
| `npm run clear` | Clear Docusaurus generated files and caches |
| `npm run write-translations` | Extract translatable strings |
| `npm run write-heading-ids` | Generate heading IDs for Markdown files |

---

## Build

```bash
npm run build
```

Generates static content into the `build/` directory. The output can be served by any static hosting service.

---

## Deployment

### Automatic (CI/CD)

The site is **automatically deployed** to GitHub Pages via GitHub Actions on every push to the `main` branch.  
See [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) for the workflow configuration.

**Pipeline steps:**
1. Checkout repository
2. Setup Node.js 18
3. Install dependencies (`npm ci`)
4. Build the site (`npm run build`)
5. Deploy to GitHub Pages via `actions/deploy-pages@v4`

### Manual

```bash
# Using SSH
USE_SSH=true npm run deploy

# Using HTTPS
GIT_USER=<Your GitHub username> npm run deploy
```

---

## Project Structure

```
SinesyPlatformDocs/
├── docs/                          # Documentation content (Markdown/MDX)
│   ├── api/                       # Web API reference
│   │   ├── client-side-javascript-api/
│   │   ├── client-side-variable/
│   │   ├── rest-api/
│   │   ├── server-side-javascript-api/
│   │   └── server-side-variables/
│   ├── api-mobile/                # Mobile API reference
│   │   ├── mobile-javascript-api/
│   │   └── mobile-variables/
│   ├── knowledge-base/            # How-to articles & FAQs (~105 files)
│   └── user-guide/                # Platform user guide (~308 files)
│       ├── overview/
│       ├── core-features/
│       ├── best-practises/
│       └── modules/
├── blog/                          # Blog section (currently empty)
├── src/
│   ├── components/                # React components (e.g., HomepageFeatures)
│   ├── css/                       # Custom CSS (theme overrides)
│   └── pages/                     # Custom pages (homepage)
├── static/
│   └── img/                       # Static images and logos
├── build/                         # Generated output (git-ignored in production)
├── docusaurus.config.js           # Docusaurus configuration
├── sidebars.js                    # Sidebar configuration (auto-generated)
├── package.json                   # Dependencies and scripts
└── .github/workflows/deploy.yml   # CI/CD pipeline for GitHub Pages
```

---

## Contributing

1. Create a new branch from `main`
2. Add or edit Markdown files in the `docs/` directory
3. Test locally with `npm run start`
4. Verify the build with `npm run build`
5. Open a Pull Request

> The sidebar is auto-generated from the filesystem structure — simply add files in the correct directory and they will appear automatically.

---

## Generate NotebookLM Sources

The `generate_notebooklm.sh` script consolidates the documentation into a set of standalone Markdown files suitable for use as [NotebookLM](https://notebooklm.google.com/) sources.

```bash
./generate_notebooklm.sh
```

The script:

1. Copies `function-jss.md` and `function-jss-ee.md` individually (they are large standalone references).
2. Recursively walks each top-level docs section (`api`, `api-mobile`, `knowledge-base`, `user-guide`).
3. For every directory found, produces a single `.md` file containing all the Markdown files directly in that directory.
4. Output filenames use `-` to join path components (e.g. `docs/user-guide/modules/bpm/` → `user-guide-modules-bpm.md`).

Generated files are placed in the `notebooklm/` folder at the project root.


---

## Contact

- **Email:** [4wsplatform@sinesy.it](mailto:4wsplatform@sinesy.it)
- **Phone:** +39 0422 501711
- **Website:** [4wsplatform.org](https://4wsplatform.org/)
- **Support:** [Jira Service Desk](https://sinesy.atlassian.net/servicedesk/customer/portal/45)
- **Video Tutorials:** [4wsplatform.org/video-tutorial](https://4wsplatform.org/video-tutorial/)
- **Free Trial:** [4wsplatform.org/try-4wsplatform](https://4wsplatform.org/try-4wsplatform/)

---

*Sinesy S.r.l. | Via Comunale di Camino, 22/D — 31046 Oderzo (TV) | P.I. 04016390264*  
*Powered by [Sinesy](https://www.sinesy.it/)*
