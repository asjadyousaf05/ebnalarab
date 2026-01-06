import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Play, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { copy } from "@/i18n/copy";
import { useLocale } from "@/context/LocaleContext";

export const Hero = () => {
  const { locale, dir } = useLocale();
  const t = copy[locale];
  const slides = t.hero.slides;
  const [current, setCurrent] = useState(0);
  const total = slides.length;
  const slide = useMemo(() => slides[current], [current, slides]);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((prev) => (prev + 1) % total), 7000);
    return () => clearInterval(timer);
  }, [total]);

  useEffect(() => {
    setCurrent(0);
  }, [locale]);

  const goNext = () => setCurrent((prev) => (prev + 1) % total);
  const goPrev = () => setCurrent((prev) => (prev - 1 + total) % total);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.changedTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX;
    const threshold = 50;
    if (deltaX > threshold) {
      goPrev();
    } else if (deltaX < -threshold) {
      goNext();
    }
    setTouchStartX(null);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      aria-label={t.labels.heroSection}
      dir={dir}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={slide.image}
          alt={slide.alt ?? `${slide.headline.highlight} by EBN AL ARAB porta cabin experts in Saudi Arabia`}
          className="w-full h-full object-cover transition-all duration-700 ease-in-out"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 hero-overlay" />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-dark/95 via-slate-dark/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 py-32 lg:py-40" role="presentation">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
            role="status"
            aria-live="polite"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse-soft" />
            <span className="text-primary-foreground/90 text-sm font-medium">{slide.badge}</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground leading-tight mb-6"
          >
            {slide.headline.before} <span className="gradient-text">{slide.headline.highlight}</span> {slide.headline.after}
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-primary-foreground/70 mb-8 leading-relaxed max-w-2xl"
          >
            {slide.description}
          </motion.p>

          {/* Features */}
          <motion.ul
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row flex-wrap gap-4 mb-10"
          >
            {slide.features.map((feature) => (
              <li
                key={feature}
                className="flex items-center gap-2 text-primary-foreground/80"
              >
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm font-medium">{feature}</span>
              </li>
            ))}
          </motion.ul>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href={slide.ctaHref ?? "/services"}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold shadow-lg hover:shadow-xl transition focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
            >
              {t.hero.ctaPrimary}
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href={slide.secondaryHref ?? slide.ctaHref ?? "/services"}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-primary/60 text-primary-foreground font-semibold hover:bg-primary/10 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
            >
              <Play className="w-5 h-5" />
              {t.hero.ctaSecondary}
            </a>
          </motion.div>
        </div>
      </div>

      {/* Slider controls */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-between px-4 md:px-8 lg:px-12 z-10">
        <button
          type="button"
          onClick={goPrev}
          className="pointer-events-auto hidden md:block text-white hover:text-white/80 drop-shadow-[0_0_10px_rgba(0,0,0,0.45)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white transition"
          aria-label={t.labels.previousSlide}
        >
          <ArrowLeft className="w-7 h-7" />
        </button>
        <button
          type="button"
          onClick={goNext}
          className="pointer-events-auto hidden md:block text-white hover:text-white/80 drop-shadow-[0_0_10px_rgba(0,0,0,0.45)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white transition"
          aria-label={t.labels.nextSlide}
        >
          <ArrowRight className="w-7 h-7" />
        </button>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};
