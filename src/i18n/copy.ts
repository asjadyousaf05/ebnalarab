import portacabin1 from "@/assets/portacabin1.webp";
import portacabin2 from "@/assets/portacabin2.webp";
import portacabin3 from "@/assets/portacabin3.webp";
import portacabin4 from "@/assets/portacabin4.webp";
import portacabin5 from "@/assets/portacabin5.webp";
import portacabin6 from "@/assets/portacabin6.webp";      
import portacabin7 from "@/assets/portacabin7.webp";
import portacabin8 from "@/assets/portacabin8.webp";
import portacabin9 from "@/assets/portacabin9.webp";
import portacabin10 from "@/assets/portacabin10.webp";
import portacabin11 from "@/assets/portacabin11.webp";
import portacabin12 from "@/assets/portacabin12.webp";
import portacabin13 from "@/assets/portacabin13.webp";
import portacabin14 from "@/assets/portacabin14.webp";
import portacabin15 from "@/assets/portacabin15.webp";
import aluminium from "@/assets/aluminium.webp";
import welding from "@/assets/welding.webp";
import cuttingBending from "@/assets/cuttingBending.webp";

import { Locale } from "@/context/LocaleContext";

type NavCategory = { name: string; href: string; subServices?: { name: string; href: string }[] };
type NavLink = { name: string; href: string; isDropdown?: boolean; categories?: NavCategory[] };

export type Slide = {
  id: string;
  badge: string;
  headline: { before: string; highlight: string; after: string };
  description: string;
  features: string[];
  image: string;
  alt?: string;
  ctaHref?: string;
  secondaryHref?: string;
};

type Service = {
  slug: string;
  name: string;
  parent?: string;
  intro: string;
  description: string;
  highlights: string[];
  gallery: string[];
  galleryAlts?: string[];
  heroAlt?: string;
  cardAlt?: string;
  whatsappMessage: string;
};

const BRAND_NAME = "EBN AL ARAB";

// Central alt text mapping so each image keeps the same alt wherever used
const imageAltMap: Record<string, string> = {
  [portacabin1]: "Prefabricated portable cabin with steel frame and insulated wall panels",
  [portacabin2]: "Modular site office cabin with windows and secure metal door",
  [portacabin3]: "Portable cabin structure used for construction site office and storage",
  [portacabin4]: "Industrial prefab cabin designed for temporary office and labor accommodation",
  [portacabin5]: "Row of insulated porta cabins ready for deployment at a job site",
  [portacabin6]: "Interior view of a porta cabin showing workspace and seating area",
  [portacabin7]: "Security cabin with large windows and reinforced door at a site entrance",
  [portacabin8]: "Portable restroom cabin with ventilation and service access panel",
  [portacabin9]: "Portable warehouse cabin with large roller door for equipment storage",
  [portacabin10]: "Modern porta cabin exterior with large glazing and split-unit AC installed",
  [portacabin11]: "Double-entrance modular cabin set up as a portable office or classroom",
  [portacabin12]: "Compact guard cabin with wraparound windows for visibility",
  [portacabin13]: "Stackable portable cabins prepared on steel foundations for deployment",
  [portacabin14]: "Blue-accent modular cabin elevated on concrete blocks at a job site",
  [portacabin15]: "Kiosk-style portable cabin with sliding service window and steps",
  [aluminium]: "Aluminum profiles and panels stacked in a workshop",
  [welding]: "Welder working on a steel frame with bright sparks",
  [cuttingBending]: "CNC press brake bending metal sheet in a factory",

  // Additional variants can be re-enabled if more cabin images are added in the future.
};

const getImageAlt = (image: string, fallback: string) => imageAltMap[image] ?? fallback;

const extraCabinImages = [portacabin10, portacabin11, portacabin12, portacabin13, portacabin14, portacabin15];

const hashString = (value: string) =>
  value.split("").reduce((acc, char, idx) => acc + char.charCodeAt(0) * (idx + 1), 0);

const pickExtraCabinImages = (slug: string) => {
  const hash = hashString(slug || "default");
  const firstIdx = hash % extraCabinImages.length;
  const secondIdxRaw = (hash >> 3) % extraCabinImages.length;
  const secondIdx = firstIdx === secondIdxRaw ? (secondIdxRaw + 1) % extraCabinImages.length : secondIdxRaw;

  return [extraCabinImages[firstIdx], extraCabinImages[secondIdx]];
};

const extraCabinGalleryItems = extraCabinImages.map((img, idx) => ({
  name: `Porta Cabin Variant ${idx + 10}`,
  description: "Custom porta cabin deployments and configurations.",
  gallery: [img],
  galleryAlts: [getImageAlt(img, `Porta cabin variant ${idx + 10} by ${BRAND_NAME}`)],
}));

const addSlideAlts = (slides: Slide[]) =>
  slides.map((slide) => ({
    ...slide,
    alt: slide.alt ?? getImageAlt(slide.image, `${slide.headline.highlight} by ${BRAND_NAME} in Saudi Arabia`),
  }));

const addCategoryAlts = <
  T extends { name: string; description: string; image: string; imageAlt?: string; count: string; href: string }
>(
  categories: T[]
) =>
  categories.map((category) => ({
    ...category,
    imageAlt: category.imageAlt ?? getImageAlt(category.image, `${category.name} by ${BRAND_NAME} - ${category.description}`),
  }));

