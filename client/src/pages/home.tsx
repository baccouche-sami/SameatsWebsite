import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { FeaturesSection } from "@/components/features-section";
import { SolutionsOverviewSection } from "@/components/solutions-overview-section";
import { CoreFeaturesSection } from "@/components/core-features-section";
import { WebsiteExamplesSection } from "@/components/website-examples-section";
import { PricingSection } from "@/components/pricing-section";
import { ClientsSection } from "@/components/clients-section";

import { FloatingThreeElements } from "@/components/floating-three-elements";
import { DemoSection } from "@/components/demo-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-dark-800 text-white font-inter overflow-x-hidden relative">
      <FloatingThreeElements />
      <Navigation />
      <HeroSection />
      <SolutionsOverviewSection />
      <FeaturesSection />
      <CoreFeaturesSection />
      <WebsiteExamplesSection />
      <PricingSection />
      <ClientsSection />
      <DemoSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
