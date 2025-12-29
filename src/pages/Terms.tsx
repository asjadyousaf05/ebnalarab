import { copy } from "@/i18n/copy";
import { useLocale } from "@/context/LocaleContext";
import { Seo } from "@/lib/seo";
import { useLocation } from "react-router-dom";

const Terms = () => {
  const { locale, dir } = useLocale();
  const t = copy[locale];
  const terms = t.terms;
  const location = useLocation();

  return (
    <section className="section-padding bg-background" aria-labelledby="terms-heading" dir={dir}>
      <Seo
        title={terms.metaTitle}
        description={terms.metaDescription}
        path={location.pathname}
        lang={locale}
        breadcrumbs={[{ name: t.navbar.home, url: "https://www.ebnalarab.com/" }, { name: terms.title, url: `https://www.ebnalarab.com${location.pathname}` }]}
      />
      <div className="container-custom max-w-4xl mx-auto space-y-6">
        <header className="space-y-3">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider">{terms.eyebrow}</p>
          <h1 id="terms-heading" className="text-3xl sm:text-4xl font-bold text-foreground">
            {terms.title}
          </h1>
          <p className="text-muted-foreground">{terms.intro}</p>
        </header>

        <div className="space-y-4 text-muted-foreground leading-relaxed">
          {terms.sections.map((section, idx) => (
            <p key={idx}>{section}</p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Terms;
