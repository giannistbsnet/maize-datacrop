# AI Assistant Guidelines for DataCROP

Hello Claude / AI Assistant! If you are reading this file, you have been invoked to help work on the DataCROP repository. Please follow the guidelines below to ensure a smooth and consistent development experience.

## 1. Project Context
DataCROP is a highly configurable framework for real-time data collection, transformation, filtering, and management, often used in IoT and cybersecurity domains.

This repository specifically houses the **documentation site** for DataCROP, which has been migrated to **Docusaurus v3**.

## 2. Directory Structure & Where to Work
- **`docs/`**: This is where all the actual markdown content lives. If a user asks you to update a guide, add a new tutorial, or fix a typo, you should look here.
  - `home/`: Framework overview and high-level architecture.
  - `setup/`: Installation and deployment guides (Maize MVP, Keycloak, Airflow, etc.).
  - `user-guide/`: End-user workflows, data models, pipelines.
  - `dev-guide/`: Custom processor integration and developer guidelines.
- **`src/`**: Contains React components and styling.
  - `src/pages/index.tsx`: The custom React-based landing page.
  - `src/css/custom.css`: Global styles and brand colors (indigo palette).
- **`static/`**: Contains static assets like images. Images used in markdown should be placed in `static/img/` and referenced in markdown as `/img/...`.

## 3. Technology Stack & Rules
- **Docusaurus v3**: We use the standard classic preset.
- **TypeScript & React**: Used for custom pages and components.
- **Markdown / MDX**: All documentation files are written in Markdown. Category index files that render cards for their children use `.mdx` and embed the `<DocCardList />` component.
- **Search**: We use `@easyops-cn/docusaurus-search-local` for offline search capabilities.

## 4. Markdown Formatting Rules
- **Frontmatter**: Every file in `docs/` must begin with YAML frontmatter containing `title`, `slug`, and `sidebar_position`. 
  - *Note*: We do NOT use legacy Jekyll frontmatter (`nav_order`, `permalink`, `has_children`, `layout`). Do not add them.
- **Liquid Tags**: Do NOT use Jekyll Liquid tags (e.g., `{% raw %}`, `{{ variable }}`). In MDX, curly braces `{}` are parsed as JavaScript expressions, which will break the build if unescaped. If you must show curly braces in text, wrap them in backticks (e.g., `` `{my_var}` ``) or escape them.
- **JSX Tags**: Unclosed HTML-like syntax (e.g., `<->`) will break MDX. Always use HTML entities (e.g., `&lt;-&gt;`) or wrap them in code blocks.

## 5. Local Development
If you need to verify your changes, you can instruct the user (or use a background task) to run:
```bash
npm install
npm start
```
To verify that your markdown changes do not break the MDX compiler, always run:
```bash
npm run build
```

Thank you for helping maintain DataCROP!
