import { motion } from "framer-motion";
import { useState } from "react";
import { Send, MapPin, Phone, Mail, Clock, MessageCircle, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { copy } from "@/i18n/copy";
import { useLocale } from "@/context/LocaleContext";
import { trackContactClick } from "@/lib/analytics";
import { sendContactEmail } from "@/lib/resendClient";

export const Contact = () => {
  const { locale, dir } = useLocale();
  const t = copy[locale].contact;
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await sendContactEmail({
        name: formData.name,
        email: formData.email,
        company: formData.company,
        message: formData.message,
      });
      toast({
        title: t.form.successTitle,
        description: t.form.successDescription,
      });
      setFormData({ name: "", email: "", company: "", message: "" });
    } catch (err) {
      console.error(err);
      const message =
        err instanceof Error ? err.message : "Email sending is not configured or failed.";
      toast({
        title: "Failed to send",
        description: message || "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="section-padding bg-background" aria-labelledby="contact-heading">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column - Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            dir={dir}
          >
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-3">
              {t.eyebrow}
            </span>
            <h2 id="contact-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              {t.title}
            </h2>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              {t.description}
            </p>

            {/* Contact Info */}
            <div className="space-y-6">
              {t.info.map((info) => {
                const labelKey = info.label.toLowerCase();
                const isPhone = labelKey.includes("phone") || labelKey.includes("tel") || labelKey.includes("الهاتف");
                const isEmail = labelKey.includes("email") || labelKey.includes("البريد");
                const isAddress = labelKey.includes("address") || labelKey.includes("العنوان");
                const isWhatsapp = labelKey.includes("whatsapp") || labelKey.includes("واتساب");
                const isLinkedIn = labelKey.includes("linkedin") || labelKey.includes("لينكد");
                const isHours = labelKey.includes("hour") || labelKey.includes("ساعات");
                let href: string | null = null;
                let target: "_blank" | undefined;
                let rel: string | undefined;
                const Icon =
                  isPhone
                    ? Phone
                    : isEmail
                    ? Mail
                    : isHours
                    ? Clock
                    : isWhatsapp
                    ? MessageCircle
                    : isLinkedIn
                    ? Linkedin
                    : MapPin;

                if (isPhone) {
                  href = `tel:${info.value.replace(/[^+\d]/g, "")}`;
                } else if (isEmail) {
                  href = `mailto:${info.value}`;
                } else if (isAddress) {
                  href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(info.value)}`;
                  target = "_blank";
                  rel = "noopener noreferrer";
                } else if (isWhatsapp) {
                  const waNumber = info.value.replace(/\D/g, "");
                  if (waNumber) {
                    href = `https://wa.me/${waNumber}`;
                    target = "_blank";
                    rel = "noopener noreferrer";
                  }
                } else if (isLinkedIn) {
                  href = `https://${info.value}`;
                  target = "_blank";
                  rel = "noopener noreferrer";
                }

                const onClick =
                  href && (isPhone || isWhatsapp)
                    ? () => trackContactClick(href as string, info.value)
                    : undefined;

                const Value = href ? (
                  <a
                    href={href}
                    target={target}
                    rel={rel}
                    onClick={onClick}
                    className="text-foreground font-medium hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                  >
                    {info.value}
                  </a>
                ) : (
                  <span className="text-foreground font-medium">{info.value}</span>
                );

                return (
                  <div key={info.label} className="flex items-start gap-4" dir={dir}>
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <span className="block text-sm text-muted-foreground mb-1">
                        {info.label}
                      </span>
                      {Value}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Map Embed */}
            <div className="mt-10 rounded-2xl overflow-hidden border border-border/60 shadow-soft">
              <iframe
                title="EBN AL ARAB location"
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2832.3812257041645!2d39.18864657526291!3d21.25530468045135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjHCsDE1JzE5LjEiTiAzOcKwMTEnMjguNCJF!5e1!3m2!1sen!2s!4v1766928936821!5m2!1sen!2s"
                width="100%"
                height="380"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            dir={dir}
          >
            <form onSubmit={handleSubmit} className="p-8 rounded-2xl bg-card border border-border/50 shadow-medium">
              <div className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      {t.form.name}
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={t.form.placeholders.name}
                      required
                      className="h-12"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      {t.form.email}
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={t.form.placeholders.email}
                      required
                      className="h-12"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                    {t.form.company}
                  </label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder={t.form.placeholders.company}
                    className="h-12"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    {t.form.message}
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t.form.placeholders.message}
                    required
                    rows={5}
                    className="resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  variant="hero"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? t.form.submitting : t.form.submit}
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
