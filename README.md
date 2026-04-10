# personal-site

Astro single-page portfolio site designed for Vercel deployment with a custom domain.

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

Set your production URL in `.env`:

```bash
PUBLIC_SITE_URL=https://your-domain.com
```

## Deploy to Vercel

1. Import the repo into Vercel.
2. Set `PUBLIC_SITE_URL` to your final domain in the Vercel project environment variables.
3. Deploy.
4. In the Vercel dashboard, open `Settings -> Domains`.
5. Add your custom domain and follow Vercel's DNS instructions.

The Astro config already uses the Vercel adapter, so no extra platform-specific code is required.
