import { ModernNavigation } from "@/components/modern-navigation";
import { ModernAbout } from "@/components/modern-about";
import { ModernFooter } from "@/components/modern-footer";
import { SEOHead, generateOrganizationSchema } from "@/components/seo-head";
import { useLanguage } from "@/components/language-provider";

export default function About() {
  const { t, language } = useLanguage();

  return (
    <div className="min-h-screen bg-[var(--background)]">
      <SEOHead
        title={t(
          "À Propos SAMEATS - Notre histoire et mission",
          "About SAMEATS - Our story and mission"
        )}
        description={t(
          "Découvrez l'histoire de SAMEATS, créé par Samkode après 6+ ans d'expérience dans la restauration. Solution complète pour digitaliser votre restaurant.",
          "Discover SAMEATS story, created by Samkode after 6+ years of restaurant experience. Complete solution to digitize your restaurant."
        )}
        keywords={t(
          "à propos SAMEATS, Samkode, histoire restaurant, digitalisation restaurant",
          "about SAMEATS, Samkode, restaurant story, restaurant digitization"
        )}
        structuredData={generateOrganizationSchema(language)}
      />
      <ModernNavigation />
      <ModernAbout />
      <ModernFooter />
    </div>
  );
}