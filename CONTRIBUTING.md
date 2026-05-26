# Contributing to DataCROP Documentation

Thank you for your interest in contributing to the DataCROP documentation!

The documentation site is built using [Docusaurus v3](https://docusaurus.io/), a modern React-based static site generator.

## Folder Structure

All documentation content is managed inside the `docs/` directory. The structure maps directly to the navigation sidebar you see on the live site:

```
docs/
├── home/                 # Framework overview, versions, and roadmap
├── setup/                # Deployment guides (Maize MVP, Manual Setup)
│   ├── maize-mvp/
│   └── manual/
├── user-guide/           # How to use the Workflow Editor, Models, etc.
└── dev-guide/            # Instructions for developers adding custom processors
```

### Adding or Modifying Content

1. **Find the file:** Locate the markdown (`.md` or `.mdx`) file you want to edit within `docs/`.
2. **Frontmatter:** Every document should start with YAML frontmatter containing at least `title`, `slug`, and `sidebar_position`. For example:
   ```yaml
   ---
   title: "My New Guide"
   slug: /my-new-guide
   sidebar_position: 3
   ---
   ```
3. **Adding Images:** If you need to add an image, place the image file in `static/img/` (preferably in a relevant subdirectory). You can then reference it in your markdown like so:
   ```markdown
   ![Alt text](/img/your-image.png)
   ```
   *Note the path starts with `/img/`, NOT `/static/img/`.*

## Local Development

To see your changes live while you edit:

1. `npm install`
2. `npm start`

The site will be available at `http://localhost:3000` and will hot-reload automatically when you save markdown files.

## Pull Requests

When you're ready to submit your changes:

1. Ensure your markdown is valid and there are no broken links (`npm run build` will warn you if links are broken).
2. Commit your changes to a new branch.
3. Open a Pull Request targeting the `main` branch.
4. GitHub Actions will automatically build the site to ensure your changes don't break the build.
