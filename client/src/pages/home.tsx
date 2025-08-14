import { Navigation } from "@/components/navigation";
import { Hero3DSection } from "@/components/hero-3d-section";
import { KeyBenefitsSection } from "@/components/key-benefits-section";
import { ClientsShowcaseSection } from "@/components/clients-showcase-section";
import { FeaturesSection } from "@/components/features-section";
import { CoreFeaturesSection } from "@/components/core-features-section";
import { EnhancedPricingSection } from "@/components/enhanced-pricing-section";

import { FloatingThreeElements } from "@/components/floating-three-elements";
import { DemoSection } from "@/components/demo-section";
import { ContactQuoteSection } from "@/components/contact-quote-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-dark-800 text-white font-inter overflow-x-hidden relative">
      <FloatingThreeElements />
      <Navigation />
      <Hero3DSection />
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
