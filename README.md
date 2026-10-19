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
| `now.md` | The Now section (markdown; the name popover is inline HTML using the native `popover` attribute). `updated` drives "Last updated" and the footer date. `aside` is the handwritten note beside it. |
| `timeline.json` | Rows in display order, newest first. Every row has `start` and optional `end`, written as `YYYY`, `YYYY-MM` or `YYYY-summer` (`end` can also be `"present"`); they show as "Jun 2026 – present" in the left column. `start: null` with a `todo` shows a placeholder. `kind: "work"` rows have `role`, `org`, optional `url`, `note`, `current` (adds the dot) and `aside` (the handwritten margin note). `kind: "life"` rows have `text`, optional `place`, `country` (ISO alpha-2, shown as a flag) and `note`. |
| `projects.json` | One row per project: `name`, `blurb`, optional `url` and `repo`, and `status` (`live`, `archived`, `wip` or `experiment`). The name links to `url`, and a `repo` adds a small `repo` tag. |
| `books.json` | The Bookmarks section, in display order: `title`, `author` and `status` (`listening`, `reading` or `read`). |
| `travel.json` | Visited countries: `{ "id": "JP", "favourite": true }`, with optional `year` and `note`. `id` must be an ISO 3166-1 alpha-2 code. The world map, its favourites (in teal) and the Travel count come from this file. Countries too small to see get a dot. |
| `links.json` | The links used in the Links sentence. `id` is one of `x`, `instagram`, `youtube`, `github`, `linkedin`. |
| `gallery/*.json` | One file per photo: `image` (a path next to the JSON file), `caption`, `date` (`YYYY-MM`), `alt`, `url` (the Instagram post), optional `position` (CSS `object-position` for the square crop). Files sort by name, so `01` shows first. |

Placeholders follow one rule. Set a value to `null` and give a `todo` to show a grey `[Placeholder: …]` mark. Keep a value and add a `todo` to show it with a small `[todo]` mark. Delete the `todo` once the content is real. `npm run todos` lists what is left.

To add a photo, drop the image into `src/content/gallery/` and add a JSON file next to it. Astro resizes it to AVIF and WebP at build time.

## Files

- `src/pages/index.astro` renders the page. `404.astro` is the not-found page.
- `src/layouts/Base.astro` holds the head: meta, Open Graph, JSON-LD, fonts, and the theme script that runs before paint.
- `src/styles/global.css` holds every style. Colours are CSS variables, with a dark set under `[data-theme='dark']`.
- `public/` holds `og.png` (1200×630), `favicon.svg` and `robots.txt`.

The previous three.js cube site is in git history before this branch.
