import { FAQ } from "@/components/FAQ";
import { useLocale } from "@/context/LocaleContext";
import { copy } from "@/i18n/copy";
import { Seo } from "@/lib/seo";
import { useLocation } from "react-router-dom";

const FAQPage = () => {
  const { locale, dir } = useLocale();
  const t = copy[locale];
  const location = useLocation();

  return (
    <div dir={dir}>
      <Seo
        title={`${t.faq.title} | ${t.navbar.brand}`}
        description={t.faq.description}
        path={location.pathname}
        lang={locale}
        breadcrumbs={[{ name: t.navbar.home, url: "https://www.ebnalarab.com/" }, { name: t.faq.title, url: `https://www.ebnalarab.com${location.pathname}` }]}
      />
      <section className="section-padding bg-background" aria-labelledby="faq-page-heading">
        <div className="container-custom max-w-4xl mx-auto text-center space-y-4">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider">{t.faq.eyebrow}</p>
          <h1 id="faq-page-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            {t.faq.title}
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            {t.faq.description}
          </p>
        </div>
      </section>

      <FAQ />
    </div>
  );
};

export default FAQPage;
