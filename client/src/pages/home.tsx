import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { FeaturesSection } from "@/components/features-section";
import { SolutionsSection } from "@/components/solutions-section";
import { PricingSection } from "@/components/pricing-section";
import { ClientsSection } from "@/components/clients-section";
import { DemoSection } from "@/components/demo-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-dark-800 text-white font-inter overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <SolutionsSection />
      <PricingSection />
      <ClientsSection />
      <DemoSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
