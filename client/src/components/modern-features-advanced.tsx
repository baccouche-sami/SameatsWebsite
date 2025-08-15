import { useState } from "react";
import { useLanguage } from "./language-provider";
import dashboardImage from "@assets/generated_images/Restaurant_dashboard_interface_f9841e0c.png";
import mobileAppImage from "@assets/generated_images/Restaurant_mobile_app_e4bf46a3.png";
import websiteImage from "@assets/generated_images/Restaurant_website_mockup_eed2dfd1.png";

export function ModernFeaturesAdvanced() {
  const { t } = useLanguage();
  const [activeFeature, setActiveFeature] = useState(0);

  const mainFeatures = [
    {
      id: "website",
      icon: "fas fa-globe",
      title: t("Site Web Professionnel", "Professional Website"),
      shortDesc: t("Site responsive optimisé", "Optimized responsive site"),
      description: t(
        "Créez une présence en ligne professionnelle avec votre site de commande personnalisé. Design responsive, optimisé pour mobile et référencement SEO.",
        "Create a professional online presence with your custom ordering site. Responsive design, mobile-optimized and SEO-ready."
      ),
      image: websiteImage,
      features: [
        t("Design 100% personnalisé", "100% custom design"),
        t("Optimisation mobile-first", "Mobile-first optimization"),
        t("SEO et référencement", "SEO optimization"),
        t("Intégration réseaux sociaux", "Social media integration")
      ],
      color: "from-[var(--primary)] to-blue-500"
    },
    {
      id: "mobile",
      icon: "fas fa-mobile-alt", 
      title: t("Applications Mobiles", "Mobile Applications"),
      shortDesc: t("Apps iOS & Android natives", "Native iOS & Android apps"),
      description: t(
        "Applications mobiles natives avec votre marque pour iOS et Android. Interface intuitive, notifications push et synchronisation en temps réel.",
        "Native mobile apps with your brand for iOS and Android. Intuitive interface, push notifications and real-time sync."
      ),
      image: mobileAppImage,
      features: [
        t("Apps natives iOS/Android", "Native iOS/Android apps"),
        t("Notifications push", "Push notifications"),
        t("Commande hors-ligne", "Offline ordering"),
        t("Géolocalisation intégrée", "Built-in geolocation")
      ],
      color: "from-purple-500 to-[var(--accent)]"
    },
    {
      id: "dashboard",
      icon: "fas fa-chart-line",
      title: t("Back-Office Intelligent", "Smart Back-Office"),
      shortDesc: t("Gestion complète restaurant", "Complete restaurant management"),
      description: t(
        "Tableau de bord complet pour gérer votre restaurant : commandes en temps réel, analytics avancés, gestion du menu et des stocks.",
        "Complete dashboard to manage your restaurant: real-time orders, advanced analytics, menu and inventory management."
      ),
      image: dashboardImage,
      features: [
        t("Analytics en temps réel", "Real-time analytics"),
        t("Gestion des commandes", "Order management"),
        t("Contrôle des stocks", "Inventory control"),
        t("Rapports détaillés", "Detailed reports")
      ],
      color: "from-green-500 to-emerald-400"
    }
  ];

  const additionalFeatures = [
    {
      icon: "fas fa-truck",
      title: t("Livraison Intelligente", "Smart Delivery"),
      description: t("Optimisation automatique des trajets et suivi en temps réel", "Automatic route optimization and real-time tracking"),
      metric: "90%",
      metricLabel: t("plus rapide", "faster")
    },
    {
      icon: "fas fa-credit-card", 
      title: t("Paiements Sécurisés", "Secure Payments"),
      description: t("Intégration complète avec tous les moyens de paiement", "Complete integration with all payment methods"),
      metric: "100%",
      metricLabel: t("sécurisé", "secure")
    },
    {
      icon: "fas fa-users",
      title: t("Fidélisation Client", "Customer Loyalty"),
      description: t("Programme de fidélité et marketing automatisé", "Loyalty program and automated marketing"),
      metric: "+65%",
      metricLabel: t("rétention", "retention")
    },
    {
      icon: "fas fa-cog",
      title: t("Intégrations", "Integrations"),
      description: t("Connectez vos outils favoris et automatisez votre workflow", "Connect your favorite tools and automate your workflow"),
      metric: "50+",
      metricLabel: t("intégrations", "integrations")
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--background)] to-[var(--surface)]/30"></div>
      <div className="absolute inset-0 dot-pattern opacity-40"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center px-4 py-2 bg-[var(--surface)] border border-[var(--border)] rounded-full mb-6">
            <i className="fas fa-rocket text-[var(--primary)] mr-2"></i>
            <span className="text-sm text-[var(--text-secondary)]">
              {t("Fonctionnalités avancées", "Advanced features")}
            </span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-[var(--text-primary)]">
              {t("Tout ce dont vous avez", "Everything you need")}
            </span>
            <br />
            <span className="gradient-text-modern">
              {t("besoin pour réussir", "to succeed")}
            </span>
          </h2>
          
          <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto">
            {t(
              "Une solution complète qui s'adapte à votre restaurant et évolue avec votre business",
              "A complete solution that adapts to your restaurant and grows with your business"
            )}
          </p>
        </div>

        {/* Main Features Showcase */}
        <div className="mb-20">
          {/* Feature Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {mainFeatures.map((feature, index) => (
              <button
                key={feature.id}
                onClick={() => setActiveFeature(index)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeFeature === index
                    ? 'bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] text-white shadow-lg scale-105'
                    : 'bg-[var(--surface)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--surface-light)]'
                }`}
              >
                <i className={`${feature.icon} mr-2`}></i>
                {feature.shortDesc}
              </button>
            ))}
          </div>

          {/* Active Feature Display */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Feature Info */}
            <div className="space-y-6 animate-slide-in-left">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[var(--primary)]/10 to-[var(--accent)]/10 border border-[var(--primary)]/20 rounded-full">
                <i className={`${mainFeatures[activeFeature].icon} text-[var(--primary)] mr-2`}></i>
                <span className="text-sm font-medium text-[var(--primary)]">
                  {mainFeatures[activeFeature].title}
                </span>
              </div>
              
              <h3 className="text-3xl font-bold text-[var(--text-primary)]">
                {mainFeatures[activeFeature].title}
              </h3>
              
              <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                {mainFeatures[activeFeature].description}
              </p>
              
              <div className="space-y-3">
                {mainFeatures[activeFeature].features.map((item, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-[var(--primary)] rounded-full mr-3"></div>
                    <span className="text-[var(--text-primary)]">{item}</span>
                  </div>
                ))}
              </div>
              
              <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] text-white font-semibold rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                <span>{t("En savoir plus", "Learn more")}</span>
                <i className="fas fa-arrow-right ml-2"></i>
              </button>
            </div>

            {/* Feature Visual */}
            <div className="animate-slide-in-right">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-[var(--primary)]/20 to-[var(--accent)]/20 rounded-3xl blur-xl"></div>
                <div className="relative modern-card p-6 overflow-hidden">
                  <img 
                    src={mainFeatures[activeFeature].image}
                    alt={mainFeatures[activeFeature].title}
                    className="w-full h-auto rounded-xl transform hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)]/50 to-transparent rounded-xl"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Features Grid */}
        <div className="animate-fade-in-up">
          <h3 className="text-3xl font-bold text-center text-[var(--text-primary)] mb-12">
            {t("Et bien plus encore...", "And much more...")}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalFeatures.map((feature, index) => (
              <div
                key={index}
                className="modern-card p-6 text-center group hover:shadow-xl transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <i className={`${feature.icon} text-2xl text-white`}></i>
                </div>
                
                <h4 className="text-xl font-bold text-[var(--text-primary)] mb-3">
                  {feature.title}
                </h4>
                
                <p className="text-[var(--text-secondary)] text-sm mb-4 leading-relaxed">
                  {feature.description}
                </p>
                
                <div className="pt-4 border-t border-[var(--border)]">
                  <div className="text-2xl font-bold gradient-text-modern">
                    {feature.metric}
                  </div>
                  <div className="text-xs text-[var(--text-muted)]">
                    {feature.metricLabel}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Integration Showcase */}
        <div className="mt-20 text-center animate-fade-in-up">
          <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-8">
            {t("Intégrations disponibles", "Available integrations")}
          </h3>
          
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
            {[
              { icon: "fab fa-stripe", name: "Stripe" },
              { icon: "fab fa-paypal", name: "PayPal" },
              { icon: "fas fa-envelope", name: "Email" },
              { icon: "fab fa-whatsapp", name: "WhatsApp" },
              { icon: "fab fa-facebook", name: "Facebook" },
              { icon: "fab fa-instagram", name: "Instagram" },
              { icon: "fab fa-google", name: "Google" },
              { icon: "fas fa-chart-bar", name: "Analytics" }
            ].map((integration, index) => (
              <div key={index} className="flex items-center space-x-2 text-[var(--text-muted)]">
                <i className={`${integration.icon} text-xl`}></i>
                <span className="text-sm font-medium">{integration.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}