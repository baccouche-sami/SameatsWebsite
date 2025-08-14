import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { SEOHead, generateOrganizationSchema } from "@/components/seo-head";
import { EnhancedHero3D } from "@/components/enhanced-hero-3d";
import { KeyBenefitsSection } from "@/components/key-benefits-section";
import { ClientsShowcaseSection } from "@/components/clients-showcase-section";
import { FeaturesSection } from "@/components/features-section";
import { CoreFeaturesSection } from "@/components/core-features-section";
import { EnhancedPricingSection } from "@/components/enhanced-pricing-section";
import { FloatingThreeElements } from "@/components/floating-three-elements";
import { DemoSection } from "@/components/demo-section";
import { ContactQuoteSection } from "@/components/contact-quote-section";
import { useLanguage } from "@/components/language-provider";

export default function Home() {
  const { t, language } = useLanguage();
  
  return (
    <div className="min-h-screen bg-dark-800 text-white font-inter overflow-x-hidden relative">
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
      
      <FloatingThreeElements />
      <Navigation />
      <EnhancedHero3D />
      <KeyBenefitsSection />
      <ClientsShowcaseSection />
      <FeaturesSection />
      <CoreFeaturesSection />
      <EnhancedPricingSection />
      <DemoSection />
      <ContactQuoteSection />
      <Footer />
    </div>
  );
}
