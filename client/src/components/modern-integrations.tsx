import { useState } from "react";
import { useLanguage } from "./language-provider";

export function ModernIntegrations() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("delivery");

  const integrationCategories: Record<string, {
    title: string;
    icon: string;
    description: string;
    integrations: Array<{ name: string; logo: string; type: string }>;
  }> = {
    delivery: {
      title: t("Livraison & Logistique", "Delivery & Logistics"),
      icon: "fas fa-truck",
      description: t(
        "Connectez-vous aux principales plateformes de livraison et services logistiques",
        "Connect to major delivery platforms and logistics services"
      ),
      integrations: [
        { name: "Glovo", logo: "fab fa-google", type: "Plateforme de livraison" },
        { name: "Stuart", logo: "fas fa-motorcycle", type: "Livraison express" },
        { name: "Wolt Drive", logo: "fas fa-car", type: "Livraison restaurant" },
        { name: "Stava", logo: "fas fa-shipping-fast", type: "Logistique" },
        { name: "DeliGoo", logo: "fas fa-truck-moving", type: "Livraison food" },
        { name: "Relay", logo: "fas fa-exchange-alt", type: "Points relais" },
        { name: "ShipDay", logo: "fas fa-calendar-day", type: "Planification livraison" },
        { name: "Restimo", logo: "fas fa-route", type: "Optimisation trajets" },
        { name: "PAPU.io", logo: "fas fa-map-marked-alt", type: "Gestion livraison" },
        { name: "Smart Delivery Track", logo: "fas fa-satellite", type: "Suivi en temps réel" }
      ]
    },
    pos: {
      title: t("Systèmes de Caisse", "POS Systems"),
      icon: "fas fa-cash-register",
      description: t(
        "Intégration avec les principaux systèmes de point de vente",
        "Integration with major point of sale systems"
      ),
      integrations: [
        { name: "POS Bistro", logo: "fas fa-utensils", type: "POS Restaurant" },
        { name: "Foodsoft", logo: "fas fa-hamburger", type: "Gestion restaurant" },
        { name: "izzyRest", logo: "fas fa-tablet-alt", type: "Caisse tactile" },
        { name: "X2", logo: "fas fa-times", type: "POS Moderne" },
        { name: "SimpleGastronomy", logo: "fas fa-wine-glass", type: "Gastronomie" },
        { name: "Generic REST API", logo: "fas fa-plug", type: "API personnalisée" },
        { name: "Star CloudPRNT", logo: "fas fa-print", type: "Impression cloud" }
      ]
    },
    payment: {
      title: t("Moyens de Paiement", "Payment Methods"),
      icon: "fas fa-credit-card",
      description: t(
        "Acceptez tous les moyens de paiement locaux et internationaux",
        "Accept all local and international payment methods"
      ),
      integrations: [
        { name: "Stripe", logo: "fab fa-stripe", type: "Paiement en ligne" },
        { name: "Adyen", logo: "fas fa-globe", type: "Paiement global" },
        { name: "PayU", logo: "fas fa-university", type: "Paiement digital" },
        { name: "PayPal", logo: "fab fa-paypal", type: "Portefeuille digital" },
        { name: "Apple Pay", logo: "fab fa-apple", type: "Paiement mobile" },
        { name: "Google Pay", logo: "fab fa-google", type: "Paiement Google" },
        { name: "AliPay", logo: "fas fa-mobile-alt", type: "Paiement chinois" },
        { name: "Cash App Pay", logo: "fas fa-dollar-sign", type: "Paiement instantané" },
        { name: "Link", logo: "fas fa-link", type: "Paiement direct" },
        { name: "GrabPay", logo: "fas fa-hand-holding-usd", type: "Paiement asiatique" },
        { name: "Mobile Pay", logo: "fas fa-mobile", type: "Paiement mobile" },
        { name: "PayNow", logo: "fas fa-clock", type: "Paiement instantané" },
        { name: "PromptPay", logo: "fas fa-qrcode", type: "QR Code payment" },
        { name: "WeChat Pay", logo: "fab fa-weixin", type: "Paiement WeChat" }
      ]
    },
    bnpl: {
      title: t("Paiement Différé", "Buy Now Pay Later"),
      icon: "fas fa-calendar-plus",
      description: t(
        "Solutions de paiement fractionné et différé",
        "Split and deferred payment solutions"
      ),
      integrations: [
        { name: "Affirm", logo: "fas fa-check-circle", type: "Crédit consommateur" },
        { name: "AfterPay", logo: "fas fa-calendar-week", type: "Paiement en 4x" },
        { name: "ClearPay", logo: "fas fa-gem", type: "Paiement échelonné" },
        { name: "Klarna", logo: "fas fa-shopping-bag", type: "Achat différé" }
      ]
    },
    banking: {
      title: t("Services Bancaires", "Banking Services"),
      icon: "fas fa-university",
      description: t(
        "Intégrations bancaires et virements directs",
        "Banking integrations and direct transfers"
      ),
      integrations: [
        { name: "Bancontact", logo: "fas fa-credit-card", type: "Belgique" },
        { name: "Blik", logo: "fas fa-mobile-alt", type: "Pologne" },
        { name: "EPS", logo: "fas fa-euro-sign", type: "Autriche" },
        { name: "FPX", logo: "fas fa-landmark", type: "Malaisie" },
        { name: "Giropay", logo: "fas fa-exchange-alt", type: "Allemagne" },
        { name: "iDEAL", logo: "fas fa-heart", type: "Pays-Bas" },
        { name: "P24", logo: "fas fa-shopping-cart", type: "Pologne" },
        { name: "Sofort", logo: "fas fa-bolt", type: "Europe" },
        { name: "ACH Direct Debit", logo: "fas fa-university", type: "USA" },
        { name: "Bacs Direct Debit", logo: "fas fa-pound-sign", type: "UK" },
        { name: "BECS", logo: "fas fa-coins", type: "Australie" },
        { name: "Pre-authorized debit", logo: "fas fa-maple-leaf", type: "Canada" },
        { name: "Boleto", logo: "fas fa-barcode", type: "Brésil" },
        { name: "SEPA debit", logo: "fas fa-euro-sign", type: "Europe" },
        { name: "Konbini", logo: "fas fa-store", type: "Japon" },
        { name: "OXXO", logo: "fas fa-shopping-basket", type: "Mexique" }
      ]
    },
    analytics: {
      title: t("Analytics & Marketing", "Analytics & Marketing"),
      icon: "fas fa-chart-line",
      description: t(
        "Outils d'analyse et de marketing digital",
        "Analytics and digital marketing tools"
      ),
      integrations: [
        { name: "Google Analytics", logo: "fab fa-google", type: "Analytics web" },
        { name: "Google Tag Manager", logo: "fas fa-tags", type: "Gestion tags" },
        { name: "Meta", logo: "fab fa-meta", type: "Facebook/Instagram" },
        { name: "CookieYes", logo: "fas fa-cookie-bite", type: "Gestion cookies" }
      ]
    },
    websites: {
      title: t("Plateformes Web", "Web Platforms"),
      icon: "fas fa-globe",
      description: t(
        "Intégrations avec les plateformes de création de sites",
        "Integrations with website creation platforms"
      ),
      integrations: [
        { name: "WordPress", logo: "fab fa-wordpress", type: "CMS populaire" },
        { name: "Duda", logo: "fas fa-paint-brush", type: "Website builder" },
        { name: "Wix", logo: "fab fa-wix", type: "Création sites" },
        { name: "SquareSpace", logo: "fas fa-square", type: "Design sites" }
      ]
    }
  };

  const categories = Object.keys(integrationCategories);

  return (
    <section className="py-24 bg-[var(--background)] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-20"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center px-4 py-2 bg-[var(--surface)] border border-[var(--border)] rounded-full mb-6">
            <i className="fas fa-plug text-[var(--primary)] mr-2"></i>
            <span className="text-sm text-[var(--text-secondary)]">
              {t("Intégrations disponibles", "Available integrations")}
            </span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-[var(--text-primary)]">
              {t("Plus de", "More than")}
            </span>
            <br />
            <span className="gradient-text-modern">
              {t("100 intégrations", "100 integrations")}
            </span>
          </h2>
          
          <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto">
            {t(
              "Connectez SAMEATS à tous vos outils favoris. Paiements, livraison, analytics, marketing et bien plus.",
              "Connect SAMEATS to all your favorite tools. Payments, delivery, analytics, marketing and more."
            )}
          </p>
        </div>

        {/* Categories Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => {
            const cat = integrationCategories[category];
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] text-white shadow-lg scale-105'
                    : 'bg-[var(--surface)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--surface-light)]'
                }`}
              >
                <i className={`${cat.icon} mr-2`}></i>
                {cat.title}
              </button>
            );
          })}
        </div>

        {/* Active Category Display */}
        <div className="mb-16">
          <div className="text-center mb-12 animate-slide-in-up">
            <h3 className="text-3xl font-bold text-[var(--text-primary)] mb-4">
              {integrationCategories[activeCategory].title}
            </h3>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              {integrationCategories[activeCategory].description}
            </p>
          </div>

          {/* Integrations Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {integrationCategories[activeCategory].integrations.map((integration, index) => (
              <div
                key={index}
                className="modern-card p-6 text-center group hover:shadow-xl transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[var(--surface-light)] to-[var(--surface)] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <i className={`${integration.logo} text-2xl text-[var(--primary)]`}></i>
                </div>
                
                <h4 className="text-lg font-bold text-[var(--text-primary)] mb-2">
                  {integration.name}
                </h4>
                
                <p className="text-[var(--text-secondary)] text-sm">
                  {integration.type}
                </p>
                
                <div className="mt-4 pt-4 border-t border-[var(--border)]">
                  <div className="inline-flex items-center px-3 py-1 bg-[var(--primary)]/10 text-[var(--primary)] rounded-full text-xs font-medium">
                    <i className="fas fa-check mr-1"></i>
                    {t("Disponible", "Available")}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          {[
            { value: "100+", label: t("Intégrations", "Integrations"), icon: "fas fa-plug" },
            { value: "50+", label: t("Moyens de paiement", "Payment methods"), icon: "fas fa-credit-card" },
            { value: "10+", label: t("Plateformes livraison", "Delivery platforms"), icon: "fas fa-truck" },
            { value: "15+", label: t("Systèmes POS", "POS systems"), icon: "fas fa-cash-register" }
          ].map((stat, index) => (
            <div
              key={index}
              className="modern-card p-6 text-center group animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                <i className={`${stat.icon} text-white`}></i>
              </div>
              <div className="text-2xl md:text-3xl font-bold gradient-text-modern mb-1">
                {stat.value}
              </div>
              <div className="text-[var(--text-secondary)] text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center animate-fade-in-up">
          <div className="modern-card p-8 bg-gradient-to-r from-[var(--surface)] to-[var(--surface-light)]">
            <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-4">
              {t("Besoin d'une intégration personnalisée ?", "Need a custom integration?")}
            </h3>
            <p className="text-[var(--text-secondary)] mb-6 max-w-2xl mx-auto">
              {t(
                "Notre équipe technique peut développer des intégrations sur mesure pour répondre à vos besoins spécifiques",
                "Our technical team can develop custom integrations to meet your specific needs"
              )}
            </p>
            <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] text-white font-semibold rounded-xl hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              <i className="fas fa-code mr-2"></i>
              <span>{t("Demander une intégration", "Request integration")}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}