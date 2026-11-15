// This site. Everything that makes it this site and not another lives here and in lib/data/.
// kind: 'owners' (lead form, then Casa-Libre's publishing flow) | 'agents' | 'library' (no form, straight to Casa-Libre).
export const SITE = {
  "domain": "agenteinmobiliarioparaguay.com",
  "kind": "agents",
  "funnelSite": "agents",
  "medium": "funnel",
  "name": "Agente inmobiliario Paraguay",
  "rootCountry": "py",
  "countries": [
    "py"
  ],
  "tagline": {
    "py": "Guía práctica para agentes e inmobiliarias de Paraguay"
  },
  "reader": "agentes inmobiliarios, inmobiliarias y personas que quieren empezar en el rubro",
  "description": "Guías prácticas para agentes inmobiliarios e inmobiliarias de Paraguay: captar propiedades, conseguir clientes, comisiones, marketing y dónde publicar.",
  "cta": {
    "voseo": "Publicá tus propiedades gratis"
  },
  "ctaPath": "/empresas",
  "recordCta": {
    "voseo": "Abrí tu cuenta de inmobiliaria"
  },
  "recordWhat": "Marketplace inmobiliario con cuenta propia para agentes e inmobiliarias"
};

// "Contenido revisado": the date of the last editorial pass over the guides. Set it to the day the native
// reviewer signs off.
export const REVIEWED = '2026-11-15';

// The line under the byline: 'visible' = shown on every guide; 'quiet' = only on "Cómo escribimos" and in the footer.
export const TRANSPARENCY = 'visible';

export const siteUrl = () => `https://${SITE.domain}`;
/** utm_source on every Casa-Libre link: the domain without dots. */
export const utmSource = () => SITE.domain.replace(/\./g, '');
/** True only on the real domain: pages there may be indexed; every other host is noindex. */
export const isProductionHost = (host) => String(host || '').toLowerCase().replace(/^www\./, '').replace(/:\d+$/, '') === SITE.domain;
