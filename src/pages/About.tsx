import { motion } from "framer-motion";
import { Shield, Truck, Award, Wrench, Headphones, Globe } from "lucide-react";
import { useLocale } from "@/context/LocaleContext";
import { copy } from "@/i18n/copy";
import { Seo } from "@/lib/seo";
import { pageMeta } from "@/i18n/pageMeta";
import { useLocation } from "react-router-dom";

const iconMap = { Shield, Truck, Award, Wrench, Headphones, Globe };

const About = () => {
  const { locale, dir } = useLocale();
  const t = copy[locale];
  const about = t.about;
  const location = useLocation();
  const meta = pageMeta[locale] ?? pageMeta.en;

  const features = t.features.items;

  return (
    <div dir={dir}>
      <Seo
        title={meta.about.title}
        description={meta.about.description}
        path={location.pathname}
        lang={locale}
        breadcrumbs={[{ name: t.navbar.home, url: "https://www.ebnalarab.com/" }, { name: about.title, url: `https://www.ebnalarab.com${location.pathname}` }]}
      />
      <section className="section-padding bg-background" aria-labelledby="about-heading">
        <div className="container-custom grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider">{t.features.eyebrow}</p>
            <h1 id="about-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              {about.title}
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {about.intro}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {about.intro2}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {features.map((feature, index) => {
              const Icon = iconMap[feature.icon as keyof typeof iconMap] || Shield;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="p-5 rounded-xl border border-border/60 bg-card shadow-soft"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-padding bg-muted/30" aria-labelledby="about-values-heading">
        <div className="container-custom max-w-5xl mx-auto space-y-6 text-center">
          <h2 id="about-values-heading" className="text-3xl sm:text-4xl font-bold text-foreground">
            {about.valuesTitle}
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            {about.valuesDescription}
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {about.values.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="p-5 rounded-xl border border-border/60 bg-card shadow-soft"
              >
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
