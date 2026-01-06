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
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-3">
            {hub.eyebrow}
          </span>
          <h1 id="services-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {hub.h1}
          </h1>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed" dangerouslySetInnerHTML={{ __html: hub.intro }} />
        </div>

        <div className="space-y-10 max-w-5xl mx-auto mb-12">
          {hub.sections.map((section) => (
            <div
              key={section.heading}
              className="rounded-2xl border border-border/60 bg-card shadow-soft p-6 sm:p-8 space-y-4"
            >
              <h2 className="text-2xl sm:text-3xl font-semibold text-foreground">{section.heading}</h2>
              {section.body.map((paragraph, idx) => (
                <p
                  key={idx}
                  className="text-muted-foreground leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: paragraph }}
                />
              ))}
              {section.bullets && (
                <ul className="grid sm:grid-cols-2 gap-3 pt-2">
                  {section.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-start gap-2 text-foreground"
                      dangerouslySetInnerHTML={{ __html: bullet }}
                    />
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        <div className="rounded-2xl border border-border/60 bg-card shadow-soft p-6 sm:p-8 space-y-4 mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold text-foreground">
            {locale === "ar" ? "الأسئلة الشائعة عن الخدمات" : "Service FAQs"}
          </h2>
          <div className="space-y-3">
            {hub.faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-xl border border-border/60 bg-background/60 p-4 transition"
              >
                <summary className="flex items-center justify-between gap-2 cursor-pointer text-foreground font-semibold">
                  {faq.question}
                  <ArrowRight className="w-4 h-4 text-primary transition-transform group-open:rotate-90" />
                </summary>
                <p className="text-muted-foreground mt-2 leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
            {t.servicesIntro.title}
          </h2>
          <p className="text-muted-foreground max-w-3xl">
            {t.servicesIntro.description}
          </p>
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
                  <h2 className="text-2xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {service.name}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">{service.intro}</p>
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

        <div className="mt-12 rounded-2xl border border-border/60 bg-card shadow-soft p-6 sm:p-8 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold text-foreground">
                Strong internal links to every service page
              </h2>
              <p className="text-muted-foreground">
                Reinforced crawl paths from the services hub to each Saudi Arabia offering.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {allServices.map((service) => (
              <Link
                key={service.slug}
                to={`/services/${service.slug}`}
                className="rounded-lg border border-border/60 bg-background/70 px-4 py-3 hover:border-primary/60 transition"
              >
                <p className="text-xs font-semibold text-primary uppercase tracking-wide">Jeddah & KSA</p>
                <p className="text-lg font-bold text-foreground">
                  {locale === "en" ? `${service.name} in Saudi Arabia` : service.name}
                </p>
                <p className="text-sm text-muted-foreground">
                  Permanent link to the canonical service page for faster indexing.
                </p>
              </Link>
            ))}
          </div>
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