const addGalleryAlts = (services: Service[]) =>
  services.map((service) => {
    const extras = pickExtraCabinImages(service.slug);
    const galleryWithExtras = [...service.gallery, ...extras];
    const hasFullAlts = service.galleryAlts?.length && service.galleryAlts.length >= service.gallery.length;
    const galleryAlts = hasFullAlts
      ? [
          ...service.galleryAlts,
          ...extras.map((img, idx) =>
            getImageAlt(img, `${service.name} by ${BRAND_NAME} - image ${service.gallery.length + idx + 1}`)
          ),
        ]
      : galleryWithExtras.map((img, idx) => getImageAlt(img, `${service.name} by ${BRAND_NAME} - image ${idx + 1}`));

    return {
      ...service,
      gallery: galleryWithExtras,
      heroAlt: service.heroAlt ?? getImageAlt(galleryWithExtras[0], `${service.name} hero by ${BRAND_NAME} in Saudi Arabia`),
      cardAlt: service.cardAlt ?? getImageAlt(galleryWithExtras[0], `${service.name} by ${BRAND_NAME} in Saudi Arabia`),
      galleryAlts,
    };
  });

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const copy: Record<Locale, any> = {
  en: {
    dir: "ltr",
    navbar: {
      brand: "EBN AL ARAB",
      brandHighlight: "",
      phone: "+966 58 146 0761",
      cta: "Get a Quote",
      navLinks: [
        { name: "Home", href: "/" },
        { name: "About Us", href: "/about-us" },
        {
          name: "Services",
          href: "/services",
          isDropdown: true,
          categories: [
            {
              name: "Saudi Porta Cabins & Modular Units",
              href: "/services/porta-cabin",
              subServices: [
                { name: "Portable Houses & Villas KSA", href: "/services/portable-houses" },
                { name: "Site Offices & Command Cabins KSA", href: "/services/portable-site-offices" },
                { name: "Workforce Labor Camp Cabins", href: "/services/portable-labor-camps" },
                { name: "Portable Mosques & Prayer Cabins", href: "/services/portable-mosques" },
                { name: "Secure Portable Storage Cabins", href: "/services/portable-storage" },
                { name: "Hygienic Portable Restroom Cabins", href: "/services/portable-restrooms" },
                { name: "Modular Portable Warehouses", href: "/services/portable-warehouse" },
                { name: "Log-Style Portable Cabins Saudi", href: "/services/portable-log-cabin" },
                { name: "Canteen & Kitchen Cabins KSA", href: "/services/portable-canteen" },
                { name: "Mobile Container Cabins", href: "/services/portable-mobile-containers" },
                { name: "Security Guard Cabins", href: "/services/portable-security-units" },
                { name: "Pantry & Servery Cabins", href: "/services/portable-pantry" },
                { name: "Shower & Bathroom Cabins", href: "/services/portable-bathrooms" },
                { name: "Security Office Cabins", href: "/services/portable-security-offices" },
              ],
            },
            { name: "Aluminum Fabrication Workshops", href: "/services/aluminum" },
            { name: "Industrial Welding & Steel Fabrication", href: "/services/welding" },
            { name: "CNC Metal Cutting & Bending Saudi Arabia", href: "/services/cutting-bending" },
          ],
        },
        { name: "Gallery", href: "/gallery" },
        { name: "Contact", href: "/contact" },
      ],
    },
labels: {
      heroSection: "Hero section",
      previousSlide: "Previous slide",
      nextSlide: "Next slide",
      close: "Close",
      closeImage: "Close image",
      openSocial: "Open social links",
      closeSocial: "Close social links",
      whatsapp: "Chat on WhatsApp",
      linkedin: "Visit LinkedIn",
      twitter: "Visit X (Twitter)",
      instagram: "Visit Instagram",
      facebook: "Visit Facebook",
    },
    hero: {
      slides: addSlideAlts([
        {
          id: "porta-cabins",
          badge: "Trusted porta cabins across KSA",
          headline: { before: "Modular", highlight: "Porta Cabins", after: "Built to Last" },
          description:
            "Insulated porta cabins for offices, staff housing, and sanitary blocks — fast delivery, crane-ready install, and tailored MEP.",
          features: ["Thermal sandwich panels", "Custom layouts & finishes", "Rapid delivery & install"],
          image: portacabin1,
          alt: "EBN AL ARAB porta cabins prepared for deployment in Saudi Arabia",
          ctaHref: "/services/porta-cabin",
        },
        {
          id: "security-cabins",
          badge: "Perimeter-ready units",
          headline: { before: "Robust", highlight: "Security Cabins", after: "for Safer Sites" },
          description:
            "Guard cabins with 360° visibility, reinforced frames, and optional ballistic glass to protect entrances and checkpoints.",
          features: ["Reinforced frames", "Panoramic windows", "Ballistic glass option"],
          image: portacabin9,
          alt: "Security cabin with panoramic windows at a site gate",
          ctaHref: "/services/portable-security-units",
        },
        {
          id: "portable-warehouse",
          badge: "Storage on demand",
          headline: { before: "Portable", highlight: "Warehouses", after: "for Rapid Storage" },
          description:
            "Portable warehouse cabins sized for equipment and inventory with ventilation, lighting, and secure doors.",
          features: ["Ventilated layouts", "Secure access", "Custom sizes for inventory"],
          image: portacabin7,
          alt: "Portable warehouse cabin prepared for materials storage",
          ctaHref: "/services/portable-warehouse",
        },
        {
          id: "welding",
          badge: "Certified fabrication",
          headline: { before: "Precision", highlight: "Industrial Welding & Steel Fabrication", after: "for Steel & Aluminum" },
          description:
            "Structural and industrial welding services for frames, stairs, and accessories that complement your cabin builds.",
          features: ["Certified welders", "Structural fabrication", "Aluminum & steel capability"],
          image: welding,
          alt: "Welder working on a steel frame with bright sparks",
          ctaHref: "/services/welding",
        },
      ]),
      ctaPrimary: "Browse Cabins",
      ctaSecondary: "See Install Timeline",
    },
    stats: [
      { value: "20+", label: "Years Building Cabins" },
      { value: "1,200+", label: "Cabins Delivered" },
      { value: "15+", label: "Industries Served" },
      { value: "48h", label: "Fastest Deployment" },
    ],
    products: {
      eyebrow: "Our Cabins",
      title: "Modular Cabin Solutions",
      description:
        "Discover ready-to-deploy porta cabin solutions for offices, security, accommodation, and sanitary needs.",
      viewAll: "View All Cabins",
      categories: addCategoryAlts([
        {
          id: 1,
          name: "Porta Cabins",
          description: "Insulated portable cabins for offices, housing, security, and sanitary use",
          image: portacabin1,
          imageAlt: "Exterior row of insulated porta cabins ready for deployment",
          count: "14 Sub-services",
          href: "/services/porta-cabin",
        },
        {
          id: 2,
          name: "Aluminum Fabrication Workshops",
          description: "Lightweight, corrosion-resistant aluminum fabrication",
          image: aluminium,
          imageAlt: "Aluminum profiles and panels stacked in a workshop",
          count: "Fabrication",
          href: "/services/aluminum",
        },
        {
          id: 3,
          name: "Industrial Welding & Steel Fabrication",
          description: "Certified welding for structural and industrial assemblies",
          image: welding,
          imageAlt: "Welder working on a steel frame with sparks",
          count: "Certified",
          href: "/services/welding",
        },
        {
          id: 4,
          name: "CNC Metal Cutting & Bending Saudi Arabia",
          description: "CNC cutting and press-brake bending with tight tolerances",
          image: cuttingBending,
          imageAlt: "CNC press brake bending metal sheet in a factory",
          count: "Precision",
          href: "/services/cutting-bending",
        },
      ]),
    },
    features: {
      eyebrow: "Why Choose Us",
      title: "Porta Cabins Done Right",
      description: "Engineered for hot climates, rapid setup, and durable day-to-day use at any job site.",
      items: [
        { icon: "Shield", title: "Insulated & Durable", description: "Sandwich panels and steel frames for thermal comfort and longevity." },
        { icon: "Truck", title: "Rapid Deployment", description: "Quick delivery and install to get your site operational fast." },
        { icon: "Award", title: "Certified Quality", description: "Built to strict QA with documented inspections and load tests." },
      ],
    },
    testimonials: {
      eyebrow: "Testimonials",
      title: "Trusted by Site Teams",
      description: "See why contractors and facility managers rely on our porta cabins for fast, reliable deployments.",
      items: [
        {
          id: 1,
          name: "Omar Rahman",
          role: "Project Manager",
          company: "Al Noor Contracting",
          content:
            "Their site offices arrived pre-wired and fully insulated. We were operational in two days with zero rework required.",
          rating: 5,
        },
        {
          id: 2,
          name: "Fatima Al-Hassan",
          role: "Facilities Lead",
          company: "Gulf Logistics",
          content:
            "Security cabins are sturdy, well-ventilated, and finished neatly. The team handled delivery, crane, and placement smoothly.",
          rating: 5,
        },
        {
          id: 3,
          name: "James Patel",
          role: "Operations Director",
          company: "Metro Developments",
          content:
            "We needed sanitary units fast. They delivered on time with plumbing-ready connections and easy-clean interiors.",
          rating: 5,
        },
      ],
    },
    faq: {
      eyebrow: "FAQ",
      title: "Porta Cabin FAQs",
      description: "Answers to common questions about delivery, customization, and installation.",
      items: [
        {
          question: "How fast can you deliver a porta cabin?",
          answer:
            "Standard units can be delivered within 2–5 days depending on stock and transport scheduling. Custom layouts may require additional lead time.",
        },
        {
          question: "Do you handle installation on site?",
          answer:
            "Yes. We coordinate offloading, craning, placement, and leveling. We can also connect to existing utilities if access is available.",
        },
        {
          question: "Can I customize layout and finishes?",
          answer:
            "Absolutely. We tailor partitions, doors/windows, flooring, AC, electrical, and plumbing points to your requirements.",
        },
        {
          question: "What about permits?",
          answer:
            "Permit needs vary by municipality. We provide unit specs and drawings to support your submission. Please confirm local requirements.",
        },
        {
          question: "Do you offer warranty?",
          answer:
            "Yes, our cabins come with a limited warranty covering structural integrity and manufacturing defects. Terms depend on the unit type.",
        },
        {
          question: "Can cabins be relocated later?",
          answer:
            "Yes. Our cabins are built for mobility. They can be craned and moved to a new site with proper preparation.",
        },
      ],
    },
    cta: {
      title: "Ready to deploy your porta cabin?",
      description: "Get a tailored cabin with insulation, electrical, and finishes ready to place on your site.",
      primary: "Request a Cabin",
      secondary: "Talk to Sales",
      badges: ["Rapid Delivery", "Custom Layouts", "After-Sales Support"],
    },
    contact: {
      eyebrow: "Contact Us",
      title: "Let’s plan your cabin",
      description: "Share your site needs and we’ll propose the right cabin layout, utilities, and delivery timeline.",
      info: [
        { label: "Address", value: "Jeddah, Saudi Arabia (21.255304, 39.188646)" },
        { label: "Phone (RANA NAVEED 1)", value: "0581460761" },
        { label: "Phone (RANA NAVEED 2)", value: "0539382766" },
        { label: "Email", value: "ibnalarab264@gmail.com" },
        { label: "WhatsApp", value: "+966581460761" },
        { label: "LinkedIn", value: "www.linkedin.com/in/ebn-al-arab-3a72b23a1" },
      ],
      form: {
        name: "Your Name",
        email: "Email Address",
        company: "Company Name",
        message: "Your Message",
        submit: "Send Message",
        submitting: "Sending...",
        successTitle: "Message Sent!",
        successDescription: "We'll get back to you within 24 hours.",
        placeholders: {
          name: "John Doe",
          email: "john@company.com",
        company: "Your Company",
        message: "Tell us about your project requirements...",
      },
    },
  },
    about: {
      metaTitle: "About EBN AL ARAB | Porta Cabins & Industrial Services",
      metaDescription:
        "Insulated porta cabins and industrial services across the region—site offices, security cabins, labor camps, sanitary units, and fabrication services for harsh climates and fast deployment.",
      title: "About EBN AL ARAB",
      intro:
        "We deliver insulated porta cabins and supporting industrial services across the region—site offices, security cabins, labor camps, sanitary units, and fabrication services (aluminum, welding, cutting & bending) tailored to harsh climates and fast deployment.",
      intro2:
        "Our team coordinates design, MEP readiness, delivery, craning, and placement with documented QA. From rapid rentals to custom builds, we focus on durability, comfort, and compliance to keep your projects moving.",
      valuesTitle: "What We Stand For",
      valuesDescription:
        "Built for GCC climates with rapid deployment, certified quality, and end-to-end support from design to after-sales.",
      values: [
        {
          title: "Certified quality",
          body: "Inspected frames, insulated panels, and documented QA for every cabin and fabrication project.",
        },
        {
          title: "Fast delivery",
          body: "Coordinated logistics, craning, and placement to make your site operational in days, not weeks.",
        },
        {
          title: "Custom layouts",
          body: "Configurable footprints, partitions, finishes, and MEP points to fit your exact use-case.",
        },
        {
          title: "Comfort & safety",
          body: "Ventilation, non-slip floors, secure doors/windows, and climate-ready insulation as standard.",
        },
        {
          title: "After-sales support",
          body: "Responsive maintenance and service options to keep your cabins in peak condition.",
        },
        {
          title: "Regional expertise",
          body: "Experience with local regulations, permitting support, and site conditions across the GCC.",
        },
      ],
    },
    terms: {
      eyebrow: "Terms",
      title: "Terms of Service",
      intro: "These terms govern your use of our website and requests for porta cabin and related services.",
      sections: [
        "By accessing this site or submitting inquiries, you agree to provide accurate information and to use the site only for legitimate business purposes. Quotes are non-binding until confirmed in writing with agreed specifications, pricing, and timelines.",
        "All content on this site, including text, images, and trademarks, is owned by us or our licensors. You may not copy or reuse content without permission. Links to third-party sites are provided for convenience; we are not responsible for their content or practices.",
        "We strive for uptime and accuracy but do not warrant the site will be error-free or uninterrupted. To the fullest extent permitted by law, we disclaim liability for indirect or consequential damages arising from site use.",
        "For contracting terms related to delivery, installation, warranty, and payments, refer to the specific agreement provided with your order. Contact us for any questions about these terms.",
      ],
      metaTitle: "Terms of Service | EBN AL ARAB",
      metaDescription: "Review the terms of service for using the EBN AL ARAB website and requesting porta cabin solutions.",
    },
    privacy: {
      eyebrow: "Privacy",
      title: "Privacy Policy",
      intro: "How we collect, use, and protect your data when you visit our site or request our porta cabin services.",
      sections: [
        "We collect only the data needed to respond to inquiries, prepare quotes, and improve site performance. This may include contact details you submit and technical data such as browser type and approximate location for analytics.",
        "We do not sell or rent your personal information. Data may be shared with trusted service providers (e.g., hosting, analytics) under confidentiality agreements. You can request access, correction, or deletion of your data at any time.",
        "Cookies are used to improve navigation and measure site usage. You can control cookies via your browser settings; some features may be limited if cookies are disabled.",
        "For questions about privacy or to exercise your rights, contact us at {email}.",
      ],
      metaTitle: "Privacy Policy | EBN AL ARAB",
      metaDescription:
        "Learn how EBN AL ARAB collects, uses, and protects your information when you browse or request porta cabin services.",
    },
    cookies: {
      eyebrow: "Cookies",
      title: "Cookie Policy",
      intro: "How we use cookies to improve your experience and measure performance on our porta cabin site.",
      sections: [
        "We use essential cookies to enable core site functionality and session management. Analytics cookies help us understand page performance and improve content. We do not use cookies to sell personal data.",
        "You can control cookies through your browser settings. Disabling some cookies may affect features such as language preference or form submissions. By continuing to browse the site, you consent to our use of cookies as described here.",
        "For questions about cookies or data usage, contact us at {email}.",
      ],
      metaTitle: "Cookie Policy | EBN AL ARAB",
      metaDescription: "Understand how cookies are used on the EBN AL ARAB site to improve performance and experience.",
    },
    footer: {
      brand: "EBN AL ARAB",
      description:
        "Modular porta cabins for site offices, security, labor camps, and sanitary units - delivered fast and built to last.",
      products: "Cabins",
      company: "Company",
      support: "Support",
      legal: "Legal",
      links: {
        products: [
          { name: "Porta Cabins", href: "/services/porta-cabin" },
          { name: "Site Offices & Command Cabins KSA", href: "/services/portable-site-offices" },
          { name: "Security Guard Cabins", href: "/services/portable-security-units" },
          { name: "Workforce Labor Camp Cabins", href: "/services/portable-labor-camps" },
          { name: "Hygienic Portable Restroom Cabins", href: "/services/portable-restrooms" },
        ],
        company: [
          { name: "About Us", href: "/about-us" },
        ],
        support: [
          { name: "Contact Us", href: "/contact" },
          { name: "FAQ", href: "/faq" },
        ],
        legal: [
          { name: "Privacy Policy", href: "/privacy" },
          { name: "Terms of Service", href: "/terms" },
          { name: "Cookie Policy", href: "/cookies" },
        ],
      },
      backToTop: "Back to top",
      copyright: "All rights reserved.",
    },
    notFound: {
      title: "Page not found",
      description: "We couldn't find the page you're looking for.",
      cta: "Return to Home",
    },
    servicesIntro: {
      title: "Our Services",
      description: "Explore our porta cabin parent categories and specialized services for rapid, high-quality deployments.",
      whatsappLabel: "Chat on WhatsApp",
      back: "Back to services",
      view: "View service",
    },
    galleryExtras: extraCabinGalleryItems,
    services: addGalleryAlts([
      {
        slug: "porta-cabin",
        name: "Saudi Porta Cabins & Modular Units",
        intro: "Parent category for all portable cabins engineered for rapid deployment.",
        description:
          "From housing to offices and sanitary units, our porta cabins are insulated, durable, and optimized for fast setup across job sites and events.",
        highlights: [
          "Thermally insulated sandwich panels",
          "Steel frames engineered for mobility",
          "Custom layouts for any use-case",
          "Fast delivery and crane-ready install",
        ],
        gallery: [portacabin1, portacabin2, portacabin3 , portacabin8 , portacabin9 , portacabin7],
        heroAlt: "Primary porta cabin hero showcasing multiple units",
        galleryAlts: [
          "Porta cabin exterior with branded finish",
          "Interior fit-out of a site office porta cabin",
          "Security cabin with panoramic windows",
        ],
        whatsappMessage: "Hi, I’m interested in porta cabin solutions.",
      },
      {
        slug: "portable-houses",
        parent: "porta-cabin",
        name: "Portable Houses & Villas KSA",
        intro: "Comfortable modular homes ready to place and connect.",
        description:
          "Portable houses with insulated walls, AC-ready design, and flexible room layouts for temporary or semi-permanent living.",
        highlights: [
          "Insulated walls and roofing",
          "AC and electrical ready",
          "Configurable bedrooms and living areas",
          "Durable flooring and finishes",
        ],
        gallery: [portacabin1, portacabin2, portacabin3  , portacabin9],
        whatsappMessage: "Hi, I’m interested in portable houses.",
      },
      {
        slug: "portable-site-offices",
        parent: "porta-cabin",
        name: "Site Offices & Command Cabins KSA",
        intro: "Pre-wired, AC-ready offices to get teams productive fast.",
        description:
          "Site offices arrive with insulation, wiring, and ergonomic layouts to serve as command centers from day one.",
        highlights: [
          "Pre-wired for power and data",
          "Thermal insulation and AC-ready",
          "Ergonomic desks and storage options",
          "Secure doors and windows",
        ],
        gallery: [portacabin2, portacabin3, portacabin1],
        whatsappMessage: "Hi, I’m interested in portable site offices.",
      },
      {
        slug: "portable-labor-camps",
        parent: "porta-cabin",
        name: "Workforce Labor Camp Cabins",
        intro: "Worker housing optimized for comfort and durability.",
        description:
          "Ventilated, insulated cabins with safe flooring and configurable bunk or room layouts for workforce accommodation.",
        highlights: [
          "Ventilated sleeping areas",
          "Non-slip, easy-clean floors",
          "Flexible bunk/room partitions",
          "Electrical and lighting included",
        ],
        gallery: [portacabin2, portacabin1, portacabin3 , portacabin9],
        whatsappMessage: "Hi, I’m interested in portable labor camp cabins.",
      },
      {
        slug: "portable-mosques",
        parent: "porta-cabin",
        name: "Portable Mosques & Prayer Cabins",
        intro: "Prayer cabins with thoughtful layouts and finishes.",
        description:
          "Portable mosque units with ablution-friendly flooring, ventilation, and dedicated prayer space ready to deploy.",
        highlights: [
          "Ablution-friendly finishes",
          "Ventilation and cooling ready",
          "Clean, open prayer area",
          "Rapid deployment footprint",
        ],
        gallery: [portacabin3, portacabin4, portacabin1],
        whatsappMessage: "Hi, I’m interested in portable mosque units.",
      },
      {
        slug: "portable-storage",
        parent: "porta-cabin",
        name: "Secure Portable Storage Cabins",
        intro: "Secure storage cabins for tools and materials.",
        description:
          "Steel-reinforced storage cabins with secure doors, ventilation, and moisture-aware design for sensitive materials.",
        highlights: [
          "Reinforced steel doors",
          "Ventilated to reduce moisture",
          "Shelving-ready interiors",
          "Forklift and crane-friendly",
        ],
        gallery: [portacabin2, portacabin2, portacabin3],
        whatsappMessage: "Hi, I’m interested in portable storage cabins.",
      },
      {
        slug: "portable-restrooms",
        parent: "porta-cabin",
        name: "Hygienic Portable Restroom Cabins",
        intro: "Hygienic restroom cabins ready to plumb and use.",
        description:
          "Portable restroom units with non-slip floors, ventilation, and easy-clean surfaces for worker welfare.",
        highlights: [
          "Plumb-ready toilet and sink",
          "Ventilated odor control",
          "Non-slip hygienic flooring",
          "Service access panels",
        ],
        gallery: [portacabin4, portacabin2, portacabin3 , portacabin1],
        whatsappMessage: "Hi, I’m interested in portable restrooms.",
      },
      {
        slug: "portable-warehouse",
        parent: "porta-cabin",
        name: "Modular Portable Warehouses",
        intro: "Modular warehouse space for on-site inventory.",
        description:
          "Large-span portable warehouse cabins with secure access, ventilation, and rugged flooring for equipment and stock.",
        highlights: [
          "Wide-span usable area",
          "Secure roller/steel doors",
          "Ventilation for heat control",
          "Heavy-duty flooring",
        ],
        gallery: [portacabin7, portacabin4, portacabin3 , portacabin1],
        whatsappMessage: "Hi, I’m interested in portable warehouse cabins.",
      },
      {
        slug: "portable-log-cabin",
        parent: "porta-cabin",
        name: "Log-Style Portable Cabins Saudi",
        intro: "Aesthetic log-style cabins for hospitality or leisure.",
        description:
          "Log-look cabins with insulated walls, cozy interiors, and utility readiness for hospitality or site comfort.",
        highlights: [
          "Log-style insulated panels",
          "AC and electrical ready",
          "Cozy interior finishes",
          "Fast installation footprint",
        ],
        gallery: [portacabin3, portacabin1, portacabin4],
        whatsappMessage: "Hi, I’m interested in portable log cabins.",
      },
      {
        slug: "portable-canteen",
        parent: "porta-cabin",
        name: "Canteen & Kitchen Cabins KSA",
        intro: "Canteen cabins with hygiene-first layouts.",
        description:
          "Food-service ready cabins with washable surfaces, ventilation, serving counters, and utility connection points.",
        highlights: [
          "Washable hygienic surfaces",
          "Ventilated cooking area",
          "Serving counter options",
          "Utility connection points",
        ],
        gallery: [portacabin2, portacabin3, portacabin4 , portacabin3 , portacabin1],
        whatsappMessage: "Hi, I’m interested in portable canteen cabins.",
      },
      {
        slug: "portable-mobile-containers",
        parent: "porta-cabin",
        name: "Mobile Container Cabins",
        intro: "Container-based cabins for flexible uses.",
        description:
          "Modified container cabins with insulation, windows, and doors tailored to office, housing, or storage use.",
        highlights: [
          "Container steel strength",
          "Insulated and ventilated",
          "Custom doors/windows",
          "Multi-use interior fit-out",
        ],
        gallery: [portacabin2, portacabin3, portacabin1],
        whatsappMessage: "Hi, I’m interested in portable mobile container cabins.",
      },
      {
        slug: "portable-security-units",
        parent: "porta-cabin",
        name: "Security Guard Cabins",
        intro: "Rapid-deploy security units for gatehouses.",
        description:
          "Compact security cabins with reinforced doors, panoramic glazing, and space for monitoring equipment.",
        highlights: [
          "Reinforced access doors",
          "Panoramic glazing",
          "Counter and equipment space",
          "Ventilation and cooling ready",
        ],
        gallery: [portacabin3, portacabin4, portacabin1],
        whatsappMessage: "Hi, I’m interested in portable security units.",
      },
      {
        slug: "portable-pantry",
        parent: "porta-cabin",
        name: "Pantry & Servery Cabins",
        intro: "Pantry cabins to support onsite teams.",
        description:
          "Portable pantry units with washable finishes, counter space, and utility points for appliances.",
        highlights: [
          "Easy-clean finishes",
          "Countertop and storage",
          "Electrical ready for appliances",
          "Compact, efficient layout",
        ],
        gallery: [portacabin2, portacabin3, portacabin1],
        whatsappMessage: "Hi, I’m interested in portable pantry cabins.",
      },
      {
        slug: "portable-bathrooms",
        parent: "porta-cabin",
        name: "Shower & Bathroom Cabins",
        intro: "Self-contained bathroom cabins for sites and events.",
        description:
          "Complete bathroom cabins with showers, toilets, and ventilation, ready to connect to water and waste.",
        highlights: [
          "Showers and toilets installed",
          "Ventilated for humidity control",
          "Non-slip waterproof floors",
          "Service access for maintenance",
        ],
        gallery: [portacabin4, portacabin1, portacabin3],
        whatsappMessage: "Hi, I’m interested in portable bathroom cabins.",
      },
      {
        slug: "portable-security-offices",
        parent: "porta-cabin",
        name: "Security Office Cabins",
        intro: "Larger security offices with workspace for teams.",
        description:
          "Security offices combining surveillance space, desks, and storage with reinforced entry and panoramic views.",
        highlights: [
          "Workspace for security teams",
          "Reinforced entry doors",
          "Wide-view windows",
          "Pre-wired for equipment",
        ],
        gallery: [portacabin3, portacabin2, portacabin1],
        whatsappMessage: "Hi, I’m interested in portable security office cabins.",
      },
      {
        slug: "aluminum",
        name: "Aluminum Fabrication Workshops",
        intro: "High-precision aluminum fabrication and fit-out.",
        description:
          "Lightweight, corrosion-resistant aluminum works including facades, frames, and custom profiles tailored to your projects.",
        highlights: [
          "Corrosion-resistant alloys",
          "CNC cutting and finishing",
          "Architectural-grade coatings",
          "Custom extrusion and fabrication",
        ],
        gallery: [aluminium, portacabin2, portacabin3],
        whatsappMessage: "Hi, I’m interested in aluminum fabrication services.",
      },
      {
        slug: "welding",
        name: "Industrial Welding & Steel Fabrication",
        intro: "Certified welding for structural and industrial needs.",
        description:
          "MIG, TIG, and stick welding by certified welders with QA documentation for steel, aluminum, and specialty alloys.",
        highlights: [
          "MIG, TIG, and stick processes",
          "Certified welders with QA",
          "Structural-grade joints",
          "Inspection and reporting",
        ],
        gallery: [welding  ,portacabin4, portacabin1, portacabin2],
        whatsappMessage: "Hi, I’m interested in welding services.",
      },
      {
        slug: "cutting-bending",
        name: "CNC Metal Cutting & Bending Saudi Arabia",
        intro: "Precision cutting and press-brake bending services.",
        description:
          "CNC laser/plasma cutting and tight-tolerance press-brake bending for sheet and plate components ready for assembly.",
        highlights: [
          "CNC laser/plasma cutting",
          "Tight-tolerance bending",
          "Clean edges for finishing",
          "Prototype to production volumes",
        ],
        gallery: [ cuttingBending , portacabin2, portacabin3, portacabin4],
        whatsappMessage: "Hi, I’m interested in cutting and bending services.",
      },
    ]),
  },
  ar: {
    dir: "rtl",
    navbar: {
      brand: "ابن العرب",
      brandHighlight: "",
      phone: "+966 58 146 0761",
      cta: "اطلب عرض سعر",
      navLinks: [
        { name: "الرئيسية", href: "/" },
        { name: "من نحن", href: "/about-us" },
        {
          name: "خدماتنا",
          href: "/services",
          isDropdown: true,
          categories: [
            {
              name: "كبائن محمولة",
              href: "/services/porta-cabin",
              subServices: [
                { name: "منازل متنقلة", href: "/services/portable-houses" },
                { name: "مكاتب مواقع متنقلة", href: "/services/portable-site-offices" },
                { name: "معسكرات عمال متنقلة", href: "/services/portable-labor-camps" },
                { name: "مساجد متنقلة", href: "/services/portable-mosques" },
                { name: "تخزين متنقل", href: "/services/portable-storage" },
                { name: "دورات مياه متنقلة", href: "/services/portable-restrooms" },
                { name: "مستودع متنقل", href: "/services/portable-warehouse" },
                { name: "كابين خشبي متنقل", href: "/services/portable-log-cabin" },
                { name: "مقصف متنقل", href: "/services/portable-canteen" },
                { name: "حاويات متنقلة", href: "/services/portable-mobile-containers" },
                { name: "وحدات أمنية متنقلة", href: "/services/portable-security-units" },
                { name: "مطبخ متنقل", href: "/services/portable-pantry" },
                { name: "حمامات متنقلة", href: "/services/portable-bathrooms" },
                { name: "مكاتب أمن متنقلة", href: "/services/portable-security-offices" },
              ],
            },
            { name: "ألمنيوم", href: "/services/aluminum" },
            { name: "لحام", href: "/services/welding" },
            { name: "قص وثني", href: "/services/cutting-bending" },
          ],
        },
        { name: "معرض الصور", href: "/gallery" },
        { name: "تواصل", href: "/contact" },
      ],
    },
    labels: {
      heroSection: "القسم الرئيسي",
      previousSlide: "الشريحة السابقة",
      nextSlide: "الشريحة التالية",
      close: "إغلاق",
      closeImage: "إغلاق الصورة",
      openSocial: "فتح روابط التواصل",
      closeSocial: "إغلاق روابط التواصل",
      whatsapp: "الدردشة عبر واتساب",
      linkedin: "زيارة لينكد إن",
      twitter: "زيارة إكس (تويتر)",
      instagram: "زيارة إنستغرام",
      facebook: "زيارة فيسبوك",
    },
    hero: {
      slides: addSlideAlts([
        {
          id: "porta-cabins",
          badge: "كبائن متنقلة موثوقة في السعودية",
          headline: { before: "كبائن", highlight: "متنقلة", after: "جاهزة ومُعزولة" },
          description:
            "كبائن متنقلة للمكاتب والسكن والخدمات الصحية مع عزل حراري وتسليم سريع وتركيب بالرافعة حسب احتياج موقعك.",
          features: ["ألواح عزل حراري", "تصاميم مخصصة وخدمات MEP", "تسليم وتركيب سريع"],
          image: portacabin1,
          alt: "كبائن متنقلة من EBN AL ARAB جاهزة للتركيب في السعودية",
          ctaHref: "/services/porta-cabin",
        },
        {
          id: "security-cabins",
          badge: "حماية المداخل",
          headline: { before: "كبائن", highlight: "أمنية", after: "برؤية كاملة" },
          description:
            "كبائن حراسة برؤية 360° وهياكل معززة وخيار زجاج باليستي لتأمين البوابات ونقاط التفتيش.",
          features: ["هياكل وأبواب معززة", "نوافذ بانورامية", "خيار زجاج باليستي"],
          image: portacabin3,
          alt: "كابينة أمنية بنوافذ بانورامية عند بوابة موقع",
          ctaHref: "/services/portable-security-units",
        },
        {
          id: "portable-warehouse",
          badge: "تخزين متنقل",
          headline: { before: "مستودعات", highlight: "متنقلة", after: "جاهزة للتخزين" },
          description:
            "مستودعات متنقلة للمعدات والمخزون مع تهوية وإنارة وأبواب آمنة وبمقاسات مخصصة.",
          features: ["تهوية وإنارة", "أبواب آمنة", "مقاسات مخصصة للمخزون"],
          image: portacabin4,
          alt: "مستودع متنقل جاهز لتخزين المواد",
          ctaHref: "/services/portable-warehouse",
        },
        {
          id: "welding",
          badge: "تصنيع ولحام معتمد",
          headline: { before: "لحام", highlight: "دقيق", after: "للفولاذ والألمنيوم" },
          description:
            "خدمات لحام وتصنيع هياكل وسلالم وإكسسوارات تدعم كبائنك بجودة معتمدة.",
          features: ["فنيون معتمدون", "تصنيع إنشائي", "قدرات فولاذ وألمنيوم"],
          image: welding,
          alt: "فني لحام يعمل على إطار فولاذي",
          ctaHref: "/services/welding",
        },
      ]),
      ctaPrimary: "تصفح الكبائن",
      ctaSecondary: "شاهد زمن التركيب",
    },
    stats: [
      { value: "20+", label: "سنة في بناء الكبائن" },
      { value: "1,200+", label: "كابينة تم تسليمها" },
      { value: "15+", label: "قطاعات نخدمها" },
      { value: "48 ساعة", label: "أسرع تركيب" },
    ],
    products: {
      eyebrow: "كبائننا",
      title: "حلول كبائن معيارية",
      description: "اكتشف حلول كبائن جاهزة للمكاتب والأمن والإقامة والوحدات الصحية.",
      viewAll: "عرض كل الكبائن",
      categories: addCategoryAlts([
        {
          id: 1,
          name: "كبائن محمولة",
          description: "كبائن معزولة للمكاتب والسكن والأمن والوحدات الصحية",
          image: portacabin1,
          imageAlt: "صف كبائن محمولة معزولة جاهزة للنقل",
          count: "14 خدمة فرعية",
          href: "/services/porta-cabin",
        },
        {
          id: 2,
          name: "ألمنيوم",
          description: "تصنيع ألمنيوم خفيف ومقاوم للتآكل",
          image: aluminium,
          imageAlt: "ألواح وأعمدة ألمنيوم في ورشة",
          count: "تصنيع",
          href: "/services/aluminum",
        },
        {
          id: 3,
          name: "لحام",
          description: "لحام معتمد للأعمال الإنشائية والصناعية",
          image: welding,
          imageAlt: "فني لحام يعمل على إطار فولاذي",
          count: "معتمد",
          href: "/services/welding",
        },
        {
          id: 4,
          name: "قص وثني",
          description: "قص CNC وثني بدقة عالية",
          image: cuttingBending,
          imageAlt: "ماكينة ثني هيدروليكية تعمل على صاج معدني",
          count: "دقة",
          href: "/services/cutting-bending",
        },
      ]),
    },
    features: {
      eyebrow: "لماذا نحن",
      title: "كبائن متنقلة بالجودة الصحيحة",
      description: "مصممة لحرارة المناخ، تركيب سريع، وتحمل الاستخدام اليومي في أي موقع.",
      items: [
        { icon: "Shield", title: "عزل ومتانة", description: "ألواح ساندوتش وهياكل فولاذية لراحة حرارية وعمر أطول." },
        { icon: "Truck", title: "تسليم سريع", description: "تسليم وتركيب سريع لتشغيل موقعك بلا تأخير." },
        { icon: "Award", title: "جودة معتمدة", description: "تصنيع وفق ضبط جودة صارم مع تقارير فحص وتحمل." },
      ],
    },
    testimonials: {
      eyebrow: "آراء العملاء",
      title: "موثوق من فرق المواقع",
      description: "اعرف لماذا يعتمد المقاولون ومديرو المرافق على كبائننا للتركيب السريع والموثوق.",
      items: [
        {
          id: 1,
          name: "عمر رحمن",
          role: "مدير مشروع",
          company: "الأنوار للمقاولات",
          content:
            "وصلت مكاتب الموقع معزولة ومجهزة بالكهرباء بالكامل. بدأنا العمل خلال يومين دون أي إعادة عمل.",
          rating: 5,
        },
        {
          id: 2,
          name: "فاطمة الحسن",
          role: "مسؤولة مرافق",
          company: "خليج لوجستيك",
          content:
            "كبائن الأمن متينة ومهوّاة وتشطيباتها نظيفة. الفريق أدار الرفع والإنزال بسلاسة.",
          rating: 5,
        },
        {
          id: 3,
          name: "جيمس باتيل",
          role: "مدير عمليات",
          company: "مترو للتطوير",
          content:
            "احتجنا وحدات صحية بسرعة. تم التسليم في الوقت مع جاهزية التوصيلات وتشطيبات سهلة التنظيف.",
          rating: 5,
        },
      ],
    },
    faq: {
      eyebrow: "الأسئلة الشائعة",
      title: "أسئلة حول الكبائن",
      description: "إجابات عن التسليم والتخصيص والتركيب.",
      items: [
        {
          question: "ما أسرع وقت للتسليم؟",
          answer:
            "يمكن تسليم الوحدات القياسية خلال 2–5 أيام حسب المخزون وجدولة النقل. التصاميم المخصصة قد تحتاج وقتًا إضافيًا.",
        },
        {
          question: "هل تتولون التركيب في الموقع؟",
          answer:
            "نعم، ندير عملية التنزيل والرفع والتثبيت والتسوية. ويمكننا التوصيل بالخدمات المتاحة إذا كان الوصول متاحًا.",
        },
        {
          question: "هل يمكن تخصيص المخطط والتشطيبات؟",
          answer:
            "بالتأكيد. نخصص التقسيمات والأبواب والنوافذ والأرضيات والتكييف والكهرباء والسباكة حسب متطلباتك.",
        },
        {
          question: "وماذا عن التصاريح؟",
          answer:
            "الاحتياجات تختلف حسب البلدية. نوفر المواصفات والرسومات لدعم طلبك. يرجى التأكد من المتطلبات المحلية.",
        },
        {
          question: "هل توفرون ضمان؟",
          answer:
            "نعم، تأتي الكبائن بضمان محدود يشمل السلامة الهيكلية وعيوب التصنيع. الشروط تختلف حسب نوع الوحدة.",
        },
        {
          question: "هل يمكن نقل الكبائن لاحقًا؟",
          answer:
            "نعم، الكبائن مصممة للحركة ويمكن نقلها لموقع آخر مع التحضير المناسب.",
        },
      ],
    },
    cta: {
      title: "جاهز لتركيب كابينتك؟",
      description: "احصل على كابينة مهيأة بالعزل والخدمات والتشطيبات جاهزة للوضع في موقعك.",
      primary: "اطلب كابينة",
      secondary: "تحدث مع المبيعات",
      badges: ["تسليم سريع", "تصاميم مخصصة", "دعم ما بعد البيع"],
    },
    contact: {
      eyebrow: "تواصل معنا",
      title: "دعنا نخطط لكابينتك",
      description: "شارك احتياجات موقعك لنقترح المخطط والخدمات وزمن التسليم المناسب.",
      info: [
        { label: "العنوان", value: "جدة، المملكة العربية السعودية (21.255304، 39.188646)" },
        { label: "الهاتف (رنا نويد 1)", value: "0581460761" },
        { label: "الهاتف (رنا نويد 2)", value: "0539382766" },
        { label: "البريد الإلكتروني", value: "ibnalarab264@gmail.com" },
        { label: "واتساب", value: "+966581460761" },
        { label: "لينكد إن", value: "www.linkedin.com/in/ebn-al-arab-3a72b23a1" },
      ],
      form: {
        name: "اسمك",
        email: "البريد الإلكتروني",
        company: "اسم الشركة",
        message: "رسالتك",
        submit: "إرسال الرسالة",
        submitting: "جارٍ الإرسال...",
        successTitle: "تم إرسال الرسالة!",
        successDescription: "سنتواصل معك خلال 24 ساعة.",
        placeholders: {
          name: "أحمد محمد",
          email: "ahmed@company.com",
        company: "اسم شركتك",
        message: "أخبرنا عن متطلبات مشروعك...",
      },
    },
  },
    about: {
      metaTitle: "عن ابن العرب | كبائن متنقلة وخدمات صناعية",
      metaDescription:
        "كبائن متنقلة معزولة وخدمات صناعية تشمل مكاتب مواقع، وحدات أمنية، معسكرات عمال، وحدات صحية، وتصنيع (ألمنيوم، لحام، قص وثني) مصممة للبيئات القاسية والتنفيذ السريع في السعودية والخليج.",
      title: "عن ابن العرب",
      intro:
        "نقدم كبائن متنقلة معزولة وخدمات صناعية مساندة عبر المنطقة—مكاتب مواقع، كبائن أمنية، معسكرات عمال، وحدات صحية، وأعمال تصنيع (ألمنيوم، لحام، قص وثني) مصممة للظروف القاسية والتركيب السريع.",
      intro2:
        "فريقنا يدير التصميم، جاهزية الكهرباء والميكانيكا، التسليم، الرفع، والتثبيت مع توثيق ضبط الجودة. من التأجير السريع إلى التصاميم المخصصة، نركز على المتانة والراحة والالتزام لتسريع مشاريعك.",
      valuesTitle: "قيمنا",
      valuesDescription: "مصممة لمناخ الخليج مع تسليم سريع، جودة معتمدة، ودعم من التصميم إلى ما بعد البيع.",
      values: [
        { title: "جودة معتمدة", body: "هياكل مفحوصة، ألواح معزولة، وتقارير ضبط جودة لكل كابينة أو مشروع تصنيع." },
        { title: "تسليم سريع", body: "تنسيق النقل والرفع والتثبيت لجعل موقعك يعمل خلال أيام وليس أسابيع." },
        { title: "تصاميم مخصصة", body: "مساحات قابلة للتعديل، تقسيمات، تشطيبات، ونقاط خدمات لتناسب استخدامك الدقيق." },
        { title: "راحة وسلامة", body: "تهوية، أرضيات مانعة للانزلاق، أبواب ونوافذ آمنة، وعزل مناسب للمناخ كمعيار." },
        { title: "دعم ما بعد البيع", body: "خيارات صيانة وخدمة سريعة لإبقاء كبائنك في أفضل حالة." },
        { title: "خبرة إقليمية", body: "خبرة في الأنظمة المحلية، ودعم التراخيص، وظروف المواقع في الخليج." },
      ],
    },
    terms: {
      eyebrow: "الشروط",
      title: "شروط الخدمة",
      intro: "تحكم هذه الشروط استخدامك لموقعنا وطلبات خدمات الكبائن.",
      sections: [
        "من خلال دخولك للموقع أو إرسال الاستفسارات، فإنك توافق على تقديم معلومات صحيحة واستخدام الموقع لأغراض تجارية مشروعة فقط. العروض السعرية غير ملزمة إلا بعد تأكيدها كتابيًا بالمواصفات والأسعار والجداول الزمنية المتفق عليها.",
        "جميع محتوى الموقع من نصوص وصور وعلامات تجارية مملوك لنا أو للمرخصين. لا يجوز النسخ أو إعادة الاستخدام بدون إذن. الروابط لمواقع خارجية للتسهيل ولسنا مسؤولين عن محتواها أو ممارساتها.",
        "نسعى لتوفير الموقع بدقة واستمرارية، لكن لا نضمن خلوه من الأخطاء أو التوقف. في حدود القانون، نخلي مسؤوليتنا عن أي أضرار غير مباشرة أو تبعية ناتجة عن استخدام الموقع.",
        "لشروط التعاقد الخاصة بالتسليم والتركيب والضمان والمدفوعات، يرجى الرجوع إلى الاتفاقية المرفقة بطلبك. تواصل معنا لأي أسئلة حول هذه الشروط.",
      ],
      metaTitle: "شروط الخدمة | ابن العرب",
      metaDescription: "اطلع على شروط استخدام موقع ابن العرب وطلب حلول الكبائن المتنقلة.",
    },
    privacy: {
      eyebrow: "الخصوصية",
      title: "سياسة الخصوصية",
      intro: "نوضح كيفية جمع واستخدام وحماية بياناتك عند زيارة الموقع أو طلب خدمات الكبائن.",
      sections: [
        "نجمع فقط البيانات اللازمة للرد على الاستفسارات وإعداد العروض وتحسين أداء الموقع. قد يشمل ذلك بيانات الاتصال التي تقدمها وبيانات تقنية مثل نوع المتصفح والموقع التقريبي لأغراض التحليلات.",
        "لا نبيع أو نؤجر معلوماتك الشخصية. قد نشارك البيانات مع مزودي خدمات موثوقين (مثل الاستضافة والتحليلات) بموجب اتفاقيات سرية. يمكنك طلب الوصول أو التصحيح أو الحذف في أي وقت.",
        "نستخدم ملفات تعريف الارتباط لتحسين التنقل وقياس استخدام الموقع. يمكنك التحكم بها عبر إعدادات المتصفح؛ قد تتأثر بعض الميزات إذا تم تعطيلها.",
        "للاستفسار عن الخصوصية أو لممارسة حقوقك، تواصل معنا عبر البريد الإلكتروني {email}.",
      ],
      metaTitle: "سياسة الخصوصية | ابن العرب",
      metaDescription: "تعرف كيف يجمع ابن العرب بياناتك ويستخدمها ويحميها أثناء التصفح أو طلب خدمات الكبائن.",
    },
    cookies: {
      eyebrow: "الكوكيز",
      title: "سياسة الكوكيز",
      intro: "كيف نستخدم ملفات تعريف الارتباط لتحسين تجربتك وقياس الأداء على موقع الكبائن.",
      sections: [
        "نستخدم ملفات ارتباط أساسية لعمل الموقع وإدارة الجلسات. تساعدنا ملفات التحليلات على فهم أداء الصفحات وتحسين المحتوى. لا نستخدم الكوكيز لبيع البيانات الشخصية.",
        "يمكنك التحكم في الكوكيز من خلال إعدادات المتصفح. قد يؤثر التعطيل على ميزات مثل تفضيل اللغة أو إرسال النماذج. بالاستمرار في التصفح، فإنك توافق على استخدامها كما هو موضح هنا.",
        "للاستفسار عن الكوكيز أو استخدام البيانات، تواصل معنا عبر البريد الإلكتروني {email}.",
      ],
      metaTitle: "سياسة الكوكيز | ابن العرب",
      metaDescription: "تعرف على كيفية استخدام ملفات الارتباط في موقع ابن العرب لتحسين الأداء والتجربة.",
    },
    footer: {
      brand: "ابن العرب",
      description: "كبائن متنقلة للمكاتب الأمنية والمعسكرات والوحدات الصحية — تسليم سريع وبناء متين.",
      products: "الكبائن",
      company: "الشركة",
      support: "الدعم",
      legal: "قانوني",
      links: {
        products: [
          { name: "كبائن محمولة", href: "/services/porta-cabin" },
          { name: "مكاتب مواقع متنقلة", href: "/services/portable-site-offices" },
          { name: "وحدات أمنية متنقلة", href: "/services/portable-security-units" },
          { name: "معسكرات عمال متنقلة", href: "/services/portable-labor-camps" },
          { name: "دورات مياه متنقلة", href: "/services/portable-restrooms" },
        ],
        company: [
          { name: "من نحن", href: "/about-us" },
        ],
        support: [
          { name: "تواصل معنا", href: "/contact" },
          { name: "الأسئلة الشائعة", href: "/faq" },
        ],
        legal: [
          { name: "سياسة الخصوصية", href: "/privacy" },
          { name: "شروط الخدمة", href: "/terms" },
          { name: "سياسة الكوكيز", href: "/cookies" },
        ],
      },
      backToTop: "العودة للأعلى",
      copyright: "جميع الحقوق محفوظة.",
    },
    notFound: {
      title: "الصفحة غير موجودة",
      description: "لم نتمكن من العثور على الصفحة المطلوبة.",
      cta: "العودة للرئيسية",
    },
    servicesIntro: {
      title: "خدماتنا",
      description: "اكتشف الفئات الرئيسية: كبائن محمولة بكل أنواعها، وأعمال الألمنيوم، واللحام، والقص والثني.",
      whatsappLabel: "تحدث على واتساب",
      back: "عودة للخدمات",
      view: "عرض الخدمة",
    },
    galleryExtras: extraCabinGalleryItems,
    services: addGalleryAlts([
      {
        slug: "porta-cabin",
        name: "كبائن محمولة",
        intro: "الفئة الرئيسية لكل الكبائن الجاهزة للنقل والتركيب السريع.",
        description:
          "نوفر كبائن معزولة ومصممة للتحمل لمختلف الاستخدامات مثل المكاتب والسكن والأمن والوحدات الصحية مع سرعة في التسليم والتركيب.",
        highlights: [
          "ألواح ساندوتش معزولة وهياكل فولاذية",
          "تصاميم متعددة للاستخدامات المختلفة",
          "تركيب سريع وقابل للنقل",
          "جاهزية للخدمات الكهربائية والميكانيكية",
        ],
        gallery: [portacabin1, portacabin2, portacabin3],
        whatsappMessage: "مرحبًا، أود الاستفسار عن حلول الكبائن المحمولة.",
      },
      {
        slug: "portable-houses",
        parent: "porta-cabin",
        name: "منازل متنقلة",
        intro: "منازل جاهزة بعزل كامل وتصاميم مرنة.",
        description:
          "منازل متنقلة معزولة جاهزة للتكييف والكهرباء، مع إمكانية تخصيص المساحات والغرف لتناسب السكن المؤقت أو شبه الدائم.",
        highlights: [
          "عزل حراري وجاهزية للتكييف",
          "توزيعات غرف مرنة",
          "تشطيبات أرضيات وجدران متينة",
          "تركيب سريع وجاهزية للنقل",
        ],
        gallery: [portacabin1, portacabin2, portacabin3],
        whatsappMessage: "مرحبًا، أود الاستفسار عن المنازل المتنقلة.",
      },
      {
        slug: "portable-site-offices",
        parent: "porta-cabin",
        name: "مكاتب مواقع متنقلة",
        intro: "مكاتب جاهزة بالكهرباء والبيانات لبدء العمل فورًا.",
        description:
          "مكاتب مواقع معزولة ومجهزة بالكهرباء والشبكات وتصاميم عملية لرفع إنتاجية الفرق منذ اليوم الأول.",
        highlights: [
          "تمديدات كهرباء وبيانات",
          "عزل حراري وتجهيز للتكييف",
          "مساحات عمل وأثاث عملي",
          "أبواب ونوافذ آمنة",
        ],
        gallery: [portacabin2, portacabin3, portacabin1],
        whatsappMessage: "مرحبًا، أود الاستفسار عن مكاتب المواقع المتنقلة.",
      },
      {
        slug: "portable-labor-camps",
        parent: "porta-cabin",
        name: "معسكرات عمال متنقلة",
        intro: "سكن مريح للعمال مع تهوية وتشطيبات آمنة.",
        description:
          "كبائن سكنية للعمال مع تهوية وعزل، أرضيات آمنة، وتوزيعات أسِرّة مرنة لضمان رفاهية الطاقم.",
        highlights: [
          "مساحات نوم مهوّاة ومعزولة",
          "أرضيات مانعة للانزلاق وسهلة التنظيف",
          "توزيعات أسِرّة وغرف مرنة",
          "كهرباء وإنارة جاهزة",
        ],
        gallery: [portacabin2, portacabin1, portacabin3],
        whatsappMessage: "مرحبًا، أود الاستفسار عن معسكرات العمال المتنقلة.",
      },
      {
        slug: "portable-mosques",
        parent: "porta-cabin",
        name: "مساجد متنقلة",
        intro: "مساحات صلاة جاهزة بتشطيبات مناسبة للوضوء.",
        description:
          "مساجد متنقلة بأرضيات قابلة للغسل وتهوية وتصميم مفتوح للصلاة، جاهزة للنقل والتركيب السريع.",
        highlights: [
          "تشطيبات مناسبة للوضوء",
          "تهوية وتجهيز للتكييف",
          "مساحة صلاة مفتوحة",
          "تركيب سريع",
        ],
        gallery: [portacabin3, portacabin4, portacabin1],
        whatsappMessage: "مرحبًا، أود الاستفسار عن المساجد المتنقلة.",
      },
      {
        slug: "portable-storage",
        parent: "porta-cabin",
        name: "تخزين متنقل",
        intro: "كبائن تخزين آمنة للأدوات والمواد.",
        description:
          "كبائن تخزين بهياكل فولاذية وأبواب معززة وتهوية لتقليل الرطوبة، جاهزة للرفع والنقل.",
        highlights: [
          "أبواب فولاذية معززة",
          "تهوية للحد من الرطوبة",
          "مساحات جاهزة للأرفف",
          "سهولة الرفع والنقل",
        ],
        gallery: [portacabin2, portacabin2, portacabin3],
        whatsappMessage: "مرحبًا، أود الاستفسار عن كبائن التخزين المتنقلة.",
      },
      {
        slug: "portable-restrooms",
        parent: "porta-cabin",
        name: "دورات مياه متنقلة",
        intro: "وحدات صحية متنقلة جاهزة للتوصيل.",
        description:
          "دورات مياه متنقلة بأرضيات مانعة للانزلاق، تهوية، وتشطيبات سهلة التنظيف لراحة العاملين.",
        highlights: [
          "جاهزة للتوصيل بالمياه والصرف",
          "تهوية وتحكم بالروائح",
          "أرضيات آمنة وسهلة التنظيف",
          "فتحات خدمة للصيانة",
        ],
        gallery: [portacabin4, portacabin2, portacabin3],
        whatsappMessage: "مرحبًا، أود الاستفسار عن دورات المياه المتنقلة.",
      },
      {
        slug: "portable-warehouse",
        parent: "porta-cabin",
        name: "مستودع متنقل",
        intro: "مساحات تخزين واسعة متنقلة.",
        description:
          "مستودعات متنقلة بمساحات واسعة وأبواب آمنة وتهوية وأرضيات قوية للمعدات والمخزون.",
        highlights: [
          "مساحة مفتوحة واسعة",
          "أبواب آمنة وقوية",
          "تهوية للتحكم بالحرارة",
          "أرضيات تتحمل الأحمال",
        ],
        gallery: [portacabin1, portacabin4, portacabin3],
        whatsappMessage: "مرحبًا، أود الاستفسار عن المستودعات المتنقلة.",
      },
      {
        slug: "portable-log-cabin",
        parent: "porta-cabin",
        name: "كابين خشبي متنقل",
        intro: "تصميم خشبي مميز للضيافة أو الراحة.",
        description:
          "كبائن بمظهر خشبي مع عزل وتشطيبات مريحة وجاهزية للخدمات لاستخدامات الضيافة أو الراحة بالموقع.",
        highlights: [
          "ألواح عزل بمظهر خشبي",
          "جاهزة للتكييف والكهرباء",
          "تشطيبات داخلية مريحة",
          "تركيب سريع",
        ],
        gallery: [portacabin3, portacabin1, portacabin4],
        whatsappMessage: "مرحبًا، أود الاستفسار عن الكبائن الخشبية المتنقلة.",
      },
      {
        slug: "portable-canteen",
        parent: "porta-cabin",
        name: "مقصف متنقل",
        intro: "مقاصف جاهزة بخدمات آمنة للطعام.",
        description:
          "كبائن مقاصف بتشطيبات قابلة للغسل وتهوية وخيارات كاونتر وتجهيزات للربط بالخدمات.",
        highlights: [
          "أسطح قابلة للغسل",
          "منطقة طهي مهواة",
          "كاونترات تقديم",
          "نقاط خدمات جاهزة",
        ],
        gallery: [portacabin2, portacabin3, portacabin4],
        whatsappMessage: "مرحبًا، أود الاستفسار عن المقاصف المتنقلة.",
      },
      {
        slug: "portable-mobile-containers",
        parent: "porta-cabin",
        name: "حاويات متنقلة",
        intro: "حاويات معدلة متعددة الاستخدامات.",
        description:
          "حاويات معدلة معزولة ومهوّاة مع نوافذ وأبواب مخصصة لتناسب المكاتب أو السكن أو التخزين.",
        highlights: [
          "قوة الحاوية الفولاذية",
          "عزل وتهوية",
          "أبواب ونوافذ مخصصة",
          "تشطيبات داخلية متعددة الاستخدام",
        ],
        gallery: [portacabin2, portacabin3, portacabin1],
        whatsappMessage: "مرحبًا، أود الاستفسار عن الحاويات المتنقلة.",
      },
      {
        slug: "portable-security-units",
        parent: "porta-cabin",
        name: "وحدات أمنية متنقلة",
        intro: "وحدات أمنية للبوابات جاهزة للتركيب.",
        description:
          "كبائن أمنية مدمجة بأبواب معززة وزجاج بانورامي ومساحة للأجهزة الأمنية.",
        highlights: [
          "أبواب دخول معززة",
          "نوافذ رؤية واسعة",
          "مساحة للأجهزة والمراقبة",
          "تهوية وتجهيز للتبريد",
        ],
        gallery: [portacabin3, portacabin4, portacabin1],
        whatsappMessage: "مرحبًا، أود الاستفسار عن الوحدات الأمنية المتنقلة.",
      },
      {
        slug: "portable-pantry",
        parent: "porta-cabin",
        name: "مطبخ متنقل",
        intro: "وحدات مطبخ متنقلة تخدم فرق العمل.",
        description:
          "مطابخ متنقلة بتشطيبات قابلة للغسل ومساحات تخزين ونقاط كهرباء للأجهزة.",
        highlights: [
          "تشطيبات سهلة التنظيف",
          "مساحات تخزين وتحضير",
          "نقاط كهرباء للأجهزة",
          "تصميم مدمج وفعال",
        ],
        gallery: [portacabin2, portacabin3, portacabin1],
        whatsappMessage: "مرحبًا، أود الاستفسار عن المطابخ المتنقلة.",
      },
      {
        slug: "portable-bathrooms",
        parent: "porta-cabin",
        name: "حمامات متنقلة",
        intro: "حمامات كاملة متنقلة بمستوى أمان ونظافة عالٍ.",
        description:
          "حمامات متنقلة تحتوي على دوشات ودورات مياه وتهوية، جاهزة للتوصيل بالمياه والصرف.",
        highlights: [
          "دوشات ودورات مياه مركبة",
          "تهوية للتحكم بالرطوبة",
          "أرضيات مقاومة للانزلاق",
          "سهولة صيانة",
        ],
        gallery: [portacabin4, portacabin1, portacabin3],
        whatsappMessage: "مرحبًا، أود الاستفسار عن الحمامات المتنقلة.",
      },
      {
        slug: "portable-security-offices",
        parent: "porta-cabin",
        name: "مكاتب أمن متنقلة",
        intro: "مكاتب أمن أكبر مزودة بمساحات عمل.",
        description:
          "مكاتب أمن تجمع مساحة مراقبة ومكاتب وتخزين مع دخول معزز ونوافذ رؤية واسعة.",
        highlights: [
          "مساحات عمل لفِرَق الأمن",
          "أبواب دخول معززة",
          "نوافذ رؤية واسعة",
          "تمديدات للأجهزة",
        ],
        gallery: [portacabin3, portacabin2, portacabin1],
        whatsappMessage: "مرحبًا، أود الاستفسار عن مكاتب الأمن المتنقلة.",
      },
      {
        slug: "aluminum",
        name: "ألمنيوم",
        intro: "أعمال ألمنيوم دقيقة وخفيفة الوزن.",
        description:
          "أعمال ألمنيوم خفيفة ومقاومة للتآكل تشمل الواجهات والإطارات والبروفيلات المخصصة حسب مشروعك.",
        highlights: [
          "سبائك مقاومة للتآكل",
          "قص وتشطيب CNC",
          "طلاءات معمارية عالية الجودة",
          "بثق وتصنيع مخصص",
        ],
        gallery: [aluminium, portacabin2, portacabin3],
        whatsappMessage: "مرحبًا، أود الاستفسار عن خدمات الألمنيوم.",
      },
      {
        slug: "welding",
        name: "لحام",
        intro: "لحام معتمد للاحتياجات الإنشائية والصناعية.",
        description:
          "لحام MIG وTIG وقضيب من قبل فنيين معتمدين مع توثيق جودة للصلب والألمنيوم والسبائك الخاصة.",
        highlights: [
          "عمليات MIG وTIG والقضيب",
          "فنيو لحام معتمدون",
          "وصلات إنشائية بجودة عالية",
          "تقارير فحص وجودة",
        ],
        gallery: [welding ,portacabin4, portacabin1, portacabin2],
        whatsappMessage: "مرحبًا، أود الاستفسار عن خدمات اللحام.",
      },
      {
        slug: "cutting-bending",
        name: "قص وثني",
        intro: "قص وثني دقيق بخدمات CNC.",
        description:
          "قص ليزر/بلازما CNC وثني بدقة عالية لصفائح وألواح جاهزة للتجميع.",
        highlights: [
          "قص ليزر/بلازما CNC",
          "ثني بتحملات دقيقة",
          "حواف نظيفة للتشطيب",
          "أحجام من النماذج حتى الإنتاج",
        ],
        gallery: [cuttingBending , portacabin2, portacabin3, portacabin4],
        whatsappMessage: "مرحبًا، أود الاستفسار عن خدمات القص والثني.",
      },
    ]),
  },
};
