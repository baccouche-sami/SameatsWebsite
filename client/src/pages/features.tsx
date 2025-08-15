import { ModernNavigation } from "@/components/modern-navigation";
import { ModernFeaturesAdvanced } from "@/components/modern-features-advanced";
import { ModernIntegrations } from "@/components/modern-integrations";
import { ModernFooter } from "@/components/modern-footer";
import { SEOHead } from "@/components/seo-head";
import { useLanguage } from "@/components/language-provider";

export function FeaturesPage() {
  const { t, language } = useLanguage();

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--text-primary)]">
      <SEOHead
        title={t(
          "Fonctionnalités SAMEATS - Solution Complète pour Restaurants",
          "SAMEATS Features - Complete Restaurant Solution"
        )}
        description={t(
          "Découvrez toutes les fonctionnalités de SAMEATS : applications mobiles, site web, back-office, intégrations et bien plus pour digitaliser votre restaurant.",
          "Discover all SAMEATS features: mobile apps, website, back-office, integrations and more to digitize your restaurant."
        )}
      />
      
      <ModernNavigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--background)] via-[var(--surface)]/30 to-[var(--background)]"></div>
        <div className="absolute inset-0 dot-pattern opacity-40"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative">
          <div className="text-center animate-fade-in-up">
            <div className="inline-flex items-center px-4 py-2 bg-[var(--surface)] border border-[var(--border)] rounded-full mb-6">
              <i className="fas fa-cogs text-[var(--primary)] mr-2"></i>
              <span className="text-sm text-[var(--text-secondary)]">
                {t("Fonctionnalités complètes", "Complete features")}
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-[var(--text-primary)]">
                {t("Tout ce dont vous", "Everything you")}
              </span>
              <br />
              <span className="gradient-text-modern">
                {t("avez besoin", "need")}
              </span>
            </h1>
            
            <p className="text-xl text-[var(--text-secondary)] max-w-4xl mx-auto mb-8">
              {t(
                "SAMEATS vous offre une solution complète pour digitaliser votre restaurant : applications mobiles, site web professionnel, back-office intelligent et des centaines d'intégrations.",
                "SAMEATS offers you a complete solution to digitize your restaurant: mobile applications, professional website, smart back-office and hundreds of integrations."
              )}
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] text-white font-semibold rounded-xl hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                <i className="fas fa-rocket mr-2"></i>
                <span>{t("Commencer maintenant", "Start now")}</span>
              </button>
              <button className="inline-flex items-center px-8 py-4 bg-[var(--surface)] text-[var(--text-primary)] font-semibold rounded-xl hover:bg-[var(--surface-light)] transition-all duration-300">
                <i className="fas fa-play mr-2"></i>
                <span>{t("Voir la démo", "Watch demo")}</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <ModernFeaturesAdvanced />
      <ModernIntegrations />
      <ModernFooter />
    </div>
  );
}