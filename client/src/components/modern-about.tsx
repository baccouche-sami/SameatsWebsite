import { useLanguage } from "./language-provider";
import sameatsLogo from "@assets/logo-blanc_1755211740901.png";

export function ModernAbout() {
  const { t } = useLanguage();

  return (
    <div className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-30"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center px-4 py-2 bg-[var(--surface)]/50 backdrop-blur-sm border border-[var(--border)] rounded-full mb-6">
            <i className="fas fa-history text-[var(--primary)] mr-2"></i>
            <span className="text-sm text-[var(--text-secondary)]">
              {t("Notre histoire", "Our story")}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-[var(--text-primary)]">
              {t("À propos de", "About")}
            </span>
            <br />
            <span className="gradient-text-modern">SAMEATS</span>
          </h1>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Text Content */}
            <div className="animate-slide-in-left">
              <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-6">
                {t("Notre histoire", "Our story")}
              </h2>
              
              <div className="space-y-6 text-lg text-[var(--text-secondary)] leading-relaxed">
                <p>
                  {t(
                    "Après plus de 6 ans d'expérience dans la restauration et le fast-food, et après avoir travaillé avec de nombreux types de services, j'ai décidé de créer une solution complète et simple : SAMEATS.",
                    "After more than 6 years of experience in restaurants and fast-food, and after working with many types of services, I decided to create a complete and simple solution: SAMEATS."
                  )}
                </p>
                
                <p>
                  {t(
                    "SAMEATS est un produit SaaS développé par mon agence Samkode (IT Agency) pour simplifier et optimiser la gestion des restaurants.",
                    "SAMEATS is a SaaS product developed by my agency Samkode (IT Agency) to simplify and optimize restaurant management."
                  )}
                </p>
                
                <p>
                  {t(
                    "Notre mission est de donner aux restaurateurs les outils digitaux nécessaires pour prospérer dans un monde de plus en plus connecté, sans les contraintes techniques complexes.",
                    "Our mission is to give restaurateurs the digital tools they need to thrive in an increasingly connected world, without complex technical constraints."
                  )}
                </p>
              </div>
            </div>

            {/* Visual Content */}
            <div className="animate-slide-in-right">
              <div className="modern-card p-8 text-center">
                <div className="mb-6">
                  <img 
                    src={sameatsLogo} 
                    alt="SAMEATS Logo" 
                    className="h-20 w-auto mx-auto mb-4"
                  />
                  <div className="text-2xl font-bold gradient-text-modern">
                    SAMEATS
                  </div>
                  <div className="text-sm text-[var(--text-muted)] mt-2">
                    {t("by Samkode", "by Samkode")}
                  </div>
                </div>
                
                <div className="space-y-4 text-sm text-[var(--text-secondary)]">
                  <div className="flex items-center justify-between">
                    <span>{t("Fondé en", "Founded in")}</span>
                    <span className="font-semibold">2018</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>{t("Restaurants clients", "Restaurant clients")}</span>
                    <span className="font-semibold">500+</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>{t("Pays", "Countries")}</span>
                    <span className="font-semibold">25</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>{t("Commandes traitées", "Orders processed")}</span>
                    <span className="font-semibold">2M+</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mission & Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="modern-card p-6 text-center animate-fade-in-up" style={{ animationDelay: "200ms" }}>
              <div className="w-16 h-16 bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-lightbulb text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-[var(--text-primary)] mb-3">
                {t("Innovation", "Innovation")}
              </h3>
              <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                {t(
                  "Nous développons des solutions modernes qui anticipent les besoins de demain",
                  "We develop modern solutions that anticipate tomorrow's needs"
                )}
              </p>
            </div>

            <div className="modern-card p-6 text-center animate-fade-in-up" style={{ animationDelay: "300ms" }}>
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-handshake text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-[var(--text-primary)] mb-3">
                {t("Simplicité", "Simplicity")}
              </h3>
              <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                {t(
                  "Des outils puissants mais simples à utiliser, sans formation complexe",
                  "Powerful but simple tools to use, without complex training"
                )}
              </p>
            </div>

            <div className="modern-card p-6 text-center animate-fade-in-up" style={{ animationDelay: "400ms" }}>
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-heart text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-[var(--text-primary)] mb-3">
                {t("Support", "Support")}
              </h3>
              <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                {t(
                  "Un accompagnement personnalisé pour la réussite de votre restaurant",
                  "Personalized support for your restaurant's success"
                )}
              </p>
            </div>
          </div>

          {/* Samkode Section */}
          <div className="modern-card p-8 text-center animate-fade-in-up" style={{ animationDelay: "500ms" }}>
            <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-4">
              {t("Développé par Samkode", "Developed by Samkode")}
            </h3>
            <p className="text-[var(--text-secondary)] mb-6 leading-relaxed">
              {t(
                "Samkode est une agence IT spécialisée dans le développement de solutions SaaS pour l'industrie de la restauration. Notre expertise technique combinée à notre connaissance du terrain nous permet de créer des produits qui répondent vraiment aux besoins des restaurateurs.",
                "Samkode is an IT agency specialized in developing SaaS solutions for the restaurant industry. Our technical expertise combined with our field knowledge allows us to create products that truly meet restaurateurs' needs."
              )}
            </p>
            
            <div className="flex items-center justify-center space-x-6 text-sm text-[var(--text-muted)]">
              <div className="flex items-center">
                <i className="fas fa-code text-[var(--primary)] mr-2"></i>
                <span>{t("Développement", "Development")}</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-mobile-alt text-[var(--primary)] mr-2"></i>
                <span>{t("Applications", "Applications")}</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-cloud text-[var(--primary)] mr-2"></i>
                <span>{t("Solutions Cloud", "Cloud Solutions")}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}