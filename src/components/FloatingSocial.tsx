import { useState } from "react";
import { Facebook, Instagram, Linkedin, MessageCircle, PhoneCall, X } from "lucide-react";
import { useLocale } from "@/context/LocaleContext";
import { copy } from "@/i18n/copy";
import { trackContactClick } from "@/lib/analytics";

export const FloatingSocial = () => {
  const { locale } = useLocale();
  const labels = copy[locale].labels;
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed right-4 bottom-6 z-50 md:right-6 md:bottom-8">
      <div className="flex flex-col items-end gap-3">
        {open && (
          <>
            <a
              href="tel:+966581460761"
              aria-label="Call +966 58 146 0761"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/30 hover:bg-primary/90 transition"
              onClick={() => trackContactClick("tel:+966581460761", "+966 58 146 0761")}
            >
              <PhoneCall className="w-6 h-6" />
            </a>
            <a
              href="https://wa.me/966581460761"
              aria-label={labels.whatsapp}
              className="flex items-center justify-center w-12 h-12 rounded-full bg-green-500 text-white shadow-lg shadow-green-500/30 hover:bg-green-600 transition"
              onClick={() => trackContactClick("https://wa.me/966581460761", "+966581460761")}
            >
              <MessageCircle className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/ebn-al-arab-3a72b23a1"
              aria-label={labels.linkedin}
              className="flex items-center justify-center w-12 h-12 rounded-full bg-sky-700 text-white shadow-lg shadow-sky-600/30 hover:bg-sky-800 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://www.instagram.com/ebn_al_arab_est?igsh=ZGlqNGVoZ2pzN3Ru"
              aria-label={labels.instagram}
              className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 via-red-500 to-yellow-400 text-white shadow-lg shadow-pink-500/30 hover:brightness-110 transition"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61585895152020"
              aria-label={labels.facebook}
              className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white shadow-lg shadow-blue-600/30 hover:bg-blue-700 transition"
            >
              <Facebook className="w-6 h-6" />
            </a>
          </>
        )}

        <button
          type="button"
          aria-expanded={open}
          aria-label={open ? labels.closeSocial : labels.openSocial}
          onClick={() => setOpen((prev) => !prev)}
          className="flex items-center justify-center w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-xl shadow-primary/40 hover:scale-105 transition"
        >
          {open ? <X className="w-6 h-6" /> : <PhoneCall className="w-6 h-6" />}
        </button>
      </div>
    </div>
  );
};
