import { useLanguage } from "./language-provider";

export function CoreFeaturesSection() {
  const { t } = useLanguage();

  const sellOnlineFeatures = [
    {
      title: t("Système de commande gratuit", "Free ordering system"),
      description: t("Lancez votre système de commande en ligne", "Launch your online ordering system")
    },
    {
      title: t("Menu temps réel", "Real-time menu"),
      description: t("Modifiez votre menu instantanément", "Update your menu instantly")
    },
    {
      title: t("Solutions mobiles", "Mobile solutions"),
      description: t("Applications natives iOS et Android", "Native iOS and Android apps")
    }
  ];

  const gainCustomersFeatures = [
    {
      title: t("Marketing Tools", "Marketing Tools"),
      description: t("Outils intégrés pour promouvoir votre restaurant", "Built-in tools to promote your restaurant")
    },
    {
      title: t("Loyalty Program", "Loyalty Program"),
      description: t("Fidélisez vos clients avec des récompenses", "Retain customers with rewards")
    },
    {
      title: t("SEO Setup", "SEO Setup"),
      description: t("Optimisation pour les moteurs de recherche", "Search engine optimization")
    }
  ];

  const moreFeatures = [
    {
      title: t("Livraisons", "Delivery Management"),
      description: t("Gérez vos livraisons efficacement", "Manage deliveries efficiently"),
      icon: "fas fa-truck"
    },
    {
      title: t("Paiements", "Payment Processing"),
      description: t("Intégration sécurisée des paiements", "Secure payment integration"),
      icon: "fas fa-credit-card"
    },
    {
      title: t("Analytics", "Analytics & Reporting"),
      description: t("Analysez vos performances", "Analyze your performance"),
      icon: "fas fa-chart-line"
    },
    {
      title: t("Support Client", "Customer Support"),
      description: t("Support technique disponible 7j/7", "Technical support available 24/7"),
      icon: "fas fa-headset"
    },
    {
      title: t("Intégrations", "Third-party Integrations"),
      description: t("Connectez vos outils favoris", "Connect your favorite tools"),
      icon: "fas fa-plug"
    },
    {
      title: t("Multi-langues", "Multi-language Support"),
      description: t("Servez vos clients dans leur langue", "Serve customers in their language"),
      icon: "fas fa-globe"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-dark-700 to-dark-800 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        {/* Sell Food Online Section */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-6 gradient-text">
              {t("Vendre en ligne", "Sell Food Online")}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {sellOnlineFeatures.map((feature, index) => (
              <div key={index} className="neo-card p-6 rounded-2xl text-center hover-lift group">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary-300 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Gain More Customers Section */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-6 gradient-text">
              {t("Gagnez plus de clients", "Gain More Customers")}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {gainCustomersFeatures.map((feature, index) => (
              <div key={index} className="neo-card p-6 rounded-2xl text-center hover-lift group">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary-300 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* More Features Section */}
        <div>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-6 gradient-text">
              {t("Plus de fonctionnalités", "More Features")}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {moreFeatures.map((feature, index) => (
              <div key={index} className="neo-card p-6 rounded-2xl hover-lift group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-gradient rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <i className={`${feature.icon} text-white`}></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary-300 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <div className="neo-card p-12 rounded-3xl bg-gradient-to-r from-primary-500/10 to-secondary-500/10 border border-primary-500/20">
            <h3 className="text-3xl md:text-4xl font-poppins font-bold mb-6 gradient-text">
              {t("Prêt à faire le prochain pas", "Ready to take the next step")}
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              {t(
                "pour votre activité de restaurant ?",
                "for your restaurant business?"
              )}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary text-lg px-8 py-4 rounded-2xl font-semibold hover-lift">
                {t("Essai gratuit", "Start free trial")}
              </button>
              <button className="btn-secondary text-lg px-8 py-4 rounded-2xl font-semibold hover-lift">
                {t("Nous contacter", "Contact us")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}