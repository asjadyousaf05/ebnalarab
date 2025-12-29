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
import { copy } from "@/i18n/copy";
import { useLocation } from "react-router-dom";

const Index = () => {
  const { locale, dir } = useLocale();
  const t = copy[locale];
  const location = useLocation();

  const metaTitle =
    locale === "ar"
      ? "كبائن جاهزة ومبانٍ معيارية في السعودية | ابن العرب"
      : "Porta Cabins & Modular Buildings in Saudi Arabia | EBN AL ARAB";
  const metaDescription =
    locale === "ar"
      ? "كبائن متنقلة معزولة، مكاتب مواقع، وحدات أمنية، معسكرات عمال، وحدات صحية، وتصنيع ولحام سريع لتلبية المشاريع داخل السعودية ودول الخليج."
      : "Insulated porta cabins, site offices, security units, labor camps, sanitary cabins, and fabrication services with rapid delivery across KSA and the GCC.";

  return (
    <div dir={dir}>
      <Seo title={metaTitle} description={metaDescription} path={location.pathname} lang={locale} />
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
