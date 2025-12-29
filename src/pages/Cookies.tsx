import { copy } from "@/i18n/copy";
import { useLocale } from "@/context/LocaleContext";
import { Seo } from "@/lib/seo";
import { useLocation } from "react-router-dom";

const Cookies = () => {
  const { locale, dir } = useLocale();
  const t = copy[locale];
  const cookiesCopy = t.cookies;
  const email = t.contact.info.find((i) => i.label.toLowerCase().includes("email"))?.value || "info@example.com";
  const sections = cookiesCopy.sections.map((section) => section.replace("{email}", email));
  const location = useLocation();

  return (
    <section className="section-padding bg-background" aria-labelledby="cookies-heading" dir={dir}>
      <Seo
        title={cookiesCopy.metaTitle}
        description={cookiesCopy.metaDescription}
        path={location.pathname}
        lang={locale}
        breadcrumbs={[{ name: t.navbar.home, url: "https://www.ebnalarab.com/" }, { name: cookiesCopy.title, url: `https://www.ebnalarab.com${location.pathname}` }]}
      />
      <div className="container-custom max-w-4xl mx-auto space-y-6">
        <header className="space-y-3">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider">{cookiesCopy.eyebrow}</p>
          <h1 id="cookies-heading" className="text-3xl sm:text-4xl font-bold text-foreground">
            {cookiesCopy.title}
          </h1>
          <p className="text-muted-foreground">{cookiesCopy.intro}</p>
        </header>

        <div className="space-y-4 text-muted-foreground leading-relaxed">
          {sections.map((section, idx) => (
            <p key={idx}>{section}</p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cookies;
