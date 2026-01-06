import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { ProductCategories } from "@/components/ProductCategories";
import { Features } from "@/components/Features";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";
import { Contact } from "@/components/Contact";
import { Seo } from "@/lib/seo";
import { useLocale } from "@/context/LocaleContext";
import { pageMeta } from "@/i18n/pageMeta";
import { useLocation } from "react-router-dom";
import { servicesContent } from "@/i18n/servicesContent";

const Index = () => {
  const { locale, dir } = useLocale();
  const location = useLocation();
  const meta = pageMeta[locale] ?? pageMeta.en;
  const serviceLinks = servicesContent[locale];

  return (
    <div dir={dir}>
      <Seo title={meta.home.title} description={meta.home.description} path={location.pathname} lang={locale} />
      <Hero />
      <Stats />
      <ProductCategories />
      <Features />
      <section className="section-padding bg-muted/30" aria-labelledby="service-links-heading" dir={dir}>
        <div className="container-custom space-y-6">
          <div className="max-w-3xl space-y-3">
            <h2 id="service-links-heading" className="text-3xl sm:text-4xl font-bold text-foreground">
              Key porta cabin services in Saudi Arabia
            </h2>
            <p className="text-muted-foreground text-lg">
              Strong internal links help search engines crawl every service page. Explore our bilingual catalog built in Jeddah and delivered across KSA.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {serviceLinks.map((service) => (
              <a
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group rounded-xl border border-border/60 bg-card shadow-soft p-4 hover:border-primary/60 transition"
              >
                <p className="text-sm font-semibold text-primary uppercase tracking-wide">Saudi Arabia</p>
                <p className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                  {locale === "en" ? `${service.name} in Saudi Arabia` : service.name}
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  Serving Jeddah and nationwide projects with fast modular delivery.
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>
      <Testimonials />
      <CTA />
      <FAQ />
      <Contact />
    </div>
  );
};

export default Index;
