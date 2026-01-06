import { Linkedin, Twitter, Facebook, Instagram, ArrowUp } from "lucide-react";
import { copy } from "@/i18n/copy";
import { useLocale } from "@/context/LocaleContext";
import { servicesContent } from "@/i18n/servicesContent";

export const Footer = () => {
  const { locale, dir } = useLocale();
  const t = copy[locale].footer;
  const labels = copy[locale].labels;
  const serviceLinks = servicesContent[locale].filter((service) => !service.parent);
  const socialLinks = [
    { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/ebn-al-arab-3a72b23a1" },
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "Facebook", icon: Facebook, href: "https://www.facebook.com/profile.php?id=61585895152020" },
    {
      name: "Instagram",
      icon: Instagram,
      href: "https://www.instagram.com/ebn_al_arab_est?igsh=ZGlqNGVoZ2pzN3Ru",
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-dark text-primary-foreground" role="contentinfo" dir={dir}>
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2">
            <a href="#home" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">P</span>
              </div>
              <span className="text-xl font-bold">
                {t.brand}
              </span>
            </a>
            <p className="text-primary-foreground/60 leading-relaxed mb-6 max-w-xs">
              {t.description}
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-primary-foreground/5 border border-primary-foreground/10 flex items-center justify-center hover:bg-primary/20 hover:border-primary/30 transition-colors duration-200"
                  aria-label={
                    {
                      LinkedIn: labels.linkedin,
                      Twitter: labels.twitter,
                      Facebook: labels.facebook,
                      Instagram: labels.instagram,
                    }[social.name] ?? social.name
                  }
                >
                  <social.icon className="w-5 h-5 text-primary-foreground/70" />
                </a>
              ))}
            </div>
          </div>

          {/* Portacabins & Services */}
          <div className="lg:col-span-2">
            <h3 className="font-semibold text-primary-foreground mb-4">
              {locale === "ar" ? "كبائن وحلول محمولة" : "Portacabins & Portable Solutions"}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {serviceLinks.map((link) => (
                <a
                  key={link.slug}
                  href={`/services/${link.slug}`}
                  className="text-primary-foreground/60 hover:text-primary transition-colors duration-200"
                >
                  {locale === "en" ? `${link.name} in Saudi Arabia` : link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold text-primary-foreground mb-4">{t.products}</h3>
            <ul className="space-y-3">
              {t.links.products.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/60 hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-primary-foreground mb-4">{t.company}</h3>
            <ul className="space-y-3">
              {t.links.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/60 hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-primary-foreground mb-4">{t.support}</h3>
            <ul className="space-y-3">
              {t.links.support.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/60 hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-primary-foreground mb-4">{t.legal}</h3>
            <ul className="space-y-3">
              {t.links.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/60 hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-custom py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/50 text-sm">
            {`Ac ${new Date().getFullYear()} ${t.brand}. ${t.copyright}`}
          </p>
          <p className="text-primary-foreground/50 text-sm flex items-center gap-1">
            Developed by{" "}
            <a
              href="https://asjadyousaf.online"
              className="text-primary font-semibold hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              ASJAD YOUSAF KHAN
            </a>
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-primary-foreground/50 hover:text-primary transition-colors duration-200"
            aria-label={t.backToTop}
          >
            {t.backToTop}
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
