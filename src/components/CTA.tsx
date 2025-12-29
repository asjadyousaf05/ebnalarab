import { motion } from "framer-motion";
import { copy } from "@/i18n/copy";
import { useLocale } from "@/context/LocaleContext";

export const CTA = () => {
  const { locale, dir } = useLocale();
  const t = copy[locale];
  const gallery = t.products.categories;
  return (
    <section className="section-padding bg-background" aria-labelledby="cta-heading" dir={dir}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 id="cta-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t.products.title}
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            {t.products.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {gallery.slice(0, 3).map((item, index) => (
            <motion.figure
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="overflow-hidden rounded-2xl border border-border/60 bg-card shadow-soft"
            >
              <img
                src={item.image}
                alt={item.imageAlt ?? `${item.name} by EBN AL ARAB - ${item.description}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </motion.figure>
          ))}
        </div>

        <div className="flex justify-center">
          <a
            href="/gallery"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold shadow-md hover:shadow-lg transition"
          >
            View Full Gallery
          </a>
        </div>
      </div>
    </section>
  );
};
