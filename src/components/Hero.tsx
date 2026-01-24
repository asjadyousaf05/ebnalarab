import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Phone, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { copy } from "@/i18n/copy";
import { useLocale } from "@/context/LocaleContext";
import { trackContactClick } from "@/lib/analytics";


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
        {/* Very light overlay only on left side where text is */}
        <div className="absolute inset-y-0 left-0 w-full lg:w-2/5 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
      </div>


      {/* Content */}
      <div className="container-custom relative z-10 py-20 lg:py-28" role="presentation">
        <div className="max-w-md lg:max-w-xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-4"
            role="status"
            aria-live="polite"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse-soft" />
            <span className="text-primary-foreground/90 text-xs font-medium">{slide.badge}</span>
          </motion.div>

          {/* Heading - Reduced size */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-primary-foreground leading-tight mb-4"
          >
            {slide.headline.before} <span className="gradient-text">{slide.headline.highlight}</span> {slide.headline.after}
          </motion.h1>

          {/* Subheading - Reduced size and max-width */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-primary-foreground/70 mb-6 leading-relaxed max-w-lg"
          >
            {slide.description}
          </motion.p>

          {/* Features - Show only first 3 in a compact layout */}
          <motion.ul
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-3 mb-6"
          >
            {slide.features.slice(0, 3).map((feature) => (
              <li
                key={feature}
                className="flex items-center gap-1.5 text-primary-foreground/80"
              >
                <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-xs font-medium">{feature}</span>
              </li>
            ))}
          </motion.ul>

          {/* CTAs - Slightly smaller */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <a
              href={slide.ctaHref ?? "/services"}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground font-semibold shadow-lg hover:shadow-xl transition focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
            >
              {t.hero.ctaPrimary}
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="https://wa.me/966581460761"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-green-500 text-white font-semibold hover:bg-green-600 shadow-lg hover:shadow-xl transition focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500/60"
              onClick={() => trackContactClick("https://wa.me/966581460761", "+966581460761")}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Phone className="w-4 h-4" />
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
