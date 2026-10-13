# Nguyen Dinh Nam — Portfolio

Personal portfolio for Nguyễn Đình Nam, an HCMUT student focused on frontend development with React, Next.js and TypeScript.

**Website:** https://namnguyen.id.vn/

**GitHub:** https://github.com/nguyendnam

## Portfolio content

- A focused introduction, internship experience, education and technical toolkit.
- Three featured projects: Jev Caro, AI Tech Radar and OPLang Compiler Lite.
- Nine case studies with category filters, implementation details and delivery status.
- Direct source/demo links, CV preview and email contact.
- Keyboard-accessible project actions and dialogs, responsive layout and reduced-motion CSS.

Project research and verification boundaries are documented in [docs/project-evidence.md](docs/project-evidence.md). A local implementation, deployed demo, running automation and work in progress are labeled separately.

## Development

Node.js 22 and npm:

```sh
npm ci
npm run dev
npm run lint
npm run build
npm run preview
```

`lint` runs the TypeScript checker. Production output is written to `dist/`.

## Editing content

- `src/data.ts`: profile, project descriptions, delivery notes, skills and experience.
- `src/types.ts`: project metadata shape.
- `src/App.tsx`: page layout and project filters; set `featured: true` to show a project initially.
- `src/components/ProjectModal.tsx`: full project details.
- `public/Nam_Nguyen_Dinh_CV.pdf`: downloadable CV, maintained separately from web copy.
- `index.html`: search and social metadata.

## Deployment

The existing GitHub Actions workflow builds and deploys pushes to `main` to GitHub Pages. The Vite base is `/` for the existing custom domain, `namnguyen.id.vn`. If moving to project Pages without a custom domain, change the Vite base and canonical URL accordingly. Open a pull request to review changes before merging into the deployment branch.
