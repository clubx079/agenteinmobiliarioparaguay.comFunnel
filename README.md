# Agente inmobiliario Paraguay

**agenteinmobiliarioparaguay.com** · Guías prácticas para agentes inmobiliarios e inmobiliarias de Paraguay: captar propiedades, conseguir clientes, comisiones, marketing y dónde publicar.

Reader: agentes inmobiliarios, inmobiliarias y personas que quieren empezar en el rubro. No form: every call to action goes straight to Casa-Libre /empresas.

## Run it

```
npm install
npm run build
npm run local      # http://localhost:3053
```

`npm start` uses the platform's PORT. Only the real domain is indexable: any other host gets
`X-Robots-Tag: noindex` and a closed robots.txt (middleware.js, app/robots.txt).

## Where things are

- `lib/site.js`: name, domain, tagline, tracking keys, the "Contenido revisado" date.
- `content/pages/`: one file per guide (`home.js` = the home page).
- `lib/data/`: the order and groups of the guides, the glossary, the "Cómo escribimos" text.
- `components/Article.js`: the page (answer in brief, key points, byline, contents, sections, Q&A, sources, cite).
- `components/Shell.js`: edition strip, masthead, menu, footer. `app/globals.css`: styles.
- `app/robots.txt`, `app/sitemap.xml`, `app/llms.txt`.

## Tracking

- Every Casa-Libre link: `utm_source=agenteinmobiliarioparaguaycom`, `utm_medium=funnel`, `utm_campaign=seo-<country>`, `utm_content=<page slug or spot>`.
- PostHog (same project as Casa-Libre; key from env `POSTHOG_KEY`, optional `POSTHOG_HOST`, read at request time by /api/analytics-config/): `funnel_site=agents`, `funnel_country`, `funnel_page`, `funnel_domain=agenteinmobiliarioparaguay.com`. Nothing is sent from localhost or without POSTHOG_KEY.

## Checks

```
npm run check                                   # the built pages: links, UTM tags, form rule
python scripts/autocomplete.py py "frase"       # what people in this country type into Google
```

## Rules

- Headlines are the phrases locals type; copy in the country's voice.
- Every outside link goes to Casa-Libre; no other site or company is named.
- Use every natural opportunity to link to Casa-Libre (card, body, "why Casa-Libre" section); the check caps a page at 22.
