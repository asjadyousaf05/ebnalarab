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

const Index = () => {
  const { locale, dir } = useLocale();
  const location = useLocation();
  const meta = pageMeta[locale] ?? pageMeta.en;

  return (
    <div dir={dir}>
      <Seo title={meta.home.title} description={meta.home.description} path={location.pathname} lang={locale} />
      <Hero />
      <Stats />
      <ProductCategories />
      <Features />
      <Testimonials />
      <CTA />
      <FAQ />
      <Contact />
    </div>
  );
};

export default Index;
