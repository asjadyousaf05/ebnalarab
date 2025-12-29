import { useEffect, useMemo, useState } from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, Phone } from "lucide-react";
import { copy } from "@/i18n/copy";
import { useLocale } from "@/context/LocaleContext";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { trackContactClick } from "@/lib/analytics";
import { Seo } from "@/lib/seo";

const ServicePage = () => {
  const { locale, dir } = useLocale();
  const location = useLocation();
  const { slug } = useParams();
  const t = copy[locale];
  const services = t.services;
  const service = useMemo(() => services.find((s) => s.slug === slug), [slug, services]);
  const children = useMemo(
    () => (service ? services.filter((s) => s.parent === service.slug) : []),
    [service, services]
  );
  const parent = useMemo(
    () => (service?.parent ? services.find((s) => s.slug === service.parent) : undefined),
    [service, services]
  );

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [slug]);

  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  if (!service) {
    return (
      <section className="section-padding bg-background" dir={dir}>
        <div className="container-custom text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">Not Found</h1>
          <p className="text-muted-foreground mb-6">{t.servicesIntro.back}</p>
          <Link to="/services" className="inline-flex items-center gap-2 text-primary font-semibold">
            {t.servicesIntro.back} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    );
  }

  const waLink = `https://wa.me/9660506792744?text=${encodeURIComponent(service.whatsappMessage)}`;
  const trackWa = () => trackContactClick(waLink, "+9660506792744");

  return (
    <div dir={dir}>
      <Seo
        title={`${service.name} | ${t.navbar.brand}${t.navbar.brandHighlight ? " " + t.navbar.brandHighlight : ""}`}
        description={`${service.name}: ${service.intro} ${service.description}`}
        path={location.pathname}
        lang={locale}
        ogImage={service.gallery?.[0]}
        breadcrumbs={[
          { name: t.navbar.home, url: "https://www.ebnalarab.com/" },
          { name: t.servicesIntro.title, url: "https://www.ebnalarab.com/services" },
          { name: service.name, url: `https://www.ebnalarab.com${location.pathname}` },
        ]}
      />
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={service.gallery[0]}
            alt={service.heroAlt ?? `${service.name} portable cabin by EBN AL ARAB in Saudi Arabia`}
            className="w-full h-full object-cover"
            loading="lazy"
            decoding="async"
            fetchPriority="low"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-dark/90 via-slate-dark/70 to-transparent" />
        </div>
        <div className="container-custom relative z-10 py-24">
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/15 text-primary font-semibold text-sm">
              {t.servicesIntro.title}
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white">{service.name}</h1>
            <p className="text-primary-foreground/80 text-lg leading-relaxed">{service.intro}</p>
            <div className="flex flex-wrap gap-3">
              <a
                href={waLink}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-green-500 text-white font-semibold shadow-lg hover:bg-green-600 transition"
                aria-label={t.servicesIntro.whatsappLabel}
                onClick={trackWa}
              >
                <Phone className="w-5 h-5" />
                {t.servicesIntro.whatsappLabel}
              </a>
              {parent && (
                <Link
                  to={`/services/${parent.slug}`}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/10 text-white border border-white/30 hover:bg-white/20 transition"
                >
                  {parent.name} <ArrowRight className="w-4 h-4" />
                </Link>
              )}
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/10 text-white border border-white/30 hover:bg-white/20 transition"
              >
                {t.servicesIntro.back} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-2xl font-bold text-foreground">{service.name}</h2>
            <p className="text-muted-foreground leading-relaxed">{service.description}</p>

            <div className="grid sm:grid-cols-2 gap-4">
              {service.highlights.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-xl border border-border/60 bg-card p-4">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                  <p className="text-foreground">{item}</p>
                </div>
              ))}
            </div>

            {children.length > 0 && (
              <div className="mt-8 space-y-3">
                <h3 className="text-xl font-semibold text-foreground">{t.servicesIntro.title}</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {children.map((child) => (
                    <Link
                      key={child.slug}
                      to={`/services/${child.slug}`}
                      className="flex items-center justify-between px-4 py-3 rounded-lg border border-border/60 bg-card hover:border-primary/40 hover:shadow-sm transition"
                    >
                      <span className="text-foreground font-semibold">{child.name}</span>
                      <ArrowRight className="w-4 h-4 text-primary" />
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground">{t.servicesIntro.whatsappLabel}</h3>
            <p className="text-muted-foreground">{service.intro}</p>
            <a
              href={waLink}
              className="inline-flex items-center justify-center gap-2 w-full px-4 py-3 rounded-lg bg-green-500 text-white font-semibold shadow-md hover:bg-green-600 transition"
            >
              <Phone className="w-5 h-5" /> {t.servicesIntro.whatsappLabel}
            </a>
          </div>
        </div>
      </section>

      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <h3 className="text-2xl font-bold text-foreground mb-6">{t.products.title}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.gallery.map((img, idx) => {
              const alt = service.galleryAlts?.[idx] ?? `${service.name} modular cabin view ${idx + 1} by EBN AL ARAB`;

              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setSelectedImage({ src: img, alt })}
                  className="block rounded-2xl overflow-hidden border border-border/60 bg-card shadow-soft group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  aria-label={alt}
                >
                  <img
                    src={img}
                    alt={alt}
                    className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                    fetchPriority="low"
                  />
                </button>
              );
            })}
          </div>
        </div>
      </section>

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
    </div>
  );
};

export default ServicePage;
