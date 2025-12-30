import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { copy } from "@/i18n/copy";
import { useLocale } from "@/context/LocaleContext";
import { Seo } from "@/lib/seo";
import { pageMeta } from "@/i18n/pageMeta";
import { useLocation } from "react-router-dom";

const Gallery = () => {
  const { locale, dir } = useLocale();
  const t = copy[locale];
  const items = [...t.products.categories, ...t.services.filter((s) => s.gallery?.length)].slice(0, 18);
  const [selected, setSelected] = useState<{ src: string; alt: string; title: string } | null>(null);
  const location = useLocation();
  const meta = pageMeta[locale] ?? pageMeta.en;

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <section className="section-padding bg-background" aria-labelledby="gallery-heading" dir={dir}>
      <Seo
        title={meta.gallery.title}
        description={meta.gallery.description}
        path={location.pathname}
        lang={locale}
        breadcrumbs={[{ name: t.navbar.home, url: "https://www.ebnalarab.com/" }, { name: t.products.title, url: `https://www.ebnalarab.com${location.pathname}` }]}
      />
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 id="gallery-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t.products.title}
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            {t.products.description}
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {items.map((item, index) => {
            const isService = Array.isArray((item as any).gallery);
            const image = isService ? (item as any).gallery[0] : (item as any).image;
            const name = (item as any).name;
            const desc = (item as any).description || t.products.description;
            const serviceAlt = isService
              ? (item as any).galleryAlts?.[0] ?? `${name} by EBN AL ARAB - image 1`
              : undefined;
            const categoryAlt = !isService
              ? (item as any).imageAlt ?? `${name} by EBN AL ARAB - ${desc}`
              : undefined;
            const altText = serviceAlt ?? categoryAlt ?? `${name} by EBN AL ARAB`;
            return (
              <motion.figure
                key={`${name}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.04 }}
                className="overflow-hidden rounded-2xl border border-border/60 bg-card shadow-soft"
              >
                <button
                  type="button"
                  className="w-full text-left"
                  onClick={() => setSelected({ src: image, alt: altText, title: name })}
                  aria-label={altText}
                >
                  <div className="aspect-[4/3]">
                    <img
                      src={image}
                      alt={altText}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      decoding="async"
                      fetchPriority="low"
                    />
                  </div>
                  <figcaption className="p-4 space-y-1">
                    <p className="text-lg font-semibold text-foreground">{name}</p>
                    <p className="text-sm text-muted-foreground line-clamp-2">{desc}</p>
                  </figcaption>
                </button>
              </motion.figure>
            );
          })}
        </div>
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-[70] bg-black/80 backdrop-blur-sm flex items-center justify-center px-4"
          role="dialog"
          aria-label={selected.alt}
          aria-modal="true"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-background/90 rounded-2xl overflow-hidden shadow-2xl border border-border/60"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full">
              <img
                src={selected.src}
                alt={selected.alt}
                className="w-full h-full object-contain max-h-[80vh] bg-black"
                loading="lazy"
                decoding="async"
              />
              <button
                type="button"
                className="absolute top-3 right-3 px-3 py-1.5 rounded-full bg-black/70 text-white text-sm font-semibold hover:bg-black/85 transition"
                onClick={() => setSelected(null)}
                aria-label={t.labels.closeImage}
              >
                {t.labels.close}
              </button>
            </div>
            <div className="p-4">
              <p className="text-lg font-semibold text-foreground">{selected.title}</p>
              <p className="text-sm text-muted-foreground">{selected.alt}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
