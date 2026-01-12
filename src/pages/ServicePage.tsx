import { useEffect, useMemo, useState } from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, Phone } from "lucide-react";
import { copy } from "@/i18n/copy";
import { useLocale } from "@/context/LocaleContext";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { trackContactClick } from "@/lib/analytics";
import { Seo } from "@/lib/seo";
import { pageMeta } from "@/i18n/pageMeta";
import { servicesContent } from "@/i18n/servicesContent";

const ServicePage = () => {
  const { locale, dir } = useLocale();
  const location = useLocation();
  const { slug } = useParams();
  const t = copy[locale];
  const meta = pageMeta[locale] ?? pageMeta.en;
  const services = servicesContent[locale];
  const altLocale: "en" | "ar" = locale === "en" ? "ar" : "en";
  const altServices = servicesContent[altLocale];
  const service = useMemo(() => services.find((s) => s.slug === slug), [slug, services]);
  const children = useMemo(
    () => (service ? services.filter((s) => s.parent === service.slug) : []),
    [service, services]
  );
  const parent = useMemo(
    () => (service?.parent ? services.find((s) => s.slug === service.parent) : undefined),
    [service, services]
  );
  const relatedServices = useMemo(
    () =>
      service?.relatedSlugs
        ?.map((rel) => services.find((s) => s.slug === rel))
        .filter(Boolean) ?? [],
    [service, services]
  );
  const altService = useMemo(
    () => altServices.find((s) => s.slug === slug),
    [altServices, slug]
  );

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [slug]);

  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);
  const serviceMeta =
    service?.metaTitle && service?.metaDescription
      ? { title: service.metaTitle, description: service.metaDescription }
      : service
        ? meta.serviceDetails[service.slug]
        : undefined;
  const internalLinks: { label: string; href: string }[] = [];
  if (parent) internalLinks.push({ label: parent.name, href: `/services/${parent.slug}` });
  children.forEach((child) => internalLinks.push({ label: child.name, href: `/services/${child.slug}` }));
  relatedServices.forEach((rel) => internalLinks.push({ label: rel?.name ?? "", href: `/services/${rel?.slug}` }));

  useEffect(() => {
    if (!service) return;
    const faqEntities = [
      ...(service.faqs || []).map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
        inLanguage: locale === "ar" ? "ar" : "en",
      })),
      ...(altService?.faqs || []).map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
        inLanguage: altLocale === "ar" ? "ar" : "en",
      })),
    ];

    if (!faqEntities.length) return;

    const scriptId = `faq-schema-${service.slug}`;
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement("script");
      script.id = scriptId;
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqEntities,
    });

    return () => {
      script?.remove();
    };
  }, [service, altService, locale, altLocale]);

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

  const waLink = `https://wa.me/966581460761?text=${encodeURIComponent(service.whatsappMessage)}`;
  const trackWa = () => trackContactClick(waLink, "+966581460761");

  return (
    <div dir={dir}>
      <Seo
        title={
          serviceMeta?.title ??
          `${service.name} | ${t.navbar.brand}${t.navbar.brandHighlight ? " " + t.navbar.brandHighlight : ""}`
        }
        description={serviceMeta?.description ?? `${service.name}: ${service.intro} ${service.description}`}
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
            <div className="grid sm:grid-cols-2 gap-4">
              {service.highlights.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-xl border border-border/60 bg-card p-4">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                  <p className="text-foreground">{item}</p>
                </div>
              ))}
            </div>

            <p className="text-muted-foreground leading-relaxed">{service.description}</p>

            {internalLinks.length > 0 && (
              <div className="rounded-xl border border-border/60 bg-card p-4 space-y-2">
                <h3 className="text-lg font-semibold text-foreground">
                  {locale === "ar" ? "روابط داخلية سريعة" : "Quick internal links in Saudi Arabia"}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {locale === "ar"
                    ? "تساعد هذه الروابط جوجل على الزحف لكل خدمة مرتبطة."
                    : "These links help Google crawl every related service page across Saudi Arabia."}
                </p>
                <div className="flex flex-wrap gap-2">
                  {internalLinks.slice(0, 8).map((link) => (
                    <Link
                      key={link.href}
                      to={link.href}
                      className="text-primary text-sm font-semibold underline underline-offset-4 hover:text-primary/80"
                    >
                      {locale === "en" ? `${link.label} in Saudi Arabia` : link.label}
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

      <section className="section-padding bg-muted/30">
        <div className="container-custom grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-6">
            {service.contentSections?.map((section) => (
              <div
                key={section.heading}
                className="rounded-2xl border border-border/60 bg-card shadow-soft p-6 sm:p-8 space-y-3"
              >
                <h2 className="text-2xl font-semibold text-foreground">{section.heading}</h2>
                {section.body.map((paragraph, idx) => (
                  <p
                    key={idx}
                    className="text-muted-foreground leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: paragraph }}
                  />
                ))}
              </div>
            ))}

            <div className="rounded-2xl border border-border/60 bg-card shadow-soft p-6 sm:p-8 space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">
                {locale === "ar" ? "لماذا تختار ابن العرب" : "Why choose Ebn Al Arab"}
              </h2>
              <ul className="space-y-2">
                {[
                  locale === "ar"
                    ? "تصنيع محلي في جدة مع تسليم سريع داخل المملكة."
                    : "Local fabrication in Jeddah with fast delivery across KSA.",
                  locale === "ar"
                    ? "تصاميم مكيفة لحرارة السعودية مع عزل وأعمال كهرباء جاهزة."
                    : "Saudi-climate-ready insulation, power, and AC sizing.",
                  locale === "ar"
                    ? "فِرق تركيب وصيانة متاحة لإعادة التمركز والتوسعات."
                    : "Install and maintenance teams available for relocations and expansions.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-border/60 bg-card shadow-soft p-6 sm:p-8 space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">
                {locale === "ar" ? "المواصفات الفنية المختصرة" : "Technical specs at a glance"}
              </h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  locale === "ar" ? "ألواح ساندوتش عزل حراري" : "Insulated sandwich panels",
                  locale === "ar" ? "إطارات فولاذية مدعمة" : "Reinforced steel framing",
                  locale === "ar" ? "أسلاك وكهرباء جاهزة للمكيفات" : "Prewired and AC-ready power",
                  locale === "ar" ? "أرضيات مقاومة للانزلاق" : "Slip-resistant flooring options",
                  locale === "ar" ? "تجهيزات صحية اختيارية" : "Optional sanitary/kitchen fit-out",
                  locale === "ar" ? "تصاريح ورفع ونقل داخل السعودية" : "KSA transport, craning, and permits handled",
                ].map((spec) => (
                  <div key={spec} className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span className="text-sm">{spec}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl border border-border/60 bg-card shadow-soft p-6 space-y-3">
              <h3 className="text-xl font-semibold text-foreground">
                {locale === "ar" ? "روابط ذات صلة" : "Related services"}
              </h3>
              <div className="space-y-2">
                {relatedServices.map((rel) => (
                  <Link
                    key={rel?.slug}
                    to={`/services/${rel?.slug}`}
                    className="flex items-center justify-between gap-2 rounded-lg border border-border/60 bg-background/80 px-3 py-2 hover:border-primary/50 transition"
                  >
                    <span className="text-foreground font-medium">{rel?.name}</span>
                    <ArrowRight className="w-4 h-4 text-primary" />
                  </Link>
                ))}
              </div>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
              >
                {t.servicesIntro.back} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="rounded-2xl border border-border/60 bg-card shadow-soft p-6 space-y-3">
              <h3 className="text-xl font-semibold text-foreground">
                {locale === "ar" ? "الأسئلة الشائعة" : "FAQs"}
              </h3>
              <div className="space-y-2">
                {service.faqs.map((faq) => (
                  <details
                    key={faq.question}
                    className="group rounded-lg border border-border/60 bg-background/70 p-3"
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
