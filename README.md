# personal-site

Astro single-page portfolio site designed for free GitHub Pages hosting with optional custom domain support.

## Structure

- `#home` hero and overview
- `#about` profile and strengths
- `#projects` selected initiatives
- `#resume` detailed experience, technologies, and education

The layout keeps the compact single-page navigation feel from `vmello.com`, adds a dedicated projects section, and uses a richer editorial portfolio presentation inspired by the referenced Astro theme.

## Local development

```bash
npm install
npm run dev
```

## Customization

Edit site content in [`src/data/site.ts`](./src/data/site.ts).

The resume has also been serialized into YAML at [`src/data/resume.yaml`](./src/data/resume.yaml).

Set your production URL in `.env` for local parity:

```bash
PUBLIC_SITE_URL=https://your-domain.com
```

## Deploy to GitHub Pages

1. Push to the `main` branch.
2. In GitHub, open `Settings -> Pages`.
3. Set `Source` to `GitHub Actions`.
4. Optional: add a repository variable named `PUBLIC_SITE_URL` with your final custom-domain URL, such as `https://your-domain.com`.
5. Optional: copy [`public/CNAME.example`](./public/CNAME.example) to `public/CNAME` and replace it with your actual domain.
6. Configure DNS for your domain in your registrar.

Without a custom domain, the site will deploy under `https://samuelmburu.github.io/personal-site/`.
