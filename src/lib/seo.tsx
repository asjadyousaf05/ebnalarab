import { useEffect } from "react";

type Breadcrumb = { name: string; url: string };

type SeoProps = {
  title: string;
  description: string;
  path: string;
  lang?: "en" | "ar";
  robots?: string;
  ogImage?: string;
  breadcrumbs?: Breadcrumb[];
};

const BASE_URL = "https://www.ebnalarab.com";
const DEFAULT_OG_IMAGE = `${BASE_URL}/og.jpg`;
const DEFAULT_LOGO = `${BASE_URL}/logo.png`;
const SUPPORTED_HREFLANGS = ["en-sa", "ar-sa", "x-default"] as const;
const ORG_NAME_EN = "EBN AL ARAB | Porta Cabins & Modular Buildings";
const ORG_NAME_AR = "EBN AL ARAB | Portable Cabins & Modular Buildings";

const setMetaTag = (selector: string, attributes: Record<string, string>) => {
  let tag = document.querySelector(selector) as HTMLMetaElement | null;
  if (!tag) {
    tag = document.createElement("meta");
    if (attributes.name) tag.name = attributes.name;
    if (attributes.property) tag.setAttribute("property", attributes.property);
    document.head.appendChild(tag);
  }
  Object.entries(attributes).forEach(([key, value]) => {
    if (key === "name" || key === "property") return;
    tag?.setAttribute(key, value);
  });
};

const setLinkTag = (rel: string, href: string, hreflang?: string) => {
  let selector = `link[rel="${rel}"]`;
  if (hreflang) selector += `[hreflang="${hreflang}"]`;
  let tag = document.querySelector(selector) as HTMLLinkElement | null;
  if (!tag) {
    tag = document.createElement("link");
    tag.rel = rel;
    if (hreflang) tag.hreflang = hreflang;
    document.head.appendChild(tag);
  }
  tag.setAttribute("href", href);
};

const dedupeCanonical = () => {
  const canonicals = Array.from(document.querySelectorAll('link[rel="canonical"]'));
  canonicals.forEach((node, idx) => {
    if (idx > 0) node.remove();
  });
};

const pruneAlternateTags = () => {
  const allowed = new Set(SUPPORTED_HREFLANGS);
  const alternates = Array.from(document.querySelectorAll('link[rel="alternate"][hreflang]')) as HTMLLinkElement[];
  alternates.forEach((link) => {
    if (!allowed.has(link.hreflang as (typeof SUPPORTED_HREFLANGS)[number])) {
      link.remove();
    }
  });
  SUPPORTED_HREFLANGS.forEach((hrefLang) => {
    const duplicates = Array.from(
      document.querySelectorAll(`link[rel="alternate"][hreflang="${hrefLang}"]`)
    ) as HTMLLinkElement[];
    duplicates.forEach((dup, idx) => {
      if (idx > 0) dup.remove();
    });
  });
};

export const Seo = ({
  title,
  description,
  path,
  lang = "en",
  robots = "index,follow",
  ogImage = DEFAULT_OG_IMAGE,
  breadcrumbs = [],
}: SeoProps) => {
  useEffect(() => {
    if (typeof document === "undefined") return;

    const cleanPath = path.split("?")[0] || "/";
    const canonicalBase = `${BASE_URL}${cleanPath}`;
    const canonicalHref = canonicalBase;
    const alternateEn = canonicalBase;
    const alternateAr = canonicalBase;
    const locale = lang === "ar" ? "ar-SA" : "en-SA";
    const orgName = lang === "ar" ? ORG_NAME_AR : ORG_NAME_EN;

    document.title = title;
    setMetaTag('meta[name="description"]', { name: "description", content: description });
    setMetaTag('meta[name="robots"]', { name: "robots", content: robots });

    dedupeCanonical();
    setLinkTag("canonical", canonicalHref);
    pruneAlternateTags();
    setLinkTag("alternate", alternateEn, "en-sa");
    setLinkTag("alternate", alternateAr, "ar-sa");
    setLinkTag("alternate", alternateEn, "x-default");
    pruneAlternateTags();

    setMetaTag('meta[property="og:type"]', { property: "og:type", content: "website" });
    setMetaTag('meta[property="og:site_name"]', { property: "og:site_name", content: orgName });
    setMetaTag('meta[property="og:title"]', { property: "og:title", content: title });
    setMetaTag('meta[property="og:description"]', { property: "og:description", content: description });
    setMetaTag('meta[property="og:url"]', { property: "og:url", content: canonicalHref });
    setMetaTag('meta[property="og:image"]', { property: "og:image", content: ogImage });
    setMetaTag('meta[property="og:locale"]', { property: "og:locale", content: locale });

    setMetaTag('meta[name="twitter:card"]', { name: "twitter:card", content: "summary_large_image" });
    setMetaTag('meta[name="twitter:title"]', { name: "twitter:title", content: title });
    setMetaTag('meta[name="twitter:description"]', { name: "twitter:description", content: description });
    setMetaTag('meta[name="twitter:image"]', { name: "twitter:image", content: ogImage });

    const breadcrumbList =
      breadcrumbs.length > 0
        ? {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: breadcrumbs.map((crumb, idx) => ({
              "@type": "ListItem",
              position: idx + 1,
              name: crumb.name,
              item: crumb.url,
            })),
          }
        : null;

    const org = {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: orgName,
      url: BASE_URL,
      logo: DEFAULT_LOGO,
      sameAs: [
        "https://www.facebook.com/profile.php?id=61585895152020",
        "https://www.instagram.com/ebn_al_arab_est?igsh=ZGlqNGVoZ2pzN3Ru",
        "https://www.linkedin.com/in/ebn-al-arab-3a72b23a1",
      ],
    };

    const localBusiness = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: orgName,
      url: BASE_URL,
      image: DEFAULT_OG_IMAGE,
      telephone: "+966581460761",
      address: {
        "@type": "PostalAddress",
        addressCountry: "SA",
        addressLocality: "Jeddah",
        streetAddress: "Jeddah, Saudi Arabia (21.255304, 39.188646)",
      },
      areaServed: ["SA", "GCC"],
      geo: { "@type": "GeoCoordinates", latitude: 21.255304, longitude: 39.188646 },
    };

    const website = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      url: BASE_URL,
      name: ORG_NAME_EN,
      inLanguage: locale,
      potentialAction: {
        "@type": "SearchAction",
        target: `${BASE_URL}/search?q={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    };

    const jsonLd = [org, localBusiness, website, breadcrumbList].filter(Boolean);
    const scriptId = "seo-structured-data";
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement("script");
      script.id = scriptId;
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(jsonLd);
  }, [title, description, path, lang, robots, ogImage, breadcrumbs]);

  return null;
};
