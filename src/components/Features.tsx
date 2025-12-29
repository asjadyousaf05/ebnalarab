import { motion } from "framer-motion";
import { Shield, Truck, Award, Headphones, Wrench, Globe } from "lucide-react";
import { copy } from "@/i18n/copy";
import { useLocale } from "@/context/LocaleContext";

const iconMap = {
  Shield,
  Truck,
  Award,
  Headphones,
  Wrench,
  Globe,
};

export const Features = () => {
  const { locale, dir } = useLocale();
  const t = copy[locale].features;
  return (
    <section id="about" className="section-padding bg-muted/50" aria-labelledby="features-heading" dir={dir}>
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-3">
            {t.eyebrow}
          </span>
          <h2 id="features-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t.title}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t.description}
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.items.map((feature, index) => {
            const Icon = iconMap[feature.icon as keyof typeof iconMap] || Shield;
            return (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <article className="h-full p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-medium transition-all duration-300">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:shadow-copper transition-all duration-300">
                  <Icon className="w-7 h-7 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </article>
            </motion.div>
          );
          })}
        </div>
      </div>
    </section>
  );
};
