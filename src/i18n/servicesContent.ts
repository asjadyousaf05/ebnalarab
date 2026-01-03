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

export type ContentSection = { heading: string; body: string[] };

export type FaqItem = { question: string; answer: string };

export type ServiceContent = {
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
  contentSections: ContentSection[];
  faqs: FaqItem[];
  relatedSlugs: string[];
  metaTitle: string;
  metaDescription: string;
};

export type ServicesHubContent = {
  h1: string;
  eyebrow: string;
  intro: string;
  sections: { heading: string; body: string[]; bullets?: string[] }[];
  faqs: FaqItem[];
};

const BRAND_NAME = "Ebn Al Arab";

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
};

const withAltText = (services: ServiceContent[]): ServiceContent[] =>
  services.map((service) => {
    const galleryAlts =
      service.galleryAlts && service.galleryAlts.length >= service.gallery.length
        ? service.galleryAlts
        : service.gallery.map((img, idx) => imageAltMap[img] ?? `${service.name} image ${idx + 1} by ${BRAND_NAME}`);

    return {
      ...service,
      heroAlt: service.heroAlt ?? galleryAlts[0],
      cardAlt: service.cardAlt ?? galleryAlts[0],
      galleryAlts,
    };
  });

const servicesEn: ServiceContent[] = [
  {
    slug: "porta-cabin",
    name: "Porta Cabin",
    intro: "Parent category for modular porta cabins engineered for Saudi climate, logistics, and compliance.",
    description:
      "Steel-frame porta cabins with insulated panels, MEP-ready layouts, and rapid deployment make it easy to stand up offices, housing, security, and welfare facilities anywhere in the Kingdom.",
    highlights: [
      "Structural steel frames with insulated sandwich panels",
      "Heat-load calculations and AC-ready layouts for Saudi weather",
      "Turnkey MEP, flooring, and finishes tailored to each application",
      "Fast deployment with transport, craning, and installation handled",
    ],
    gallery: [portacabin1, portacabin2, portacabin3, portacabin5, portacabin9, portacabin7],
    heroAlt: "Porta cabin fleet by Ebn Al Arab positioned for Saudi job sites",
    whatsappMessage: "Hi, I'm interested in porta cabin solutions in Saudi Arabia.",
    contentSections: [
      {
        heading: "What Are Porta Cabins?",
        body: [
          "Porta cabins are modular buildings fabricated in Jeddah with steel frames and insulated panels so Saudi teams can deploy housing, offices, or sanitary blocks without waiting for masonry. Every unit from Ebn Al Arab is crane-ready, pre-fitted for power and HVAC, and sized for job sites in Jeddah, Riyadh, Dammam, and NEOM.",
          "As the parent platform, we configure guard rooms, <a href=\"/services/portable-site-offices\">portable site offices</a>, <a href=\"/services/portable-restrooms\">portable restrooms</a>, and <a href=\"/services/portable-warehouse\">portable warehouses</a> that share the same durable envelope. Shared structural details make maintenance, relocation, and expansion predictable across your fleet.",
        ],
      },
      {
        heading: "Uses & Applications",
        body: [
          "Contractors use porta cabins as command centers, bunk houses, sanitation blocks, and medical isolation rooms. We also build <a href=\"/services/portable-houses\">portable houses</a> for remote living, <a href=\"/services/portable-labor-camps\">labor camps</a> for workforce accommodation, and <a href=\"/services/portable-storage\">portable storage</a> for tools and spares.",
          "Because the shells are engineered for Saudi transport clearances and desert heat, we can deploy multi-unit compounds with connecting decks, shaded walkways, and aligned service corridors that cut running costs and simplify FM routines.",
        ],
      },
      {
        heading: "Industries We Serve",
        body: [
          "We support EPC contractors, oil & gas operators, logistics hubs, defense bases, giga-project partners, and event organizers that need reliable temporary infrastructure. Prayer cabins and <a href=\"/services/portable-mosques\">portable mosques</a> are configured with ablution-friendly finishes, while admin teams can work from temperature-controlled office suites with data raceways.",
        ],
      },
      {
        heading: "Customization Options",
        body: [
          "Cabins are sized to your footprint with options for double-wide units, stacked configurations, shaded terraces, and integrated ramps. Interior packages include acoustic insulation, non-slip vinyl or ceramic floors, LED lighting, and smart metering.",
          "We frequently pair core cabins with <a href=\"/services/portable-canteen\">portable canteens</a>, <a href=\"/services/portable-bathrooms\">portable bathrooms</a>, and <a href=\"/services/portable-pantry\">pantry cabins</a> to create self-sufficient compounds with hygienic drainage, gray-water management, and fire-rated partitions where needed.",
        ],
      },
      {
        heading: "Why Choose Ebn Al Arab",
        body: [
          "Fabrication happens locally with QA checkpoints, weld inspections, and panel density checks before delivery. We coordinate lifting plans, site leveling, and commissioning so your team can occupy the cabins immediately.",
          "Our Saudi-based service team provides maintenance visits, spares, and reconfiguration support. Whether you need one cabin or a village of modular buildings, we keep documentation, drawings, and asset IDs organized so future relocations stay fast and compliant.",
        ],
      },
    ],
    faqs: [
      {
        question: "What sizes of porta cabins do you build for Saudi Arabia?",
        answer:
          "We fabricate single cabins, double-wide units, stackable modules, and linked corridors. Typical footprints include 3x6m, 4x8m, and custom sizes that respect transport and lifting limits across KSA.",
      },
      {
        question: "How quickly can you deliver and install porta cabins?",
        answer:
          "Standard cabins can be delivered within days from confirmed drawings. Our team handles transport permits, craning, and installation so the unit is level, powered, and cooled on day one.",
      },
      {
        question: "Are the cabins insulated for Saudi heat?",
        answer:
          "Yes. We use insulated sandwich panels with heat-load calculations, AC-ready electrical, and shading options to keep interiors efficient in Jeddah, Riyadh, NEOM, and desert sites.",
      },
      {
        question: "Can you include sanitary blocks and kitchens?",
        answer:
          "We integrate toilets, showers, and pantry fittings or pair the main unit with <a href=\"/services/portable-restrooms\">portable restrooms</a> and <a href=\"/services/portable-canteen\">canteen cabins</a> for hygienic layouts.",
      },
      {
        question: "Do you support relocations or future expansions?",
        answer:
          "All cabins are engineered for relocation. We can disconnect, crane, and reinstall the same units or add matching modules for storage, housing, or office space as your project grows.",
      },
    ],
    relatedSlugs: [
      "portable-site-offices",
      "portable-houses",
      "portable-restrooms",
      "portable-warehouse",
      "portable-storage",
    ],
    metaTitle: "Portable Cabins Saudi Arabia | Ebn Al Arab Porta Cabin",
    metaDescription:
      "Porta cabins fabricated in Jeddah for Saudi Arabia with insulated panels, AC-ready layouts, sanitary blocks, and turnkey installation for offices, housing, and storage.",
  },
  {
    slug: "portable-houses",
    parent: "porta-cabin",
    name: "Portable Houses",
    intro: "Comfortable modular homes ready to place and connect for staff, families, or VIP accommodation.",
    description:
      "Insulated portable houses combine residential comfort with modular speed. Each unit arrives pre-fitted for AC, plumbing, and finishes suited to Saudi heat and dust.",
    highlights: [
      "Configurable bedrooms, living areas, and storage",
      "AC-ready electrical and shading for Saudi heat",
      "Durable flooring and easy-to-clean surfaces",
      "Optional kitchens, bathrooms, and wardrobe packages",
    ],
    gallery: [portacabin1, portacabin2, portacabin3, portacabin10],
    heroAlt: "Portable house with shaded entry and insulated facade by Ebn Al Arab",
    whatsappMessage: "Hi, I'm interested in portable houses in Saudi Arabia.",
    contentSections: [
      {
        heading: "What Are Portable Houses?",
        body: [
          "Portable houses are modular residences built off-site, then delivered and connected in days instead of months. We combine insulated walls, residential-grade doors and windows, and AC-ready electrical so staff housing or VIP suites remain comfortable during Saudi summers.",
          "Layouts flex from compact studios to multi-bedroom family units. Pair a main home with <a href=\"/services/portable-pantry\">pantry cabins</a>, <a href=\"/services/portable-bathrooms\">bathroom cabins</a>, or shaded porches to create a full residential cluster.",
        ],
      },
      {
        heading: "Uses & Applications",
        body: [
          "Developers use portable houses to accommodate project managers, visiting engineers, or families on remote sites. They also serve as interim homes during renovations, disaster relief, or seasonal staffing around resorts and giga projects.",
          "We often combine homes with <a href=\"/services/portable-site-offices\">site offices</a> and <a href=\"/services/portable-labor-camps\">labor camps</a> so leadership and crews share the same serviced compound with dedicated power, water, and sewage routes.",
        ],
      },
      {
        heading: "Industries We Serve",
        body: [
          "Construction, energy, logistics, tourism, and government housing programs rely on portable houses to speed mobilization. For NEOM, Red Sea, and industrial zones, we deliver dwellings that meet HSE requirements while keeping comfort high for long-term stays.",
        ],
      },
      {
        heading: "Customization Options",
        body: [
          "Choose bedroom counts, wardrobes, blackout curtains, acoustic insulation, and split-unit AC sizing. Kitchens can include solid-surface counters, hoods, and appliance points, while bathrooms use non-slip tiles and high-pressure plumbing fixtures.",
          "Exterior options include pergolas, privacy screens, ramps, and raised foundations for flood-prone sites. We also integrate smart meters and solar-prep conduits to control utility spend.",
        ],
      },
      {
        heading: "Why Choose Ebn Al Arab",
        body: [
          "We fabricate in Jeddah with QA checks on panel density, wiring, and sealing. Each unit is documented with drawings, load schedules, and MEP diagrams so approvals and facility management are straightforward across KSA municipalities.",
          "Our team handles transport, craning, leveling, and commissioning. After handover, we remain available for warranty, expansions, or relocation so your housing stock stays flexible as projects evolve.",
        ],
      },
    ],
    faqs: [
      {
        question: "What floor plans are available for portable houses?",
        answer:
          "Studios, one- to four-bedroom layouts, and double-wide units are common. We adjust partitions, storage, and kitchen sizes to match headcount and site constraints.",
      },
      {
        question: "Do the houses include bathrooms and kitchens?",
        answer:
          "Yes. We can integrate full bathrooms and kitchens or pair the home with dedicated <a href=\"/services/portable-bathrooms\">bathroom cabins</a> and <a href=\"/services/portable-pantry\">pantry cabins</a> for larger compounds.",
      },
      {
        question: "How are portable houses insulated for Saudi heat?",
        answer:
          "We use insulated panels, reflective roofing options, shading devices, and AC-ready electrical sizing to keep interiors efficient in extreme heat and humidity.",
      },
      {
        question: "Can you relocate the houses later?",
        answer:
          "Yes. Units are designed for crane moves and reinstallation. We can disconnect services, protect finishes, and reinstall on a new foundation quickly.",
      },
      {
        question: "Do you supply furniture and soft finishes?",
        answer:
          "We can provide turnkey furnishing packages including wardrobes, beds, seating, and blackout curtains to make the house move-in ready.",
      },
    ],
    relatedSlugs: ["portable-site-offices", "portable-labor-camps", "portable-bathrooms", "portable-pantry"],
    metaTitle: "Portable Houses KSA | Modular Housing by Ebn Al Arab",
    metaDescription:
      "Portable houses for Saudi Arabia with insulated walls, AC-ready power, and turnkey kitchens or bathrooms. Fast deployment for staff housing, VIP units, and remote sites.",
  },
  {
    slug: "portable-site-offices",
    parent: "porta-cabin",
    name: "Portable Site Offices",
    intro: "Pre-wired, AC-ready offices that let project teams work productively on day one.",
    description:
      "Portable site offices arrive fully insulated with electrical raceways, data points, ergonomic layouts, and secure doors so managers can lead from the heart of the job site.",
    highlights: [
      "Pre-wired for power, data, and CCTV",
      "Thermal insulation and AC sizing for desert heat",
      "Desks, storage, and meeting zones optimized for teams",
      "Secure doors, windows, and shatter-resistant glazing",
    ],
    gallery: [portacabin2, portacabin3, portacabin1, portacabin11],
    heroAlt: "Portable site office with glazing and secure entry for Saudi projects",
    whatsappMessage: "Hi, I'm interested in portable site offices in Saudi Arabia.",
    contentSections: [
      {
        heading: "What Are Portable Site Offices?",
        body: [
          "Portable site offices are modular workspaces engineered to keep leadership close to operations without sacrificing comfort. They are built with insulated panels, acoustic treatments, and AC-ready electrical so meetings remain focused even next to heavy machinery.",
          "We coordinate furniture layouts, data cabling, and CCTV points. Offices can stand alone or connect to <a href=\"/services/portable-warehouse\">portable warehouses</a>, <a href=\"/services/portable-security-units\">security units</a>, and <a href=\"/services/portable-restrooms\">restrooms</a> to create a unified site hub.",
        ],
      },
      {
        heading: "Uses & Applications",
        body: [
          "Common applications include project management suites, engineering review rooms, safety briefing spaces, and client reception areas. Double-wide offices host multi-discipline teams, while compact units suit remote drill pads or logistics checkpoints.",
          "We can attach conference pods, storage alcoves, or <a href=\"/services/portable-pantry\">pantry cabins</a> so teams have refreshments and printing space within the same secure footprint.",
        ],
      },
      {
        heading: "Industries We Serve",
        body: [
          "Construction, oil & gas, utilities, infrastructure, and events rely on portable site offices to stay agile. We tailor security glazing and controlled entries for airports and ports, while education and healthcare projects receive accessibility ramps and visitor seating.",
        ],
      },
      {
        heading: "Customization Options",
        body: [
          "Choose open-plan or cellular offices with sound-rated partitions, whiteboards, smart displays, and ergonomic furniture. Electrical is sized for AC, IT racks, and printers with surge protection and dedicated circuits.",
          "Exterior add-ons include canopies, sunshades, and covered walkways that link to <a href=\"/services/portable-restrooms\">hygiene cabins</a> or <a href=\"/services/portable-security-offices\">security offices</a>. We also prepare drawings to support civil defense and utility approvals.",
        ],
      },
      {
        heading: "Why Choose Ebn Al Arab",
        body: [
          "We fabricate locally to shorten lead times and provide stamped drawings for fast approvals. Each office is tested for power distribution, lighting levels, and door/window alignment before dispatch.",
          "Our delivery team coordinates craning, leveling, and commissioning, while after-sales support covers reconfiguration, relocation, and FM-friendly maintenance schedules across KSA.",
        ],
      },
    ],
    faqs: [
      {
        question: "Do the offices include furniture and IT provisions?",
        answer:
          "We can deliver offices with desks, meeting tables, storage, and cable management. Data raceways, Wi-Fi access points, and CCTV conduits are pre-planned for quick IT setup.",
      },
      {
        question: "How secure are the portable site offices?",
        answer:
          "We use reinforced doors, lockable windows, tamper-resistant fasteners, and optional security film. Pair the office with <a href=\"/services/portable-security-units\">security cabins</a> for gate control.",
      },
      {
        question: "Can you add meeting rooms or training areas?",
        answer:
          "Yes. We build double-wide or linked modules to create boardrooms, breakout zones, and training spaces with integrated AV and acoustic treatments.",
      },
      {
        question: "What about accessibility and visitor flow?",
        answer:
          "Ramps, wider doors, and accessible restrooms can be included. We also plan separate visitor entrances and waiting areas when required.",
      },
      {
        question: "How fast can a site office be delivered?",
        answer:
          "Standard layouts can be delivered in days with installation and commissioning handled by our team. Custom builds follow agreed timelines with milestone updates.",
      },
    ],
    relatedSlugs: ["portable-warehouse", "portable-security-units", "portable-pantry", "portable-restrooms"],
    metaTitle: "Portable Site Offices Saudi Arabia | Ebn Al Arab",
    metaDescription:
      "AC-ready portable site offices for Saudi projects with insulated panels, data raceways, secure glazing, and rapid installation. Tailored layouts for construction and energy teams.",
  },
  {
    slug: "portable-labor-camps",
    parent: "porta-cabin",
    name: "Portable Labor Camps",
    intro: "Worker accommodation built for comfort, hygiene, and durability on demanding Saudi projects.",
    description:
      "Portable labor camps combine sleeping quarters, dining, welfare, and sanitation into modular blocks that are safe, ventilated, and easy to clean.",
    highlights: [
      "Ventilated sleeping areas with non-slip flooring",
      "Configurable bunks, lockers, and supervisors' rooms",
      "Integrated hygiene blocks with showers and toilets",
      "Shaded circulation and easy-to-clean surfaces",
    ],
    gallery: [portacabin2, portacabin1, portacabin3, portacabin9],
    heroAlt: "Portable labor camp cabins arranged with shaded walkways",
    whatsappMessage: "Hi, I'm interested in portable labor camps in Saudi Arabia.",
    contentSections: [
      {
        heading: "What Are Portable Labor Camps?",
        body: [
          "Portable labor camps are modular accommodations that bundle sleeping quarters, hygiene blocks, dining areas, and administration cabins into a cohesive, transportable setup. Each block is insulated, ventilated, and fitted with durable flooring to withstand high footfall and daily cleaning.",
          "We design circulation to separate clean and service routes, add canopies for shade, and link camps to <a href=\"/services/portable-canteen\">portable canteens</a>, <a href=\"/services/portable-restrooms\">restrooms</a>, and <a href=\"/services/portable-security-units\">security units</a> for controlled entry.",
        ],
      },
      {
        heading: "Uses & Applications",
        body: [
          "Ideal for construction crews, shutdown teams, remote drilling staff, and seasonal labor, these camps allow large headcounts to rest safely near the workface. Supervisor rooms, first-aid cabins, and recreation zones can be added to improve morale and compliance.",
          "We also deploy camps for disaster response and event crews, combining bunk cabins with <a href=\"/services/portable-houses\">portable houses</a> for managers and <a href=\"/services/portable-storage\">storage</a> for PPE and spares.",
        ],
      },
      {
        heading: "Industries We Serve",
        body: [
          "We serve construction, oil & gas, mining, utilities, and giga-project partners that must house teams in remote or fast-changing environments. Camps are engineered for Saudi building codes, civil defense requirements, and extreme heat.",
        ],
      },
      {
        heading: "Customization Options",
        body: [
          "Configure bunk counts, locker sizes, supervisors' quarters, and prayer rooms. Hygiene blocks use non-slip tiles, ventilation, and service access panels for easy maintenance. Dining halls integrate handwash stations and exhaust systems.",
          "Outdoor shading, gray-water routing, and perimeter lighting can be included. We also offer acoustics and insulation upgrades for hot or noisy sites to keep rest areas comfortable.",
        ],
      },
      {
        heading: "Why Choose Ebn Al Arab",
        body: [
          "We coordinate delivery, craning, and leveling so camps are operational quickly. Detailed drawings cover MEP layouts, emergency exits, and firefighting points to satisfy audits and client HSE checks.",
          "After handover, we support FM teams with spare parts, reconfiguration, and relocations, keeping downtime minimal when crews move between Saudi regions.",
        ],
      },
    ],
    faqs: [
      {
        question: "How many people can each cabin house?",
        answer:
          "We configure cabins from 4-person rooms to higher-density bunk layouts with adequate ventilation, lockers, and clearances based on your HSE standards.",
      },
      {
        question: "Do you provide hygiene blocks and kitchens?",
        answer:
          "Yes. Camps often include <a href=\"/services/portable-restrooms\">restroom cabins</a>, <a href=\"/services/portable-bathrooms\">shower cabins</a>, and <a href=\"/services/portable-canteen\">canteens</a> for meals.",
      },
      {
        question: "How are camps powered and cooled?",
        answer:
          "We size electrical for AC units, fans, and lighting, and can integrate genset tie-ins or solar-prep conduits. Thermal insulation is specified for Saudi heat.",
      },
      {
        question: "Can the camp be expanded later?",
        answer:
          "Yes. Modules are designed to link with additional sleeping blocks, offices, or medical cabins as your workforce grows.",
      },
      {
        question: "What about fire safety and emergency exits?",
        answer:
          "Layouts include marked exits, emergency lighting, and firefighting points. We coordinate with your HSE team to meet project-specific standards.",
      },
    ],
    relatedSlugs: ["portable-canteen", "portable-restrooms", "portable-bathrooms", "portable-houses"],
    metaTitle: "Portable Labor Camps Saudi Arabia | Ebn Al Arab Cabins",
    metaDescription:
      "Portable labor camps for Saudi projects with ventilated sleeping quarters, hygiene blocks, dining cabins, and shaded circulation. Fast installation and HSE-ready layouts.",
  },
  {
    slug: "portable-mosques",
    parent: "porta-cabin",
    name: "Portable Mosques",
    intro: "Prayer cabins with thoughtful ablution-friendly finishes and comfortable layouts.",
    description:
      "Portable mosques provide dedicated prayer space with cleanable surfaces, ventilation, and AC-ready design so crews and visitors can pray comfortably on-site.",
    highlights: [
      "Ablution-friendly flooring and drainage",
      "Ventilation and cooling for crowded times",
      "Clean, open prayer area with Qibla orientation",
      "Rapid deployment with plug-and-play utilities",
    ],
    gallery: [portacabin3, portacabin4, portacabin1],
    heroAlt: "Portable mosque cabin with shaded entrance and ventilation",
    whatsappMessage: "Hi, I'm interested in portable mosque cabins in Saudi Arabia.",
    contentSections: [
      {
        heading: "What Are Portable Mosques?",
        body: [
          "Portable mosques are modular cabins dedicated to prayer, built with washable finishes, odor control, and clear Qibla orientation. They deploy quickly alongside main site facilities so teams have a respectful, comfortable worship area.",
          "We add separate ablution zones, shoe storage, and ventilation. Portable mosques often sit beside <a href=\"/services/portable-labor-camps\">labor camps</a>, <a href=\"/services/portable-restrooms\">restrooms</a>, and <a href=\"/services/portable-security-units\">security cabins</a> near the site entrance.",
        ],
      },
      {
        heading: "Uses & Applications",
        body: [
          "Construction sites, logistics hubs, events, and remote compounds use portable mosques to provide accessible prayer space for workers and visitors. Units can be sized for daily use or expanded for Jumu'ah with additional canopy space.",
          "We can integrate imam rooms, storage for Qur'an stands, and external speakers while keeping wiring and fixtures protected from dust and humidity.",
        ],
      },
      {
        heading: "Industries We Serve",
        body: [
          "Industrial sites, public sector projects, giga-project clusters, and temporary event villages all require compliant worship areas. Our cabins meet Saudi expectations for cleanliness, accessibility, and privacy.",
        ],
      },
      {
        heading: "Customization Options",
        body: [
          "Choose prayer hall sizes, ablution fixtures, foot-wash stations, and ventilation strategies. Flooring uses non-slip, easy-clean materials with discreet drainage. AC capacity is sized for peak occupancy.",
          "Exterior options include shaded entries, ramps, signage, and lighting that guide worshippers safely at night. We also provide sound insulation where mosques are placed near generators or heavy equipment.",
        ],
      },
      {
        heading: "Why Choose Ebn Al Arab",
        body: [
          "We understand Saudi site requirements for worship spaces and coordinate with HSE teams to position mosques for accessibility and privacy. Cabins are delivered, leveled, and commissioned with water, drainage, and power connections.",
          "After installation, we remain available for maintenance, relocation, or size increases as your workforce grows or project phases change.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can you include separate ablution areas?",
        answer:
          "Yes. We add dedicated ablution fixtures with easy-clean finishes, drainage, and ventilation to keep the prayer hall dry and comfortable.",
      },
      {
        question: "How is Qibla orientation handled?",
        answer:
          "We align the cabin during installation and mark Qibla inside. If the cabin is relocated, we update orientation and signage accordingly.",
      },
      {
        question: "Do you provide HVAC and odor control?",
        answer:
          "Cabins are insulated and AC-ready with ventilation fans and optional air purifiers to keep air fresh during peak use.",
      },
      {
        question: "Can portable mosques be expanded?",
        answer:
          "Yes. We can link modules or add shaded canopy areas to handle larger gatherings while keeping circulation organized.",
      },
      {
        question: "How quickly can a mosque be installed?",
        answer:
          "Most units install within a day once utilities are available. We handle craning, leveling, and commissioning to deliver a ready-to-use space.",
      },
    ],
    relatedSlugs: ["portable-labor-camps", "portable-restrooms", "portable-security-units"],
    metaTitle: "Portable Mosques Saudi Arabia | Ebn Al Arab Prayer Cabins",
    metaDescription:
      "Portable mosque cabins with ablution-friendly finishes, Qibla orientation, ventilation, and AC-ready design. Fast deployment for Saudi sites and events.",
  },
  {
    slug: "portable-storage",
    parent: "porta-cabin",
    name: "Portable Storage",
    intro: "Secure storage cabins for tools, materials, and sensitive equipment on Saudi sites.",
    description:
      "Portable storage cabins use reinforced frames, lockable doors, and ventilation to protect materials from heat, dust, and theft while remaining easy to relocate.",
    highlights: [
      "Reinforced steel doors and secure locking",
      "Ventilation to reduce moisture and heat buildup",
      "Shelving-ready interiors and forklift/crane-friendly bases",
      "Weather-resistant finishes for Saudi conditions",
    ],
    gallery: [portacabin2, portacabin2, portacabin3, portacabin7],
    heroAlt: "Portable storage cabin with secure steel door and vents",
    whatsappMessage: "Hi, I'm interested in portable storage cabins in Saudi Arabia.",
    contentSections: [
      {
        heading: "What Is Portable Storage?",
        body: [
          "Portable storage cabins are secure, insulated enclosures for tools, consumables, PPE, and spares. We reinforce doors, add tamper-resistant hinges, and ventilate interiors to protect assets from Saudi heat and dust.",
          "Cabins sit on forklift pockets or lifting points for fast relocation. They often pair with <a href=\"/services/portable-site-offices\">site offices</a>, <a href=\"/services/portable-warehouse\">portable warehouses</a>, and <a href=\"/services/portable-security-units\">security units</a> to control access at yard perimeters.",
        ],
      },
      {
        heading: "Uses & Applications",
        body: [
          "Use storage cabins for tools, spare parts, chemicals (with ventilation upgrades), and high-value equipment. Add shelving, cages, and workbenches for on-site maintenance zones or small workshops.",
          "We also configure storage for events, relief operations, and mobile clinics where medicines or supplies need temperature-aware protection alongside <a href=\"/services/portable-restrooms\">restrooms</a> and admin cabins.",
        ],
      },
      {
        heading: "Industries We Serve",
        body: [
          "Construction, logistics, oil & gas, utilities, and manufacturing sites rely on portable storage to shorten retrieval times and reduce shrinkage. Cabins can be deployed at ports, warehouses, or remote pads.",
        ],
      },
      {
        heading: "Customization Options",
        body: [
          "Add racking, anti-slip floors, ventilation fans, insulation upgrades, and LED lighting. For sensitive goods, we install AC or exhaust fans with louvered vents and spill-containment options.",
          "Access options include roller shutters, double doors, and security grilles. We also provide exterior lighting and CCTV brackets for better oversight at night.",
        ],
      },
      {
        heading: "Why Choose Ebn Al Arab",
        body: [
          "We build storage cabins with the same structural discipline as our offices and housing, so they remain square, dry, and safe after multiple moves. Documentation covers loading, lifting, and anchoring points.",
          "Our team delivers, levels, and secures each cabin, then supports FM teams with maintenance or relocation services anywhere in the Kingdom.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can you add shelving and racking?",
        answer:
          "Yes. We install heavy-duty shelving, pegboards, and workbenches tailored to your inventory and load requirements.",
      },
      {
        question: "How do you control heat and moisture?",
        answer:
          "We add insulation, vents, exhaust fans, and AC options to keep materials safe in Saudi heat. Desiccant storage and sealed floors are available for sensitive items.",
      },
      {
        question: "Are the units easy to move?",
        answer:
          "Cabins include forklift pockets or lifting lugs so they can be repositioned with minimal downtime and without structural damage.",
      },
      {
        question: "What security options are available?",
        answer:
          "Reinforced doors, multi-point locks, internal bars, CCTV brackets, and exterior lighting help prevent theft and unauthorized access.",
      },
      {
        question: "Can they integrate with other site cabins?",
        answer:
          "Yes. We often install storage next to <a href=\"/services/portable-site-offices\">site offices</a> or <a href=\"/services/portable-security-units\">security units</a> for controlled access.",
      },
    ],
    relatedSlugs: ["portable-warehouse", "portable-site-offices", "portable-security-units"],
    metaTitle: "Portable Storage Cabins Saudi Arabia | Ebn Al Arab",
    metaDescription:
      "Secure portable storage cabins for Saudi job sites with reinforced doors, ventilation, shelving, and quick relocation. Protect tools, materials, and equipment in KSA conditions.",
  },
  {
    slug: "portable-restrooms",
    parent: "porta-cabin",
    name: "Portable Restrooms",
    intro: "Hygienic restroom cabins ready to plumb, ventilate, and use on day one.",
    description:
      "Portable restrooms feature non-slip floors, proper ventilation, and easy-clean finishes to protect worker welfare and site cleanliness.",
    highlights: [
      "Plumb-ready toilets, sinks, and service access panels",
      "Ventilation and odor control for Saudi heat",
      "Non-slip hygienic flooring and wipeable walls",
      "Separate male/female or VIP configurations",
    ],
    gallery: [portacabin4, portacabin2, portacabin3, portacabin1],
    heroAlt: "Portable restroom cabin with ventilated facade and clean finishes",
    whatsappMessage: "Hi, I'm interested in portable restrooms in Saudi Arabia.",
    contentSections: [
      {
        heading: "What Are Portable Restrooms?",
        body: [
          "Portable restrooms are modular hygiene cabins that deliver clean, ventilated, and durable sanitary facilities anywhere in the Kingdom. They connect quickly to existing utilities or temporary tanks, keeping sites compliant and workers safe.",
          "We supply single units, male/female splits, and VIP restrooms with premium fixtures. They frequently support <a href=\"/services/portable-labor-camps\">labor camps</a>, <a href=\"/services/portable-site-offices\">site offices</a>, and <a href=\"/services/portable-canteen\">canteens</a> within the same compound.",
        ],
      },
      {
        heading: "Uses & Applications",
        body: [
          "Restroom cabins serve construction projects, events, logistics yards, and emergency response sites where permanent washrooms are unavailable. We tailor fixtures for heavy daily use with anti-vandal fittings and easy-maintenance access panels.",
          "For executive areas or client visits, we can install VIP finishes, touchless faucets, and climate control to match corporate standards.",
        ],
      },
      {
        heading: "Industries We Serve",
        body: [
          "Construction, oil & gas, ports, events, retail expansions, and public sector projects all rely on portable restrooms to maintain hygiene. We design for quick cleaning and odor control in Saudi humidity.",
        ],
      },
      {
        heading: "Customization Options",
        body: [
          "Choose fixture counts, privacy partitions, ventilation fans, exhaust hoods, and odor control solutions. Non-slip floors, wall cladding, and LED lighting keep the cabin easy to sanitize.",
          "Add external handwash stations, gray-water routing, ramps, and signage. We also provide shower-equipped versions under <a href=\"/services/portable-bathrooms\">portable bathroom cabins</a> for welfare facilities.",
        ],
      },
      {
        heading: "Why Choose Ebn Al Arab",
        body: [
          "We pre-test plumbing, ventilation, and electrical systems before delivery. Service panels simplify maintenance while sealed surfaces reduce cleaning time and chemical use.",
          "Our team installs, levels, and connects the cabins, then supports FM teams with spare parts, odor media, and relocation services as sites shift.",
        ],
      },
    ],
    faqs: [
      {
        question: "Do the restrooms need existing sewer connections?",
        answer:
          "They can connect to existing sewer lines or temporary holding tanks. We provide clear inlet/outlet positions and service access panels.",
      },
      {
        question: "Can you include showers?",
        answer:
          "Yes. For full welfare, choose <a href=\"/services/portable-bathrooms\">portable bathroom cabins</a> with showers, ventilation, and dressing areas.",
      },
      {
        question: "How is odor controlled?",
        answer:
          "Ventilation fans, exhaust hoods, sealed traps, and odor media are specified for Saudi heat to keep interiors fresh.",
      },
      {
        question: "Are VIP or female-only layouts available?",
        answer:
          "We design male/female splits, female-only units, and VIP restrooms with upgraded fixtures, mirrors, and climate control.",
      },
      {
        question: "How fast can restrooms be installed?",
        answer:
          "Most units are ready the same day utilities are available. We handle craning, leveling, and commissioning to deliver a clean, usable facility immediately.",
      },
    ],
    relatedSlugs: ["portable-bathrooms", "portable-canteen", "portable-site-offices"],
    metaTitle: "Portable Restrooms Saudi Arabia | Ebn Al Arab Hygiene Cabins",
    metaDescription:
      "Portable restroom cabins with non-slip floors, ventilation, and plumb-ready fixtures for Saudi sites and events. Fast installation with male/female and VIP options.",
  },
  {
    slug: "portable-warehouse",
    parent: "porta-cabin",
    name: "Portable Warehouse",
    intro: "Modular warehouse space to protect inventory, equipment, and spares on-site.",
    description:
      "Portable warehouses deliver wide-span storage with secure access, ventilation, and heavy-duty flooring so you can stage materials close to operations.",
    highlights: [
      "Wide-span usable area with structural steel framing",
      "Secure roller or steel doors with ventilation",
      "Heavy-duty flooring for pallets and equipment",
      "Ready for racking, lighting, and climate options",
    ],
    gallery: [portacabin7, portacabin4, portacabin3, portacabin1],
    heroAlt: "Portable warehouse cabin with roller access and ventilation",
    whatsappMessage: "Hi, I'm interested in portable warehouse cabins in Saudi Arabia.",
    contentSections: [
      {
        heading: "What Is a Portable Warehouse?",
        body: [
          "A portable warehouse is a modular storage hall built with structural steel, insulated panels, and secure doors to house pallets, tools, or equipment near the workface. It deploys faster than permanent builds and can relocate as logistics change.",
          "We design loading points, ventilation, and lighting to suit the goods you store. Warehouses often sit beside <a href=\"/services/portable-storage\">portable storage</a>, <a href=\"/services/portable-site-offices\">site offices</a>, and <a href=\"/services/portable-security-units\">security cabins</a> to streamline yard control.",
        ],
      },
      {
        heading: "Uses & Applications",
        body: [
          "Use portable warehouses for MRO spares, tools, project materials, or finished goods staging. They can host light assembly, kitting, or packaging with workspace demarcations and racking systems.",
          "Events and relief operations also rely on modular warehouses to stage supplies quickly while adding <a href=\"/services/portable-restrooms\">restrooms</a> and admin cabins nearby.",
        ],
      },
      {
        heading: "Industries We Serve",
        body: [
          "Construction, oil & gas, logistics, manufacturing, and public works projects use portable warehouses to shorten transport legs and reduce material damage. Designs consider Saudi dust, heat, and coastal humidity.",
        ],
      },
      {
        heading: "Customization Options",
        body: [
          "Configure roller shutters, dock-level access, high-bay lighting, and ventilation or AC based on your inventory. Floors can be reinforced for forklifts and pallet jacks.",
          "Security options include CCTV brackets, access control prep, and perimeter lighting. We provide racking layouts and electrical distribution plans to simplify installation.",
        ],
      },
      {
        heading: "Why Choose Ebn Al Arab",
        body: [
          "We fabricate locally and coordinate permits, transport, and craning for wide modules. Structural integrity, insulation, and door alignment are QA-checked before dispatch.",
          "Our team can relocate or expand the warehouse as your logistics footprint evolves across Saudi regions, keeping documentation and load data updated for FM teams.",
        ],
      },
    ],
    faqs: [
      {
        question: "What access options are available?",
        answer:
          "Roller shutters, double doors, and side personnel doors are available. We can prepare dock-height access or ramps based on your yard layout.",
      },
      {
        question: "Can the warehouse be climate-controlled?",
        answer:
          "Yes. Insulation, ventilation fans, and AC or evaporative cooling can be added depending on the goods stored and energy targets.",
      },
      {
        question: "Is racking included?",
        answer:
          "We can supply racking layouts and install shelving or pallet racks suited to your loads, clear heights, and forklift equipment.",
      },
      {
        question: "How strong is the flooring?",
        answer:
          "Floors are specified for pallet loads and equipment traffic. We can upgrade thickness and coatings for heavy-duty or chemical-resistant needs.",
      },
      {
        question: "Can the warehouse be extended?",
        answer:
          "Yes. We design modules to link side-by-side or end-to-end, and we can add <a href=\"/services/portable-storage\">storage cabins</a> for segregated items.",
      },
    ],
    relatedSlugs: ["portable-storage", "portable-site-offices", "portable-security-units"],
    metaTitle: "Portable Warehouse Saudi Arabia | Ebn Al Arab Modular Storage",
    metaDescription:
      "Portable warehouses with secure access, ventilation, and heavy-duty floors for Saudi projects. Rapid deployment and expansion with racking, lighting, and AC options.",
  },
  {
    slug: "portable-log-cabin",
    parent: "porta-cabin",
    name: "Portable Log Cabin",
    intro: "Aesthetic log-style cabins for hospitality, leisure, and premium site experiences.",
    description:
      "Portable log cabins deliver a warm, hospitality-grade look with insulated walls, cozy interiors, and utility readiness for resorts, cafes, and premium offices.",
    highlights: [
      "Log-style insulated panels and elegant finishes",
      "AC and electrical ready with discreet routing",
      "Cozy interiors suited to hospitality or retail",
      "Fast installation without compromising aesthetics",
    ],
    gallery: [portacabin3, portacabin1, portacabin4, portacabin10],
    heroAlt: "Portable log cabin with wood-look facade and glazed entry",
    whatsappMessage: "Hi, I'm interested in portable log cabins in Saudi Arabia.",
    contentSections: [
      {
        heading: "What Is a Portable Log Cabin?",
        body: [
          "A portable log cabin brings a warm, wood-look aesthetic to modular construction. Behind the finish is an insulated steel structure with concealed MEP, giving you a hospitality-grade cabin that installs in days.",
          "These cabins are popular for cafes, retail kiosks, boutique offices, and premium accommodation. They can sit alongside <a href=\"/services/portable-houses\">portable houses</a>, <a href=\"/services/portable-canteen\">canteens</a>, and <a href=\"/services/portable-pantry\">pantry cabins</a> to complete guest amenities.",
        ],
      },
      {
        heading: "Uses & Applications",
        body: [
          "Use log cabins as guest suites, marketing suites, coffee shops, ticketing booths, or lakeside lounges. Interiors support HVAC, lighting, and AV for brand experiences.",
          "We adapt glazing, decks, and awnings to suit resort, park, or event environments while keeping the cabin relocatable for seasonal changes.",
        ],
      },
      {
        heading: "Industries We Serve",
        body: [
          "Tourism, leisure, retail, and corporate marketing teams choose log cabins when they need an upscale look without construction delays. Cabins are finished to withstand Saudi sun and dust while keeping interiors comfortable.",
        ],
      },
      {
        heading: "Customization Options",
        body: [
          "Select facade tones, cladding profiles, and glazing ratios. Interiors can include timber-look flooring, accent lighting, built-in seating, and concealed storage. Service points for coffee machines, POS, and displays are pre-planned.",
          "Exterior decks, ramps, pergolas, and branded signage can be added. We also prepare acoustic and HVAC designs to keep the cabin comfortable in hot climates and busy venues.",
        ],
      },
      {
        heading: "Why Choose Ebn Al Arab",
        body: [
          "We combine aesthetic finishes with robust engineering so the cabin looks premium and performs like a durable site asset. QA covers facade fixing, sealants, and climate control before delivery.",
          "Our team installs, levels, and commissions the unit, then supports moves or refurbishments as your concept evolves across Saudi destinations.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can the log cabin be used as guest accommodation?",
        answer:
          "Yes. We can include bedrooms, bathrooms, and pantry points with premium finishes to serve as guest suites or VIP lounges.",
      },
      {
        question: "Is the wood look durable in Saudi weather?",
        answer:
          "We use UV-resistant, easy-clean cladding systems with sealed joints and backing insulation to handle heat, dust, and occasional rain.",
      },
      {
        question: "Can you add a deck or outdoor seating?",
        answer:
          "We design integrated decks, ramps, and pergolas to extend the usable area and create shaded seating for cafes or lounges.",
      },
      {
        question: "What utilities are supported?",
        answer:
          "Cabins are AC-ready with power and water points for coffee machines, POS, lighting, and HVAC. We can add gray-water routing if needed.",
      },
      {
        question: "Is relocation possible without damage?",
        answer:
          "Yes. The structural frame and finishes are protected for crane moves, and we provide guidance to keep cladding and glazing safe during transport.",
      },
    ],
    relatedSlugs: ["portable-houses", "portable-canteen", "portable-pantry"],
    metaTitle: "Portable Log Cabin Saudi Arabia | Ebn Al Arab",
    metaDescription:
      "Portable log cabins with wood-look facades, insulated structure, and hospitality-ready finishes. Ideal for cafes, guest suites, and premium site offices in Saudi Arabia.",
  },
  {
    slug: "portable-canteen",
    parent: "porta-cabin",
    name: "Portable Canteen",
    intro: "Food-service ready cabins with hygiene-first layouts for crews and guests.",
    description:
      "Portable canteens arrive with washable surfaces, exhaust routes, serving counters, and utility points so kitchens can start serving immediately.",
    highlights: [
      "Washable hygienic surfaces and coved skirtings",
      "Ventilated cooking area with hood routes",
      "Serving counters and queue management space",
      "Utility connection points for equipment",
    ],
    gallery: [portacabin2, portacabin3, portacabin4, portacabin3, portacabin1],
    heroAlt: "Portable canteen cabin with serving counter and ventilation",
    whatsappMessage: "Hi, I'm interested in portable canteen cabins in Saudi Arabia.",
    contentSections: [
      {
        heading: "What Is a Portable Canteen?",
        body: [
          "A portable canteen is a modular kitchen and dining cabin designed for hygiene, safety, and efficiency. Surfaces are washable, junctions are sealed, and ventilation routes are prepared so cooking fumes and odors are controlled from day one.",
          "Canteens often anchor welfare areas alongside <a href=\"/services/portable-labor-camps\">labor camps</a>, <a href=\"/services/portable-restrooms\">restrooms</a>, and <a href=\"/services/portable-pantry\">pantry cabins</a> to deliver meals at scale without transporting staff off-site.",
        ],
      },
      {
        heading: "Uses & Applications",
        body: [
          "Use portable canteens for workforce dining, event catering, camp kitchens, or temporary cafes. We support hotlines, cold prep, dishwashing, and counter service with logical flow between stations.",
          "VIP or visitor areas can include separate counters, barista setups, or self-serve stations, all within the same modular footprint.",
        ],
      },
      {
        heading: "Industries We Serve",
        body: [
          "Construction, energy, defense, education, events, and disaster response teams rely on portable canteens to keep crews fed safely. Layouts consider Saudi food safety expectations and local authority requirements.",
        ],
      },
      {
        heading: "Customization Options",
        body: [
          "Add extraction hoods, grease traps, washable ceilings, stainless counters, and slip-resistant floors. We can pre-plan equipment power loads, gas routing, and drainage for your menu and appliances.",
          "Dining can be integrated within the cabin or linked to shaded external seating. We also add handwash stations, signage, and queue guides to keep service organized.",
        ],
      },
      {
        heading: "Why Choose Ebn Al Arab",
        body: [
          "We deliver canteens with MEP rough-ins, odor control, and durable finishes tested before handover. Drawings cover loads, ventilation, and fire points for approvals.",
          "Our team coordinates installation, leveling, and commissioning, then supports maintenance or relocation as headcounts change across Saudi projects.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can you supply kitchen equipment?",
        answer:
          "We prepare power, gas, and water points for your specified equipment and can coordinate with your supplier for exact layouts and loads.",
      },
      {
        question: "How do you manage ventilation and odors?",
        answer:
          "Extraction hoods, exhaust fans, and make-up air strategies are planned for Saudi heat, along with grease traps and easy-clean ducting.",
      },
      {
        question: "Is seating included?",
        answer:
          "We can include internal seating or link the canteen to shaded external dining areas with ramps, rails, and lighting.",
      },
      {
        question: "Do you provide separate serving lines?",
        answer:
          "Yes. We can separate staff/VIP lines, add barista counters, or create grab-and-go stations within the same cabin footprint.",
      },
      {
        question: "Can the canteen be relocated later?",
        answer:
          "Yes. Cabins are engineered for crane moves, and services are positioned for easy disconnect and reconnect at new sites.",
      },
    ],
    relatedSlugs: ["portable-pantry", "portable-restrooms", "portable-labor-camps"],
    metaTitle: "Portable Canteen Saudi Arabia | Ebn Al Arab Kitchen Cabins",
    metaDescription:
      "Portable canteen cabins with washable finishes, ventilation, serving counters, and utility points. Rapid deployment for workforce dining and event catering in Saudi Arabia.",
  },
  {
    slug: "portable-mobile-containers",
    parent: "porta-cabin",
    name: "Portable Mobile Containers",
    intro: "Container-based cabins modified for offices, housing, storage, or retail uses.",
    description:
      "Modified container cabins keep the strength of steel containers while adding insulation, windows, doors, and interior fit-outs for comfort and security.",
    highlights: [
      "Container-grade steel strength with added insulation",
      "Custom doors, windows, and secure access",
      "Flexible layouts for offices, housing, or storage",
      "Fast deployment and easy relocation",
    ],
    gallery: [portacabin2, portacabin3, portacabin1],
    heroAlt: "Converted container cabin with windows and insulated walls",
    whatsappMessage: "Hi, I'm interested in portable mobile container cabins in Saudi Arabia.",
    contentSections: [
      {
        heading: "What Are Portable Mobile Containers?",
        body: [
          "Portable mobile containers are converted steel containers fitted with insulation, glazing, doors, and interior finishes to serve as offices, housing, storage, or retail units. They retain structural strength and stackability while gaining comfort.",
          "We add ventilation, AC-ready electrical, and secure access to transform the container into a compliant workspace or living unit. They can sit alongside <a href=\"/services/portable-storage\">storage cabins</a> and <a href=\"/services/portable-security-units\">security units</a> to complete a mobilization cluster.",
        ],
      },
      {
        heading: "Uses & Applications",
        body: [
          "Use converted containers as site offices, temporary housing, guard rooms, kiosks, or workshops. The robust shell handles frequent moves and challenging environments while keeping interiors conditioned.",
          "They are ideal for ports, logistics yards, and remote sites where durability and fast deployment matter. We can integrate rest areas or link to <a href=\"/services/portable-restrooms\">restroom cabins</a> for hygiene.",
        ],
      },
      {
        heading: "Industries We Serve",
        body: [
          "Construction, logistics, oil & gas, retail pop-ups, and defense applications rely on container cabins for rapid mobilization and security. The steel frame deters tampering while interior finishes remain comfortable.",
        ],
      },
      {
        heading: "Customization Options",
        body: [
          "Add doors, windows, roller shutters, insulation upgrades, electrical distribution, and AC. Interiors can be partitioned, lined with wipeable panels, and fitted with built-in furniture.",
          "We also prepare stacking details, rooftop platforms, and external stairs or ramps when multiple containers are combined for larger footprints.",
        ],
      },
      {
        heading: "Why Choose Ebn Al Arab",
        body: [
          "Our modifications prioritize structural integrity, thermal comfort, and safety. We provide drawings for openings, reinforcements, and MEP so approvals and maintenance are straightforward.",
          "We deliver, level, and commission the container, then support relocations or refits as your operation changes across Saudi sites.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can containers be stacked or linked?",
        answer:
          "Yes. We reinforce and detail stacking points, stairs, and walkways to build multi-level setups or linked complexes.",
      },
      {
        question: "Are the walls insulated?",
        answer:
          "We add insulation, vapor barriers, and interior finishes to control heat and condensation, making the container comfortable year-round.",
      },
      {
        question: "What access options are available?",
        answer:
          "Standard swing doors, security doors, roller shutters, and glazed entries are available depending on use-case and security needs.",
      },
      {
        question: "Do you support power and data routing?",
        answer:
          "Yes. Electrical, data conduits, and AC provisions are planned, with circuit sizing based on your equipment loads.",
      },
      {
        question: "How quickly can a container cabin be deployed?",
        answer:
          "Conversions move quickly. Once layouts are approved, we can deliver, level, and commission the cabin in days with minimal site prep.",
      },
    ],
    relatedSlugs: ["portable-storage", "portable-security-units", "portable-site-offices"],
    metaTitle: "Portable Container Cabins Saudi Arabia | Ebn Al Arab",
    metaDescription:
      "Portable mobile container cabins converted with insulation, glazing, and secure access for offices, housing, or storage. Fast deployment and relocation across Saudi Arabia.",
  },
  {
    slug: "portable-security-units",
    parent: "porta-cabin",
    name: "Portable Security Units",
    intro: "Rapid-deploy security cabins for gatehouses, checkpoints, and perimeter control.",
    description:
      "Portable security units combine reinforced doors, panoramic glazing, counters, and equipment space so guards can monitor sites effectively.",
    highlights: [
      "Reinforced access doors and tamper-resistant hardware",
      "Panoramic glazing for clear visibility",
      "Counter and equipment space for monitoring gear",
      "Ventilation and cooling ready for Saudi heat",
    ],
    gallery: [portacabin3, portacabin4, portacabin1, portacabin12],
    heroAlt: "Portable security cabin with wraparound glazing at a site entrance",
    whatsappMessage: "Hi, I'm interested in portable security units in Saudi Arabia.",
    contentSections: [
      {
        heading: "What Are Portable Security Units?",
        body: [
          "Portable security units are compact cabins designed for guards, supervisors, and checkpoint teams. They feature reinforced doors, wraparound glazing, and counters for radios, scanners, or access control devices.",
          "Units are often placed at gates alongside <a href=\"/services/portable-storage\">storage cabins</a> for confiscated items, <a href=\"/services/portable-warehouse\">warehouses</a> for logistics, and <a href=\"/services/portable-site-offices\">site offices</a> for admin staff.",
        ],
      },
      {
        heading: "Uses & Applications",
        body: [
          "Use them as gatehouses, vehicle inspection booths, ticketing counters, or CCTV hubs. They also serve as security bases for events, campuses, and ports where visibility and controlled entry are critical.",
          "We can add ballistic upgrades, night lighting, and climate control to keep guards alert and comfortable across long shifts.",
        ],
      },
      {
        heading: "Industries We Serve",
        body: [
          "Industrial plants, logistics hubs, defense sites, ports, campuses, and events rely on portable security units to tighten entry control. Designs consider Saudi civil defense expectations and client HSE rules.",
        ],
      },
      {
        heading: "Customization Options",
        body: [
          "Choose glazing ratios, pass-through windows, counters, secure storage, and cable routing for CCTV and access control. We can include duress alarms, PA systems, and shading canopies.",
          "External bollards, ramps, and lighting improve safety. We also prepare rooftop light mounts or mast bases where surveillance gear is installed.",
        ],
      },
      {
        heading: "Why Choose Ebn Al Arab",
        body: [
          "Our cabins are fabricated with reinforced frames, sealed joints, and heat-aware insulation. We test door alignment, locks, and electrical before dispatch to reduce on-site fixes.",
          "We deliver, level, and commission the unit, and we support relocations or upgrades as your perimeter layout evolves across Saudi projects.",
        ],
      },
    ],
    faqs: [
      {
        question: "Do you offer ballistic or blast-resistant options?",
        answer:
          "We can upgrade glazing, panels, and doors to higher protection levels based on your risk profile and project standards.",
      },
      {
        question: "Can the cabin host CCTV and access control equipment?",
        answer:
          "Yes. We plan counters, power, data conduits, and cooling for surveillance, badge readers, and networking gear.",
      },
      {
        question: "Is there space for multiple guards?",
        answer:
          "We configure single-guard kiosks or larger <a href=\"/services/portable-security-offices\">security offices</a> with desks, storage, and briefing space.",
      },
      {
        question: "How is visibility ensured?",
        answer:
          "Panoramic glazing, elevated sills, and optional external cameras or mirrors maximize sightlines for pedestrians and vehicles.",
      },
      {
        question: "Can the units be relocated easily?",
        answer:
          "Yes. Lifting points and compact footprints allow quick moves, keeping security coverage flexible as site access points change.",
      },
    ],
    relatedSlugs: ["portable-security-offices", "portable-site-offices", "portable-storage"],
    metaTitle: "Portable Security Cabins Saudi Arabia | Ebn Al Arab",
    metaDescription:
      "Portable security cabins with reinforced doors, panoramic glazing, counters, and AC-ready design. Rapid deployment for gatehouses and checkpoints across Saudi Arabia.",
  },
  {
    slug: "portable-pantry",
    parent: "porta-cabin",
    name: "Portable Pantry",
    intro: "Pantry cabins to support onsite teams with beverages, snacks, and light food prep.",
    description:
      "Portable pantry cabins provide clean counter space, storage, and appliance points to keep crews refreshed without leaving site.",
    highlights: [
      "Easy-clean finishes and counters",
      "Storage and appliance power points",
      "Compact, efficient layouts for small footprints",
      "Pairs with offices, canteens, and housing cabins",
    ],
    gallery: [portacabin2, portacabin3, portacabin1],
    heroAlt: "Portable pantry cabin with compact counters and storage",
    whatsappMessage: "Hi, I'm interested in portable pantry cabins in Saudi Arabia.",
    contentSections: [
      {
        heading: "What Is a Portable Pantry?",
        body: [
          "A portable pantry is a compact cabin that hosts coffee machines, fridges, microwaves, and storage so teams can take breaks without leaving site. Finishes are easy to clean, and electrical is sized for typical appliances.",
          "Pantry cabins frequently connect to <a href=\"/services/portable-site-offices\">site offices</a>, <a href=\"/services/portable-canteen\">canteens</a>, and <a href=\"/services/portable-houses\">housing cabins</a> to create a complete amenity stack for staff and visitors.",
        ],
      },
      {
        heading: "Uses & Applications",
        body: [
          "Use pantries inside office clusters, labor camps, marketing suites, or VIP lounges to keep refreshments close. They can also function as snack points for events or retail pop-ups.",
          "We optimize circulation and storage so even small footprints feel organized, with shelving, under-counter space, and power points arranged for efficiency.",
        ],
      },
      {
        heading: "Industries We Serve",
        body: [
          "Construction, logistics, oil & gas, retail, events, and hospitality teams use pantry cabins to reduce downtime and improve welfare. Designs consider Saudi electrical standards and food safety practices.",
        ],
      },
      {
        heading: "Customization Options",
        body: [
          "Add sinks, RO water points, splashbacks, and stainless counters for easy cleaning. Electrical circuits can be dedicated for coffee machines, microwaves, and undercounter fridges.",
          "We also include ventilation fans, odor control, and optional seating or bar-height counters for quick breaks.",
        ],
      },
      {
        heading: "Why Choose Ebn Al Arab",
        body: [
          "We deliver pantries that integrate seamlessly with your office or accommodation cabins, with matching finishes and service points. QA covers electrical sizing, sealing, and ventilation.",
          "Installation, leveling, and commissioning are handled by our team, and we can relocate or expand the pantry as headcounts change across KSA projects.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can you include sinks and filtered water?",
        answer:
          "Yes. We add sinks, RO points, and drainage with easy-access panels for maintenance and cleaning.",
      },
      {
        question: "How many appliances can the pantry support?",
        answer:
          "We size circuits for the appliances you specify, with dedicated outlets for coffee machines, microwaves, and fridges, plus general sockets.",
      },
      {
        question: "Is ventilation provided?",
        answer:
          "Vent fans and optional hoods manage heat and odors. We also recommend window placement for natural light and airflow.",
      },
      {
        question: "Can the pantry be combined with a canteen?",
        answer:
          "Yes. Pantries often sit beside <a href=\"/services/portable-canteen\">canteens</a> to create serving stations or VIP refreshment areas.",
      },
      {
        question: "Is it easy to relocate?",
        answer:
          "Cabins are compact and crane-ready, making relocations fast with minimal downtime.",
      },
    ],
    relatedSlugs: ["portable-canteen", "portable-site-offices", "portable-houses"],
    metaTitle: "Portable Pantry Saudi Arabia | Ebn Al Arab",
    metaDescription:
      "Portable pantry cabins with easy-clean finishes, appliance power points, and storage. Ideal for offices, camps, and VIP lounges across Saudi Arabia.",
  },
  {
    slug: "portable-bathrooms",
    parent: "porta-cabin",
    name: "Portable Bathrooms",
    intro: "Self-contained bathroom cabins with showers, toilets, and ventilation ready to connect.",
    description:
      "Portable bathroom cabins provide complete bathing facilities with non-slip floors, drainage, and humidity control to support workforce welfare.",
    highlights: [
      "Showers and toilets installed with service access",
      "Ventilated for humidity and odor control",
      "Non-slip waterproof floors and wipeable walls",
      "Ready to connect to water and waste lines",
    ],
    gallery: [portacabin4, portacabin1, portacabin3],
    heroAlt: "Portable bathroom cabin with showers and non-slip finishes",
    whatsappMessage: "Hi, I'm interested in portable bathroom cabins in Saudi Arabia.",
    contentSections: [
      {
        heading: "What Are Portable Bathrooms?",
        body: [
          "Portable bathroom cabins deliver showers, toilets, and dressing space in a single modular unit. They are built with waterproof finishes, service panels, and ventilation to keep facilities hygienic and easy to maintain.",
          "They are often paired with <a href=\"/services/portable-labor-camps\">labor camps</a>, <a href=\"/services/portable-restrooms\">restroom cabins</a>, and <a href=\"/services/portable-canteen\">canteens</a> to complete welfare blocks.",
        ],
      },
      {
        heading: "Uses & Applications",
        body: [
          "Bathroom cabins support worker welfare, temporary accommodations, events, and emergency response sites where showers and changing areas are needed quickly.",
          "We tailor fixtures for heavy use, specify slip-resistant finishes, and provide service hatches for rapid maintenance without disrupting users.",
        ],
      },
      {
        heading: "Industries We Serve",
        body: [
          "Construction, oil & gas, mining, events, and disaster relief depend on portable bathrooms to keep hygiene standards high. Designs consider Saudi heat, water quality, and cleaning routines.",
        ],
      },
      {
        heading: "Customization Options",
        body: [
          "Select shower counts, partitions, and storage cubbies. Add exhaust fans, anti-fog mirrors, and instant water heaters sized for your occupancy.",
          "We can separate male/female or VIP areas and add exterior handwash points or laundry hookups where needed.",
        ],
      },
      {
        heading: "Why Choose Ebn Al Arab",
        body: [
          "We test plumbing and ventilation before delivery, ensuring drainage slopes, seals, and waterproofing hold up in Saudi conditions. Clear service panels simplify FM tasks.",
          "Our team handles installation and commissioning, and we remain available for maintenance or relocation as project phases change.",
        ],
      },
    ],
    faqs: [
      {
        question: "How many showers can fit in one cabin?",
        answer:
          "We configure single-shower VIP units or multi-shower blocks. Layouts are sized to your headcount and water supply capacity.",
      },
      {
        question: "Do you provide water heaters?",
        answer:
          "Yes. We size instant or storage heaters based on your flow rates and power availability, and we plan electrical accordingly.",
      },
      {
        question: "Can the cabins be gender-segregated?",
        answer:
          "We can design separate male and female sections with individual entries, signage, and privacy fittings.",
      },
      {
        question: "What about gray-water handling?",
        answer:
          "We provide clear inlet/outlet points and can connect to sewer networks or holding tanks. Floors and drains are sealed for easy cleaning.",
      },
      {
        question: "Are maintenance panels included?",
        answer:
          "Yes. Service access points allow quick fixes to plumbing and ventilation without dismantling finishes.",
      },
    ],
    relatedSlugs: ["portable-restrooms", "portable-canteen", "portable-labor-camps"],
    metaTitle: "Portable Bathrooms Saudi Arabia | Ebn Al Arab Welfare Cabins",
    metaDescription:
      "Portable bathroom cabins with showers, toilets, non-slip finishes, and ventilation. Ready to connect for Saudi welfare facilities, camps, and events.",
  },
  {
    slug: "portable-security-offices",
    parent: "porta-cabin",
    name: "Portable Security Offices",
    intro: "Larger security offices with workspace for teams, surveillance, and evidence storage.",
    description:
      "Portable security offices combine surveillance space, desks, storage, and reinforced entry to give security teams a professional base on site.",
    highlights: [
      "Workspace for multi-person security teams",
      "Reinforced entry doors and secure storage",
      "Wide-view windows and CCTV mounting points",
      "Pre-wired for surveillance and communications",
    ],
    gallery: [portacabin3, portacabin2, portacabin1],
    heroAlt: "Portable security office cabin with wide glazing and secure entry",
    whatsappMessage: "Hi, I'm interested in portable security office cabins in Saudi Arabia.",
    contentSections: [
      {
        heading: "What Are Portable Security Offices?",
        body: [
          "Portable security offices are larger cabins that give security teams desks, storage, and monitoring space. They include reinforced doors, controlled access, and glazing for visibility while maintaining privacy for investigations or briefings.",
          "Offices can sit near <a href=\"/services/portable-security-units\">guard units</a>, <a href=\"/services/portable-storage\">storage cabins</a>, and <a href=\"/services/portable-site-offices\">project offices</a> to centralize control of entries, permits, and visitor processing.",
        ],
      },
      {
        heading: "Uses & Applications",
        body: [
          "Use these offices for control rooms, access management, evidence storage, and shift handovers. They can host CCTV racks, radios, and server gear with planned cooling and cable routing.",
          "Events, campuses, industrial sites, and ports all benefit from a dedicated security HQ that can move as the perimeter changes.",
        ],
      },
      {
        heading: "Industries We Serve",
        body: [
          "Industrial plants, logistics hubs, aviation, education campuses, and public sector facilities rely on portable security offices to enforce compliance and coordinate incident response.",
        ],
      },
      {
        heading: "Customization Options",
        body: [
          "Add briefing areas, lockers, evidence cabinets, and IT racks. Access control prep, duress alarms, and external lighting mounts are available. We can separate visitor areas from secure work zones.",
          "HVAC and insulation are sized for Saudi heat with acoustics considered for long monitoring shifts. External ramps and bollards improve accessibility and safety.",
        ],
      },
      {
        heading: "Why Choose Ebn Al Arab",
        body: [
          "We build on reinforced frames with sealed joints, heat-aware insulation, and tamper-resistant hardware. Each office is tested for power, cooling, and security hardware placement before delivery.",
          "Our team installs, levels, and commissions the unit, then supports upgrades or relocations as your security posture evolves across Saudi Arabia.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can you integrate CCTV and access control?",
        answer:
          "Yes. We provide conduits, power points, and rack space for surveillance and access systems, plus cooling to protect electronics.",
      },
      {
        question: "Do these offices include storage for equipment?",
        answer:
          "We can include lockable cabinets, evidence lockers, and shelving sized to your gear and SOPs.",
      },
      {
        question: "Can visitors be screened inside the office?",
        answer:
          "Yes. We can add a visitor window, waiting area, and separate circulation to keep the secure workspace protected.",
      },
      {
        question: "Are ballistic or blast upgrades available?",
        answer:
          "Upon request, we can upgrade panels and glazing to higher protection levels to match your risk profile.",
      },
      {
        question: "How portable are these offices?",
        answer:
          "They are crane-ready and sized for Saudi road clearances, making relocations straightforward with minimal downtime.",
      },
    ],
    relatedSlugs: ["portable-security-units", "portable-site-offices", "portable-storage"],
    metaTitle: "Portable Security Offices Saudi Arabia | Ebn Al Arab",
    metaDescription:
      "Portable security offices with reinforced access, CCTV prep, and workspace for teams. Rapid deployment for control rooms, checkpoints, and incident response in Saudi Arabia.",
  },
  {
    slug: "aluminum",
    name: "Aluminum",
    intro: "High-precision aluminum fabrication and fit-out for facades, frames, and custom profiles.",
    description:
      "Lightweight, corrosion-resistant aluminum works including facades, doors, windows, louvers, and trims tailored to Saudi projects and climates.",
    highlights: [
      "Corrosion-resistant alloys and architectural-grade finishes",
      "CNC cutting, drilling, and routing for tight tolerances",
      "Powder coating, anodizing, and specialty finishes",
      "Custom extrusion and fabrication for bespoke designs",
    ],
    gallery: [aluminium, portacabin2, portacabin3],
    heroAlt: "Aluminum fabrication shop with profiles and finished panels",
    whatsappMessage: "Hi, I'm interested in aluminum fabrication services in Saudi Arabia.",
    contentSections: [
      {
        heading: "What Is Aluminum Fabrication?",
        body: [
          "Aluminum fabrication covers cutting, drilling, forming, and finishing aluminum profiles for facades, doors, windows, louvers, and custom trims. We deliver lightweight, corrosion-resistant components that perform in Saudi coastal and desert environments.",
          "Our team supports standalone facade scopes as well as integrated work for <a href=\"/services/porta-cabin\">porta cabins</a>, <a href=\"/services/portable-site-offices\">site offices</a>, and <a href=\"/services/portable-log-cabin\">premium cabins</a> where architectural finishes are critical.",
        ],
      },
      {
        heading: "Uses & Applications",
        body: [
          "We fabricate curtain walls, shopfronts, skylight frames, louvers, handrails, and interior trims. Hardware prep, glazing pockets, and drainage details are handled with precision to speed installation.",
          "Industrial clients rely on aluminum for corrosion-resistant enclosures and ventilation grilles, while modular builders use it to elevate cabin aesthetics and longevity.",
        ],
      },
      {
        heading: "Industries We Serve",
        body: [
          "Construction, retail, hospitality, industrial plants, and modular building providers across Saudi Arabia depend on aluminum solutions to balance weight, durability, and appearance. We tailor finishes for coastal humidity, sand, and intense UV.",
        ],
      },
      {
        heading: "Customization Options",
        body: [
          "We offer powder coating, anodizing, and specialized textures, along with CNC routing, miter cutting, and drilling for precise fit-up. Custom extrusion sourcing is available for unique profiles.",
          "Glazing prep, weather-stripping, and thermal breaks are included where required. We coordinate closely with <a href=\"/services/cutting-bending\">cutting & bending</a> and <a href=\"/services/welding\">welding</a> scopes to deliver complete assemblies.",
        ],
      },
      {
        heading: "Why Choose Ebn Al Arab",
        body: [
          "We maintain tight tolerances, QA documentation, and finish samples before production. Our shop in Jeddah shortens lead times, and we package profiles for damage-free delivery to Riyadh, Dammam, NEOM, and remote sites.",
          "Technical teams provide shop drawings, installation guidance, and after-sales support, ensuring your facade or cabin upgrades stay on schedule and on spec.",
        ],
      },
    ],
    faqs: [
      {
        question: "What finishes can you provide?",
        answer:
          "Powder coating, anodizing, PVDF, and specialty textures are available. We help you select finishes suited to Saudi UV and coastal conditions.",
      },
      {
        question: "Do you supply glazing and hardware?",
        answer:
          "We prepare frames for glazing and hardware, and can supply or coordinate hardware packages based on your specification.",
      },
      {
        question: "Can you work from shop drawings or site surveys?",
        answer:
          "Yes. We build from detailed drawings and can perform site surveys to confirm dimensions before fabrication.",
      },
      {
        question: "Do you handle structural or thermal requirements?",
        answer:
          "We incorporate reinforcements, thermal breaks, and drainage where needed to meet performance criteria and local codes.",
      },
      {
        question: "How do you protect materials during transport?",
        answer:
          "Profiles are packed with edge protection and labeling, and we coordinate logistics to minimize handling damage between Jeddah and other Saudi regions.",
      },
    ],
    relatedSlugs: ["cutting-bending", "welding", "porta-cabin"],
    metaTitle: "Aluminum Fabrication Saudi Arabia | Ebn Al Arab",
    metaDescription:
      "Aluminum facades, doors, windows, louvers, and custom profiles with CNC precision, corrosion-resistant finishes, and fast delivery across Saudi Arabia.",
  },
  {
    slug: "welding",
    name: "Welding",
    intro: "Certified welding for structural, architectural, and industrial applications.",
    description:
      "MIG, TIG, and stick welding by certified welders with QA documentation for steel, aluminum, and specialty alloys used across Saudi projects.",
    highlights: [
      "MIG, TIG, and stick processes with certified welders",
      "Structural-grade joints with NDT and QA records",
      "Support for carbon steel, stainless, and aluminum",
      "On-site or shop welding based on project needs",
    ],
    gallery: [welding, portacabin4, portacabin1, portacabin2],
    heroAlt: "Certified welder working on structural frame with sparks",
    whatsappMessage: "Hi, I'm interested in welding services in Saudi Arabia.",
    contentSections: [
      {
        heading: "What Is Our Welding Service?",
        body: [
          "We provide MIG, TIG, and stick welding with certified welders who follow documented WPS and PQR standards. From structural frames to architectural details, every weld is inspected to meet Saudi project specifications.",
          "Our welding teams support shop fabrication and on-site works for <a href=\"/services/porta-cabin\">porta cabins</a>, <a href=\"/services/portable-warehouse\">warehouses</a>, and custom steel assemblies, coordinating with <a href=\"/services/cutting-bending\">cutting & bending</a> to deliver complete packages.",
        ],
      },
      {
        heading: "Uses & Applications",
        body: [
          "We weld frames, stairs, handrails, platforms, equipment skids, brackets, and architectural steel features. Aluminum and stainless welding are available for corrosion-resistant or aesthetic applications.",
          "Repair welding, strengthening, and modification services keep existing assets compliant and safe, with minimal downtime.",
        ],
      },
      {
        heading: "Industries We Serve",
        body: [
          "Construction, oil & gas, logistics, manufacturing, retail fit-out, and modular building providers rely on our welding for reliable joints and consistent QC across Saudi Arabia.",
        ],
      },
      {
        heading: "Customization Options",
        body: [
          "We follow specified welding procedures, filler materials, and preheat/interpass requirements. Surface preparation, grinding, and finishing are handled per your standard.",
          "We can add coatings, galvanizing prep, and coordination with machining or drilling to deliver ready-to-install assemblies.",
        ],
      },
      {
        heading: "Why Choose Ebn Al Arab",
        body: [
          "Certified welders, calibrated equipment, and QA records keep your project audit-ready. We provide WPS/PQR documentation, fit-up checks, and final inspection reports.",
          "Local crews in Jeddah shorten response times, and mobile teams cover Riyadh, Dammam, and remote Saudi sites when on-site welding is required.",
        ],
      },
    ],
    faqs: [
      {
        question: "Which welding processes do you offer?",
        answer:
          "We offer MIG, TIG, and stick welding depending on material, thickness, and site conditions. We advise on the best process for your scope.",
      },
      {
        question: "Do you provide welding documentation?",
        answer:
          "Yes. WPS, PQR, welder qualifications, and inspection reports are provided to match client and regulatory requirements.",
      },
      {
        question: "Can you weld aluminum and stainless steel?",
        answer:
          "Yes. We handle carbon steel, stainless steel, and aluminum with appropriate filler metals and procedures.",
      },
      {
        question: "Do you work on-site or only in the shop?",
        answer:
          "We do both. Shop welding is preferred for quality control, but mobile teams can mobilize to site with the right access and permits.",
      },
      {
        question: "How do you ensure quality and safety?",
        answer:
          "Fit-up checks, preheat control, calibrated machines, and NDT options keep welds within spec. Safety plans and permits are followed for all on-site work.",
      },
    ],
    relatedSlugs: ["cutting-bending", "aluminum", "porta-cabin"],
    metaTitle: "Welding Services Saudi Arabia | Ebn Al Arab",
    metaDescription:
      "Certified MIG, TIG, and stick welding for structural and architectural steel, stainless, and aluminum. QA-backed fabrication and on-site welding across Saudi Arabia.",
  },
  {
    slug: "cutting-bending",
    name: "Cutting & Bending",
    intro: "Precision cutting and press-brake bending services for sheet and plate components.",
    description:
      "CNC laser/plasma cutting and tight-tolerance press-brake bending for components that are ready for assembly or finishing.",
    highlights: [
      "CNC laser/plasma cutting with clean edges",
      "Tight-tolerance press-brake bending",
      "Support from prototypes to production runs",
      "Material traceability and QA documentation",
    ],
    gallery: [cuttingBending, portacabin2, portacabin3, portacabin4],
    heroAlt: "Press brake bending metal sheet with precise tooling",
    whatsappMessage: "Hi, I'm interested in cutting and bending services in Saudi Arabia.",
    contentSections: [
      {
        heading: "What Is Cutting & Bending?",
        body: [
          "Cutting and bending involve CNC laser or plasma cutting followed by press-brake forming to create precise parts for fabrication. We deliver components with clean edges, accurate holes, and repeatable bends so assemblies fit together without rework.",
          "Our team supports standalone parts or integrated packages for <a href=\"/services/porta-cabin\">porta cabins</a>, <a href=\"/services/welding\">welding</a> projects, and <a href=\"/services/aluminum\">aluminum</a> fabrication, shortening lead times for Saudi projects.",
        ],
      },
      {
        heading: "Uses & Applications",
        body: [
          "We cut and form brackets, gussets, panels, louvers, signage, ducting parts, and structural components. Precision cutting reduces grinding and fitting on-site, while accurate bends keep assemblies aligned.",
          "Both prototypes and production volumes are supported, with nesting strategies that optimize material yield and reduce waste.",
        ],
      },
      {
        heading: "Industries We Serve",
        body: [
          "Construction, industrial equipment, retail fit-out, modular building, and infrastructure projects rely on our cutting and bending to keep fabrication predictable and compliant.",
        ],
      },
      {
        heading: "Customization Options",
        body: [
          "We process carbon steel, stainless, and aluminum with varied thicknesses. Bends are programmed for spring-back, and hole patterns, slots, and tabs are cut to match your assembly approach.",
          "Secondary operations like countersinking, tapping, and light deburring are available, along with marking for easy identification during assembly.",
        ],
      },
      {
        heading: "Why Choose Ebn Al Arab",
        body: [
          "CNC equipment, calibrated tooling, and skilled operators deliver consistent parts with documented tolerances. We review drawings, recommend optimizations, and coordinate with welding and finishing teams.",
          "Local production in Jeddah speeds deliveries to Riyadh, Dammam, and NEOM, with packaging that keeps edges protected during transport.",
        ],
      },
    ],
    faqs: [
      {
        question: "What materials and thicknesses can you handle?",
        answer:
          "We process carbon steel, stainless steel, and aluminum across common sheet and plate thicknesses. We will confirm feasibility and tooling for your drawings.",
      },
      {
        question: "Do you accept small batches or prototypes?",
        answer:
          "Yes. We handle prototypes, one-offs, and production runs, keeping the same QA approach for every batch.",
      },
      {
        question: "Can you provide finished assemblies?",
        answer:
          "We can cut and bend parts, then coordinate with <a href=\"/services/welding\">welding</a> and finishing to deliver ready-to-install assemblies when needed.",
      },
      {
        question: "How are tolerances controlled?",
        answer:
          "CNC programming, calibrated tooling, and inspection checks ensure bends and holes meet specified tolerances. We share inspection reports on request.",
      },
      {
        question: "Do you offer surface treatments?",
        answer:
          "We coordinate with <a href=\"/services/aluminum\">aluminum finishing</a> and coating partners to deliver painted or anodized parts when required.",
      },
    ],
    relatedSlugs: ["welding", "aluminum", "porta-cabin"],
    metaTitle: "Cutting & Bending Saudi Arabia | Ebn Al Arab CNC Services",
    metaDescription:
      "CNC cutting and press-brake bending for steel and aluminum parts with tight tolerances, clean edges, and QA documentation. Prototypes to production across Saudi Arabia.",
  },
];
const servicesAr: ServiceContent[] = [
  {
    slug: "porta-cabin",
    name: "كبائن برتا جاهزة",
    intro: "الفئة الأساسية لكل الكبائن الجاهزة المصممة لتحمل حرارة السعودية وتُركّب بسرعة في أي موقع.",
    description:
      "نصنع هياكل فولاذية معزولة جاهزة للكهرباء والتكييف، لتكون قاعدة لكل الحلول مثل المكاتب والمساكن ودورات المياه والمستودعات بدون انتظار البناء التقليدي.",
    highlights: [
      "هياكل فولاذية معزولة بسندويتش بانل",
      "تصميمات جاهزة للتكييف مع حساب الأحمال الحرارية",
      "تشطيبات وميكانيكا وكهرباء وسباكة جاهزة للتشغيل",
      "تسليم سريع مع الرفع والتركيب في الموقع",
    ],
    gallery: [portacabin1, portacabin2, portacabin3, portacabin5, portacabin9, portacabin7],
    heroAlt: "أسطول كبائن برتا جاهزة من ابن العرب جاهز للنقل داخل السعودية",
    whatsappMessage: "مرحباً، أود الاستفسار عن كبائن برتا الجاهزة في السعودية.",
    contentSections: [
      {
        heading: "ما هي كبائن برتا؟",
        body: [
          "كبائن برتا هي مبانٍ معيارية نصنعها في جدة بهياكل فولاذية معزولة، جاهزة للرفع والتوصيل فور الوصول إلى الرياض أو الدمام أو نيوم. يتم تجهيزها بالكهرباء والتكييف لضمان بيئة مريحة بدون انتظار البناء التقليدي.",
          "كونها منصة أساسية، يمكن تخصيصها كـ <a href=\"/services/portable-site-offices\">مكاتب مواقع محمولة</a> أو <a href=\"/services/portable-restrooms\">دورات مياه محمولة</a> أو <a href=\"/services/portable-warehouse\">مستودعات محمولة</a> ضمن نفس الغلاف المتين، مما يسهل الصيانة وإعادة التوزيع لاحقاً.",
        ],
      },
      {
        heading: "الاستخدامات والتطبيقات",
        body: [
          "يستخدمها المقاولون كمراكز قيادة، ومساكن مؤقتة، ووحدات صحية، أو غرف عزل طبي. كما نوفر <a href=\"/services/portable-houses\">بيوتاً محمولة</a> للعيش في المواقع البعيدة، و<a href=\"/services/portable-labor-camps\">معسكرات عمال</a>، و<a href=\"/services/portable-storage\">تخزيناً محمولاً</a> للأدوات وقطع الغيار.",
          "تتوافق التصاميم مع أبعاد النقل والحرارة العالية في المملكة، مع ممرات مظللة ومسارات خدمات منظمة تقلل التكاليف التشغيلية وتسهل إدارة المرافق.",
        ],
      },
      {
        heading: "القطاعات التي نخدمها",
        body: [
          "نخدم المقاولين، النفط والغاز، اللوجستيات، المشاريع الدفاعية، ومشاريع المدن الضخمة. نوفر كبائن صلاة و<a href=\"/services/portable-mosques\">مساجد محمولة</a> بتشطيبات مهيأة للوضوء، إضافة إلى أجنحة إدارية مع تمديدات بيانات جاهزة.",
        ],
      },
      {
        heading: "خيارات التخصيص",
        body: [
          "أحجام مختلفة، كبائن مزدوجة أو متكدسة، شرفات مظللة، ومنحدرات وصول. التشطيبات تشمل عزل صوتي، أرضيات مقاومة للانزلاق، إنارة LED، وعدادات ذكية.",
          "نربط الكبائن بوحدات <a href=\"/services/portable-canteen\">مطابخ ميدانية</a> و<a href=\"/services/portable-bathrooms\">حمامات محمولة</a> و<a href=\"/services/portable-pantry\">بانتري</a> لإنشاء مجمعات متكاملة مع صرف صحي منظم وجدران مقاومة للحريق عند الحاجة.",
        ],
      },
      {
        heading: "لماذا ابن العرب",
        body: [
          "تصنيع محلي مع نقاط تفتيش جودة وفحوصات لحام وكثافة عزل قبل الشحن. ندير خطة الرفع، تسوية الموقع، والتشغيل حتى تصبح الكابينة جاهزة للاستخدام مباشرة.",
          "فريق الصيانة في السعودية يقدم زيارات دورية وقطع غيار ودعم إعادة التوزيع. نوثق المخططات وأرقام الأصول لتبقى عمليات النقل المستقبلية سريعة ومتوافقة.",
        ],
      },
    ],
    faqs: [
      {
        question: "ما هي المقاسات المتاحة لكبائن برتا؟",
        answer:
          "نوفر كبائن مفردة ومزدوجة وقابلة للتكديس بمقاسات شائعة مثل 3x6م و4x8م، مع إمكانية التنفيذ بمقاس مخصص ضمن حدود النقل والرفع في السعودية.",
      },
      {
        question: "كم يستغرق التسليم والتركيب؟",
        answer:
          "يمكن تسليم الكبائن القياسية خلال أيام من اعتماد الرسومات. ندير تصاريح النقل والرفع والتركيب لتكون جاهزة بالتغذية والتكييف في اليوم الأول.",
      },
      {
        question: "هل العزل مناسب لحرارة السعودية؟",
        answer:
          "نستخدم سندويتش بانل مع حساب أحمال التكييف، وتمديدات جاهزة، وخيارات تظليل للحفاظ على كفاءة التبريد في جدة والرياض ونيوم والمناطق الصحراوية.",
      },
      {
        question: "هل يمكن إضافة مطابخ أو دورات مياه؟",
        answer:
          "نعم، يمكن دمج دورات مياه أو مطابخ، أو ربط الكابينة بـ <a href=\"/services/portable-restrooms\">دورات مياه محمولة</a> و<a href=\"/services/portable-canteen\">مطابخ ميدانية</a> وفق الحاجة.",
      },
      {
        question: "هل يمكن نقل الكبائن أو توسيعها لاحقاً؟",
        answer:
          "الكبائن مصممة للنقل المتكرر، ويمكننا فكها وإعادة تركيبها أو إضافة وحدات جديدة للتخزين أو السكن أو المكاتب مع توسع المشروع.",
      },
    ],
    relatedSlugs: [
      "portable-site-offices",
      "portable-houses",
      "portable-restrooms",
      "portable-warehouse",
      "portable-storage",
    ],
    metaTitle: "كبائن برتا جاهزة السعودية | ابن العرب للكرفانات",
    metaDescription:
      "كبائن برتا معزولة مصنوعة في جدة، جاهزة للتكييف والكهرباء والتشغيل السريع كمكاتب أو سكن أو دورات مياه أو مستودعات في السعودية.",
  },
  {
    slug: "portable-houses",
    parent: "porta-cabin",
    name: "بيوت محمولة",
    intro: "مساكن جاهزة مريحة تُسلّم سريعة للموظفين أو العائلات أو الزوار في المواقع البعيدة.",
    description:
      "بيوت معزولة بتمديدات تكييف وسباكة وتشطيبات سكنية، تُركّب خلال أيام مع إمكانية تخصيص الغرف والمطابخ والحمامات حسب الحاجة.",
    highlights: [
      "توزيعات مرنة لغرف النوم والمعيشة والتخزين",
      "تمديدات جاهزة للتكييف وتحكم في الحرارة",
      "أرضيات متينة وتشطيبات سهلة التنظيف",
      "خيارات مطبخ وحمام وخزائن متكاملة",
    ],
    gallery: [portacabin1, portacabin2, portacabin3, portacabin10],
    heroAlt: "منزل محمول بمدخل مظلل وتشطيب معزول من ابن العرب",
    whatsappMessage: "مرحباً، أود الاستفسار عن بيوت محمولة في السعودية.",
    contentSections: [
      {
        heading: "ما هي البيوت المحمولة؟",
        body: [
          "هي مساكن جاهزة تُصنع خارج الموقع وتصل جاهزة للتوصيل خلال أيام. نعتمد جدراناً معزولة، وأبواباً ونوافذ سكنية، وتمديدات تكييف لتبقى الغرف مريحة في حرارة الصيف.",
          "يمكن إعدادها كاستوديو أو كعدة غرف نوم. نربطها بوحدات <a href=\"/services/portable-pantry\">بانتري</a> أو <a href=\"/services/portable-bathrooms\">حمامات محمولة</a> وشرفات مظللة لتكوين مجمع سكني متكامل.",
        ],
      },
      {
        heading: "الاستخدامات والتطبيقات",
        body: [
          "مناسبة لسكن المدراء والمهندسين أو كحل مؤقت للعائلات أثناء التجديد أو الطوارئ أو للموسمية في المنتجعات والمشاريع الكبرى.",
          "غالباً نربطها مع <a href=\"/services/portable-site-offices\">مكاتب مواقع</a> و<a href=\"/services/portable-labor-camps\">معسكرات عمال</a> ضمن نفس الشبكات للخدمات لتبقى الإدارة والفِرق في محيط واحد.",
        ],
      },
      {
        heading: "القطاعات التي نخدمها",
        body: [
          "الإنشاءات، الطاقة، اللوجستيات، السياحة، والجهات الحكومية تستفيد من سرعة التركيب مع التزام معايير HSE في نيوم والبحر الأحمر والمناطق الصناعية.",
        ],
      },
      {
        heading: "خيارات التخصيص",
        body: [
          "اختيار عدد الغرف، خزائن الملابس، عزل صوتي، وأحجام مكيفات. المطابخ متاحة بسطوح مضادة للبكتيريا، شفاطات، ونقاط أجهزة. الحمامات بأرضيات مانعة للانزلاق وتجهيزات ضغط عالي.",
          "الواجهات يمكن تزويدها بمظلات، شاشات خصوصية، منحدرات، أو قواعد مرتفعة للحماية من الأمطار. نوفر عدادات ذكية وتمديدات جاهزة للطاقة الشمسية.",
        ],
      },
      {
        heading: "لماذا ابن العرب",
        body: [
          "تصنيع محلي في جدة مع توثيق مخططات وأحمال ميكانيكية وكهربائية لتسهيل الموافقات البلدية وإدارة المرافق.",
          "نقوم بالنقل والرفع والتسوية والتشغيل، ونقدم ضماناً ودعماً للتوسعة أو إعادة التوزيع عند تغير أعداد الساكنين.",
        ],
      },
    ],
    faqs: [
      {
        question: "ما المخططات المتاحة للمساحات؟",
        answer:
          "ننفذ استوديو وحتى أربع غرف نوم أو وحدات مزدوجة عريضة، مع تعديل الفواصل والتخزين حسب العدد والمساحة المتاحة.",
      },
      {
        question: "هل تشمل المطابخ والحمامات؟",
        answer:
          "نعم يمكن دمجها أو استخدام وحدات <a href=\"/services/portable-bathrooms\">حمامات</a> و<a href=\"/services/portable-pantry\">بانتري</a> مستقلة للمعسكرات الكبيرة.",
      },
      {
        question: "كيف يتم العزل للحرارة العالية؟",
        answer:
          "نستخدم ألواح عزل، أسقف عاكسة، مظلات، وتمديدات كهرباء مهيأة للتكييف للحفاظ على الكفاءة في الصيف والرطوبة.",
      },
      {
        question: "هل يمكن نقل البيوت لاحقاً؟",
        answer:
          "مصممة للرفع والتركيب مجدداً مع حماية التشطيبات أثناء النقل، ويمكن التسوية على قواعد جديدة بسرعة.",
      },
      {
        question: "هل توفرون فرش كامل؟",
        answer:
          "يمكننا توفير حزَم فرش تشمل خزائن وأسِرّة وستائر تعتيم لتسليم السكن جاهزاً للاستخدام.",
      },
    ],
    relatedSlugs: ["portable-site-offices", "portable-labor-camps", "portable-bathrooms", "portable-pantry"],
    metaTitle: "بيوت محمولة في السعودية | ابن العرب",
    metaDescription:
      "بيوت محمولة معزولة ومجهزة للتكييف والمطابخ والحمامات، تُركّب سريعاً لسكن الموظفين أو العائلات في المواقع البعيدة داخل السعودية.",
  },
  {
    slug: "portable-site-offices",
    parent: "porta-cabin",
    name: "مكاتب مواقع محمولة",
    intro: "مكاتب جاهزة معزولة ومجهزة بالكهرباء والبيانات لتمكين الفرق من العمل منذ اليوم الأول.",
    description:
      "نوفر مكاتب ميدانية مزودة بتمديدات كهرباء وإنترنت وتكييف، مع أبواب ونوافذ آمنة وتصميمات مريحة للاجتماعات والإدارة في قلب الموقع.",
    highlights: [
      "تمديدات كهرباء وبيانات ودوائر كاميرات جاهزة",
      "عزل حراري وصوتي مع تحجيم مناسب للتكييف",
      "مساحات عمل وتخزين واجتماعات مدروسة",
      "أبواب ونوافذ مؤمنة بزجاج مقاوم للكسر",
    ],
    gallery: [portacabin2, portacabin3, portacabin1, portacabin11],
    heroAlt: "مكتب موقع محمول بواجهات زجاجية ومدخل آمن",
    whatsappMessage: "مرحباً، أود الاستفسار عن مكاتب مواقع محمولة في السعودية.",
    contentSections: [
      {
        heading: "ما هي مكاتب المواقع المحمولة؟",
        body: [
          "هي مكاتب معيارية معزولة تضع الإدارة قريباً من العمل مع راحة كاملة. نعالج الصوت ونجهز القنوات الكهربائية والبيانات والتكييف لتبقى الاجتماعات واضحة حتى بجوار المعدات الثقيلة.",
          "يمكن ربطها بـ <a href=\"/services/portable-warehouse\">مستودعات محمولة</a> و<a href=\"/services/portable-security-units\">وحدات أمنية</a> و<a href=\"/services/portable-restrooms\">دورات مياه</a> لتشكيل مركز موقع متكامل.",
        ],
      },
      {
        heading: "الاستخدامات والتطبيقات",
        body: [
          "غرف إدارة المشاريع، قاعات مراجعة هندسية، مناطق توعية سلامة، أو استقبال العملاء. المكاتب المزدوجة تستوعب فرقاً متعددة، بينما الوحدات الصغيرة تناسب الحقول النائية.",
          "يمكن إضافة غرف اجتماعات أو <a href=\"/services/portable-pantry\">بانتري</a> أو مساحات تخزين داخل نفس الكابينة لتسهيل سير العمل.",
        ],
      },
      {
        heading: "القطاعات التي نخدمها",
        body: [
          "الإنشاءات، النفط والغاز، الموانئ، البنية التحتية، والفعاليات تحتاج مكاتب سريعة ومرنة. نوفر حلول وصول لذوي الإعاقة ومناطق انتظار للزوار عند الحاجة.",
        ],
      },
      {
        heading: "خيارات التخصيص",
        body: [
          "مخططات مفتوحة أو غرف مقسمة مع سبورة وشاشات ذكية وأثاث مريح. دوائر كهرباء مجهزة للمكيفات وأجهزة الحاسب والطابعات مع حماية من الحمل الزائد.",
          "يمكن إضافة مظلات وممرات مظللة مرتبطة بـ <a href=\"/services/portable-restrooms\">دورات المياه</a> أو <a href=\"/services/portable-security-offices\">مكاتب الأمن</a>، مع مخططات جاهزة لاعتماد الدفاع المدني والمرافق.",
        ],
      },
      {
        heading: "لماذا ابن العرب",
        body: [
          "تصنيع محلي مع اختبارات توزيع الكهرباء والإضاءة ومحاذاة الأبواب والنوافذ قبل الشحن. نقدم رسومات مختومة لتسريع الموافقات.",
          "فريقنا يدير الرفع والتسوية والتشغيل، ثم يقدم خدمات تعديل أو نقل أو صيانة دورية في مختلف مناطق المملكة.",
        ],
      },
    ],
    faqs: [
      {
        question: "هل تشمل الأثاث وتجهيزات تقنية المعلومات؟",
        answer:
          "نستطيع توفير مكاتب، طاولات اجتماعات، تخزين، وإدارة كابلات، مع قنوات بيانات ونقاط كاميرات جاهزة لتسريع تركيب الشبكة.",
      },
      {
        question: "ما مستوى الأمان في المكاتب؟",
        answer:
          "أبواب معززة، نوافذ قابلة للقفل، مسامير مقاومة للعبث، وخيار أفلام أمان. يمكن ربط المكتب بـ <a href=\"/services/portable-security-units\">وحدات الأمن</a> للتحكم في الدخول.",
      },
      {
        question: "هل يمكن إضافة غرف اجتماعات؟",
        answer:
          "نعم، نوفر وحدات مزدوجة أو متصلة لإنشاء قاعات اجتماعات وتدريب مع معالجة صوتية وتجهيزات صوت وصورة.",
      },
      {
        question: "كيف يتم تهيئة الوصول للزوار؟",
        answer:
          "نوفر منحدرات وأبواب أوسع ودورات مياه مهيأة، ويمكن فصل مسار الزوار عن فريق العمل لزيادة الأمان.",
      },
      {
        question: "ما سرعة التسليم؟",
        answer:
          "التصاميم القياسية تُسلّم خلال أيام مع تركيب وتشغيل كامل. المشاريع المخصصة تُدار بخطة زمنية واضحة وتحديثات مرحلية.",
      },
    ],
    relatedSlugs: ["portable-warehouse", "portable-security-units", "portable-pantry", "portable-restrooms"],
    metaTitle: "مكاتب مواقع محمولة السعودية | ابن العرب",
    metaDescription:
      "مكاتب مواقع معزولة جاهزة للكهرباء والبيانات والتكييف مع تركيب سريع وأمان عالٍ لمشاريع الإنشاء والطاقة في السعودية.",
  },
  {
    slug: "portable-labor-camps",
    parent: "porta-cabin",
    name: "معسكرات عمال محمولة",
    intro: "سكن عمالي مريح وصحي بمستوى تحمل عالٍ للبيئات الصعبة في السعودية.",
    description:
      "نجهز وحدات نوم، مطاعم، مناطق ترفيه، ودورات مياه داخل مجمع معياري متكامل مع تهوية وعزل مناسب وكفاءة في التنظيف.",
    highlights: [
      "غرف نوم مهواة بأرضيات مانعة للانزلاق",
      "توزيعات مرنة للسرائر والخزائن وغرف المشرفين",
      "بلوكات صحية متكاملة بدُشات ودورات مياه",
      "ممرات مظللة وتشطيبات سهلة التنظيف",
    ],
    gallery: [portacabin2, portacabin1, portacabin3, portacabin9],
    heroAlt: "معسكر عمال محمول مع ممرات مظللة",
    whatsappMessage: "مرحباً، أود الاستفسار عن معسكرات العمال المحمولة في السعودية.",
    contentSections: [
      {
        heading: "ما هي معسكرات العمال المحمولة؟",
        body: [
          "هي وحدات معيارية تربط غرف النوم والبلوكات الصحية والمطاعم والإدارة في مجمع واحد قابل للنقل. العزل والتهوية والتشطيبات المتينة تجعل التنظيف اليومي سهلاً وتحافظ على الراحة.",
          "نصمم الحركة للفصل بين مسارات الخدمة والنظافة، ونضيف مظلات وربط مع <a href=\"/services/portable-canteen\">مطابخ ميدانية</a> و<a href=\"/services/portable-restrooms\">دورات مياه</a> و<a href=\"/services/portable-security-units\">أمن</a> لضبط الدخول.",
        ],
      },
      {
        heading: "الاستخدامات والتطبيقات",
        body: [
          "مثالية لفرق البناء، الصيانة الدورية، الحفر البعيد، أو الطوارئ. يمكن إضافة غرف إشراف، إسعاف، أو ترفيه لرفع معنويات العمال.",
          "نربط أحياناً غرف النوم بـ <a href=\"/services/portable-houses\">بيوت محمولة</a> للمديرين و<a href=\"/services/portable-storage\">تخزين</a> لمعدات السلامة ضمن نفس الموقع.",
        ],
      },
      {
        heading: "القطاعات التي نخدمها",
        body: [
          "الإنشاءات، النفط والغاز، التعدين، المرافق، والمشاريع الضخمة تحتاج إلى سكن سريع وآمن مع التزام بقواعد الدفاع المدني والحرارة العالية.",
        ],
      },
      {
        heading: "خيارات التخصيص",
        body: [
          "تحديد عدد الأسرة، حجم الخزائن، غرف المشرفين، وغرف الصلاة. البلوكات الصحية بأرضيات غير قابلة للانزلاق وفتحات خدمة لسهولة الصيانة. قاعات الطعام بتمديدات شفط وغسل أيدي.",
          "إضاءة محيطية، مسارات مياه رمادية، وعزل صوتي أو حراري إضافي للمواقع الساخنة أو المزدحمة.",
        ],
      },
      {
        heading: "لماذا ابن العرب",
        body: [
          "ندير النقل والرفع والتسوية لتشغيل المخيم بسرعة. نجهز مخططات كهرباء وميكانيكا ومخارج طوارئ ونقاط إطفاء لاعتمادات HSE.",
          "دعم ما بعد التسليم يشمل قطع غيار، تعديل التوزيعات، أو نقل المخيم بين مناطق السعودية مع أقل توقف ممكن.",
        ],
      },
    ],
    faqs: [
      {
        question: "ما السعة لكل وحدة نوم؟",
        answer:
          "نصمم من غرف لأربعة أشخاص إلى كثافات أعلى بحسب معايير السلامة والتهوية المطلوبة مع توفير خزائن ومساحات حركة كافية.",
      },
      {
        question: "هل تشمل بلوكات صحية ومطابخ؟",
        answer:
          "نعم، عادة نضيف <a href=\"/services/portable-restrooms\">دورات مياه</a> و<a href=\"/services/portable-bathrooms\">حمامات</a> و<a href=\"/services/portable-canteen\">مطابخ ميدانية</a> ضمن نفس المخطط.",
      },
      {
        question: "كيف يتم التبريد والتغذية؟",
        answer:
          "نحدد الأحمال الكهربائية للتكييف والإنارة والمراوح، مع إمكانية الربط بمولدات أو تمديدات شمسية مستقبلية حسب الموقع.",
      },
      {
        question: "هل يمكن التوسعة لاحقاً؟",
        answer:
          "نعم، الوحدات قابلة للربط مع كتل نوم إضافية أو مكاتب أو عيادات مع نمو القوى العاملة.",
      },
      {
        question: "ما متطلبات السلامة؟",
        answer:
          "نحدد المخارج والإضاءة الطارئة ونقاط الإطفاء بالتنسيق مع فريق HSE للمشروع لضمان الامتثال.",
      },
    ],
    relatedSlugs: ["portable-canteen", "portable-restrooms", "portable-bathrooms", "portable-houses"],
    metaTitle: "معسكرات عمال محمولة السعودية | ابن العرب",
    metaDescription:
      "معسكرات عمال معيارية بتهوية وعزل وممرات مظللة وبلوكات صحية متكاملة، مع تركيب سريع ودعم تشغيل للمشاريع في السعودية.",
  },
  {
    slug: "portable-mosques",
    parent: "porta-cabin",
    name: "مساجد محمولة",
    intro: "كبائن صلاة بمعالجات وضوء وتهوية مريحة تحافظ على الطهارة وسهولة الاستخدام.",
    description:
      "نوفر مساجد جاهزة بواجهات قابلة للغسل، اتجاه قبلة واضح، وتهوية وتكييف لضمان راحة المصلين في المواقع المؤقتة.",
    highlights: [
      "أرضيات وجدران مناسبة للوضوء مع تصريف مخفي",
      "تهوية وتكييف للحفاظ على جودة الهواء",
      "مساحة صلاة مفتوحة مع تحديد القبلة",
      "تركيب سريع وربط مباشر بالمرافق",
    ],
    gallery: [portacabin3, portacabin4, portacabin1],
    heroAlt: "مسجد محمول بمدخل مظلل وفتحات تهوية",
    whatsappMessage: "مرحباً، أود الاستفسار عن مساجد محمولة في السعودية.",
    contentSections: [
      {
        heading: "ما هي المساجد المحمولة؟",
        body: [
          "هي كبائن مخصصة للصلاة بتشطيبات قابلة للغسل، تحكم بالروائح، وتوجيه قبلة واضح. تُركّب بسرعة بجوار مرافق الموقع لضمان مكان عبادة مريح ومحترم.",
          "نضيف مناطق وضوء منفصلة، أماكن للأحذية، وتهوية مناسبة. غالباً توضع قرب <a href=\"/services/portable-labor-camps\">معسكرات العمال</a> و<a href=\"/services/portable-restrooms\">دورات المياه</a> و<a href=\"/services/portable-security-units\">نقاط الأمن</a> عند البوابات.",
        ],
      },
      {
        heading: "الاستخدامات والتطبيقات",
        body: [
          "مواقع البناء، الموانئ، الفعاليات، والمخيمات البعيدة تحتاج لمسجد سريع التجهيز. يمكن تكبير المساحة لصلاة الجمعة بإضافة مظلات خارجية.",
          "نوفر غرف إمام، تخزين للمصاحف، ومكبرات صوت خارجية مع حماية التمديدات من الغبار والرطوبة.",
        ],
      },
      {
        heading: "القطاعات التي نخدمها",
        body: [
          "القطاع الصناعي، الحكومي، المشاريع الضخمة، والفعاليات المؤقتة تعتمد على مساجد محمولة نظيفة وآمنة تلبي توقعات المصلين في السعودية.",
        ],
      },
      {
        heading: "خيارات التخصيص",
        body: [
          "أحجام قاعات الصلاة، تجهيزات وضوء، مراوح وعوادم، وأرضيات غير قابلة للانزلاق. يتم حساب قدرة التكييف لوقت الذروة.",
          "إضافات خارجية مثل مظلات، منحدرات، إضاءة وإرشادات، وعزل صوتي إذا كان المسجد بجوار معدات أو مولدات.",
        ],
      },
      {
        heading: "لماذا ابن العرب",
        body: [
          "ندرك متطلبات مواقع العمل للمساحات الدينية وننسق مع فرق السلامة لوضع المسجد بطريقة تسهل الوصول وتحفظ الخصوصية. نوصل المياه والصرف والكهرباء ونسلم الوحدة جاهزة.",
          "نقدم خدمات صيانة أو نقل أو توسعة عند زيادة الأعداد أو تغير مراحل المشروع.",
        ],
      },
    ],
    faqs: [
      {
        question: "هل تشمل منطقة وضوء منفصلة؟",
        answer: "نعم، نضيف تجهيزات وضوء بأرضيات قابلة للغسل وتصريف وتهوية للحفاظ على جفاف صالة الصلاة.",
      },
      {
        question: "كيف يتم ضبط القبلة؟",
        answer: "نحدد القبلة أثناء التركيب ونضع علامات داخلية، ونعدل الاتجاه عند نقل المسجد لموقع جديد.",
      },
      {
        question: "هل التهوية والتكييف متوفرة؟",
        answer: "نوفر عزل وتكييف مع مراوح شفط واختياري منقيات هواء للحفاظ على جودة الهواء في أوقات الذروة.",
      },
      {
        question: "هل يمكن توسيع المسجد؟",
        answer: "يمكن ربط وحدات إضافية أو إضافة مظلات خارجية لاستيعاب أعداد أكبر مع تنظيم الحركة.",
      },
      {
        question: "كم يستغرق التركيب؟",
        answer: "غالباً في نفس اليوم عند توفر الخدمات. ندير الرفع والتسوية والتشغيل لتسليم مساحة جاهزة للصلاة فوراً.",
      },
    ],
    relatedSlugs: ["portable-labor-camps", "portable-restrooms", "portable-security-units"],
    metaTitle: "مساجد محمولة السعودية | ابن العرب",
    metaDescription:
      "مساجد محمولة بتهيئة وضوء وتهوية وتكييف وتوجيه قبلة واضح، مع تركيب سريع لتلبية احتياجات الصلاة في مواقع العمل والفعاليات بالسعودية.",
  },
  {
    slug: "portable-storage",
    parent: "porta-cabin",
    name: "تخزين محمول",
    intro: "كبائن تخزين آمنة للأدوات والمواد والمعدات الحساسة في مواقع العمل.",
    description:
      "هياكل فولاذية مقواة بأبواب مؤمنة وفتحات تهوية تحمي المواد من الحرارة والغبار والسرقة مع سهولة النقل وإعادة التموضع.",
    highlights: [
      "أبواب فولاذية مقواة وأقفال متعددة النقاط",
      "فتحات تهوية للحد من الحرارة والرطوبة",
      "جاهزة للرفوف والرافعات الشوكية أو الرفع بالونش",
      "تشطيبات مقاومة للظروف الجوية في المملكة",
    ],
    gallery: [portacabin2, portacabin2, portacabin3, portacabin7],
    heroAlt: "كابينة تخزين محمولة بباب فولاذي وفتحات تهوية",
    whatsappMessage: "مرحباً، أود الاستفسار عن كبائن التخزين المحمولة في السعودية.",
    contentSections: [
      {
        heading: "ما هو التخزين المحمول؟",
        body: [
          "كابينة تخزين معزولة وآمنة للأدوات والمواد وقطع الغيار. نقوي الأبواب والمفصلات ونوفر تهوية لحماية الأصول من حرارة وغبار السعودية.",
          "يمكن نقلها بسهولة باستخدام الرافعات أو الونش، وغالباً توضع بجوار <a href=\"/services/portable-site-offices\">مكاتب المواقع</a> و<a href=\"/services/portable-warehouse\">مستودعات محمولة</a> و<a href=\"/services/portable-security-units\">وحدات الأمن</a> لضبط الوصول.",
        ],
      },
      {
        heading: "الاستخدامات والتطبيقات",
        body: [
          "تخزين أدوات وقطع غيار ومواد حساسة أو معدات عالية القيمة. يمكن تجهيزها برفوف وأقفاص وطاولات صيانة لتصبح ورشة خفيفة.",
          "تفيد أيضاً في الفعاليات أو الإغاثة أو العيادات المتنقلة لتخزين مستلزمات تحتاج حماية من الحرارة والرطوبة، بجوار <a href=\"/services/portable-restrooms\">دورات مياه</a> أو كبائن إدارية.",
        ],
      },
      {
        heading: "القطاعات التي نخدمها",
        body: [
          "الإنشاءات، اللوجستيات، النفط والغاز، المرافق، والتصنيع تعتمد على التخزين المحمول لتقليل الفاقد وتسريع الوصول للمواد في الموانئ أو المواقع النائية.",
        ],
      },
      {
        heading: "خيارات التخصيص",
        body: [
          "إضافة رفوف، أرضيات مانعة للانزلاق، مراوح، عزل إضافي، وإنارة LED. للمواد الحساسة يمكن تزويدها بتكييف أو شفاطات مع فتحات لوفر وتصريف انسكابات.",
          "خيارات أبواب رولات أو مزدوجة أو شبك أمني، مع إنارة خارجية وحوامل كاميرات للمراقبة الليلية.",
        ],
      },
      {
        heading: "لماذا ابن العرب",
        body: [
          "نبني كبائن التخزين بنفس معايير المكاتب والسكن لتبقى مستقرة وآمنة بعد نقلها عدة مرات. نوفر تعليمات تحميل وربط تثبيت واضحة.",
          "نقوم بالتسليم والتسوية والتثبيت، ثم ندعم فرق الصيانة بالنقل أو الصيانة في أي منطقة داخل المملكة.",
        ],
      },
    ],
    faqs: [
      {
        question: "هل يمكن إضافة رفوف ودواليب؟",
        answer: "نعم، نركب رفوفاً ثقيلة وألواح تعليق وأسطح عمل حسب أحمال المواد ومتطلباتكم.",
      },
      {
        question: "كيف نتحكم في الحرارة والرطوبة؟",
        answer:
          "نضيف عزل وفتحات تهوية ومراوح أو تكييف حسب حساسية المواد، مع أرضيات مانعة لتسرب الرطوبة أو الانسكابات.",
      },
      {
        question: "هل يسهل نقل الوحدات؟",
        answer:
          "نعم، مزودة بفتحات رافعة أو نقاط رفع لسهولة التحريك دون إضرار بالبنية أو التشطيبات.",
      },
      {
        question: "ما خيارات الأمان؟",
        answer:
          "أقفال متعددة، أبواب مقواة، شبك داخلي، حوامل كاميرا، وإنارة خارجية لمنع السرقة وضبط الوصول.",
      },
      {
        question: "هل يمكن دمجها مع كبائن أخرى؟",
        answer:
          "يمكن وضعها بجوار <a href=\"/services/portable-site-offices\">مكاتب المواقع</a> أو <a href=\"/services/portable-security-units\">الأمن</a> لمراقبة الدخول.",
      },
    ],
    relatedSlugs: ["portable-warehouse", "portable-site-offices", "portable-security-units"],
    metaTitle: "تخزين محمول السعودية | ابن العرب",
    metaDescription:
      "كبائن تخزين محمولة بأبواب مؤمنة وتهوية وعزل وإمكانية إضافة رفوف، مع نقل سريع وحماية للمواد والمعدات في مواقع السعودية.",
  },
  {
    slug: "portable-restrooms",
    parent: "porta-cabin",
    name: "دورات مياه محمولة",
    intro: "كبائن صحية مجهزة بالسباكة والتهوية والتشطيبات الصحية لتعمل فوراً.",
    description:
      "أرضيات مانعة للانزلاق، تهوية مناسبة، وتشطيبات سهلة التنظيف لحماية صحة العاملين والحفاظ على نظافة الموقع.",
    highlights: [
      "تجهيزات صحية جاهزة للوصل مع لوحات خدمة",
      "تهوية وتحكم بالروائح ملائمة لحرارة المملكة",
      "أرضيات وجدران صحية سهلة الغسل",
      "توزيعات منفصلة للرجال والنساء أو VIP",
    ],
    gallery: [portacabin4, portacabin2, portacabin3, portacabin1],
    heroAlt: "كابينة دورات مياه محمولة بتهوية وتشطيبات نظيفة",
    whatsappMessage: "مرحباً، أود الاستفسار عن دورات المياه المحمولة في السعودية.",
    contentSections: [
      {
        heading: "ما هي دورات المياه المحمولة؟",
        body: [
          "هي كبائن صحية معيارية توفر مراحيض وأحواض وتهوية فعالة مع ربط سريع بالخدمات أو خزانات مؤقتة، للحفاظ على الامتثال والسلامة في الموقع.",
          "نوفر وحدات فردية أو تقسيم رجال/نساء أو VIP بتشطيبات محسنة. غالباً تُستخدم بجوار <a href=\"/services/portable-labor-camps\">معسكرات العمال</a> و<a href=\"/services/portable-site-offices\">مكاتب المواقع</a> و<a href=\"/services/portable-canteen\">مطابخ ميدانية</a>.",
        ],
      },
      {
        heading: "الاستخدامات والتطبيقات",
        body: [
          "مواقع البناء، الفعاليات، ساحات اللوجستيات، والاستجابة للطوارئ. نختار تجهيزات مقاومة للتخريب مع لوحات خدمة لسهولة الصيانة اليومية.",
          "للمناطق التنفيذية أو زيارات العملاء نوفر تشطيبات فاخرة وصنابير لا تلامسية وتكييف للحفاظ على تجربة راقية.",
        ],
      },
      {
        heading: "القطاعات التي نخدمها",
        body: [
          "الإنشاءات، النفط والغاز، الموانئ، الفعاليات، والجهات الحكومية تعتمد على دورات المياه المحمولة للحفاظ على النظافة والامتثال في الرطوبة والحرارة السعودية.",
        ],
      },
      {
        heading: "خيارات التخصيص",
        body: [
          "عدد التجهيزات، فواصل الخصوصية، مراوح وعوادم، وحلول مكافحة الروائح. أرضيات مانعة للانزلاق، كلادينغ صحي، وإنارة LED لتسهيل التنظيف.",
          "يمكن إضافة مغاسل خارجية، تصريف مياه رمادية، منحدرات وإرشادات. كما نوفر نسخ دش كاملة تحت فئة <a href=\"/services/portable-bathrooms\">حمامات محمولة</a>.",
        ],
      },
      {
        heading: "لماذا ابن العرب",
        body: [
          "نختبر السباكة والتهوية والكهرباء قبل التسليم. الألواح محكمة لتقليل وقت التنظيف وتكاليف المواد.",
          "نتولى التركيب والتسوية والربط، ثم ندعم فرق التشغيل بقطع غيار وحلول روائح وخدمة نقل عند تغيير مواقع العمل.",
        ],
      },
    ],
    faqs: [
      {
        question: "هل تحتاج لوصلات صرف قائمة؟",
        answer: "يمكن ربطها بشبكة الصرف أو خزانات مؤقتة مع نقاط دخول وخروج واضحة ولوحات خدمة سهلة الوصول.",
      },
      {
        question: "هل يمكن إضافة دُش؟",
        answer:
          "نعم، اختر <a href=\"/services/portable-bathrooms\">حمامات محمولة</a> بدُش وتهوية ومساحات تبديل لدعم الرفاهية الكاملة.",
      },
      {
        question: "كيف يتم التحكم بالروائح؟",
        answer:
          "مراوح شفط، عوادم، مصائد روائح محكمة، ومواد امتصاص مصممة للعمل في الحرارة العالية للحفاظ على الهواء نقياً.",
      },
      {
        question: "هل توجد تقسيمات نسائية أو VIP؟",
        answer:
          "نعم، نصمم تقسيم رجال/نساء أو وحدات خاصة بالنساء أو VIP مع تجهيزات محسنة ومرايا وتكييف.",
      },
      {
        question: "ما سرعة التركيب؟",
        answer:
          "في أغلب الحالات تُركّب وتُشغّل في نفس اليوم عند توفر الخدمات. ندير الرفع والتسوية لضمان جاهزية فورية.",
      },
    ],
    relatedSlugs: ["portable-bathrooms", "portable-canteen", "portable-site-offices"],
    metaTitle: "دورات مياه محمولة السعودية | ابن العرب",
    metaDescription:
      "دورات مياه محمولة بأرضيات مانعة للانزلاق وتهوية وتحكم بالروائح، مع خيارات رجال/نساء وVIP وتركيب سريع في مواقع العمل والفعاليات بالسعودية.",
  },
  {
    slug: "portable-warehouse",
    parent: "porta-cabin",
    name: "مستودعات محمولة",
    intro: "مساحات تخزين معيارية واسعة لحماية المواد والمعدات بالقرب من العمليات.",
    description:
      "مستودعات محمولة بإطارات فولاذية وأبواب آمنة وتهوية وأرضيات قوية لتخزين البضائع وقطع الغيار وتجهيزات العمل بسرعة.",
    highlights: [
      "مساحة واسعة قابلة للتجهيز بالرفوف",
      "أبواب رولات أو فولاذية مع تهوية",
      "أرضيات تحمل الأحمال والأدوات",
      "جاهزة للإنارة والتهوية أو التكييف",
    ],
    gallery: [portacabin7, portacabin4, portacabin3, portacabin1],
    heroAlt: "مستودع محمول بباب رولات وفتحات تهوية",
    whatsappMessage: "مرحباً، أود الاستفسار عن مستودعات محمولة في السعودية.",
    contentSections: [
      {
        heading: "ما هو المستودع المحمول؟",
        body: [
          "هو قاعة تخزين معيارية بهيكل فولاذي وعزل وأبواب آمنة لتخزين البضائع قرب موقع العمل. يركب أسرع من البناء التقليدي ويمكن نقله عند تغير اللوجستيات.",
          "نصمم نقاط تحميل وتهوية وإنارة حسب نوع المواد. غالباً يوضع بجوار <a href=\"/services/portable-storage\">تخزين محمول</a> و<a href=\"/services/portable-site-offices\">مكاتب المواقع</a> و<a href=\"/services/portable-security-units\">الأمن</a> لتنظيم الحركة.",
        ],
      },
      {
        heading: "الاستخدامات والتطبيقات",
        body: [
          "تخزين قطع الغيار وأدوات الصيانة والمواد أو المنتجات الجاهزة. يمكن استخدامه للتجميع الخفيف أو التعبئة مع مخططات رفوف ومساحات عمل محددة.",
          "الفعاليات والإغاثة تستفيد من مستودعات تركيب سريع مع إضافة <a href=\"/services/portable-restrooms\">دورات مياه</a> ووحدات إدارية قريبة.",
        ],
      },
      {
        heading: "القطاعات التي نخدمها",
        body: [
          "الإنشاءات، النفط والغاز، اللوجستيات، التصنيع، والأشغال العامة تستخدم المستودعات المحمولة لتقليل التلف والزمن الضائع. نصممها لمقاومة الغبار والحرارة والرطوبة الساحلية.",
        ],
      },
      {
        heading: "خيارات التخصيص",
        body: [
          "أبواب رولات أو مزدوجة، إضاءة عالية، تهوية أو تكييف حسب نوع التخزين. يمكن تقوية الأرضية للرافعات والفوركلفت.",
          "خيارات أمن مثل حوامل كاميرا، تجهيزات تحكم دخول، وإنارة محيطية. نوفر مخططات رفوف وتوزيع كهرباء لتسهيل التركيب.",
        ],
      },
      {
        heading: "لماذا ابن العرب",
        body: [
          "تصنيع محلي مع فحص الهيكل والعزل ومحاذاة الأبواب قبل الشحن. ندير التصاريح والنقل والرفع للمقاسات العريضة.",
          "ندعمك بنقل أو توسعة المستودع مع تغير footprint اللوجستي في مختلف مناطق المملكة مع تحديث الوثائق وأحمال التشغيل.",
        ],
      },
    ],
    faqs: [
      {
        question: "ما خيارات الدخول المتاحة؟",
        answer:
          "أبواب رولات أو أبواب مزدوجة أو أبواب أفراد جانبية. يمكن تجهيز مدخل على مستوى الرصيف أو منحدرات حسب ساحة التخزين.",
      },
      {
        question: "هل يمكن تكييف المستودع؟",
        answer:
          "نعم، يتوفر عزل ومراوح وتكييف أو تبريد تبخيري حسب طبيعة البضائع وأهداف الطاقة.",
      },
      {
        question: "هل يشمل الرفوف؟",
        answer:
          "نوفر مخططات ونركب رفوف أو حوامل حسب الأحمال والارتفاعات ومعدات الرفع التي تستخدمها.",
      },
      {
        question: "ما قوة الأرضية؟",
        answer:
          "الأرضيات مصممة لتحمل منصات ومعدات، ويمكن زيادتها للسعات الثقيلة أو مقاومة المواد الكيميائية.",
      },
      {
        question: "هل يمكن التمديد؟",
        answer:
          "يمكن ربط الوحدات جنباً إلى جنب أو على التوالي، وإضافة <a href=\"/services/portable-storage\">تخزين محمول</a> للمواد المميزة.",
      },
    ],
    relatedSlugs: ["portable-storage", "portable-site-offices", "portable-security-units"],
    metaTitle: "مستودعات محمولة السعودية | ابن العرب",
    metaDescription:
      "مستودعات محمولة بتهوية وأبواب آمنة وأرضيات تتحمل الأحمال مع تركيب سريع وإمكانية توسعة أو نقل في مشاريع السعودية.",
  },
  {
    slug: "portable-log-cabin",
    parent: "porta-cabin",
    name: "كبائن خشبية محمولة",
    intro: "تصميم خشبي دافئ لمشاريع الضيافة والمتاجر والمكاتب المميزة مع تركيب سريع.",
    description:
      "كبائن بواجهة خشبية فاخرة على هيكل فولاذي معزول، جاهزة للخدمات والتكييف لتقديم تجربة ضيافة أو تجارية جذابة.",
    highlights: [
      "ألواح معزولة بواجهة خشبية أنيقة",
      "جاهزية كهرباء وتكييف بتمديدات مخفية",
      "تشطيبات داخلية مريحة تناسب الضيافة أو البيع بالتجزئة",
      "تركيب سريع دون التضحية بالمظهر",
    ],
    gallery: [portacabin3, portacabin1, portacabin4, portacabin10],
    heroAlt: "كابينة خشبية محمولة بواجهة زجاجية ومدخل أنيق",
    whatsappMessage: "مرحباً، أود الاستفسار عن كبائن خشبية محمولة في السعودية.",
    contentSections: [
      {
        heading: "ما هي الكابينة الخشبية المحمولة؟",
        body: [
          "هي كابينة ذات شكل خشبي فاخر مع هيكل فولاذي معزول وتمديدات مخفية. تمنحك شكل الضيافة أو البيع بالتجزئة مع سرعة التركيب والقدرة على النقل لاحقاً.",
          "شائعة ككافيهات، أكشاك بيع، مكاتب تسويق، أو أجنحة ضيافة. يمكن ربطها بـ <a href=\"/services/portable-houses\">بيوت محمولة</a> أو <a href=\"/services/portable-canteen\">مطابخ ميدانية</a> أو <a href=\"/services/portable-pantry\">بانتري</a> لاستكمال التجربة.",
        ],
      },
      {
        heading: "الاستخدامات والتطبيقات",
        body: [
          "أجنحة ضيافة، أكشاك قهوة، نقاط تذاكر، أو مكاتب راقية على البحيرات والمهرجانات. تدعم التكييف والإنارة والصوت لخلق تجربة علامة تجارية.",
          "يمكن تعديل الواجهات والأسقف الخارجية والمظلات لتناسب المنتجعات أو الحدائق أو الفعاليات مع الحفاظ على إمكانية النقل للمواسم المختلفة.",
        ],
      },
      {
        heading: "القطاعات التي نخدمها",
        body: [
          "السياحة والضيافة والتجزئة والتسويق المؤسسي تحتاج مظهراً مميزاً دون تأخير الإنشاء. التشطيبات مقاومة للشمس والغبار مع الحفاظ على الراحة الداخلية.",
        ],
      },
      {
        heading: "خيارات التخصيص",
        body: [
          "اختيار ألوان الواجهة ونسب الزجاج والكسوة. يمكن إضافة أرضيات خشبية شكلية، إنارة جمالية، مقاعد مدمجة، وتخزين مخفي مع نقاط كهرباء للأجهزة.",
          "خارجياً يمكن إضافة شرفات ومنحدرات وبرجولات ولافتات مضيئة. نوفر حلول عزل صوتي وتكييف تناسب المواقع الحارة والمزدحمة.",
        ],
      },
      {
        heading: "لماذا ابن العرب",
        body: [
          "نجمع بين التشطيب الجمالي والهندسة القوية، مع فحص واجهات التثبيت والعزل والتحكم بالمناخ قبل التسليم.",
          "نقوم بالتركيب والتسوية والتشغيل، وندعم النقل أو التجديد مع تغير مفهوم المشروع في وجهات السعودية.",
        ],
      },
    ],
    faqs: [
      {
        question: "هل تصلح للإقامة؟",
        answer: "نعم، يمكن تجهيزها بغرف نوم وحمامات وبانتري بتشطيبات فاخرة لتعمل كأجنحة ضيافة أو صالات VIP.",
      },
      {
        question: "هل الواجهة الخشبية تتحمل جو السعودية؟",
        answer: "نستخدم كسوة مقاومة للأشعة فوق البنفسجية مع فواصل محكمة وعزل خلفي لتحمل الحرارة والغبار والأمطار.",
      },
      {
        question: "هل يمكن إضافة جلسات خارجية؟",
        answer: "نوفر شرفات ومنحدرات وبرجولات مدمجة لزيادة المساحة المظللة لمقاهي أو استراحات.",
      },
      {
        question: "ما الخدمات المتاحة؟",
        answer: "الكابينة جاهزة للتكييف والكهرباء والمياه مع نقاط للأجهزة والقهوة وأنظمة نقاط البيع والإضاءة.",
      },
      {
        question: "هل يمكن نقلها دون تلف؟",
        answer: "نعم، نحمي الهيكل والتشطيبات أثناء الرفع، ونقدم إرشادات للحفاظ على الزجاج والكسوة خلال النقل.",
      },
    ],
    relatedSlugs: ["portable-houses", "portable-canteen", "portable-pantry"],
    metaTitle: "كبائن خشبية محمولة السعودية | ابن العرب",
    metaDescription:
      "كابينة خشبية محمولة بواجهة أنيقة وعزل كامل وخدمات جاهزة، مثالية للكافيهات والأجنحة والمكاتب الراقية مع إمكانية النقل والتركيب السريع في السعودية.",
  },
  {
    slug: "portable-canteen",
    parent: "porta-cabin",
    name: "مطابخ ميدانية محمولة",
    intro: "كبائن مطبخ وتقديم طعام بتصاميم صحية وجاهزية كاملة للطهي والتقديم.",
    description:
      "أسطح قابلة للغسل، مسارات شفط وروائح، كاونترات تقديم ونقاط خدمات للأجهزة لبدء التشغيل فور التسليم.",
    highlights: [
      "تشطيبات صحية وأسقف وأرضيات قابلة للغسل",
      "منطقة طبخ بتمديدات شفط وتجهيز مصائد شحوم",
      "كاونترات تقديم ومسارات تنظيم الاصطفاف",
      "نقاط خدمات جاهزة للأجهزة والمياه والغاز",
    ],
    gallery: [portacabin2, portacabin3, portacabin4, portacabin3, portacabin1],
    heroAlt: "مطبخ ميداني محمول بسطح تقديم وتهوية",
    whatsappMessage: "مرحباً، أود الاستفسار عن مطابخ ميدانية محمولة في السعودية.",
    contentSections: [
      {
        heading: "ما هو المطبخ الميداني المحمول؟",
        body: [
          "كابينة مطبخ وتقديم طعام بمعايير صحية، تشطيبات قابلة للغسل، مسارات شفط وروائح محسوبة، وتمديدات جاهزة لتشغيل الأجهزة.",
          "عادة تكون مركز الرفاهية بجوار <a href=\"/services/portable-labor-camps\">معسكرات العمال</a> و<a href=\"/services/portable-restrooms\">دورات المياه</a> و<a href=\"/services/portable-pantry\">البانتري</a> لتقديم وجبات دون مغادرة الموقع.",
        ],
      },
      {
        heading: "الاستخدامات والتطبيقات",
        body: [
          "تغذية القوى العاملة، تموين الفعاليات، أو مقاهي ومطاعم مؤقتة. ندعم التحضير الساخن والبارد وغسل الأواني وتنظيم تدفق الخدمة.",
          "يمكن فصل خطوط تقديم VIP أو الزوار أو إضافة ركن قهوة أو خدمة ذاتية داخل نفس المساحة.",
        ],
      },
      {
        heading: "القطاعات التي نخدمها",
        body: [
          "الإنشاءات، الطاقة، التعليم، الفعاليات، والاستجابة للطوارئ تعتمد على مطابخ جاهزة تلتزم بمتطلبات السلامة الغذائية والجهات الرقابية.",
        ],
      },
      {
        heading: "خيارات التخصيص",
        body: [
          "شفاطات ومصائد شحوم وأسقف قابلة للغسل وأرضيات مانعة للانزلاق. نحسب أحمال الكهرباء والمياه والغاز حسب الأجهزة وقوائم الطعام.",
          "يمكن دمج جلسات داخلية أو ربط الكابينة بمناطق جلوس مظللة مع مغاسل وإرشادات لتنظيم الطوابير.",
        ],
      },
      {
        heading: "لماذا ابن العرب",
        body: [
          "نسلم مطابخ بتمديدات جاهزة واختبارات تشغيل للتهوية والتكييف والحماية من الروائح قبل التسليم مع مخططات أحمال واضحة.",
          "ندير التركيب والتسوية والتشغيل، ثم نوفر دعم صيانة أو نقل مع تغير أعداد العاملين في مشاريع المملكة.",
        ],
      },
    ],
    faqs: [
      {
        question: "هل توفرون الأجهزة؟",
        answer: "نجهز النقاط للأجهزة المطلوبة، ويمكننا التنسيق مع مورديكم لضبط المواقع والأحمال.",
      },
      {
        question: "كيف يتم التحكم بالروائح والحرارة؟",
        answer:
          "نركب شفاطات ومراوح تعويض ومسارات عادم مصممة لحرارة السعودية، مع مصائد شحوم وتنظيف سهل للمجاري.",
      },
      {
        question: "هل توجد جلسات طعام؟",
        answer:
          "يمكن إضافة جلسات داخلية أو ربط الكابينة بمنطقة جلوس مظللة مع منحدرات وإضاءة لراحة المستفيدين.",
      },
      {
        question: "هل يمكن فصل خطوط الخدمة؟",
        answer: "نعم، يمكن فصل خطوط موظفين/زوار أو إضافة ركن قهوة وخدمة سريعة داخل نفس الكابينة.",
      },
      {
        question: "هل يمكن نقل الكابينة لاحقاً؟",
        answer:
          "الكابينة مصممة للرفع السريع مع نقاط خدمات سهلة الفك والتركيب لإعادة التوزيع دون تعطيل طويل.",
      },
    ],
    relatedSlugs: ["portable-pantry", "portable-restrooms", "portable-labor-camps"],
    metaTitle: "مطابخ ميدانية محمولة السعودية | ابن العرب",
    metaDescription:
      "مطابخ ميدانية محمولة بتشطيبات صحية وشفاطات وتمديدات جاهزة للخدمات، مع تركيب سريع لتغذية العمال أو الفعاليات في السعودية.",
  },
  {
    slug: "portable-mobile-containers",
    parent: "porta-cabin",
    name: "حاويات محولة محمولة",
    intro: "تحويل حاويات الشحن إلى مكاتب أو سكن أو تخزين معزول جاهز للنقل المتكرر.",
    description:
      "نحافظ على قوة الحاوية الفولاذية مع إضافة عزل ونوافذ وأبواب وتشطيبات داخلية لبيئة مريحة وآمنة.",
    highlights: [
      "قوة هيكل الحاوية مع عزل وتشطيب داخلي",
      "أبواب ونوافذ مخصصة مع حماية وأمان",
      "تصميمات مرنة للمكاتب أو السكن أو التخزين",
      "سهولة النقل وإعادة التوزيع",
    ],
    gallery: [portacabin2, portacabin3, portacabin1],
    heroAlt: "حاوية محولة بفتحات زجاجية وعزل داخلي",
    whatsappMessage: "مرحباً، أود الاستفسار عن حاويات محولة محمولة في السعودية.",
    contentSections: [
      {
        heading: "ما هي الحاويات المحولة؟",
        body: [
          "هي حاويات شحن معدلة بإضافة عزل وفتحات زجاجية وأبواب وتشطيبات داخلية لتصبح مكتباً أو سكناً أو وحدة تخزين آمنة.",
          "نضيف تهوية وتمديدات تكييف وأبواب مؤمنة لتحويل الحاوية إلى مساحة مريحة. يمكن وضعها بجوار <a href=\"/services/portable-storage\">تخزين محمول</a> و<a href=\"/services/portable-security-units\">وحدات الأمن</a> و<a href=\"/services/portable-site-offices\">مكاتب المواقع</a> ضمن مركز تحكم متكامل.",
        ],
      },
      {
        heading: "الاستخدامات والتطبيقات",
        body: [
          "مكاتب مواقع، سكن مؤقت، غرف حراسة، أكشاك بيع، أو ورش عمل صغيرة. الهيكل القوي يتحمل النقل المتكرر والبيئات الصعبة مع بقاء الداخل مريحاً.",
          "مثالية للموانئ والساحات اللوجستية والمواقع البعيدة. يمكن إضافة مناطق راحة أو ربطها بـ <a href=\"/services/portable-restrooms\">دورات مياه</a> للحفاظ على النظافة.",
        ],
      },
      {
        heading: "القطاعات التي نخدمها",
        body: [
          "الإنشاءات، اللوجستيات، النفط والغاز، منافذ البيع المؤقتة، والتطبيقات الأمنية تعتمد على الحاويات المحولة للمتانة وسرعة التحريك.",
        ],
      },
      {
        heading: "خيارات التخصيص",
        body: [
          "أبواب، نوافذ، رولات، عزل إضافي، توزيع كهرباء وتكييف، وتقسيمات داخلية أو أثاث مدمج. يمكن تجهيزها بتركيب فوقي أو سلالم عند التكديس.",
          "إضافة فتحات خدمة، ألواح قابلة للغسل، وتهيئة للكابلات والأمن مع حوامل كاميرات أو إنارة خارجية.",
        ],
      },
      {
        heading: "لماذا ابن العرب",
        body: [
          "نركز على السلامة الحرارية والهيكلية مع توثيق الفتحات والتعزيزات والتمديدات لسهولة الاعتماد والصيانة.",
          "نقوم بالتسليم والتسوية والتشغيل، وندعم النقل أو إعادة التهيئة عند تغير متطلبات العمليات في مواقع السعودية.",
        ],
      },
    ],
    faqs: [
      {
        question: "هل يمكن تكديس أو ربط الحاويات؟",
        answer: "نعم، نوفر نقاط تكديس وسلالم وممرات لربط عدة حاويات بأمان.",
      },
      {
        question: "هل الجدران معزولة؟",
        answer: "نضيف عزل وحواجز بخار وتشطيبات داخلية للتحكم في الحرارة والتكثف لراحة مستمرة.",
      },
      {
        question: "ما خيارات الأبواب والنوافذ؟",
        answer: "أبواب أمان، رولات، مداخل زجاجية أو أبواب جانبية حسب الاستخدام ومستوى الأمان المطلوب.",
      },
      {
        question: "هل تدعم الكهرباء والبيانات؟",
        answer: "نجهز دوائر الكهرباء والبيانات والتكييف حسب الأحمال والأنظمة المطلوبة.",
      },
      {
        question: "ما سرعة التنفيذ؟",
        answer:
          "بعد اعتماد المخطط نُنجز التعديل سريعاً ونقوم بالرفع والتسوية والتشغيل خلال أيام مع الحد الأدنى من الأعمال الميدانية.",
      },
    ],
    relatedSlugs: ["portable-storage", "portable-security-units", "portable-site-offices"],
    metaTitle: "حاويات محولة محمولة السعودية | ابن العرب",
    metaDescription:
      "تحويل حاويات الشحن إلى مكاتب أو سكن أو تخزين مع عزل ونوافذ وأبواب مؤمنة، جاهزة للنقل والتركيب السريع في السعودية.",
  },
  {
    slug: "portable-security-units",
    parent: "porta-cabin",
    name: "وحدات أمنية محمولة",
    intro: "كبائن أمن سريعة التركيب للبوابات ونقاط التفتيش والتحكم في المحيط.",
    description:
      "أبواب مقواة، زجاج بانورامي، أسطح عمل للأجهزة، وتهوية مهيأة للتكييف لتوفير بيئة عمل آمنة ومريحة للحراسات.",
    highlights: [
      "أبواب وأجهزة تثبيت مقاومة للعبث",
      "زجاج بانورامي لرؤية واضحة",
      "كونترات وأماكن تجهيز للأجهزة الأمنية",
      "جاهزية تهوية وتكييف للحرارة السعودية",
    ],
    gallery: [portacabin3, portacabin4, portacabin1, portacabin12],
    heroAlt: "وحدة أمنية محمولة بزجاج محيط عند بوابة موقع",
    whatsappMessage: "مرحباً، أود الاستفسار عن وحدات أمنية محمولة في السعودية.",
    contentSections: [
      {
        heading: "ما هي الوحدات الأمنية المحمولة؟",
        body: [
          "هي كبائن صغيرة للحراسة والإشراف، مزودة بأبواب مقواة وزجاج يحيط بالمكان وكونترات للأجهزة مثل أجهزة الدخول والكاميرات.",
          "غالباً توضع عند البوابات بجوار <a href=\"/services/portable-storage\">تخزين محمول</a> للمضبوطات، و<a href=\"/services/portable-warehouse\">مستودعات</a> للوجستيات، و<a href=\"/services/portable-site-offices\">مكاتب المواقع</a> للإدارة.",
        ],
      },
      {
        heading: "الاستخدامات والتطبيقات",
        body: [
          "غرف حراسة، نقاط تفتيش مركبات، أكشاك تذاكر، أو مراكز كاميرات مراقبة. يمكن إضافة ترقيات حماية أو إنارة ليلية للحفاظ على اليقظة طوال الوردية.",
          "مفيدة في الفعاليات والموانئ والمجمعات الصناعية والجامعات لضبط الدخول بسرعة دون تعطيل الحركة.",
        ],
      },
      {
        heading: "القطاعات التي نخدمها",
        body: [
          "المواقع الصناعية واللوجستية والدفاعية والموانئ والمجمعات التعليمية والفعاليات تحتاج وحدات أمنية جاهزة لتشديد التحكم بالدخول وفق معايير الدفاع المدني.",
        ],
      },
      {
        heading: "خيارات التخصيص",
        body: [
          "تحديد نسب الزجاج، نوافذ تمرير، كونترات تخزين، مسارات كابلات للكاميرات وأنظمة الدخول، مع خيارات إنذار طوارئ أو نظام نداء.",
          "إضافة حواجز خارجية، منحدرات، وإضاءة، مع حوامل لإضاءة السطح أو قواعد سارية لأجهزة المراقبة.",
        ],
      },
      {
        heading: "لماذا ابن العرب",
        body: [
          "نبني بهياكل معززة مع عزل حراري وتثبيت محكم للأبواب والزجاج. نختبر الإغلاق والتوزيع الكهربائي قبل التسليم لتقليل الأعطال الميدانية.",
          "ندير التسليم والتسوية والتشغيل، ونوفر دعم نقل أو تطوير عند تغيير مخطط المحيط الأمني عبر مشاريع المملكة.",
        ],
      },
    ],
    faqs: [
      {
        question: "هل تتوفر ترقيات مقاومة للرصاص أو الانفجار؟",
        answer: "يمكن تزويد الزجاج والألواح بدرجات حماية أعلى حسب تقييم المخاطر ومتطلبات العميل.",
      },
      {
        question: "هل تدعم كاميرات وأنظمة دخول؟",
        answer: "نعم، نجهز كونترات ونقاط طاقة ومسارات بيانات وتكييف مناسب للأجهزة الأمنية.",
      },
      {
        question: "هل يوجد مساحة لأكثر من حارس؟",
        answer: "يمكن تجهيز كبائن فردية أو ربطها بـ <a href=\"/services/portable-security-offices\">مكاتب أمن</a> أكبر مع مكاتب وتخزين.",
      },
      {
        question: "كيف نضمن الرؤية؟",
        answer: "زجاج محيط، ارتفاعات مناسبة، وإمكانية إضافة كاميرات أو مرايا خارجية لضمان رؤية واضحة للمشاة والمركبات.",
      },
      {
        question: "هل يسهل نقل الوحدات؟",
        answer: "نعم، نقاط الرفع والحجم المدمج يسمحان بالنقل السريع للحفاظ على مرونة نقاط الدخول.",
      },
    ],
    relatedSlugs: ["portable-security-offices", "portable-site-offices", "portable-storage"],
    metaTitle: "وحدات أمنية محمولة السعودية | ابن العرب",
    metaDescription:
      "وحدات حراسة محمولة بأبواب مقواة وزجاج بانورامي وتهيئة للأجهزة الأمنية والتكييف، لتركيب سريع في البوابات ونقاط التفتيش داخل السعودية.",
  },
  {
    slug: "portable-pantry",
    parent: "porta-cabin",
    name: "بانتري محمول",
    intro: "كابينة خدمة مشروبات ووجبات خفيفة بسطوح تخزين وأجهزة جاهزة.",
    description:
      "مساحات عمل مدمجة بأرضيات وتشطيبات سهلة التنظيف مع نقاط كهرباء وأحواض اختيارية لدعم الراحة في الموقع.",
    highlights: [
      "تشطيبات سهلة التنظيف ومساحات تخزين",
      "نقاط كهرباء للأجهزة والمبردات",
      "تصميم مدمج يستفيد من المساحة",
      "يتكامل مع المكاتب والمطابخ والسكن",
    ],
    gallery: [portacabin2, portacabin3, portacabin1],
    heroAlt: "بانتري محمول بكونتر تخزين وأجهزة صغيرة",
    whatsappMessage: "مرحباً، أود الاستفسار عن بانتري محمول في السعودية.",
    contentSections: [
      {
        heading: "ما هو البانتري المحمول؟",
        body: [
          "كابينة صغيرة مجهزة لآلات القهوة والثلاجات والميكروويف مع تشطيبات سهلة التنظيف وأسلاك كهرباء محسوبة للأجهزة.",
          "غالباً يرتبط بـ <a href=\"/services/portable-site-offices\">مكاتب المواقع</a> أو <a href=\"/services/portable-canteen\">المطابخ الميدانية</a> أو <a href=\"/services/portable-houses\">السكن</a> لتوفير راحة سريعة للفرق والزوار.",
        ],
      },
      {
        heading: "الاستخدامات والتطبيقات",
        body: [
          "مناطق استراحة في المكاتب أو المعسكرات أو الأجنحة التسويقية أو صالات VIP. يوفر تنظيم تخزين للأكواب والمواد مع تدفق سلس حتى في المساحات الصغيرة.",
          "مفيد أيضاً في الفعاليات أو الأكشاك المؤقتة كمحطة قهوة أو وجبات سريعة مع تمديدات كهرباء ومغسلة اختيارية.",
        ],
      },
      {
        heading: "القطاعات التي نخدمها",
        body: [
          "الإنشاءات، اللوجستيات، التجزئة، الفعاليات، والضيافة تستخدم البانتري لتقليل وقت التوقف وتحسين رفاهية الفرق داخل الموقع.",
        ],
      },
      {
        heading: "خيارات التخصيص",
        body: [
          "أحواض ومياه RO، أسطح ستانلس أو صلبة، رفوف تحت الكونتر، ومفاتيح كهرباء منفصلة للأجهزة. يمكن إضافة تهوية وروائح اختيارية.",
          "إمكانية إضافة شريط جلوس أو رف جداري أو مخزن خارجي صغير حسب المساحة المتاحة.",
        ],
      },
      {
        heading: "لماذا ابن العرب",
        body: [
          "نصمم البانتري ليتطابق مع التشطيبات المحيطة ويُختبر كهربائياً قبل التسليم. وثائق واضحة للدوائر والنقاط لتسهيل التشغيل والصيانة.",
          "نقوم بالتركيب والتسوية، وننقل أو نوسع البانتري بسهولة مع تغير حجم الفريق في مشاريع المملكة.",
        ],
      },
    ],
    faqs: [
      {
        question: "هل يمكن إضافة حوض وماء مفلتر؟",
        answer: "نعم، نوفر أحواض ونقاط RO وصرف مع لوحات خدمة سهلة الوصول للصيانة.",
      },
      {
        question: "كم عدد الأجهزة التي يمكن تشغيلها؟",
        answer: "نحسب الأحمال للأجهزة المطلوبة مع دوائر مخصصة لآلات القهوة والميكروويف والمبردات بالإضافة إلى مخارج عامة.",
      },
      {
        question: "هل يوجد تهوية؟",
        answer: "نوفر مراوح شفط وخيارات معالجة روائح، ونوصي بوضع النوافذ للتهوية والإضاءة الطبيعية.",
      },
      {
        question: "هل يمكن دمجه مع مطبخ ميداني؟",
        answer: "يمكن وضعه بجوار <a href=\"/services/portable-canteen\">المطبخ الميداني</a> ليكون محطة تقديم أو منطقة VIP.",
      },
      {
        question: "هل يسهل نقله؟",
        answer: "الكابينة صغيرة وقابلة للرفع بالونش مما يجعل إعادة التموضع سريعة مع توقف محدود.",
      },
    ],
    relatedSlugs: ["portable-canteen", "portable-site-offices", "portable-houses"],
    metaTitle: "بانتري محمول السعودية | ابن العرب",
    metaDescription:
      "بانتري محمول بتشطيبات سهلة التنظيف ونقاط كهرباء للأجهزة ومساحات تخزين مدمجة، مثالي للمكاتب والمعسكرات والفعاليات في السعودية.",
  },
  {
    slug: "portable-bathrooms",
    parent: "porta-cabin",
    name: "حمامات محمولة",
    intro: "وحدات استحمام كاملة بدُشات ومغاسل وتهوية جاهزة للتركيب والتشغيل.",
    description:
      "حمامات معيارية بأرضيات مانعة للانزلاق وتشطيبات مقاومة للماء وتحكم بالرطوبة لتوفير رفاهية متكاملة للعمال أو الضيوف.",
    highlights: [
      "دُشات ومراحيض مركبة مع نقاط خدمة",
      "تهوية للتحكم في الرطوبة والروائح",
      "أرضيات وجدران مقاومة للماء وغير قابلة للانزلاق",
      "جاهزة للتوصيل بشبكات المياه والصرف",
    ],
    gallery: [portacabin4, portacabin1, portacabin3],
    heroAlt: "حمام محمول بدُش وأرضية مانعة للانزلاق",
    whatsappMessage: "مرحباً، أود الاستفسار عن حمامات محمولة في السعودية.",
    contentSections: [
      {
        heading: "ما هي الحمامات المحمولة؟",
        body: [
          "حمامات جاهزة تضم دش ومراحيض ومساحة تبديل بمواد مقاومة للماء ولوحات خدمة لسهولة الصيانة، مع تهوية تحافظ على جودة الهواء.",
          "تُستخدم مع <a href=\"/services/portable-labor-camps\">معسكرات العمال</a> و<a href=\"/services/portable-restrooms\">دورات المياه</a> و<a href=\"/services/portable-canteen\">المطابخ</a> لتأمين رفاهية متكاملة.",
        ],
      },
      {
        heading: "الاستخدامات والتطبيقات",
        body: [
          "دعم رفاهية القوى العاملة، السكن المؤقت، الفعاليات، والاستجابة للطوارئ حيث الحاجة لدُش سريع وآمن.",
          "نختار تجهيزات تتحمل الاستخدام الكثيف ونوفر ألواح خدمة لتسريع الصيانة بدون تعطيل المستخدمين.",
        ],
      },
      {
        heading: "القطاعات التي نخدمها",
        body: [
          "الإنشاءات، النفط والغاز، التعدين، الفعاليات، والإغاثة تعتمد على الحمامات المحمولة للحفاظ على النظافة والمعنويات في ظروف السعودية.",
        ],
      },
      {
        heading: "خيارات التخصيص",
        body: [
          "اختيار عدد الدُشات والفواصل وخزائن صغيرة. إضافة مراوح عادم ومرايا مضادة للضباب وسخانات مياه فورية حسب السعة.",
          "إمكانية فصل أقسام رجال/نساء أو VIP، وإضافة مغاسل خارجية أو نقاط غسيل ملابس.",
        ],
      },
      {
        heading: "لماذا ابن العرب",
        body: [
          "نختبر السباكة والعزل والتهوية قبل التسليم لضمان انحدارات تصريف صحيحة وأختام محكمة تتحمل حرارة ورطوبة المملكة.",
          "ندير التركيب والتشغيل ونبقى متاحين للصيانة أو النقل عند تبدل مراحل المشروع.",
        ],
      },
    ],
    faqs: [
      {
        question: "كم عدد الدُشات الممكنة؟",
        answer: "نوفر وحدات VIP بدُش واحد أو كتل متعددة حسب عدد المستخدمين وتوفر المياه والطاقة.",
      },
      {
        question: "هل تشمل سخانات مياه؟",
        answer: "نعم، نحدد سخانات فورية أو تخزين وفق معدل التدفق والطاقة المتاحة.",
      },
      {
        question: "هل يمكن الفصل بين الرجال والنساء؟",
        answer: "نعم، نصمم مداخل منفصلة وفواصل خصوصية واضحة لكل قسم.",
      },
      {
        question: "كيف يتم تصريف المياه الرمادية؟",
        answer: "نوفر نقاط دخول وخروج واضحة مع أرضيات مانعة للتسرب ويمكن ربطها بالشبكات أو خزانات مؤقتة.",
      },
      {
        question: "هل هناك لوحات خدمة للصيانة؟",
        answer: "نعم، توجد فتحات خدمة للوصول السريع إلى السباكة والتهوية دون إزالة التشطيبات.",
      },
    ],
    relatedSlugs: ["portable-restrooms", "portable-canteen", "portable-labor-camps"],
    metaTitle: "حمامات محمولة السعودية | ابن العرب",
    metaDescription:
      "حمامات محمولة بدُشات وتشطيبات مانعة للماء وتهوية جاهزة، تُركّب سريعاً لدعم رفاهية العمال أو الضيوف في مواقع المملكة.",
  },
  {
    slug: "portable-security-offices",
    parent: "porta-cabin",
    name: "مكاتب أمن محمولة",
    intro: "مكاتب أمن أكبر مع مساحات عمل وتخزين وأبواب معززة لإدارة الحماية والمراقبة.",
    description:
      "نوفر مكاتب أمنية تضم كونترات مراقبة ومساحات تخزين وأبواب مؤمنة مع جاهزية للكهرباء والبيانات وأنظمة المراقبة.",
    highlights: [
      "مساحة عمل لفِرق أمن متعددة",
      "أبواب معززة وتخزين آمن للمعدات",
      "نوافذ واسعة وحوامل كاميرات",
      "تمديدات للكهرباء والبيانات وأنظمة المراقبة",
    ],
    gallery: [portacabin3, portacabin2, portacabin1],
    heroAlt: "مكتب أمن محمول بزجاج واسع ومدخل آمن",
    whatsappMessage: "مرحباً، أود الاستفسار عن مكاتب أمن محمولة في السعودية.",
    contentSections: [
      {
        heading: "ما هي مكاتب الأمن المحمولة؟",
        body: [
          "كبائن أكبر للحراسات توفر مكاتب وتخزين ومساحة مراقبة مع أبواب مؤمنة ورؤية مناسبة، مع إمكانية الخصوصية للاجتماعات أو التحقيقات.",
          "يمكن وضعها قرب <a href=\"/services/portable-security-units\">وحدات الحراسة</a> و<a href=\"/services/portable-storage\">التخزين</a> و<a href=\"/services/portable-site-offices\">الإدارة</a> لتجميع التحكم في التصاريح والزوار في مكان واحد.",
        ],
      },
      {
        heading: "الاستخدامات والتطبيقات",
        body: [
          "غرف تحكم، إدارة دخول، تخزين مضبوطات أو أدلة، واجتماعات تسليم واستلام الوردية. تدعم رفوف سيرفرات وكاميرات مع تكييف لحماية الأجهزة.",
          "مناسبة للفعاليات والحرم الجامعي والمصانع والموانئ لتشكيل مركز أمني يمكن نقله عند تغير المخطط.",
        ],
      },
      {
        heading: "القطاعات التي نخدمها",
        body: [
          "المصانع، الموانئ، اللوجستيات، الطيران، التعليم، والقطاع العام يستخدم مكاتب الأمن المحمولة لفرض الامتثال وإدارة الحوادث بسرعة.",
        ],
      },
      {
        heading: "خيارات التخصيص",
        body: [
          "مناطق اجتماعات، خزائن مقفلة، رفوف معدات، وتجهيزات تحكم دخول وإنذارات. يمكن فصل مناطق الزوار عن مناطق العمل الآمنة.",
          "حساب أحمال التكييف والعزل الصوتي لفترات المراقبة الطويلة، مع منحدرات وحواجز خارجية لتحسين السلامة.",
        ],
      },
      {
        heading: "لماذا ابن العرب",
        body: [
          "نستخدم هياكل معززة وعزل حراري ومثبتات مقاومة للعبث، ونختبر الكهرباء والتبريد ونقاط الأمن قبل التسليم.",
          "ندير التركيب والتشغيل ونقدم تحديثات أو نقل المكاتب مع تغير الاحتياجات الأمنية في مختلف مناطق المملكة.",
        ],
      },
    ],
    faqs: [
      {
        question: "هل يمكن دمج أنظمة كاميرات وتحكم دخول؟",
        answer: "نعم، نوفر قنوات وأسلاك وقواعد رفوف وتهوية للأجهزة الأمنية مع أحمال كهربائية محسوبة.",
      },
      {
        question: "هل يوجد تخزين للمعدات والأدلة؟",
        answer: "نوفر خزائن وأدراج مقفلة ورفوف حسب معاييركم وإجراءاتكم التشغيلية.",
      },
      {
        question: "هل يمكن استقبال الزوار داخل المكتب؟",
        answer:
          "يمكن إضافة نافذة استقبال أو منطقة انتظار ومسار مستقل لحماية منطقة العمل الأساسية.",
      },
      {
        question: "هل تتوفر ترقيات حماية إضافية؟",
        answer: "يمكن رفع مستوى الألواح والزجاج عند الحاجة لمستويات أمان أعلى.",
      },
      {
        question: "ما مدى سهولة النقل؟",
        answer: "الكابينة جاهزة للرفع بمقاسات تناسب طرق المملكة مما يجعل إعادة التموضع سلسة مع توقف محدود.",
      },
    ],
    relatedSlugs: ["portable-security-units", "portable-site-offices", "portable-storage"],
    metaTitle: "مكاتب أمن محمولة السعودية | ابن العرب",
    metaDescription:
      "مكاتب أمن محمولة بأبواب معززة وتجهيزات مراقبة ومساحات عمل للفرق الأمنية، مع تركيب سريع ودعم للنقل والتطوير في السعودية.",
  },
  {
    slug: "aluminum",
    name: "أعمال ألمنيوم",
    intro: "تصنيع وتركيب أنظمة الألمنيوم للواجهات والأبواب والنوافذ واللوفرات بتشطيبات مقاومة للتآكل.",
    description:
      "نقدم قص وتفريز وتشكيل وتركيب الألمنيوم للواجهات والفتحات والقواطع بلمسات معمارية تناسب بيئة السعودية الساحلية والصحراوية.",
    highlights: [
      "سبائك مقاومة للتآكل وتشطيبات معمارية معتمدة",
      "قص وتفريز CNC بدقة عالية",
      "بودرة، أنودة، وتشطيبات خاصة",
      "تصنيع مقاطع مخصصة لتصاميم فريدة",
    ],
    gallery: [aluminium, portacabin2, portacabin3],
    heroAlt: "ورشة ألمنيوم مع مقاطع وألواح منتهية",
    whatsappMessage: "مرحباً، أود الاستفسار عن خدمات الألمنيوم في السعودية.",
    contentSections: [
      {
        heading: "ما هي خدمات الألمنيوم لدينا؟",
        body: [
          "ننفذ قص وتشكيل وتشطيب الألمنيوم للواجهات والأبواب والنوافذ واللوفرات والتفاصيل المعمارية مع مقاومة عالية للتآكل والحرارة.",
          "ندعم الأعمال المنفصلة للواجهات أو التكامل مع <a href=\"/services/porta-cabin\">كبائن برتا</a> و<a href=\"/services/portable-site-offices\">مكاتب المواقع</a> و<a href=\"/services/portable-log-cabin\">كبائن خشبية</a> لتحسين المظهر والأداء.",
        ],
      },
      {
        heading: "الاستخدامات والتطبيقات",
        body: [
          "واجهات ستارة، واجهات محلات، إطارات نوافذ وأبواب، لوفرات، درابزين، وتشطيبات داخلية. نجهز فتحات الزجاج والتصريف لتسريع التركيب.",
          "نخدم أيضاً حمايات المعدات والفتحات المهوّاة، مع استخدام الألمنيوم لتحسين شكل ومتانة الكبائن الجاهزة.",
        ],
      },
      {
        heading: "القطاعات التي نخدمها",
        body: [
          "الإنشاءات والتجزئة والضيافة والصناعة وموردي المباني المعيارية في السعودية، مع تشطيبات تتحمل الرطوبة الساحلية والغبار والحرارة العالية.",
        ],
      },
      {
        heading: "خيارات التخصيص",
        body: [
          "بودرة وأنودة وPVDF وتشطيبات خاصة، مع قص وتفريز وثقب وتخريم دقيق. نوفر قواطع حرارية وتجهيزات زجاج وعزل حيث يلزم.",
          "ننسق مع فرق <a href=\"/services/cutting-bending\">القص والثني</a> و<a href=\"/services/welding\">اللحام</a> لتسليم تجمعات جاهزة للتركيب.",
        ],
      },
      {
        heading: "لماذا ابن العرب",
        body: [
          "نعتمد معايير جودة وتولرانس دقيقة مع عينات تشطيب قبل الإنتاج. ورشتنا في جدة تقلل زمن التوريد، ونعتمد تغليفاً يحمي المقاطع حتى الوصول لأي منطقة.",
          "نوفر رسومات ورش وتركيب ودعم فني بعد التسليم لضمان الالتزام بالمواعيد والمواصفات.",
        ],
      },
    ],
    faqs: [
      {
        question: "ما التشطيبات المتوفرة؟",
        answer: "بودرة، أنودة، PVDF وتشطيبات خاصة مع توصيات تناسب الأشعة فوق البنفسجية والرطوبة الساحلية.",
      },
      {
        question: "هل توفرون الزجاج والإكسسوارات؟",
        answer: "نجهز الإطارات للزجاج والإكسسوارات ويمكننا التوريد أو التنسيق حسب المواصفات.",
      },
      {
        question: "هل تعملون من الرسومات أو الرفع الموقعي؟",
        answer: "نعم، نعمل من رسومات تفصيلية ويمكننا إجراء رفع ميداني قبل التصنيع للتأكد من الأبعاد.",
      },
      {
        question: "هل توفرون حلول عزل أو تصريف؟",
        answer: "نضيف تقويات وفواصل حرارية ومسارات تصريف حسب متطلبات الأداء والكود المحلي.",
      },
      {
        question: "كيف تحمون المواد أثناء النقل؟",
        answer: "نستخدم حماية حواف وتغليفاً مسمى وننسق اللوجستيات لتقليل المناولة حتى مناطق المملكة المختلفة.",
      },
    ],
    relatedSlugs: ["cutting-bending", "welding", "porta-cabin"],
    metaTitle: "أعمال ألمنيوم السعودية | ابن العرب",
    metaDescription:
      "قص وتشكيل وتشطيب ألمنيوم للواجهات والأبواب والنوافذ واللوفرات بتشطيبات مقاومة للتآكل وتسليم سريع في المملكة.",
  },
  {
    slug: "welding",
    name: "خدمات لحام",
    intro: "لحام معتمد MIG وTIG وقوسي للمنشآت والمعادن الخاصة مع توثيق جودة كامل.",
    description:
      "فِرق لحام معتمدة تنفذ لحام الفولاذ والألمنيوم والمعادن الخاصة وفق إجراءات معتمدة وتقارير فحص لتلبية مواصفات المشاريع السعودية.",
    highlights: [
      "عمليات MIG وTIG وقوسي مع لحامين معتمدين",
      "فحوصات وضبط جودة للوصلات الإنشائية",
      "دعم للفولاذ الكربوني والستانلس والألمنيوم",
      "لحام ورشة أو ميداني حسب متطلبات المشروع",
    ],
    gallery: [welding, portacabin4, portacabin1, portacabin2],
    heroAlt: "لحام معتمد يعمل على هيكل فولاذي مع شرر",
    whatsappMessage: "مرحباً، أود الاستفسار عن خدمات اللحام في السعودية.",
    contentSections: [
      {
        heading: "ما هي خدمات اللحام لدينا؟",
        body: [
          "نقدم لحام MIG وTIG والقوسي مع لحامين معتمدين وإجراءات WPS وPQR موثقة. من الهياكل إلى التفاصيل المعمارية، نفحص كل وصلة لتلائم مواصفات المشروع.",
          "ندعم اللحام في الورشة أو الموقع لـ <a href=\"/services/porta-cabin\">كبائن برتا</a> و<a href=\"/services/portable-warehouse\">المستودعات</a> وتجميعات الحديد، بالتنسيق مع <a href=\"/services/cutting-bending\">القص والثني</a> لتسليم حزم متكاملة.",
        ],
      },
      {
        heading: "الاستخدامات والتطبيقات",
        body: [
          "لحام الهياكل والسلالم والدرابزين والمنصات وحوامل المعدات والقطع المعمارية. نوفر لحام ألمنيوم وستينلس للتطبيقات المقاومة للتآكل أو الجمالية.",
          "نوفر أيضاً لحام إصلاح وتقوية وتعديل لإبقاء الأصول الآمنة ومتوافقة مع الحد الأدنى من التوقف.",
        ],
      },
      {
        heading: "القطاعات التي نخدمها",
        body: [
          "الإنشاءات، النفط والغاز، اللوجستيات، التصنيع، التجزئة، والمباني المعيارية تحتاج لحام موثوق مع ضبط جودة عبر مشاريع المملكة.",
        ],
      },
      {
        heading: "خيارات التخصيص",
        body: [
          "نلتزم بإجراءات اللحام والمواد المضافة واشتراطات التسخين المسبق والتحكم في درجات الحرارة. نجهز الأسطح، الطحن، والتشطيب حسب المواصفة.",
          "يمكننا إضافة طلاءات أو تحضير جلفنة والتنسيق مع أعمال الماكينة والتخريم لتسليم قطع جاهزة للتركيب.",
        ],
      },
      {
        heading: "لماذا ابن العرب",
        body: [
          "لحامين معتمدين، معدات معايرة، وتقارير فحص تجعل المشروع جاهزاً للتدقيق. نوثق WPS/PQR وعمليات الفحص قبل وأثناء وبعد اللحام.",
          "فرقنا في جدة تقصر زمن الاستجابة، ولدينا فرق متنقلة للرياض والدمام والمواقع البعيدة عند الحاجة للحام ميداني.",
        ],
      },
    ],
    faqs: [
      {
        question: "ما العمليات التي تقدمونها؟",
        answer: "نوفر MIG وTIG واللحام القوسي حسب المادة والسُمك وظروف الموقع مع استشارة لأفضل خيار.",
      },
      {
        question: "هل توفرون مستندات لحام؟",
        answer: "نعم، نوفر WPS وPQR واعتمادات اللحامين وتقارير التفتيش حسب متطلبات العميل والجهات الرقابية.",
      },
      {
        question: "هل تلحمون الألمنيوم والستانلس؟",
        answer: "نعم، ندعم الفولاذ الكربوني والستانلس والألمنيوم مع مواد لحام وإجراءات مناسبة لكل معدن.",
      },
      {
        question: "هل تعملون في الموقع؟",
        answer: "نفضل العمل في الورشة للجودة، لكن يمكننا تعبئة فرق ميدانية مع التصاريح والإجراءات الآمنة عند توفر المساحة.",
      },
      {
        question: "كيف تضمنون الجودة والسلامة؟",
        answer:
          "فحوصات التركيب، التحكم في الحرارة، معدات معايرة، وخيارات فحص NDT مع خطط سلامة وتصاريح عمل لكل موقع.",
      },
    ],
    relatedSlugs: ["cutting-bending", "aluminum", "porta-cabin"],
    metaTitle: "خدمات لحام السعودية | ابن العرب",
    metaDescription:
      "خدمات لحام MIG وTIG وقوسي مع اعتماد وتقارير جودة للفولاذ والستانلس والألمنيوم، في الورشة أو الموقع داخل المملكة.",
  },
﻿﻿  {
    slug: "cutting-bending",
    name: "قص وثني",
    intro: "قص ليزر/بلازما وثني CNC بدقة عالية لصفائح الحديد والألمنيوم الجاهزة للتركيب.",
    description:
      "ننفذ قص وتشكيل الصفائح بمستويات تحمل مختلفة لتسليم أجزاء جاهزة للتركيب أو اللحام. ندعم النماذج الأولية والدفعات الإنتاجية مع ضبط تلرانس ضيق، وتتبع مواد، وخيارات تشطيب خفيف حسب الحاجة. يمكن دمج القص والثني مع أعمال اللحام أو الألمنيوم لتسليم حزم كاملة لمشاريع البناء أو الكبائن الجاهزة.",
    highlights: [
      "قص ليزر/بلازما بحواف نظيفة ودقة عالية",
      "ثني مكبسي CNC بتلرانس ضيق ومتكرر",
      "دعم للنماذج الأولية والدفعات الإنتاجية",
      "توثيق مواد وفحوصات جودة عند الطلب",
    ],
    gallery: [cuttingBending, portacabin2, portacabin3, portacabin4],
    heroAlt: "آلة ثني CNC تعمل على لوح معدني بدقة عالية",
    whatsappMessage: "مرحباً، أود الاستفسار عن خدمات القص والثني للصفائح المعدنية في السعودية.",
    contentSections: [
      {
        heading: "ما هي خدمات القص والثني؟",
        body: [
          "نستخدم قص ليزر أو بلازما ثم ثني مكبسي CNC لإنتاج أجزاء دقيقة جاهزة للتركيب في الهياكل المعدنية أو الكبائن الجاهزة. يتم ضبط زوايا الثني ومواضع القطع لضمان تلرانس متكرر في كل دفعة.",
          "ندعم القطع المستقلة أو الحزم المتكاملة المرتبطة بـ <a href=\"/services/porta-cabin\">الكبائن الجاهزة</a>، <a href=\"/services/welding\">اللحام</a>، و<a href=\"/services/aluminum\">الألمنيوم</a> لتسليم وحدات أو أجزاء جاهزة للتركيب.",
        ],
      },
      {
        heading: "الاستخدامات والتطبيقات",
        body: [
          "حوامل المعدات، ألواح الحماية، الدروع، القنوات، والسلالم المصنوعة من صفائح مشكلة بدقة وجاهزة للتجميع.",
          "ندعم الإنتاج الخفيف والمتوسط للأجزاء المخصصة، مع القدرة على إعادة التصنيع والتعديلات السريعة عند تغير التصميم.",
        ],
      },
      {
        heading: "القطاعات التي نخدمها",
        body: [
          "الإنشاءات، البنية التحتية، النفط والغاز، المراكز اللوجستية، والمصانع التي تحتاج أجزاء مقصوصة ومثنية متطابقة مع الرسومات.",
        ],
      },
      {
        heading: "خيارات التخصيص",
        body: [
          "معالجة فولاذ كربوني، ستانلس، وألمنيوم بسماكات متعددة مع ثقوب، شقوق، أو فتحات أجهزة مضافة قبل الثني.",
          "ثقوب، شقوق، إعدادات تركيب براغي أو برشام، وخيارات التشطيب الخفيف لتسليم جزء جاهز للتركيب.",
        ],
      },
      {
        heading: "لماذا ابن العرب",
        body: [
          "معدات CNC ومعايرة أدوات منتظمة لضبط الزوايا والأطوال، مع إمكانية إصدار تقارير فحص عند الطلب.",
          "إنتاج محلي في جدة لتسليم سريع داخل المملكة، مع تغليف يحمي الحواف أثناء النقل والتركيب.",
        ],
      },
    ],
    faqs: [
      {
        question: "ما المواد والسماكات التي يمكن قصها وثنيها؟",
        answer:
          "نعالج الفولاذ الكربوني، الستانلس، والألمنيوم بسماكات خفيفة ومتوسطة، مع تلرانس ضيق لزوايا الثني وأبعاد القطع.",
      },
      {
        question: "هل تقبلون النماذج الأولية والدفعات الصغيرة؟",
        answer:
          "نعم، ندعم النماذج الأولية والدفعات القصيرة مع إمكانية توثيق المواد والفحص عند الطلب قبل التصنيع الكمي.",
      },
      {
        question: "هل يمكن تسليم أجزاء جاهزة مع لحام أو تشطيب؟",
        answer:
          "يمكننا دمج القص والثني مع <a href=\"/services/welding\">اللحام</a> أو تشطيبات سطحية خفيفة لتسليم أجزاء جاهزة للتجميع.",
      },
      {
        question: "كيف يتم ضبط الدقة والتلرانس؟",
        answer:
          "برمجة CNC ومعايرة دورية للأدوات مع فحص عينات من كل دفعة، وتقارير فحص حسب الطلب للمشاريع الحرجة.",
      },
      {
        question: "هل توفرون تشطيبات سطحية أو حماية الحواف؟",
        answer:
          "ننسق مع <a href=\"/services/aluminum\">تشطيبات الألمنيوم</a> أو طلاءات واقية حسب الحاجة، مع تغليف يحمي الحواف أثناء النقل.",
      },
    ],
    relatedSlugs: ["welding", "aluminum", "porta-cabin"],
    metaTitle: "قص وثني معادن السعودية | ابن العرب",
    metaDescription:
      "قص ليزر/بلازما وثني CNC بدقة عالية لصفائح الحديد والألمنيوم، مع تقارير جودة وتغليف آمن وتسليم سريع داخل المملكة.",
  },
];

export const servicesContent: Record<Locale, ServiceContent[]> = {
  en: withAltText(servicesEn),
  ar: withAltText(servicesAr),
};

export const serviceNameMap: Record<Locale, Record<string, string>> = {
  en: servicesEn.reduce((acc, service) => ({ ...acc, [service.slug]: service.name }), {}),
  ar: servicesAr.reduce((acc, service) => ({ ...acc, [service.slug]: service.name }), {}),
};

export const servicesHubContent: Record<Locale, ServicesHubContent> = {
  en: {
    h1: "Portable Cabins & Porta Cabin Solutions in Saudi Arabia",
    eyebrow: "Portacabins in KSA",
    intro:
      "Ebn Al Arab fabricates portable cabins in Jeddah and delivers across Saudi Arabia so you can mobilize fast without compromising safety or comfort. From site offices and labor camps to sanitary blocks, warehouses, and premium log-style cabins, every unit is insulated, AC-ready, and backed by bilingual support for English and Arabic teams.",
    sections: [
      {
        heading: "Our Portable Building Solutions",
        body: [
          "We engineer porta cabins with structural steel, insulated sandwich panels, and pre-planned MEP so you can occupy immediately. Each module is crane-ready, sized for Saudi transport clearances, and documented with drawings and load data for quick municipal and civil-defense approvals.",
          "Whether you need a single gatehouse or a full compound with housing, offices, kitchens, prayer cabins, and warehouses, we assemble matching finishes and service corridors that simplify facilities management. English and Arabic handover documents keep your teams aligned on maintenance, safety, and relocation.",
        ],
      },
      {
        heading: "Why Choose Ebn Al Arab",
        body: [
          "Local fabrication in Jeddah shortens lead times to Riyadh, Dammam, NEOM, and remote oil and gas pads. QA checkpoints cover welding, panel density, power distribution, and water tightness before dispatch, and our crew manages lifting, leveling, and commissioning on-site.",
          "We plan AC loads for Saudi heat, size electrical for IT, CCTV, and kitchen equipment, and integrate odor control, gray-water routing, and fire-rated partitions when needed. After handover, we support FM teams with spare parts, reconfiguration, and relocation so your cabins stay productive for years.",
        ],
        bullets: [
          "Crane-ready modules with documented lifting and anchoring points",
          "AC-ready layouts with shading options and heat-load calculations",
          "Civil-defense friendly designs with marked exits and fire points",
          "Bilingual (EN/AR) labeling, O&M notes, and WhatsApp support",
          "Fast mobilization across KSA with in-house transport coordination",
        ],
      },
      {
        heading: "Industries We Serve",
        body: [
          "Contractors, EPCs, oil and gas operators, logistics hubs, defense sites, giga-project partners, events, education, and healthcare all rely on portable buildings to stay agile. We tailor accessibility, hygiene, and security packages to match your risk profile and audit requirements.",
        ],
        bullets: [
          "Construction and infrastructure compounds with shaded circulation",
          "Energy, mining, and utilities with rugged welfare and safety zones",
          "Logistics, ports, and airports with secure gatehouses and offices",
          "Events and tourism with premium log cabins, retail kiosks, and VIP suites",
          "Public sector and education with compliant hygiene and prayer facilities",
        ],
      },
      {
        heading: "Our Porta Cabin Product Range",
        body: [
          "Every service page below includes English and Arabic SEO copy, meta tags, hreflang, and internal links to speed indexing. Choose the cabin type you need and pair it with supporting units to build a complete site footprint.",
        ],
        bullets: [
          '<a href="/services/porta-cabin">Porta Cabins (Parent)</a> - multi-purpose insulated shells for any use-case',
          '<a href="/services/portable-site-offices">Portable Site Offices</a> - AC-ready workspaces with data and CCTV',
          '<a href="/services/portable-houses">Portable Houses</a> - flexible layouts for staff, families, or VIPs',
          '<a href="/services/portable-labor-camps">Portable Labor Camps</a> - bunks, hygiene blocks, and shaded circulation',
          '<a href="/services/portable-mosques">Portable Mosques</a> - prayer cabins with ablution-friendly finishes',
          '<a href="/services/portable-storage">Portable Storage</a> - secure, ventilated storage for tools and parts',
          '<a href="/services/portable-restrooms">Portable Restrooms</a> - hygienic toilets with odor control and ventilation',
          '<a href="/services/portable-bathrooms">Portable Bathrooms</a> - full shower and changing facilities',
          '<a href="/services/portable-canteen">Portable Canteen</a> - hygienic kitchens and dining counters',
          '<a href="/services/portable-pantry">Portable Pantry</a> - beverage and snack support for teams',
          '<a href="/services/portable-warehouse">Portable Warehouse</a> - wide-span storage with secure access',
          '<a href="/services/portable-mobile-containers">Portable Mobile Containers</a> - converted containers for offices or housing',
          '<a href="/services/portable-security-units">Portable Security Units</a> - compact gatehouses and checkpoints',
          '<a href="/services/portable-security-offices">Portable Security Offices</a> - larger control rooms and monitoring bases',
          '<a href="/services/portable-log-cabin">Portable Log Cabin</a> - hospitality-grade wood-look cabins',
          '<a href="/services/aluminum">Aluminum Fabrication</a> - facades, doors, louvers, and trims',
          '<a href="/services/welding">Welding Services</a> - certified MIG/TIG/stick with QA records',
          '<a href="/services/cutting-bending">Cutting & Bending</a> - CNC cutting and press-brake forming',
        ],
      },
      {
        heading: "Frequently Asked Questions",
        body: [
          "Need to plan a compound with housing, offices, kitchens, prayer, storage, and sanitation? We help you pick matching modules, align service corridors, and sequence delivery so setup takes days, not months.",
          "All pages include self-referencing canonicals, hreflang for English and Arabic, and structured FAQ schema. Reach out on WhatsApp for fast pricing and layout advice.",
        ],
      },
    ],
    faqs: [
      {
        question: "How fast can you deliver and install porta cabins in Saudi Arabia?",
        answer:
          "Standard layouts can ship in days with lifting, leveling, and commissioning handled by our crew. Custom compounds follow milestone schedules agreed during design.",
      },
      {
        question: "Do you provide bilingual documentation and labels?",
        answer:
          "Yes. Drawings, O&M notes, safety labels, and WhatsApp support are available in English and Arabic to streamline handover and audits.",
      },
      {
        question: "Can cabins be relocated or expanded later?",
        answer:
          "All cabins are crane-ready with documented lifting points. We can disconnect, move, and extend your setup with matching modules when headcount or operations change.",
      },
      {
        question: "Which areas of Saudi Arabia do you serve?",
        answer:
          "We fabricate in Jeddah and deliver nationwide, including Riyadh, Dammam, NEOM, remote oil and gas sites, and temporary event grounds.",
      },
      {
        question: "How do you ensure hygiene and comfort in extreme heat?",
        answer:
          "We specify insulation, heat-load based AC sizing, ventilation, odor control, and easy-clean finishes. Hygiene cabins include service panels for quick maintenance.",
      },
    ],
  },
  ar: {
    h1: "حلول الكبائن والمباني الجاهزة في السعودية",
    eyebrow: "كبائن جاهزة في المملكة",
    intro:
      "تصنّع ابن العرب الكبائن الجاهزة في جدة وتوصلها لكل مدن السعودية لتتمكن من التشغيل السريع دون التضحية بالأمان أو الراحة. من مكاتب المواقع وسكن العمال إلى وحدات الخدمات الصحية والمستودعات والكبائن الخشبية المميزة، كل وحدة معزولة، جاهزة للتكييف، ومدعومة بفريق يتحدث العربية والإنجليزية.",
    sections: [
      {
        heading: "حلول المباني الجاهزة لدينا",
        body: [
          "نصمم كبائن برتا بهياكل فولاذية، ألواح عزل، وتوزيع كهرباء وميكانيكا جاهز للاستخدام فور التسليم. كل وحدة قابلة للرفع بالكرين، ومهيأة لأبعاد النقل في السعودية مع رسومات وحسابات أحمال للتصاريح البلدية والدفاع المدني.",
          "سواء احتجت بوابة أمنية واحدة أو مجمعاً كاملاً يضم سكن، مكاتب، مطابخ، كبائن صلاة، ومستودعات، ننسق التشطيبات والممرات الخدمية لتسهيل إدارة المرافق. نسلم وثائق تشغيل وصيانة بالعربية والإنجليزية لإبقاء الفرق متوافقة.",
        ],
      },
      {
        heading: "لماذا تختار ابن العرب",
        body: [
          "التصنيع المحلي في جدة يقلل زمن التوريد إلى الرياض والدمام ونيوم والمواقع البعيدة. نقاط فحص الجودة تغطي اللحام، كثافة الألواح، توزيع الأحمال، وضبط العزل قبل الشحن مع إشراف فريق التركيب والتسوية والتشغيل في الموقع.",
          "نحسب أحمال التكييف لحرارة السعودية، ونجهز الكهرباء للاتصالات، أنظمة المراقبة، والمطابخ، ونضيف تحكم الروائح، مسارات تصريف المياه الرمادية، أو فواصل مقاومة للحريق عند الحاجة. بعد التسليم ندعم فرق الصيانة بقطع غيار وإعادة تهيئة أو نقل الوحدات.",
        ],
        bullets: [
          "وحدات جاهزة للرفع مع نقاط تثبيت موثقة",
          "تصميمات مجهزة للتكييف مع خيارات تظليل وحساب أحمال",
          "مطابقة لمتطلبات الدفاع المدني مع مخارج واضحة ونقاط إطفاء",
          "وسم ومستندات تشغيل وصيانة باللغتين ودعم واتساب",
          "توريد سريع داخل المملكة مع تنسيق نقل داخلي",
        ],
      },
      {
        heading: "القطاعات التي نخدمها",
        body: [
          "المقاولون وشركات EPC والطاقة واللوجستيات والدفاع والمشاريع الكبرى والفعاليات والتعليم والصحة يعتمدون على المباني الجاهزة. نطابق حلول الوصول، النظافة، والأمن مع متطلبات المخاطر والتدقيق لكل عميل.",
        ],
        bullets: [
          "مجمعات الإنشاءات والبنية التحتية مع مسارات مظللة",
          "الطاقة والتعدين والمرافق مع مناطق راحة وسلامة صلبة",
          "اللوجستيات والموانئ والمطارات مع كبائن حراسة ومكاتب آمنة",
          "الفعاليات والسياحة مع كبائن خشبية فاخرة وأكشاك بيع وأجنحة VIP",
          "القطاع الحكومي والتعليم مع وحدات نظافة وصلاة متوافقة",
        ],
      },
      {
        heading: "تشكيلة منتجات الكبائن",
        body: [
          "كل صفحة خدمة أدناه تحتوي محتوى SEO باللغتين وعناصر meta وhreflang وروابط داخلية لتسريع الأرشفة. اختر نوع الكابينة وأضف الوحدات المساندة لبناء مجمع متكامل.",
        ],
        bullets: [
          '<a href="/services/porta-cabin">كبائن برتا (رئيسية)</a> - قوالب متعددة الاستخدامات معزولة وجاهزة للتشغيل',
          '<a href="/services/portable-site-offices">مكاتب مواقع جاهزة</a> - مساحات عمل مكيفة مع بيانات وكاميرات',
          '<a href="/services/portable-houses">بيوت جاهزة</a> - مخططات مرنة للموظفين أو العائلات أو الضيوف',
          '<a href="/services/portable-labor-camps">سكن عمال ومخيمات</a> - أسرّة، خدمات، وممرات مظللة',
          '<a href="/services/portable-mosques">مساجد جاهزة</a> - كبائن صلاة مع تجهيزات وضوء ووضوء مريح',
          '<a href="/services/portable-storage">تخزين متنقل</a> - مساحات آمنة جيدة التهوية للأدوات والمواد',
          '<a href="/services/portable-restrooms">دورات مياه متنقلة</a> - مرافق صحية مع تهوية وتحكم بالروائح',
          '<a href="/services/portable-bathrooms">حمامات متنقلة كاملة</a> - دش وتغيير ملابس وخدمات مياه رمادية منظمة',
          '<a href="/services/portable-canteen">مقاصف جاهزة</a> - مطابخ وأماكن تقديم طعام متوافقة مع السلامة الغذائية',
          '<a href="/services/portable-pantry">بوفية وبنتري متنقلة</a> - دعم مشروبات ووجبات خفيفة للفرق',
          '<a href="/services/portable-warehouse">مستودع جاهز</a> - تخزين واسع ببوابات آمنة ووصول سهل للرافعات',
          '<a href="/services/portable-mobile-containers">حاويات متحركة</a> - تحويلات للحاويات لمكاتب أو سكن',
          '<a href="/services/portable-security-units">وحدات أمنية صغيرة</a> - كبائن حراسة ونقاط تفتيش مدمجة',
          '<a href="/services/portable-security-offices">مكاتب أمنية</a> - غرف مراقبة وتحكم أكبر مع تجهيزات بيانات',
          '<a href="/services/portable-log-cabin">كابينة لوغ خشبية</a> - شكل خشبي لضيافة أو سياحة',
          '<a href="/services/aluminum">تشطيبات ألمنيوم</a> - واجهات وأبواب وشتر وزخارف معدنية',
          '<a href="/services/welding">خدمات لحام</a> - MIG/TIG وقوسي موثق مع تقارير جودة',
          '<a href="/services/cutting-bending">قص وثني</a> - قص ليزر/بلازما وثني CNC لأجزاء جاهزة',
        ],
      },
      {
        heading: "الأسئلة الشائعة",
        body: [
          "نساعدك في تخطيط مجمع يضم سكن، مكاتب، مطابخ، صلاة، تخزين، وصحة عبر اختيار الوحدات المتناسقة، مسارات الخدمات، وترتيب التسليم لتقليل زمن التركيب.",
          "كل الصفحات تحتوي روابط canonical ذاتية، وhreflang للعربية والإنجليزية، ومخطط FAQ منظم. تواصل عبر واتساب لأسعار سريعة ونصائح مخطط.",
        ],
      },
    ],
    faqs: [
      {
        question: "ما زمن التسليم والتركيب في السعودية؟",
        answer:
          "التصاميم القياسية تشحن خلال أيام مع رفع وتسوية وتشغيل من فريقنا، أما المجمعات المخصصة فباتفاق جداول مراحل التصميم والتنفيذ.",
      },
      {
        question: "هل توفرون مستندات ولافتات باللغتين؟",
        answer:
          "نعم، الرسومات، تعليمات التشغيل والصيانة، واللافتات والسلامة متاحة بالعربية والإنجليزية لتسهيل التسليم والتدقيق.",
      },
      {
        question: "هل يمكن نقل الكبائن أو توسعتها لاحقاً؟",
        answer:
          "كل الوحدات مجهزة للرفع بالكرين مع نقاط موثقة، ويمكننا فك ونقل أو إضافة وحدات متطابقة عند تغير عدد الأفراد أو متطلبات الموقع.",
      },
      {
        question: "ما المناطق التي تخدمونها؟",
        answer:
          "نصنع في جدة ونغطي المملكة بالكامل بما في ذلك الرياض والدمام ونيوم والمواقع النفطية والمواقع المؤقتة للفعاليات.",
      },
      {
        question: "كيف تحافظون على الراحة والنظافة في الحر الشديد؟",
        answer:
          "نحدد العزل وحساب أحمال التكييف، التهوية، التحكم بالروائح، والتشطيبات سهلة التنظيف. وحدات الصحة مزودة بلوحات خدمة لصيانة أسرع.",
      },
    ],
  },
};
