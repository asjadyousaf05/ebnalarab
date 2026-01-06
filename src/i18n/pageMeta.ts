import { Locale } from "@/context/LocaleContext";
import { servicesContent } from "./servicesContent";

type MetaEntry = { title: string; description: string };

type PageMeta = {
  home: MetaEntry;
  about: MetaEntry;
  services: MetaEntry;
  gallery: MetaEntry;
  contact: MetaEntry;
  serviceDetails: Record<string, MetaEntry>;
};

const buildServiceMeta = (locale: Locale): Record<string, MetaEntry> =>
  servicesContent[locale].reduce(
    (acc, service) => ({
      ...acc,
      [service.slug]: { title: service.metaTitle, description: service.metaDescription },
    }),
    {}
  );

export const pageMeta: Record<Locale, PageMeta> = {
  en: {
    home: {
      title: "Ebn Al Arab Porta Cabins Saudi Arabia",
      description:
        "Porta cabins, prefab offices, and modular compounds built in Saudi Arabia with fast delivery for government, industrial, and commercial projects.",
    },
    about: {
      title: "About Ebn Al Arab | Porta Cabins Saudi",
      description:
        "Saudi manufacturer of porta cabins, prefab buildings, and modular solutions delivering fast, compliant projects for contractors, government, and industry.",
    },
    services: {
      title: "Portable Cabins & Modular Buildings KSA | Ebn Al Arab",
      description:
        "Porta cabins, site offices, labor camps, restrooms, kitchens, warehouses, and security cabins built in Saudi Arabia with fast delivery and bilingual support.",
    },
    gallery: {
      title: "Project Gallery | Porta Cabins & Modular KSA",
      description:
        "View completed portable cabins, prefab buildings, and modular projects across Saudi Arabia, including Jeddah, Riyadh, NEOM, and oil & gas sites.",
    },
    contact: {
      title: "Contact Ebn Al Arab | Porta Cabins KSA",
      description:
        "Request a quote for porta cabins, site offices, labor camps, or warehouses in Saudi Arabia. Serving Jeddah, Riyadh, Dammam, NEOM, and remote sites.",
    },
    serviceDetails: buildServiceMeta("en"),
  },
  ar: {
    home: {
      title: "ابن العرب | كبائن برتا ومباني جاهزة في السعودية",
      description:
        "كبائن جاهزة ومكاتب ومعسكرات عمال ومرافق صحية وتصنيع معدني معزول بتسليم سريع في جدة والرياض والدمام ونيوم.",
    },
    about: {
      title: "من نحن | ابن العرب للكرفانات والمباني المسبقة الصنع",
      description:
        "مصنّع سعودي للكرفانات والمباني المسبقة الصنع يقدم كبائن برتا ومكاتب وسكن ومعسكرات عمال بجودة موثقة وتسليم سريع.",
    },
    services: {
      title: "حلول كبائن برتا والمباني الجاهزة في السعودية | ابن العرب",
      description:
        "كبائن برتا ومكاتب ومعسكرات عمال ومطابخ ومستودعات وأمن بتركيب سريع ودعم ثنائي اللغة لخدمة مشاريع المملكة.",
    },
    gallery: {
      title: "معرض المشاريع | كبائن جاهزة ومباني مسبقة الصنع",
      description:
        "اطلع على مشاريع الكبائن والمباني الجاهزة في السعودية بما فيها جدة والرياض ونيوم ومواقع النفط والغاز.",
    },
    contact: {
      title: "تواصل معنا | ابن العرب للكرفانات والمباني الجاهزة",
      description:
        "اطلب عرض سعر لكبائن برتا أو مكاتب مواقع أو معسكرات عمال في السعودية مع دعم كامل للتسليم والتشغيل.",
    },
    serviceDetails: buildServiceMeta("ar"),
  },
};
