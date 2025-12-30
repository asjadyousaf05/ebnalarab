import { Contact } from "@/components/Contact";
import { useLocale } from "@/context/LocaleContext";
import { copy } from "@/i18n/copy";
import { Seo } from "@/lib/seo";
import { pageMeta } from "@/i18n/pageMeta";
import { useLocation } from "react-router-dom";

const ContactPage = () => {
  const { locale, dir } = useLocale();
  const t = copy[locale];
  const location = useLocation();
  const meta = pageMeta[locale] ?? pageMeta.en;

  return (
    <div dir={dir}>
      <Seo
        title={meta.contact.title}
        description={meta.contact.description}
        path={location.pathname}
        lang={locale}
        breadcrumbs={[{ name: t.navbar.home, url: "https://www.ebnalarab.com/" }, { name: t.contact.title, url: `https://www.ebnalarab.com${location.pathname}` }]}
      />
      <section className="section-padding bg-background" aria-labelledby="contact-page-heading">
        <div className="container-custom max-w-4xl mx-auto text-center space-y-4">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider">
            {t.contact.eyebrow}
          </p>
          <h1 id="contact-page-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            {t.contact.title}
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            {t.contact.description}
          </p>
        </div>
      </section>

      <Contact />
    </div>
  );
};

export default ContactPage;
