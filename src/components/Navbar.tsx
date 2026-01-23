import { useState, useEffect, useRef } from "react";
import { ChevronDown, ChevronRight, Menu, X, Phone, Facebook, Instagram, Search } from "lucide-react";
import { useLocale } from "@/context/LocaleContext";
import { copy } from "@/i18n/copy";
import logo from "@/assets/EBN.png";
import { trackContactClick } from "@/lib/analytics";

const toId = (value: string) => value.toLowerCase().replace(/[^a-z0-9\u0600-\u06FF]+/g, "-");

export const Navbar = () => {
  const { locale, toggleLocale, dir } = useLocale();
  const t = copy[locale];
  const navLinks = t.navbar.navLinks;
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [mobileExpandedItems, setMobileExpandedItems] = useState<string[]>([]);
  const navRef = useRef<HTMLElement>(null);
  const dropdownTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const submenuTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
        setActiveSubmenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
      setMobileExpandedItems((prev) => (prev.length ? prev : ["Services"]));
    } else {
      document.body.style.overflow = "";
      setMobileExpandedItems([]);
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const handleDropdownEnter = (name: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
    setActiveDropdown(name);
  };

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
      setActiveSubmenu(null);
    }, 150);
  };

  const handleSubmenuEnter = (name: string) => {
    if (submenuTimeoutRef.current) {
      clearTimeout(submenuTimeoutRef.current);
      submenuTimeoutRef.current = null;
    }
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
    setActiveSubmenu(name);
  };

  const handleSubmenuLeave = () => {
    submenuTimeoutRef.current = setTimeout(() => {
      setActiveSubmenu(null);
    }, 150);
  };

  const toggleMobileExpand = (name: string) => {
    setMobileExpandedItems((prev) =>
      prev.includes(name) ? prev.filter((item) => item !== name) : [...prev, name]
    );
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setMobileExpandedItems([]);
  };

  return (
    <>
      {/* Mobile-only top phone banner */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-[51] bg-primary text-primary-foreground py-2 px-4 shadow-md">
        <a
          href={`tel:${t.navbar.phone.replace(/[^+\d]/g, "")}`}
          className="flex items-center justify-center gap-2 text-sm font-semibold"
          aria-label={`Call ${t.navbar.phone}`}
          onClick={() =>
            trackContactClick(`tel:${t.navbar.phone.replace(/[^+\d]/g, "")}`, t.navbar.phone)
          }
        >
          <Phone size={16} aria-hidden="true" className="animate-pulse" />
          <span>{t.navbar.phone}</span>
        </a>
      </div>

      <header
        dir={dir}
        className={`fixed lg:top-0 top-10 left-0 right-0 z-50 transition-all duration-300 py-[5px] ${isScrolled
            ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-border/50"
            : "bg-background/80 backdrop-blur-sm"
          }`}
      >
        <nav
          className="container mx-auto px-4 lg:px-8 flex items-center justify-between gap-4"
          aria-label="Main navigation"
          ref={navRef}
        >
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 group z-10" aria-label="Home">
            <div className="w-[8rem] h-[3.5rem] sm:w-[10rem] sm:h-[4rem] rounded-xl bg-transparent flex items-center justify-center overflow-hidden">
              <img
                src={logo}
                alt="EBN AL ARAB logo"
                className="w-full h-full object-contain"
                loading="lazy"
                width={150}
              />
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6 flex-1 justify-center">
            <ul className="flex items-center gap-1" role="menubar">
              {navLinks.map((link) => (
                <li
                  key={link.name}
                  className="relative"
                  role="none"
                  onMouseEnter={() => link.isDropdown && handleDropdownEnter(link.name)}
                  onMouseLeave={handleDropdownLeave}
                >
                  {link.isDropdown ? (
                    <div className="relative">
                      <a
                        href={link.href}
                        className={`flex items-center gap-1.5 px-4 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 ${activeDropdown === link.name
                            ? "text-primary bg-primary/10"
                            : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                          }`}
                        aria-haspopup="true"
                        aria-expanded={activeDropdown === link.name}
                        role="menuitem"
                      >
                        {link.name}
                        <ChevronDown
                          size={16}
                          className={`transition-transform duration-200 ${activeDropdown === link.name ? "rotate-180" : ""
                            }`}
                        />
                      </a>

                      {activeDropdown === link.name && link.categories && (
                        <div
                          className="absolute top-full left-0 mt-1 w-56 bg-card border border-border rounded-xl shadow-xl z-50"
                          role="menu"
                        >
                          <div className="py-2">
                            {link.categories.map((category) => (
                              <div
                                key={category.name}
                                className="relative"
                                onMouseEnter={() => category.subServices && handleSubmenuEnter(category.name)}
                                onMouseLeave={handleSubmenuLeave}
                              >
                                <a
                                  href={category.href}
                                  className={`flex items-center justify-between px-4 py-2.5 text-sm font-medium transition-all duration-200 mx-2 rounded-lg ${activeSubmenu === category.name
                                      ? "bg-primary/10 text-primary"
                                      : "text-foreground hover:bg-muted/60 hover:text-primary"
                                    }`}
                                  role="menuitem"
                                >
                                  <span>{category.name}</span>
                                  {category.subServices && (
                                    <ChevronRight size={14} className="text-muted-foreground" />
                                  )}
                                </a>

                                {activeSubmenu === category.name && category.subServices && (
                                  <div
                                    className="absolute left-full top-0 ml-1 w-56 bg-card border border-border rounded-xl shadow-xl z-50"
                                    role="menu"
                                    onMouseEnter={() => handleSubmenuEnter(category.name)}
                                    onMouseLeave={handleSubmenuLeave}
                                  >
                                    <div className="py-2 max-h-80 overflow-y-auto custom-scrollbar">
                                      {category.subServices.map((subService) => (
                                        <a
                                          key={subService.name}
                                          href={subService.href}
                                          className="block px-4 py-2 text-sm text-foreground hover:bg-primary/10 hover:text-primary transition-all duration-150 mx-2 rounded-lg"
                                          role="menuitem"
                                        >
                                          {subService.name}
                                        </a>
                                      ))}
                                    </div>
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <a
                      href={link.href}
                      className="px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium rounded-lg hover:bg-muted/50 block"
                      role="menuitem"
                    >
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:flex items-center gap-2">
            <button
              onClick={toggleLocale}
              className="px-3 py-2 rounded-lg border border-border/70 text-sm font-semibold text-foreground hover:bg-muted transition"
              aria-label={locale === "en" ? "Switch to Arabic" : "التبديل إلى الإنجليزية"}
            >
              {locale === "en" ? "AR" : "EN"}
            </button>
            <a
              href={`tel:${t.navbar.phone.replace(/[^+\d]/g, "")}`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground font-semibold shadow-md hover:shadow-lg transition-shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
              aria-label={`Call ${t.navbar.phone}`}
              onClick={() =>
                trackContactClick(`tel:${t.navbar.phone.replace(/[^+\d]/g, "")}`, t.navbar.phone)
              }
            >
              <Phone size={16} aria-hidden="true" />
              <span>{t.navbar.phone}</span>
            </a>
          </div>
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={toggleLocale}
              className="px-3 py-2 rounded-lg border border-border/70 text-sm font-semibold text-foreground hover:bg-muted transition"
              aria-label={locale === "en" ? "Switch to Arabic" : "التبديل إلى الإنجليزية"}
            >
              {locale === "en" ? "AR" : "EN"}
            </button>
            <button
              className="p-2.5 text-foreground hover:bg-muted/50 rounded-lg transition-colors z-10"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div
            className="lg:hidden fixed inset-0 z-[60]"
            role="dialog"
            aria-label="Mobile navigation menu"
            aria-modal="true"
          >
            <div className="absolute inset-0 bg-background/90 backdrop-blur-sm" onClick={closeMobileMenu} aria-hidden="true" />

            <div className="absolute top-0 left-0 right-0 h-[50vh] w-full">
              <aside className="flex h-full w-full flex-col bg-white shadow-2xl">
                {/* Top contact + social */}
                <div className="px-5 py-2.5 flex items-center justify-between border-b border-border/60">
                  <div className="text-sm font-semibold text-primary flex items-center gap-1">
                    <Phone size={16} aria-hidden="true" /> <span>{t.navbar.phone}</span>
                  </div>
                  <div className="flex items-center gap-4 text-foreground">
                    <a
                      href="https://www.facebook.com/profile.php?id=61585895152020"
                      aria-label="Facebook"
                    >
                      <Facebook size={16} />
                    </a>
                    <a
                      href="https://www.instagram.com/ebn_al_arab_est?igsh=ZGlqNGVoZ2pzN3Ru"
                      aria-label="Instagram"
                    >
                      <Instagram size={16} />
                    </a>
                  </div>
                </div>

                {/* Brand + close + CTA */}
                <div className="px-5 py-4 flex items-center justify-between border-b border-border/60">
                  <a href="/" className="flex items-center gap-2" onClick={closeMobileMenu}>
                    <div className="w-[8rem] h-[3.5rem] sm:w-[10rem] sm:h-[4rem] rounded-lg bg-transparent flex items-center justify-center overflow-hidden">
                      <img
                        src={logo}
                        alt="EBN AL ARAB logo"
                        className="w-full h-full object-contain"
                        loading="lazy"
                        width={150}
                      />
                    </div>
                  </a>
                  <div className="flex items-center gap-3">
                    <button
                      className="p-2 rounded-full hover:bg-muted/60 text-muted-foreground transition-colors"
                      aria-label="Search"
                    >
                      <Search size={18} />
                    </button>
                    <button
                      className="p-2 rounded-full hover:bg-muted/60 text-foreground transition-colors"
                      onClick={closeMobileMenu}
                      aria-label="Close menu"
                    >
                      <X size={20} />
                    </button>
                  </div>
                </div>

                {/* Nav list */}
                <nav className="flex-1 overflow-y-auto min-h-0 px-0 pb-6" aria-label="Mobile navigation links">
                  <ul className="divide-y divide-border/60 text-left">
                    {navLinks.map((link) => {
                      const linkId = toId(link.name);
                      const isExpanded = mobileExpandedItems.includes(link.name);
                      const isHome = link.name === "Home";
                      return (
                        <li
                          key={link.name}
                          className={`${isHome ? "bg-primary text-primary-foreground" : "bg-white text-foreground"}`}
                        >
                          {link.isDropdown ? (
                            <>
                              <button
                                className="w-full flex items-center justify-between py-3 px-5 font-semibold uppercase text-sm tracking-wide"
                                onClick={() => toggleMobileExpand(link.name)}
                                aria-expanded={isExpanded}
                                aria-controls={`${linkId}-section`}
                              >
                                <span>{link.name}</span>
                                <ChevronDown
                                  size={18}
                                  className={`transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`}
                                />
                              </button>

                              {isExpanded && link.categories && (
                                <ul className="bg-muted/20 border-t border-border/60" id={`${linkId}-section`}>
                                  <li className="border-b border-border/40">
                                    <a
                                      href={link.href}
                                      className="block py-3 pl-6 pr-5 text-sm font-semibold text-foreground hover:bg-muted/50"
                                      onClick={closeMobileMenu}
                                    >
                                      {link.name}
                                    </a>
                                  </li>
                                  {link.categories.map((category) => {
                                    const categoryId = toId(category.name);
                                    const isCategoryOpen = mobileExpandedItems.includes(category.name);
                                    return (
                                      <li key={category.name} className="border-b border-border/40 last:border-b-0">
                                        {category.subServices ? (
                                          <>
                                            <button
                                              className="w-full flex items-center justify-between py-3 pl-6 pr-5 text-sm font-semibold text-foreground"
                                              onClick={() => toggleMobileExpand(category.name)}
                                              aria-expanded={isCategoryOpen}
                                              aria-controls={`${categoryId}-sublist`}
                                            >
                                              <span>{category.name}</span>
                                              <ChevronDown
                                                size={14}
                                                className={`transition-transform duration-200 ${isCategoryOpen ? "rotate-180" : ""}`}
                                              />
                                            </button>

                                            {isCategoryOpen && (
                                              <ul className="bg-white" id={`${categoryId}-sublist`}>
                                                {category.subServices.map((subService) => (
                                                  <li key={subService.name} className="border-t border-border/40">
                                                    <a
                                                      href={subService.href}
                                                      className="block py-3 pl-8 pr-5 text-sm text-foreground hover:bg-muted/50"
                                                      onClick={closeMobileMenu}
                                                    >
                                                      {subService.name}
                                                    </a>
                                                  </li>
                                                ))}
                                              </ul>
                                            )}
                                          </>
                                        ) : (
                                          <a
                                            href={category.href}
                                            className="block py-3 pl-6 pr-5 text-sm font-semibold text-foreground hover:bg-muted/50"
                                            onClick={closeMobileMenu}
                                          >
                                            {category.name}
                                          </a>
                                        )}
                                      </li>
                                    );
                                  })}
                                </ul>
                              )}
                            </>
                          ) : (
                            <a
                              href={link.href}
                              className={`block py-3 px-5 font-semibold uppercase text-sm tracking-wide ${isHome ? "text-white" : "text-foreground hover:bg-muted/40"
                                }`}
                              onClick={closeMobileMenu}
                            >
                              {link.name}
                            </a>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </nav>
              </aside>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
