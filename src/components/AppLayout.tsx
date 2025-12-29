import { Outlet } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingSocial } from "@/components/FloatingSocial";
import { useLocale } from "@/context/LocaleContext";

export const AppLayout = () => {
  const { dir } = useLocale();

  return (
    <div className="min-h-screen bg-background flex flex-col" dir={dir}>
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <FloatingSocial />
      <Footer />
    </div>
  );
};
