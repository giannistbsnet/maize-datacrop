# Autonomous Agent Context: DataCROP

This file serves as a system context anchor for any autonomous AI agents (DevTools, SWE-agent, AutoGPT, etc.) operating in this repository.

## Repository Overview
This repository contains the **DataCROP Documentation Website**, built on **Docusaurus v3**. It does *not* contain the core backend Python/Java processors or the frontend workflow editor. It is strictly the documentation hub for the entire DataCROP ecosystem (Barley, Farro, Maize).

## Architecture Map
- **Config**: `docusaurus.config.ts`, `sidebars.ts`, `package.json`
- **Content**: `docs/` (Markdown & MDX files mapped to the sidebar)
- **UI/Pages**: `src/pages/` (React pages, notably `index.tsx` for the landing page)
- **Styling**: `src/css/custom.css` (Vanilla CSS, custom CSS variables override Docusaurus defaults)
- **Assets**: `static/` (Images, icons, CNAME)
- **CI/CD**: `.github/workflows/deploy.yml` (GitHub Pages deployment via GitHub Actions)

## Critical Constraints for Agents

1. **NO JEKYLL**: This site was migrated away from Jekyll. If you find legacy `.markdown` files or Jekyll frontmatter (`nav_order`, `layout`, `has_children`), you are looking at old context. Ensure all new docs use Docusaurus `.md` or `.mdx` format.
2. **MDX Strictness**: Docusaurus uses MDX for its markdown parser. 
   - **Do not** write raw `<` or `>` characters outside of code blocks, as they will be parsed as unclosed JSX tags and crash the build.
   - **Do not** write unescaped curly braces `{ }` outside of code blocks, as they will be parsed as JavaScript expressions and crash the build.
3. **Category Indexes**: If you create a new directory inside `docs/`, you should create an `index.mdx` inside it. To display child pages nicely, include the following at the bottom of the `index.mdx`:
   ```mdx
   import DocCardList from '@theme/DocCardList';

   <div className="compact-cards">
   <DocCardList />
   </div>
   ```
4. **Image Paths**: When adding images to `static/img/`, reference them in markdown using absolute paths starting with `/img/` (e.g., `![My Image](/img/my-image.png)`). Do *not* use relative paths or `/static/img/`.

## Agent Action Checklist
Before committing or finalizing a task, an agent MUST run:
```bash
npm run build
```
This is the only way to guarantee that no MDX syntax errors were introduced. If the build fails, parse the Docusaurus stack trace, fix the unescaped character in the specific markdown file, and build again.
