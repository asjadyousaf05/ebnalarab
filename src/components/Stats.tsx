import { motion } from "framer-motion";
import { copy } from "@/i18n/copy";
import { useLocale } from "@/context/LocaleContext";

export const Stats = () => {
  const { locale, dir } = useLocale();
  const stats = copy[locale].stats;
  return (
    <section className="py-16 bg-background border-y border-border/50" aria-label="Company statistics" dir={dir}>
      <div className="container-custom">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <span className="block text-4xl sm:text-5xl lg:text-6xl font-bold gradient-text mb-2">
                {stat.value}
              </span>
              <span className="text-muted-foreground font-medium">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
