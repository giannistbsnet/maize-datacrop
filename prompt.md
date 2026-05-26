# Docusaurus Migration Agent Prompt

**Objective:** You are an expert web development AI agent. Your task is to perform a complete 1:1 migration of an existing Jekyll-based documentation site into a modern **Docusaurus v3** application. This new project has the exact same structure, requirements, and deployment strategy as our previous migrations. You must perfectly preserve the existing content, navigation structure, and aesthetic layout, while adding modern Docusaurus features.

Follow these strict, step-by-step instructions to execute the migration:

## Phase 1: Scaffolding & Setup
1. **Initialize Docusaurus:** Scaffold a new Docusaurus project using the classic template with TypeScript:
   `npx create-docusaurus@latest new-docs-site classic --typescript`
2. **Clean Boilerplate:** Delete the default Docusaurus boilerplate files:
   - `blog/` directory (this is purely a documentation site).
   - `src/components/HomepageFeatures/` directory.
   - Placeholder images in `static/img/` (e.g., `undraw_*.svg`, the default Docusaurus logo, social cards).

## Phase 2: Content & Frontmatter Migration
1. **Move Markdown Files:** Copy all documentation `.md` files from the Jekyll source (e.g., `content/_docs/`) directly into the new `docs/` folder, maintaining their exact folder hierarchy.
2. **Convert Frontmatter:** Map the old Jekyll frontmatter to Docusaurus format across all files:
   - Convert `nav_order: <number>` to `sidebar_position: <number>`
   - Convert `permalink: <path>` to `slug: <path>`
   - Delete Jekyll-specific frontmatter like `has_children:` and `parent:` (Docusaurus handles this natively via folder structure).
3. **Clean Markdown Syntax:** 
   - Strip out any Jekyll-specific CSS classes appended to markdown elements (e.g., `{: .btn .btn-primary }`).
   - Fix internal absolute links to ensure they work in Docusaurus.

## Phase 3: Configuration (`docusaurus.config.ts`)
1. **Site Metadata:** Update `title`, `tagline`, `url`, `organizationName`, and `projectName`.
2. **GitHub Pages Configuration:** Since this will be deployed to GitHub Pages, you must set the `baseUrl` to match the repository name (e.g., `/repository-name/`).
3. **Docs Routing:** Set `routeBasePath: '/'` inside the `presets` > `docs` config so the documentation serves at the root level.
4. **Disable Blog:** Set `blog: false` in the preset options.
5. **Navigation & Footer:** Replicate the exact Navbar tabs and Footer links from the original site. Use the migrated DataCROP brand assets: configure the navbar `logo` to use `img/logo.png` and configure the `favicon` to use `img/logo-icon.png`.
6. **Deprecations:** Move `onBrokenMarkdownLinks` inside `markdown: { hooks: { onBrokenMarkdownLinks: 'warn' } }`.

## Phase 4: Aesthetics, Layout & Assets
1. **Copy Assets:** Move the new project's logos, background images, and custom assets from the Jekyll repository into `static/img/`. Specifically copy `assets/img/datacrop-logo.png` to `new-docs-site/static/img/logo.png` and `assets/img/datacrop-logo-icon.png` to `new-docs-site/static/img/logo-icon.png`; use these as the site's official DataCROP logo assets.
2. **Homepage Redesign (`src/pages/index.tsx`):**
   - Replace the default Docusaurus homepage completely.
   - Rewrite `index.tsx` to structurally match the original Jekyll landing page content.
   - Include a Hero Banner component. Apply the project's background image to the Hero Banner via `src/css/custom.css` or `index.module.css` with a dark CSS gradient overlay (`rgba(0,0,0,0.6)`) to ensure text readability.
3. **Global Styles:** Replicate the primary brand colors in `src/css/custom.css` using the `--ifm-color-primary` CSS variables.
4. **Category Indices:** Use the Docusaurus `<DocCardList />` component at the bottom of all category `index.md` files to automatically generate a grid of child pages. Wrap it in a `.compact-cards` div and add custom CSS to make the cards smaller and tighter.

## Phase 5: Search Functionality
1. **Install Local Search:** Install `@easyops-cn/docusaurus-search-local` to provide offline search.
2. **Configure Search:** Add the plugin to the `themes` array in `docusaurus.config.ts`:
   ```javascript
   themes: [
     [
       require.resolve("@easyops-cn/docusaurus-search-local"),
       {
         hashed: true,
         indexDocs: true,
         indexBlog: false,
         indexPages: true,
         docsRouteBasePath: "/",
       },
     ],
   ],
   ```

## Phase 6: CI/CD, Setup & Documentation
1. **GitHub Actions:** Create `.github/workflows/deploy.yml` configured to build the site using Node 20 and deploy it via GitHub's native `actions/deploy-pages@v4`.
2. **Update `.gitignore`:** Ensure `.docusaurus`, `build`, `.DS_Store`, and environment files are properly ignored.
3. **Update `README.md`:** 
   - Replace old Jekyll technology badges with Docusaurus, React, TypeScript, and Node.js badges.
   - Add a GitHub Actions deployment status badge.
   - Add a "Local Development" section detailing how to run `npm install`, `npm start`, and `npm run build`.
4. **Update `CONTRIBUTING.md`:** Update contribution guides to point users to the new `docs/` folder hierarchy.

---
**Final Verification:** 
Run `npm run build` and resolve any broken link warnings. Ensure the final result is a beautiful, exact 1:1 replica of the original layout, now fully powered by React and Docusaurus.
