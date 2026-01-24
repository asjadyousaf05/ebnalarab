import { MessageCircle } from "lucide-react";
import { useLocale } from "@/context/LocaleContext";
import { copy } from "@/i18n/copy";
import { trackContactClick } from "@/lib/analytics";

export const FloatingWhatsApp = () => {
    const { locale } = useLocale();
    const labels = copy[locale].labels;

    return (
        <div className="fixed left-4 bottom-6 z-50 md:left-6 md:bottom-8">
            <a
                href="https://wa.me/966581460761"
                aria-label={labels.whatsapp}
                className="flex items-center justify-center w-14 h-14 rounded-full bg-green-500 text-white shadow-xl shadow-green-500/40 hover:scale-105 hover:bg-green-600 transition-all duration-300 animate-pulse"
                onClick={() => trackContactClick("https://wa.me/966581460761", "+966581460761")}
                target="_blank"
                rel="noopener noreferrer"
            >
                <MessageCircle className="w-7 h-7" />
            </a>
        </div>
    );
};
