import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useLocale } from "@/context/LocaleContext";
import { copy } from "@/i18n/copy";
import { Seo } from "@/lib/seo";

const NotFound = () => {
  const location = useLocation();
  const { locale, dir } = useLocale();
  const t = copy[locale].notFound;

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted" dir={dir}>
      <Seo
        title={t.title}
        description={t.description}
        path={location.pathname}
        lang={locale}
        robots="noindex,follow"
      />
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-muted-foreground">{t.description}</p>
        <a href="/" className="text-primary underline hover:text-primary/90">
          {t.cta}
        </a>
      </div>
    </div>
  );
};

export default NotFound;
