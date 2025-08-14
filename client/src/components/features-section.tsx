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
    <section id="features" className="py-20 bg-dark-700">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-6">
            {t("Fonctionnalités clés", "Key Features")}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t(
              "Une solution complète pour digitaliser votre restaurant et augmenter vos revenus",
              "A complete solution to digitize your restaurant and increase your revenue"
            )}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="glass-card p-8 rounded-xl hover-lift">
              <div className="w-16 h-16 bg-primary-gradient rounded-xl flex items-center justify-center mb-6">
                <i className={`${feature.icon} text-white text-2xl`}></i>
              </div>
              <h3 className="text-2xl font-poppins font-semibold mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
