import { useLanguage } from "./language-provider";

export function FeaturesSection() {
  const { t } = useLanguage();

  const features = [
    {
      icon: "fas fa-globe",
      title: t("Site de commande", "Ordering Website"),
      description: t(
        "Site web responsive et optimisé pour la conversion avec votre branding",
        "Responsive website optimized for conversion with your branding"
      )
    },
    {
      icon: "fas fa-mobile-alt",
      title: t("Apps iOS/Android", "iOS/Android Apps"),
      description: t(
        "Applications natives avec notifications push et expérience utilisateur premium",
        "Native apps with push notifications and premium user experience"
      )
    },
    {
      icon: "fas fa-chart-line",
      title: t("Back-office", "Back-office"),
      description: t(
        "Interface de gestion complète : commandes, menu, analyses, promotions",
        "Complete management interface: orders, menu, analytics, promotions"
      )
    },
    {
      icon: "fas fa-credit-card",
      title: t("Paiements modernes", "Modern Payments"),
      description: t(
        "Intégration sécurisée avec tous les modes de paiement populaires",
        "Secure integration with all popular payment methods"
      )
    },
    {
      icon: "fas fa-bullhorn",
      title: t("Marketing intégré", "Built-in Marketing"),
      description: t(
        "Outils de fidélisation, promotions et campagnes automatisées",
        "Loyalty tools, promotions and automated campaigns"
      )
    },
    {
      icon: "fas fa-language",
      title: t("International", "International"),
      description: t(
        "Support multi-langues et multi-devises pour vos marchés",
        "Multi-language and multi-currency support for your markets"
      )
    }
  ];

  return (
    <section id="features" className="py-24 bg-gradient-to-b from-dark-700 to-dark-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-10 w-32 h-32 bg-primary-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-secondary-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 bg-primary-500/10 border border-primary-500/20 rounded-full text-sm font-medium text-primary-300 mb-6">
            {t("🎯 Fonctionnalités Avancées", "🎯 Advanced Features")}
          </div>
          <h2 className="text-4xl md:text-6xl font-poppins font-bold mb-6 gradient-text">
            {t("Fonctionnalités clés", "Key Features")}
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            {t(
              "Une solution complète pour digitaliser votre restaurant et augmenter vos revenus avec les dernières technologies",
              "A complete solution to digitize your restaurant and increase your revenue with the latest technology"
            )}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="neo-card p-8 rounded-2xl hover-lift group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-secondary-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 bg-primary-gradient rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <i className={`${feature.icon} text-white text-2xl`}></i>
                </div>
                <h3 className="text-2xl font-poppins font-semibold mb-4 group-hover:text-primary-300 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
