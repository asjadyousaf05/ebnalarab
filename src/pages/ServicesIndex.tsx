import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { copy } from "@/i18n/copy";
import { useLocale } from "@/context/LocaleContext";
import { useEffect, useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Seo } from "@/lib/seo";
import { pageMeta } from "@/i18n/pageMeta";
import { useLocation } from "react-router-dom";
import { servicesContent, servicesHubContent } from "@/i18n/servicesContent";

const ServicesIndex = () => {
  const { locale, dir } = useLocale();
  const t = copy[locale];
  const allServices = servicesContent[locale];
  const parentServices = allServices.filter((s) => !s.parent);
  const hub = servicesHubContent[locale];
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);
  const location = useLocation();
  const meta = pageMeta[locale] ?? pageMeta.en;

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  return (
    <section className="section-padding bg-background" aria-labelledby="services-heading" dir={dir}>
      <Seo
        title={meta.services.title}
        description={meta.services.description}
        path={location.pathname}
        lang={locale}
        breadcrumbs={[{ name: t.navbar.home, url: "https://www.ebnalarab.com/" }, { name: t.servicesIntro.title, url: `https://www.ebnalarab.com${location.pathname}` }]}
      />
      <div className="container-custom">
        <div className="text-center mb-12">
          <h1 id="services-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {hub.h1}
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {parentServices.map((service, index) => {
            const imageAlt =
              service.heroAlt ?? service.cardAlt ?? `${service.name} modular cabin by EBN AL ARAB in Saudi Arabia`;

            return (
              <motion.article
                key={service.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group h-full rounded-2xl border border-border/60 bg-card shadow-soft overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setSelectedImage({ src: service.gallery[0], alt: imageAlt })}
                  className="block aspect-video overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  aria-label={imageAlt}
                >
                  <img
                    src={service.gallery[0]}
                    alt={imageAlt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                    fetchPriority="low"
                  />
                </button>
                <div className="p-6 space-y-3">
                  <h2 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {service.name}
                  </h2>
                  <Link
                    to={`/services/${service.slug}`}
                    className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-300"
                  >
                    {t.servicesIntro.view}
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </div>






      </div>

      <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
        <DialogContent className="max-w-5xl w-full p-0 overflow-hidden">
          {selectedImage && (
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full h-full max-h-[80vh] object-contain bg-black"
              loading="lazy"
              decoding="async"
            />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ServicesIndex;
