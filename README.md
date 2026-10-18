# imaadzaffar.com

Personal site. One static page built with [Astro 5](https://astro.build) and deployed on Netlify.

## Develop

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # astro check, then a static build into dist/
npm run preview  # serve dist/
npm run todos    # list every placeholder still waiting for real content
```

Netlify runs `npm run build` and publishes `dist/` (see `netlify.toml`).

## Update content

All copy lives in `src/content/`. The schemas in `src/content.config.ts` validate it, so a typo or a missing field fails the build instead of shipping.

| File | What it holds |
| --- | --- |
| `now.md` | The Now paragraph. `updated` drives "Last updated" and the footer date. |
| `timeline.json` | One row per role: `year`, `role`, `org`, optional `url`, `note`, `current` (adds the dot), and `aside` (the handwritten margin note). |
| `interests.json` | Entries with `kind` set to `interest`, `book` (`status`: `reading` or `read`) or `project` (`url` or `null`). |
| `links.json` | The links used in the Links sentence. `id` is one of `x`, `instagram`, `youtube`, `github`, `linkedin`, `email`. For email, `url` is the bare address. |
| `gallery/*.json` | One file per photo: `image` (a path next to the JSON file), `caption`, `place`, `date`. |

Placeholders follow one rule. Set a value to `null` and give a `todo` to show a grey `[Placeholder: …]` mark. Keep a value and add a `todo` to show it with a small `[todo]` mark. Delete the `todo` once the content is real. `npm run todos` lists what is left.

To add a photo, drop the image into `src/content/gallery/` and add a JSON file next to it. Astro resizes it to WebP at build time.

## Files

- `src/pages/index.astro` renders the page. `404.astro` is the not-found page.
- `src/layouts/Base.astro` holds the head: meta, Open Graph, JSON-LD, fonts, and the theme script that runs before paint.
- `src/styles/global.css` holds every style. Colours are CSS variables, with a dark set under `[data-theme='dark']`.
- `public/` holds `og.png` (1200×630), `favicon.svg` and `robots.txt`.
- `scripts/placeholders.mjs` regenerated the grey gallery placeholders. Delete it with the placeholders.

The previous three.js cube site is in git history before this branch.
