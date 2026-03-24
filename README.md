# Portfolio App

Angular portfolio site for Emmanuel (Eghosa) Gabriel. The current build keeps a code-editor motif in the hero, then shifts into a recruiter-friendly layout with featured work, selected experience, public technical content, and direct contact paths.

## Stack

- Angular 21
- TypeScript
- CSS with custom properties and responsive layouts

## Local development

```bash
npm install
npm start
```

Open `http://localhost:4200`.

## Production build

```bash
npm run build
```

The output is written to `dist/portfolio-app`.

## Main files

- `src/app/app.ts`: page content, theme behavior, and section data
- `src/app/app.html`: portfolio layout and semantic structure
- `src/app/app.css`: component-level styling
- `src/styles.css`: global theme tokens, fonts, and page background
- `src/index.html`: SEO and social metadata

## Customization

Update the arrays and copy in `src/app/app.ts` if you want to change:

- Hero messaging
- Featured projects
- Experience highlights
- Writing and speaking links
- Certifications
- Contact links

## Notes

- Theme choice is persisted in `localStorage`.
- If no saved theme exists, the site uses the visitor's `prefers-color-scheme` setting.
