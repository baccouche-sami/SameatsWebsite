import { ModernNavigation } from "@/components/modern-navigation";
import { ModernHero } from "@/components/modern-hero";
import { ModernFeaturesGrid } from "@/components/modern-features-grid";
import { ModernClientShowcase } from "@/components/modern-client-showcase";
import { ModernFooter } from "@/components/modern-footer";
import { SEOHead, generateOrganizationSchema } from "@/components/seo-head";
import { useLanguage } from "@/components/language-provider";

export default function Home() {
  const { t, language } = useLanguage();
  
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--text-primary)] font-inter overflow-x-hidden">
      <SEOHead
        title={t(
          "SAMEATS - Solution complète de commande en ligne pour restaurants",
          "SAMEATS - Complete online ordering solution for restaurants"
        )}
        description={t(
          "Digitalisez votre restaurant avec SAMEATS : site web, applications mobiles et back-office. 0% commission, installation 500€, support 24/7. Plus de 500 restaurants nous font confiance.",
          "Digitize your restaurant with SAMEATS: website, mobile apps and back-office. 0% commission, €500 setup, 24/7 support. Over 500 restaurants trust us."
        )}
        keywords={t(
          "restaurant en ligne, commande restaurant, site web restaurant, application restaurant, digitalisation restaurant, sans commission",
          "restaurant online, restaurant ordering, restaurant website, restaurant app, restaurant digitization, no commission"
        )}
        structuredData={generateOrganizationSchema(language)}
      />
      
      <ModernNavigation />
      <ModernHero />
      <ModernFeaturesGrid />
      <ModernClientShowcase />
      <ModernFooter />
    </div>
  );
}
