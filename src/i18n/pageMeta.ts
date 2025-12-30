import { Locale } from "@/context/LocaleContext";

type MetaEntry = { title: string; description: string };

type PageMeta = {
  home: MetaEntry;
  about: MetaEntry;
  services: MetaEntry;
  gallery: MetaEntry;
  contact: MetaEntry;
  serviceDetails: Record<string, MetaEntry>;
};

export const pageMeta: Record<Locale, PageMeta> = {
  en: {
    home: {
      title: "Ebn Al Arab Portable Cabins & Modular Buildings Saudi",
      description:
        "Portable cabins, modular buildings, and prefab offices across Saudi Arabia. Trusted supplier in Jeddah for B2B, government, and industrial projects.",
    },
    about: {
      title: "About Ebn Al Arab | Prefab & Portable Buildings Saudi",
      description:
        "Saudi manufacturer of portable cabins, prefab buildings, and modular solutions delivering fast projects for government, contractors, and industry.",
    },
    services: {
      title: "Modular & Portable Building Services KSA | Ebn Al Arab",
      description:
        "Complete portable cabins, prefab offices, labor camps, mosques, toilets, warehouses, and storage units for Saudi projects with turnkey delivery.",
    },
    gallery: {
      title: "Project Gallery | Portable Cabins & Prefab Buildings KSA",
      description:
        "View completed portable cabins, prefab buildings, and modular projects across Saudi Arabia, including Jeddah industrial zones and oil & gas sites.",
    },
    contact: {
      title: "Contact Ebn Al Arab | Portable Cabins & Modular Saudi",
      description:
        "Request a quote for portable cabins, prefab offices, or labor camps in Saudi Arabia. Serving Jeddah, Riyadh, Dammam, and government projects.",
    },
    serviceDetails: {
      "porta-cabin": {
        title: "Portable Cabins Saudi Arabia | Fast Delivery by Ebn Al Arab",
        description:
          "Durable portable cabins in Saudi Arabia for sites, offices, and housing. Built for heat, quick to deploy, compliant with Saudi standards.",
      },
      "portable-site-offices": {
        title: "Portable Site Offices KSA | Ready Modular Offices",
        description:
          "Secure, air-conditioned portable offices for Saudi sites and projects. Custom layouts, smart storage, and rapid installation in Jeddah and nationwide.",
      },
      "portable-labor-camps": {
        title: "Portable Labor Camps Saudi Arabia | Turnkey Housing",
        description:
          "Turnkey portable labor camps with sleeping, dining, hygiene blocks, and HVAC. Built for remote Saudi projects and industrial zones.",
      },
      "portable-mosques": {
        title: "Portable Mosques KSA | Ready Prayer Units for Sites",
        description:
          "Portable mosques and prayer units for Saudi sites with ablution areas, AC, and compliant layouts. Fast deployment for contractors.",
      },
      "portable-restrooms": {
        title: "Portable Toilets Saudi Arabia | Hygienic Site Solutions",
        description:
          "Hygienic portable toilets and shower units for Saudi job sites and events. Easy maintenance, fast setup, and odor control.",
      },
      "portable-warehouse": {
        title: "Portable Warehouses Saudi Arabia | Secure Storage Units",
        description:
          "Modular storage and portable warehouses for Saudi logistics, industrial zones, and oil & gas sites. Secure, expandable, and fast to install.",
      },
      "portable-security-units": {
        title: "Portable Security Cabins KSA | Guard Rooms & Checkpoints",
        description:
          "Guard cabins and checkpoints built for Saudi sites with ballistic options, AC, and clear visibility. Rapid delivery across Jeddah and KSA.",
      },
      "portable-canteen": {
        title: "Portable Kitchens KSA | Canteen Units for Camps & Sites",
        description:
          "Fully equipped portable kitchens and canteens for labor camps and remote sites in Saudi Arabia. Ventilation, hygiene, and fast setup.",
      },
    },
  },
  ar: {
    home: {
      title: "إبن العرب | كبائن وحلول مبانٍ مسبقة الصنع في السعودية",
      description:
        "كبائن متنقلة ومبانٍ مسبقة الصنع في السعودية مع فريق إبن العرب. مورد موثوق بجدة للمشاريع الحكومية والصناعية ومقاولي القطاع الخاص.",
    },
    about: {
      title: "من نحن | إبن العرب للمباني المسبقة والكبائن المتنقلة",
      description:
        "شركة سعودية لصناعة الكبائن المتنقلة والمباني الجاهزة، خبرة في تسليم المشاريع السريعة للجهات الحكومية والمقاولين والقطاع الصناعي.",
    },
    services: {
      title: "خدمات الكبائن والمباني المسبقة في السعودية | إبن العرب",
      description:
        "حلول متكاملة للكبائن الجاهزة، المكاتب المتنقلة، معسكرات العمال، المساجد، دورات المياه، والمستودعات مع تسليم جاهز للمشاريع السعودية.",
    },
    gallery: {
      title: "معرض المشاريع | كبائن ومبانٍ جاهزة في السعودية",
      description:
        "شاهد نماذج مشاريع الكبائن والمباني المسبقة في السعودية، بما في ذلك المناطق الصناعية بجدة ومواقع النفط والغاز.",
    },
    contact: {
      title: "تواصل معنا | إبن العرب للكبائن والمباني المسبقة في السعودية",
      description:
        "اطلب عرض سعر للكباين والمكاتب والمعسكرات الجاهزة في السعودية. نخدم جدة والرياض والدمام والمشاريع الحكومية بسرعة واستجابة عالية.",
    },
    serviceDetails: {
      "porta-cabin": {
        title: "كبائن متنقلة في السعودية | تسليم سريع من ابن العرب",
        description:
          "كبائن متينة للمواقع والمكاتب والسكن، مصممة للحرارة ومطابقة للمعايير السعودية مع تسليم سريع وتنفيذ احترافي.",
      },
      "portable-site-offices": {
        title: "مكاتب متنقلة للمشاريع في السعودية | جاهزة ومكيفة",
        description:
          "مكاتب موقع متنقلة آمنة ومكيفة بترتيبات مرنة وتخزين ذكي، تركيب سريع في جدة وكافة مدن المملكة.",
      },
      "portable-labor-camps": {
        title: "معسكرات عمال متنقلة في السعودية | حلول متكاملة",
        description:
          "معسكرات عمال جاهزة تشمل غرف النوم، المطاعم، وحدات النظافة والتكييف، مصممة للمشاريع البعيدة والمناطق الصناعية في المملكة.",
      },
      "portable-mosques": {
        title: "مساجد متنقلة في السعودية | وحدات صلاة جاهزة للمواقع",
        description:
          "مساجد ووحدات صلاة متنقلة مزودة بمرافق وضوء وتكييف وتصاميم معتمدة، تركيب سريع لخدمة مواقع المشاريع.",
      },
      "portable-restrooms": {
        title: "دورات مياه متنقلة في السعودية | حلول صحية للمواقع",
        description:
          "وحدات دورات مياه واستحمام متنقلة نظيفة وسهلة الصيانة مع تحكم بالروائح وتركيب سريع لمواقع العمل والفعاليات.",
      },
      "portable-warehouse": {
        title: "مستودعات متنقلة في السعودية | تخزين آمن وقابل للتوسعة",
        description:
          "مستودعات وحلول تخزين متنقلة للمناطق الصناعية واللوجستية، أمان عالٍ وقابلية توسعة وتركيب سريع لخدمة المشاريع السعودية.",
      },
      "portable-security-units": {
        title: "كبائن أمن متنقلة في السعودية | غرف حراسة ونقاط تفتيش",
        description:
          "كبائن حراسة ونقاط تفتيش جاهزة بتجهيزات أمان، تكييف ورؤية واضحة، تسليم سريع في جدة وكافة مناطق المملكة.",
      },
      "portable-canteen": {
        title: "مطابخ وكافتيريات متنقلة في السعودية | تجهيز كامل",
        description:
          "مطابخ وكافتيريات متنقلة مجهزة للمعسكرات والمواقع البعيدة، تهوية صحية وتجهيز سريع لتلبية احتياجات العمال والمشاريع.",
      },
    },
  },
};
